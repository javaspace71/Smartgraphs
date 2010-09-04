// ==========================================================================
// Project:   Smartgraphs.GraphView
// Copyright: ©2010 Concord Consortium
// @author    Richard Klancer <rpk@pobox.com>
// ==========================================================================
/*globals Smartgraphs RaphaelViews */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
Smartgraphs.GraphView = SC.View.extend(
/** @scope Smartgraphs.GraphView.prototype */ {
  
  axesBinding: '*graph.axes',
  seriesListBinding: '*graph.seriesList',
  
  padding: { top: 20, right: 20, bottom: 45, left: 55 },  
  
  childViews: 'graphCanvasView'.w(),
  
  init: function () {
    this._seriesViewsById = {};
    sc_super();
  },
  
  viewDidResize: function () {
    sc_super();
    this.replaceLayer();
  },
  
  coordinatesForPoint: function (x, y) {
    var axes = this.get('axes');
    var xMin = axes.get('xMin'),
        xMax = axes.get('xMax'),
        yMin = axes.get('yMin'),
        yMax = axes.get('yMax');

    var frame = this.get('frame');
    var height = frame.height,
        width  = frame.width;
        
    var padding = this.get('padding');
    
    var plotWidth = width - padding.left - padding.right;
    var plotHeight = height - padding.top - padding.bottom;
    
    var xScale = plotWidth / (xMax - xMin);
    var yScale = plotHeight / (yMax - yMin);
    
    return { 
      x: padding.left + (x - xMin) * xScale,
      y: padding.top + plotHeight - (y - yMin) * yScale
    };
  },
  
  pointForCoordinates: function (x, y) {
    var axes = this.get('axes');
    var xMin = axes.get('xMin'),
        xMax = axes.get('xMax'),
        yMin = axes.get('yMin'),
        yMax = axes.get('yMax');

    var frame = this.get('frame');
    var height = frame.height,
        width  = frame.width;
        
    var padding = this.get('padding');
    
    var plotWidth = width - padding.left - padding.right;
    var plotHeight = height - padding.top - padding.bottom;
    
    var xScale = plotWidth / (xMax - xMin);
    var yScale = plotHeight / (yMax - yMin);
    
    return {
      x: xMin + (x - padding.left) / xScale,
      y: yMin + (padding.top + plotHeight - y) / yScale
    };
  },
  
  _seriesListDidChange: function () {
    var seriesList = this.get('seriesList');
    var series, id;
    var seriesListById = {};
    var seriesToAdd = [], viewsToRemove = [];
    
    // add views for new series
    for (var i = 0, ii = seriesList.get('length'); i < ii; i++) {
      series = seriesList.objectAt(i);
      id = series.get('id');
      
      seriesListById[id] = series;
      
      if (!this._seriesViewsById.hasOwnProperty(id)) {
        this._addViewForSeries(series);
      }
    }
    
    // remove views for no-longer-displayed series
    var oldView;

    for (id in this._seriesViewsById) {
      if (this._seriesViewsById.hasOwnProperty(id)) {
        oldView = this._seriesViewsById[id];
        
        if (!seriesListById[id]) {
          this._removeSeriesView(oldView);
        }
      }
    }
  }.observes('*seriesList.[]'),

  _addViewForSeries: function (series) {
    var pointsQuery = SC.Query.local(Smartgraphs.DataPoint, { 
      conditions: 'series = {series}',
      series: series,
      orderBy: 'id'
    });
    
    // TODO make this a view class?
    var view = RaphaelViews.RaphaelCollectionView.design({
      exampleView: Smartgraphs.DataPointView,
      graphView: this,
      seriesId: series.get('id'),
      content: Smartgraphs.store.find(pointsQuery),
      // keep this set to YES prevents the collection view from redrawing all the points when re-rendering
      useFastPath: YES
    }).create();
    
    this.get('graphCanvasView').appendChild(view);
    this._seriesViewsById[series.get('id')] = view;
  },
  
  _removeSeriesView: function (view) {
    var seriesId = view.get('seriesId');
    delete this._seriesViewsById[seriesId];
    this.get('graphCanvasView').removeChild(view);
  },
  
  graphCanvasView: RaphaelViews.RaphaelCanvasView.design({
    axesBinding: '.parentView.axes',
    
    displayProperties: 'axes.xMin axes.xMax axes.yMin axes.yMax'.w(),
    
    childViews: 'axesView'.w(),
      
    axesView: RaphaelViews.RaphaelView.design({
      axesBinding: '.parentView.parentView.axes',      
      paddingBinding: '.parentView.parentView.padding',
      
      childViews: 'xLabelView yLabelView xAxisView yAxisView eventSurface'.w(),
      
      eventSurface: RaphaelViews.RaphaelView.design({
        axesBinding: '.parentView.parentView.parentView*axes',      
        shouldNotifyControllerBinding: '.parentView.parentView.parentView.shouldNotifyController',
        controllerBinding: '.parentView.parentView.parentView.controller',
        
        renderCallback: function (raphaelCanvas, xLeft, yTop, plotWidth, plotHeight) {          
          return raphaelCanvas.rect(xLeft, yTop, plotWidth, plotHeight).attr({
            fill: '#ffffff', stroke: '#ffffff', opacity: 0.7 
          });
        },
        
        render: function (context, firstTime) {
          var frame = this.getPath('parentView.parentView.frame');
          var padding = this.getPath('parentView.parentView.parentView.padding');

          var xLeft = frame.x + padding.left;
          var yTop = frame.y + padding.top;
          var plotWidth = frame.width - padding.left - padding.right;
          var plotHeight = frame.height - padding.top - padding.bottom;
          
          if (firstTime) {
            context.callback(this, this.renderCallback, xLeft, yTop, plotWidth, plotHeight);
          }
          else {       
            var rect = context.raphael();
            rect.attr({x: xLeft, y: yTop, width: plotWidth, height: plotHeight});
          }
        },
        
        pointForEvent: function (e) {
          var graphOffset = this.getPath('parentView.parentView').$().offset();
          var x = e.pageX - graphOffset.left;
          var y = e.pageY - graphOffset.top;
          var graphView = this.getPath('parentView.parentView.parentView');
          return graphView.pointForCoordinates(x, y);
        },

        mouseDown: function (evt) {
          if (this.get('shouldNotifyController')) {
            var point = this.pointForEvent(evt);
            return this.get('controller').inputAreaMouseDown(point.x, point.y);
          }
          return YES;
        },

        mouseDragged: function (evt) {
          if (this.get('shouldNotifyController')) {
            var point = this.pointForEvent(evt);
            return this.get('controller').inputAreaMouseDragged(point.x, point.y);
          }
          return YES;
        },

        mouseUp: function (evt) {
          if (this.get('shouldNotifyController')) {
            var point = this.pointForEvent(evt);
            return this.get('controller').inputAreaMouseUp(point.x, point.y);
          }
          return YES;
        }       
      }),
      
      xLabelView: RaphaelViews.RaphaelView.design({
        axesBinding: '.parentView.parentView.parentView.axes',
        displayProperties: 'axes.xLabel'.w(),
        
        render: function (context, firstTime) {
          if (!firstTime) this.drawLabel();
        },
        
        didCreateLayer: function () {
          this.invokeLater(this.drawLabel);
        },
        
        drawLabel: function () {
          if (this._label) this._label.remove();
          
          var xLabelText = this.getPath('axes.xLabel');
          var padding = this.getPath('parentView.parentView.parentView.padding');
          var frame = this.getPath('parentView.parentView.parentView.frame');

          this._label = this.get('raphaelCanvas').text( (padding.left + frame.width - padding.right) / 2, frame.height - 15, xLabelText).attr({font: "14px Arial, sans-serif"});
        }
      }),

      yLabelView: RaphaelViews.RaphaelView.design({
        axesBinding: '.parentView.parentView.parentView.axes',
        displayProperties: 'axes.yLabel'.w(),
        
        render: function (context, firstTime) {
          if (!firstTime) this.drawLabel();
        },
        
        didCreateLayer: function () {
          this.invokeLater(this.drawLabel);
        },
        
        drawLabel: function () {
          if (this._label) this._label.remove();
          
          var yLabelText = this.getPath('axes.yLabel');
          var padding = this.getPath('parentView.parentView.parentView.padding');
          var frame = this.getPath('parentView.parentView.parentView.frame');

          this._label = this.get('raphaelCanvas').text( 15, (padding.top + frame.height - padding.bottom) / 2, yLabelText).attr({font: "14px Arial, sans-serif"}).rotate(270);
        }
      }),
      
      xAxisView: Smartgraphs.AxisView.design({
        axesBinding: '.parentView.parentView.parentView.axes',
        type: 'x'
      }),
      
      yAxisView: Smartgraphs.AxisView.design({
        axesBinding: '.parentView.parentView.parentView.axes',
        type: 'y'
      })
    })
  })
});

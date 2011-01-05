// ==========================================================================
// Project:   Smartgraphs.ACTIVITY
// Copyright: ©2010 Concord Consortium
// @author    Richard Klancer <rpk@pobox.com>
// ==========================================================================
/*globals Smartgraphs */


/** @class

  Superstate representing that the application is running an Activity.

  @extends SC.State
  @version 0.1
*/

Smartgraphs.ACTIVITY = SC.State.extend(
  /** @scope Smartgraphs.ACTIVITY.prototype */ {
  
  initialSubstate: 'ACTIVITY_PAGE_START',
  
  enterState: function() {
    Smartgraphs.sessionController.beginSession();
    Smartgraphs.appWindowController.showActivityView();
  },

  exitState: function () {
    Smartgraphs.activityController.cleanup();
    Smartgraphs.sessionController.endSession();
  },
  
  
  ACTIVITY_PAGE_START: SC.State.design({
    enterState: function () {
      Smartgraphs.activityStepController.set('content', Smartgraphs.activityPageController.get('firstStep'));
      this.gotoState('ACTIVITY_STEP');
    }
  }),
  
  
  ACTIVITY_STEP: SC.State.plugin('Smartgraphs.ACTIVITY_STEP'),
  
  
  ACTIVITY_STEP_SUBMITTED: SC.State.plugin('Smartgraphs.ACTIVITY_STEP_SUBMITTED'),
  
  
  ACTIVITY_PAGE_DONE: SC.State.design({
    
    enterState: function() {    
      if (Smartgraphs.activityPagesController.get('isLastPage')) {
        this.gotoState('ACTIVITY_DONE');
      }
      else {
        Smartgraphs.activityController.set('canGotoNextPage', YES);
      }
    },

    exitState: function() {
      Smartgraphs.activityController.set('canGotoNextPage', NO);
      Smartgraphs.activityPageController.cleanup();
    },

    gotoNextPage: function () {
      Smartgraphs.activityPagesController.selectNextPage();
      this.gotoState('ACTIVITY_PAGE_START');
    }
  }),


  // ..........................................................
  // ACTIONS
  //
  
  /**
    Open author's view of the currently running activity.
  */
  openAuthorView: function () {
    this.gotoState('AUTHOR');
    return YES;
  },
  
  /**
    Executes if openActivity action is sent within the ACTIVITY state. Instructs the LOADING_ACTIVITY state to switch
    back to the ACTIVITY state (rather than AUTHOR) when the new activity is loaded. Returns NO so that the main
    openActivity handler (defined in the READY state) is also called, thereby actually loading the activity.
  */
  openActivity: function () {
    Smartgraphs.loadingActivityController.set('openAuthorViewAfterLoading', NO);
    return NO;    // let READY handle the rest.
  },
  
  /** 
    Create a LineThroughPoints with the name lineName in the current session. Takes two HighlightedPoints as the 
    points through which to draw the line.
    
    The LineThroughPoints is not automatically added to a graph.
    
    This method does nothing if there is no dataset with the passed name
    
    @param context
    @param args
    
    @param {String} args.firstPoint
      The name of one HighlightedPoint annotation.
    @param {String} args.secondPoint
      The name of the other HighlightedPoint annotation.      
    @param {String} args.lineName
      The name given to the LineThroughPoints annotation which will be created.
    @param {String} args.color
      The RGB color definition for the color to render the line.
  */
  createLineThroughPoints: function (context, args) {
    var p1 = Smartgraphs.activityObjectsController.findAnnotation(args.firstPoint).get('point');
    var p2 = Smartgraphs.activityObjectsController.findAnnotation(args.secondPoint).get('point');   
    var color = args.color || "#000000";
    
    // set points (a relation) using ids rather than objects, because createAnnotation works like createRecord
    // in that regard (it works on the datahash underlying the record)
    var lineThroughPoints = 
      Smartgraphs.activityObjectsController.createAnnotation(Smartgraphs.LineThroughPoints, args.lineName, { 
        point1: p1.get('id'),
        point2: p2.get('id'),
        color: color
      });
    return YES;
  },

  /** 
    Create an Arrow annotation with the name arrowName in the current session. Takes two HighlightedPoints as the
    defining points; the arrow will run from the height (y-value) of the first point vertically to the second
    point.
    
    The Arrow is not automatically added to a graph.
    
    @param context
    @param args
    
    @param {String} args.firstPoint
      The name of one HighlightedPoint annotation.
    @param {String} args.secondPoint
      The name of the other HighlightedPoint annotation.      
    @param {String} args.arrowName
      The name given to the session-scoped Arrow annotation which will be created.
    @param {String} [args.color='#000000']
      The RGB color definition for the color to render the line.
  */
  createRiseArrow: function (context, args) {
    var p1 = Smartgraphs.activityObjectsController.findAnnotation(args.firstPoint).get('point');
    var p2 = Smartgraphs.activityObjectsController.findAnnotation(args.secondPoint).get('point');    
    var color = args.color || "#000000";
    
    // Reorder the points such that the first point is the leftmost one, i.e. the lower x-value   
    var points = p1.get('x') < p2.get('x') ? [p1, p2] : [p2, p1];
  
    var riseArrow = 
      Smartgraphs.activityObjectsController.createAnnotation(Smartgraphs.Arrow, args.arrowName, { 
        point1: points[0].get('id'),
        point2: points[1].get('id'),
        color: color,
        isVertical: YES,
        isClockwise: YES,
        label: 'Rise',
        labelUnitKey: 'yLabelAbbreviated'
      });
    return YES;
  },

  /** 
    Create an Arrow annotation with the name arrowName in the current session. Takes two HighlightedPoints as the
    defining points; the arrow will run from the first point horizontally to the x-value of the second
    point.
    
    The Arrow is not automatically added to a graph.
    
    @param context
    @param args
    
    @param {String} args.firstPoint
      The name of one HighlightedPoint annotation.
    @param {String} args.secondPoint
      The name of the other HighlightedPoint annotation.      
    @param {String} args.arrowName
      The name given to the session-scoped Arrow annotation which will be created.
    @param {String} [args.color='#000000']
      The RGB color definition for the color to render the line.
  */
  createRunArrow: function (context, args) {
    var p1 = Smartgraphs.activityObjectsController.findAnnotation(args.firstPoint).get('point');
    var p2 = Smartgraphs.activityObjectsController.findAnnotation(args.secondPoint).get('point');    
    var color = args.color || "#000000";
    
    // Reorder the points such that the first point is the leftmost one, i.e. the lower x-value   
    var points = p1.get('x') < p2.get('x') ? [p1, p2] : [p2, p1];
    
    var runArrow = 
      Smartgraphs.activityObjectsController.createAnnotation(Smartgraphs.Arrow, args.arrowName, { 
        point1: points[0].get('id'),
        point2: points[1].get('id'),
        color: color,
        isHorizontal: YES,
        isClockwise: YES,
        label: 'Run',
        labelUnitKey: 'xLabelAbbreviated'
      });
    return YES;
  },
  
  /** 
    Create an IndicatingArrow Annotation with the name arrowName in the current session, pointing
    at a specific dataPoint.
    
    @param context
    @param args
    
    @param {String} args.arrowName
      The name for this annotation
    @param {Smartgraphs.DataPoint} args.point
      The data point the arrow will indicate.
    @param {String} [args.color='#cc0000']
      The color of the arrow.
    @param {Number} [args.angle=335]
    
  */
  createIndicatingArrowFromDataPoint: function (context, args) {
    // TODO
    
    // var indicator = 
    //   Smartgraphs.activityObjectsController.createAnnotation(Smartgraphs.IndicatingArrow, args.arrowName, {
    //     dataPoint: args.point.get('id'),
    //     pointAngle: args.angle,
    //     color: args.color
    //   });
    // return YES;
  },
  
  /** 
    Create an IndicatingArrow Annotation with the name arrowName in the current session, pointing
    at a specific HighlightedPoint.
    
    @param context
    @param args
    
    @param {String} args.arrowName
      The name for this annotation
    @param {String} args.point
      The name of the HighlightedPoint annotation the arrow will indicate
    @param {String} [args.color='#cc0000']
      The color of the arrow.
    @param {Number} [args.angle=335]
    
  */
  createIndicatingArrowFromHighlightedPoint: function (context, args) {
    var hp = Smartgraphs.activityObjectsController.findAnnotation(args.point);
    var indicator = 
      Smartgraphs.activityObjectsController.createAnnotation(Smartgraphs.IndicatingArrow, args.arrowName, {
        annotation: hp.get('id'),
        pointAngle: args.angle || 335,
        color: args.color || '#cc0000',
        length: args.length || 40
      });
    return YES;
  },
  
  /** 
    Create an IndicatingArrow Annotation with the name arrowName in the current session, pointing
    at a specific set of coordinates.
    
    @param context
    @param args
    
    @param {String} args.arrowName
      The name for this annotation
    @param {Number} args.x
      The x-coordinate of the point being indicated
    @param {Number} args.y
      The y-coordinate of the point being indicated
    @param {String} [args.color='#cc0000']
      The color of the arrow.
    @param {Number} [args.angle=335]
    @param {Number} [args.length=40]
    
  */
  createIndicatingArrowFromCoordinates: function (context, args) {
    var indicator = 
      Smartgraphs.activityObjectsController.createAnnotation(Smartgraphs.IndicatingArrow, args.arrowName, {
        specificX: args.x,
        specificY: args.y,
        pointAngle: args.angle || 335,
        color: args.color || '#cc0000',
        length: args.length || 40
      });
    return YES;
  },
  
  /**
    Create a BracketArc Annotation with the name bracketName in the current session, pointing at two
    specific points defined by coordinates.
    
    @param context
    @param args
    
    @param {String} args.bracketName
      The name for this annotation
    @param {Number} args.startX
      The x-coordinate of the starting point of the arc
    @param {Number} args.startY
      The y-coordinate of the starting point of the arc
    @param {Number} args.endX
      The x-coordinate of the ending point of the arc
    @param {Number} args.endY
      The y-coordinate of the ending point of the arc
    @param {String} [args.color='#cc0000']
      The color in which the arc should be rendered.
  */
  createBracketArcFromCoordinates: function (context, args) {
    var arc = 
      Smartgraphs.activityObjectsController.createAnnotation(Smartgraphs.BracketArc, args.bracketName, {
        startX: args.startX,
        startY: args.startY,
        endX: args.endX,
        endY: args.endY,
        color: args.color || '#cc0000',
        isClockwise: false
      });
    return YES;
  },
  
  /** 
    Creates a BracketArc annotation intended to sit to the right of the data table and indicate the 
    gap between the Y coordinates of two HighlightedPoints, i.e. the "rise" of the slope between 
    those two points.
    
    @param context
    @param args
    
    @param {String} args.bracketName
      The name for this annotation
    @param {String} args.datasetName
      The name of the dataset which contains the point of the two HighlightedPoint annotations. This
      is used to find the TableController which has that dataset open.
    @param {String} args.point1
      The name of the HighlightedPoint where the arc should start.
    @param {String} args.point2
      The name of the HighlightedPoint where the arc should end.
    @param {String} [args.color='#cc0000']
      The color in which the arc should be rendered.
  */
  createRiseBracket: function (context, args) {
    var controller = Smartgraphs.TableController.controllerForDataset[args.datasetName];
    if (!controller) return YES;
    var hp1 = controller.findAnnotationByName(args.point1);
    var hp2 = controller.findAnnotationByName(args.point2);
    
    var points = controller.getPath('dataset.points');
    var pointOneIndex = points.indexOf(hp1.get('point'));
    var pointTwoIndex = points.indexOf(hp2.get('point'));

    var arc = 
      Smartgraphs.activityObjectsController.createAnnotation(Smartgraphs.BracketArc, args.bracketName, {
        startX: 310,
        startY: (pointOneIndex * 20) + 10,
        endX: 310,
        endY: (pointTwoIndex * 20) + 10,
        color: args.color || '#cc0000',
        isClockwise: (pointOneIndex < pointTwoIndex),
        label: 'Rise'
      });
    return YES;
  },
  
  /** 
    Creates a BracketArc annotation intended to sit to the left of the data table and indicate the 
    gap between the X coordinates of two HighlightedPoints, i.e. the "run" of the slope between 
    those two points.
    
    @param context
    @param args
    
    @param {String} args.bracketName
      The name for this annotation
    @param {String} args.datasetName
      The name of the dataset which contains the point of the two HighlightedPoint annotations. This
      is used to find the TableController which has that dataset open.
    @param {String} args.point1
      The name of the HighlightedPoint where the arc should start.
    @param {String} args.point2
      The name of the HighlightedPoint where the arc should end.
    @param {String} [args.color='#cc0000']
      The color in which the arc should be rendered.
  */
  createRunBracket: function (context, args) {
    var controller = Smartgraphs.TableController.controllerForDataset[args.datasetName];
    
    if (!controller) return YES;
    var hp1 = controller.findAnnotationByName(args.point1);
    var hp2 = controller.findAnnotationByName(args.point2);
    
    var points = controller.getPath('dataset.points');
    var pointOneIndex = points.indexOf(hp1.get('point'));
    var pointTwoIndex = points.indexOf(hp2.get('point'));

    var arc = 
      Smartgraphs.activityObjectsController.createAnnotation(Smartgraphs.BracketArc, args.bracketName, {
        startX: 40,
        startY: (pointOneIndex * 20) + 10,
        endX: 40,
        endY: (pointTwoIndex * 20) + 10,
        color: args.color ? args.color : '#cc0000',
        isClockwise: (pointOneIndex > pointTwoIndex),
        label: 'Run'
      });
    return YES;
  },
  
  /**
    For the named annotation, toggle the isHighlighted property. (If truthy, set to false; if falsy, set to true.)
    
    @param context
    @param args
    
    @param {String} args.annotationName
      The name of the Annotation whose isHighlighted property will be toggled.
  */
  toggleAnnotationHighlight: function (context, args) {
    var annotation = Smartgraphs.activityObjectsController.findAnnotation(args.annotationName);
    annotation.toggleProperty('isHighlighted');
    return YES;
  }

}) ;

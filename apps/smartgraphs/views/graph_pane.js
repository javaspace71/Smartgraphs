// ==========================================================================
// Project:   Smartgraphs.GraphPane
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Smartgraphs RaphaelViews */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
Smartgraphs.GraphPane = SC.View.extend(
/** @scope Smartgraphs.GraphPane.prototype */ {

  childViews: 'animationChannelView graphView controlsContainer'.w(),
  
  // MUST come before graphView
  animationChannelView: SC.View.design({
    
    isVisibleBinding:          '.parentView.showAnimation',
    backgroundImageURLBinding: '.parentView.backgroundImageURL',

    layout: { left: 10, top: 15, width: Smartgraphs.animationTool.get('channelWidth'), bottom: 0 },

    displayProperties: ['backgroundImageURL'],
    
    render: function (context, firstTime) {      
      sc_super();
      if (!firstTime) {
        this._setBackgroundImage(this.get('backgroundImageURL'));
      }
    },
    
    didCreateLayer: function () {
      this._setBackgroundImage(this.get('backgroundImageURL'));
    },
    
    _setBackgroundImage: function (url) {
      var image = url ? ['url(', url, ')'].join('') : '';
      this.$().css('backgroundImage', image);
    }    
  }),
  
  graphView: Smartgraphs.GraphView.design({
    graphControllerBinding: '.parentView.graphController',
    showAnimationBinding:   '.parentView.showAnimation',
    staticImagesBinding: '.parentView.staticImages'
  }),
  
  controlsContainer: SC.ContainerView.design({
    layout: { bottom: 0, height: 0 }
  }),
  
  controlsNowShowingDidChange: function () {
    var nowShowing = this.get('controlsNowShowing'),
        bottom = 0,
        height = 0;
    
    if (nowShowing) {
      bottom = 35;
      height = 35;
    }
    
    this.get('animationChannelView').adjust('bottom', bottom);
    this.get('graphView').adjust('bottom', bottom);
    this.get('controlsContainer').adjust('height', height);
    this.setPath('controlsContainer.nowShowing', nowShowing);
  }.observes('controlsNowShowing')

});

// ==========================================================================
// Project:   Smartgraphs.guidePagesController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Smartgraphs */

/** @class

  (Document Your Controller Here)

  @extends SC.ArrayController
*/
Smartgraphs.guidePagesController = SC.ArrayController.create(
/** @scope Smartgraphs.guidePagesController.prototype */ {

  contentBinding: 'Smartgraphs.guideController.pages',
  allowsMultipleSelection: NO,
  
  indexOfSelectedPage : function () {
    var selection = this.get('selection');
    var indexSet = selection.indexSetForSource(this);
    return (indexSet ? indexSet.toArray().objectAt(0) : undefined);
  }.property('selection', '[]').cacheable(),

  selectFirstPage: function () {
    if (this.get('length') > 0) {
      this.selectObject(this.objectAt(0));
    }
  },
  
  selectNextPage: function () {
    var index = this.get('indexOfSelectedPage');
    if (index+1 < this.get('length')) {
      this.selectObject(this.objectAt(index+1));
    }
  }
  
}) ;

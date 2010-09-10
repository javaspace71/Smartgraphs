// ==========================================================================
// Project:   Smartgraphs.ACTIVITY_LOADING_STEP
// Copyright: ©2010 Concord Consortium
// @author    Richard Klancer <rpk@pobox.com>
// ==========================================================================
/*globals Smartgraphs */

/** @class
  
  @extends SC.Responder
  @version 0.1
*/

sc_require('states/activity');
sc_require('states/mixins/resource_loader');

Smartgraphs.ACTIVITY_LOADING_STEP = SC.Responder.create(Smartgraphs.ResourceLoader,
/** @scope Smartgraphs.ACTIVITY_LOADING_STEP.prototype */ {
  
  nextResponder: Smartgraphs.ACTIVITY,
  
  masterResource: {
    load: function () { return Smartgraphs.activityStepController.get('content'); }
  },
  
  subordinateResources: [
    { load: function () { return Smartgraphs.store.find(Smartgraphs.activityStepController.get('triggerResponsesQuery')); } },
    { load: function () { return Smartgraphs.store.find(Smartgraphs.activityStepController.get('commandsQuery')); } }
  ],    
  
  didBecomeFirstResponder: function() {
    this.loadResources();
  },
  
  willLoseFirstResponder: function () {
    this.cancelLoading();
  },
  
  resourcesDidLoad: function () {
    Smartgraphs.makeFirstResponder(Smartgraphs.ACTIVITY_STEP);
  },
  
  resourceLoadingError: function () {
    console.error('Error status loading subordinate resource for %s', this.get('masterResource').record.get('id'));
  }
  
  // ..........................................................
  // ACTIONS
  //
  
}) ;

// ==========================================================================
// Project:   Smartgraphs.LEARNER_HOME
// Copyright: ©2010 Concord Consortium
// @author    Richard Klancer <rpk@pobox.com>
// ==========================================================================
/*globals Smartgraphs */

/** @class

  In this state, (possibly) let learners select which activity they go to and whether they go to a activity, lab book, or
  answer sheet for that activity (or something else?)

  @extends SC.Responder
  @version 0.1
*/
Smartgraphs.LEARNER_HOME = SC.Responder.create(
/** @scope Smartgraphs.LEARNER_HOME.prototype */ {

  /**
    The next state to check if this state does not implement the action.
  */
  nextResponder: null,
  
  didBecomeFirstResponder: function() {
    // Called when this state becomes first responder
  },
  
  willLoseFirstResponder: function() {
    // Called when this state loses first responder
  },
  
  // ..........................................................
  // EVENTS
  //
  
  // add event handlers here
  someAction: function() {
    
  }
  
}) ;

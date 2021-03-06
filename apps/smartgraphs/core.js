// ==========================================================================
// Project:   Smartgraphs
// Copyright: ©2013 Concord Consortium
// Author:    Richard Klancer <rpk@pobox.com>
// ==========================================================================
/*global Smartgraphs:true*/
/*jshint unused: false*/

// set to YES before building a production release
window.isProduction = NO;

/** @namespace

  Smaht Graphs. Wicked Smaht Graphs!

  @extends SC.Application
*/
Smartgraphs = SC.Application.create(
  /** @scope Smartgraphs.prototype */ {

  NAMESPACE: 'Smartgraphs',
  VERSION: '0.1.0',

  // Only attempt to read data from JSON documents with doc.data_format_version that matches the version below
  DATA_FORMAT_VERSION: 6,

  rootStore: function () {
    var ret = Smartgraphs.store;
    while (ret.get('parentStore')) {
      ret = ret.get('parentStore');
    }
    return ret;
  }.property(),

  // Add global constants or singleton objects here
  _nextGuid: 1000,
  getNextGuid: function () {
    return this._nextGuid++;
  },

  sendActionToGraphControllers: function (action, context, args) {
    var ret = [];
    ret.push( Smartgraphs.firstGraphController.sendAction.apply(Smartgraphs.firstGraphController, arguments) );
    ret.push( Smartgraphs.secondGraphController.sendAction.apply(Smartgraphs.secondGraphController, arguments) );
    return ret;
  },

  sendActionToTableControllers: function (action, context, args) {
    var ret = [];
    ret.push( Smartgraphs.firstTableController.sendAction.apply(Smartgraphs.firstTableController, arguments) );
    ret.push( Smartgraphs.secondTableController.sendAction.apply(Smartgraphs.secondTableController, arguments) );
    return ret;
  },

  // DEBUG AND ACTIVITY NAVIGATION SETTINGS

  // whether to trace statechart actions
  trace:          ! window.isProduction,

  // whether to log data source contents and actions (somewhat obsolete atm)
  logDataSource:  ! window.isProduction,

  // hide the navigable activity outline in production and show in development, unless overridden
  showOutline:    typeof window.showOutline === 'undefined' ? (! window.isProduction) : window.showOutline,

  // hide the "Edit" button by default in production, show by default in dev, unless overridden
  // (Edit button allows navigation of the activity using the outline)
  showEditButton: typeof window.showEditButton === 'undefined' ? (! window.isProduction) : window.showEditButton,

  // hide the "Home" button by default
  // (Home button allows return to home page, by default index.html)
  showHomeButton: typeof window.showHomeButton === 'undefined' ? NO : window.showHomeButton,

  // "Home page" location, used by the Home button. By default, /index.html
  activityHome:   typeof window.activityHome === 'undefined' ? '/index.html' : window.activityHome,

  // whether to show a spinner between each page
  showSpinner:    !! window.showSpinner,

  // whether to use large submit and next buttons
  buttonControlSize: !! window.showLargeButtons ? SC.HUGE_CONTROL_SIZE : SC.REGULAR_CONTROL_SIZE,
  buttonHeight:      !! window.showLargeButtons ? 30 : 24,

  // whether user should be alerted with a popup when they navigate away during an activity
  warnUserBeforeExiting: typeof window.warnUserBeforeExiting === 'undefined' ? YES : window.warnUserBeforeExiting

});

SC.CONTEXT_MENU_ENABLED = YES;

// Patch SC.platform.touch, which is incorrectly false in Mobile Safari 7. Among other issues, the
// incorrect value causes buggy behavior in SC.ScrollView.
SC.platform.touch = SC.platform.touch || 'ontouchstart' in document.documentElement;

if (! window.isProduction) {
  SC.ExceptionHandler = null;
}

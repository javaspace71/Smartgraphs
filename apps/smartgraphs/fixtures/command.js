// ==========================================================================
// Project:   Smartgraphs.Command Fixtures
// Copyright: ©2010 Concord Consortium
// @author    Richard Klancer <rpk@pobox.com>
// ==========================================================================
/*globals Smartgraphs */

sc_require('models/command');

Smartgraphs.Command.FIXTURES = [
  
  { url: 
      '/backend/command/1/show-single-pane/',
    name: 
      'showSinglePane',
    description:
      'Set the right-side display to show a single pane.',
    actionName:
      'showSinglePane',
    literalArgs:
      {},
    substitutedArgs:
      {}
  },
  
  
  { url: 
      '/backend/command/2/show-split-pane/',
    name: 
      'showSplitPane',
    description:
      'Set the right-side display to show two panes.',
    actionName:
      'showSplitPane',
    literalArgs:
      {},
    substitutedArgs:
      {}
  },


  { url: 
      '/backend/command/3/show-image/',
    name: 
      'showFirstPaneImage',
    description:
      'Set the right-side display to show an image in the first (or top) pane.',
    actionName:
      'showImage',
    literalArgs: {
      pane: 'first'
    },
    substitutedArgs:
      {}
  },

  
  { url: 
      '/backend/command/4/show-graph/',
    name: 
      'showGraph',
    description:
      'Set the right-side display to show a graph.',
    actionName:
      'showGraph',
    literalArgs:
      {},
    substitutedArgs:
      {}
  },
  
  
  { url: 
      '/backend/command/5/enable-submission/',
    name: 
      'enableSubmission',
    description:
      'Allows the user to submit his or her work on this step',
    actionName:
      'enableSubmission',
    literalArgs: 
      {},
    substitutedArgs:
      {}
  },
  
  
  { url: 
      '/backend/command/6/finish-step/',
    name: 
      'finishGuideStep',
    description:
      'Finishes this Guide step.',
    actionName:
      'finishGuideStep',
    literalArgs: 
      {},
    substitutedArgs:
      {}
  },
  
  
  { url: 
      '/backend/command/7/enable-prediction-graph-input/',
    name: 
      'enablePredictionGraphInput',
    description:
      'Open up the prediction graph.',
    actionName:
      'enablePredictionGraphInput',
    literalArgs: 
      {},
    substitutedArgs:
      {}
  },
  
  
  { url: 
      '/backend/command/8/goto-step/',
    name: 
      'openGuideStep',
    description:
      'Open a new guide step.',
    actionName:
      'openGuideStep',
    literalArgs: 
      {},
    substitutedArgs:
      {}
  },
  
  
  { url: 
      '/backend/command/9/enable-sensor-input/',
    name: 
      'enableSensorInput',
    description:
      'Open the controls that input data from a usb-connected sensor.',
    actionName:
      'enableSensorInput',
    literalArgs: 
      {},
    substitutedArgs:
      {}
  },
  
  
  { url: 
      '/backend/command/10/hide-pane/',
    name: 
      'hidePane',
    description:
      'Hide the first or second pane.',
    actionName:
      'hidePane',
    literalArgs: 
      {},
    substitutedArgs:
      {}
  },
  
  
  { url: 
      '/backend/command/11/wait-for-valid-response/',
    name: 
      'waitForValidResponse',
    description:
      'Wait for a valid response before allowing submission.',
    actionName:
      'waitForValidResponse',
    literalArgs: 
      {},
    substitutedArgs:
      {}
  }
  
  
];

// ==========================================================================
// Project:   Smartgraphs.CommandInvocation Fixtures
// Copyright: ©2010 Concord Consortium
// @author    Richard Klancer <rpk@pobox.com>
// ==========================================================================
/*globals Smartgraphs */

sc_require('models/command_invocation');

Smartgraphs.CommandInvocation.FIXTURES = [

  { url: 
      '/backend/guide/1/page/1/step/1/response/1/command/1/single-pane/',
    command:
      '/backend/command/1/show-single-pane/',
    triggerResponse:
      '/backend/guide/1/page/1/step/1/response/1/step-beginning/',
    index:
      1,
    literalArgs:
      {},
    substitutedArgs:
      {}
  },
  
  
  { url: 
      '/backend/guide/1/page/1/step/1/response/1/command/2/show-image/',
    command:
      '/backend/command/3/show-image/',
    triggerResponse:
      '/backend/guide/1/page/1/step/1/response/1/step-beginning/',
    index:
      2,
    literalArgs: { 
      path: sc_static('resources/arrow.jpg')
    },
    substitutedArgs: 
      {}
  },
  
  
  { url: 
      '/backend/guide/1/page/1/step/1/response/1/command/3/finish-step/',
    command:
      '/backend/command/6/finish-step/',
    triggerResponse:
      '/backend/guide/1/page/1/step/1/response/1/step-beginning/',
    index:
      3,
    literalArgs: 
      {},
    substitutedArgs: 
      {}
  },
  
  
  { url: 
      '/backend/guide/1/page/2/step/1/response/1/command/1/split-pane/',
    command:
      '/backend/command/2/show-split-pane/',
    triggerResponse:
      '/backend/guide/1/page/2/step/1/response/1/step-beginning/',
    index:
      1,
    literalArgs:
      {},
    substitutedArgs:
      {}
  },
  
  
  { url: 
      '/backend/guide/1/page/2/step/1/response/1/command/2/show-graph/',
    command:
      '/backend/command/4/show-graph/',
    triggerResponse:
      '/backend/guide/1/page/2/step/1/response/1/step-beginning/',
    index:
      2,
    literalArgs: {
      pane: 'first',
      graphId: 'prediction-away'
    },
    substitutedArgs:
      {}
  },
  
  
  { url: 
      '/backend/guide/1/page/2/step/1/response/1/command/3/enable-submission/',
    command:
      '/backend/command/5/enable-submission/',
    triggerResponse:
      '/backend/guide/1/page/2/step/1/response/1/step-beginning/',
    index:
      3,
    literalArgs: 
      {},
    substitutedArgs:
      {}
  },
  
  
  { url: 
      '/backend/guide/1/page/2/step/1/response/1/command/4/start-input/',
    command:
      '/backend/command/7/enable-prediction-graph-input/',
    triggerResponse:
      '/backend/guide/1/page/2/step/1/response/1/step-beginning/',
    index:
      4,
    literalArgs: {
      pane: 'first',
      seriesId: '/backend/series/1/prediction-away/',
      xMin: 0,
      xMax: 15
    },
    substitutedArgs:
      {}
  },
  
  
  { url: 
      '/backend/guide/1/page/2/step/1/response/2/command/1/goto-step-2/',
    command:
      '/backend/command/8/goto-step/',
    triggerResponse:
      '/backend/guide/1/page/2/step/1/response/2/step-finished/',
    index:
      1,
    literalArgs: {
      stepId: '/backend/guide/1/page/2/step/2/'
    },
    substitutedArgs:
      {}
  },
  
  
  { url: 
      '/backend/guide/1/page/2/step/2/response/1/command/1/show-graph/',
    command:
      '/backend/command/4/show-graph/',
    triggerResponse:
      '/backend/guide/1/page/2/step/2/response/1/step-beginning/',
    index:
      1,
    literalArgs: {
      pane: 'second',
      graphId: 'prediction-toward'
    },
    substitutedArgs:
      {}
  },
      
      
  { url: 
      '/backend/guide/1/page/2/step/2/response/1/command/2/enable-submission/',
    command:
      '/backend/command/5/enable-submission/',
    triggerResponse:
      '/backend/guide/1/page/2/step/2/response/1/step-beginning/',
    index:
      2,
    literalArgs: 
      {},
    substitutedArgs:
      {}
  },
  
  
  { url: 
      '/backend/guide/1/page/2/step/2/response/1/command/3/predict/',
    command:
      '/backend/command/7/enable-prediction-graph-input/',
    triggerResponse:
      '/backend/guide/1/page/2/step/2/response/1/step-beginning/',
    index:
      3,
    literalArgs: {
      pane: 'second',
      seriesId: '/backend/series/2/prediction-toward/',
      xMin: 0,
      xMax: 15
    },
    substitutedArgs:
      {}
  },
  

  { url: 
      '/backend/guide/1/page/3/step/1/response/1/command/1/show-graph/',
    command:
      '/backend/command/4/show-graph/',
    triggerResponse:
      '/backend/guide/1/page/3/step/1/response/1/step-beginning/',
    index:
      1,
    literalArgs: {
      pane: 'first',
      graphId: 'sensor-1'
    },
    substitutedArgs:
      {}
  },
  
  
  { url: 
      '/backend/guide/1/page/3/step/1/response/1/command/2/hide-pane/',
    command:
      '/backend/command/10/hide-pane/',
    triggerResponse:
      '/backend/guide/1/page/3/step/1/response/1/step-beginning/',
    index:
      2,
    literalArgs: {
      pane: 'second'
    },
    substitutedArgs:
      {}
  },
  
  
  { url: 
      '/backend/guide/1/page/3/step/1/response/1/command/3/enable-submission/',
    command:
      '/backend/command/5/enable-submission/',
    triggerResponse:
      '/backend/guide/1/page/3/step/1/response/1/step-beginning/',
    index:
      3,
    literalArgs: 
      {},
    substitutedArgs:
      {}
  },
  
  
  { url: 
      '/backend/guide/1/page/3/step/1/response/1/command/4/start-sensor/',
    command:
      '/backend/command/9/enable-sensor-input/',
    triggerResponse:
      '/backend/guide/1/page/3/step/1/response/1/step-beginning/',
    index:
      4,
    literalArgs: {
      pane: 'first',
      seriesId: '/backend/series/3/sensor/'
    },
    substitutedArgs:
      {}
  },
  
  
  { url: 
      '/backend/guide/1/page/3/step/1/response/2/command/1/goto-step-2/',
    command:
      '/backend/command/8/goto-step/',
    triggerResponse:
      '/backend/guide/1/page/3/step/1/response/2/step-finished/',
    index:
      1,
    literalArgs: {
      stepId: '/backend/guide/1/page/3/step/2/'
    },
    substitutedArgs:
      {}
  },
  
  
  { url: 
      '/backend/guide/1/page/3/step/2/response/1/command/1/wait-for-valid-response/',
    command:
      '/backend/command/11/wait-for-valid-response/',
    triggerResponse:
      'p3s2-do-step-begin',
    index:
      1,
    literalArgs: 
      {},
    substitutedArgs:
      {}
  }
      
];

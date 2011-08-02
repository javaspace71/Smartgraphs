/*globals Smartgraphs */

Smartgraphs.activityDocs = Smartgraphs.activityDocs || {};
Smartgraphs.activityDocs["/shared/what-is-velocity"] =

{
  "data_format_version": 5,
  "activity": {
    "title": "How Fast Am I Moving?",
    "url": "/shared/what-is-velocity",
    "owner": "shared",
    "pages": [
      "/shared/what-is-velocity/page/1",
      "/shared/what-is-velocity/page/2",
      "/shared/what-is-velocity/page/3",
      "/shared/what-is-velocity/page/4",
      "/shared/what-is-velocity/page/5",
      "/shared/what-is-velocity/page/6",
      "/shared/what-is-velocity/page/7",
      "/shared/what-is-velocity/page/8",
      "/shared/what-is-velocity/page/9",
      "/shared/what-is-velocity/page/10",
      "/shared/what-is-velocity/page/11",
      "/shared/what-is-velocity/page/12",
      "/shared/what-is-velocity/page/13",
      "/shared/what-is-velocity/page/14",
      "/shared/what-is-velocity/page/15",
      "/shared/what-is-velocity/page/16",
      "/shared/what-is-velocity/page/17",
      "/shared/what-is-velocity/page/18",
      "/shared/what-is-velocity/page/20"
    ],
    "datasets": [
      "/shared/what-is-velocity/dataset/slope-data"
    ],
    "units": [

    ],
    "axes": [
      "/shared/what-is-velocity/axes/10s",
      "/shared/what-is-velocity/axes/15s",
      "/shared/what-is-velocity/axes/30s",
      "/shared/what-is-velocity/axes/4.5m",
      "/shared/what-is-velocity/axes/5m",
      "/shared/what-is-velocity/axes/15m"
    ],
    "graphs": [
      "/shared/what-is-velocity/graph/freehand-walking-normal",
      "/shared/what-is-velocity/graph/prediction-walking-normal",
      "/shared/what-is-velocity/graph/freehand-walking-slow",
      "/shared/what-is-velocity/graph/prediction-walking-slow",
      "/shared/what-is-velocity/graph/sensor-normal-walking",
      "/shared/what-is-velocity/graph/sensor-result-normal-walking",
      "/shared/what-is-velocity/graph/sensor-slow-walking",
      "/shared/what-is-velocity/graph/sensor-result-slow-walking",
      "/shared/what-is-velocity/graph/slope-graph",
      "/shared/what-is-velocity/graph/slope-graph-analyze"
    ],
    "responseTemplates": [
      "/components/response-template/open",
      "/components/response-template/numeric"
    ]
  },
  "pages": [
    {
      "steps": [
        "/shared/what-is-velocity/page/1/step/1"
      ],
      "name": "Engage",
      "firstStep": "/shared/what-is-velocity/page/1/step/1",
      "introText": "<h1>Introduction</h1><p>The dashboard instrument to the right, called a <i>speedometer</i>, tells us how fast a car is moving.</p><p>The eddy-current speedometer was patented in 1902 by Otto Shultz. Through a complex interaction of wheels, cables, gears, magnets, forces, and electric currents, the speedometer's needle points to a car's current speed.</p><p><b>How can you tell how fast you are moving?</b></p>",
      "url": "/shared/what-is-velocity/page/1",
      "activity": "/shared/what-is-velocity",
      "index": 1
    },
    {
      "steps": [
        "/shared/what-is-velocity/page/2/step/1",
        "/shared/what-is-velocity/page/2/step/2",
        "/shared/what-is-velocity/page/2/step/3",
        "/shared/what-is-velocity/page/2/step/4",
        "/shared/what-is-velocity/page/2/step/5",
        "/shared/what-is-velocity/page/2/step/6"
      ],
      "name": "Predict With Numbers",
      "firstStep": "/shared/what-is-velocity/page/2/step/1",
      "introText": "<h1>Prediction</h1><p>In this activity, you will calculate how fast you are moving while walking. Let's start by predicting how fast you <b>normally</b> walk.</p>",
      "url": "/shared/what-is-velocity/page/2",
      "activity": "/shared/what-is-velocity",
      "index": 2
    },
    {
      "steps": [
        "/shared/what-is-velocity/page/3/step/1"
      ],
      "name": "Predict With Graph (Normal)",
      "firstStep": "/shared/what-is-velocity/page/3/step/1",
      "introText": "<h1>Prediction</h1><p>Draw a graph showing your position over time as you walked from 0 to 4 meters.</b></p>",
      "url": "/shared/what-is-velocity/page/3",
      "activity": "/shared/what-is-velocity",
      "index": 3
    },
    {
      "steps": [
        "/shared/what-is-velocity/page/4/step/1"
      ],
      "name": "Predict With Graph (Slow)",
      "firstStep": "/shared/what-is-velocity/page/4/step/1",
      "introText": "<h1>Prediction</h1><p>The top graph shows your predicted <b>normal</b> walking pace.</p><p>On the bottom graph, <b>predict</b> what <b>slow, steady</b> motion would look like from 0 to 4 meters.</p>",
      "url": "/shared/what-is-velocity/page/4",
      "activity": "/shared/what-is-velocity",
      "index": 4
    },
    {
      "steps": [
        "/shared/what-is-velocity/page/5/step/1"
      ],
      "name": "Normal vs Slow (Predictions)",
      "firstStep": "/shared/what-is-velocity/page/5/step/1",
      "introText": "<h1>Prediction</h1><p>The top graph shows your predicted <b>normal</b> walking pace. The bottom graph shows your predicted <b>slow</b> walking pace.</p><p>What do you observe about your predictions?</p>",
      "url": "/shared/what-is-velocity/page/5",
      "activity": "/shared/what-is-velocity",
      "index": 5
    },
    {
      "steps": [
        "/shared/what-is-velocity/page/6/step/1"
      ],
      "name": "Collect Data (Normal)",
      "firstStep": "/shared/what-is-velocity/page/6/step/1",
      "introText": "<h1>Data Collection</h1><p>You will test your prediction by walking at a <b>normal, steady</b> pace along a straight 4-meter path while using a motion sensor.</p><p><b>Place</b> the sensor at the 0-meter mark.</p><p><b>Stand</b> near the sensor. When you are ready, have your partner <b>click Start</b> to record the data for your movements.</p><p><b>Walk</b> on the path at a <b>normal, steady</b> pace.</p><p><b>Click Clear</b> to try a different normal, steady pace.</p>",
      "url": "/shared/what-is-velocity/page/6",
      "activity": "/shared/what-is-velocity",
      "index": 6
    },
    {
      "steps": [
        "/shared/what-is-velocity/page/7/step/1",
        "/shared/what-is-velocity/page/7/step/2",
        "/shared/what-is-velocity/page/7/step/3",
        "/shared/what-is-velocity/page/7/step/4"
      ],
      "name": "Analyze Data (Normal)",
      "firstStep": "/shared/what-is-velocity/page/7/step/1",
      "introText": "<h1>Data Collection</h1><p>",
      "url": "/shared/what-is-velocity/page/7",
      "activity": "/shared/what-is-velocity",
      "index": 7
    },
    {
      "steps": [
        "/shared/what-is-velocity/page/8/step/1"
      ],
      "name": "Collect Data (Slow)",
      "firstStep": "/shared/what-is-velocity/page/8/step/1",
      "introText": "<h1>Data Collection</h1><p>Now you will try walking at a <b>slow, steady</b> pace.</p><p><b>Place</b> the sensor at the 0-meter mark.</p><p><b>Stand</b> near the sensor. When you are ready, have your partner <b>click Start</b> to record the data for your movements.</p><p><b>Walk</b> on the path at a <b>slow, steady</b> pace.</p>",
      "url": "/shared/what-is-velocity/page/8",
      "activity": "/shared/what-is-velocity",
      "index": 8
    },
    {
      "steps": [
        "/shared/what-is-velocity/page/9/step/1"
      ],
      "name": "Actual vs. Prediction (Normal)",
      "firstStep": "/shared/what-is-velocity/page/9/step/1",
      "introText": "<h1>Data Collection</h1><p>On the top is your predicted position-time graph for normal, steady motion.  Below is your actual position-time graph for normal, steady motion.</p>",
      "url": "/shared/what-is-velocity/page/9",
      "activity": "/shared/what-is-velocity",
      "index": 9
    },
    {
      "steps": [
        "/shared/what-is-velocity/page/10/step/1"
      ],
      "name": "Actual vs. Prediction (Slow)",
      "firstStep": "/shared/what-is-velocity/page/10/step/1",
      "introText": "<h1>Data Collection</h1><p>On the top is your predicted position-time graph for slow, steady motion.  Below is your actual position-time graph for slow, steady motion.</p>",
      "url": "/shared/what-is-velocity/page/10",
      "activity": "/shared/what-is-velocity",
      "index": 10
    },
    {
      "steps": [
        "/shared/what-is-velocity/page/11/step/1"
      ],
      "name": "Normal vs Slow (Actual)",
      "firstStep": "/shared/what-is-velocity/page/11/step/1",
      "introText": "<h1>Data Collection</h1><p>Here is the data you just collected for normal and slow, steady motion.</p>",
      "url": "/shared/what-is-velocity/page/11",
      "activity": "/shared/what-is-velocity",
      "index": 11
    },
    {
      "steps": [
        "/shared/what-is-velocity/page/12/step/1",
        "/shared/what-is-velocity/page/12/step/2",
        "/shared/what-is-velocity/page/12/step/3",
        "/shared/what-is-velocity/page/12/step/4",
        "/shared/what-is-velocity/page/12/step/5",
        "/shared/what-is-velocity/page/12/step/6",
        "/shared/what-is-velocity/page/12/step/7",
        "/shared/what-is-velocity/page/12/step/8",
        "/shared/what-is-velocity/page/12/step/9",
        "/shared/what-is-velocity/page/12/step/10",
        "/shared/what-is-velocity/page/12/step/11",
        "/shared/what-is-velocity/page/12/step/12",
        "/shared/what-is-velocity/page/12/step/13",
        "/shared/what-is-velocity/page/12/step/14",
        "/shared/what-is-velocity/page/12/step/15",
        "/shared/what-is-velocity/page/12/step/16"
      ],
      "name": "Instantaneous Speed",
      "firstStep": "/shared/what-is-velocity/page/12/step/1",
      "introText": "<h1>Analysis</h1><p>Suppose you collected some actual position-time data while walking from 0 to 15 meters and displayed your data to the right. Let's find out how fast you walked during different time intervals.</p><p>First you will pick two points that are next to each other and find the velocity between those points. This calculation will be close to your <b>instantaneous</b> velocity. </p>",
      "url": "/shared/what-is-velocity/page/12",
      "activity": "/shared/what-is-velocity",
      "index": 12
    },
    {
      "steps": [
        "/shared/what-is-velocity/page/13/step/1",
        "/shared/what-is-velocity/page/13/step/1a",
        "/shared/what-is-velocity/page/13/step/2",
        "/shared/what-is-velocity/page/13/step/3",
        "/shared/what-is-velocity/page/13/step/4",
        "/shared/what-is-velocity/page/13/step/5",
        "/shared/what-is-velocity/page/13/step/6",
        "/shared/what-is-velocity/page/13/step/7",
        "/shared/what-is-velocity/page/13/step/8",
        "/shared/what-is-velocity/page/13/step/9",
        "/shared/what-is-velocity/page/13/step/10",
        "/shared/what-is-velocity/page/13/step/11",
        "/shared/what-is-velocity/page/13/step/12",
        "/shared/what-is-velocity/page/13/step/13",
        "/shared/what-is-velocity/page/13/step/14",
        "/shared/what-is-velocity/page/13/step/15",
        "/shared/what-is-velocity/page/13/step/16"
      ],
      "name": "Instantaneous Speed",
      "firstStep": "/shared/what-is-velocity/page/13/step/1",
      "introText": "<h1>Analysis</h1><p>Now you will pick another set of points that are next to each other and find the velocity between those points.</p>",
      "url": "/shared/what-is-velocity/page/13",
      "activity": "/shared/what-is-velocity",
      "index": 13
    },
    {
      "steps": [
        "/shared/what-is-velocity/page/14/step/1"
      ],
      "name": "Instantaneous Speed III",
      "firstStep": "/shared/what-is-velocity/page/14/step/1",
      "introText": "<h1>Analysis</h1><p>Was your velocity the same during the two different time intervals? If not, during which interval were you going faster? Explain how you know.</p>",
      "url": "/shared/what-is-velocity/page/14",
      "activity": "/shared/what-is-velocity",
      "index": 14
    },
    {
      "steps": [
        "/shared/what-is-velocity/page/15/step/1",
        "/shared/what-is-velocity/page/15/step/2",
        "/shared/what-is-velocity/page/15/step/3",
        "/shared/what-is-velocity/page/15/step/4",
        "/shared/what-is-velocity/page/15/step/5"
      ],
      "name": "Average Speed",
      "firstStep": "/shared/what-is-velocity/page/15/step/1",
      "introText": "<h1>Analysis</h1><p>To find the average velocity for the entire trip, you will use the start and end points of the whole trip.</p>",
      "url": "/shared/what-is-velocity/page/15",
      "activity": "/shared/what-is-velocity",
      "index": 15
    },
    {
      "steps": [
        "/shared/what-is-velocity/page/16/step/1",
        "/shared/what-is-velocity/page/16/step/2",
        "/shared/what-is-velocity/page/16/step/3",
        "/shared/what-is-velocity/page/16/step/4",
        "/shared/what-is-velocity/page/16/step/5"
      ],
      "name": "Analyze/Conclusion",
      "firstStep": "/shared/what-is-velocity/page/16/step/1",
      "introText": "<h1>Analysis</h1><p>In this activity, you predicted and confirmed different steady velocities while walking along a straight path.</p>",
      "url": "/shared/what-is-velocity/page/16",
      "activity": "/shared/what-is-velocity",
      "index": 16
    },
    {
      "steps": [
        "/shared/what-is-velocity/page/17/step/1"
      ],
      "name": "Analyze/Conclusion II",
      "firstStep": "/shared/what-is-velocity/page/17/step/1",
      "introText": "<h1>Analysis</h1><p>",
      "url": "/shared/what-is-velocity/page/17",
      "activity": "/shared/what-is-velocity",
      "index": 17
    },
    {
      "steps": [
        "/shared/what-is-velocity/page/18/step/1"
      ],
      "name": "Analyze/Conclusion III",
      "firstStep": "/shared/what-is-velocity/page/18/step/1",
      "introText": "<h1>Analysis</h1><p>",
      "url": "/shared/what-is-velocity/page/18",
      "activity": "/shared/what-is-velocity",
      "index": 18
    },
    {
      "steps": [
        "/shared/what-is-velocity/page/20/step/1"
      ],
      "name": "Conclusion",
      "firstStep": "/shared/what-is-velocity/page/20/step/1",
      "introText": "<h1>Conclusion</h1><p>Congratulations! You have finished the activity.</p>",
      "url": "/shared/what-is-velocity/page/20",
      "activity": "/shared/what-is-velocity",
      "index": 20
    }
  ],
  "steps": [
    {
      "url": "/shared/what-is-velocity/page/1/step/1",
      "activityPage": "/shared/what-is-velocity/page/1",
      "paneConfig": "single",
      "panes": {
        "single": {
          "type": "image",
          "path": "/static/smartgraphs/en/current/resources/images/Animated_Aston_Martin_Speedometer.gif",
          "caption": "CC-BY-SA-3.0 Wikimedia Commons image courtesy Dinesh Advani"
        }
      },
      "beforeText": "<p>Describe another way that you can tell how fast you are moving.</p>",
      "responseTemplate": "/components/response-template/open",
      "afterText": "",
      "startCommands": [
      ],
      "shouldFinishImmediately": false,
      "shouldWaitForSubmissibleResponse": true,
      "submissibilityInspector": {
        "type": "Smartgraphs.FirstResponseFieldInspector"
      },
      "submissibilityCriterion": {
        "gt": [
          { "length": { "strip": "value" } },
          0
        ]
      },
      "triggeredCommands": [

      ],
      "afterSubmissionCommands": [
      ],
      "responseInspector": null,
      "responseBranches": [

      ],
      "defaultBranch": null,
      "isFinalStep": true,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": false,
      "submitButtonTitle": "",
      "nextButtonShouldSubmit": true
    },
    {
      "url": "/shared/what-is-velocity/page/2/step/1",
      "activityPage": "/shared/what-is-velocity/page/2",
      "paneConfig": "single",
      "panes": {
        "single": {
          "type": "image",
          "path": "/static/smartgraphs/en/current/resources/images/walk_the_wight.jpg",
          "caption": "Creative Commons BY-NC-SA 2.0 image courtesy flickr user Auntie P"
        }
      },
      "beforeText": "<p><b>Walk</b> approximately 4 meters at your normal walking pace.</p><p>About how many seconds did it take?</p>",
      "responseTemplate": "/components/response-template/numeric",
      "afterText": "",
      "startCommands": [

      ],
      "shouldFinishImmediately": false,
      "shouldWaitForSubmissibleResponse": true,
      "submissibilityInspector": {
        "type": "Smartgraphs.FirstResponseFieldInspector"
      },
      "submissibilityCriterion": {
        "gt": [
          { "int": { "strip": "value" } },
          0
        ]
      },
      "triggeredCommands": [

      ],
      "afterSubmissionCommands": [
        {
          "action": "setVariable",
          "literalArgs": {
            "variableName": "observed-duration-four-meter-walk",
            "inspectorType": "Smartgraphs.ResponseFieldsInspector",
            "config": { "fieldIndex" : 0 }
          }
        }
      ],
      "responseInspector": {
        "type": "Smartgraphs.FirstResponseFieldInspector"
      },
      "responseBranches": [
        {
          "criterion": {
            "gt": [
              { "int": { "strip": "value" } },
              30
            ]
          },
          "step": "/shared/what-is-velocity/page/2/step/2"
        }
      ],
      "defaultBranch": "/shared/what-is-velocity/page/2/step/3",
      "isFinalStep": false,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": false,
      "submitButtonTitle": "OK",
      "nextButtonShouldSubmit": false
    },
    {
      "url": "/shared/what-is-velocity/page/2/step/2",
      "activityPage": "/shared/what-is-velocity/page/2",
      "paneConfig": "single",
      "panes": {
        "single": {
          "type": "image",
          "path": "/static/smartgraphs/en/current/resources/images/walk_the_wight.jpg",
          "caption": "Creative Commons BY-NC-SA 2.0 image courtesy flickr user Auntie P"
        }
      },
      "beforeText": "<p><i>Please choose a number between 1 and 30.</i></p><p><b>Walk</b> approximately 4 meters at your normal walking pace.</p><p>About how many seconds did it take?</p>",
      "responseTemplate": "/components/response-template/numeric",
      "afterText": "",
      "startCommands": [

      ],
      "shouldFinishImmediately": false,
      "shouldWaitForSubmissibleResponse": true,
      "submissibilityInspector": {
        "type": "Smartgraphs.FirstResponseFieldInspector"
      },
      "submissibilityCriterion": {
        "gt": [
          { "int": { "strip": "value" } },
          0
        ]
      },
      "triggeredCommands": [

      ],
      "afterSubmissionCommands": [
        {
          "action": "setVariable",
          "literalArgs": {
            "variableName": "observed-duration-four-meter-walk",
            "inspectorType": "Smartgraphs.ResponseFieldsInspector",
            "config": { "fieldIndex" : 0 }
          }
        }
      ],
      "responseInspector": {
        "type": "Smartgraphs.FirstResponseFieldInspector"
      },
      "responseBranches": [
        {
          "criterion": {
            "gt": [
              { "int": { "strip": "value" } },
              30
            ]
          },
          "step": "/shared/what-is-velocity/page/2/step/2"
        }
      ],
      "defaultBranch": "/shared/what-is-velocity/page/2/step/3",
      "isFinalStep": false,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": false,
      "submitButtonTitle": "OK",
      "nextButtonShouldSubmit": false
    },
    {
      "url": "/shared/what-is-velocity/page/2/step/3",
      "activityPage": "/shared/what-is-velocity/page/2",
      "paneConfig": "single",
      "panes": {
        "single": {
          "type": "image",
          "path": "/static/smartgraphs/en/current/resources/images/walk_the_wight.jpg",
          "caption": "Creative Commons BY-NC-SA 2.0 image courtesy flickr user Auntie P"
        }
      },
      "beforeText": "<p>Based on your observation that you walked <b>4</b> meters in <b>%@</b> %@, what is your average velocity in meters per second? Remember:</p><blockquote><table cellspacing='2' cellpadding='2' style='text-align:center'><tr><td style='border-width:0px'>average velocity</td><td style='border-width:0px'>=</td><td style='border-width:0px'>total distance<hr/>total time</td></tr></table></blockquote>",
      "responseTemplate": "/components/response-template/numeric",
      "afterText": "<p><i>Round your answer to the nearest tenth.<i></p>",
      "substitutedExpressions": [
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "[0]",
            "variableNames": [ "observed-duration-four-meter-walk" ]
          }
        },
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "[0] == 1 ? 'second' : 'seconds'",
            "variableNames": [ "observed-duration-four-meter-walk" ]
          }
        }
      ],
      "startCommands": [
        {
          "action": "setVariable",
          "literalArgs": {
            "variableName": "velocity-based-on-observed-four-meter-walk",
            "inspectorType": "Smartgraphs.EvaluatorInspector",
            "config": {
              "round" : [
                { "quotient" : [ 4, { "variable": "observed-duration-four-meter-walk" } ] },
                5
              ]
            }
          }
        },
        {
          "action": "setVariable",
          "literalArgs": {
            "variableName": "rounded-velocity-based-on-observed-four-meter-walk",
            "inspectorType": "Smartgraphs.EvaluatorInspector",
            "config": {
              "round": [
                { "variable": "velocity-based-on-observed-four-meter-walk" },
                1
              ]
            }
          }
        }
      ],
      "shouldFinishImmediately": false,
      "shouldWaitForSubmissibleResponse": true,
      "submissibilityInspector": {
        "type": "Smartgraphs.FirstResponseFieldInspector"
      },
      "submissibilityCriterion": {
        "isNumeric": { "strip": "value" }
      },
      "triggeredCommands": [ ],
      "afterSubmissionCommands": [
      ],
      "responseInspector": {
        "type": "Smartgraphs.FirstResponseFieldInspector"
      },
      "responseBranches": [
        {
          "criterion": {
            "equals": [
              {
                "float": { "variable": "rounded-velocity-based-on-observed-four-meter-walk" }
              },
              {
                "round": [ { "float": { "strip" : "value" } }, 1 ]
              }
            ]
          },
          "step": "/shared/what-is-velocity/page/2/step/6"
        }
      ],
      "defaultBranch": "/shared/what-is-velocity/page/2/step/4",
      "isFinalStep": false,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": false,
      "submitButtonTitle": "OK",
      "nextButtonShouldSubmit": false
    },
    {
      "url": "/shared/what-is-velocity/page/2/step/4",
      "activityPage": "/shared/what-is-velocity/page/2",
      "paneConfig": "single",
      "panes": {
        "single": {
          "type": "image",
          "path": "/static/smartgraphs/en/current/resources/images/walk_the_wight.jpg",
          "caption": "Creative Commons BY-NC-SA 2.0 image courtesy flickr user Auntie P"
        }
      },
      "beforeText": "<p>Incorrect. Try again.</p><p>Based on your observation of <b>%@</b> %@ for <b>4</b> meters, what is your average velocity in meters per second? Remember:</p><blockquote><table cellspacing='2' cellpadding='2' style='text-align:center'><tr><td style='border-width:0px'>average velocity</td><td style='border-width:0px'>=</td><td style='border-width:0px'>total distance<hr/>total time</td><td style='border-width:0px'>=</td><td style='border-width:0px'>4 meters<hr/>%@ seconds</td><td style='border-width:0px'>= ? m/s</td></tr></table></blockquote>",
      "responseTemplate": "/components/response-template/numeric",
      "afterText": "<p><i>Round your answer to the nearest tenth.<i></p>",
      "substitutedExpressions": [
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "[0]",
            "variableNames": [ "observed-duration-four-meter-walk" ]
          }
        },
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "[0] == 1 ? 'second' : 'seconds'",
            "variableNames": [ "observed-duration-four-meter-walk" ]
          }
        },
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "[0]",
            "variableNames": [ "observed-duration-four-meter-walk" ]
          }
        }
      ],
      "startCommands": [],
      "shouldFinishImmediately": false,
      "shouldWaitForSubmissibleResponse": true,
      "submissibilityInspector": {
        "type": "Smartgraphs.FirstResponseFieldInspector"
      },
      "submissibilityCriterion": {
        "isNumeric": { "strip": "value" }
      },
      "triggeredCommands": [ ],
      "afterSubmissionCommands": [
      ],
      "responseInspector": {
        "type": "Smartgraphs.FirstResponseFieldInspector"
      },
      "responseBranches": [
        {
          "criterion": {
            "equals": [
              {
                "float": { "variable": "rounded-velocity-based-on-observed-four-meter-walk" }
              },
              {
                "float": { "strip" : "value" }
              }
            ]
          },
          "step": "/shared/what-is-velocity/page/2/step/6"
        }
      ],
      "defaultBranch": "/shared/what-is-velocity/page/2/step/5",
      "isFinalStep": false,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": false,
      "submitButtonTitle": "OK",
      "nextButtonShouldSubmit": false
    },
    {
      "url": "/shared/what-is-velocity/page/2/step/5",
      "activityPage": "/shared/what-is-velocity/page/2",
      "paneConfig": "single",
      "panes": {
        "single": {
          "type": "image",
          "path": "/static/smartgraphs/en/current/resources/images/walk_the_wight.jpg",
          "caption": "Creative Commons BY-NC-SA 2.0 image courtesy flickr user Auntie P"
        }
      },
      "beforeText": "<p>Incorrect.</p><p>If you walked <b>4</b> meters in <b>%@</b> %@, your velocity would be calculated like this:</p><blockquote><table cellspacing='2' cellpadding='2' style='text-align:center'><tr><td style='border-width:0px'>total distance<hr/>total time</td><td style='border-width:0px'>=</td><td style='border-width:0px'>4 meters<hr/>%@ seconds</td><td style='border-width:0px'>=</td><td style='border-width:0px'><b>%@</b> m/s</td></tr></table></blockquote><p>%@</p>",
      "responseTemplate": null,
      "afterText": "",
      "substitutedExpressions": [
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "[0]",
            "variableNames": [ "observed-duration-four-meter-walk" ]
          }
        },
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "[0] == 1 ? 'second' : 'seconds'",
            "variableNames": [ "observed-duration-four-meter-walk" ]
          }
        },
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "[0]",
            "variableNames": [ "observed-duration-four-meter-walk" ]
          }
        },
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "[0]",
            "variableNames": [ "velocity-based-on-observed-four-meter-walk" ]
          }
        },
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "[0] == [1] ? '' : 'Rounded to the nearest tenth, that makes <b>[2]</b> m/s.'",
            "variableNames": [
              "velocity-based-on-observed-four-meter-walk",
              "rounded-velocity-based-on-observed-four-meter-walk",
              "rounded-velocity-based-on-observed-four-meter-walk"
            ]
          }
        }
      ],
      "startCommands": [],
      "shouldFinishImmediately": false,
      "shouldWaitForSubmissibleResponse": true,
      "submissibilityInspector": null,
      "submissibilityCriterion": null,
      "triggeredCommands": [ ],
      "afterSubmissionCommands": [
      ],
      "responseInspector": null,
      "responseBranches": [
      ],
      "defaultBranch": "",
      "isFinalStep": true,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": true,
      "submitButtonTitle": "",
      "nextButtonShouldSubmit": true
    },
    {
      "url": "/shared/what-is-velocity/page/2/step/6",
      "activityPage": "/shared/what-is-velocity/page/2",
      "paneConfig": "single",
      "panes": {
        "single": {
          "type": "image",
          "path": "/static/smartgraphs/en/current/resources/images/walk_the_wight.jpg",
          "caption": "Creative Commons BY-NC-SA 2.0 image courtesy flickr user Auntie P"
        }
      },
      "beforeText": "<p>Correct.</p><p>If you walked <b>4</b> meters in <b>%@</b> %@, your velocity is <b>%@</b> %@.</p><p>%@</p>",
      "responseTemplate": null,
      "afterText": "",
      "substitutedExpressions": [
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "[0]",
            "variableNames": [ "observed-duration-four-meter-walk" ]
          }
        },
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "[0] == 1 ? 'second' : 'seconds'",
            "variableNames": [ "observed-duration-four-meter-walk" ]
          }
        },
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "[0]",
            "variableNames": [ "velocity-based-on-observed-four-meter-walk" ]
          }
        },
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "[0] == 1 ? 'meter per second' : 'meters per second'",
            "variableNames": [ "velocity-based-on-observed-four-meter-walk" ]
          }
        },
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "[0] == [1] ? '' : 'Rounded to the nearest tenth, that makes <b>[2]</b>.'",
            "variableNames": [
              "velocity-based-on-observed-four-meter-walk",
              "rounded-velocity-based-on-observed-four-meter-walk",
              "rounded-velocity-based-on-observed-four-meter-walk"
            ]
          }
        }
      ],
      "startCommands": [],
      "shouldFinishImmediately": false,
      "shouldWaitForSubmissibleResponse": true,
      "submissibilityInspector": null,
      "submissibilityCriterion": null,
      "triggeredCommands": [ ],
      "afterSubmissionCommands": [
      ],
      "responseInspector": null,
      "responseBranches": [
      ],
      "defaultBranch": "",
      "isFinalStep": true,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": true,
      "submitButtonTitle": "",
      "nextButtonShouldSubmit": true
    },
    {
      "url": "/shared/what-is-velocity/page/3/step/1",
      "activityPage": "/shared/what-is-velocity/page/3",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "name": "freehand-walking-normal"
        },
        "bottom": null
      },
      "beforeText": "<p>Hint: You walked <b>4</b> meters in <b>%@</b> %@, so your velocity was <b>%@</b> %@.</p>",
      "responseTemplate": "",
      "afterText": "",
      "substitutedExpressions": [
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "[0]",
            "variableNames": [ "observed-duration-four-meter-walk" ]
          }
        },
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "[0] == 1 ? 'second' : 'seconds'",
            "variableNames": [ "observed-duration-four-meter-walk" ]
          }
        },
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "[0]",
            "variableNames": [ "rounded-velocity-based-on-observed-four-meter-walk" ]
          }
        },
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "[0] == 1 ? 'meter per second' : 'meters per second'",
            "variableNames": [ "rounded-velocity-based-on-observed-four-meter-walk" ]
          }
        }
      ],
      "startCommands": [
        {
          "action": "startFreehandInput",
          "literalArgs": {
            "graphName": "freehand-walking-normal",
            "annotationName": "prediction-normal"
          }
        }
      ],
      "shouldFinishImmediately": false,
      "shouldWaitForSubmissibleResponse": true,
      "submissibilityInspector": {
        "type": "Smartgraphs.SketchLengthInspector",
        "config": {
          "annotationName": "prediction-normal",
          "check": "continuously"
        }
      },
      "submissibilityCriterion": {
        "gt": [
          "value",
          0.1
        ]
      },
      "triggeredCommands": [

      ],
      "afterSubmissionCommands": [

      ],
      "responseInspector": null,
      "responseBranches": [

      ],
      "defaultBranch": null,
      "isFinalStep": true,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": true,
      "submitButtonTitle": "",
      "nextButtonShouldSubmit": true
    },
    {
      "url": "/shared/what-is-velocity/page/4/step/1",
      "activityPage": "/shared/what-is-velocity/page/4",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "name": "prediction-walking-normal"
        },
        "bottom": {
          "type": "graph",
          "name": "freehand-walking-slow"
        }
      },
      "beforeText": "",
      "responseTemplate": "",
      "afterText": "",
      "startCommands": [
        {
          "action": "startFreehandInput",
          "literalArgs": {
            "graphName": "freehand-walking-slow",
            "annotationName": "prediction-slow"
          }
        }
      ],
      "shouldFinishImmediately": false,
      "shouldWaitForSubmissibleResponse": true,
      "submissibilityInspector": {
        "type": "Smartgraphs.SketchLengthInspector",
        "config": {
          "annotationName": "prediction-slow",
          "check": "continuously"
        }
      },
      "submissibilityCriterion": {
        "gt": [
          "value",
          0.1
        ]
      },
      "triggeredCommands": [

      ],
      "afterSubmissionCommands": [

      ],
      "responseInspector": null,
      "responseBranches": [

      ],
      "defaultBranch": null,
      "isFinalStep": true,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": true,
      "submitButtonTitle": "",
      "nextButtonShouldSubmit": true
    },
    {
      "url": "/shared/what-is-velocity/page/5/step/1",
      "activityPage": "/shared/what-is-velocity/page/5",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "name": "prediction-walking-normal"
        },
        "bottom": {
          "type": "graph",
          "name": "prediction-walking-slow"
        }
      },
      "beforeText": "<p>Hints: Try to describe the shape, direction and steepness of the data.</p>",
      "responseTemplate": "/components/response-template/open",
      "afterText": "",
      "startCommands": [

      ],
      "shouldFinishImmediately": false,
      "shouldWaitForSubmissibleResponse": true,
      "submissibilityInspector": {
        "type": "Smartgraphs.FirstResponseFieldInspector"
      },
      "submissibilityCriterion": {
        "gt": [
          { "length": { "strip": "value" } },
          0
        ]
      },
      "triggeredCommands": [

      ],
      "afterSubmissionCommands": [

      ],
      "responseInspector": null,
      "responseBranches": [

      ],
      "defaultBranch": null,
      "isFinalStep": true,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": true,
      "submitButtonTitle": "",
      "nextButtonShouldSubmit": true
    },
    {
      "url": "/shared/what-is-velocity/page/6/step/1",
      "activityPage": "/shared/what-is-velocity/page/6",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "name": "sensor-normal-walking"
        },
        "bottom": {
          "type": "table",
          "graphName": "sensor-normal-walking",
          "datasetName": "sensor-normal"
        }
      },
      "beforeText": "",
      "responseTemplate": "",
      "afterText": "",
      "startCommands": [
        {
          "action": "startSensorInput",
          "literalArgs": {
            "graphName": "sensor-normal-walking",
            "datasetName": "sensor-normal"
          }
        }
      ],
      "shouldFinishImmediately": false,
      "shouldWaitForSubmissibleResponse": true,
      "submissibilityInspector": null,
      "submissibilityCriterion": null,
      "triggeredCommands": [

      ],
      "afterSubmissionCommands": [
        {
          "action": "setVariable",
          "literalArgs": {
            "variableName": "actual-normal-start-time",
            "inspectorType": "Smartgraphs.DatasetAttributeInspector",
            "config": {
              "datasetName": "sensor-normal",
              "attributePath": "points.firstObject.x"
            }
          }
        },
        {
          "action": "setVariable",
          "literalArgs": {
            "variableName": "actual-normal-start-position",
            "inspectorType": "Smartgraphs.DatasetAttributeInspector",
            "config": {
              "datasetName": "sensor-normal",
              "attributePath": "points.firstObject.y"
            }
          }
        },
        {
          "action": "setVariable",
          "literalArgs": {
            "variableName": "actual-normal-end-time",
            "inspectorType": "Smartgraphs.DatasetAttributeInspector",
            "config": {
              "datasetName": "sensor-normal",
              "attributePath": "points.lastObject.x"
            }
          }
        },
        {
          "action": "setVariable",
          "literalArgs": {
            "variableName": "actual-normal-end-position",
            "inspectorType": "Smartgraphs.DatasetAttributeInspector",
            "config": {
              "datasetName": "sensor-normal",
              "attributePath": "points.lastObject.y"
            }
          }
        },
        {
          "action": "setVariable",
          "literalArgs": {
            "variableName": "rounded-actual-normal-start-time",
            "inspectorType": "Smartgraphs.EvaluatorInspector",
            "config": { "round" : [ { "variable": "actual-normal-start-time" }, 2 ] }
          }
        },
        {
          "action": "setVariable",
          "literalArgs": {
            "variableName": "rounded-actual-normal-end-time",
            "inspectorType": "Smartgraphs.EvaluatorInspector",
            "config": { "round" : [ { "variable": "actual-normal-end-time" }, 2 ] }
          }
        },
        {
          "action": "setVariable",
          "literalArgs": {
            "variableName": "rounded-actual-normal-start-position",
            "inspectorType": "Smartgraphs.EvaluatorInspector",
            "config": { "round" : [ { "variable": "actual-normal-start-position" }, 2 ] }
          }
        },
        {
          "action": "setVariable",
          "literalArgs": {
            "variableName": "rounded-actual-normal-end-position",
            "inspectorType": "Smartgraphs.EvaluatorInspector",
            "config": { "round" : [ { "variable": "actual-normal-end-position" }, 2 ] }
          }
        },
        {
          "action": "setVariable",
          "literalArgs": {
            "variableName": "actual-normal-change-time",
            "inspectorType": "Smartgraphs.EvaluatorInspector",
            "config": {
              "round": [
                {
                  "difference": [
                    { "variable": "rounded-actual-normal-end-time" },
                    { "variable": "rounded-actual-normal-start-time" }
                  ]
                },
                2
              ]
            }
          }
        },
        {
          "action": "setVariable",
          "literalArgs": {
            "variableName": "actual-normal-change-position",
            "inspectorType": "Smartgraphs.EvaluatorInspector",
            "config": {
              "round" : [
                {
                  "difference": [
                    { "variable": "rounded-actual-normal-end-position" },
                    { "variable": "rounded-actual-normal-start-position" }
                  ]
                },
                2
              ]
            }
          }
        },
        {
          "action": "setVariable",
          "literalArgs": {
            "variableName": "actual-normal-velocity",
            "inspectorType": "Smartgraphs.EvaluatorInspector",
            "config": {
              "round" : [
                {
                  "quotient": [
                    { "variable": "actual-normal-change-position" },
                    { "variable": "actual-normal-change-time" }
                  ]
                },
                1
              ]
            }
          }
        }
      ],
      "responseInspector": null,
      "responseBranches": [

      ],
      "defaultBranch": null,
      "isFinalStep": true,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": true,
      "submitButtonTitle": "",
      "nextButtonShouldSubmit": true
    },
    {
      "url": "/shared/what-is-velocity/page/7/step/1",
      "activityPage": "/shared/what-is-velocity/page/7",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "name": "sensor-result-normal-walking"
        },
        "bottom": {
          "type": "table",
          "graphName": "sensor-result-normal-walking",
          "datasetName": "sensor-normal"
        }
      },
      "beforeText": "<p>At your normal pace you walked <b>%@</b> meters, from <b>%@</b> to <b>%@</b>.</p><p>How many seconds did it take for you to walk that distance?</p>",
      "responseTemplate": "/components/response-template/numeric",
      "afterText": "<p><i>Round your answer to the nearest tenth.<i></p>",
      "substitutedExpressions": [
        {
          "type": "Smartgraphs.EvaluatorInspector",
          "config": { "variable": "actual-normal-change-position" }
        },
        {
          "type": "Smartgraphs.EvaluatorInspector",
          "config": { "variable": "rounded-actual-normal-start-position" }
        },
        {
          "type": "Smartgraphs.EvaluatorInspector",
          "config": { "variable": "rounded-actual-normal-end-position" }
        }
       ],
      "startCommands": [

      ],
      "shouldFinishImmediately": false,
      "shouldWaitForSubmissibleResponse": true,
      "submissibilityInspector": {
        "type": "Smartgraphs.FirstResponseFieldInspector"
      },
      "submissibilityCriterion": {
        "isNumeric": { "strip": "value" }
      },
      "triggeredCommands": [

      ],
      "afterSubmissionCommands": [

      ],
      "responseInspector": {
        "type": "Smartgraphs.FirstResponseFieldInspector"
      },
      "responseBranches": [
        {
          "criterion": {
            "equals": [ "value", { "variable" : "actual-normal-change-time" } ]
          },
          "step": "/shared/what-is-velocity/page/7/step/4"
        }
      ],
      "defaultBranch": "/shared/what-is-velocity/page/7/step/2",
      "isFinalStep": false,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": false,
      "submitButtonTitle": "OK",
      "nextButtonShouldSubmit": false
    },
    {
      "url": "/shared/what-is-velocity/page/7/step/2",
      "activityPage": "/shared/what-is-velocity/page/7",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "name": "sensor-result-normal-walking"
        },
        "bottom": {
          "type": "table",
          "graphName": "sensor-result-normal-walking",
          "datasetName": "sensor-normal"
        }
      },
      "beforeText": "<p>Incorrect.</p><p>Hint: You started walking at <b>%@</b> seconds and ended at <b>%@</b> seconds.</p><p>___ - ___ = ? <p>",
      "responseTemplate": "/components/response-template/numeric",
      "afterText": "<p><i>Round your answer to the nearest tenth.<i></p>",
      "substitutedExpressions": [
        {
          "type": "Smartgraphs.EvaluatorInspector",
          "config": { "variable": "rounded-actual-normal-start-time" }
        },
        {
          "type": "Smartgraphs.EvaluatorInspector",
          "config": { "variable": "rounded-actual-normal-end-time" }
        }
      ],
      "startCommands": [

      ],
      "shouldFinishImmediately": false,
      "shouldWaitForSubmissibleResponse": true,
      "submissibilityInspector": {
        "type": "Smartgraphs.FirstResponseFieldInspector"
      },
      "submissibilityCriterion": {
        "isNumeric": { "strip": "value" }
      },
      "triggeredCommands": [

      ],
      "afterSubmissionCommands": [

      ],
      "responseInspector": {
        "type": "Smartgraphs.FirstResponseFieldInspector"
      },
      "responseBranches": [
        {
          "criterion": { "equals": [ "value", { "variable" : "actual-normal-change-time" } ] },
          "step": "/shared/what-is-velocity/page/7/step/4"
        }
      ],
      "defaultBranch": "/shared/what-is-velocity/page/7/step/3",
      "isFinalStep": false,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": false,
      "submitButtonTitle": "OK",
      "nextButtonShouldSubmit": false
    },
    {
      "url": "/shared/what-is-velocity/page/7/step/3",
      "activityPage": "/shared/what-is-velocity/page/7",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "name": "sensor-result-normal-walking"
        },
        "bottom": {
          "type": "table",
          "graphName": "sensor-result-normal-walking",
          "datasetName": "sensor-normal"
        }
      },
      "beforeText": "<p>Incorrect.</p><p>You started walking at <b>%@</b> seconds and ended at <b>%@</b> seconds, so you were walking for <b>%@</b> seconds since <b>%@</b> - <b>%@</b> = <b>%@</b>. </p>",
      "responseTemplate": "",
      "afterText": "",
      "substitutedExpressions": [
        {
          "type": "Smartgraphs.EvaluatorInspector",
          "config": { "variable": "rounded-actual-normal-start-time" }
        },
        {
          "type": "Smartgraphs.EvaluatorInspector",
          "config": { "variable": "rounded-actual-normal-end-time" }
        },
        {
          "type": "Smartgraphs.EvaluatorInspector",
          "config": { "variable": "actual-normal-change-time" }
        },
        {
          "type": "Smartgraphs.EvaluatorInspector",
          "config": { "variable": "rounded-actual-normal-start-time" }
        },
        {
          "type": "Smartgraphs.EvaluatorInspector",
          "config": { "variable": "rounded-actual-normal-end-time" }
        },
        {
          "type": "Smartgraphs.EvaluatorInspector",
          "config": { "variable": "actual-normal-change-time" }
        }
       ],
      "startCommands": [

      ],
      "shouldFinishImmediately": false,
      "shouldWaitForSubmissibleResponse": true,
      "submissibilityInspector": null,
      "submissibilityCriterion": null,
      "triggeredCommands": [

      ],
      "afterSubmissionCommands": [

      ],
      "responseInspector": null,
      "responseBranches": [
      ],
      "defaultBranch": "/shared/what-is-velocity/page/7/step/4",
      "isFinalStep": false,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": false,
      "submitButtonTitle": "OK",
      "nextButtonShouldSubmit": false
    },
    {
      "url": "/shared/what-is-velocity/page/7/step/4",
      "activityPage": "/shared/what-is-velocity/page/7",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "name": "sensor-result-normal-walking"
        },
        "bottom": {
          "type": "table",
          "graphName": "sensor-result-normal-walking",
          "datasetName": "sensor-normal"
        }
      },
      "beforeText": "<p>If it took you <b>%@</b> seconds to walk <b>%@</b> meters, then you were walking at a rate of <b>%@</b> meters per second.</p><blockquote><table cellspacing='2' cellpadding='2' style='text-align:center'><tr><td style='border-width:0px'>total distance<hr/>total time</td><td style='border-width:0px'>=</td><td style='border-width:0px'>%@ m<hr/>%@ s</td><td style='border-width:0px'>=</td><td style='border-width:0px'>%@ m/s</td></tr></table></blockquote>",
      "responseTemplate": "",
      "afterText": "",
      "substitutedExpressions": [
        {
          "type": "Smartgraphs.EvaluatorInspector",
          "config": { "variable": "actual-normal-change-time" }
        },
        {
          "type": "Smartgraphs.EvaluatorInspector",
          "config": { "variable": "actual-normal-change-position" }
        },
        {
          "type": "Smartgraphs.EvaluatorInspector",
          "config": { "variable": "actual-normal-velocity" }
        },
        {
          "type": "Smartgraphs.EvaluatorInspector",
          "config": { "variable": "actual-normal-change-position" }
        },
        {
          "type": "Smartgraphs.EvaluatorInspector",
          "config": { "variable": "actual-normal-change-time" }
        },
        {
          "type": "Smartgraphs.EvaluatorInspector",
          "config": { "variable": "actual-normal-velocity" }
        }
      ],
      "startCommands": [

      ],
      "shouldFinishImmediately": false,
      "shouldWaitForSubmissibleResponse": true,
      "submissibilityInspector": null,
      "submissibilityCriterion": null,
      "triggeredCommands": [

      ],
      "afterSubmissionCommands": [

      ],
      "responseInspector": null,
      "responseBranches": [

      ],
      "defaultBranch": null,
      "isFinalStep": true,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": true,
      "submitButtonTitle": "",
      "nextButtonShouldSubmit": true
    },
    {
      "url": "/shared/what-is-velocity/page/8/step/1",
      "activityPage": "/shared/what-is-velocity/page/8",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "name": "sensor-slow-walking"
        },
        "bottom": {
          "type": "table",
          "graphName": "sensor-slow-walking",
          "datasetName": "sensor-slow"
        }
      },
      "beforeText": "",
      "responseTemplate": "",
      "afterText": "",
      "startCommands": [
        {
          "action": "startSensorInput",
          "literalArgs": {
            "graphName": "sensor-slow-walking",
            "datasetName": "sensor-slow"
          }
        }
      ],
      "shouldFinishImmediately": false,
      "shouldWaitForSubmissibleResponse": true,
      "submissibilityInspector": null,
      "submissibilityCriterion": null,
      "triggeredCommands": [

      ],
      "afterSubmissionCommands": [

      ],
      "responseInspector": null,
      "responseBranches": [

      ],
      "defaultBranch": null,
      "isFinalStep": true,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": true,
      "submitButtonTitle": "",
      "nextButtonShouldSubmit": true
    },
    {
      "url": "/shared/what-is-velocity/page/9/step/1",
      "activityPage": "/shared/what-is-velocity/page/9",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "name": "prediction-walking-normal"
        },
        "bottom": {
          "type": "graph",
          "name": "sensor-result-normal-walking"
        }
      },
      "beforeText": "<p>How does your collected data differ from your predicted data?</p>",
      "responseTemplate": "/components/response-template/open",
      "afterText": "",
      "startCommands": [

      ],
      "shouldFinishImmediately": false,
      "shouldWaitForSubmissibleResponse": true,
      "submissibilityInspector": {
        "type": "Smartgraphs.FirstResponseFieldInspector"
      },
      "submissibilityCriterion": {
        "gt": [
          { "length": { "strip": "value" } },
          0
        ]
      },
      "triggeredCommands": [

      ],
      "afterSubmissionCommands": [

      ],
      "responseInspector": null,
      "responseBranches": [

      ],
      "defaultBranch": null,
      "isFinalStep": true,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": true,
      "submitButtonTitle": "",
      "nextButtonShouldSubmit": true
    },
    {
      "url": "/shared/what-is-velocity/page/10/step/1",
      "activityPage": "/shared/what-is-velocity/page/10",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "name": "prediction-walking-slow"
        },
        "bottom": {
          "type": "graph",
          "name": "sensor-result-slow-walking"
        }
      },
      "beforeText": "<p>Did your prediction graph of slow, steady motion match the actual data? Explain.</p>",
      "responseTemplate": "/components/response-template/open",
      "afterText": "",
      "startCommands": [

      ],
      "shouldFinishImmediately": false,
      "shouldWaitForSubmissibleResponse": true,
      "submissibilityInspector": {
        "type": "Smartgraphs.FirstResponseFieldInspector"
      },
      "submissibilityCriterion": {
        "gt": [
          { "length": { "strip": "value" } },
          0
        ]
      },
      "triggeredCommands": [

      ],
      "afterSubmissionCommands": [

      ],
      "responseInspector": null,
      "responseBranches": [

      ],
      "defaultBranch": null,
      "isFinalStep": true,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": true,
      "submitButtonTitle": "",
      "nextButtonShouldSubmit": true
    },
    {
      "url": "/shared/what-is-velocity/page/11/step/1",
      "activityPage": "/shared/what-is-velocity/page/11",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "name": "sensor-result-normal-walking"
        },
        "bottom": {
          "type": "graph",
          "name": "sensor-result-slow-walking"
        }
      },
      "beforeText": "<p>How does normal, steady motion differ from slow, steady motion on a position-time graph?</p>",
      "responseTemplate": "/components/response-template/open",
      "afterText": "",
      "startCommands": [

      ],
      "shouldFinishImmediately": false,
      "shouldWaitForSubmissibleResponse": true,
      "submissibilityInspector": {
        "type": "Smartgraphs.FirstResponseFieldInspector"
      },
      "submissibilityCriterion": {
        "gt": [
          { "length": { "strip": "value" } },
          0
        ]
      },
      "triggeredCommands": [

      ],
      "afterSubmissionCommands": [

      ],
      "responseInspector": null,
      "responseBranches": [

      ],
      "defaultBranch": null,
      "isFinalStep": true,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": true,
      "submitButtonTitle": "",
      "nextButtonShouldSubmit": true
    },
    {
      "url": "/shared/what-is-velocity/page/12/step/1",
      "activityPage": "/shared/what-is-velocity/page/12",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "name": "slope-graph"
        },
        "bottom": {
          "type": "table",
          "graphName": "slope-graph",
          "datasetName": "slope-data"
        }
      },
      "beforeText": "<p>Select a point and then click <b>OK</b>.</p>",
      "responseTemplate": "",
      "afterText": "",
      "startCommands": [
        {
          "action": "startInteractiveSelection",
          "literalArgs": {
            "annotationName": "first-point-A",
            "graphName": "slope-graph",
            "datasetName": "slope-data",
            "color": "#1f77b3"
          }
        }
      ],
      "shouldFinishImmediately": false,
      "shouldWaitForSubmissibleResponse": true,
      "submissibilityInspector": null,
      "submissibilityCriterion": null,
      "triggeredCommands": [

      ],
      "afterSubmissionCommands": [

      ],
      "responseInspector": null,
      "responseBranches": [

      ],
      "defaultBranch": "/shared/what-is-velocity/page/12/step/2",
      "isFinalStep": false,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": false,
      "submitButtonTitle": "OK",
      "nextButtonShouldSubmit": false
    },
    {
      "url": "/shared/what-is-velocity/page/12/step/2",
      "activityPage": "/shared/what-is-velocity/page/12",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "name": "slope-graph"
        },
        "bottom": {
          "type": "table",
          "graphName": "slope-graph",
          "datasetName": "slope-data"
        }
      },
      "beforeText": "<p>Select a point next to to the first point. Then click <b>OK</b>.</p>",
      "responseTemplate": "",
      "afterText": "",
      "startCommands": [
        {
          "action": "startInteractiveSelection",
          "literalArgs": {
            "annotationName": "second-point-A",
            "graphName": "slope-graph",
            "datasetName": "slope-data",
            "color": "#1f77b4"
          }
        }
      ],
      "shouldFinishImmediately": false,
      "shouldWaitForSubmissibleResponse": true,
      "submissibilityInspector": null,
      "submissibilityCriterion": null,
      "triggeredCommands": [

      ],
      "afterSubmissionCommands": [

      ],
      "responseInspector": {
        "type": "Smartgraphs.AnnotationInspector",
        "config": {
          "annotationNames": [
            "first-point-A",
            "second-point-A"
          ]
        }
      },
      "responseBranches": [
        {
          "criterion": {
            "dataPointsAreAdjacent": []
          },
          "step": "/shared/what-is-velocity/page/12/step/4"
        }
      ],
      "defaultBranch": "/shared/what-is-velocity/page/12/step/3",
      "isFinalStep": false,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": false,
      "submitButtonTitle": "OK",
      "nextButtonShouldSubmit": false
    },
    {
      "url": "/shared/what-is-velocity/page/12/step/3",
      "activityPage": "/shared/what-is-velocity/page/12",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "name": "slope-graph"
        },
        "bottom": {
          "type": "table",
          "graphName": "slope-graph",
          "datasetName": "slope-data"
        }
      },
      "beforeText": "<p>To calculate velocity in a small time interval, select a point that is next to the first point. Then click <b>OK</b>.</p>",
      "responseTemplate": "",
      "afterText": "",
      "startCommands": [
        {
          "action": "startInteractiveSelection",
          "literalArgs": {
            "annotationName": "second-point-A",
            "graphName": "slope-graph",
            "datasetName": "slope-data",
            "color": "#1f77b4"
          }
        }
      ],
      "shouldFinishImmediately": false,
      "shouldWaitForSubmissibleResponse": true,
      "submissibilityInspector": null,
      "submissibilityCriterion": null,
      "triggeredCommands": [

      ],
      "afterSubmissionCommands": [

      ],
      "responseInspector": {
        "type": "Smartgraphs.AnnotationInspector",
        "config": {
          "annotationNames": [
            "first-point-A",
            "second-point-A"
          ]
        }
      },
      "responseBranches": [
        {
          "criterion": {
            "dataPointsAreAdjacent": []
          },
          "step": "/shared/what-is-velocity/page/12/step/4"
        }
      ],
      "defaultBranch": "/shared/what-is-velocity/page/12/step/3",
      "isFinalStep": false,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": false,
      "submitButtonTitle": "OK",
      "nextButtonShouldSubmit": false
    },
    {
      "url": "/shared/what-is-velocity/page/12/step/4",
      "activityPage": "/shared/what-is-velocity/page/12",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "name": "slope-graph"
        },
        "bottom": {
          "type": "table",
          "graphName": "slope-graph",
          "datasetName": "slope-data"
        }
      },
      "beforeText": "<p>Here is the line connecting the two points you selected. The velocity during this interval is the slope of this line.</p><p>What is the <b>velocity</b> between the two points, in meters per second?</p>",
      "responseTemplate": "/components/response-template/numeric",
      "afterText": "",
      "startCommands": [
        {
          "action": "createLineThroughPoints",
          "literalArgs": {
            "lineName": "slope-line-A",
            "firstPoint": "first-point-A",
            "secondPoint": "second-point-A",
            "graphName": "slope-graph",
            "color": "#1f77b4"
          }
        },
        {
          "action": "addAnnotation",
          "literalArgs": {
            "name": "slope-line-A",
            "graphName": "slope-graph"
          }
        },
        {
          "action": "setVariable",
          "literalArgs": {
            "variableName": "first-point-A-time",
            "inspectorType": "Smartgraphs.AnnotationAttributeInspector",
            "config": {
              "name": "first-point-A",
              "attributePath": "point.x"
            }
          }
        },
        {
          "action": "setVariable",
          "literalArgs": {
            "variableName": "first-point-A-position",
            "inspectorType": "Smartgraphs.AnnotationAttributeInspector",
            "config": {
              "name": "first-point-A",
              "attributePath": "point.y"
            }
          }
        },
        {
          "action": "setVariable",
          "literalArgs": {
            "variableName": "second-point-A-time",
            "inspectorType": "Smartgraphs.AnnotationAttributeInspector",
            "config": {
              "name": "second-point-A",
              "attributePath": "point.x"
            }
          }
        },
        {
          "action": "setVariable",
          "literalArgs": {
            "variableName": "second-point-A-position",
            "inspectorType": "Smartgraphs.AnnotationAttributeInspector",
            "config": {
              "name": "second-point-A",
              "attributePath": "point.y"
            }
          }
        },
        {
          "action": "setVariable",
          "literalArgs": {
            "variableName": "max-position-A",
            "inspectorType": "Smartgraphs.VariableInspector",
            "config": {
              "evalStatement": "Math.max([0],[1])",
              "variableNames": [ "first-point-A-position", "second-point-A-position" ]
            }
          }
        },
        {
          "action": "setVariable",
          "literalArgs": {
            "variableName": "min-position-A",
            "inspectorType": "Smartgraphs.VariableInspector",
            "config": {
              "evalStatement": "Math.min([0],[1])",
              "variableNames": [ "first-point-A-position", "second-point-A-position" ]
            }
          }
        },
        {
          "action": "setVariable",
          "literalArgs": {
            "variableName": "change-position-A",
            "inspectorType": "Smartgraphs.VariableInspector",
            "config": {
              "evalStatement": "Math.abs([0]-[1])",
              "variableNames": [ "first-point-A-position", "second-point-A-position" ]
            }
          }
        },
        {
          "action": "setVariable",
          "literalArgs": {
            "variableName": "change-position-units-A",
            "inspectorType": "Smartgraphs.VariableInspector",
            "config": {
              "evalStatement": "[0] == 1 ? ' meter' : ' meters'",
              "variableNames": [ "change-position-A" ]
            }
          }
        },
        {
          "action": "setVariable",
          "literalArgs": {
            "variableName": "max-time-A",
            "inspectorType": "Smartgraphs.VariableInspector",
            "config": {
              "evalStatement": "Math.max([0],[1])",
              "variableNames": [ "first-point-A-time", "second-point-A-time" ]
            }
          }
        },
        {
          "action": "setVariable",
          "literalArgs": {
            "variableName": "min-time-A",
            "inspectorType": "Smartgraphs.VariableInspector",
            "config": {
              "evalStatement": "Math.min([0],[1])",
              "variableNames": [ "first-point-A-time", "second-point-A-time" ]
            }
          }
        },
        {
          "action": "setVariable",
          "literalArgs": {
            "variableName": "change-time-A",
            "inspectorType": "Smartgraphs.VariableInspector",
            "config": {
              "evalStatement": "Math.abs([0]-[1])",
              "variableNames": [ "first-point-A-time", "second-point-A-time" ]
            }
          }
        },
        {
          "action": "setVariable",
          "literalArgs": {
            "variableName": "change-time-units-A",
            "inspectorType": "Smartgraphs.VariableInspector",
            "config": {
              "evalStatement": "[0] == 1 ? ' second' : ' seconds'",
              "variableNames": [ "change-time-A" ]
            }
          }
        },
        {
          "action": "setVariable",
          "literalArgs": {
            "variableName": "velocity-A",
            "inspectorType": "Smartgraphs.VariableInspector",
            "config": {
              "evalStatement": "[0]/[1]",
              "variableNames": [ "change-position-A", "change-time-A" ]
            }
          }
        },
        {
          "action": "setVariable",
          "literalArgs": {
            "variableName": "velocity-units-A",
            "inspectorType": "Smartgraphs.VariableInspector",
            "config": {
              "evalStatement": "[0] == 1 ? 'meter per second' : 'meters per second'",
              "variableNames": [ "velocity-A" ]
            }
          }
        }
      ],
      "shouldFinishImmediately": false,
      "submissibilityInspector": {
        "type": "Smartgraphs.FirstResponseFieldInspector"
      },
      "submissibilityCriterion": {
        "isNumeric": { "strip": "value" }
      },
      "triggeredCommands": [

      ],
      "afterSubmissionCommands": [

      ],
      "responseInspector": {
        "type": "Smartgraphs.ResponseFieldAnnotationsInspector",
        "config": {
          "annotationNames": [
            "first-point-A",
            "second-point-A"
          ]
        }
      },
      "responseBranches": [
        {
          "criterion": {
            "slope": "value"
          },
          "step": "/shared/what-is-velocity/page/12/step/16"
        }
      ],
      "defaultBranch": "/shared/what-is-velocity/page/12/step/5",
      "isFinalStep": false,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": false,
      "submitButtonTitle": "OK",
      "nextButtonShouldSubmit": false
    },
    {
      "url": "/shared/what-is-velocity/page/12/step/5",
      "activityPage": "/shared/what-is-velocity/page/12",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "name": "slope-graph"
        },
        "bottom": {
          "type": "table",
          "graphName": "slope-graph",
          "datasetName": "slope-data"
        }
      },
      "beforeText": "<p>Incorrect.</p><p>What is the <b>velocity</b> between the two points, in meters per second?</p>",
      "responseTemplate": "/components/response-template/numeric",
      "afterText": "<p>Hint: Recall that velocity is the change in position divided by the change in time.</p>",
      "startCommands": [

      ],
      "shouldFinishImmediately": false,
      "submissibilityInspector": {
        "type": "Smartgraphs.FirstResponseFieldInspector"
      },
      "submissibilityCriterion": {
        "isNumeric": { "strip": "value" }
      },
      "triggeredCommands": [

      ],
      "afterSubmissionCommands": [

      ],
      "responseInspector": {
        "type": "Smartgraphs.ResponseFieldAnnotationsInspector",
        "config": {
          "annotationNames": [
            "first-point-A",
            "second-point-A"
          ]
        }
      },
      "responseBranches": [
        {
          "criterion": {
            "slope": "value"
          },
          "step": "/shared/what-is-velocity/page/12/step/16"
        }
      ],
      "defaultBranch": "/shared/what-is-velocity/page/12/step/6",
      "isFinalStep": false,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": false,
      "submitButtonTitle": "OK",
      "nextButtonShouldSubmit": false
    },
    {
      "url": "/shared/what-is-velocity/page/12/step/6",
      "activityPage": "/shared/what-is-velocity/page/12",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "name": "slope-graph"
        },
        "bottom": {
          "type": "table",
          "graphName": "slope-graph",
          "datasetName": "slope-data"
        }
      },
      "beforeText": "<p>Incorrect.</p><p>What is the change in position?</p>",
      "responseTemplate": "/components/response-template/numeric",
      "afterText": "<p>Hint: Look at the graph.</p>",
      "startCommands": [
        {
          "action": "createRiseArrow",
          "literalArgs": {
            "arrowName": "rise-arrow-A",
            "firstPoint": "first-point-A",
            "secondPoint": "second-point-A",
            "color": "#cccccc",
            "isHighlighted": true
          }
        },
        {
          "action": "addAnnotation",
          "literalArgs": {
            "name": "rise-arrow-A",
            "graphName": "slope-graph"
          }
        }
      ],
      "shouldFinishImmediately": false,
      "submissibilityInspector": {
        "type": "Smartgraphs.FirstResponseFieldInspector"
      },
      "submissibilityCriterion": {
        "isNumeric": { "strip": "value" }
      },
      "triggeredCommands": [

      ],
      "afterSubmissionCommands": [

      ],
      "responseInspector": {
        "type": "Smartgraphs.ResponseFieldAnnotationsInspector",
        "config": {
          "annotationNames": [
            "first-point-A",
            "second-point-A"
          ]
        }
      },
      "responseBranches": [
        {
          "criterion": {
            "delta": {
              "axis": "y",
              "respectOrder": false
            }
          },
          "step": "/shared/what-is-velocity/page/12/step/10"
        }
      ],
      "defaultBranch": "/shared/what-is-velocity/page/12/step/7",
      "isFinalStep": false,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": false,
      "submitButtonTitle": "OK",
      "nextButtonShouldSubmit": false
    },
    {
      "url": "/shared/what-is-velocity/page/12/step/7",
      "activityPage": "/shared/what-is-velocity/page/12",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "name": "slope-graph"
        },
        "bottom": {
          "type": "table",
          "graphName": "slope-graph",
          "datasetName": "slope-data"
        }
      },
      "beforeText": "<p>Incorrect.</p><p>What is the change in position?</p>",
      "responseTemplate": "/components/response-template/numeric",
      "afterText": "<p>Hint: Look at the table and the graph.</p>",
      "startCommands": [
        {
          "action": "createRiseBracket",
          "literalArgs": {
            "bracketName": "rise-bracket-A",
            "point1": "first-point-A",
            "point2": "second-point-A",
            "datasetName": "slope-data",
            "color": "#cccccc",
            "isHighlighted": true
          }
        },
        {
          "action": "addAnnotation",
          "literalArgs": {
            "name": "rise-bracket-A",
            "tableName": "slope-data"
          }
        }
      ],
      "shouldFinishImmediately": false,
      "submissibilityInspector": {
        "type": "Smartgraphs.FirstResponseFieldInspector"
      },
      "submissibilityCriterion": {
        "isNumeric": { "strip": "value" }
      },
      "triggeredCommands": [

      ],
      "afterSubmissionCommands": [

      ],
      "responseInspector": {
        "type": "Smartgraphs.ResponseFieldAnnotationsInspector",
        "config": {
          "annotationNames": [
            "first-point-A",
            "second-point-A"
          ]
        }
      },
      "responseBranches": [
        {
          "criterion": {
            "delta": {
              "axis": "y",
              "respectOrder": false
            }
          },
          "step": "/shared/what-is-velocity/page/12/step/10"
        }
      ],
      "defaultBranch": "/shared/what-is-velocity/page/12/step/8",
      "isFinalStep": false,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": false,
      "submitButtonTitle": "OK",
      "nextButtonShouldSubmit": false
    },
    {
      "url": "/shared/what-is-velocity/page/12/step/8",
      "activityPage": "/shared/what-is-velocity/page/12",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "name": "slope-graph"
        },
        "bottom": {
          "type": "table",
          "graphName": "slope-graph",
          "datasetName": "slope-data"
        }
      },
      "beforeText": "<p>Incorrect. The change in position is <b>%@</b> - <b>%@</b>, or <b>%@</b> %@.</p>",
      "responseTemplate": "",
      "afterText": "",
      "substitutedExpressions": [
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "[0]",
            "variableNames": [ "max-position-A" ]
          }
        },
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "[0]",
            "variableNames": [ "min-position-A" ]
          }
        },
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "[0]",
            "variableNames": [ "change-position-A" ]
          }
        },
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "'[0]'",
            "variableNames": [ "change-position-units-A" ]
          }
        }
      ],
      "startCommands": [

      ],
      "shouldFinishImmediately": false,
      "submissibilityInspector": null,
      "submissibilityCriterion": null,
      "triggeredCommands": [

      ],
      "afterSubmissionCommands": [

      ],
      "responseInspector": null,
      "responseBranches": [

      ],
      "defaultBranch": "/shared/what-is-velocity/page/12/step/9",
      "isFinalStep": false,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": false,
      "submitButtonTitle": "Continue",
      "nextButtonShouldSubmit": false
    },
    {
      "url": "/shared/what-is-velocity/page/12/step/9",
      "activityPage": "/shared/what-is-velocity/page/12",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "name": "slope-graph"
        },
        "bottom": {
          "type": "table",
          "graphName": "slope-graph",
          "datasetName": "slope-data"
        }
      },
      "beforeText": "<p>What is the change in time? </p>",
      "responseTemplate": "/components/response-template/numeric",
      "afterText": "<p>Hint:Look at the graph.</p>",
      "startCommands": [
        {
          "action": "setAnnotationAttribute",
          "literalArgs": {
            "name": "rise-arrow-A",
            "isHighlighted": false
          }
        },
        {
          "action": "setAnnotationAttribute",
          "literalArgs": {
            "name": "rise-bracket-A",
            "isHighlighted": false
          }
        },
        {
          "action": "createRunArrow",
          "literalArgs": {
            "arrowName": "run-arrow-A",
            "firstPoint": "first-point-A",
            "secondPoint": "second-point-A",
            "color": "#cccccc",
            "isHighlighted": true
          }
        },
        {
          "action": "addAnnotation",
          "literalArgs": {
            "name": "run-arrow-A",
            "graphName": "slope-graph"
          }
        }
      ],
      "shouldFinishImmediately": false,
      "submissibilityInspector": {
        "type": "Smartgraphs.FirstResponseFieldInspector"
      },
      "submissibilityCriterion": {
        "isNumeric": { "strip": "value" }
      },
      "triggeredCommands": [

      ],
      "afterSubmissionCommands": [

      ],
      "responseInspector": {
        "type": "Smartgraphs.ResponseFieldAnnotationsInspector",
        "config": {
          "annotationNames": [
            "first-point-A",
            "second-point-A"
          ]
        }
      },
      "responseBranches": [
        {
          "criterion": {
            "delta": {
              "axis": "x",
              "respectOrder": false
            }
          },
          "step": "/shared/what-is-velocity/page/12/step/13"
        }
      ],
      "defaultBranch": "/shared/what-is-velocity/page/12/step/11",
      "isFinalStep": false,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": false,
      "submitButtonTitle": "OK",
      "nextButtonShouldSubmit": false
    },
    {
      "url": "/shared/what-is-velocity/page/12/step/10",
      "activityPage": "/shared/what-is-velocity/page/12",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "name": "slope-graph"
        },
        "bottom": {
          "type": "table",
          "graphName": "slope-graph",
          "datasetName": "slope-data"
        }
      },
      "beforeText": "<p>Correct!</p><p>What is the change in time? </p>",
      "responseTemplate": "/components/response-template/numeric",
      "afterText": "<p>Hint:Look at the graph.</p>",
      "startCommands": [
        {
          "action": "setAnnotationAttribute",
          "literalArgs": {
            "name": "rise-arrow-A",
            "isHighlighted": false
          }
        },
        {
          "action": "setAnnotationAttribute",
          "literalArgs": {
            "name": "rise-bracket-A",
            "isHighlighted": false
          }
        },
        {
          "action": "createRunArrow",
          "literalArgs": {
            "arrowName": "run-arrow-A",
            "firstPoint": "first-point-A",
            "secondPoint": "second-point-A",
            "color": "#cccccc",
            "isHighlighted": true
          }
        },
        {
          "action": "addAnnotation",
          "literalArgs": {
            "name": "run-arrow-A",
            "graphName": "slope-graph"
          }
        }
      ],
      "shouldFinishImmediately": false,
      "submissibilityInspector": {
        "type": "Smartgraphs.FirstResponseFieldInspector"
      },
      "submissibilityCriterion": {
        "isNumeric": { "strip": "value" }
      },
      "triggeredCommands": [

      ],
      "afterSubmissionCommands": [

      ],
      "responseInspector": {
        "type": "Smartgraphs.ResponseFieldAnnotationsInspector",
        "config": {
          "annotationNames": [
            "first-point-A",
            "second-point-A"
          ]
        }
      },
      "responseBranches": [
        {
          "criterion": {
            "delta": {
              "axis": "x",
              "respectOrder": false
            }
          },
          "step": "/shared/what-is-velocity/page/12/step/13"
        }
      ],
      "defaultBranch": "/shared/what-is-velocity/page/12/step/11",
      "isFinalStep": false,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": false,
      "submitButtonTitle": "OK",
      "nextButtonShouldSubmit": false
    },
    {
      "url": "/shared/what-is-velocity/page/12/step/11",
      "activityPage": "/shared/what-is-velocity/page/12",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "name": "slope-graph"
        },
        "bottom": {
          "type": "table",
          "graphName": "slope-graph",
          "datasetName": "slope-data"
        }
      },
      "beforeText": "<p>Incorrect.</p><p>What is the change in time?</p>",
      "responseTemplate": "/components/response-template/numeric",
      "afterText": "<p>Hint: Look at the table and the graph.</p>",
      "startCommands": [
        {
          "action": "createRunBracket",
          "literalArgs": {
            "bracketName": "run-bracket-A",
            "point1": "first-point-A",
            "point2": "second-point-A",
            "datasetName": "slope-data",
            "color": "#cccccc",
            "isHighlighted": true
          }
        },
        {
          "action": "addAnnotation",
          "literalArgs": {
            "name": "run-bracket-A",
            "tableName": "slope-data"
          }
        }
      ],
      "shouldFinishImmediately": false,
      "submissibilityInspector": {
        "type": "Smartgraphs.FirstResponseFieldInspector"
      },
      "submissibilityCriterion": {
        "isNumeric": { "strip": "value" }
      },
      "triggeredCommands": [

      ],
      "afterSubmissionCommands": [

      ],
      "responseInspector": {
        "type": "Smartgraphs.ResponseFieldAnnotationsInspector",
        "config": {
          "annotationNames": [
            "first-point-A",
            "second-point-A"
          ]
        }
      },
      "responseBranches": [
        {
          "criterion": {
            "delta": {
              "axis": "x",
              "respectOrder": false
            }
          },
          "step": "/shared/what-is-velocity/page/12/step/13"
        }
      ],
      "defaultBranch": "/shared/what-is-velocity/page/12/step/12",
      "isFinalStep": false,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": false,
      "submitButtonTitle": "OK",
      "nextButtonShouldSubmit": false
    },
    {
      "url": "/shared/what-is-velocity/page/12/step/12",
      "activityPage": "/shared/what-is-velocity/page/12",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "name": "slope-graph"
        },
        "bottom": {
          "type": "table",
          "graphName": "slope-graph",
          "datasetName": "slope-data"
        }
      },
      "beforeText": "<p>Incorrect. The change in time is <b>%@</b> - <b>%@</b>, or <b>%@</b> %@.</p>",
      "responseTemplate": "",
      "afterText": "",
      "substitutedExpressions": [
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "[0]",
            "variableNames": [ "max-time-A" ]
          }
        },
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "[0]",
            "variableNames": [ "min-time-A" ]
          }
        },
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "[0]",
            "variableNames": [ "change-time-A" ]
          }
        },
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "'[0]'",
            "variableNames": [ "change-time-units-A" ]
          }
        }
      ],
      "startCommands": [

      ],
      "shouldFinishImmediately": false,
      "submissibilityInspector": null,
      "submissibilityCriterion": null,
      "triggeredCommands": [

      ],
      "afterSubmissionCommands": [

      ],
      "responseInspector": null,
      "responseBranches": [

      ],
      "defaultBranch": "/shared/what-is-velocity/page/12/step/13",
      "isFinalStep": false,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": false,
      "submitButtonTitle": "Continue",
      "nextButtonShouldSubmit": false
    },
    {
      "url": "/shared/what-is-velocity/page/12/step/13",
      "activityPage": "/shared/what-is-velocity/page/12",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "name": "slope-graph"
        },
        "bottom": {
          "type": "table",
          "graphName": "slope-graph",
          "datasetName": "slope-data"
        }
      },
      "beforeText": "<p>If the change in position is <b>%@</b> %@ and the change in time is <b>%@</b> %@, what is the velocity, in meters per second?</p>",
      "responseTemplate": "/components/response-template/numeric",
      "afterText": "",
      "substitutedExpressions": [
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "[0]",
            "variableNames": [ "change-position-A" ]
          }
        },
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "'[0]'",
            "variableNames": [ "change-position-units-A" ]
          }
        },
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "[0]",
            "variableNames": [ "change-time-A" ]
          }
        },
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "'[0]'",
            "variableNames": [ "change-time-units-A" ]
          }
        }
      ],
      "startCommands": [
        {
          "action": "removeAnnotation",
          "literalArgs": {
            "name": "run-arrow-A",
            "graphName": "slope-graph"
          }
        },
        {
          "action": "removeAnnotation",
          "literalArgs": {
            "name": "run-bracket-A",
            "tableName": "slope-data"
          }
        },
        {
          "action": "removeAnnotation",
          "literalArgs": {
            "name": "rise-arrow-A",
            "graphName": "slope-graph"
          }
        },
        {
          "action": "removeAnnotation",
          "literalArgs": {
            "name": "rise-bracket-A",
            "tableName": "slope-data"
          }
        }
      ],
      "shouldFinishImmediately": false,
      "submissibilityInspector": {
        "type": "Smartgraphs.FirstResponseFieldInspector"
      },
      "submissibilityCriterion": {
        "isNumeric": { "strip": "value" }
      },
      "triggeredCommands": [

      ],
      "afterSubmissionCommands": [

      ],
      "responseInspector": {
        "type": "Smartgraphs.ResponseFieldAnnotationsInspector",
        "config": {
          "annotationNames": [
            "first-point-A",
            "second-point-A"
          ]
        }
      },
      "responseBranches": [
        {
          "criterion": {
            "slope": "value"
          },
          "step": "/shared/what-is-velocity/page/12/step/16"
        }
      ],
      "defaultBranch": "/shared/what-is-velocity/page/12/step/14",
      "isFinalStep": false,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": false,
      "submitButtonTitle": "OK",
      "nextButtonShouldSubmit": false
    },
    {
      "url": "/shared/what-is-velocity/page/12/step/14",
      "activityPage": "/shared/what-is-velocity/page/12",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "name": "slope-graph"
        },
        "bottom": {
          "type": "table",
          "graphName": "slope-graph",
          "datasetName": "slope-data"
        }
      },
      "beforeText": "<p>Incorrect.</p><p>If the change in position is <b>%@</b> %@ and the change in time is <b>%@</b> %@, what is the velocity, in meters per second?</p>",
      "responseTemplate": "/components/response-template/numeric",
      "afterText": "<p>Hint: Recall that velocity is the change in position divided by the change in time.</p>",
      "substitutedExpressions": [
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "[0]",
            "variableNames": [ "change-position-A" ]
          }
        },
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "'[0]'",
            "variableNames": [ "change-position-units-A" ]
          }
        },
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "[0]",
            "variableNames": [ "change-time-A" ]
          }
        },
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "'[0]'",
            "variableNames": [ "change-time-units-A" ]
          }
        }
      ],
      "startCommands": [

      ],
      "shouldFinishImmediately": false,
      "submissibilityInspector": {
        "type": "Smartgraphs.FirstResponseFieldInspector"
      },
      "submissibilityCriterion": {
        "isNumeric": { "strip": "value" }
      },
      "triggeredCommands": [

      ],
      "afterSubmissionCommands": [

      ],
      "responseInspector": {
        "type": "Smartgraphs.ResponseFieldAnnotationsInspector",
        "config": {
          "annotationNames": [
            "first-point-A",
            "second-point-A"
          ]
        }
      },
      "responseBranches": [
        {
          "criterion": {
            "slope": "value"
          },
          "step": "/shared/what-is-velocity/page/12/step/16"
        }
      ],
      "defaultBranch": "/shared/what-is-velocity/page/12/step/15",
      "isFinalStep": false,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": false,
      "submitButtonTitle": "OK",
      "nextButtonShouldSubmit": false
    },
    {
      "url": "/shared/what-is-velocity/page/12/step/15",
      "activityPage": "/shared/what-is-velocity/page/12",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "name": "slope-graph"
        },
        "bottom": {
          "type": "table",
          "graphName": "slope-graph",
          "datasetName": "slope-data"
        }
      },
      "beforeText": "<p>Incorrect.</p><p>If the change in position is <b>%@</b> %@ and the change in time is <b>%@</b> %@, the velocity is <b>%@</b> divided by <b>%@</b>, or <b>%@</b> %@.</p>",
      "responseTemplate": "",
      "afterText": "",
      "substitutedExpressions": [
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "[0]",
            "variableNames": [ "change-position-A" ]
          }
        },
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "'[0]'",
            "variableNames": [ "change-position-units-A" ]
          }
        },
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "[0]",
            "variableNames": [ "change-time-A" ]
          }
        },
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "'[0]'",
            "variableNames": [ "change-time-units-A" ]
          }
        },
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "[0]",
            "variableNames": [ "change-position-A" ]
          }
        },
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "[0]",
            "variableNames": [ "change-time-A" ]
          }
        },
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "[0]",
            "variableNames": [ "velocity-A" ]
          }
        },
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "'[0]'",
            "variableNames": [ "velocity-units-A" ]
          }
        }
      ],
      "startCommands": [

      ],
      "shouldFinishImmediately": true,
      "shouldWaitForSubmissibleResponse": false,
      "submissibilityInspector": null,
      "submissibilityCriterion": null,
      "triggeredCommands": [

      ],
      "afterSubmissionCommands": [

      ],
      "responseInspector": null,
      "responseBranches": [

      ],
      "defaultBranch": "",
      "isFinalStep": true,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": true,
      "submitButtonTitle": "",
      "nextButtonShouldSubmit": false
    },
    {
      "url": "/shared/what-is-velocity/page/12/step/16",
      "activityPage": "/shared/what-is-velocity/page/12",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "name": "slope-graph"
        },
        "bottom": {
          "type": "table",
          "graphName": "slope-graph",
          "datasetName": "slope-data"
        }
      },
      "beforeText": "<p>Correct!</p><p>The position changed <b>%@</b> %@ in <b>%@</b> %@, so the velocity was <b>%@</b> %@.</p>",
      "responseTemplate": "",
      "afterText": "",
      "substitutedExpressions": [
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "[0]",
            "variableNames": [ "change-position-A" ]
          }
        },
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "'[0]'",
            "variableNames": [ "change-position-units-A" ]
          }
        },
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "[0]",
            "variableNames": [ "change-time-A" ]
          }
        },
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "'[0]'",
            "variableNames": [ "change-time-units-A" ]
          }
        },
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "[0]",
            "variableNames": [ "velocity-A" ]
          }
        },
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "'[0]'",
            "variableNames": [ "velocity-units-A" ]
          }
        }
      ],
      "startCommands": [

      ],
      "shouldFinishImmediately": true,
      "shouldWaitForSubmissibleResponse": false,
      "submissibilityInspector": null,
      "submissibilityCriterion": null,
      "triggeredCommands": [

      ],
      "afterSubmissionCommands": [

      ],
      "responseInspector": null,
      "responseBranches": [

      ],
      "defaultBranch": "",
      "isFinalStep": true,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": true,
      "submitButtonTitle": "",
      "nextButtonShouldSubmit": false
    },
    {
      "url": "/shared/what-is-velocity/page/13/step/1",
      "activityPage": "/shared/what-is-velocity/page/13",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "name": "slope-graph"
        },
        "bottom": {
          "type": "table",
          "graphName": "slope-graph",
          "datasetName": "slope-data"
        }
      },
      "beforeText": "<p>Choose a point that is different from those you selected earlier. Then click <b>OK</b>.</p>",
      "responseTemplate": "",
      "afterText": "",
      "startCommands": [
        {
          "action": "setAnnotationAttribute",
          "literalArgs": {
            "name": "first-point-A",
            "pointColor": "#f2b3b3"
          }
        },
        {
          "action": "setAnnotationAttribute",
          "literalArgs": {
            "name": "second-point-A",
            "pointColor": "#f2b3b3"
          }
        },
        {
          "action": "addAnnotation",
          "literalArgs": {
            "name": "first-point-A",
            "graphName": "slope-graph",
            "tableName": "slope-data"
          }
        },
        {
          "action": "addAnnotation",
          "literalArgs": {
            "name": "second-point-A",
            "graphName": "slope-graph",
            "tableName": "slope-data"
          }
        },
        {
          "action": "startInteractiveSelection",
          "literalArgs": {
            "annotationName": "first-point-B",
            "graphName": "slope-graph",
            "datasetName": "slope-data",
            "color": "#ff7f0d"
          }
        }
      ],
      "shouldFinishImmediately": false,
      "shouldWaitForSubmissibleResponse": true,
      "submissibilityInspector": null,
      "submissibilityCriterion": null,
      "triggeredCommands": [

      ],
      "afterSubmissionCommands": [

      ],
      "responseInspector": {
        "type": "Smartgraphs.AnnotationAttributeInspector",
        "config": {
          "name": "first-point-B",
          "attributePath": "point.x"
        }
      },
      "responseBranches": [
        {
          "criterion": {
            "in" : [
              "value",
              [
                { "int" : { "variable" : "first-point-A-time" } },
                { "int" : { "variable" : "second-point-A-time" } }
              ]
            ]
          },
          "step": "/shared/what-is-velocity/page/13/step/1a"
        }
      ],
      "defaultBranch": "/shared/what-is-velocity/page/13/step/2",
      "isFinalStep": false,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": false,
      "submitButtonTitle": "OK",
      "nextButtonShouldSubmit": false
    },
    {
      "url": "/shared/what-is-velocity/page/13/step/1a",
      "activityPage": "/shared/what-is-velocity/page/13",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "name": "slope-graph"
        },
        "bottom": {
          "type": "table",
          "graphName": "slope-graph",
          "datasetName": "slope-data"
        }
      },
      "beforeText": "<p>Try again.</p><p>Choose a point that is <b>different</b> from those you selected earlier. Then click <b>OK</b>.</p>",
      "responseTemplate": "",
      "afterText": "",
      "startCommands": [
        {
          "action": "addAnnotation",
          "literalArgs": {
            "name": "first-point-A",
            "graphName": "slope-graph"
          }
        },
        {
          "action": "addAnnotation",
          "literalArgs": {
            "name": "second-point-A",
            "graphName": "slope-graph"
          }
        },
        {
          "action": "startInteractiveSelection",
          "literalArgs": {
            "annotationName": "first-point-B",
            "graphName": "slope-graph",
            "datasetName": "slope-data",
            "color": "#ff7f0d"
          }
        }
      ],
      "shouldFinishImmediately": false,
      "shouldWaitForSubmissibleResponse": true,
      "submissibilityInspector": null,
      "submissibilityCriterion": null,
      "triggeredCommands": [

      ],
      "afterSubmissionCommands": [

      ],
      "responseInspector": {
        "type": "Smartgraphs.AnnotationAttributeInspector",
        "config": {
          "name": "first-point-B",
          "attributePath": "point.x"
        }
      },
      "responseBranches": [
        {
          "criterion": {
            "in" : [
              "value",
              [
                { "int" : { "variable" : "first-point-A-time" } },
                { "int" : { "variable" : "second-point-A-time" } }
              ]
            ]
          },
          "step": "/shared/what-is-velocity/page/13/step/1a"
        }
      ],
      "defaultBranch": "/shared/what-is-velocity/page/13/step/2",
      "isFinalStep": false,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": false,
      "submitButtonTitle": "OK",
      "nextButtonShouldSubmit": false
    },
    {
      "url": "/shared/what-is-velocity/page/13/step/2",
      "activityPage": "/shared/what-is-velocity/page/13",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "name": "slope-graph"
        },
        "bottom": {
          "type": "table",
          "graphName": "slope-graph",
          "datasetName": "slope-data"
        }
      },
      "beforeText": "<p>Select a point next to to the first point. Then click <b>OK</b>.</p>",
      "responseTemplate": "",
      "afterText": "",
      "startCommands": [
        {
          "action": "startInteractiveSelection",
          "literalArgs": {
            "annotationName": "second-point-B",
            "graphName": "slope-graph",
            "datasetName": "slope-data",
            "color": "#ff7f0c"
          }
        }
      ],
      "shouldFinishImmediately": false,
      "shouldWaitForSubmissibleResponse": true,
      "submissibilityInspector": null,
      "submissibilityCriterion": null,
      "triggeredCommands": [

      ],
      "afterSubmissionCommands": [

      ],
      "responseInspector": {
        "type": "Smartgraphs.AnnotationInspector",
        "config": {
          "annotationNames": [
            "first-point-B",
            "second-point-B"
          ]
        }
      },
      "responseBranches": [
        {
          "criterion": {
            "dataPointsAreAdjacent": []
          },
          "step": "/shared/what-is-velocity/page/13/step/4"
        }
      ],
      "defaultBranch": "/shared/what-is-velocity/page/13/step/3",
      "isFinalStep": false,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": false,
      "submitButtonTitle": "OK",
      "nextButtonShouldSubmit": false
    },
    {
      "url": "/shared/what-is-velocity/page/13/step/3",
      "activityPage": "/shared/what-is-velocity/page/13",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "name": "slope-graph"
        },
        "bottom": {
          "type": "table",
          "graphName": "slope-graph",
          "datasetName": "slope-data"
        }
      },
      "beforeText": "<p>To calculate velocity in a small time interval, select a point that is next to the first point. Then click <b>OK</b>.</p>",
      "responseTemplate": "",
      "afterText": "",
      "startCommands": [
        {
          "action": "startInteractiveSelection",
          "literalArgs": {
            "annotationName": "second-point-B",
            "graphName": "slope-graph",
            "datasetName": "slope-data",
            "color": "#ff7f0c"
          }
        }
      ],
      "shouldFinishImmediately": false,
      "shouldWaitForSubmissibleResponse": true,
      "submissibilityInspector": null,
      "submissibilityCriterion": null,
      "triggeredCommands": [

      ],
      "afterSubmissionCommands": [

      ],
      "responseInspector": {
        "type": "Smartgraphs.AnnotationInspector",
        "config": {
          "annotationNames": [
            "first-point-B",
            "second-point-B"
          ]
        }
      },
      "responseBranches": [
        {
          "criterion": {
            "dataPointsAreAdjacent": []
          },
          "step": "/shared/what-is-velocity/page/13/step/4"
        }
      ],
      "defaultBranch": "/shared/what-is-velocity/page/13/step/3",
      "isFinalStep": false,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": false,
      "submitButtonTitle": "OK",
      "nextButtonShouldSubmit": false
    },
    {
      "url": "/shared/what-is-velocity/page/13/step/4",
      "activityPage": "/shared/what-is-velocity/page/13",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "name": "slope-graph"
        },
        "bottom": {
          "type": "table",
          "graphName": "slope-graph",
          "datasetName": "slope-data"
        }
      },
      "beforeText": "<p>Here is the line connecting the two points you selected. The velocity during this interval is the slope of this line.</p><p>What is the <b>velocity</b> between the two points, in meters per second?</p>",
      "responseTemplate": "/components/response-template/numeric",
      "afterText": "",
      "startCommands": [
        {
          "action": "createLineThroughPoints",
          "literalArgs": {
            "lineName": "slope-line-B",
            "firstPoint": "first-point-B",
            "secondPoint": "second-point-B",
            "graphName": "slope-graph",
            "color": "#ff7f0d"
          }
        },
        {
          "action": "addAnnotation",
          "literalArgs": {
            "name": "slope-line-B",
            "graphName": "slope-graph"
          }
        },
        {
          "action": "setVariable",
          "literalArgs": {
            "variableName": "first-point-B-time",
            "inspectorType": "Smartgraphs.AnnotationAttributeInspector",
            "config": {
              "name": "first-point-B",
              "attributePath": "point.x"
            }
          }
        },
        {
          "action": "setVariable",
          "literalArgs": {
            "variableName": "first-point-B-position",
            "inspectorType": "Smartgraphs.AnnotationAttributeInspector",
            "config": {
              "name": "first-point-B",
              "attributePath": "point.y"
            }
          }
        },
        {
          "action": "setVariable",
          "literalArgs": {
            "variableName": "second-point-B-time",
            "inspectorType": "Smartgraphs.AnnotationAttributeInspector",
            "config": {
              "name": "second-point-B",
              "attributePath": "point.x"
            }
          }
        },
        {
          "action": "setVariable",
          "literalArgs": {
            "variableName": "second-point-B-position",
            "inspectorType": "Smartgraphs.AnnotationAttributeInspector",
            "config": {
              "name": "second-point-B",
              "attributePath": "point.y"
            }
          }
        },
        {
          "action": "setVariable",
          "literalArgs": {
            "variableName": "max-position-B",
            "inspectorType": "Smartgraphs.VariableInspector",
            "config": {
              "evalStatement": "Math.max([0],[1])",
              "variableNames": [ "first-point-B-position", "second-point-B-position" ]
            }
          }
        },
        {
          "action": "setVariable",
          "literalArgs": {
            "variableName": "min-position-B",
            "inspectorType": "Smartgraphs.VariableInspector",
            "config": {
              "evalStatement": "Math.min([0],[1])",
              "variableNames": [ "first-point-B-position", "second-point-B-position" ]
            }
          }
        },
        {
          "action": "setVariable",
          "literalArgs": {
            "variableName": "change-position-B",
            "inspectorType": "Smartgraphs.VariableInspector",
            "config": {
              "evalStatement": "Math.abs([0]-[1])",
              "variableNames": [ "first-point-B-position", "second-point-B-position" ]
            }
          }
        },
        {
          "action": "setVariable",
          "literalArgs": {
            "variableName": "change-position-units-B",
            "inspectorType": "Smartgraphs.VariableInspector",
            "config": {
              "evalStatement": "[0] == 1 ? ' meter' : ' meters'",
              "variableNames": [ "change-position-B" ]
            }
          }
        },
        {
          "action": "setVariable",
          "literalArgs": {
            "variableName": "max-time-B",
            "inspectorType": "Smartgraphs.VariableInspector",
            "config": {
              "evalStatement": "Math.max([0],[1])",
              "variableNames": [ "first-point-B-time", "second-point-B-time" ]
            }
          }
        },
        {
          "action": "setVariable",
          "literalArgs": {
            "variableName": "min-time-B",
            "inspectorType": "Smartgraphs.VariableInspector",
            "config": {
              "evalStatement": "Math.min([0],[1])",
              "variableNames": [ "first-point-B-time", "second-point-B-time" ]
            }
          }
        },
        {
          "action": "setVariable",
          "literalArgs": {
            "variableName": "change-time-B",
            "inspectorType": "Smartgraphs.VariableInspector",
            "config": {
              "evalStatement": "Math.abs([0]-[1])",
              "variableNames": [ "first-point-B-time", "second-point-B-time" ]
            }
          }
        },
        {
          "action": "setVariable",
          "literalArgs": {
            "variableName": "change-time-units-B",
            "inspectorType": "Smartgraphs.VariableInspector",
            "config": {
              "evalStatement": "[0] == 1 ? ' second' : ' seconds'",
              "variableNames": [ "change-time-B" ]
            }
          }
        },
        {
          "action": "setVariable",
          "literalArgs": {
            "variableName": "velocity-B",
            "inspectorType": "Smartgraphs.VariableInspector",
            "config": {
              "evalStatement": "[0]/[1]",
              "variableNames": [ "change-position-B", "change-time-B" ]
            }
          }
        },
        {
          "action": "setVariable",
          "literalArgs": {
            "variableName": "velocity-units-B",
            "inspectorType": "Smartgraphs.VariableInspector",
            "config": {
              "evalStatement": "[0] == 1 ? 'meter per second' : 'meters per second'",
              "variableNames": [ "velocity-B" ]
            }
          }
        }
      ],
      "shouldFinishImmediately": false,
      "submissibilityInspector": {
        "type": "Smartgraphs.FirstResponseFieldInspector"
      },
      "submissibilityCriterion": {
        "isNumeric": { "strip": "value" }
      },
      "triggeredCommands": [

      ],
      "afterSubmissionCommands": [

      ],
      "responseInspector": {
        "type": "Smartgraphs.ResponseFieldAnnotationsInspector",
        "config": {
          "annotationNames": [
            "first-point-B",
            "second-point-B"
          ]
        }
      },
      "responseBranches": [
        {
          "criterion": {
            "slope": "value"
          },
          "step": "/shared/what-is-velocity/page/13/step/16"
        }
      ],
      "defaultBranch": "/shared/what-is-velocity/page/13/step/5",
      "isFinalStep": false,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": false,
      "submitButtonTitle": "OK",
      "nextButtonShouldSubmit": false
    },
    {
      "url": "/shared/what-is-velocity/page/13/step/5",
      "activityPage": "/shared/what-is-velocity/page/13",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "name": "slope-graph"
        },
        "bottom": {
          "type": "table",
          "graphName": "slope-graph",
          "datasetName": "slope-data"
        }
      },
      "beforeText": "<p>Incorrect.</p><p>What is the <b>velocity</b> between the two points, in meters per second?</p>",
      "responseTemplate": "/components/response-template/numeric",
      "afterText": "<p>Hint: Recall that velocity is the change in position divided by the change in time.</p>",
      "startCommands": [

      ],
      "shouldFinishImmediately": false,
      "submissibilityInspector": {
        "type": "Smartgraphs.FirstResponseFieldInspector"
      },
      "submissibilityCriterion": {
        "isNumeric": { "strip": "value" }
      },
      "triggeredCommands": [

      ],
      "afterSubmissionCommands": [

      ],
      "responseInspector": {
        "type": "Smartgraphs.ResponseFieldAnnotationsInspector",
        "config": {
          "annotationNames": [
            "first-point-B",
            "second-point-B"
          ]
        }
      },
      "responseBranches": [
        {
          "criterion": {
            "slope": "value"
          },
          "step": "/shared/what-is-velocity/page/13/step/16"
        }
      ],
      "defaultBranch": "/shared/what-is-velocity/page/13/step/6",
      "isFinalStep": false,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": false,
      "submitButtonTitle": "OK",
      "nextButtonShouldSubmit": false
    },
    {
      "url": "/shared/what-is-velocity/page/13/step/6",
      "activityPage": "/shared/what-is-velocity/page/13",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "name": "slope-graph"
        },
        "bottom": {
          "type": "table",
          "graphName": "slope-graph",
          "datasetName": "slope-data"
        }
      },
      "beforeText": "<p>Incorrect.</p><p>What is the change in position?</p>",
      "responseTemplate": "/components/response-template/numeric",
      "afterText": "<p>Hint: Look at the graph.</p>",
      "startCommands": [
        {
          "action": "createRiseArrow",
          "literalArgs": {
            "arrowName": "rise-arrow-B",
            "firstPoint": "first-point-B",
            "secondPoint": "second-point-B",
            "color": "#cccccc",
            "isHighlighted": true
          }
        },
        {
          "action": "addAnnotation",
          "literalArgs": {
            "name": "rise-arrow-B",
            "graphName": "slope-graph"
          }
        }
      ],
      "shouldFinishImmediately": false,
      "submissibilityInspector": {
        "type": "Smartgraphs.FirstResponseFieldInspector"
      },
      "submissibilityCriterion": {
        "isNumeric": { "strip": "value" }
      },
      "triggeredCommands": [

      ],
      "afterSubmissionCommands": [

      ],
      "responseInspector": {
        "type": "Smartgraphs.ResponseFieldAnnotationsInspector",
        "config": {
          "annotationNames": [
            "first-point-B",
            "second-point-B"
          ]
        }
      },
      "responseBranches": [
        {
          "criterion": {
            "delta": {
              "axis": "y",
              "respectOrder": false
            }
          },
          "step": "/shared/what-is-velocity/page/13/step/10"
        }
      ],
      "defaultBranch": "/shared/what-is-velocity/page/13/step/7",
      "isFinalStep": false,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": false,
      "submitButtonTitle": "OK",
      "nextButtonShouldSubmit": false
    },
    {
      "url": "/shared/what-is-velocity/page/13/step/7",
      "activityPage": "/shared/what-is-velocity/page/13",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "name": "slope-graph"
        },
        "bottom": {
          "type": "table",
          "graphName": "slope-graph",
          "datasetName": "slope-data"
        }
      },
      "beforeText": "<p>Incorrect.</p><p>What is the change in position?</p>",
      "responseTemplate": "/components/response-template/numeric",
      "afterText": "<p>Hint: Look at the table and the graph.</p>",
      "startCommands": [
        {
          "action": "createRiseBracket",
          "literalArgs": {
            "bracketName": "rise-bracket-B",
            "point1": "first-point-B",
            "point2": "second-point-B",
            "datasetName": "slope-data",
            "color": "#cccccc",
            "isHighlighted": true
          }
        },
        {
          "action": "addAnnotation",
          "literalArgs": {
            "name": "rise-bracket-B",
            "tableName": "slope-data"
          }
        }
      ],
      "shouldFinishImmediately": false,
      "submissibilityInspector": {
        "type": "Smartgraphs.FirstResponseFieldInspector"
      },
      "submissibilityCriterion": {
        "isNumeric": { "strip": "value" }
      },
      "triggeredCommands": [

      ],
      "afterSubmissionCommands": [

      ],
      "responseInspector": {
        "type": "Smartgraphs.ResponseFieldAnnotationsInspector",
        "config": {
          "annotationNames": [
            "first-point-B",
            "second-point-B"
          ]
        }
      },
      "responseBranches": [
        {
          "criterion": {
            "delta": {
              "axis": "y",
              "respectOrder": false
            }
          },
          "step": "/shared/what-is-velocity/page/13/step/10"
        }
      ],
      "defaultBranch": "/shared/what-is-velocity/page/13/step/8",
      "isFinalStep": false,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": false,
      "submitButtonTitle": "OK",
      "nextButtonShouldSubmit": false
    },
    {
      "url": "/shared/what-is-velocity/page/13/step/8",
      "activityPage": "/shared/what-is-velocity/page/13",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "name": "slope-graph"
        },
        "bottom": {
          "type": "table",
          "graphName": "slope-graph",
          "datasetName": "slope-data"
        }
      },
      "beforeText": "<p>Incorrect. The change in position is <b>%@</b> - <b>%@</b>, or <b>%@</b> %@.</p>",
      "responseTemplate": "",
      "afterText": "",
      "substitutedExpressions": [
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "[0]",
            "variableNames": [ "max-position-B" ]
          }
        },
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "[0]",
            "variableNames": [ "min-position-B" ]
          }
        },
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "[0]",
            "variableNames": [ "change-position-B" ]
          }
        },
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "'[0]'",
            "variableNames": [ "change-position-units-B" ]
          }
        }
      ],
      "startCommands": [

      ],
      "shouldFinishImmediately": false,
      "submissibilityInspector": null,
      "submissibilityCriterion": null,
      "triggeredCommands": [

      ],
      "afterSubmissionCommands": [

      ],
      "responseInspector": null,
      "responseBranches": [

      ],
      "defaultBranch": "/shared/what-is-velocity/page/13/step/9",
      "isFinalStep": false,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": false,
      "submitButtonTitle": "Continue",
      "nextButtonShouldSubmit": false
    },
    {
      "url": "/shared/what-is-velocity/page/13/step/9",
      "activityPage": "/shared/what-is-velocity/page/13",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "name": "slope-graph"
        },
        "bottom": {
          "type": "table",
          "graphName": "slope-graph",
          "datasetName": "slope-data"
        }
      },
      "beforeText": "<p>What is the change in time? </p>",
      "responseTemplate": "/components/response-template/numeric",
      "afterText": "<p>Hint:Look at the graph.</p>",
      "startCommands": [
        {
          "action": "setAnnotationAttribute",
          "literalArgs": {
            "name": "rise-arrow-B",
            "isHighlighted": false
          }
        },
        {
          "action": "setAnnotationAttribute",
          "literalArgs": {
            "name": "rise-bracket-B",
            "isHighlighted": false
          }
        },
        {
          "action": "createRunArrow",
          "literalArgs": {
            "arrowName": "run-arrow-B",
            "firstPoint": "first-point-B",
            "secondPoint": "second-point-B",
            "color": "#cccccc",
            "isHighlighted": true
          }
        },
        {
          "action": "addAnnotation",
          "literalArgs": {
            "name": "run-arrow-B",
            "graphName": "slope-graph"
          }
        }
      ],
      "shouldFinishImmediately": false,
      "submissibilityInspector": {
        "type": "Smartgraphs.FirstResponseFieldInspector"
      },
      "submissibilityCriterion": {
        "isNumeric": { "strip": "value" }
      },
      "triggeredCommands": [

      ],
      "afterSubmissionCommands": [

      ],
      "responseInspector": {
        "type": "Smartgraphs.ResponseFieldAnnotationsInspector",
        "config": {
          "annotationNames": [
            "first-point-B",
            "second-point-B"
          ]
        }
      },
      "responseBranches": [
        {
          "criterion": {
            "delta": {
              "axis": "x",
              "respectOrder": false
            }
          },
          "step": "/shared/what-is-velocity/page/13/step/13"
        }
      ],
      "defaultBranch": "/shared/what-is-velocity/page/13/step/11",
      "isFinalStep": false,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": false,
      "submitButtonTitle": "OK",
      "nextButtonShouldSubmit": false
    },
    {
      "url": "/shared/what-is-velocity/page/13/step/10",
      "activityPage": "/shared/what-is-velocity/page/13",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "name": "slope-graph"
        },
        "bottom": {
          "type": "table",
          "graphName": "slope-graph",
          "datasetName": "slope-data"
        }
      },
      "beforeText": "<p>Correct!</p><p>What is the change in time? </p>",
      "responseTemplate": "/components/response-template/numeric",
      "afterText": "<p>Hint:Look at the graph.</p>",
      "startCommands": [
        {
          "action": "setAnnotationAttribute",
          "literalArgs": {
            "name": "rise-arrow-B",
            "isHighlighted": false
          }
        },
        {
          "action": "setAnnotationAttribute",
          "literalArgs": {
            "name": "rise-bracket-B",
            "isHighlighted": false
          }
        },
        {
          "action": "createRunArrow",
          "literalArgs": {
            "arrowName": "run-arrow-B",
            "firstPoint": "first-point-B",
            "secondPoint": "second-point-B",
            "color": "#cccccc",
            "isHighlighted": true
          }
        },
        {
          "action": "addAnnotation",
          "literalArgs": {
            "name": "run-arrow-B",
            "graphName": "slope-graph"
          }
        }
      ],
      "shouldFinishImmediately": false,
      "submissibilityInspector": {
        "type": "Smartgraphs.FirstResponseFieldInspector"
      },
      "submissibilityCriterion": {
        "isNumeric": { "strip": "value" }
      },
      "triggeredCommands": [

      ],
      "afterSubmissionCommands": [

      ],
      "responseInspector": {
        "type": "Smartgraphs.ResponseFieldAnnotationsInspector",
        "config": {
          "annotationNames": [
            "first-point-B",
            "second-point-B"
          ]
        }
      },
      "responseBranches": [
        {
          "criterion": {
            "delta": {
              "axis": "x",
              "respectOrder": false
            }
          },
          "step": "/shared/what-is-velocity/page/13/step/13"
        }
      ],
      "defaultBranch": "/shared/what-is-velocity/page/13/step/11",
      "isFinalStep": false,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": false,
      "submitButtonTitle": "OK",
      "nextButtonShouldSubmit": false
    },
    {
      "url": "/shared/what-is-velocity/page/13/step/11",
      "activityPage": "/shared/what-is-velocity/page/13",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "name": "slope-graph"
        },
        "bottom": {
          "type": "table",
          "graphName": "slope-graph",
          "datasetName": "slope-data"
        }
      },
      "beforeText": "<p>Incorrect.</p><p>What is the change in time?</p>",
      "responseTemplate": "/components/response-template/numeric",
      "afterText": "<p>Hint: Look at the table and the graph.</p>",
      "startCommands": [
        {
          "action": "createRunBracket",
          "literalArgs": {
            "bracketName": "run-bracket-B",
            "point1": "first-point-B",
            "point2": "second-point-B",
            "datasetName": "slope-data",
            "color": "#cccccc",
            "isHighlighted": true
          }
        },
        {
          "action": "addAnnotation",
          "literalArgs": {
            "name": "run-bracket-B",
            "tableName": "slope-data"
          }
        }
      ],
      "shouldFinishImmediately": false,
      "submissibilityInspector": {
        "type": "Smartgraphs.FirstResponseFieldInspector"
      },
      "submissibilityCriterion": {
        "isNumeric": { "strip": "value" }
      },
      "triggeredCommands": [

      ],
      "afterSubmissionCommands": [

      ],
      "responseInspector": {
        "type": "Smartgraphs.ResponseFieldAnnotationsInspector",
        "config": {
          "annotationNames": [
            "first-point-B",
            "second-point-B"
          ]
        }
      },
      "responseBranches": [
        {
          "criterion": {
            "delta": {
              "axis": "x",
              "respectOrder": false
            }
          },
          "step": "/shared/what-is-velocity/page/13/step/13"
        }
      ],
      "defaultBranch": "/shared/what-is-velocity/page/13/step/12",
      "isFinalStep": false,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": false,
      "submitButtonTitle": "OK",
      "nextButtonShouldSubmit": false
    },
    {
      "url": "/shared/what-is-velocity/page/13/step/12",
      "activityPage": "/shared/what-is-velocity/page/13",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "name": "slope-graph"
        },
        "bottom": {
          "type": "table",
          "graphName": "slope-graph",
          "datasetName": "slope-data"
        }
      },
      "beforeText": "<p>Incorrect. The change in time is <b>%@</b> - <b>%@</b>, or <b>%@</b> %@.</p>",
      "responseTemplate": "",
      "afterText": "",
      "substitutedExpressions": [
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "[0]",
            "variableNames": [ "max-time-B" ]
          }
        },
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "[0]",
            "variableNames": [ "min-time-B" ]
          }
        },
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "[0]",
            "variableNames": [ "change-time-B" ]
          }
        },
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "'[0]'",
            "variableNames": [ "change-time-units-B" ]
          }
        }
      ],
      "startCommands": [

      ],
      "shouldFinishImmediately": false,
      "submissibilityInspector": null,
      "submissibilityCriterion": null,
      "triggeredCommands": [

      ],
      "afterSubmissionCommands": [

      ],
      "responseInspector": null,
      "responseBranches": [

      ],
      "defaultBranch": "/shared/what-is-velocity/page/13/step/13",
      "isFinalStep": false,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": false,
      "submitButtonTitle": "Continue",
      "nextButtonShouldSubmit": false
    },
    {
      "url": "/shared/what-is-velocity/page/13/step/13",
      "activityPage": "/shared/what-is-velocity/page/13",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "name": "slope-graph"
        },
        "bottom": {
          "type": "table",
          "graphName": "slope-graph",
          "datasetName": "slope-data"
        }
      },
      "beforeText": "<p>If the change in position is <b>%@</b> %@ and the change in time is <b>%@</b> %@, what is the velocity, in meters per second?</p>",
      "responseTemplate": "/components/response-template/numeric",
      "afterText": "",
      "substitutedExpressions": [
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "[0]",
            "variableNames": [ "change-position-B" ]
          }
        },
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "'[0]'",
            "variableNames": [ "change-position-units-B" ]
          }
        },
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "[0]",
            "variableNames": [ "change-time-B" ]
          }
        },
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "'[0]'",
            "variableNames": [ "change-time-units-B" ]
          }
        }
      ],
      "startCommands": [
        {
          "action": "removeAnnotation",
          "literalArgs": {
            "name": "run-arrow-B",
            "graphName": "slope-graph"
          }
        },
        {
          "action": "removeAnnotation",
          "literalArgs": {
            "name": "run-bracket-B",
            "tableName": "slope-data"
          }
        },
        {
          "action": "removeAnnotation",
          "literalArgs": {
            "name": "rise-arrow-B",
            "graphName": "slope-graph"
          }
        },
        {
          "action": "removeAnnotation",
          "literalArgs": {
            "name": "rise-bracket-B",
            "tableName": "slope-data"
          }
        }
      ],
      "shouldFinishImmediately": false,
      "submissibilityInspector": {
        "type": "Smartgraphs.FirstResponseFieldInspector"
      },
      "submissibilityCriterion": {
        "isNumeric": { "strip": "value" }
      },
      "triggeredCommands": [

      ],
      "afterSubmissionCommands": [

      ],
      "responseInspector": {
        "type": "Smartgraphs.ResponseFieldAnnotationsInspector",
        "config": {
          "annotationNames": [
            "first-point-B",
            "second-point-B"
          ]
        }
      },
      "responseBranches": [
        {
          "criterion": {
            "slope": "value"
          },
          "step": "/shared/what-is-velocity/page/13/step/16"
        }
      ],
      "defaultBranch": "/shared/what-is-velocity/page/13/step/14",
      "isFinalStep": false,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": false,
      "submitButtonTitle": "OK",
      "nextButtonShouldSubmit": false
    },
    {
      "url": "/shared/what-is-velocity/page/13/step/14",
      "activityPage": "/shared/what-is-velocity/page/13",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "name": "slope-graph"
        },
        "bottom": {
          "type": "table",
          "graphName": "slope-graph",
          "datasetName": "slope-data"
        }
      },
      "beforeText": "<p>Incorrect.</p><p>If the change in position is <b>%@</b> %@ and the change in time is <b>%@</b> %@, what is the velocity, in meters per second?</p>",
      "responseTemplate": "/components/response-template/numeric",
      "afterText": "<p>Hint: Recall that velocity is the change in position divided by the change in time.</p>",
      "substitutedExpressions": [
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "[0]",
            "variableNames": [ "change-position-B" ]
          }
        },
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "'[0]'",
            "variableNames": [ "change-position-units-B" ]
          }
        },
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "[0]",
            "variableNames": [ "change-time-B" ]
          }
        },
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "'[0]'",
            "variableNames": [ "change-time-units-B" ]
          }
        }
      ],
      "startCommands": [

      ],
      "shouldFinishImmediately": false,
      "submissibilityInspector": {
        "type": "Smartgraphs.FirstResponseFieldInspector"
      },
      "submissibilityCriterion": {
        "isNumeric": { "strip": "value" }
      },
      "triggeredCommands": [

      ],
      "afterSubmissionCommands": [

      ],
      "responseInspector": {
        "type": "Smartgraphs.ResponseFieldAnnotationsInspector",
        "config": {
          "annotationNames": [
            "first-point-B",
            "second-point-B"
          ]
        }
      },
      "responseBranches": [
        {
          "criterion": {
            "slope": "value"
          },
          "step": "/shared/what-is-velocity/page/13/step/16"
        }
      ],
      "defaultBranch": "/shared/what-is-velocity/page/13/step/15",
      "isFinalStep": false,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": false,
      "submitButtonTitle": "OK",
      "nextButtonShouldSubmit": false
    },
    {
      "url": "/shared/what-is-velocity/page/13/step/15",
      "activityPage": "/shared/what-is-velocity/page/13",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "name": "slope-graph"
        },
        "bottom": {
          "type": "table",
          "graphName": "slope-graph",
          "datasetName": "slope-data"
        }
      },
      "beforeText": "<p>Incorrect.</p><p>If the change in position is <b>%@</b> %@ and the change in time is <b>%@</b> %@, the velocity is <b>%@</b> divided by <b>%@</b>, or <b>%@</b> %@.</p>",
      "responseTemplate": "",
      "afterText": "",
      "substitutedExpressions": [
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "[0]",
            "variableNames": [ "change-position-B" ]
          }
        },
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "'[0]'",
            "variableNames": [ "change-position-units-B" ]
          }
        },
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "[0]",
            "variableNames": [ "change-time-B" ]
          }
        },
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "'[0]'",
            "variableNames": [ "change-time-units-B" ]
          }
        },
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "[0]",
            "variableNames": [ "change-position-B" ]
          }
        },
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "[0]",
            "variableNames": [ "change-time-B" ]
          }
        },
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "[0]",
            "variableNames": [ "velocity-B" ]
          }
        },
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "'[0]'",
            "variableNames": [ "velocity-units-B" ]
          }
        }
      ],
      "startCommands": [

      ],
      "shouldFinishImmediately": true,
      "shouldWaitForSubmissibleResponse": false,
      "submissibilityInspector": null,
      "submissibilityCriterion": null,
      "triggeredCommands": [

      ],
      "afterSubmissionCommands": [

      ],
      "responseInspector": null,
      "responseBranches": [

      ],
      "defaultBranch": "",
      "isFinalStep": true,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": true,
      "submitButtonTitle": "",
      "nextButtonShouldSubmit": false
    },
    {
      "url": "/shared/what-is-velocity/page/13/step/16",
      "activityPage": "/shared/what-is-velocity/page/13",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "name": "slope-graph"
        },
        "bottom": {
          "type": "table",
          "graphName": "slope-graph",
          "datasetName": "slope-data"
        }
      },
      "beforeText": "<p>Correct!</p><p>The position changed <b>%@</b> %@ in <b>%@</b> %@, so the velocity was <b>%@</b> %@.</p>",
      "responseTemplate": "",
      "afterText": "",
      "substitutedExpressions": [
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "[0]",
            "variableNames": [ "change-position-B" ]
          }
        },
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "'[0]'",
            "variableNames": [ "change-position-units-B" ]
          }
        },
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "[0]",
            "variableNames": [ "change-time-B" ]
          }
        },
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "'[0]'",
            "variableNames": [ "change-time-units-B" ]
          }
        },
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "[0]",
            "variableNames": [ "velocity-B" ]
          }
        },
        {
          "type": "Smartgraphs.VariableInspector",
          "config" : {
            "evalStatement": "'[0]'",
            "variableNames": [ "velocity-units-B" ]
          }
        }
      ],
      "startCommands": [

      ],
      "shouldFinishImmediately": true,
      "shouldWaitForSubmissibleResponse": false,
      "submissibilityInspector": null,
      "submissibilityCriterion": null,
      "triggeredCommands": [

      ],
      "afterSubmissionCommands": [

      ],
      "responseInspector": null,
      "responseBranches": [

      ],
      "defaultBranch": "",
      "isFinalStep": true,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": true,
      "submitButtonTitle": "",
      "nextButtonShouldSubmit": false
    },
    {
      "url": "/shared/what-is-velocity/page/14/step/1",
      "activityPage": "/shared/what-is-velocity/page/14",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "name": "slope-graph"
        },
        "bottom": null
      },
      "beforeText": "",
      "responseTemplate": "/components/response-template/open",
      "afterText": "",
      "startCommands": [
        {
          "action": "setAnnotationAttribute",
          "literalArgs": {
            "name": "first-point-B",
            "pointColor": "#f2b3b3"
          }
        },
        {
          "action": "setAnnotationAttribute",
          "literalArgs": {
            "name": "second-point-B",
            "pointColor": "#f2b3b3"
          }
        },
        {
          "action": "addAnnotation",
          "literalArgs": {
            "name": "slope-line-A",
            "graphName": "slope-graph"
          }
        },
        {
          "action": "addAnnotation",
          "literalArgs": {
            "name": "first-point-A",
            "graphName": "slope-graph"
          }
        },
        {
          "action": "addAnnotation",
          "literalArgs": {
            "name": "second-point-A",
            "graphName": "slope-graph"
          }
        },
        {
          "action": "addAnnotation",
          "literalArgs": {
            "name": "slope-line-B",
            "graphName": "slope-graph"
          }
        },
        {
          "action": "addAnnotation",
          "literalArgs": {
            "name": "first-point-B",
            "graphName": "slope-graph"
          }
        },
        {
          "action": "addAnnotation",
          "literalArgs": {
            "name": "second-point-B",
            "graphName": "slope-graph"
          }
        }
      ],
      "shouldFinishImmediately": false,
      "shouldWaitForSubmissibleResponse": true,
      "submissibilityInspector": {
        "type": "Smartgraphs.FirstResponseFieldInspector"
      },
      "submissibilityCriterion": {
        "gt": [
          { "length": { "strip": "value" } },
          0
        ]
      },
      "triggeredCommands": [

      ],
      "afterSubmissionCommands": [

      ],
      "responseInspector": null,
      "responseBranches": [

      ],
      "defaultBranch": null,
      "isFinalStep": true,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": true,
      "submitButtonTitle": "",
      "nextButtonShouldSubmit": true
    },
    {
      "url": "/shared/what-is-velocity/page/15/step/1",
      "activityPage": "/shared/what-is-velocity/page/15",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "name": "slope-graph"
        },
        "bottom": {
          "type": "table",
          "graphName": "slope-graph",
          "datasetName": "slope-data"
        }
      },
      "beforeText": "<p>Click the point that represents the start of the trip.</p>",
      "responseTemplate": "",
      "afterText": "",
      "startCommands": [
        {
          "action": "startInteractiveSelection",
          "literalArgs": {
            "annotationName": "first-point-C",
            "graphName": "slope-graph",
            "datasetName": "slope-data",
            "color": "#1f77b3"
          }
        }
      ],
      "shouldFinishImmediately": false,
      "shouldWaitForSubmissibleResponse": true,
      "submissibilityInspector": null,
      "submissibilityCriterion": null,
      "triggeredCommands": [

      ],
      "afterSubmissionCommands": [

      ],
      "responseInspector": {
        "type": "Smartgraphs.AnnotationAttributeInspector",
        "config": {
          "name": "first-point-C",
          "attributePath": "point.x"
        }
      },
      "responseBranches": [
        {
          "criterion": { "equals" : [ "value", 0 ] },
          "step": "/shared/what-is-velocity/page/15/step/3"
        }
      ],
      "defaultBranch": "/shared/what-is-velocity/page/15/step/2",
      "isFinalStep": false,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": false,
      "submitButtonTitle": "OK",
      "nextButtonShouldSubmit": false
    },
    {
      "url": "/shared/what-is-velocity/page/15/step/2",
      "activityPage": "/shared/what-is-velocity/page/15",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "name": "slope-graph"
        },
        "bottom": {
          "type": "table",
          "graphName": "slope-graph",
          "datasetName": "slope-data"
        }
      },
      "beforeText": "<p>Incorrect.</p><p>Hint: At the start of the trip, both the position and time are 0.</p><p><b>Click</b> the point that represents the <b>start</b> of the trip.",
      "responseTemplate": "",
      "afterText": "",
      "startCommands": [
        {
          "action": "startInteractiveSelection",
          "literalArgs": {
            "annotationName": "first-point-C",
            "graphName": "slope-graph",
            "datasetName": "slope-data",
            "color": "#1f77b3"
          }
        }
      ],
      "shouldFinishImmediately": false,
      "shouldWaitForSubmissibleResponse": true,
      "submissibilityInspector": null,
      "submissibilityCriterion": null,
      "triggeredCommands": [

      ],
      "afterSubmissionCommands": [

      ],
      "responseInspector": {
        "type": "Smartgraphs.AnnotationAttributeInspector",
        "config": {
          "name": "first-point-C",
          "attributePath": "point.x"
        }
      },
      "responseBranches": [
        {
          "criterion": { "equals" : [ "value", 0 ] },
          "step": "/shared/what-is-velocity/page/15/step/3"
        }
      ],
      "defaultBranch": "/shared/what-is-velocity/page/15/step/2",
      "isFinalStep": false,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": false,
      "submitButtonTitle": "OK",
      "nextButtonShouldSubmit": false
    },
    {
      "url": "/shared/what-is-velocity/page/15/step/3",
      "activityPage": "/shared/what-is-velocity/page/15",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "name": "slope-graph"
        },
        "bottom": {
          "type": "table",
          "graphName": "slope-graph",
          "datasetName": "slope-data"
        }
      },
      "beforeText": "<p>Now click the point that represents the end of the trip.</p>",
      "responseTemplate": "",
      "afterText": "",
      "startCommands": [
        {
          "action": "startInteractiveSelection",
          "literalArgs": {
            "annotationName": "second-point-C",
            "graphName": "slope-graph",
            "datasetName": "slope-data",
            "color": "#1f77b4"
          }
        }
      ],
      "shouldFinishImmediately": false,
      "shouldWaitForSubmissibleResponse": true,
      "submissibilityInspector": null,
      "submissibilityCriterion": null,
      "triggeredCommands": [
      ],
      "afterSubmissionCommands": [
      ],
      "responseInspector": {
        "type": "Smartgraphs.AnnotationAttributeInspector",
        "config": {
          "name": "second-point-C",
          "attributePath": "point.x"
        }
      },
      "responseBranches": [
        {
          "criterion": { "equals" : [ "value", 10 ] },
          "step": "/shared/what-is-velocity/page/15/step/5"
        }
      ],
      "defaultBranch": "/shared/what-is-velocity/page/15/step/4",
      "isFinalStep": false,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": false,
      "submitButtonTitle": "OK",
      "nextButtonShouldSubmit": false
    },
    {
      "url": "/shared/what-is-velocity/page/15/step/4",
      "activityPage": "/shared/what-is-velocity/page/15",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "name": "slope-graph"
        },
        "bottom": {
          "type": "table",
          "graphName": "slope-graph",
          "datasetName": "slope-data"
        }
      },
      "beforeText": "<p>Incorrect.</p><p>Hint: What are the position and time at the end of the trip?</p><p><b>Click</b> the point that represents the <b>end</b> of the trip.</p>",
      "responseTemplate": "",
      "afterText": "",
      "startCommands": [
        {
          "action": "startInteractiveSelection",
          "literalArgs": {
            "annotationName": "second-point-C",
            "graphName": "slope-graph",
            "datasetName": "slope-data",
            "color": "#1f77b4"
          }
        }
      ],
      "shouldFinishImmediately": false,
      "shouldWaitForSubmissibleResponse": true,
      "submissibilityInspector": null,
      "submissibilityCriterion": null,
      "triggeredCommands": [
      ],
      "afterSubmissionCommands": [
      ],
      "responseInspector": {
        "type": "Smartgraphs.AnnotationAttributeInspector",
        "config": {
          "name": "second-point-C",
          "attributePath": "point.x"
        }
      },
      "responseBranches": [
        {
          "criterion": { "equals" : [ "value", 10 ] },
          "step": "/shared/what-is-velocity/page/15/step/5"
        }
      ],
      "defaultBranch": "/shared/what-is-velocity/page/15/step/4",
      "isFinalStep": false,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": false,
      "submitButtonTitle": "OK",
      "nextButtonShouldSubmit": false
    },
    {
      "url": "/shared/what-is-velocity/page/15/step/5",
      "activityPage": "/shared/what-is-velocity/page/15",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "name": "slope-graph"
        },
        "bottom": {
          "type": "table",
          "graphName": "slope-graph",
          "datasetName": "slope-data"
        }
      },
      "beforeText": "<p>Here is a line through the two points.</p><p>What was your average velocity during the whole trip?</p>",
      "responseTemplate": "/components/response-template/numeric",
      "afterText": "<p>Round your answer to the nearest tenth (m/s).</p><p>Hint: What were your total distance and your total time?</p>",
      "startCommands": [
        {
          "action": "createLineThroughPoints",
          "literalArgs": {
            "lineName": "slope-line-C",
            "firstPoint": "first-point-C",
            "secondPoint": "second-point-C",
            "graphName": "slope-graph",
            "color": "#1f77b4"
          }
        },
        {
          "action": "addAnnotation",
          "literalArgs": {
            "name": "slope-line-C",
            "graphName": "slope-graph"
          }
        }
      ],
      "shouldFinishImmediately": false,
      "shouldWaitForSubmissibleResponse": true,
      "submissibilityInspector": {
        "type": "Smartgraphs.FirstResponseFieldInspector"
      },
      "submissibilityCriterion": {
        "gt": [
          { "float": { "strip": "value" } },
          0
        ]
      },
      "triggeredCommands": [

      ],
      "afterSubmissionCommands": [

      ],
      "responseInspector": null,
      "responseBranches": [

      ],
      "defaultBranch": null,
      "isFinalStep": true,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": true,
      "submitButtonTitle": "",
      "nextButtonShouldSubmit": true
    },{
      "url": "/shared/what-is-velocity/page/16/step/1",
      "activityPage": "/shared/what-is-velocity/page/16",
      "paneConfig": "single",
      "panes": {
        "single": {
          "type": "graph",
          "name": "slope-graph-analyze"
        }
      },
      "beforeText": "<p>Which of the lines in the accompanying graph covers the fastest velocity?</p>",
      "responseTemplate": "/components/response-template/slope-graph-analyze",
      "afterText": "",
      "startCommands": [
        {
          "action": "createLabelAnnotation",
          "literalArgs": {
            "labelName": "line-label-A",
            "point": "16-A",
            "label": "Line A"
          }
        },
        {
          "action": "createLabelAnnotation",
          "literalArgs": {
            "labelName": "line-label-B",
            "point": "16-B",
            "label": "Line B"
          }
        },
        {
          "action": "createLabelAnnotation",
          "literalArgs": {
            "labelName": "line-label-C",
            "point": "16-C",
            "label": "Line C"
          }
        },
        {
          "action": "createLabelAnnotation",
          "literalArgs": {
            "labelName": "line-label-D",
            "point": "16-D",
            "label": "Line D"
          }
        },
        {
          "action": "addAnnotation",
          "literalArgs": {
            "name": "line-label-A",
            "graphName": "slope-graph-analyze"
          }
        },
        {
          "action": "addAnnotation",
          "literalArgs": {
            "name": "line-label-B",
            "graphName": "slope-graph-analyze"
          }
        },
        {
          "action": "addAnnotation",
          "literalArgs": {
            "name": "line-label-C",
            "graphName": "slope-graph-analyze"
          }
        },
        {
          "action": "addAnnotation",
          "literalArgs": {
            "name": "line-label-D",
            "graphName": "slope-graph-analyze"
          }
        }
      ],
      "shouldFinishImmediately": false,
      "shouldWaitForSubmissibleResponse": true,
      "submissibilityInspector": {
        "type": "Smartgraphs.FirstResponseFieldInspector"
      },
      "submissibilityCriterion": {
        "in": [
          "value",
          [
            1,
            2,
            3,
            4
          ]
        ]
      },
      "triggeredCommands": [

      ],
      "afterSubmissionCommands": [

      ],
      "responseInspector": {
        "type": "Smartgraphs.FirstResponseFieldInspector"
      },
      "responseBranches": [
        {
          "criterion": {
            "equals": [
              "value",
              1
            ]
          },
          "step": "/shared/what-is-velocity/page/16/step/2"
        },
        {
          "criterion": {
            "equals": [
              "value",
              2
            ]
          },
          "step": "/shared/what-is-velocity/page/16/step/2"
        },
        {
          "criterion": {
            "equals": [
              "value",
              3
            ]
          },
          "step": "/shared/what-is-velocity/page/16/step/2"
        },
        {
          "criterion": {
            "equals": [
              "value",
              4
            ]
          },
          "step": "/shared/what-is-velocity/page/16/step/2"
        }
      ],
      "defaultBranch": "/shared/what-is-velocity/page/16/step/3",
      "isFinalStep": false,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": false,
      "submitButtonTitle": "Check My Answer",
      "nextButtonShouldSubmit": false
    },
    {
      "url": "/shared/what-is-velocity/page/16/step/2",
      "activityPage": "/shared/what-is-velocity/page/16",
      "paneConfig": "single",
      "panes": {
        "single": {
          "type": "graph",
          "name": "slope-graph-analyze"
        }
      },
      "beforeText": "<p>Which of the lines in the accompanying graph covers the fastest velocity?</p>",
      "responseTemplate": "/components/response-template/slope-graph-analyze",
      "afterText": "<p><b>Incorrect</b>, Try again. <p>Hint: The steepest line represents the fastest velocity since more distance is covered in the same amount of time.</p>",
      "startCommands": [
        {
          "action": "createLabelAnnotation",
          "literalArgs": {
            "labelName": "line-label-A",
            "point": "16-A",
            "label": "Line A"
          }
        },
        {
          "action": "createLabelAnnotation",
          "literalArgs": {
            "labelName": "line-label-B",
            "point": "16-B",
            "label": "Line B"
          }
        },
        {
          "action": "createLabelAnnotation",
          "literalArgs": {
            "labelName": "line-label-C",
            "point": "16-C",
            "label": "Line C"
          }
        },
        {
          "action": "createLabelAnnotation",
          "literalArgs": {
            "labelName": "line-label-D",
            "point": "16-D",
            "label": "Line D"
          }
        },
        {
          "action": "addAnnotation",
          "literalArgs": {
            "name": "line-label-A",
            "graphName": "slope-graph-analyze"
          }
        },
        {
          "action": "addAnnotation",
          "literalArgs": {
            "name": "line-label-B",
            "graphName": "slope-graph-analyze"
          }
        },
        {
          "action": "addAnnotation",
          "literalArgs": {
            "name": "line-label-C",
            "graphName": "slope-graph-analyze"
          }
        },
        {
          "action": "addAnnotation",
          "literalArgs": {
            "name": "line-label-D",
            "graphName": "slope-graph-analyze"
          }
        }
      ],
      "shouldFinishImmediately": false,
      "shouldWaitForSubmissibleResponse": true,
      "submissibilityInspector": {
        "type": "Smartgraphs.FirstResponseFieldInspector"
      },
      "submissibilityCriterion": {
        "in": [
          "value",
          [
            1,
            2,
            3,
            4
          ]
        ]
      },
      "triggeredCommands": [

      ],
      "afterSubmissionCommands": [

      ],
      "responseInspector": {
        "type": "Smartgraphs.FirstResponseFieldInspector"
      },
      "responseBranches": [
        {
          "criterion": {
            "equals": [
              "value",
              1
            ]
          },
          "step": "/shared/what-is-velocity/page/16/step/3"
        },
        {
          "criterion": {
            "equals": [
              "value",
              2
            ]
          },
          "step": "/shared/what-is-velocity/page/16/step/2"
        },
        {
          "criterion": {
            "equals": [
              "value",
              3
            ]
          },
          "step": "/shared/what-is-velocity/page/16/step/2"
        },
        {
          "criterion": {
            "equals": [
              "value",
              4
            ]
          },
          "step": "/shared/what-is-velocity/page/16/step/2"
        }
      ],
      "defaultBranch": "/shared/what-is-velocity/page/16/step/2",
      "isFinalStep": false,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": false,
      "submitButtonTitle": "Check My Answer",
      "nextButtonShouldSubmit": false
    },
    {
      "url": "/shared/what-is-velocity/page/16/step/3",
      "activityPage": "/shared/what-is-velocity/page/16",
      "paneConfig": "single",
      "panes": {
        "single": {
          "type": "graph",
          "name": "slope-graph-analyze"
        }
      },
      "beforeText": "<p><b>Correct!</b>, the steepest line represents the fastest velocity since more distance is covered in the same amount of time.</p><p>Which of the lines in the accompanying graph indicates the <b>slowest</b> velocity?</p>",
      "responseTemplate": "/components/response-template/slope-graph-analyze",
      "afterText": "",
      "startCommands": [
        {
          "action": "createLabelAnnotation",
          "literalArgs": {
            "labelName": "line-label-A",
            "point": "16-A",
            "label": "Line A"
          }
        },
        {
          "action": "createLabelAnnotation",
          "literalArgs": {
            "labelName": "line-label-B",
            "point": "16-B",
            "label": "Line B"
          }
        },
        {
          "action": "createLabelAnnotation",
          "literalArgs": {
            "labelName": "line-label-C",
            "point": "16-C",
            "label": "Line C"
          }
        },
        {
          "action": "createLabelAnnotation",
          "literalArgs": {
            "labelName": "line-label-D",
            "point": "16-D",
            "label": "Line D"
          }
        },
        {
          "action": "addAnnotation",
          "literalArgs": {
            "name": "line-label-A",
            "graphName": "slope-graph-analyze"
          }
        },
        {
          "action": "addAnnotation",
          "literalArgs": {
            "name": "line-label-B",
            "graphName": "slope-graph-analyze"
          }
        },
        {
          "action": "addAnnotation",
          "literalArgs": {
            "name": "line-label-C",
            "graphName": "slope-graph-analyze"
          }
        },
        {
          "action": "addAnnotation",
          "literalArgs": {
            "name": "line-label-D",
            "graphName": "slope-graph-analyze"
          }
        }
      ],
      "shouldFinishImmediately": false,
      "shouldWaitForSubmissibleResponse": true,
      "submissibilityInspector": {
        "type": "Smartgraphs.FirstResponseFieldInspector"
      },
      "submissibilityCriterion": {
        "in": [
          "value",
          [
            1,
            2,
            3,
            4
          ]
        ]
      },
      "triggeredCommands": [

      ],
      "afterSubmissionCommands": [

      ],
      "responseInspector": {
        "type": "Smartgraphs.FirstResponseFieldInspector"
      },
      "responseBranches": [
        {
          "criterion": {
            "equals": [
              "value",
              1
            ]
          },
          "step": "/shared/what-is-velocity/page/16/step/4"
        },
        {
          "criterion": {
            "equals": [
              "value",
              2
            ]
          },
          "step": "/shared/what-is-velocity/page/16/step/4"
        },
        {
          "criterion": {
            "equals": [
              "value",
              3
            ]
          },
          "step": "/shared/what-is-velocity/page/16/step/4"
        },
        {
          "criterion": {
            "equals": [
              "value",
              4
            ]
          },
          "step": "/shared/what-is-velocity/page/16/step/5"
        }
      ],
      "defaultBranch": "/shared/what-is-velocity/page/16/step/4",
      "isFinalStep": false,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": false,
      "submitButtonTitle": "Check My Answer",
      "nextButtonShouldSubmit": false
    },
    {
      "url": "/shared/what-is-velocity/page/16/step/4",
      "activityPage": "/shared/what-is-velocity/page/16",
      "paneConfig": "single",
      "panes": {
        "single": {
          "type": "graph",
          "name": "slope-graph-analyze"
        }
      },
      "beforeText": "<p>Which of the lines in the accompanying graph indicates the <b>slowest</b> velocity?</p>",
      "responseTemplate": "/components/response-template/slope-graph-analyze",
      "afterText": "<p><b>Incorrect</b>, Try again.</p><p>Hint: The flattest line represents the slowest velocity since less distance is covered in the same amount of time.</p>",
      "startCommands": [
        {
          "action": "createLabelAnnotation",
          "literalArgs": {
            "labelName": "line-label-A",
            "point": "16-A",
            "label": "Line A"
          }
        },
        {
          "action": "createLabelAnnotation",
          "literalArgs": {
            "labelName": "line-label-B",
            "point": "16-B",
            "label": "Line B"
          }
        },
        {
          "action": "createLabelAnnotation",
          "literalArgs": {
            "labelName": "line-label-C",
            "point": "16-C",
            "label": "Line C"
          }
        },
        {
          "action": "createLabelAnnotation",
          "literalArgs": {
            "labelName": "line-label-D",
            "point": "16-D",
            "label": "Line D"
          }
        },
        {
          "action": "addAnnotation",
          "literalArgs": {
            "name": "line-label-A",
            "graphName": "slope-graph-analyze"
          }
        },
        {
          "action": "addAnnotation",
          "literalArgs": {
            "name": "line-label-B",
            "graphName": "slope-graph-analyze"
          }
        },
        {
          "action": "addAnnotation",
          "literalArgs": {
            "name": "line-label-C",
            "graphName": "slope-graph-analyze"
          }
        },
        {
          "action": "addAnnotation",
          "literalArgs": {
            "name": "line-label-D",
            "graphName": "slope-graph-analyze"
          }
        }
      ],
      "shouldFinishImmediately": false,
      "shouldWaitForSubmissibleResponse": true,
      "submissibilityInspector": {
        "type": "Smartgraphs.FirstResponseFieldInspector"
      },
      "submissibilityCriterion": {
        "in": [
          "value",
          [
            1,
            2,
            3,
            4
          ]
        ]
      },
      "triggeredCommands": [

      ],
      "afterSubmissionCommands": [

      ],
      "responseInspector": {
        "type": "Smartgraphs.FirstResponseFieldInspector"
      },
      "responseBranches": [
        {
          "criterion": {
            "equals": [
              "value",
              1
            ]
          },
          "step": "/shared/what-is-velocity/page/16/step/4"
        },
        {
          "criterion": {
            "equals": [
              "value",
              2
            ]
          },
          "step": "/shared/what-is-velocity/page/16/step/4"
        },
        {
          "criterion": {
            "equals": [
              "value",
              3
            ]
          },
          "step": "/shared/what-is-velocity/page/16/step/4"
        },
        {
          "criterion": {
            "equals": [
              "value",
              4
            ]
          },
          "step": "/shared/what-is-velocity/page/16/step/5"
        }
      ],
      "defaultBranch": "/shared/what-is-velocity/page/16/step/5",
      "isFinalStep": false,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": false,
      "submitButtonTitle": "Check My Answer",
      "nextButtonShouldSubmit": false
    },
    {
      "url": "/shared/what-is-velocity/page/16/step/5",
      "activityPage": "/shared/what-is-velocity/page/16",
      "paneConfig": "single",
      "panes": {
        "single": {
          "type": "graph",
          "name": "slope-graph-analyze"
        }
      },
      "beforeText": "<p><b>Correct!</b> The flattest line represents the slowest velocity.</p><p>Explain how you know",
      "responseTemplate": "/components/response-template/open",
      "afterText": "",
      "startCommands": [
        {
          "action": "createLabelAnnotation",
          "literalArgs": {
            "labelName": "line-label-A",
            "point": "16-A",
            "label": "Line A"
          }
        },
        {
          "action": "createLabelAnnotation",
          "literalArgs": {
            "labelName": "line-label-B",
            "point": "16-B",
            "label": "Line B"
          }
        },
        {
          "action": "createLabelAnnotation",
          "literalArgs": {
            "labelName": "line-label-C",
            "point": "16-C",
            "label": "Line C"
          }
        },
        {
          "action": "createLabelAnnotation",
          "literalArgs": {
            "labelName": "line-label-D",
            "point": "16-D",
            "label": "Line D"
          }
        },
        {
          "action": "addAnnotation",
          "literalArgs": {
            "name": "line-label-A",
            "graphName": "slope-graph-analyze"
          }
        },
        {
          "action": "addAnnotation",
          "literalArgs": {
            "name": "line-label-B",
            "graphName": "slope-graph-analyze"
          }
        },
        {
          "action": "addAnnotation",
          "literalArgs": {
            "name": "line-label-C",
            "graphName": "slope-graph-analyze"
          }
        },
        {
          "action": "addAnnotation",
          "literalArgs": {
            "name": "line-label-D",
            "graphName": "slope-graph-analyze"
          }
        }
      ],
      "shouldFinishImmediately": false,
      "shouldWaitForSubmissibleResponse": false,
      "submissibilityInspector": null,
      "submissibilityCriterion": {

      },
      "triggeredCommands": [

      ],
      "afterSubmissionCommands": [

      ],
      "responseInspector": null,
      "responseBranches": [

      ],
      "defaultBranch": "",
      "isFinalStep": true,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": true,
      "submitButtonTitle": "",
      "nextButtonShouldSubmit": true
    },
    {
      "url": "/shared/what-is-velocity/page/17/step/1",
      "activityPage": "/shared/what-is-velocity/page/17",
      "paneConfig": "single",
      "panes": {
        "single": {
          "type": "image",
          "path": "/static/smartgraphs/en/current/resources/images/walk_the_wight.jpg",
          "caption": "Creative Commons BY-NC-SA 2.0 image courtesy flickr user Auntie P"
        }
      },
      "beforeText": "<p>What is the difference between instantaneous velocity and average velocity?</p>",
      "responseTemplate": "/components/response-template/open",
      "afterText": "",
      "startCommands": [

      ],
      "shouldFinishImmediately": false,
      "shouldWaitForSubmissibleResponse": true,
      "submissibilityInspector": {
        "type": "Smartgraphs.FirstResponseFieldInspector"
      },
      "submissibilityCriterion": {
        "gt": [
          { "length": { "strip": "value" } },
          0
        ]
      },
      "triggeredCommands": [

      ],
      "afterSubmissionCommands": [

      ],
      "responseInspector": null,
      "responseBranches": [

      ],
      "defaultBranch": "",
      "isFinalStep": true,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": true,
      "submitButtonTitle": "",
      "nextButtonShouldSubmit": true
    },
    {
      "url": "/shared/what-is-velocity/page/18/step/1",
      "activityPage": "/shared/what-is-velocity/page/18",
      "paneConfig": "single",
      "panes": {
        "single": {
          "type": "image",
          "path": "/static/smartgraphs/en/current/resources/images/walk_the_wight.jpg",
          "caption": "Creative Commons BY-NC-SA 2.0 image courtesy flickr user Auntie P"
        }
      },
      "beforeText": "<p>How can you tell how fast you are moving?</p>",
      "responseTemplate": "/components/response-template/open",
      "afterText": "",
      "startCommands": [

      ],
      "shouldFinishImmediately": false,
      "shouldWaitForSubmissibleResponse": true,
      "submissibilityInspector": {
        "type": "Smartgraphs.FirstResponseFieldInspector"
      },
      "submissibilityCriterion": {
        "gt": [
          { "length": { "strip": "value" } },
          0
        ]
      },
      "triggeredCommands": [

      ],
      "afterSubmissionCommands": [

      ],
      "responseInspector": null,
      "responseBranches": [

      ],
      "defaultBranch": "",
      "isFinalStep": true,
      "shouldAutoAdvancePage": false,
      "hideSubmitButton": true,
      "submitButtonTitle": "",
      "nextButtonShouldSubmit": true
    },
    {
      "url": "/shared/what-is-velocity/page/20/step/1",
      "activityPage": "/shared/what-is-velocity/page/20",
      "paneConfig": "single",
      "panes": {
        "single": {
          "type": "image",
          "path": "/static/smartgraphs/en/current/resources/images/Animated_Aston_Martin_Speedometer.gif",
          "caption": "CC-BY-SA-3.0 Wikimedia Commons image courtesy Dinesh Advani"
        }
      },
      "beforeText": "",
      "responseTemplate": null,
      "afterText": "",
      "startCommands": [

      ],
      "shouldFinishImmediately": false,
      "shouldWaitForSubmissibleResponse": false,
      "submissibilityInspector": null,
      "submissibilityCriterion": null,
      "triggeredCommands": [

      ],
      "afterSubmissionCommands": [

      ],
      "responseInspector": null,
      "responseBranches": [

      ],
      "defaultBranch": null,
      "isFinalStep": false,
      "shouldAutoAdvancePage": true,
      "hideSubmitButton": true,
      "submitButtonTitle": "",
      "nextButtonShouldSubmit": false
    }
  ],
  "units": [

  ],
  "axes": [
    {
      "url": "/shared/what-is-velocity/axes/10s",
      "units": "/builtins/units/seconds",
      "min": 0,
      "max": 10,
      "nSteps": 5,
      "label": "Time"
    },
    {
      "url": "/shared/what-is-velocity/axes/15s",
      "units": "/builtins/units/seconds",
      "min": 0,
      "max": 15,
      "nSteps": 15,
      "label": "Time"
    },
    {
      "url": "/shared/what-is-velocity/axes/30s",
      "units": "/builtins/units/seconds",
      "min": 0,
      "max": 30,
      "nSteps": 6,
      "label": "Time"
    },
    {
      "url": "/shared/what-is-velocity/axes/4.5m",
      "units": "/builtins/units/meters",
      "min": 0,
      "max": 4.5,
      "nSteps": 9,
      "label": "Position"
    },

    {
      "url": "/shared/what-is-velocity/axes/5m",
      "units": "/builtins/units/meters",
      "min": 0,
      "max": 5,
      "nSteps": 10,
      "label": "Position"
    },
    {
      "url": "/shared/what-is-velocity/axes/15m",
      "units": "/builtins/units/meters",
      "min": 0,
      "max": 15,
      "nSteps": 5,
      "label": "Position"
    }
  ],
  "graphs": [
    {
      "url": "/shared/what-is-velocity/graph/freehand-walking-normal",
      "activity": "/shared/what-is-velocity",
      "name": "freehand-walking-normal",
      "description": "freehand prediciton of normal walking velocity",
      "title": "Predicted Data (Normal)",
      "xAxis": "/shared/what-is-velocity/axes/15s",
      "yAxis": "/shared/what-is-velocity/axes/4.5m",
      "initialDatasets": [

      ],
      "initialAnnotations": [

      ]
    },
    {
      "url": "/shared/what-is-velocity/graph/prediction-walking-normal",
      "activity": "/shared/what-is-velocity",
      "name": "prediction-walking-normal",
      "description": "prediciton of normal walking velocity",
      "title": "Predicted Data (Normal)",
      "xAxis": "/shared/what-is-velocity/axes/15s",
      "yAxis": "/shared/what-is-velocity/axes/4.5m",
      "initialDatasets": [

      ],
      "initialAnnotations": [
        {
          "type": "Smartgraphs.FreehandSketch",
          "name": "prediction-normal"
        }
      ]
    },
    {
      "url": "/shared/what-is-velocity/graph/freehand-walking-slow",
      "activity": "/shared/what-is-velocity",
      "name": "freehand-walking-slow",
      "description": "freehand prediciton of slow walking velocity",
      "title": "Predicted Data (Slow)",
      "xAxis": "/shared/what-is-velocity/axes/15s",
      "yAxis": "/shared/what-is-velocity/axes/4.5m",
      "initialDatasets": [

      ],
      "initialAnnotations": [

      ]
    },
    {
      "url": "/shared/what-is-velocity/graph/prediction-walking-slow",
      "activity": "/shared/what-is-velocity",
      "name": "prediction-walking-slow",
      "description": "prediciton of slow walking velocity",
      "title": "Predicted Data (Slow)",
      "xAxis": "/shared/what-is-velocity/axes/15s",
      "yAxis": "/shared/what-is-velocity/axes/4.5m",
      "initialDatasets": [

      ],
      "initialAnnotations": [
        {
          "type": "Smartgraphs.FreehandSketch",
          "name": "prediction-slow"
        }
      ]
    },
    {
      "url": "/shared/what-is-velocity/graph/sensor-normal-walking",
      "activity": "/shared/what-is-velocity",
      "name": "sensor-normal-walking",
      "description": "using sensor to measure normal walking pace",
      "title": "Actual Data (Normal)",
      "xAxis": "/shared/what-is-velocity/axes/15s",
      "yAxis": "/shared/what-is-velocity/axes/4.5m",
      "initialDatasets": [

      ],
      "initialAnnotations": [

      ]
    },
    {
      "url": "/shared/what-is-velocity/graph/sensor-result-normal-walking",
      "activity": "/shared/what-is-velocity",
      "name": "sensor-result-normal-walking",
      "description": "sensor result from normal walking",
      "title": "Actual Data (Normal)",
      "xAxis": "/shared/what-is-velocity/axes/15s",
      "yAxis": "/shared/what-is-velocity/axes/4.5m",
      "initialDatasets": [
        "sensor-normal"
      ],
      "initialAnnotations": [

      ]
    },
    {
      "url": "/shared/what-is-velocity/graph/sensor-slow-walking",
      "activity": "/shared/what-is-velocity",
      "name": "sensor-slow-walking",
      "description": "using sensor to measure slow walking pace",
      "title": "Actual Data (Slow)",
      "xAxis": "/shared/what-is-velocity/axes/15s",
      "yAxis": "/shared/what-is-velocity/axes/4.5m",
      "initialDatasets": [

      ],
      "initialAnnotations": [

      ]
    },
    {
      "url": "/shared/what-is-velocity/graph/sensor-result-slow-walking",
      "activity": "/shared/what-is-velocity",
      "name": "sensor-result-slow-walking",
      "description": "sensor result from slow walking",
      "title": "Actual Data (Slow)",
      "xAxis": "/shared/what-is-velocity/axes/15s",
      "yAxis": "/shared/what-is-velocity/axes/4.5m",
      "initialDatasets": [
        "sensor-slow"
      ],
      "initialAnnotations": [

      ]
    },
    {
      "url": "/shared/what-is-velocity/graph/slope-graph",
      "activity": "/shared/what-is-velocity",
      "name": "slope-graph",
      "description": "graph for calculating slope",
      "title": "Position vs. Time",
      "xAxis": "/shared/what-is-velocity/axes/10s",
      "yAxis": "/shared/what-is-velocity/axes/15m",
      "initialDatasets": [
        "slope-data"
      ],
      "initialAnnotations": [

      ]
    },
    {
      "url": "/shared/what-is-velocity/graph/slope-graph-analyze",
      "activity": "/shared/what-is-velocity",
      "name": "slope-graph-analyze",
      "description": "graph for analyzing slope",
      "title": "Position vs. Time",
      "xAxis": "/shared/what-is-velocity/axes/15s",
      "yAxis": "/shared/what-is-velocity/axes/5m",
      "initialDatasets": [

      ],
      "initialAnnotations": [
        {
          "type": "Smartgraphs.FreehandSketch",
          "name": "slope-data-analyze-line-A"
        },
        {
          "type": "Smartgraphs.FreehandSketch",
          "name": "slope-data-analyze-line-B"
        },
        {
          "type": "Smartgraphs.FreehandSketch",
          "name": "slope-data-analyze-line-C"
        },
        {
          "type": "Smartgraphs.FreehandSketch",
          "name": "slope-data-analyze-line-D"
        }
      ]
    }
  ],
  "responseTemplates": [
    {
      "url": "/components/response-template/open",
      "templateString": "",
      "fieldTypes": [
        "textarea"
      ],
      "fieldChoicesList": [
        null
      ],
      "initialValues": [
        ""
      ]
    },
    {
      "url": "/components/response-template/numeric",
      "templateString": "",
      "fieldTypes": [
        "numeric"
      ],
      "fieldChoicesList": [
        null
      ],
      "initialValues": [

      ]
    },
    {
      "url": "/components/response-template/slope-graph-analyze",
      "templateString": "which",
      "fieldTypes": [
        "multiplechoice"
      ],
      "fieldChoicesList": [
        [ "Line A", "Line B", "Line C", "Line D"]
      ],
      "initialValues": [
        ""
      ]
    },
    {
      "url": "/components/response-templates/multiple_b",
      "templateString": "",
      "fieldTypes": [
        "multiplechoice"
      ],
      "fieldChoicesList": [
        [ "Line A", "Line B", "Line C", "Line D"]
      ],
      "initialValues": [
        ""
      ]
    }
  ],
  "datasets": [
    {
      "url": "/shared/what-is-velocity/dataset/slope-data",
      "name": "slope-data",
      "activity": "/shared/what-is-velocity",
      "xUnits": "/builtins/units/seconds",
      "xLabel": "Time",
      "xShortLabel": "Time",
      "yUnits": "/builtins/units/meters",
      "yLabel": "Position",
      "yShortLabel": "Position",
      "points": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11
      ],
      "session": null,
      "defaultColor": null
    }
  ],
  "datapoints": [
    {
      "x": 0,
      "y": 0,
      "guid": 1,
      "dataset": "/shared/what-is-velocity/dataset/slope-data"
    },
    {
      "x": 1,
      "y": 2,
      "guid": 2,
      "dataset": "/shared/what-is-velocity/dataset/slope-data"
    },
    {
      "x": 2,
      "y": 4,
      "guid": 3,
      "dataset": "/shared/what-is-velocity/dataset/slope-data"
    },
    {
      "x": 3,
      "y": 5,
      "guid": 4,
      "dataset": "/shared/what-is-velocity/dataset/slope-data"
    },
    {
      "x": 4,
      "y": 6,
      "guid": 5,
      "dataset": "/shared/what-is-velocity/dataset/slope-data"
    },
    {
      "x": 5,
      "y": 8,
      "guid": 6,
      "dataset": "/shared/what-is-velocity/dataset/slope-data"
    },
    {
      "x": 6,
      "y": 8,
      "guid": 7,
      "dataset": "/shared/what-is-velocity/dataset/slope-data"
    },
    {
      "x": 7,
      "y": 10,
      "guid": 8,
      "dataset": "/shared/what-is-velocity/dataset/slope-data"
    },
    {
      "x": 8,
      "y": 11,
      "guid": 9,
      "dataset": "/shared/what-is-velocity/dataset/slope-data"
    },
    {
      "x": 9,
      "y": 12,
      "guid": 10,
      "dataset": "/shared/what-is-velocity/dataset/slope-data"
    },
    {
      "x": 10,
      "y": 15,
      "guid": 11,
      "dataset": "/shared/what-is-velocity/dataset/slope-data"
    },
    {
      "x": 7,
      "y": 4,
      "guid": "16-A"
    },
    {
      "x": 10,
      "y": 2.9,
      "guid": "16-B"
    },
    {
      "x": 10.5,
      "y": 1.9,
      "guid": "16-C"
    },
    {
      "x": 13,
      "y": 0.9,
      "guid": "16-D"
    }
  ],
  "annotations": [
    {
      "type": "FreehandSketch",
      "records": [
        {
          "url": "/shared/what-is-velocity/annotation/slope-data-analyze-line-A",
          "name": "slope-data-analyze-line-A",
          "activity": "/shared/what-is-velocity",
          "points": [
            {
              "x": 0,
              "y": 0
            },
            {
              "x": 9,
              "y": 4.5
            }
          ],
          "session": null,
          "strokeColor": "#2f7f0d"
        },
        {
          "url": "/shared/what-is-velocity/annotation/slope-data-analyze-line-B",
          "name": "slope-data-analyze-line-B",
          "activity": "/shared/what-is-velocity",
          "points": [
            {
              "x": 0,
              "y": 0
            },
            {
              "x": 15,
              "y": 4
            }
          ],
          "session": null,
          "strokeColor": "#000000"
        },
        {
          "url": "/shared/what-is-velocity/annotation/slope-data-analyze-line-C",
          "name": "slope-data-analyze-line-C",
          "activity": "/shared/what-is-velocity",
          "points": [
            {
              "x": 0,
              "y": 0
            },
            {
              "x": 15,
              "y": 2.5
            }
          ],
          "session": null,
          "strokeColor": "#ff7f0d"
        },
        {
          "url": "/shared/what-is-velocity/annotation/slope-data-analyze-line-D",
          "name": "slope-data-analyze-line-D",
          "activity": "/shared/what-is-velocity",
          "points": [
            {
              "x": 0,
              "y": 0
            },
            {
              "x": 15,
              "y": 1
            }
          ],
          "session": null,
          "strokeColor": "#1f77b3"
        }
      ]
    },
    {
      "type": "HighlightedPoint",
      "records": [
        {
          "url": "/shared/what-is-velocity/annotation/first-point-A",
          "name": "first-point-A",
          "activity": "/shared/what-is-velocity",
          "session": null,
          "point": null,
          "displayStyle": "highlight-point-and-dim-background",
          "datasetColor": "#cccccc",
          "pointColor": "#1f77b4"
        },
        {
          "url": "/shared/what-is-velocity/annotation/second-point-A",
          "name": "second-point-A",
          "activity": "/shared/what-is-velocity",
          "session": null,
          "point": null,
          "displayStyle": "highlight-point-and-dim-background",
          "datasetColor": "#cccccc",
          "pointColor": "#ff7f0e"
        },
        {
          "url": "/shared/what-is-velocity/annotation/first-point-B",
          "name": "first-point-B",
          "activity": "/shared/what-is-velocity",
          "session": null,
          "point": null,
          "displayStyle": "highlight-point-and-dim-background",
          "datasetColor": "#cccccc",
          "pointColor": "#1f77b4"
        },
        {
          "url": "/shared/what-is-velocity/annotation/second-point-B",
          "name": "second-point-B",
          "activity": "/shared/what-is-velocity",
          "session": null,
          "point": null,
          "displayStyle": "highlight-point-and-dim-background",
          "datasetColor": "#cccccc",
          "pointColor": "#ff7f0e"
        },
        {
          "url": "/shared/what-is-velocity/annotation/first-point-C",
          "name": "first-point-C",
          "activity": "/shared/what-is-velocity",
          "session": null,
          "point": null,
          "displayStyle": "highlight-point-and-dim-background",
          "datasetColor": "#cccccc",
          "pointColor": "#1f77b4"
        },
        {
          "url": "/shared/what-is-velocity/annotation/second-point-C",
          "name": "second-point-C",
          "activity": "/shared/what-is-velocity",
          "session": null,
          "point": null,
          "displayStyle": "highlight-point-and-dim-background",
          "datasetColor": "#cccccc",
          "pointColor": "#ff7f0e"
        }
      ]
    }
  ]
}
;
Smartgraphs.activityDocs = Smartgraphs.activityDocs || {};
Smartgraphs.activityDocs["/shared/reflect-a-line"] =
{
  "_id": "reflect-a-line.df6",
  "_rev": 1,
  "data_format_version": 6,
  "activity": {
    "title": "Reflect a line",
    "url": "/shared/reflect-a-line",
    "owner": "shared",
    "pages": [
      "/shared/reflect-a-line/page/1-1-reflect-a-line"
    ],
    "axes": [
      "/shared/reflect-a-line/axes/1",
      "/shared/reflect-a-line/axes/2"
    ],
    "authorName": "Andy Zucker"
  },
  "pages": [
    {
      "name": "1 Reflect a line",
      "url": "/shared/reflect-a-line/page/1-1-reflect-a-line",
      "activity": "/shared/reflect-a-line",
      "index": 1,
      "introText": "Here is a one-page draft of reflecting a line.",
      "steps": [
        "/shared/reflect-a-line/page/1-1-reflect-a-line/step/1",
        "/shared/reflect-a-line/page/1-1-reflect-a-line/step/2",
        "/shared/reflect-a-line/page/1-1-reflect-a-line/step/3",
        "/shared/reflect-a-line/page/1-1-reflect-a-line/step/4",
        "/shared/reflect-a-line/page/1-1-reflect-a-line/step/5",
        "/shared/reflect-a-line/page/1-1-reflect-a-line/step/6",
        "/shared/reflect-a-line/page/1-1-reflect-a-line/step/7",
        "/shared/reflect-a-line/page/1-1-reflect-a-line/step/8",
        "/shared/reflect-a-line/page/1-1-reflect-a-line/step/9"
      ],
      "firstStep": "/shared/reflect-a-line/page/1-1-reflect-a-line/step/1",
      "contextVars": [

      ]
    }
  ],
  "steps": [
    {
      "url": "/shared/reflect-a-line/page/1-1-reflect-a-line/step/1",
      "activityPage": "/shared/reflect-a-line/page/1-1-reflect-a-line",
      "beforeText": "Construct a line that is a reflection across the X-axis of Y=3-X.",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "title": "y=3-X",
          "xAxis": "/shared/reflect-a-line/axes/1",
          "yAxis": "/shared/reflect-a-line/axes/2",
          "showCrossHairs": false,
          "showGraphGrid": true,
          "showToolTipCoords": true,
          "annotations": [
            "freehand-sketch-1"
          ],
          "highlightedAnnotations": [

          ],
          "data": [
            "Empty dataset",
            "y=3-x"
          ],
          "legends": {
            "title": "legend",
            "type": "name",
            "referenceDatadef": "",
            "datadefs": [
              "y=3-x"
            ]
          },
          "activeDatadefs": [
            "Empty dataset"
          ]
        },
        "bottom": {
          "type": "table",
          "data": "Empty dataset",
          "xLabel": "X",
          "yLabel": "Y",
          "annotations": [

          ],
          "highlightedAnnotations": [

          ]
        }
      },
      "tools": [
        {
          "name": "graphing",
          "setup": {
            "pane": "top",
            "shape": "singleLine",
            "annotationName": "freehand-sketch-1",
            "data": "Empty dataset"
          }
        }
      ],
      "submitButtonTitle": "Check My Answer",
      "defaultBranch": "/shared/reflect-a-line/page/1-1-reflect-a-line/step/2",
      "submissibilityCriterion": [
        "=",
        [
          "lineCount"
        ],
        1
      ],
      "responseBranches": [
        {
          "criterion": [
            "and",
            [
              "withinAbsTolerance",
              1,
              [
                "lineSlope",
                "freehand-sketch-1",
                1
              ],
              0.1
            ],
            [
              "withinAbsTolerance",
              -3,
              [
                "yIntercept",
                "freehand-sketch-1",
                1
              ],
              0.1
            ]
          ],
          "step": "/shared/reflect-a-line/page/1-1-reflect-a-line/step/9"
        },
        {
          "criterion": [
            "withinAbsTolerance",
            1,
            [
              "lineSlope",
              "freehand-sketch-1",
              1
            ],
            0.1
          ],
          "step": "/shared/reflect-a-line/page/1-1-reflect-a-line/step/4"
        },
        {
          "criterion": [
            "withinAbsTolerance",
            -3,
            [
              "yIntercept",
              "freehand-sketch-1",
              1
            ],
            0.1
          ],
          "step": "/shared/reflect-a-line/page/1-1-reflect-a-line/step/3"
        }
      ],
      "isFinalStep": false,
      "substitutedExpressions": [

      ]
    },
    {
      "url": "/shared/reflect-a-line/page/1-1-reflect-a-line/step/2",
      "activityPage": "/shared/reflect-a-line/page/1-1-reflect-a-line",
      "beforeText": "<b>No, please try again.</b><p>Construct a line that is a reflection across the X-axis of Y=3-X.</p>",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "title": "y=3-X",
          "xAxis": "/shared/reflect-a-line/axes/1",
          "yAxis": "/shared/reflect-a-line/axes/2",
          "showCrossHairs": false,
          "showGraphGrid": true,
          "showToolTipCoords": true,
          "annotations": [
            "freehand-sketch-1"
          ],
          "highlightedAnnotations": [

          ],
          "data": [
            "Empty dataset",
            "y=3-x"
          ],
          "legends": {
            "title": "legend",
            "type": "name",
            "referenceDatadef": "",
            "datadefs": [
              "y=3-x"
            ]
          },
          "activeDatadefs": [
            "Empty dataset"
          ]
        },
        "bottom": {
          "type": "table",
          "data": "Empty dataset",
          "xLabel": "X",
          "yLabel": "Y",
          "annotations": [

          ],
          "highlightedAnnotations": [

          ]
        }
      },
      "tools": [
        {
          "name": "graphing",
          "setup": {
            "pane": "top",
            "shape": "singleLine",
            "annotationName": "freehand-sketch-1",
            "data": "Empty dataset"
          }
        }
      ],
      "submitButtonTitle": "Check My Answer",
      "defaultBranch": "/shared/reflect-a-line/page/1-1-reflect-a-line/step/5",
      "submissibilityCriterion": [
        "or",
        [
          "pointMoved",
          "Empty dataset",
          1
        ],
        [
          "pointMoved",
          "Empty dataset",
          2
        ]
      ],
      "responseBranches": [
        {
          "criterion": [
            "and",
            [
              "withinAbsTolerance",
              1,
              [
                "lineSlope",
                "freehand-sketch-1",
                1
              ],
              0.1
            ],
            [
              "withinAbsTolerance",
              -3,
              [
                "yIntercept",
                "freehand-sketch-1",
                1
              ],
              0.1
            ]
          ],
          "step": "/shared/reflect-a-line/page/1-1-reflect-a-line/step/9"
        },
        {
          "criterion": [
            "withinAbsTolerance",
            1,
            [
              "lineSlope",
              "freehand-sketch-1",
              1
            ],
            0.1
          ],
          "step": "/shared/reflect-a-line/page/1-1-reflect-a-line/step/7"
        },
        {
          "criterion": [
            "withinAbsTolerance",
            -3,
            [
              "yIntercept",
              "freehand-sketch-1",
              1
            ],
            0.1
          ],
          "step": "/shared/reflect-a-line/page/1-1-reflect-a-line/step/6"
        }
      ],
      "isFinalStep": false,
      "substitutedExpressions": [

      ]
    },
    {
      "url": "/shared/reflect-a-line/page/1-1-reflect-a-line/step/3",
      "activityPage": "/shared/reflect-a-line/page/1-1-reflect-a-line",
      "beforeText": "<b>Your slope is not correct. Try again.</b><p>Construct a line that is a reflection across the X-axis of Y=3-X.</p>",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "title": "y=3-X",
          "xAxis": "/shared/reflect-a-line/axes/1",
          "yAxis": "/shared/reflect-a-line/axes/2",
          "showCrossHairs": false,
          "showGraphGrid": true,
          "showToolTipCoords": true,
          "annotations": [
            "freehand-sketch-1"
          ],
          "highlightedAnnotations": [

          ],
          "data": [
            "Empty dataset",
            "y=3-x"
          ],
          "legends": {
            "title": "legend",
            "type": "name",
            "referenceDatadef": "",
            "datadefs": [
              "y=3-x"
            ]
          },
          "activeDatadefs": [
            "Empty dataset"
          ]
        },
        "bottom": {
          "type": "table",
          "data": "Empty dataset",
          "xLabel": "X",
          "yLabel": "Y",
          "annotations": [

          ],
          "highlightedAnnotations": [

          ]
        }
      },
      "tools": [
        {
          "name": "graphing",
          "setup": {
            "pane": "top",
            "shape": "singleLine",
            "annotationName": "freehand-sketch-1",
            "data": "Empty dataset"
          }
        }
      ],
      "submitButtonTitle": "Check My Answer",
      "defaultBranch": "/shared/reflect-a-line/page/1-1-reflect-a-line/step/5",
      "submissibilityCriterion": [
        "or",
        [
          "pointMoved",
          "Empty dataset",
          1
        ],
        [
          "pointMoved",
          "Empty dataset",
          2
        ]
      ],
      "responseBranches": [
        {
          "criterion": [
            "and",
            [
              "withinAbsTolerance",
              1,
              [
                "lineSlope",
                "freehand-sketch-1",
                1
              ],
              0.1
            ],
            [
              "withinAbsTolerance",
              -3,
              [
                "yIntercept",
                "freehand-sketch-1",
                1
              ],
              0.1
            ]
          ],
          "step": "/shared/reflect-a-line/page/1-1-reflect-a-line/step/9"
        },
        {
          "criterion": [
            "withinAbsTolerance",
            1,
            [
              "lineSlope",
              "freehand-sketch-1",
              1
            ],
            0.1
          ],
          "step": "/shared/reflect-a-line/page/1-1-reflect-a-line/step/7"
        },
        {
          "criterion": [
            "withinAbsTolerance",
            -3,
            [
              "yIntercept",
              "freehand-sketch-1",
              1
            ],
            0.1
          ],
          "step": "/shared/reflect-a-line/page/1-1-reflect-a-line/step/6"
        }
      ],
      "isFinalStep": false,
      "substitutedExpressions": [

      ]
    },
    {
      "url": "/shared/reflect-a-line/page/1-1-reflect-a-line/step/4",
      "activityPage": "/shared/reflect-a-line/page/1-1-reflect-a-line",
      "beforeText": "<b>Your y-intercept is not correct. Try again.</b><p>Construct a line that is a reflection across the X-axis of Y=3-X.</p>",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "title": "y=3-X",
          "xAxis": "/shared/reflect-a-line/axes/1",
          "yAxis": "/shared/reflect-a-line/axes/2",
          "showCrossHairs": false,
          "showGraphGrid": true,
          "showToolTipCoords": true,
          "annotations": [
            "freehand-sketch-1"
          ],
          "highlightedAnnotations": [

          ],
          "data": [
            "Empty dataset",
            "y=3-x"
          ],
          "legends": {
            "title": "legend",
            "type": "name",
            "referenceDatadef": "",
            "datadefs": [
              "y=3-x"
            ]
          },
          "activeDatadefs": [
            "Empty dataset"
          ]
        },
        "bottom": {
          "type": "table",
          "data": "Empty dataset",
          "xLabel": "X",
          "yLabel": "Y",
          "annotations": [

          ],
          "highlightedAnnotations": [

          ]
        }
      },
      "tools": [
        {
          "name": "graphing",
          "setup": {
            "pane": "top",
            "shape": "singleLine",
            "annotationName": "freehand-sketch-1",
            "data": "Empty dataset"
          }
        }
      ],
      "submitButtonTitle": "Check My Answer",
      "defaultBranch": "/shared/reflect-a-line/page/1-1-reflect-a-line/step/5",
      "submissibilityCriterion": [
        "or",
        [
          "pointMoved",
          "Empty dataset",
          1
        ],
        [
          "pointMoved",
          "Empty dataset",
          2
        ]
      ],
      "responseBranches": [
        {
          "criterion": [
            "and",
            [
              "withinAbsTolerance",
              1,
              [
                "lineSlope",
                "freehand-sketch-1",
                1
              ],
              0.1
            ],
            [
              "withinAbsTolerance",
              -3,
              [
                "yIntercept",
                "freehand-sketch-1",
                1
              ],
              0.1
            ]
          ],
          "step": "/shared/reflect-a-line/page/1-1-reflect-a-line/step/9"
        },
        {
          "criterion": [
            "withinAbsTolerance",
            1,
            [
              "lineSlope",
              "freehand-sketch-1",
              1
            ],
            0.1
          ],
          "step": "/shared/reflect-a-line/page/1-1-reflect-a-line/step/7"
        },
        {
          "criterion": [
            "withinAbsTolerance",
            -3,
            [
              "yIntercept",
              "freehand-sketch-1",
              1
            ],
            0.1
          ],
          "step": "/shared/reflect-a-line/page/1-1-reflect-a-line/step/6"
        }
      ],
      "isFinalStep": false,
      "substitutedExpressions": [

      ]
    },
    {
      "url": "/shared/reflect-a-line/page/1-1-reflect-a-line/step/5",
      "activityPage": "/shared/reflect-a-line/page/1-1-reflect-a-line",
      "beforeText": "<b>No, please try again.</b><p>Construct a line that is a reflection across the X-axis of Y=3-X.</p>",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "title": "y=3-X",
          "xAxis": "/shared/reflect-a-line/axes/1",
          "yAxis": "/shared/reflect-a-line/axes/2",
          "showCrossHairs": false,
          "showGraphGrid": true,
          "showToolTipCoords": true,
          "annotations": [
            "freehand-sketch-1"
          ],
          "highlightedAnnotations": [

          ],
          "data": [
            "Empty dataset",
            "y=3-x"
          ],
          "legends": {
            "title": "legend",
            "type": "name",
            "referenceDatadef": "",
            "datadefs": [
              "y=3-x"
            ]
          },
          "activeDatadefs": [
            "Empty dataset"
          ]
        },
        "bottom": {
          "type": "table",
          "data": "Empty dataset",
          "xLabel": "X",
          "yLabel": "Y",
          "annotations": [

          ],
          "highlightedAnnotations": [

          ]
        }
      },
      "tools": [
        {
          "name": "graphing",
          "setup": {
            "pane": "top",
            "shape": "singleLine",
            "annotationName": "freehand-sketch-1",
            "data": "Empty dataset"
          }
        }
      ],
      "submitButtonTitle": "Check My Answer",
      "defaultBranch": "/shared/reflect-a-line/page/1-1-reflect-a-line/step/8",
      "submissibilityCriterion": [
        "or",
        [
          "pointMoved",
          "Empty dataset",
          1
        ],
        [
          "pointMoved",
          "Empty dataset",
          2
        ]
      ],
      "responseBranches": [
        {
          "criterion": [
            "and",
            [
              "withinAbsTolerance",
              1,
              [
                "lineSlope",
                "freehand-sketch-1",
                1
              ],
              0.1
            ],
            [
              "withinAbsTolerance",
              -3,
              [
                "yIntercept",
                "freehand-sketch-1",
                1
              ],
              0.1
            ]
          ],
          "step": "/shared/reflect-a-line/page/1-1-reflect-a-line/step/9"
        }
      ],
      "isFinalStep": false,
      "substitutedExpressions": [

      ]
    },
    {
      "url": "/shared/reflect-a-line/page/1-1-reflect-a-line/step/6",
      "activityPage": "/shared/reflect-a-line/page/1-1-reflect-a-line",
      "beforeText": "<b>Your slope is not correct. Try again.</b><p>Construct a line that is a reflection across the X-axis of Y=3-X.</p>",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "title": "y=3-X",
          "xAxis": "/shared/reflect-a-line/axes/1",
          "yAxis": "/shared/reflect-a-line/axes/2",
          "showCrossHairs": false,
          "showGraphGrid": true,
          "showToolTipCoords": true,
          "annotations": [
            "freehand-sketch-1"
          ],
          "highlightedAnnotations": [

          ],
          "data": [
            "Empty dataset",
            "y=3-x"
          ],
          "legends": {
            "title": "legend",
            "type": "name",
            "referenceDatadef": "",
            "datadefs": [
              "y=3-x"
            ]
          },
          "activeDatadefs": [
            "Empty dataset"
          ]
        },
        "bottom": {
          "type": "table",
          "data": "Empty dataset",
          "xLabel": "X",
          "yLabel": "Y",
          "annotations": [

          ],
          "highlightedAnnotations": [

          ]
        }
      },
      "tools": [
        {
          "name": "graphing",
          "setup": {
            "pane": "top",
            "shape": "singleLine",
            "annotationName": "freehand-sketch-1",
            "data": "Empty dataset"
          }
        }
      ],
      "submitButtonTitle": "Check My Answer",
      "defaultBranch": "/shared/reflect-a-line/page/1-1-reflect-a-line/step/8",
      "submissibilityCriterion": [
        "or",
        [
          "pointMoved",
          "Empty dataset",
          1
        ],
        [
          "pointMoved",
          "Empty dataset",
          2
        ]
      ],
      "responseBranches": [
        {
          "criterion": [
            "and",
            [
              "withinAbsTolerance",
              1,
              [
                "lineSlope",
                "freehand-sketch-1",
                1
              ],
              0.1
            ],
            [
              "withinAbsTolerance",
              -3,
              [
                "yIntercept",
                "freehand-sketch-1",
                1
              ],
              0.1
            ]
          ],
          "step": "/shared/reflect-a-line/page/1-1-reflect-a-line/step/9"
        }
      ],
      "isFinalStep": false,
      "substitutedExpressions": [

      ]
    },
    {
      "url": "/shared/reflect-a-line/page/1-1-reflect-a-line/step/7",
      "activityPage": "/shared/reflect-a-line/page/1-1-reflect-a-line",
      "beforeText": "<b>Your y-intercept is not correct. Try again.</b><p>Construct a line that is a reflection across the X-axis of Y=3-X.</p>",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "title": "y=3-X",
          "xAxis": "/shared/reflect-a-line/axes/1",
          "yAxis": "/shared/reflect-a-line/axes/2",
          "showCrossHairs": false,
          "showGraphGrid": true,
          "showToolTipCoords": true,
          "annotations": [
            "freehand-sketch-1"
          ],
          "highlightedAnnotations": [

          ],
          "data": [
            "Empty dataset",
            "y=3-x"
          ],
          "legends": {
            "title": "legend",
            "type": "name",
            "referenceDatadef": "",
            "datadefs": [
              "y=3-x"
            ]
          },
          "activeDatadefs": [
            "Empty dataset"
          ]
        },
        "bottom": {
          "type": "table",
          "data": "Empty dataset",
          "xLabel": "X",
          "yLabel": "Y",
          "annotations": [

          ],
          "highlightedAnnotations": [

          ]
        }
      },
      "tools": [
        {
          "name": "graphing",
          "setup": {
            "pane": "top",
            "shape": "singleLine",
            "annotationName": "freehand-sketch-1",
            "data": "Empty dataset"
          }
        }
      ],
      "submitButtonTitle": "Check My Answer",
      "defaultBranch": "/shared/reflect-a-line/page/1-1-reflect-a-line/step/8",
      "submissibilityCriterion": [
        "or",
        [
          "pointMoved",
          "Empty dataset",
          1
        ],
        [
          "pointMoved",
          "Empty dataset",
          2
        ]
      ],
      "responseBranches": [
        {
          "criterion": [
            "and",
            [
              "withinAbsTolerance",
              1,
              [
                "lineSlope",
                "freehand-sketch-1",
                1
              ],
              0.1
            ],
            [
              "withinAbsTolerance",
              -3,
              [
                "yIntercept",
                "freehand-sketch-1",
                1
              ],
              0.1
            ]
          ],
          "step": "/shared/reflect-a-line/page/1-1-reflect-a-line/step/9"
        }
      ],
      "isFinalStep": false,
      "substitutedExpressions": [

      ]
    },
    {
      "url": "/shared/reflect-a-line/page/1-1-reflect-a-line/step/8",
      "activityPage": "/shared/reflect-a-line/page/1-1-reflect-a-line",
      "beforeText": "<b>Here is the correct line.</b>",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "title": "y=3-X",
          "xAxis": "/shared/reflect-a-line/axes/1",
          "yAxis": "/shared/reflect-a-line/axes/2",
          "showCrossHairs": false,
          "showGraphGrid": true,
          "showToolTipCoords": false,
          "annotations": [
            "freehand-sketch-1"
          ],
          "highlightedAnnotations": [

          ],
          "data": [
            "Empty dataset",
            "y=3-x",
            "Correct Line (Page 1)"
          ],
          "datarefs": [
            "dataref-1",
            "dataref-2"
          ],
          "legends": {
            "title": "legend",
            "type": "name",
            "referenceDatadef": "",
            "datadefs": [
              "y=3-x",
              "Correct Line (Page 1)"
            ]
          },
          "activeDatadefs": [
            "Empty dataset"
          ]
        },
        "bottom": {
          "type": "table",
          "data": "Empty dataset",
          "xLabel": "X",
          "yLabel": "Y",
          "annotations": [

          ],
          "highlightedAnnotations": [

          ]
        }
      },
      "isFinalStep": true,
      "nextButtonShouldSubmit": true
    },
    {
      "url": "/shared/reflect-a-line/page/1-1-reflect-a-line/step/9",
      "activityPage": "/shared/reflect-a-line/page/1-1-reflect-a-line",
      "beforeText": "<b>Yes, that is correct.</b>",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "title": "y=3-X",
          "xAxis": "/shared/reflect-a-line/axes/1",
          "yAxis": "/shared/reflect-a-line/axes/2",
          "showCrossHairs": false,
          "showGraphGrid": true,
          "showToolTipCoords": false,
          "annotations": [
            "freehand-sketch-1"
          ],
          "highlightedAnnotations": [

          ],
          "data": [
            "Empty dataset",
            "y=3-x",
            "Correct Line (Page 1)"
          ],
          "datarefs": [
            "dataref-1",
            "dataref-2"
          ],
          "legends": {
            "title": "legend",
            "type": "name",
            "referenceDatadef": "",
            "datadefs": [
              "y=3-x",
              "Correct Line (Page 1)"
            ]
          },
          "activeDatadefs": [
            "Empty dataset"
          ]
        },
        "bottom": {
          "type": "table",
          "data": "Empty dataset",
          "xLabel": "X",
          "yLabel": "Y",
          "annotations": [

          ],
          "highlightedAnnotations": [

          ]
        }
      },
      "isFinalStep": true,
      "nextButtonShouldSubmit": true
    }
  ],
  "responseTemplates": [

  ],
  "axes": [
    {
      "url": "/shared/reflect-a-line/axes/1",
      "min": -5,
      "max": 5,
      "nSteps": 10,
      "label": "X"
    },
    {
      "url": "/shared/reflect-a-line/axes/2",
      "min": -5,
      "max": 5,
      "nSteps": 10,
      "label": "Y"
    }
  ],
  "datadefs": [
    {
      "type": "UnorderedDataPoints",
      "records": [
        {
          "url": "/shared/reflect-a-line/datadefs/Empty dataset",
          "name": "Empty dataset",
          "activity": "/shared/reflect-a-line",
          "points": [

          ],
          "pointType": "dot",
          "lineType": "none",
          "lineSnapDistance": 0.1
        },
        {
          "url": "/shared/reflect-a-line/datadefs/y=3-x",
          "name": "y=3-x",
          "activity": "/shared/reflect-a-line",
          "points": [

          ],
          "pointType": "none",
          "lineType": "connected",
          "lineSnapDistance": 0.1
        },
        {
          "url": "/shared/reflect-a-line/datadefs/Correct Line (Page 1)",
          "name": "Correct Line (Page 1)",
          "activity": "/shared/reflect-a-line",
          "points": [

          ],
          "pointType": "none",
          "lineType": "connected",
          "lineSnapDistance": 0.1,
          "color": "#17becf"
        }
      ]
    }
  ],
  "datarefs": [
    {
      "type": "CompositeEquation",
      "records": [
        {
          "url": "/shared/reflect-a-line/datarefs/dataref-1",
          "name": "dataref-1",
          "activity": "/shared/reflect-a-line",
          "datadefName": "y=3-x",
          "expression": "y = 3-x",
          "xInterval": 0.1,
          "params": {
          }
        }
      ]
    },
    {
      "type": "LinearEquation",
      "records": [
        {
          "url": "/shared/reflect-a-line/datarefs/dataref-2",
          "name": "dataref-2",
          "activity": "/shared/reflect-a-line",
          "datadefName": "Correct Line (Page 1)",
          "expressionForm": "slope-intercept",
          "xInterval": 0.1,
          "params": {
            "slope": 1,
            "yIntercept": -3
          }
        }
      ]
    }
  ],
  "tags": [

  ],
  "annotations": [
    {
      "type": "FreehandSketch",
      "records": [
        {
          "url": "/shared/reflect-a-line/annotations/freehand-sketch-1",
          "name": "freehand-sketch-1",
          "activity": "/shared/reflect-a-line",
          "color": "#CC0000",
          "points": [

          ]
        }
      ]
    }
  ],
  "variables": [

  ],
  "units": [
    {
      "url": "/shared/reflect-a-line/units/Time",
      "activity": "/shared/reflect-a-line",
      "name": "Time",
      "abbreviation": "s",
      "pluralName": "Time"
    },
    {
      "url": "/shared/reflect-a-line/units/Distance",
      "activity": "/shared/reflect-a-line",
      "name": "Distance",
      "abbreviation": "m",
      "pluralName": "Distance"
    },
    {
      "url": "/shared/reflect-a-line/units/degrees Celsius",
      "activity": "/shared/reflect-a-line",
      "name": "degrees Celsiu",
      "abbreviation": "deg C",
      "pluralName": "degrees Celsius"
    },
    {
      "url": "/shared/reflect-a-line/units/minutes",
      "activity": "/shared/reflect-a-line",
      "name": "minute",
      "abbreviation": "min.",
      "pluralName": "minutes"
    },
    {
      "url": "/shared/reflect-a-line/units/meters",
      "activity": "/shared/reflect-a-line",
      "name": "meter",
      "abbreviation": "m",
      "pluralName": "meters"
    },
    {
      "url": "/shared/reflect-a-line/units/seconds",
      "activity": "/shared/reflect-a-line",
      "name": "second",
      "abbreviation": "s",
      "pluralName": "seconds"
    },
    {
      "url": "/shared/reflect-a-line/units/centimeters",
      "activity": "/shared/reflect-a-line",
      "name": "centimeter",
      "abbreviation": "cm",
      "pluralName": "centimeters"
    },
    {
      "url": "/shared/reflect-a-line/units/grams",
      "activity": "/shared/reflect-a-line",
      "name": "gram",
      "abbreviation": "gr",
      "pluralName": "grams"
    },
    {
      "url": "/shared/reflect-a-line/units/miles",
      "activity": "/shared/reflect-a-line",
      "name": "mile",
      "abbreviation": "mi",
      "pluralName": "miles"
    },
    {
      "url": "/shared/reflect-a-line/units/hours",
      "activity": "/shared/reflect-a-line",
      "name": "hour",
      "abbreviation": "hr",
      "pluralName": "hours"
    },
    {
      "url": "/shared/reflect-a-line/units/Celsius",
      "activity": "/shared/reflect-a-line",
      "name": "Celsiu",
      "abbreviation": "° C.",
      "pluralName": "Celsius"
    },
    {
      "url": "/shared/reflect-a-line/units/dollars",
      "activity": "/shared/reflect-a-line",
      "name": "dollar",
      "abbreviation": "$",
      "pluralName": "dollars"
    },
    {
      "url": "/shared/reflect-a-line/units/inches",
      "activity": "/shared/reflect-a-line",
      "name": "inche",
      "abbreviation": "in",
      "pluralName": "inches"
    },
    {
      "url": "/shared/reflect-a-line/units/years",
      "activity": "/shared/reflect-a-line",
      "name": "year",
      "abbreviation": "yr",
      "pluralName": "years"
    },
    {
      "url": "/shared/reflect-a-line/units/millimeters",
      "activity": "/shared/reflect-a-line",
      "name": "millimeter",
      "abbreviation": "mm",
      "pluralName": "millimeters"
    },
    {
      "url": "/shared/reflect-a-line/units/parts per million",
      "activity": "/shared/reflect-a-line",
      "name": "parts per million",
      "abbreviation": "ppm",
      "pluralName": "parts per million"
    },
    {
      "url": "/shared/reflect-a-line/units/meters per second",
      "activity": "/shared/reflect-a-line",
      "name": "meters per second",
      "abbreviation": "m/s",
      "pluralName": "meters per second"
    }
  ]
}
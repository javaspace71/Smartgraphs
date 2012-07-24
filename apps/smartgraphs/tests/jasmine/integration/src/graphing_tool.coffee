defineJasmineHelpers()
$ ->
  $("body").css "overflow", "auto"

describe "Smartgraphs.graphingTool with 'singleLine' shape option", ->
  store = controller = toolState = graphingTool = null
  beforeEach ->
    graphingTool = Smartgraphs.graphingTool
    graphingTool.set('graphLogicalBounds', { xMin: 0, yMin: 0, xMax: 10, yMax: 10 })
    store = SC.Store.create().from(SC.FixturesDataSource.create())
    controller = Smartgraphs.GraphController.create()
    controller.clear()
    statechart = controller.get("statechart")
    toolState = statechart.getState("GRAPHING_TOOL")
    do =>
      matchArraysUsing = (matcher) ->
        (pairs) ->
          return false if @actual?.length isnt pairs.length or typeof @actual isnt 'object'
          return false for a, i in @actual when not matcher( a, pairs[i] )
          true

      @addMatchers(
        toEqualPairs: matchArraysUsing (a, [x, y]) -> a[0] is x and a[1] is y
      )

  describe "GRAPHING_TOOL state", ->
    it "should exist", ->
      expect(toolState).toBeDefined()

  describe "when the graphing tool is started with shape: 'SINGLE_LINE'", ->
    rep = sketch = startState = null
    beforeEach ->
      rep = store.createRecord(Smartgraphs.UnorderedDataPoints,
        url: "rep"
        points: []
      )
      sketch = store.createRecord(Smartgraphs.FreehandSketch,
        url: "sketch"
        points: []
      )

      spyOn(graphingTool, "getAnnotation").andReturn sketch
      spyOn(graphingTool, "getDatadef").andReturn rep
      spyOn(graphingTool, "hideGraphTitle")
      spyOn(graphingTool, "updateGraphLogicalBounds")
      controller.showCrossHairs = true
      controller.graphingToolStartTool
        annotationName: "freehand-sketch-1"
        shape: "singleLine"
        datadefName: "datadef-1"

      startState = toolState.getPath("ON.SINGLE_LINE.START")

    describe "the graph controller's statechart", ->
      it "should be in the relevant start state", ->
        expect(startState.get("isCurrentState")).toBe true

    describe "the sketch", ->
      it "should have been cleared (have no points)", ->
        expect(sketch.get("points")).toBeEmpty()

      it "should be in the graph controller's list of annotations", ->
        expect(controller.get("annotationList")).toContain sketch

    describe "the dataRepresentation", ->
      it "should have been cleared (have no points)", ->
        expect(rep.get("points")).toBeEmpty()

      it "should be in the graph controller's list of dataRepresentations", ->
        expect(controller.get("datadefList")).toContain rep

    describe "the cursor style requested by the controller", ->
      it "should be 'crosshair'", ->
        expect(controller.get("requestedCursorStyle")).toEqual "crosshair"

    describe "when the controller's inputAreaMouseDown method is called with (0,1)", ->
      beforeEach ->
        controller.inputAreaMouseDown 0, 1

      describe "the representation", ->
        it "should have points [[0, 1]]", ->
          expect(rep.get("points")).toEqualPairs [[0, 1]]

      describe "the cursor style requested by the controller", ->
        it "should be 'crosshair'", ->
          expect(controller.get("requestedCursorStyle")).toEqual "crosshair"

    describe "when the controller's inputAreaMouseDown method is called twice with (0, 1) and (2, 3)", ->
      beforeEach ->
        controller.inputAreaMouseDown 0, 1
        controller.inputAreaMouseDown 2, 3

      describe "the sketch", ->
        it "line should be drawn with points [[0,1], [9,10]]", ->
          expect(sketch.get("points")).toEqualPairs [[0, 1], [9, 10]]

      describe "the representation", ->
        it "should have points [[0,1], [2, 3]]", ->
          expect(rep.get("points")).toEqualPairs [[0, 1], [2, 3]]

      describe "the cursor style requested by the controller", ->
        it "should be back to 'default'", ->
          expect(controller.get("requestedCursorStyle")).toEqual "default"

    describe "when the controller's dataPointDragged method is called with (1, 2)", ->
      beforeEach ->
        spyOn(Smartgraphs.graphingTool, "checkInputAreaScreenBounds").andReturn(true)
        spyOn(Smartgraphs.graphingTool, "pointForCoordinates").andReturn({x: 9, y: 9})
        controller.inputAreaMouseDown 0, 1
        controller.inputAreaMouseDown 2, 3
        controller.dataPointSelected rep, 0, 1
        controller.dataPointDown rep, 0, 1
        controller.dataPointDragged rep, 1, 2
        controller.dataScreenPointUp rep, 1, 2

      describe "the sketch", ->
        it "line should be drawn with points [[0, 1], [9, 10]]", ->
          expect(sketch.get("points")).toEqualPairs [[0, 1], [9, 10]]

      describe "the representation", ->
        it "should have points [[1, 2], [2, 3]]", ->
          expect(rep.get("points")).toEqualPairs [[1, 2], [2, 3]]

      describe "the cursor style requested by the controller", ->
        it "should be back to 'default'", ->
          expect(controller.get("requestedCursorStyle")).toEqual "default"
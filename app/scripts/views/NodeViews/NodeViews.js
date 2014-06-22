define(['BaseNodeView', 'WatchNodeView', 'NumNodeView', 'CSGNodeView', 'FormulaView'], function(BaseNodeView, WatchNodeView, NumNodeView, CSGNodeView, FormulaView){

  var nodeViewTypes = {};

  nodeViewTypes.Base = BaseNodeView;
  nodeViewTypes.Watch = WatchNodeView;
  nodeViewTypes.Number = NumNodeView;

  nodeViewTypes.Formula = FormulaView;

  nodeViewTypes.SolidSphere = CSGNodeView;
  nodeViewTypes.SolidCylinder = CSGNodeView;
  nodeViewTypes.SolidCube = CSGNodeView;

  nodeViewTypes.SolidUnion = CSGNodeView;
  nodeViewTypes.SolidUnionAll = CSGNodeView;
  nodeViewTypes.SolidIntersect = CSGNodeView;
  nodeViewTypes.SolidSubtract = CSGNodeView;
  nodeViewTypes.SolidMove = CSGNodeView;
  nodeViewTypes.SolidRotate = CSGNodeView;
  nodeViewTypes.SolidScale = CSGNodeView;
  nodeViewTypes.Point = CSGNodeView;

  return nodeViewTypes;

});
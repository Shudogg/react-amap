export interface EventMap extends ReactAMap.GetEventFunObject<AMap.Heatmap.EventMap> {
  /** 创建事件 */
  created?: (instance: AMap.Heatmap) => void;
}

export interface HeatmapProps extends
  ReactAMap.BaseChildrenComponentProps,
  AMap.Heatmap.Options
{
  dataSet?: AMap.Heatmap.DataSet;
  /** 可以绑定的事件 */
  events?: EventMap;
}

export type HeatmapType = React.ForwardRefRenderFunction<AMap.Heatmap, HeatmapProps>;

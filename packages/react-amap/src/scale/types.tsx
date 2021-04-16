export interface EventMap extends ReactAMap.GetEventFunObject<AMap.Scale.EventMap> {
  /** 创建事件 */
  created?: (instance: AMap.Scale) => void;
}

export interface ScaleOptions extends Omit<AMap.Scale.Options, 'offset'> {
  /**
   * 偏移量
   */
  offset?: ReactAMap.Offset;
  /**
   * 是否可见
   */
  visible?: boolean;
}

export interface ScaleProps extends
  ReactAMap.BaseChildrenComponentProps,
  ScaleOptions
{
  /** 可以绑定的事件 */
  events?: EventMap;
}

export type ScaleType = React.ForwardRefRenderFunction<AMap.Scale, ScaleProps>;

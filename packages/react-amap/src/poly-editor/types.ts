import { AbstractComponentProps } from '../AbstractComponent';

export interface EventMap extends ReactAMap.GetEventFunObject<AMap.PolyEditor.EventMap> {
  /** 创建事件 */
  created?: (instance: AMap.PolyEditor) => void;
}

export interface PolyEditorProps extends
  ReactAMap.BaseChildrenComponentProps,
  AbstractComponentProps
{
  /** 是否开启编辑功能 */
  active?: boolean;
  /** 绑定的事件 */
  events?: EventMap;
  /** 由父组件注入 */
  poly?: AMap.Polygon | AMap.Polyline;
}

export interface PolyEditorState {
  loaded: boolean
}
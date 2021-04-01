import React, { useEffect } from 'react';
import { noop } from '../utils';

export interface ContextMenuItemProps extends ReactAMap.BaseChildrenComponentProps {
  contextMenu?: AMap.ContextMenu;
  text?: string;
  onClick?: (event: HTMLLIElement) => void;
}

export const Item: React.FC<ContextMenuItemProps> = (props = {}) => {
  const { text = '', contextMenu, onClick = noop } = props;

  useEffect(() => {
    if (contextMenu) {
      contextMenu.addItem(text, onClick, 1);
    }
    return () => {
      if (contextMenu) {
        contextMenu.removeItem(text, onClick);
      }
    };
  }, [props.contextMenu, props.text, props.onClick]);

  return null;
};
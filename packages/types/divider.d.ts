/// <reference types="react" />
import { ViewProps } from "@tarojs/components/types/View";
import { CustomElement } from "./index";

declare type Position = "left" | "right" | "center";

declare interface DividerProps extends ViewProps {
  text?: string;
  hairLine?: boolean;
  position?: Position;
  children?: CustomElement;
}

declare const Divider: React.ComponentType<DividerProps>;

export { Divider, Position, DividerProps };

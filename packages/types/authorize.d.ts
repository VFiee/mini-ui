/// <reference types="react" />
import { StandardProps } from "@tarojs/components";

export declare type AuthScope =
  | "werun"
  | "record"
  | "camera"
  | "userLocation"
  | "writePhotosAlbum"
  | "userLocationBackground";

export declare type OpenType =
  | "contact"
  | "getPhoneNumber"
  | "getUserInfo"
  | "launchApp"
  | "scope";

export declare interface AuthorizeProps extends StandardProps {
  authorize?: boolean;
  openType?: OpenType;
  authScope?: AuthScope;
  onAuthorize?: Function;
  children?: React.ReactNode;
}

declare const Authorize: React.ComponentType<AuthorizeProps>;

export default Authorize;

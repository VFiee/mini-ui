export default {
  pages: [
    "pages/index/index",
    "pages/appbar/index",
    "pages/authorize/index",
    "pages/carousel/index",
    "pages/divider/index",
    "pages/empty/index",
    "pages/icon/index",
    "pages/image/index",
    "pages/loading/index",
    "pages/overlay/index",
    "pages/transition/index",
    "pages/grid/index",
  ],
  window: {
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
    navigationBarBackgroundColor: "#fff",
  },
  permission: {
    "scope.userLocation": {
      desc: "您的位置信息将为您提供对应城市的服务信息",
    },
    "scope.userLocationBackground": {
      desc: "您的位置信息将为您提供对应城市的服务信息",
    },
  },
};

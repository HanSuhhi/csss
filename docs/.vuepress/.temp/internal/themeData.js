export const themeData = JSON.parse("{\"logo\":\"/images/logo.png\",\"repoLabel\":\"GitHub\",\"repo\":\"https://github.com/HanSuhhi/csss\",\"locales\":{\"/\":{\"home\":\"/\",\"selectLanguageName\":\"English\",\"selectLanguageText\":\"Languages\",\"navbar\":[{\"text\":\"Guide\",\"link\":\"/guide/what-is-csss\"},{\"text\":\"Components\",\"link\":\"/components/motivation\"},{\"text\":\"Todo\",\"link\":\"/todo/list\"}],\"sidebar\":{\"/components/\":[{\"text\":\"Description\",\"collapsible\":true,\"children\":[{\"text\":\"Motivation\",\"link\":\"/components/motivation\"},{\"text\":\"Start\",\"link\":\"/components/start\"}]},{\"text\":\"Normal Components\",\"collapsible\":true,\"children\":[{\"text\":\"Button\",\"link\":\"/components/button\"}]}]}},\"/zh-CN/\":{\"home\":\"/zh-CN/\",\"selectLanguageName\":\"简体中文\",\"selectLanguageText\":\"选择语言\",\"notFound\":[\"此处的页面失踪了\",\"或许去其他页面看看？\",\"明天的天气是晴天吗，嗯？\",\"该喝水了，多喝热水。\"],\"backToHome\":\"返回首页\",\"navbar\":[{\"text\":\"开始\",\"link\":\"/zh-CN/guide/what-is-csss\"},{\"text\":\"组件\",\"link\":\"/zh-CN/components/motivation\"},{\"text\":\"待办\",\"link\":\"/zh-CN/todo/list\"}],\"sidebar\":{\"/zh-CN/components/\":[{\"text\":\"组件简介\",\"collapsible\":true,\"children\":[{\"text\":\"初衷\",\"link\":\"/zh-CN/components/motivation\"},{\"text\":\"使用\",\"link\":\"/zh-CN/components/start\"}]},{\"text\":\"常用组件\",\"collapsible\":true,\"children\":[{\"text\":\"按钮\",\"link\":\"/zh-CN/components/button\"}]}]}}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"navbar\":[],\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"auto\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}

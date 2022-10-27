export const themeData = JSON.parse("{\"logo\":\"/images/logo.png\",\"repoLabel\":\"GitHub\",\"repo\":\"https://github.com/HanSuhhi/csss\",\"locales\":{\"/\":{\"home\":\"/\",\"selectLanguageName\":\"English\",\"selectLanguageText\":\"Languages\",\"navbar\":[{\"text\":\"Guide\",\"link\":\"/guide/what-is-csss\"},{\"text\":\"Components\",\"link\":\"/components/color\"}],\"sidebar\":{\"/guide/\":[{\"text\":\"Start\",\"children\":[\"/guide/what-is-csss\"]}],\"/components/\":[{\"text\":\"Description\",\"children\":[\"/components/color\"]},{\"text\":\"Content Element\",\"children\":[\"/components/button/Readme.md\",{\"text\":\"Title\",\"link\":\"/components/title/\",\"children\":[\"/components/title/h1.md\",\"/components/title/h2.md\",\"/components/title/h3.md\",\"/components/title/h4.md\",\"/components/title/h5.md\",\"/components/title/h6.md\"]}]}]}},\"/zh-CN/\":{\"home\":\"/zh-CN/\",\"selectLanguageName\":\"简体中文\",\"selectLanguageText\":\"语言\",\"notFound\":[\"此处的页面失踪了\",\"或许去其他页面看看？\",\"明天的天气是晴天吗，嗯？\",\"该喝水了，多喝热水。\"],\"backToHome\":\"返回首页\",\"navbar\":[{\"text\":\"开始\",\"link\":\"/zh-CN/guide/what-is-csss\"},{\"text\":\"元素\",\"link\":\"/zh-CN/components/color\"}],\"sidebar\":{\"/zh-CN/guide/\":[{\"text\":\"开始\",\"children\":[\"/zh-CN/guide/what-is-csss\"]}],\"/zh-CN/components/\":[{\"text\":\"基础内容\",\"children\":[\"/zh-CN/components/color\"]},{\"text\":\"内容元素\",\"children\":[\"/zh-CN/components/button/Readme.md\",{\"text\":\"title 标题\",\"link\":\"/zh-CN/components/title/\",\"children\":[\"/zh-CN/components/title/h1.md\",\"/zh-CN/components/title/h2.md\",\"/zh-CN/components/title/h3.md\",\"/zh-CN/components/title/h4.md\",\"/zh-CN/components/title/h5.md\",\"/zh-CN/components/title/h6.md\"]}]}]}}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"navbar\":[],\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"auto\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

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

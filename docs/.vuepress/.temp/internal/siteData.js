export const siteData = JSON.parse("{\"base\":\"/csss/\",\"lang\":\"en-US\",\"title\":\"csss\",\"description\":\"A Native CSS Initialization Lib.\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/csss/favicon.ico\"}]],\"locales\":{\"/\":{\"lang\":\"en-US\",\"title\":\"csss\",\"description\":\"A Native CSS Initialization Lib.\"},\"/zh-CN/\":{\"lang\":\"zh-CN\",\"title\":\"csss\",\"description\":\"一个原生 css 初始化的库。\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}

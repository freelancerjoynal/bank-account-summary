
  (function main() {
  var hashedNames = [
  "runtime.a9aadf27baa9164640c7.js",
  "vendor.573ced1ed2268d1b9acb.js",
  "main.9718a8a8b16cf4d16b72.js",
  "wfui.fb6b0ea21eee4b4ed783.js",
  "main.92cf0d484f76e93e76ea.css",
  "wfui.7a3b71bb8f6f55cedd29.css"
]
  function miniGET(src) {
  var xhr = new XMLHttpRequest()
  xhr.open('GET', src)
  xhr.send()
}
  function getSelfScriptSrc() {
  var allScripts = document.getElementsByTagName('script')
  var scriptCount
  for (scriptCount = 0; scriptCount < allScripts.length; ++scriptCount) {
    if (
      allScripts[scriptCount].src &&
      allScripts[scriptCount].getAttribute('src').indexOf('accounts-cache') !== -1
    ) {
      return allScripts[scriptCount].getAttribute('src').replace('short/accounts-cache.js', '')
    }
  }
  return ''
}
  (function cacheAccountsAssetsInJs() {
  var commonPath = getSelfScriptSrc()
  hashedNames.forEach(function nameHandler(name) {
    if (name.indexOf('.js') !== -1) {
      miniGET(commonPath.concat('public/js/', name))
    }
    if (name.indexOf('.css') !== -1) {
      miniGET(commonPath.concat('public/stylesheets/', name))
    }
  })
}())
  }())
  
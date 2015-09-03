config {
   baseURL = {$config.baseURL}
   doctype = html5
   xmlprologue = none
   disablePrefixComment = 1
   removeDefaultCSS = 1
   concatenateCss = 0
   concatenateJs = 0
   typolinkCheckRootline = 1
   sendCacheHeaders = 1
   cache_period = 259200
   redirectOldLinksToNew = 0
   spamProtectEmailAddresses = 13
   spamProtectEmailAddresses_atSubst = <span style="display:none;">NO SPAM SPAN!</span>
   index_enable = 1
   index_externals = 1
   index_metatags =
   prologue = none
   linkVars = L
   no_cache = {$config.no_cache}
   uniqueLinkVars = 1
   pageTitleFirst = 1
   prefixLocalAnchors = {$config.prefixLocalAnchors}
   renderCharset = utf-8
   metaCharset = utf-8
   removeDefaultJS = {$config.removeDefaultJS}
   inlineStyle2TempFile = {$config.inlineStyle2TempFile}
   admPanel = {$config.admPanel}
   debug = 0
   intTarget =
   extTarget =
   noPageTitle = 1

   // Enable Cool URI
   tx_cooluri_enable = 1

   // Disable Image Upscaling
   noScaleUp = 1

   // Language Settings
   sys_language_uid = 0
   sys_language_overlay = 1
   sys_language_mode = content_fallback
   language = de
   locale_all = de_DE.UTF-8
   htmlTag_setParams = lang="de" dir="ltr"
   htmlTag_langKey = de-DE
}

[globalVar = GP:L = 1]
   page.config {
      sys_language_uid = 1
      language = en
      locale_all = en_US
      htmlTag_langKey = en-US
      metaCharset = utf-8
      htmlTag_setParams = lang="en" dir="ltr"
   }
[global]
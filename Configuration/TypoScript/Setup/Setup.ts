page = PAGE
page.config =< config
page {
  typeNum = 0

  meta {
    # New notation available since TYPO3 7.4
    # see https://forge.typo3.org/issues/67360 for more details
    viewport = {$page.meta.viewport}
    robots = {$page.meta.robots}
    google = {$page.meta.google}
    apple-mobile-web-app-capable = {$page.meta.apple-mobile-web-app-capable}
    description = {$page.meta.description}
    description {
      override.field = description
    }

    author = {$page.meta.author}
    author {
      override.field = author
    }

    keywords = {$page.meta.keywords}
    keywords {
      override.field = keywords
    }

    X-UA-Compatible = {$page.meta.compatible}
    X-UA-Compatible {
      attribute = http-equiv
    }

    # OpenGraph Tags
    og:title {
      attribute = property
      field = title
    }

    og:site_name {
      attribute = property
      data = TSFE:tmpl|setup|sitetitle
    }

    og:description = {$page.meta.description}
    og:description {
      attribute = property
      field = description
    }

    og:image {
      attribute = property
      stdWrap.cObject = FILES
      stdWrap.cObject {
        references {
          data = levelfield:-1, media, slide
        }

        maxItems = 1
        renderObj = COA
        renderObj {
          10 = IMG_RESOURCE
          10 {
            file {
              import.data = file:current:uid
              treatIdAsReference = 1
              width = 1280c
              height = 720c
            }

            stdWrap {
              typolink {
                parameter.data = TSFE:lastImgResourceInfo|3
                returnLast = url
                forceAbsoluteUrl = 1
              }
            }
          }
        }
      }
    }
  }

  includeCSS {
    file1 = EXT:bwrk_template/Resources/Public/css/app.css
    file1.media = all

    file2 = EXT:bwrk_template/Resources/Public/css/print.css
    file2.media = print
  }

  includeJSFooterlibs {
    file1 = EXT:bwrk_template/Resources/Public/js/appLibs.js
    file2 = EXT:bwrk_template/Resources/Public/js/app.js
  }

  jsFooterInline {
    # Google Analytics
    10 = COA
    10 {
      if {
        isTrue = {$page.tracking.google.trackingID}
      }

      10 = TEXT
      10.value (
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
    ga('create', '{$page.tracking.google.trackingID}', 'auto');
      )
      20 = TEXT
      20 {
        if {
          isTrue = {$page.tracking.google.anonymizeIp}
        }

        value (

    ga('set', 'anonymizeIp', true);
        )
      }

      90 = TEXT
      90.value (

    ga('send', 'pageview');
      )
    }
  }
}

### EXCLUDE PAGE FROM EXTERNAL SEARCH RESULTS IF SET TO NO SEARCH
[globalVar =  TSFE:page|no_search = 1]
  page.meta.robots = noindex,follow
[end]

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
  spamProtectEmailAddresses = 2
  spamProtectEmailAddresses_atSubst = <span style="display:none;">NO SPAM SPAN!</span>@
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
  contentObjectExceptionHandler = 0

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

[globalVar =  GP:L = 1]
  config {
    sys_language_uid = 1
    language = en
    locale_all = en_US
    htmlTag_langKey = en-US
    metaCharset = utf-8
    htmlTag_setParams = lang="en" dir="ltr"
  }
[global]

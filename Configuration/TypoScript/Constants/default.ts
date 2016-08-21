config {
  # cat=template: basic/120/90; type=string; label=Page BaseURL
  baseURL = 
  # cat=template: advanced/130/110; type=boolean; label=No Cache
  no_cache = 1
  # cat=template: advanced/130/120; type=options[Do not remove=0,Remove=1,Move to external file=external]; label=Remove default JavaScript
  removeDefaultJS = 0
  # cat=template: advanced/130/130; type=options[Do not remove=0,Move to external file=1]; label=Move styles controlled by TYPO3 Core to external file
  inlineStyle2TempFile = 1
  # cat=template: advanced/130/140; type=boolean; label=Compress JavaScript
  compressJs = 0
  # cat=template: advanced/130/150; type=boolean; label=Compress Css
  compressCss = 0
  # cat=template: advanced/130/160; type=boolean; label=Concatenate JavaScript
  concatenateJs = 0
  # cat=template: advanced/130/170; type=boolean; label=Concatenate Css
  concatenateCss = 0
  # cat=template: advanced/130/180; type=boolean; label=Admin Panel
  admPanel = 0
  # cat=template: advanced/130/190; type=options[None=,All=all,Cached=cached,Output=output]; label=Prefix local Anchors
  prefixLocalAnchors =
}

page {
  logo {
    # cat=template: specific/130/100; type= string; label=Path to Logo
    file = EXT:bwrk_template/Resources/Public/img/logo.png
  }

  fluidtemplate {
    # cat=template: advanced/100/100; type=string; label=Layout Root Path: Path to layouts
    layoutRootPath = EXT:bwrk_template/Resources/Private/Layouts/Page/
    # cat=template: advanced/100/110; type=string; label=Partial Root Path: Path to partials
    partialRootPath = EXT:bwrk_template/Resources/Private/Partials/Page/
    # cat=template: advanced/100/120; type=string; label=Template Root Path: Path to templates
    templateRootPath = EXT:bwrk_template/Resources/Private/Templates/Page/
    # cat=template: advanced/100/130; type=string; label=Header Root Path: Path to templates
    headerRootPath = EXT:bwrk_template/Resources/Private/Templates/Header/
  }

  meta {
    # cat=template: basic/120/100; type=string; label=Description: Enter a short description of the page. It will be displayed in the result lists of most search engines.
    description =
    # cat=template: basic/120/110; type=string; label=Author: Enter the page author's name.
    author =
    # cat=template: basic/120/120; type=string; label=Keywords: Enter keywords for the page separated by commas. You may also use short phrases.
    keywords =
    # cat=template: advanced/120/100; type=string; label=viewport
    viewport = width=device-width, initial-scale=1
    # cat=template: advanced/120/110; type=string; label=robots
    robots = index,follow
    # cat=template: advanced/120/120; type=string; label=apple-mobile-web-app-capable
    apple-mobile-web-app-capable = no
    # cat=template: advanced/120/130; type=string; label=compatible
    compatible = IE=edge
    # cat=template: advanced/120/140; type=string; label=google
    google = notranslate
  }

  tracking {
    google {
      # cat=template: basic/180/100; type=string; label=Google: Tracking-ID
      trackingID =
      # cat=template: basic/180/110; type=boolean; label=Google: IP-anonymisation
      anonymizeIp = 1
    }
  }
}

lib {
  # Set Headerlogo
  headerlogo =

  # Set Headerlinks
  headerlinks =

  # Set Footer
  footer =

  # Search Page Id
  searchPageId = 80

  languageswitch {
    showSwitcher = 0

    defaultLanguage {
      className = german
      label = Deutsch
    }
  }
}

styles {
  content {
    imgtext {
      maxW = 1400
    }

    defaultHeaderType = 3
    shortcut.tables = tt_content,tt_address,tt_news,tx_news_domain_model_news
  }

  templates {
    templateRootPath = EXT:bwrk_template/Resources/Private/Fluid/Ext/fluid_styled_content/Templates/
    partialRootPath = EXT:bwrk_template/Resources/Private/Fluid/Ext/fluid_styled_content/Partials/
    layoutRootPath = EXT:bwrk_template/Resources/Private/Fluid/Ext/fluid_styled_content/Layouts/
  }
}

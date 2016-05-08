# Indexedsearch
## Seiten-ID mit der Suchergebnis-Seite
SEARCH_PAGE_ID = 14

# News
plugin.tx_news {
  view {
    templateRootPath = EXT:bwrk_template/Resources/Private/Fluid/Ext/News/Templates/
    partialRootPath = EXT:bwrk_template/Resources/Private/Fluid/Ext/News/Partials/
    layoutRootPath = EXT:bwrk_template/Resources/Private/Fluid/Ext/News/Layouts/
  }

  settings {
    cssFile >
  }
}

# tt_content
content.defaultHeaderType = 3

styles.templates {
  templateRootPath = EXT:bwrk_template/Resources/Private/Fluid/Ext/fluid_styled_content/Templates/
  partialRootPath = EXT:bwrk_template/Resources/Private/Fluid/Ext/fluid_styled_content/Partials/
  layoutRootPath = EXT:bwrk_template/Resources/Private/Fluid/Ext/fluid_styled_content/Layouts/
}

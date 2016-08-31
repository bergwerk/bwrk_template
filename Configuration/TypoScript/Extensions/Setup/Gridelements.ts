tt_content.gridelements_pi1.20.10.setup {
  2Columns < lib.gridelements.defaultGridSetup
  2Columns {
    cObject = FLUIDTEMPLATE
    cObject {
      file = EXT:bwrk_template/Resources/Private/Fluid/Ext/Gridelements/Fluid/2Columns.html
    }
  }

  3Columns < lib.gridelements.defaultGridSetup
  3Columns {
    cObject = FLUIDTEMPLATE
    cObject {
      file = EXT:bwrk_template/Resources/Private/Fluid/Ext/Gridelements/Fluid/3Columns.html
    }
  }

  4Columns < lib.gridelements.defaultGridSetup
  4Columns {
    cObject = FLUIDTEMPLATE
    cObject {
      file = EXT:bwrk_template/Resources/Private/Fluid/Ext/Gridelements/Fluid/4Columns.html
    }
  }

  CssWrapper < lib.gridelements.defaultGridSetup
  CssWrapper {
    cObject = FLUIDTEMPLATE
    cObject {
      file = EXT:bwrk_template/Resources/Private/Fluid/Ext/Gridelements/Fluid/CssWrapper.html
    }
  }
}

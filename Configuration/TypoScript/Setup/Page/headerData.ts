page {
  headerData {
    10 = FLUIDTEMPLATE
    10 {
      file = EXT:bwrk_template/Resources/Private/Fluid/Templates/Header/Icons.html
      templateRootPath = EXT:bwrk_template/Resources/Private/Fluid/Templates/Header/
    }

    15 >
    15 = COA
    15 {
      10 = TEXT
      10.value = <title>

      20 = TEXT
      20.wrap = |
      20.data = leveltitle : 0

      30 = TEXT
      30.value = &nbsp;&middot;&nbsp;

      40 = TEXT
      40.field = subtitle // title
      40.wrap = |

      50 = TEXT
      50.value = </title>
    }
  }
}

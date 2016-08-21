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

  10 = FLUIDTEMPLATE
  10 {
    file.stdWrap.cObject = CASE
    file.stdWrap.cObject {
      key.data = levelfield:-1, backend_layout_next_level, slide
      key.override.field = backend_layout

      default = TEXT
      default.value = EXT:bwrk_template/Resources/Private/Fluid/Templates/Page/Default.html

      pagets__2Columns = TEXT
      pagets__2Columns.value = EXT:bwrk_template/Resources/Private/Fluid/Templates/Page/2Columns.html
    }

    templateRootPath = EXT:bwrk_template/Resources/Private/Fluid/Fluid/Templates/Page/
    partialRootPath = EXT:bwrk_template/Resources/Private/Fluid/Partials/Page/
    layoutRootPath = EXT:bwrk_template/Resources/Private/Fluid/Layouts/Page/

    settings {
      logo {
        file = {$page.logo.file}
      }
    }
  }


  footerData {
    10 = FLUIDTEMPLATE
    10 {
      file = EXT:bwrk_template/Resources/Private/Fluid/Templates/Footer/Footer.html
      templateRootPath = EXT:bwrk_template/Resources/Private/Fluid/Templates/Footer/
    }
  }
}

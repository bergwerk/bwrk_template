page {
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
  }
}


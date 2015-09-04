page {
   10 = FLUIDTEMPLATE
   10 {
      file.stdWrap.cObject = CASE
      file.stdWrap.cObject {
         key.data = levelfield:-1, backend_layout_next_level, slide
         key.override.field = backend_layout

         default = TEXT
         default.value = EXT:bwrk_sitepackage/Resources/Private/Fluid/Templates/Page/Default.html

         1 = TEXT
         1.value = EXT:bwrk_sitepackage/Resources/Private/Fluid/Templates/Page/1-Column.html

         2 = TEXT
         2.value = EXT:bwrk_sitepackage/Resources/Private/Fluid/Templates/Page/2-Column-left.html

         3 = TEXT
         3.value = EXT:bwrk_sitepackage/Resources/Private/Fluid/Templates/Page/2-Column-right.html

         4 = TEXT
         4.value = EXT:bwrk_sitepackage/Resources/Private/Fluid/Templates/Page/3-Column.html

      }

      templateRootPath = EXT:bwrk_sitepackage/Resources/Private/Fluid/Fluid/Templates/Page/
      partialRootPath = EXT:bwrk_sitepackage/Resources/Private/Fluid/Partials/Page/
      layoutRootPath = EXT:bwrk_sitepackage/Resources/Private/Fluid/Layouts/Page/

      variables {
         pageTitle = TEXT
         pageTitle.data = page:title

         siteTitle = TEXT
         siteTitle.data = TSFE:tmpl|setup|sitetitle

         rootPage = TEXT
         rootPage.data = leveluid:0

         contentMain < styles.content.get
         contentLeft < styles.content.getLeft
         contentRight < styles.content.getRight

         headerlogo =< lib.headerlogo
         headerlinks =< lib.headerlinks

         searchbox =< lib.searchbox
         languageswitch =< lib.languageswitch
         breadcrumb =< lib.breadcrumb

         menu_main =< lib.menu_main
         menu_sub =< lib.menu_sub
         menu_mobile =< lib.menu_mobile

         footer =< lib.footer
      }
   }
}
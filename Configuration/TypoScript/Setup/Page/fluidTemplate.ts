page {
   10 = FLUIDTEMPLATE
   10 {
      file.stdWrap.cObject = CASE
      file.stdWrap.cObject {
         key.data = levelfield:-1, backend_layout_next_level, slide
         key.override.field = backend_layout

         default = TEXT
         default.value = EXT:bwrk_template/Resources/Private/Fluid/Templates/Page/default.html

         2Columns = TEXT
         2Columns.value = EXT:bwrk_template/Resources/Private/Fluid/Templates/Page/2-column.html
      }

      templateRootPath = EXT:bwrk_template/Resources/Private/Fluid/Fluid/Templates/Page/
      partialRootPath = EXT:bwrk_template/Resources/Private/Fluid/Partials/Page/
      layoutRootPath = EXT:bwrk_template/Resources/Private/Fluid/Layouts/Page/
   }
}

#  EXAMPLE
#  ---------------
#  <f:cObject typoscriptObjectPath="lib.dynamicContent" data="{pageUid: '{data.uid}', colPos: '0', wrap: '<div>|</div>'}" />
#  ---------------


lib.dynamicContent = COA
lib.dynamicContent {

   5 = LOAD_REGISTER
   5 {
      colPos.cObject = TEXT
      colPos.cObject {
         field = colPos
         ifEmpty.cObject = TEXT
         ifEmpty.cObject {
            value.current = 1
            ifEmpty = 0
         }
      }
      pageUid.cObject = TEXT
      pageUid.cObject {
         field = pageUid
         ifEmpty.data = TSFE:id
      }
      contentFromPid.cObject = TEXT
      contentFromPid.cObject {
         data = DB:pages:{register:pageUid}:content_from_pid
         data.insertData = 1
      }
      wrap.cObject = TEXT
      wrap.cObject {
         field = wrap
      }
   }

   20 = CONTENT
   20 {
      table = tt_content
      select {
         includeRecordsWithoutDefaultTranslation = 1
         orderBy = sorting
         where = colPos={register:colPos}
         where.insertData = 1
         pidInList.data = register:pageUid
         pidInList.override.data = register:contentFromPid
      }
      stdWrap {
         dataWrap = {register:wrap}
         required = 1
      }
   }
   90 = RESTORE_REGISTER
}
lib.dynamicContentSlide =< lib.dynamicContent
lib.dynamicContentSlide.20.slide = -1

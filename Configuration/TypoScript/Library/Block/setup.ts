lib {
   headerlogo = RECORDS
   headerlogo {
      tables = tt_content
      source = {$lib.headerlogo}
      dontCheckPid = 1
   }

   headerlinks = RECORDS
   headerlinks {
      tables = tt_content
      source = {$lib.headerlinks}
      dontCheckPid = 1
   }

   footer = RECORDS
   footer {
      tables = tt_content
      source = {$lib.footer}
   }

   headerimages = COA
   headerimages {
      10 = IMAGE
      10 {
         file {
            import.data = levelmedia:-1, slide
            treatIdAsReference = 1
            import.listNum = 0
         }
      }

      20 < .10
      20.file.import.listNum = 1

      30 < .10
      30.file.import.listNum = 2
   }

   pageTitle = TEXT
   pageTitle.data = page:title

   siteTitle = TEXT
   siteTitle.data = TSFE:tmpl|setup|sitetitle

   rootPage = TEXT
   rootPage.data = leveluid:0
}
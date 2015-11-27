lib.headerlogo = COA
lib.headerlogo {
   10 = RECORDS
   10 {
      tables = tt_content
      source = {$lib.headerlogo}
      dontCheckPid = 1
   }
}

lib.headerlinks = COA
lib.headerlinks {
   10 = RECORDS
   10 {
      tables = tt_content
      source = {$lib.headerlinks}
      dontCheckPid = 1
   }
}

lib.footer = COA
lib.footer {
   10 = RECORDS
   10.tables = tt_content
   10.source = {$lib.footer}
}

lib.headerimages = COA
lib.headerimages {
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
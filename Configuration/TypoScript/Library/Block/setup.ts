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
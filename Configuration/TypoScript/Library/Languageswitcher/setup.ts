lib.languagelist = COA
lib.languagelist {
   // Default Language
   10 = TEXT
   10.value = <li class="{$lib.languageswitch.defaultLanguage.className}"><a href="?L=0" title="{$lib.languageswitch.defaultLanguage.label}">{$lib.languageswitch.defaultLanguage.label}</a></li>

   // Languages from sys_language
   20 = CONTENT
   20 {
      table = sys_language

      select {
         selectFields = *
         pidInList = root,-1
         where = uid > -1 AND hidden = 0;--
      }

      renderObj = COA
      renderObj {

         10 = TEXT
         10.value = <li class="

         20 = TEXT
         20.stdWrap.field = flag

         30 = TEXT
         30.value = ">

         40 = TEXT
         40.value = <a href="?L=

         50 = TEXT
         50.stdWrap.field = uid

         60 = TEXT
         60.value = " title="

         70 = TEXT
         70.stdWrap.field = title

         80 = TEXT
         80.value = ">

         90 = TEXT
         90.stdWrap.field = title

         100 = TEXT
         100.value = </a>

         110 = TEXT
         110.value = </li>
      }
   }
}

lib.languageswitch = COA
lib.languageswitch {

   5 = TEXT
   5.value (

        <li class="has-dropdown">
            <a href="#">
                <span class="icon icon-globe"></span>
            </a>
            <ul class="dropdown">
   )

   10 < lib.languagelist

   15 = TEXT
   15.value (
            </ul>
        </li>
   )
}
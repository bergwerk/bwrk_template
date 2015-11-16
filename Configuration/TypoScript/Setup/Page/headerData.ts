page {
   headerData {
      10 = FLUIDTEMPLATE
      10 {
         file = EXT:bwrk_template/Resources/Private/Fluid/Templates/Header/Icons.html
         templateRootPath = EXT:bwrk_template/Resources/Private/Fluid/Templates/Header/
      }

      20 = TEXT
      20.value (
         <!--[if lt IE 9]>
           <script src="fileadmin/templates/default/js/html5shiv.js"></script>
           <script src="fileadmin/templates/default/js/respond.js"></script>
         <![endif]-->
      )

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
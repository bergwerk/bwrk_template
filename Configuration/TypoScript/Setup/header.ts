page.headerData.10 = TEXT
page.headerData.10.value (

	<!--[if lt IE 9]>
	  <script src="fileadmin/templates/default/js/html5shiv.js"></script>
	  <script src="fileadmin/templates/default/js/respond.js"></script>
	<![endif]-->

	<link rel="shortcut icon" href="{$BASE_URL}fileadmin/templates/default/img/favicon.png" />

)

page.headerData.15 >
page.headerData.15 = COA
page.headerData.15 {
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
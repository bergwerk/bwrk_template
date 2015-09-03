page = PAGE
page {
   typeNum = 0

   meta {
      viewport = {$page.meta.viewport}
      robots = {$page.meta.robots}
      google = {$page.meta.google}
      apple-mobile-web-app-capable = {$page.meta.apple-mobile-web-app-capable}
      description = {$page.meta.description}
      description.override.field = description
      author = {$page.meta.author}
      author.override.field = author
      keywords = {$page.meta.keywords}
      keywords.override.field = keywords
   }

   includeCSS {
      file1 = EXT:bwrk_sitepackage/Resources/Public/Css/app.min.css
   }


   includeJSFooterlibs {
      file1 = EXT:bwrk_sitepackage/Resources/Public/JavaScript/app.min.js
   }

   jsInline {
      # Google Analytics
      10 = COA
      10 {
         if.isTrue = {$page.tracking.google.trackingID}

         10 = TEXT
         10.value (
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
	ga('create', '{$page.tracking.google.trackingID}', 'auto');
         )

         20 = TEXT
         20 {
            if.isTrue = {$page.tracking.google.anonymizeIp}
            value (
	ga('set', 'anonymizeIp', true);
            )
         }

         90 = TEXT
         90.value (
	ga('send', 'pageview');
         )
      }
   }
}

### EXCLUDE PAGE FROM EXTERNAL SEARCH RESULTS IF SET TO NO SEARCH
[globalVar = TSFE:page|no_search = 1]
   page.meta.robots = noindex,follow
[end]
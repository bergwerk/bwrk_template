page {
  fluidtemplate {
    # cat=site package: advanced/100/100; type=string; label=Layout Root Path: Path to layouts
    layoutRootPath = EXT:bwrk_template/Resources/Private/Layouts/Page/
    # cat=site package: advanced/100/110; type=string; label=Partial Root Path: Path to partials
    partialRootPath = EXT:bwrk_template/Resources/Private/Partials/Page/
    # cat=site package: advanced/100/120; type=string; label=Template Root Path: Path to templates
    templateRootPath = EXT:bwrk_template/Resources/Private/Templates/Page/
    # cat=site package: advanced/100/130; type=string; label=Header Root Path: Path to templates
    headerRootPath = EXT:bwrk_template/Resources/Private/Templates/Header/
  }

  meta {
    # cat=bootstrap package: basic/120/100; type=string; label=Description: Enter a short description of the page. It will be displayed in the result lists of most search engines.
    description =
    # cat=bootstrap package: basic/120/110; type=string; label=Author: Enter the page author's name.
    author =
    # cat=bootstrap package: basic/120/120; type=string; label=Keywords: Enter keywords for the page separated by commas. You may also use short phrases.
    keywords =
    # cat=bootstrap package: advanced/120/100; type=string; label=viewport
    viewport = width=device-width, initial-scale=1
    # cat=bootstrap package: advanced/120/110; type=string; label=robots
    robots = index,follow
    # cat=bootstrap package: advanced/120/120; type=string; label=apple-mobile-web-app-capable
    apple-mobile-web-app-capable = no
    # cat=bootstrap package: advanced/120/130; type=string; label=compatible
    compatible = IE=edge
    # cat=bootstrap package: advanced/120/140; type=string; label=google
    google = notranslate
  }

  tracking {
    google {
      # cat=bootstrap package: basic/180/100; type=string; label=Google: Tracking-ID
      trackingID =
      # cat=bootstrap package: basic/180/110; type=boolean; label=Google: IP-anonymisation
      anonymizeIp = 1
    }
  }
}

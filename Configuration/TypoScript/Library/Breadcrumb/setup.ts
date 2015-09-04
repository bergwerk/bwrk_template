lib.breadcrumb = COA
lib.breadcrumb {
    10 = HMENU
    10 {
        special = rootline
        special.range = 1|-1
        excludeUidList =
        includeNotInMenu = 1

        1 = TMENU
        1 {
            noBlur = 1
            target = _self
            wrap = <ul class="breadcrumbs"><li><a href="{$BASE_URL}"><span class="icon icon-home"></span></a></li> | </ul>
            NO {
                stdWrap.field = title
                ATagTitle.field = nav_title // title
                linkWrap = <li>|</li>|*|<li>|</li>|*|<li class="current">|</li>
            }

            # Current menu item is unlinked
            CUR = 1
            CUR < .NO
        }
    }
}
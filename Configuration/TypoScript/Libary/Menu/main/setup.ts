lib.menu_main = COA
lib.menu_main {
    10 = HMENU
    10 {
        entryLevel = 0
        wrap = |

        1 = TMENU
        1 {
            expAll = 1
            NO.allWrap = <li>|</li>
            NO.ATagTitle.field = abstract // description // title

            ACT = 1
            ACT.wrapItemAndSub = <li class="active">|</li>
            ACT.ATagTitle.field = abstract // description // title

            IFSUB = 1
            IFSUB.wrapItemAndSub = <li class="has-dropdown">|</li>
            IFSUB.ATagTitle.field = abstract // description // title
            IFSUB.ATagParams = class="dropdown-toggle" data-toggle="dropdown"

            ACTIFSUB = 1
            ACTIFSUB.wrapItemAndSub = <li class="has-dropdown active">|</li>
            ACTIFSUB.ATagTitle.field = abstract // description // title
            ACTIFSUB.ATagParams = class="dropdown-toggle" data-toggle="dropdown"
        }

        2 < .1
        2 {
            wrap = <ul class="dropdown">|</ul>
        }
        3 < .2
        4 < .3
        5 < .4
    }
}
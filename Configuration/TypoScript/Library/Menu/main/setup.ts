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
            IFSUB.wrapItemAndSub = <li>|</li>
            IFSUB.ATagTitle.field = abstract // description // title

            ACTIFSUB = 1
            ACTIFSUB.wrapItemAndSub = <li class="active">|</li>
            ACTIFSUB.ATagTitle.field = abstract // description // title
        }

        1 {
            wrap = <ul class="dropdown menu" data-dropdown-menu>|</ul>
        }

        2 < .1
        2 {
            wrap = <ul class="menu">|</ul>
        }
        3 < .2
        4 < .3
        5 < .4
    }
}
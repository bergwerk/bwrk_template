lib.menu_sub = COA
lib.menu_sub {

    10 = TEXT
    10.value = <ul class="side-nav">

    20 = HMENU
    20 {
        entryLevel = 1

        1 = TMENU
        1 {
            NO.wrapItemAndSub = <li>|</li>
            NO.ATagParams = title="{field:title}"
            NO.allStdWrap.insertData = 1

            ACT = 1
            ACT.wrapItemAndSub = <li class="active">|</li>
            ACT.ATagParams = title="{field:title}"
            ACT.allStdWrap.insertData = 1

            CUR = 1
            CUR.wrapItemAndSub = <li class="active">|</li>
            CUR.ATagParams = title="{field:title}"
            CUR.allStdWrap.insertData = 1
        }

        2 < .1
        2 {
            wrap = <ul>|</ul>
        }

        3 < .2
        4 < .3
    }

    30 = TEXT
    30.value = </ul>
}
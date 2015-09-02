lib.searchbox = COA
lib.searchbox {
   stdWrap.prefixComment = 2 | lib.searchbox

   10 = TEXT
   10.typolink.parameter = {$SEARCH_PAGE_ID}
   10.typolink.returnLast = url
   10.wrap = <form role="form" action="|" method="post">

   20 = TEXT
   20.value (
        <div class="row collapse">
            <div class="small-10 columns">
                <input name="tx_indexedsearch[sword]" placeholder="Suchbegriff eingeben ..." type="text" />
                <input type="hidden" name="tx_indexedsearch[_sections]" value="0" />
            </div>
            <div class="small-2 columns">
                <button type="submit" class="button postfix" title="Suche starten" name="tx_indexedsearch[submit_button]" >
                    <i class="icon icon-search"></i>
                </button>
            </div>
        </div>
   )

   30 = TEXT
   30.value = </form>
}
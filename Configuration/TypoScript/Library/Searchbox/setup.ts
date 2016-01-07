lib.searchbox = COA
lib.searchbox {
    stdWrap.prefixComment = 2 | lib.searchbox

    10 = TEXT
    10.typolink.parameter = {$lib.searchPageId}
    10.typolink.returnLast = url
    10.wrap = <form role="form" action="|" method="post">

    20 = TEXT
    20.value (
<div class="input-group">
    <input name="tx_indexedsearch[sword]" placeholder="Suchbegriff" class="input-group-field" type="text">
    <div class="input-group-button">
        <input type="submit" class="button" value="Suchen" title="Suche starten" name="tx_indexedsearch[submit_button]">
    </div>
</div>
    )

    30 = TEXT
    30.value = </form>
}
styles.content.getLeft = CONTENT
styles.content.getLeft {
    table = tt_content
    select.orderBy = sorting
    select.where = colPos=1
}

styles.content.getRight = CONTENT
styles.content.getRight {
    table = tt_content
    select.orderBy = sorting
    select.where = colPos=2
}

styles.content.getBorder = CONTENT
styles.content.getBorder {
    table = tt_content
    select.orderBy = sorting
    select.where = colPos=3
}
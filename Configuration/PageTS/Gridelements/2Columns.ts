tx_gridelements.setup {
    2Columns {
        title = 2 Spalten
        description = 2 spaltiges Inhaltselement
        flexformDS = FILE:EXT:bwrk_template/Configuration/FlexForm/Gridelements/2Columns.xml
        icon = EXT:bwrk_template/Resources/Public/Icons/Gridelements/2Columns.svg
        config {
            colCount = 2
            rowCount = 1
            rows {
                1 {
                    columns {
                        1 {
                            name = Spalte 1
                            colPos = 11
                            allowedGridTypes = CssWrapper
                        }

                        2 {
                            name = Spalte 2
                            colPos = 12
                            allowedGridTypes = CssWrapper
                        }
                    }
                }
            }
        }
    }
}
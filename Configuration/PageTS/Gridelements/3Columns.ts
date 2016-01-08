tx_gridelements.setup {
    3Columns {
        title = 3 Spalten
        description = 3 spaltiges Inhaltselement
        flexformDS = FILE:EXT:bwrk_template/Configuration/FlexForm/Gridelements/3Columns.xml
        icon = EXT:bwrk_template/Resources/Public/Icons/Gridelements/3Columns.svg
        config {
            colCount = 3
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

                        3 {
                            name = Spalte 3
                            colPos = 13
                            allowedGridTypes = CssWrapper
                        }
                    }
                }
            }
        }
    }
}
tx_gridelements.setup {
    4Columns {
        title = 4 Spalten
        description = 4 spaltiges Inhaltselement
        flexformDS = FILE:EXT:bwrk_template/Configuration/FlexForm/Gridelements/4Columns.xml
        icon = ../typo3conf/ext/bwrk_template/Resources/Public/Icons/Gridelements/4Columns.svg
        config {
            colCount = 4
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

                        4 {
                            name = Spalte 4
                            colPos = 14
                            allowedGridTypes = CssWrapper
                        }
                    }
                }
            }
        }
    }
}
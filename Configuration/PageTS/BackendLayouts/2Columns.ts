mod {
    web_layout {
        BackendLayouts {
            2Columns {
                title = 2 Spaltig
                config {
                    backend_layout {
                        colCount = 2
                        rowCount = 1
                        rows {
                            1 {
                                columns {
                                    1 {
                                        name = Inhalt
                                        colPos = 1
                                    }

                                    2 {
                                        name = Inhalt
                                        colPos = 2
                                    }
                                }
                            }
                        }
                    }
                }
                icon = EXT:bwrk_template/Resources/Public/Icons/backendlayouts/2Columns.gif
            }
        }
    }
}
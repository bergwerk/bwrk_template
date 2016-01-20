mod {
    web_layout {
        BackendLayouts {
            default {
                title = Ganzspaltig
                config {
                    backend_layout {
                        colCount = 1
                        rowCount = 1
                        rows {
                            1 {
                                columns {
                                    1 {
                                        name = Inhalt
                                        colPos = 0
                                    }
                                }
                            }
                        }
                    }
                }
                icon = EXT:bwrk_template/Resources/Public/icons/backendlayouts/default.gif
            }
        }
    }
}
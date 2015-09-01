# CSS-Wrapper
plugin.tx_gridelements_pi1.setup.csswrapper < lib.gridelements.defaultGridSetup
plugin.tx_gridelements_pi1.setup.csswrapper {
    preCObject = LOAD_REGISTER
    preCObject {
        containerClasses.cObject = COA
        containerClasses.cObject {
            10 = TEXT
            10.field = flexform_css_class
        }
    }

    wrap = <div class="{register: containerClasses}">|</div>
    wrap.insertData = 1

    columns {
        10 < .default
    }
}

plugin.tx_gridelements_pi1.setup.row < plugin.tx_gridelements_pi1.setup.csswrapper
plugin.tx_gridelements_pi1.setup.row {
    wrap = <div class="row {register: containerClasses}">|</div>
}

# Rows
plugin.tx_gridelements_pi1.setup.2cols {
    preCObject = LOAD_REGISTER
    preCObject {
        containerClasses.cObject = COA
        containerClasses.cObject {
            10 = TEXT
            10 {
                value = equal-height
                fieldRequired = flexform_equalHeight
                noTrimWrap = | ||
            }

            20 = TEXT
            20 {
                field = flexform_visibility_element
                noTrimWrap = | ||
                split {
                    token = ,
                    cObjNum = 1
                    1.current = 1
                    1.noTrimWrap = | ||
                }
            }

            30 = TEXT
            30 {
                field = flexform_css_class
                noTrimWrap = | ||
            }

            stdWrap.insertData = 1
            stdWrap.trim = 1
        }

        containerAttributes.cObject = COA
        containerAttributes.cObject {
            10 = TEXT
            10 {
                data = register: containerClasses
                noTrimWrap = | class="row |"|
            }
        }
    }

    outerWrap = <div{register: containerAttributes}> | </div>
    outerWrap.insertData = 1

    columns.0 {
        preCObject = LOAD_REGISTER
        preCObject {
            contentColumnClass.cObject = COA
            contentColumnClass.cObject {
                10 = TEXT
                10 {
                    field = flexform_width_column_xs_1
                    noTrimWrap = || |
                    required = 1
                }

                11 = TEXT
                11 {
                    field = flexform_width_column_sm_1
                    noTrimWrap = || |
                    required = 1
                }

                12 = TEXT
                12 {
                    field = flexform_width_column_md_1
                    noTrimWrap = || |
                    required = 1
                }

                13 = TEXT
                13 {
                    field = flexform_width_column_lg_1
                    noTrimWrap = || |
                    required = 1
                }

                20 = TEXT
                20 {
                    field = flexform_visibility_col1
                    noTrimWrap = | ||
                    split {
                        token = ,
                        cObjNum = 1
                        1.current = 1
                        1.noTrimWrap = | ||
                    }
                }

                30 = TEXT
                30.field = flexform_css_class_1

                stdWrap.noTrimWrap = | class="|"|
            }
        }

        outerWrap = <div{register: contentColumnClass}> | </div>
        outerWrap.insertData = 1

        renderObj =< tt_content
    }

    columns.1 < .columns.0
    columns.1 {
        preCObject {
            contentColumnClass.cObject {
                10.field = flexform_width_column_xs_2
                11.field = flexform_width_column_sm_2
                12.field = flexform_width_column_md_2
                13.field = flexform_width_column_lg_2
                20.field = flexform_visibility_col2
                30.field = flexform_css_class_2
            }
        }
    }
}

plugin.tx_gridelements_pi1.setup.3cols < plugin.tx_gridelements_pi1.setup.2cols
plugin.tx_gridelements_pi1.setup.3cols {
    columns.2 < .columns.0
    columns.2 {
        preCObject {
            contentColumnClass.cObject {
                10.field = flexform_width_column_xs_3
                11.field = flexform_width_column_sm_3
                12.field = flexform_width_column_md_3
                13.field = flexform_width_column_lg_3
                20.field = flexform_visibility_col3
                30.field = flexform_css_class_3
            }
        }
    }
}

plugin.tx_gridelements_pi1.setup.4cols < plugin.tx_gridelements_pi1.setup.3cols
plugin.tx_gridelements_pi1.setup.4cols {
    columns.3 < .columns.0
    columns.3 {
        preCObject {
            contentColumnClass.cObject {
                10.field = flexform_width_column_xs_4
                11.field = flexform_width_column_sm_4
                12.field = flexform_width_column_md_4
                13.field = flexform_width_column_lg_4
                20.field = flexform_visibility_col4
                30.field = flexform_css_class_4
            }
        }
    }
}

# Assign Configuration
tt_content.gridelements_pi1.20.10.setup {
    # 2 Spalten (uid = 2)
    2 < plugin.tx_gridelements_pi1.setup.2cols

    # 3 Spalten (uid = 3)
    3 < plugin.tx_gridelements_pi1.setup.3cols

    # 4 Spalten (uid = 4)
    4 < plugin.tx_gridelements_pi1.setup.4cols

    # CSS-Wrapper (uid = 5)
    5 < plugin.tx_gridelements_pi1.setup.csswrapper

    # Row (uid = 6)
    6 < plugin.tx_gridelements_pi1.setup.row
}

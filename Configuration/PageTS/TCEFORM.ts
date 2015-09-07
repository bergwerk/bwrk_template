TCEFORM {
	pages {
		layout {
			disabled = 1
		}
		alias {
			disabled = 1
		}
	}
	tt_content {
		header_layout {
			altLabels {
				0 = Standard (H3)
				1 = H1 (nur 1x pro Seite!)
				2 = H2 (nur 1x pro Seite!)
				3 = H3 (Standard)
				4 = H4
				5 = H5
			}
		}
		layout {
			removeItems = 1,2,3
			disableNoMatchingValueElement = 1
			types {
				bullets {
					removeItems = 0,1,2,3
					addItems {
					}
				}
				table {
					removeItems = 0,1,2,3
					addItems {
					}
				}
				uploads {
					removeItems = 3
					addItems {
					}
				}
			}
		}
		imagecols {
			removeItems = 5,7,8
		}
		imageorient {
			removeItems = 1,2,9,10
		}
		section_frame {
			removeItems = 1
			addItems {
			}
			disableNoMatchingValueElement = 1
		}

		table_bgColor.disabled = 1
		table_border.disabled = 1
		table_cellspacing.disabled = 1
		table_cellpadding.disabled = 1
		pi_flexform {
			table {
				sDEF {
					acctables_nostyles.disabled = 1
					acctables_tableclass.disabled = 1
				}
			}
		}
	}
}

### Clean plate
RTE >

### Classes
RTE.classes {
}

### Defaults
RTE.default {
	skin = EXT:t3skin/rtehtmlarea/htmlarea.css
	contentCSS = typo3conf/ext/bwrk_sitepackage/Resources/Public/Css/rte.css
	schema.sources.schemaOrg = EXT:rtehtmlarea/extensions/MicrodataSchema/res/schemaOrgAll.rdf

	// This option doesn't exist in RTE. We use it to copy the value into the corresponding properties
	allowedTags (
		b, strong, i, em, u, strike, del, big, small, sub, sup, ol, ul, li, a, link,
		br, p, pre, h1, h2, h3, h4, hr, span,
		table, tr, th, td, thead, tbody, tfoot
	)

	removeComments = 1
	removeTags = center, font, o:p, sdfield, img
	removeTagsAndContents = link, meta, script, style, title

}

### Buttons
RTE.default.buttons {
	formatblock.removeItems = address, article, aside, div, header, footer, section, h5, h6, nav
	blockstyle.disableStyleOnOptionLabel = 1

	textstyle.tags.a {
		allowedClasses (
		)
	}

	bold.hotKey = b
	italic.hotKey = i
	underline.hotKey = u

	toggleborders {
		setOnTableCreation = 1
		setOnRTEOpen = 1
	}
}

### Appearance
RTE.default {

	showButtons (
		formatblock, blockstyle, textstyle, bold, italic, underline, strikethrough, big, small, subscript, superscript,
		orderedlist, unorderedlist, left, center, right, justifyfull, copy, cut, paste,
		undo, redo, removeformat, link, unlink, line, insertparagraphbefore, insertparagraphafter,
		chMode, table, tableproperties, toggleborders, tablerestyle,
		rowproperties, rowinsertabove, rowinsertunder, rowdelete, rowsplit,
		columnproperties, columninsertbefore, columninsertafter, columndelete, columnsplit,
		cellproperties, cellinsertbefore, cellinsertafter, celldelete, cellsplit, cellmerge
	)

	RTEHeightOverride = 700
	rteResize = 1
	contextMenu.disabled = 1
	showStatusBar = 1

	disableAlignmentFieldsetInTableOperations = 1
	disableBordersFieldsetInTableOperations = 1
	disableColorFieldsetInTableOperations = 1
	disableLayoutFieldsetInTableOperations = 1
	disableSpacingFieldsetInTableOperations = 1
	disableDescriptionFieldsetInTableOperations = 1
}

### HTML Processing
RTE.default.proc {
	overruleMode = ts_css
	dontConvBRtoParagraph = 1
	preserveDIVSections = 0
	denyTags = img, center, font, span

	allowedClasses (
	)

	// List of tags that dont have to be wrapped in a paragraph
	allowTagsOutside (
		blockquote, h1, h2, h3, h4, hr, pre, table, ul, ol
	)

	keepPDIVattribs =

	dontUndoHSC_db = 1
	dontHSC_rte = 1
}

### HTML Processing (entryHTMLparser_db)
RTE.default.proc.entryHTMLparser_db = 1
RTE.default.proc.entryHTMLparser_db {
	allowTags < RTE.default.allowedTags
	denyTags < RTE.default.proc.denyTags

	htmlSpecialChars = 0

	tags {

		span {
			fixAttrib {
				style.unset = 1
				lang.unset = 1
			}
			allowedAttribs >
			rmTagIfNoAttrib = 1
		}

		h1.fixAttrib.class.list     =
		h2.fixAttrib.class.list     =
		h3.fixAttrib.class.list     =
		h4.fixAttrib.class.list     =

		p.fixAttrib.class.list      =

		ol.fixAttrib.class.list     =
		ul.fixAttrib.class.list     =

		a.fixAttrib.class.list      =

		hr.allowedAttribs           = 0
		b.allowedAttribs            = 0
		strong.allowedAttribs       = 0
		i.allowedAttribs            = 0
		em.allowedAttribs           = 0
		u.allowedAttribs            = 0
		strike.allowedAttribs       = 0
		del.allowedAttribs          = 0
		big.allowedAttribs          = 0
		small.allowedAttribs        = 0
		sup.allowedAttribs          = 0
		sub.allowedAttribs          = 0
		li.allowedAttribs           = 0
		blockquote.allowedAttribs   = 0
		code.allowedAttribs         = 0
		thead.allowedAttribs        = 0
		tbody.allowedAttribs        = 0
		tfoot.allowedAttribs        = 0
		div.allowedAttribs = 0

		h1.allowedAttribs           = class
		h2.allowedAttribs           = class
		h3.allowedAttribs           = class
		h4.allowedAttribs           = class
		p.allowedAttribs            = class
		ol.allowedAttribs           = class
		ul.allowedAttribs           = class
		a.allowedAttribs            = class, href, title, target
		tr.allowedAttribs           = class
		th.allowedAttribs           = class
		td.allowedAttribs           = class
	}
}


### HTML Processing (HTMLparser_db)
RTE.default.proc.HTMLparser_db = 1
RTE.default.proc.HTMLparser_db {
	allowTags < RTE.default.allowedTags
	denyTags < RTE.default.proc.denyTags

	noAttrib = br
}

### HTML Processing (exitHTMLparser_db)
RTE.default.proc.exitHTMLparser_db = 1
RTE.default.proc.exitHTMLparser_db {
	allowTags < RTE.default.allowedTags
	denyTags < RTE.default.proc.denyTags

	tags {
		b.remap = strong
		i.remap = em
		strike.remap = del
	}
	keepNonMatchedTags = 1
	htmlSpecialChars = 0
}

### HTML Processing (entryHTMLparser_rte)
RTE.default.proc.entryHTMLparser_rte = 1
RTE.default.proc.entryHTMLparser_rte {
	allowTags < RTE.default.allowedTags
	denyTags < RTE.default.proc.denyTags

	tags {
		strong.remap = b
		em.remap = i
		del.remap = strike
	}
	keepNonMatchedTags = 1
	htmlSpecialChars = 0
}

### HTML Processing (HTMLparser_rte)
RTE.default.proc.HTMLparser_rte = 1
RTE.default.proc.HTMLparser_rte {
	allowTags < RTE.default.allowedTags
	denyTags < RTE.default.proc.denyTags

	keepNonMatchedTags = 1
	htmlSpecialChars = 0
}

RTE.default.FE < RTE.default
RTE.config.tt_content.bodytext >

### Word HTML cleanup
RTE.default.enableWordClean = 1
RTE.default.enableWordClean.HTMLparser < RTE.default.proc.entryHTMLparser_db

# FOUNDATION
RTE.default {
    proc.allowedClasses := addToList( button, button secondary, button disabled, button success, button alert, button warning, button info, button expand, button secondary expand, button disabled expand, button success expand, button alert expand, button warning expand, button info expand)
    FE.proc.allowedClasses := addToList( button, button secondary, button disabled, button success, button alert, button warning, button info, button expand, button secondary expand, button disabled expand, button success expand, button alert expand, button warning expand, button info expand)
    FE.buttons.link.properties.class.allowedClasses := addToList( button, button secondary, button disabled, button success, button alert, button warning, button info, button expand, button secondary expand, button disabled expand, button success expand, button alert expand, button warning expand, button info expand)
    buttons.link.properties.class.allowedClasses := addToList( button, button secondary, button disabled, button success, button alert, button warning, button info, button expand, button secondary expand, button disabled expand, button success expand, button alert expand, button warning expand, button info expand)
}


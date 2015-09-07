<?php
$EM_CONF[$_EXTKEY] = array(
	'title' => 'BERGWERK Sitepackage',
	'description' => '',
	'category' => 'templates',
	'version' => '1.1.1',
	'state' => 'stable',
	'clearcacheonload' => 1,
	'author' => 'BERGWERK [MJH]',
	'author_email' => 'mjh@bergwerk.ag',
	'author_company' => 'BERGWERK',
	'constraints' => array(
		'depends' => array(
			'typo3' => '6.2.0-7.99.99',
			'css_styled_content' => '6.2.0-7.9.99',
			'gridelements' => '3.2.0',
			'bwrk_monsterkill' => '3.3.0',
			'cooluri' => '1.1.1'
		),
		'conflicts' => array(),
		'suggests' => array()
	)
);

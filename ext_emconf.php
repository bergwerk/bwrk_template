<?php
$EM_CONF[$_EXTKEY] = array(
	'title' => 'BERGWERK Template',
	'description' => '',
	'category' => 'templates',
	'version' => '2.2.0',
	'state' => 'stable',
	'clearcacheonload' => 1,
	'author' => 'BERGWERK',
	'author_email' => 'technik@bergwerk.ag',
	'author_company' => 'BERGWERK',
	'constraints' => array(
		'depends' => array(
			'typo3' => '6.2.0-7.6.99'
		),
		'conflicts' => array(),
		'suggests' => array(
			'fluid_styled_content' => '7.6.0-7.6.99'
		)
	)
);

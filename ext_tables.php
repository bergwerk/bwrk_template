<?php

if (!defined('TYPO3_MODE')) {
	die ('Access denied.');
}

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
	$_EXTKEY, 'Configuration/TypoScript',
	'SitePackage Starter'
);

// THINK BEFORE UNCOMMENTING THE FOLLOWING LINES - THEY WILL INFLUENCE
// ALL SITES IN THE TYPO3 CMS INSTALLATION!
// \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
//	'<INCLUDE_TYPOSCRIPT: source="FILE:EXT:' . $_EXTKEY .
//	'/Configuration/PageTS/setup.txt">'
// );

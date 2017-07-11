<?php

if (!defined('TYPO3_MODE')) {
    die ('Access denied.');
}

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
    $_EXTKEY, 'Configuration/TypoScript',
    'BERGWERK Template'
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
    '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:' . $_EXTKEY . '/Configuration/PageTS/setup.txt">'
);

$TBE_STYLES['skins'][$_EXTKEY]['name'] = $_EXTKEY;
$TBE_STYLES['skins'][$_EXTKEY]['stylesheetDirectories'][] = 'EXT:' . $_EXTKEY . '/Resources/Public/Css/Backend/';

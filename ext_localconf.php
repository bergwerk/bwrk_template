<?php
if (!defined('TYPO3_MODE')) {
    die ('Access denied.');
}

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
    '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:' . $_EXTKEY . '/Configuration/PageTS/setup.txt">'
);

// Add Custom Configuration for CKEeditor
$GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['bwrk_template'] = 'EXT:bwrk_template/Configuration/Yaml/RTE/RTE.yaml';

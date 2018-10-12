<?php
namespace BERGWERK\BwrkTemplate\UserFuncs;

use TYPO3\CMS\Core\Utility\GeneralUtility;

class Tca
{

    public function columnConfiguration($PA, $fObj)
    {
        $templatePath = GeneralUtility::getFileAbsFileName('EXT:bwrk_template/Resources/Private/Ext/Gridelements/FlexForm/' . $PA['parameters']['type'] . '.html');

        if (file_exists($templatePath)) {
            return file_get_contents($templatePath);
        }
    }
}

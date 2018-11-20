<?php

namespace BERGWERK\BwrkTemplate;

use TYPO3\CMS\Core\Crypto\PasswordHashing\PasswordHashInterface;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Extbase\Object\ObjectManager;

class Bootstrap
{
    const CACHE_AUTH_HEADER = 'X-CACHE-AUTH';

    /**
     * @return object|ObjectManager
     */
    public static function getObjectManager()
    {
        return GeneralUtility::makeInstance(
            ObjectManager::class
        );
    }

    /**
     * @return string
     */
    public static function getPasswordHashingClassName()
    {
        return $GLOBALS['TYPO3_CONF_VARS']['FE']['passwordHashing']['className'];
    }

    /**
     * @return string
     */
    public static function getInstallToolPassword()
    {
        return $GLOBALS['TYPO3_CONF_VARS']['BE']['installToolPassword'];
    }

    /**
     * @return object|PasswordHashInterface
     */
    public static function getPasswordHashing()
    {
        return GeneralUtility::makeInstance(
            self::getPasswordHashingClassName()
        );
    }
}

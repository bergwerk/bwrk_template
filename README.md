# BERGWERK Sitepackage Extension

A TYPO3 CMS extension for developing a Theme

### Depends on

- TYPO3 - 6.2.0-7.99.99
- CSS Styled Content - 6.2.0-7.9.99
- Gridelements - 3.2.0
- BWRK_Monsterkill - 3.3.0
- Cooluri - 1.1.1

###

```typoscript
config {
  baseURL = http://bwrk-devkit.local
}

lib {
  headerlogo = 27

  headerlinks = 3

  footer = 34
}


// depends on bwrk_powermail_addon
EMAIL_ADMIN_FROM_EMAIL = technik@bergwerk.ag
EMAIL_ADMIN_FROM_NAME = DevKit TYPO3 6.2

EMAIL_ADMIN_TO_EMAIL = technik@bergwerk.ag
EMAIL_ADMIN_TO_NAME = DevKit TYPO3 6.2

EMAIL_CONTACT_FROM_EMAIL = technik@bergwerk.ag
EMAIL_CONTACT_FROM_NAME = DevKit TYPO3 6.2

EMAIL_CONTACT_TO_EMAIL = technik@bergwerk.ag
EMAIL_CONTACT_TO_NAME = DevKit TYPO3 6.2
```
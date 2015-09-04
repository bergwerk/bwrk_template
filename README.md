# BERGWERK Sitepackage Extension

A TYPO3 CMS Extension for developing a Basic Foundation TYPO3 Template

### Dependencies
- TYPO3 - 6.2.0-7.99.99
- CSS Styled Content - 6.2.0-7.9.99
- Gridelements - 3.2.0
- BWRK_Monsterkill - 3.3.0
- Cooluri - 1.1.1


#### Basic TypoScript
Insert this in your Default Root Template Constants

```
config {
  baseURL =
}

lib {
  headerlogo = ID

  headerlinks = ID

  footer = ID
}
```

#### Add File Storage
Add a File Storage to the TYPO3 Root
Name: bwrk_sitepackage
Path: <b>typo3conf/ext/bwrk_sitepackage/FileStorage</b>
Access: Is Searchable, Is online

#### Basic Backend-Layouts Configuration
- Ganzspaltig
- 2 Spaltig, Rechs
- 2 Spaltig, Links
- 3 Spaltig

Configure the Backend-Layout ID <b>EXT:bwrk_sitepackage/Configuration/TypoScript/Setup/Page/fluidTemplate.ts</b>
```
ID = TEXT
ID.value = EXT:bwrk_sitepackage/Resources/Private/Fluid/Templates/Page/1-Column.html
```

#### Basic Gridelements Configuration
- Ganzspaltig (Row)
- 2 Spalten
- 3 Spalten
- 4 Spalten
- CSS-Wrapper

Configure the Gridelements ID in <b>bwrk_sitepackage/Configuration/TypoScript/Ext/Gridelements/setup.ts</b>
```
# Gridelement
ID < plugin.tx_gridelements_pi1.setup.2cols
```
Flexform Configuration in <b>typo3conf/ext/bwrk_sitepackage/FileStorage/Gridelements</b>

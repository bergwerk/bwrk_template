# BERGWERK Template Extension

A TYPO3 CMS Extension for developing a Basic Foundation TYPO3 Template. In this extension shall all necessary files and dependencies for the TYPO3 Webiste be included.

### Dependencies
- TYPO3 - 7.6.0-7.99.99
- Fluid Styled Content - 7.6.0-7.9.99

This extension is prepared to use it out of the box with the following extensions:

- CoolUri - 1.1.2 (cooluri)
- Mask - 2.1.0 (mask)
- Gridelements - 7.0.5 (gridelements)

## Quick Guide

### 1. TypoScript

1. Include all typoscript from external extensions in the `setup.txt` or `constants.txt`.
2. All internal typoscript is included over `INCLUDE DIR`. So you can easily split big files in small clear files.
3. For new constants add the possibility to adjust the constants in the constant editor in the backend. For example if you want to adjust the baseURL, do this in the constant editor.

### 2. Backend Layouts

There are two basic backend layouts preconfigured.

- Full width 
- Two Columns

The backend layouts can be configured in `Configuration/PageTS/BackendLayouts`. Then you must set a template path in `Configuration/TypoScript/Setup/FluidTemplate.ts`.
If you add a new backend layout, please take care for the editor and add a new icon for this backend layout. 


#### Basic Backend-Layouts Configuration
- Ganzspaltig
- 2 Spaltig, Rechs
- 2 Spaltig, Links
- 3 Spaltig

Configure the Backend-Layout ID *EXT:bwrk_template/Configuration/TypoScript/Setup/Page/fluidTemplate.ts*
```
ID = TEXT
ID.value = EXT:bwrk_template/Resources/Private/Fluid/Templates/Page/1-Column.html
```

#### Basic Gridelements Configuration
- Ganzspaltig (Row)
- 2 Spalten
- 3 Spalten
- 4 Spalten
- CSS-Wrapper

Configure the Gridelements ID in *bwrk_template/Configuration/TypoScript/Ext/Gridelements/setup.ts*
```
# Gridelement
ID < plugin.tx_gridelements_pi1.setup.2cols
```
Flexform Configuration in *typo3conf/ext/bwrk_template/FileStorage/Gridelements*

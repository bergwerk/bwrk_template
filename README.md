# BERGWERK Template Extension

A TYPO3 CMS Extension for developing a Basic Foundation TYPO3 Template. In this extension shall all necessary files and dependencies for the TYPO3 Webiste be included.

### Dependencies
- TYPO3
- Fluid Styled Content

This extension is prepared to use it out of the box with the following extensions:

- CoolUri - 1.1.2 (cooluri)
- Mask - 2.1.0 (mask)
- Gridelements - 7.0.5 (gridelements)

---

## Quick Guide

### 1. TypoScript

- Include all typoscript from external extensions in the `setup.txt` or `constants.txt`.
- All internal typoscript is included over `INCLUDE DIR`. So you can easily split big files in small clear files.
- For new constants add the possibility to adjust the constants in the constant editor in the backend. For example if you want to adjust the baseURL, do this in the constant editor.

### 2. Backend Layouts

There are two basic backend layouts preconfigured.

- Full width 
- Two Columns

The backend layouts can be configured in `Configuration/PageTS/BackendLayouts`. Then you must set a template path in `Configuration/TypoScript/Setup/FluidTemplate.ts`.

If you add a new backend layout, please take care for the editor and add a new icon for this backend layout. 

---

## Extension Guide

### CoolUri

The `CoolUriConf.xml` is located in the `Configuration` folder. 

Go to the extension options in the extension manager and add by **XML path** path the following string: `typo3conf/ext/bwrk_template/Configuration/`. Now CoolUri should work.

---

### Mask

The necessary folder structure for Mask Fluid templating is already prepared in `Resources/Private/Fluid/Ext/Mask`. The file for the general mask configuration should be located in the `Configuration` folder.

Go to the extension options in the extension manager and adjust several paths:

#### 1. General

**File with project-specific mask configuration**: `typo3conf/ext/bwrk_template/Configuration/mask.json`

#### 2. Frontend

**Folder for Content Fluid Templates (with trailing slash)**: `typo3conf/ext/bwrk_template/Resources/Private/Fluid/Ext/Mask/Frontend/`

**Folder for Content Fluid Layouts (with trailing slash)**: `typo3conf/ext/bwrk_template/Resources/Private/Fluid/Ext/Mask/Frontend/Layouts/`

**Folder for Content Fluid Partials (with trailing slash)**: `typo3conf/ext/bwrk_template/Resources/Private/Fluid/Ext/Mask/Frontend/Partials/`

#### 3. Backend
**Folder for Backend Preview Templates (with trailing slash)**: `typo3conf/ext/bwrk_template/Resources/Private/Fluid/Ext/Mask/Backend/`

**Folder for Backend Preview Layouts (with trailing slash)**: `typo3conf/ext/bwrk_template/Resources/Private/Fluid/Ext/Mask/Backend/Layouts/`

**Folder for Backend Preview Partials (with trailing slash)**: `typo3conf/ext/bwrk_template/Resources/Private/Fluid/Ext/Mask/Backend/Partials/`

**Folder for preview-images (with trailing slash)**: `typo3conf/ext/bwrk_template/Resources/Private/Fluid/Ext/Mask/Backend/preview/`

---

### Gridelements

There are four basic gridelements preconfigured.

- 2 Columns
- 3 Columns
- 4 Columns
- CSS Wrapper

Gridelements are configured in `Configuration/PageTS/Gridelements`. 

The fluid template paths are set in `Configuration/TypoScript/Extensions/Setup/Gridelements.ts`.

If you want to a new configuration option for a gridelement type, you need to add a new option in `Configuration/FlexForm/Gridelements` Flexform. After you added th new option you need to adjust to fluid template and add a new case.

The Fluid templates are located in `Resources/Private/Fluid/Ext/Gridelements/Fluid`.

To give the editor a good experience there is a visual guide in the backend for the configuration options. Please adjust or add the new options to the visual guides, which are located in `Resources/Private/Fluid/Ext/Gridelements/Flexform`.





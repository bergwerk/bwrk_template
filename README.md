# BERGWERK Template Extension

A TYPO3 CMS Extension for developing a Basic Foundation TYPO3 Template. In this extension shall all necessary files and dependencies for the TYPO3 Webiste be included.

### Dependencies
- TYPO3 - 7.6.0-7.99.99
- Fluid Styled Content - 7.6.0-7.9.99

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

### 3. Front End Developement

For Front End Development there are several gulp tasks.

First install dependencies:
1. `cd Build`
2. `npm install`
3. `bower install`

To start the build process you always need to navigate in Build folder.

- `bower.json` (includes all frontend dependencies)
- `example.gulp.localconf.js` (Copy this file to `gulp.localconf.js`. You can set the localhost to use the browsersync option)
- `gulp.config.js` (This file contains an array of all JS files and several other config for the build tasks)
- `gulp.paths.js` (This file contains the source and destination paths)
- `gulpfile.js` (This file contains all gulp tasks)
- `package.json` (This files contains all dependencies for the build tasks)

#### Gulp Tasks:

#### 1. `$ gulp`

The default **gulp** command bundles all default tasks:

- scss
- js
- watch
- browser-sync
- pug (you can remove this then there is no pug needed)

The `scss` tasks will compile the `app.scss` file to `app.css`.

The `js` taks will compile all files which are in `Resources/Private/src/js`. If you want to have control over the order you must include every file particular in `gulp.config.js` in the `files.jsFilesOwn` array.

#### 2. `$ gulp js:Libs`

This gulp task will compile all JS libarys in one file. If you want to add a libary you must adjust the `gulp.config.js` file. 
There are several arrays (`files.jsFilesLibUtility`, `files.jsFilesLibBabel`, `files.jsFilesLibNormal`) in which you must add the path to the libary.

The files will merged in the following order:
1. `files.jsFilesLibUtility` (Includes the basic utlitliy. For example jQuery)
2. `files.jsFilesLibBabel` (Librarys which need babel compiler)
3. `files.jsFilesLibNormal` (Normal librarys)

#### 3. `$ gulp iconfont`

Will compile a iconfont. Copy your svg files in `Resources/Private/src/assets/iconfont`. After you have started the iconfont task you need to start `$ gulp scss` to compile the generated scss in your normal css.

Example:

```
File: phone.svg
```

```html
<span class="icon icon-phone">
```

```scss
.phone-icon {
    @include icon-phone();
}
```

#### 4. `$ gulp favicon`

Generates all favicons from a 1000x1000 pixel large PNG. Place your `favicon.png` in `Resources/Private/src/assets/favicon` and start the gulp task.

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





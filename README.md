<!-- markdownlint-configure-file {
  "MD013": {
    "code_blocks": false,
    "tables": false
  },
  "MD033": false,
  "MD041": false
} -->
<div align="center">

<img width="250" src="https://user-images.githubusercontent.com/7425261/222622724-d76a914f-7f98-471b-b091-7039172a1e4e.png">

# Figma overlay

[![NPM version](https://img.shields.io/npm/v/figma-overlay.svg?style=flat-square)](https://npmjs.com/package/figma-overlay)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://raw.githubusercontent.com/kanadeko/Kuro/master/LICENSE)
[![Support](https://img.shields.io/badge/Chat%20%2F%20Support-discord-7289DA.svg?style=flat-square)](https://discord.gg/5g6vgwn)
[![Support me](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Fshieldsio-patreon.vercel.app%2Fapi%3Fusername%3Dpitu%26type%3Dpledges&style=flat-square)](https://www.patreon.com/pitu)

Figma overlay is a drop-in component to create an overlay over your website to compare it to it's figma counterpart

It works by grabbing the page/component svg from your clipboard and creating a floating image for you to drag around and compare, letting you move it per-pixel using the arrow keys and changing the opacity for easy comparison.<br /><br />
Figma overlay is a Web Component so it works with any framework

[Introduction](#introduction) •
[Installation](#installation) •
[Configuration](#configuration)

</div>

## Introduction
In an effort to aid the gap between a Figma design and the implementation counterpart this tool aims to make it easier for developers to achieve pixel-perfect implementation of designs. The workflow consists on opening a figma design, selecting a component, right clicking it and selecting copy and finally selecting `Copy as SVG`

<div align="center">
	<img width="700" src="https://user-images.githubusercontent.com/7425261/222623483-d32d231d-1b06-48d5-9c87-e13e7a56020b.png">
</div>

Once this is done, you can now go to your website running Figma-overlay and click the floating button sitting on the lower-left corner of your screen

<div align="center">
	<img width="500" src="https://user-images.githubusercontent.com/7425261/222623939-b2c4c787-25ee-4924-8d1d-f725ef6a58da.png">
</div>

And that's it! Now you can drag the overlay around, use the arrow keys to tune the position and the slider to change opacity and compare what you did against what you have to.

<div align="center">
<img width="800" src="https://user-images.githubusercontent.com/7425261/222626102-5e98ac67-ebe0-4a27-ad69-e76e9a32b2b0.gif">	
</div>


## Installation

Figma overlay is a Web Component which means you can use it with any framework you like by importing it properly. This small guide will only cover how to add it to the browser and to Vite based projects, specifically with Vue. If you get it up and running with other setup and want to contribute, please make a PR to ammend the instructions.

### With Vite

```bash
npm i figma-overlay
```

Then import the component
```ts
import FigmaOverlay from 'figma-overlay';
```
Add it to your html as follows.
```html
<figma-overlay></figma-overlay>
```
And make sure to add `figma-overlay` as a Custom Element in `vite.config.ts`
```ts
...
plugins: [
  vue({
    template: {
      compilerOptions: {
        isCustomElement: tag => tag.includes('figma-overlay')
      }
    }
  })
],
```

### In the browser
Add the script at the end of your `body` tag
```html
<script src="https://unpkg.com/figma-overlay@latest"></script>
```
And then ideally place the component right after the body
```html
...
<body>
	<figma-overlay></figma-overlay>
	...
```

## Author

**Figma-overlay** © [Pitu](https://github.com/Pitu), Released under the [MIT](https://github.com/Pitu/figma-overlay/blob/master/LICENSE) License.<br>
Authored and maintained by Pitu.

> GitHub [@Pitu](https://github.com/Pitu)

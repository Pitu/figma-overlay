# Figma overlay

In an effort to make components as close as possible as the provided design I built this small utility that let's you copy a Figma component and paste it on the page to drag it around to compare the design to the implementation.

The way it works is it grabs the SVG component from the clipboard and creates an object that you can drag around and use the arrow keys to move with pixel accuracy to place the overlay on top of the component you want to compare it to.

## How to use
### With node

```bash
npm i figma-overlay
```

Then import the component
```ts
import FigmaOverlay from 'figma-overlay';
```
And lastly add it to your html as follows.
```html
<figma-overlay></figma-overlay>
```

### In the browser
Add the script at the end of your `body` tag
```html
<script src="https://unpkg.com/figma-overlay@latest"></script>
```
And then place the component ideally right after the body
```html
...
<body>
	<figma-overlay></figma-overlay>
	...
```

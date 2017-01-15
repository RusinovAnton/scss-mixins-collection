# SCSS-MIXINS-COLLECTION

Collection of the usefull scss mixins.

## INSTALLATION

* You can install it via npm:
```css
npm install --save-dev scss-mixins-collection
```
or via Bower if you prefer so: 
```
bower install scss-mixins-collection
```
  
* Then just @import mixins/__mixins.scss file into your scss
* ???
* PROFIT

## WHATS INSIDE
  
[**any-button**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_any-button.scss)  
  
Content mixin that apply style for any button.  
  
-----  
  
[**arrow**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_arrow.scss)

Mixins to make arrows with border:

* arrow-top($size, $width, $color)
* arrow-bottom($size, $width, $color)
* arrow-left($size, $width, $color)
* arrow-right($size, $width, $color)
* arrow-top-left($size, $width, $color)
* arrow-top-right($size, $width, $color)
* arrow-bottom-left($size, $width, $color)
* arrow-bottom-right($size, $width, $color)

-----

[**clearfix**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_clearfix.scss)

* clearfix - bootstrap's clearfix hack;

-----

[**ellipsis**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_ellipsis.scss)

  Contains mixins to make block that cut text adding ellipsis:
* ellipsis
* ellipsis-multiline($font-size, $line-height, $lines-to-show)
* ellipsis-multiline-simple($height, $lines-to-show)
-----

[**fluid-type**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_fullwidth.scss)

PRECISE CONTROL OVER RESPONSIVE TYPOGRAPHY FOR SASS  
Indrek Paas @indrekpaas  
Inspired by Mike Riethmuller's Precise control over responsive typography  
http://madebymike.com.au/writing/precise-control-responsive-typography/  
* fluid-type($properties, $min-vw, $max-vw, $min-value, $max-value)  

-----

[**bs-gutter**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_hack-bootstrap.scss)

Applying custom paddings for bootstrap columns along with row's margin changes:

* bs-gutter($gutter-width)
  
-----

[**placeholder**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_placeholder.scss)

Applying styles for input's placeholders:

* placeholder

-----

[**pseudo-block**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_pseudo-block.scss)

* pseudo-block - making blocks with :before, :after pseudo elements;
* pseudo-absolute - alias for pseudo-block(absolute);
* pseudo-inline - making inline-block with pseudo elements;
* before-block, before-inline, before-absolute, after-block, after-inline, after-absolute, - mixins with block content for previous mixins in this file;

-----

[**inline-list**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_inline-list.scss)

* inline-list - apply this mixin for ol/ul to make li stack horizontally;

-----

[**reset-list**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_reset-list.scss)

* reset-list - reset for default ol/ul styles;

-----

[**reset-link**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_reset-link.scss)

* reset-link - reset for default links styles;

-----

[**fit-image**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_fit-image.scss)

* fit-image - fit image with various aspect ratio into fixed size wrapper;

-----

[**row**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_row.scss)

* row($margin) - adding clearfix + negative margin;

-----

[**size**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_size.scss)

* size($width, $height) - applies width, height;

-----

[**square**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_square.scss)

* square - making block with same width, height;

-----

[**reset-text**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_reset-text.scss)

Resets text styles:

* reset-text

-----

[**spacing**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_spacing.scss)

Handy margin/padding mixins:

* margin-h($margin)
* margin-v($margin)
* padding-h($padding)
* padding-v($padding)

-----

[**sr-only**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_sr-only.scss)

Mixin to make screen-readers-only blocks:

* sr-only

-----

[**text-hide**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_text-hide.scss)

Mixin that hides text:

* text-hide

-----

[**triangle**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_triangle.scss)

Set of mixins to make triangle with css border property:

* triangle-top($width, $height, $color)
* triangle-bottom($width, $height, $color)
* triangle-left($width, $height, $color)
* triangle-right($width, $height, $color)
* triangle-top-left($size, $color)
* triangle-top-right($size, $color)
* triangle-bottom-left($size, $color)
* triangle-bottom-right($size, $color)

-----

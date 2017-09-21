# SCSS-MIXINS-COLLECTION
[![npm](https://img.shields.io/npm/dm/localeval.svg)](https://www.npmjs.com/package/scss-mixins-collection)
[![Build Status](https://travis-ci.org/RusinovAnton/scss-mixins-collection.svg?branch=master)](https://travis-ci.org/RusinovAnton/scss-mixins-collection)  

Collection of handy scss mixins.

## INSTALLATION

* You can install it via npm:
```css
npm install --save-dev scss-mixins-collection
```
or via Bower if you prefer so: 
```
bower install scss-mixins-collection
```
  
* Then just `@import '[node_modules || bower_components]/scss-mixins-collection/_index.scss'` file into your scss
* ???
* PROFIT

## LICENSE

LICENSE MIT  
See [LICENSE.md](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/LICENSE.md)

-----

## CHANGELOG

See [releases](https://github.com/RusinovAnton/scss-mixins-collection/releases)

-----

## WHATS INSIDE
  
[**any-button**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_any-button.scss)  
  
Content mixin that apply style for any button.  
  
-----  
  
[**arrow**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/arrow/__arrow.scss)

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

[**block-center**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_block-center.scss)

* block-center - centers block with margin: auto;

-----

[**bs-gutter**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_bs-gutter.scss)

Applying custom paddings for bootstrap columns along with row's margin changes:

* bs-gutter($gutter-width)  

-----

[**clearfix**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_clearfix.scss)

* clearfix - bootstrap's clearfix hack;

-----

[**ellipsis**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/ellipsis/__ellipsis.scss)

  Contains mixins to make block that cut text adding ellipsis:
* ellipsis
* ellipsis-multiline($font-size, $line-height, $lines-to-show)
* ellipsis-multiline-simple($height, $lines-to-show)
* ellipsis-lines($lines-to-show)

-----

[**fill-parent**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_fill-parent.scss)

* fill-parent($position: absolute, $zindex: 0) - fill given element in the parents block;

-----

[**fit-image**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_fit-image.scss)

* fit-image - fit image with various aspect ratio into fixed size wrapper;

-----

[**fluid-type**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_fullwidth.scss)

PRECISE CONTROL OVER RESPONSIVE TYPOGRAPHY FOR SASS  
Indrek Paas @indrekpaas  
Inspired by Mike Riethmuller's Precise control over responsive typography  
http://madebymike.com.au/writing/precise-control-responsive-typography/  
* fluid-type($properties, $min-vw, $max-vw, $min-value, $max-value)  

-----

[**if-childrens**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_if-childrens.scss)

Applying styles to an element or to element and siblings if provided  
if there are given number of siblings:

* if-childrens($number-of-children, $sibling-selector)

-----

[**inline-list**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_inline-list.scss)

* inline-list - styles for list that have `li { inline-block }`

-----

[**inline-list**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_inline-list.scss)

* inline-list - apply this mixin for ol/ul to make li stack horizontally;

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

[**reset-list**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_reset-list.scss)

* reset-list - reset for default ol/ul styles;

-----

[**reset-link**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_reset-link.scss)

* reset-link - reset for default links styles;

-----

[**reset-text**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_reset-text.scss)

* reset-text - reset for default text styles;

-----

[**row**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_row.scss)

* row($margin) - adding clearfix + negative margin;

-----

[**row-inline**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_row.scss)

* row-inline($margin) - makes columns to have display inline-block

-----

[**size**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_size.scss)

* size($width, $height: $width) - applies width, height;

-----

[**square**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_square.scss)

* square - making block with same width, height;

-----

[**sr-only**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_sr-only.scss)

* sr-only - makes block available for screen readers only

-----

[**spacing**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_spacing.scss)

Handy margin/padding mixins:

* margin-h($margin-right, $margin-left: $margin-right)
* margin-v($margin-top, $margin-bottom: $margin-top)
* padding-h($padding-right, $padding-left: $padding-right)
* padding-v($padding-top, $padding-bottom: $padding-top)

-----

[**take-space**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_take-space.scss)

* take-space($margin) - Mixin for Absolute|Fixed block to fill parents' block 

-----

[**text-hide**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_text-hide.scss)

* text-hide - Mixin that hides text

-----

[**triangle**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/triangle/__triangle.scss)

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

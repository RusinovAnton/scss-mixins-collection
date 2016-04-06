# SCSS-MIXINS-COLLECTION

Collection of the usefull scss mixins.

## INSTALLIATION

* You can install it via npm:
```css
npm install --save-dev scss-mixins-collection
```

* Then just @import mixins/__mixins.scss file into your scss
* ???
* PROFIT

## WHATS INSIDE
  
[**any-button](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_any-button.scss))  
  
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

[**background-gradient**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_background-gradient.scss)

Mixin that help you to make crossbrowser background gradients:

* gradient-v($startColor, $endColor)
* gradient-h($startColor, $endColor)
* gradient-radial($startColor, $startPos, $endColor, $endPos)

[**block-centering**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_block-centering.scss)

* centered, centered-h, centered-v - centering absolute positioned block relative to his parent (-h - only horizontal, -v - only vertical);
* block-center - centering block with "margin: auto";

-----

[**clearfix**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_clearfix.scss)

* clearfix - bootstrap's clearfix hack;

-----

[**device-z-index-fix**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_device-z-index-fix.scss)

Fix for z-index [problem](http://stackoverflow.com/questions/26408978/android-browsers-position-fixed-and-z-index-issue) for absolute/fixed positioned blocks on Android browser;

-----

[**ellipsis**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_ellipsis.scss)

  Contains mixins to make block that cut text adding ellipsis:
* ellipsis
* multiline-ellipsis($font-size, $line-height, $lines-to-show)
* multiline-ellipsis-simple($height, $lines-to-show)
* ellipsis-lines($lines-to-show)

-----

[**fluid-type**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_fullwidth.scss)

PRECISE CONTROL OVER RESPONSIVE TYPOGRAPHY FOR SASS  
Indrek Paas @indrekpaas  
Inspired by Mike Riethmuller's Precise control over responsive typography  
http://madebymike.com.au/writing/precise-control-responsive-typography/  
* fluid-type($properties, $min-vw, $max-vw, $min-value, $max-value)  

-----

[**fullwidth**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_fullwidth.scss)

This mixins use hack for making fullwidth blocks out of container:
* full-width
* full-left
* full-right

-----

[**hack-bootstrap**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_hack-bootstrap.scss)

Applying custom paddings for bootstrap columns along with row's margin changes:

* hack-bootstrap($padding)

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

[**on-state**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_on-state.scss)

* on-state - applying styles on :hover, :focus, :active;

-----

[**prefix**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_prefix.scss)

* prefix - adding vendor prefixes;

-----

[**reset-list**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_reset-list.scss)

* reset-list - reset for default ol/ul styles;

-----

[**reset-link**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_reset-link.scss)

* reset-link - reset for default links styles;

-----

[**responsive-image**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_responsive-image.scss)

* responsive-image - fit image with various aspect ratio into fixed size wrapper;

-----

[**rotate**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_rotate.scss)

* rotate - alias for 'transform: rotate';

-----

[**row**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_row.scss)

* row - adding clearfix + negative margin;

-----

[**scale**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_scale.scss)

* scale - alias for "transform: scale";

-----

[**skew**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_skew.scss)

Contains aliases for "transform: skew":
* skew($x, $y)
* skewX($x)
* skewY($y)

-----

[**square**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_square.scss)

* square - making block with same width, height;

-----

[**touch-scroll**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_touch-scroll.scss)

* touch-scroll - applying devices's momentum scrolling for blocks that have scrolling overflow;

-----

[**transform**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_transform.scss)

* transform - alias for "transform";

-----

[**transition**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_transition.scss)

Contains aliases for "transition";
* transition;
* transition-all;

-----

[**translate**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_translate.scss),
[**translate2d**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_translate2d.scss),
[**translate-3d**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_translate-3d.scss)

There are aliases for "transform: translate";

-----

[**user-select**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_user-select.scss)

* user-select - applying styles for text selection;

-----

[**reset-filter**](https://github.com/RusinovAnton/scss-mixins-collection/blob/master/mixins/_reset-filter.scss)

Resets IE's filter property:

* reset-filter

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

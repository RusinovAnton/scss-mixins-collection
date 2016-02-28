# SCSS-MIXINS-COLLECTION

Collection of the usefull scss mixins.

## INSTALLIATION

* You can install it via bower:
```css
bower install --save scss-mixins-collection
```

* Then just @import mixins/__mixins.scss file into your scss
* ???
* PROFIT

## WHATS INSIDE

[**background-gradient**](https://github.com/RusinovAnton/scss-lib/blob/master/scss/util/mixins/_background-gradient.scss)

Сontains:
* gradient-v - vertical gradient;
* gradient-h - horizontal gradient;
* gradient-radial - radial gradient;

-----

[**block-centering**](https://github.com/RusinovAnton/scss-lib/blob/master/scss/util/mixins/_block-centering.scss)

Contains:
* centered, centered-h, centered-v - centering absolute positioned block relative to his parent (-h - only horizontal, -v - only vertical);
* block-center - centering block with "margin: auto";

-----

[**clearfix**](https://github.com/RusinovAnton/scss-lib/blob/master/scss/util/mixins/_clearfix.scss)

* clearfix - bootstrap's clearfix hack;

-----

[**device-z-index-fix**](https://github.com/RusinovAnton/scss-lib/blob/master/scss/util/mixins/_device-z-index-fix.scss)

Fix for z-index [problem](http://stackoverflow.com/questions/26408978/android-browsers-position-fixed-and-z-index-issue) for absolute/fixed positioned blocks on Android browser;

-----

[**ellipsis**](https://github.com/RusinovAnton/scss-lib/blob/master/scss/util/mixins/_ellipsis.scss)

  Contains mixins to make block that cut text adding ellipsis:
* ellipsis
* multiline-ellipsis($font-size, $line-height, $lines-to-show)
* multiline-ellipsis-simple($height, $lines-to-show)
* ellipsis-lines($lines-to-show)

-----

[**fullwidth**](https://github.com/RusinovAnton/scss-lib/blob/master/scss/util/mixins/_fullwidth.scss)

Contains:
* fullwidth, fullleft, fullright - hack for making fullwidth blocks out of container;
* full-width-height - resizing absolute block for its parent size;

-----

[**hack-bootstrap**](https://github.com/RusinovAnton/scss-lib/blob/master/scss/util/mixins/_hack-bootstrap.scss)

* hack-bootstrap - applying custom paddings for bootstrap columns along with row's margin changes;

-----

[**placeholder**](https://github.com/RusinovAnton/scss-lib/blob/master/scss/util/mixins/_placeholder.scss)

* placeholder - applying styles for input's placeholders;

-----

[**pseudo-block**](https://github.com/RusinovAnton/scss-lib/blob/master/scss/util/mixins/_pseudo-block.scss)

* pseudo-block - making blocks with :before, :after pseudo elements;
* pseudo-absolute - alias for pseudo-block(absolute);
* pseudo-inline - making inline-block with pseudo elements;
* before-block, before-inline, before-absolute, after-block, after-inline, after-absolute, - mixins with block content for previous mixins in this file;

-----

[**inline-list**](https://github.com/RusinovAnton/scss-lib/blob/master/scss/util/mixins/_inline-list.scss)

* inline-list - apply this mixin for ol/ul to make li stack horizontally;

-----

[**on-state**](https://github.com/RusinovAnton/scss-lib/blob/master/scss/util/mixins/_on-state.scss)

* on-state - applying styles on :hover, :focus, :active;

-----

[**prefix**](https://github.com/RusinovAnton/scss-lib/blob/master/scss/util/mixins/_prefix.scss)

* prefix - adding vendor prefixes;

-----

[**reset-list**](https://github.com/RusinovAnton/scss-lib/blob/master/scss/util/mixins/_reset-list.scss)

* reset-list - reset for default ol/ul styles;

-----

[**reset-link**](https://github.com/RusinovAnton/scss-lib/blob/master/scss/util/mixins/_reset-link.scss)

* reset-link - reset for default links styles;

-----

[**responsive-image**](https://github.com/RusinovAnton/scss-lib/blob/master/scss/util/mixins/_responsive-image.scss)

* responsive-image - fit image with various aspect ratio into fixed size wrapper;

-----

[**rotate**](https://github.com/RusinovAnton/scss-lib/blob/master/scss/util/mixins/_rotate.scss)

* rotate - alias for 'transform: rotate';

-----

[**row**](https://github.com/RusinovAnton/scss-lib/blob/master/scss/util/mixins/_row.scss)

* row - adding clearfix + negative margin;

-----

[**scale**](https://github.com/RusinovAnton/scss-lib/blob/master/scss/util/mixins/_scale.scss)

* scale - alias for "transform: scale";

-----

[**skew**](https://github.com/RusinovAnton/scss-lib/blob/master/scss/util/mixins/_skew.scss)

Contains aliases for "transform: skew":
* skew($x, $y)
* skewX($x)
* skewY($y)

-----

[**square**](https://github.com/RusinovAnton/scss-lib/blob/master/scss/util/mixins/_square.scss)

* square - making block with same width, height;

-----

[**touch-scroll**](https://github.com/RusinovAnton/scss-lib/blob/master/scss/util/mixins/_touch-scroll.scss)

* touch-scroll - applying devices's momentum scrolling for blocks that have scrolling overflow;

-----

[**transform**](https://github.com/RusinovAnton/scss-lib/blob/master/scss/util/mixins/_transform.scss)

* transform - alias for "transform";

-----

[**transition**](https://github.com/RusinovAnton/scss-lib/blob/master/scss/util/mixins/_transition.scss)

Contains aliases for "transition";
* transition;
* transition-all;

-----

[**translate**](https://github.com/RusinovAnton/scss-lib/blob/master/scss/util/mixins/_translate.scss),
[**translate2d**](https://github.com/RusinovAnton/scss-lib/blob/master/scss/util/mixins/_translate2d.scss),
[**translate-3d**](https://github.com/RusinovAnton/scss-lib/blob/master/scss/util/mixins/_translate-3d.scss)

There are aliases for "transform: translate";

-----

[**user-select**](https://github.com/RusinovAnton/scss-lib/blob/master/scss/util/mixins/_user-select.scss)

* user-select - applying styles for text selection;

-----
# Whats This?

Masking inputs with no effort!

# Installation

`npm -i easyMasker --save-dev`


**Then**

`
const easyMasker = require('easyMasker');

const_options= { maskWith: '^',fromIndex:4,toIndex:5};

const _maskedInput = easyMasker.maskInput('05536843029', options);
`

# Hevaly packages v1.1.8 BETA

### What is it ?

It helps programmers to code the interface more convenient

# Installation

`npm install hevaly`

Example:

Html: 

```html
<script type="module" src="./index.js"></script>
```

Javascript:

```javascript
import { hevaly } from 'hevaly';

const pad = '1rem 2rem'
const a = new hevaly({
    class: ".hevaShadow",
    shadow_type: '15px 15px 15px rgb(0,0,0,0.12)',
    padding: pad,
    margin: '1rem 1rem',
    background: "#000000"
});

```

## Options

In this version we just support 2 options, both of which are optional

* *shadow_type*
* *padding*
* *margin*
* *background*

# Good Luck
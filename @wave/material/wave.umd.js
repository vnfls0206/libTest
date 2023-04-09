(function(f,c){typeof exports=="object"&&typeof module!="undefined"?c(exports,require("styled-components"),require("react")):typeof define=="function"&&define.amd?define(["exports","styled-components","react"],c):(f=typeof globalThis!="undefined"?globalThis:f||self,c(f["wave-common-front/lib"]={},f.styled,f.React))})(this,function(f,c,v){"use strict";function l(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var O=l(c),g=l(v);const j=O.default.button`
    border: none;
    border-radius: 0.5rem;
    background-color: #186faf;
    color: hsl(0deg, 0%, 98%);
    padding: 0.75rem;
    cursor: pointer;
    &:hover {
        background-color: #0a558c;
    }
    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px #62b0e8;
        background-color: #0a558c;
    }
`;var d={exports:{}},i={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var p=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;function w(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function S(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;var n=Object.getOwnPropertyNames(r).map(function(a){return r[a]});if(n.join("")!=="0123456789")return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(a){o[a]=a}),Object.keys(Object.assign({},o)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}S();/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x=g.default,y=60103;if(i.Fragment=60107,typeof Symbol=="function"&&Symbol.for){var b=Symbol.for;y=b("react.element"),i.Fragment=b("react.fragment")}var P=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E=Object.prototype.hasOwnProperty,R={key:!0,ref:!0,__self:!0,__source:!0};function m(e,r,t){var n,o={},a=null,u=null;t!==void 0&&(a=""+t),r.key!==void 0&&(a=""+r.key),r.ref!==void 0&&(u=r.ref);for(n in r)E.call(r,n)&&!R.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps,r)o[n]===void 0&&(o[n]=r[n]);return{$$typeof:y,type:e,key:a,ref:u,props:o,_owner:P.current}}i.jsx=m,i.jsxs=m,d.exports=i;const k=d.exports.jsx,T=({})=>k("div",{children:"aaaa"});f.MyButton=j,f.MyDiv=T,Object.defineProperty(f,"__esModule",{value:!0}),f[Symbol.toStringTag]="Module"});
//# sourceMappingURL=wave.umd.js.map

/*! For license information please see Interdiction~ManageDeliveryPreferences~PaperLessSplash~StatementsAndDocuments.9570a8ff18ea09b006b6.chunk.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([["Interdiction~ManageDeliveryPreferences~PaperLessSplash~StatementsAndDocuments"],{"3a0fac9486":function(e,t,r){"use strict";r("156e15eb0f"),r("930a5d7012"),r("09e0c53ae5"),r("694c7f1c52"),r("cf5ea858c9"),r("32f0472b1c"),r("7292f53f4e"),r("9bf0cff407"),r("aee243f252"),r("cd52722433"),r("71af1170ab"),r("4f517bc3ec"),r("703bea8fdc"),r("d6b316e4fa"),r("f0b88f3a8c"),r("0f85e13c47"),r("06ff1bec69"),r("a53b5e1eb2"),r("d4304e7d6b");var n=r("74281628d2");function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}var i=["formId","fieldId","initialValue"];function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==o(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===o(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}t.a=function(e){var t=e.formId,r=e.fieldId,o=e.initialValue,a=u(e,i);return{type:n.b,payload:c({formId:t,fieldId:r,initialValue:o,value:o},a)}}},"3c6659405b":function(e,t,r){"use strict";r("c7c67f6c83"),r("09e0c53ae5"),r("fd6eb56673"),r("102ed86af4"),r("3ef6222168"),r("32f0472b1c"),r("c964841b13"),r("156e15eb0f"),r("930a5d7012"),r("694c7f1c52"),r("cf5ea858c9"),r("7292f53f4e"),r("785d577b38"),r("7f9fecfd34");var n=r("8af190b70a"),o=r.n(n),i=r("54f683fcda"),a=r.n(i),c=r("b5fd931a1d"),f=(r("9bf0cff407"),r("aee243f252"),r("cd52722433"),r("71af1170ab"),r("4f517bc3ec"),r("703bea8fdc"),r("d6b316e4fa"),r("f0b88f3a8c"),r("0f85e13c47"),r("06ff1bec69"),r("be92b4822c"),r("d74500aba3"),r("abe2da8601"),r("a53b5e1eb2"),r("d4304e7d6b"),a.a.Record({formId:null,action:null,submit:null,valid:!0,submitting:!1,postData:!1,postOptions:{},transform:void 0,onSubmitSuccess:function(){},onSubmitFailure:function(){},messages:a.a.List(),fields:a.a.Map()})),u=a.a.Record({fieldId:null,fieldType:"",name:null,initialValue:void 0,value:void 0,label:void 0,messageLabel:void 0,sensitive:!1,dirty:!1,pristine:!0,focused:!1,receivedFocus:!1,transition:!1,hasTransitioned:!1,disabled:!1,disabledWhen:void 0,disabledByCondition:!1,hidden:!1,hiddenWhen:void 0,hiddenByCondition:!1,required:!1,messageId:null,message:"",showMessage:!1,onChangeCallback:void 0,onChange:void 0,transform:void 0,transformOnSubmit:void 0,includeInSubmit:!0,deleteOnUnmount:!1,maskable:!1,masked:!0,allowUnmask:!1,unmaskedValue:void 0,submitUnmaskedValue:!1,minLength:0,maxLength:1/0,renderOptionalFieldLabel:!1}),l=function(e){var t=e.get("fields").filter((function(t){return t.disabledWhen&&t.disabledWhen({form:e,fields:e.get("fields")})})),r=e.get("fields").filter((function(t){return t.hiddenWhen&&t.hiddenWhen({form:e,fields:e.get("fields")})}));return e.withMutations((function(e){return e.get("fields").filter((function(e){return e.disabledWhen||e.hiddenWhen})).keySeq().forEach((function(n){return e.mergeIn(["fields",n],{disabledByCondition:t.has(n),hiddenByCondition:r.has(n)})}))}))},s=r("74281628d2");function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}var b=["formId","fieldId","fieldsData"],m=["fieldId"],p=["fieldId"];function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function h(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==d(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===d(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var O=function(e,t){var r=t.type,n=t.payload,o=void 0===n?{}:n,i=o.formId,a=o.fieldId,c=o.fieldsData,d=g(o,b);switch(r){case s.h:case s.k:return e.update(i,(function(e){return e?e.merge(d):new f(v({formId:i,fieldId:a},d))}));case s.j:return e.delete(i);case s.i:return e.updateIn([i,"fields"],(function(e){return e.map((function(e){return e.merge({message:"",showMessage:!1})}))}));case s.b:var y=d.onChangeCallback,h=void 0===y?function(){}:y,O=d.value,j=e.update(i,(function(e){return e.hasIn(["fields",a])?e:e.setIn(["fields",a],new u(v({fieldId:a},d)))})),w=function(e){var t=e.onChangeCallback,r=e.field,n=e.fieldId,o=e.value;return(t({fieldId:n,field:r,value:r.value,valueChanged:o!==r.value})||[])[0]||{}}({onChangeCallback:h,field:j.getIn([i,"fields",a]),fieldId:a,value:O});return j.updateIn([i,"fields",a],(function(e){return e.merge({message:w.message})})).updateIn([i],(function(e){return l(e)}));case s.d:return e.deleteIn([i,"fields",a]);case s.g:var S=e.getIn([i,"fields",a]),I=S.onChangeCallback,P=(void 0===I?function(){}:I)({fieldId:a,field:S,fields:e.getIn([i,"fields"]),value:d.value,valueChanged:d.value!==S.value})||[],E=P.filter((function(e){return e.fieldId===a}))[0],x=P.filter((function(e){return e.fieldId!==a})),L=e.updateIn([i,"fields",a],(function(e){return e.merge(v({message:"",showMessage:!1,pristine:!1,dirty:d.value!==e.initialValue},Object.assign({},d,E||{})))}));return L=L.withMutations((function(e){return x.reduce((function(e,t){var r=t.fieldId,n=g(t,m);return e.updateIn([i,"fields",r],(function(e){return null==e?void 0:e.merge(Object.assign({},n,{pristine:!1}))}))}),e)})),L.updateIn([i],(function(e){return l(e)}));case s.f:return e.updateIn([i,"fields",a],(function(e){return e&&e.merge(d)}));case s.a:var k=e;return c.forEach((function(e){var t=e.fieldId,r=g(e,p);k=k.updateIn([i,"fields",t],(function(e){return e&&e.merge(r)}))})),k;case s.e:return e.updateIn([i,"fields",a],(function(e){return e.merge({focused:!0,receivedFocus:!0})}));case s.c:return e.updateIn([i,"fields",a],(function(t){return t?t.merge({focused:!1,showMessage:""!==t.message}):e}));default:throw new Error("Unhandled form action: ".concat(r))}};function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,c=[],f=!0,u=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;f=!1}else for(;!(f=(n=i.call(r)).done)&&(c.push(n.value),c.length!==t);f=!0);}catch(e){u=!0,o=e}finally{try{if(!f&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(u)throw o}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return w(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return w(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var S=a.a.Map();t.a=function(e){var t=e.children,r=j(Object(n.useReducer)(O,S),2),i={formsState:r[0],dispatch:r[1]};return o.a.createElement(c.a.Provider,{value:i},t)}},"3c91d71c6c":function(e,t,r){"use strict";var n=r("8af190b70a"),o=r.n(n).a.createContext();t.a=o},"5ea1955bfe":function(e,t,r){"use strict";r("156e15eb0f"),r("930a5d7012"),r("09e0c53ae5"),r("694c7f1c52"),r("cf5ea858c9"),r("32f0472b1c"),r("7292f53f4e"),r("9bf0cff407"),r("aee243f252"),r("cd52722433"),r("71af1170ab"),r("4f517bc3ec"),r("703bea8fdc"),r("d6b316e4fa"),r("f0b88f3a8c"),r("0f85e13c47"),r("06ff1bec69"),r("a53b5e1eb2"),r("d4304e7d6b");var n=r("74281628d2");function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}var i=["formId","fieldId"];function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==o(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===o(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}t.a=function(e){var t=e.formId,r=e.fieldId,o=u(e,i);return{type:n.g,payload:c({formId:t,fieldId:r},o)}}},"7828559b25":function(e,t,r){"use strict";var n=r("8af190b70a"),o=r.n(n).a.createContext();t.a=o},"84abad18d7":function(e,t,r){"use strict";r("abe2da8601"),r("09e0c53ae5"),r("aee243f252"),r("be92b4822c"),r("102ed86af4"),r("785d577b38");t.a=function(e){var t=e.fields;return(0,e.transform)(t.map((function(e){return e.merge({value:e.transformOnSubmit?e.transformOnSubmit({value:e.value,fields:t}):e.value})})).filter((function(e){return e.includeInSubmit})).reduce((function(e,t){var r=t.name||t.fieldId;return e[r]?(Array.isArray(e[r])||(e[r]=[e[r]]),e[r].push(t.value)):e[r]=t.value,e}),{}))}},b5fd931a1d:function(e,t,r){"use strict";var n=r("8af190b70a"),o=r.n(n).a.createContext();t.a=o},d3bf46c560:function(e,t,r){"use strict";var n=r("74281628d2");t.a=function(e){var t=e.formId,r=e.fieldId;return{type:n.d,payload:{formId:t,fieldId:r}}}},fd3782a6fb:function(e,t,r){"use strict";r("156e15eb0f"),r("930a5d7012"),r("09e0c53ae5"),r("694c7f1c52"),r("cf5ea858c9"),r("32f0472b1c"),r("7292f53f4e"),r("d74500aba3"),r("9bf0cff407"),r("aee243f252"),r("cd52722433"),r("71af1170ab"),r("4f517bc3ec"),r("703bea8fdc"),r("d6b316e4fa"),r("f0b88f3a8c"),r("0f85e13c47"),r("9e57e2b1bf"),r("a53b5e1eb2"),r("d4304e7d6b"),r("c97e2da1ae");var n=r("8af190b70a"),o=r.n(n),i=r("0a81c72155"),a=r("bdc07a6d5b"),c=r("d4592f5ffd"),f=r("b5fd931a1d"),u=r("7828559b25"),l=(r("a7dbc43ae2"),r("0d397c707c"),r("a496c4a766"),r("8fb8869a9b"),r("40817af609"),r("102ed86af4"),r("4abdb05252"),r("19c1facf9a"),r("9fff14e8b2"),r("c7c67f6c83"),r("2d326da2a9"),r("54f683fcda")),s=r.n(l),d=r("015a64cbfd"),b=r("d78d5d7b9e"),m=r("7d1d812059"),p=r("d9b45c3cdc"),y=r("2485d7279a"),v=r("84abad18d7"),h=(r("be92b4822c"),r("ba67ff097c")),g=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map((function(e){var t=e.message,r=e.level,n=e.messagePlacement;return new h.a({content:t,level:r,placement:n})}))};r("abe2da8601"),r("f701f5ba8d");function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function j(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==O(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==O(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===O(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var w=function(e){var t=e.fields,r=e.messages,n=void 0===r?[]:r,o=t.reduce((function(e,t){return Object.assign(e,j({},t.name||t.fieldId,t.fieldId))}),{});return n.filter((function(e){return e.fieldNames&&e.fieldNames.length})).reduce((function(e,t){var r=t.fieldNames,n=t.message,i=t.level,a=t.systemError,c=t.messagePlacement;return e.concat(r.map((function(e){return{fieldId:o[e],message:n,level:i,systemError:a,messagePlacement:c}})))}),[])};function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function I(){I=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",f=i.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var i=t&&t.prototype instanceof v?t:v,a=Object.create(i.prototype),c=new F(n||[]);return o(a,"_invoke",{value:L(e,r,c)}),a}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=l;var d="suspendedStart",b="suspendedYield",m="executing",p="completed",y={};function v(){}function h(){}function g(){}var O={};u(O,a,(function(){return this}));var j=Object.getPrototypeOf,w=j&&j(j(N([])));w&&w!==r&&n.call(w,a)&&(O=w);var P=g.prototype=v.prototype=Object.create(O);function E(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function r(o,i,a,c){var f=s(e[o],e,i);if("throw"!==f.type){var u=f.arg,l=u.value;return l&&"object"==S(l)&&n.call(l,"__await")?t.resolve(l.__await).then((function(e){r("next",e,a,c)}),(function(e){r("throw",e,a,c)})):t.resolve(l).then((function(e){u.value=e,a(u)}),(function(e){return r("throw",e,a,c)}))}c(f.arg)}var i;o(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return i=i?i.then(o,o):o()}})}function L(t,r,n){var o=d;return function(i,a){if(o===m)throw new Error("Generator is already running");if(o===p){if("throw"===i)throw a;return{value:e,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var f=k(c,n);if(f){if(f===y)continue;return f}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=m;var u=s(t,r,n);if("normal"===u.type){if(o=n.done?p:b,u.arg===y)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=p,n.method="throw",n.arg=u.arg)}}}function k(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=s(o,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function D(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function F(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(D,this),this.reset(!0)}function N(t){if(t||""===t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}throw new TypeError(S(t)+" is not iterable")}return h.prototype=g,o(P,"constructor",{value:g,configurable:!0}),o(g,"constructor",{value:h,configurable:!0}),h.displayName=u(g,f,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,u(e,f,"GeneratorFunction")),e.prototype=Object.create(P),e},t.awrap=function(e){return{__await:e}},E(x.prototype),u(x.prototype,c,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},E(P),u(P,f,"Generator"),u(P,a,(function(){return this})),u(P,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=N,F.prototype={constructor:F,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var f=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(f&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(f){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),C(r),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:N(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}function P(e,t,r,n,o,i,a){try{var c=e[i](a),f=c.value}catch(e){return void r(e)}c.done?t(f):Promise.resolve(f).then(n,o)}var E=function(){var e,t=(e=I().mark((function e(t){var r,n,o,i,a,c,f,u,l,h,O,j,S,P,E,x,L,k,D;return I().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.formState,n=t.dispatch,o=t.reduxDispatch,i=t.showWorkingIndicator,a=void 0===i||i,c=Promise.resolve(),f=r.formId,u=r.action,l=r.fields,h=r.transform,O=void 0===h?function(e){return e}:h,j=r.postData,S=r.postOptions,P=void 0===S?{}:S,E=Object(v.a)({fields:l,transform:O}),n(Object(b.a)({formId:f,submitting:!0,messages:s.a.List()})),n(Object(m.a)({formId:f})),a&&o(Object(d.j)()),e.prev=7,e.next=10,Object(y.a)(Object.assign({},P,{url:u,data:E,postData:j}));case 10:return x=e.sent,e.next=13,x.SuccessMessageBean;case 13:if(!e.sent){e.next=17;break}e.t0=g(x.SuccessMessageBean.globalMessages),e.next=18;break;case 17:e.t0=[];case 18:L=e.t0,n(Object(b.a)({formId:f,submitting:!1,messages:L})),e.next=26;break;case 22:e.prev=22,e.t1=e.catch(7),(k=e.t1.FailureMessageBean)&&(D=g(k.globalMessages),n(Object(b.a)({formId:f,submitting:!1,messages:D})),w({fields:l,messages:k.fieldMessages}).filter((function(e){var t=e.fieldId;return r.fields.get(t)})).forEach((function(e){var t=e.fieldId,r=e.message;return n(Object(p.a)({formId:f,fieldId:t,message:r,showMessage:!0}))})),c=Promise.reject());case 26:return e.prev=26,a&&o(Object(d.i)()),e.finish(26);case 29:return e.abrupt("return",c);case 30:case"end":return e.stop()}}),e,null,[[7,22,26,29]])})),function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){P(i,n,o,a,c,"next",e)}function c(e){P(i,n,o,a,c,"throw",e)}a(void 0)}))});return function(e){return t.apply(this,arguments)}}(),x=E,L=r("74281628d2"),k=r("5ea1955bfe"),D=r("d79dab4d38");function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function F(){return F=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},F.apply(this,arguments)}function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){M(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function M(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==C(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==C(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===C(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var _=function(e){return e.preventDefault()},A=function(e){var t=e.submitForm,r=e.formState,n=e.details,o=e.focusFirstError,i=e.dispatch,a=e.reduxDispatch,c=e.formRef;return t({formState:r,details:n,dispatch:i,reduxDispatch:a}).catch((function(){o&&function(e){var t=e.current.querySelectorAll("[data-field-invalid=true]")[0];if(t){var r=t.querySelector("[data-focus-target=true]");Object(D.c)()?r&&setTimeout((function(){return r.focus()}),700):r&&setTimeout((function(){return r.focus()}),0)}}(c)}))},W=function(e){var t=e.formId,r=e.action,l=e.method,s=e.submitForm,d=e.submitWithAjax,b=e.deleteOnUnmount,m=e.className,y=e.children,v=e.ariaLabel,h=e.postData,g=e.transform,O=e.focusFirstError,j=e.formRef,w=Object(n.useRef)(),S=Object(n.useContext)(f.a),I=S.formsState,P=S.dispatch,E=Object(i.d)();Object(n.useEffect)((function(){w.current?w.current!==g&&c.a.warn("The WFForm transform prop should not change. Try wrapping the trasnsform function in useCallback "):w.current=g}),[g]),Object(n.useEffect)((function(){P(function(e){var t=e.formId,r=e.action,n=e.transform;return{type:L.h,payload:{formId:t,action:r,transform:n}}}({formId:t,action:r,transform:g,postData:h}))}),[t,r,b,g,P,h]),Object(n.useEffect)((function(){return function(){return b&&P(function(e){var t=e.formId;return{type:L.j,payload:{formId:t}}}({formId:t,deleteOnUnmount:b}))}}),[t,b,P]);var x=I.get(t),D={dispatch:P,formId:t,formState:x,fields:x?x.fields:void 0,updateFieldValue:function(e){return P(Object(k.a)(T({formId:t},e)))},updateField:function(e){return P(Object(p.a)(T({formId:t},e)))},submitForm:function(e){return function(){return A({submitForm:s,formState:x,details:e,focusFirstError:O,dispatch:P,reduxDispatch:E,formRef:j})}}};return o.a.createElement(u.a.Provider,{value:D},I&&I.get(t)&&o.a.createElement("form",{id:t,action:r,autoComplete:"off",method:l,noValidate:!0,onSubmit:d?_:void 0,"aria-label":v,ref:j,className:Object(a.a)({className:m})},y))};W.defaultProps={method:"post",submitWithAjax:!0,deleteOnUnmount:!0,focusFirstError:!0,submitForm:x};t.a=o.a.forwardRef((function(e,t){var r=Object(n.useRef)();return o.a.createElement(W,F({},e,{formRef:t||r}))}))}}]);
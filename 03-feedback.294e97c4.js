function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return l.Date.now()};function g(e,t,n){var i,o,r,a,u,f,c=0,l=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,r=o;return i=o=void 0,c=t,a=e.apply(r,n)}function j(e){return c=e,u=setTimeout(w,t),l?y(e):a}function h(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=r}function w(){var e=v();if(h(e))return O(e);u=setTimeout(w,function(e){var n=t-(e-f);return s?m(n,r-(e-c)):n}(e))}function O(e){return u=void 0,g&&i?y(e):(i=o=void 0,a)}function T(){var e=v(),n=h(e);if(i=arguments,o=this,f=e,n){if(void 0===u)return j(f);if(s)return u=setTimeout(w,t),y(f)}return void 0===u&&(u=setTimeout(w,t)),a}return t=b(t)||0,p(n)&&(l=!!n.leading,r=(s="maxWait"in n)?d(b(n.maxWait)||0,t):r,g="trailing"in n?!!n.trailing:g),T.cancel=function(){void 0!==u&&clearTimeout(u),c=0,i=f=o=u=void 0},T.flush=function(){return void 0===u?a:O(v())},T}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=r.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:i,maxWait:t,trailing:o})};const y=document.querySelector(".feedback-form"),j={email:"",message:""};y.addEventListener("input",(function(n){j[n.target.name]=n.target.value,e(t)(localStorage.setItem("feedback-form-state",JSON.stringify(j)),500)})),function(){const e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e);""!==t.email&""!==t.message?(y.email.value=t.email,y.message.value=t.message):(y.email.value="",y.message.value="")}(),y.addEventListener("submit",(function(){localStorage.clear()}));
//# sourceMappingURL=03-feedback.294e97c4.js.map

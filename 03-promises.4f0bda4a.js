function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){t[e]=o},o.parcelRequired7c6=r);var l=r("eWCmQ");console.log("faina_super_dog");const i={delay:document.querySelector('input[name="delay"]'),step:document.querySelector('input[name="step"]'),amount:document.querySelector('input[name="amount"]'),form:document.querySelector("form.form")};function u(e,o){return new Promise(((n,t)=>{const r=Math.random()>.3;setTimeout((()=>{r?n({position:e,delay:o}):t({position:e,delay:o})}),o)}))}i.form.addEventListener("submit",(function(o){o.preventDefault();i.delay.value;let n=i.step.value,t=i.amount.value;for(let o=0;o<=t;o++){let t=Number(n*o);u(o,t).then((({position:n,delay:t})=>{console.log(`✅ Fulfilled promise ${o} in ${t}ms`),e(l).Notify.success(`✅ Fulfilled promise ${o} in ${t}ms`)})).catch((({i:o,delay:n})=>{console.log(`❌ Rejected promise ${o} in ${n}ms`),e(l).Notify.failure(`❌ Rejected promise ${o} in ${n}ms`)}))}}));
//# sourceMappingURL=03-promises.4f0bda4a.js.map

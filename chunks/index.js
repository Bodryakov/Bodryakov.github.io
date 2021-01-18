"use strict";require("@sveltejs/kit/dist/renderer");var e=require("./app.js"),r=require("./Counter.js");const n=e.create_ssr_component(((n,t,s,i)=>`<main><h1>Колледж: Главная</h1>\n\n\t${e.validate_component(r.Counter,"Counter").$$render(n,{},{},{})}\n\n</main>`));exports.default=n;
//# sourceMappingURL=index.js.map

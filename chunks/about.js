"use strict";require("@sveltejs/kit/dist/renderer");var e=require("./app.js"),r=require("./Counter.js");const t=e.create_ssr_component(((t,a,n,o)=>`<main><h1>About Page</h1>\n  <p>This is the about page</p>\n  <p>More paragraphs of the about page</p></main>\n\n${e.validate_component(r.Counter,"Counter").$$render(t,{},{},{})}`));exports.default=t;
//# sourceMappingURL=about.js.map

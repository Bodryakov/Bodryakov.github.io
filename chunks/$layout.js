"use strict";require("@sveltejs/kit/dist/renderer");var e=require("./app.js");const r=e.create_ssr_component(((e,r,t,n)=>{let{refresh:s=""}=r;return void 0===r.refresh&&t.refresh&&void 0!==s&&t.refresh(s),`<div>${n.default?n.default({}):""}</div>`})),t={code:"a.svelte-kkjimz{text-decoration:none}.current.svelte-kkjimz{text-decoration:underline}",map:'{"version":3,"file":"Nav.svelte","sources":["Nav.svelte"],"sourcesContent":["<script>\\r\\n\\texport let segment;\\r\\n<\/script>\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<div>\\r\\n  <a href=\\"/\\" class=\'{segment === \\"/\\" ? \\"current\\" : \\"\\"}\'>Home</a>\\r\\n  <a href=\\"/about\\" class=\'{segment === \\"/about\\" ? \\"current\\" : \\"\\"}\'>About</a>\\r\\n</div>\\r\\n\\r\\n\\r\\n\\r\\n<style>\\r\\n  a {\\r\\n    text-decoration: none;\\r\\n  }\\r\\n  .current {\\r\\n    text-decoration: underline;\\r\\n  }\\r\\n</style>"],"names":[],"mappings":"AAeE,CAAC,cAAC,CAAC,AACD,eAAe,CAAE,IAAI,AACvB,CAAC,AACD,QAAQ,cAAC,CAAC,AACR,eAAe,CAAE,SAAS,AAC5B,CAAC"}'},n=e.create_ssr_component(((r,n,s,a)=>{let{segment:i}=n;return void 0===n.segment&&s.segment&&void 0!==i&&s.segment(i),r.css.add(t),`<div><a href="/" class="${e.escape(e.null_to_empty("/"===i?"current":""))+" svelte-kkjimz"}">Home</a>\n  <a href="/about" class="${e.escape(e.null_to_empty("/about"===i?"current":""))+" svelte-kkjimz"}">About</a>\n</div>`})),s={subscribe:r=>(()=>{const r=e.getContext("__svelte__");return{page:{subscribe:r.page.subscribe},navigating:{subscribe:r.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:r.navigating.subscribe}},session:r.session}})().page.subscribe(r)},a=e.create_ssr_component(((t,a,i,o)=>{let c,u;return u=e.subscribe(s,(e=>c=e)),s.subscribe((e=>c=e)),u(),`${e.validate_component(n,"Nav").$$render(t,{segment:c.path},{},{})}\n\n${e.validate_component(r,"PageTransitions").$$render(t,{refresh:c.path},{},{default:()=>`${o.default?o.default({}):""}`})}`}));exports.default=a;
//# sourceMappingURL=$layout.js.map

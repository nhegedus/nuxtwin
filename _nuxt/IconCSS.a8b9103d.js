import{a as m,b as d,e as o,o as f,f as x,h as S,u as c,i as z}from"./entry.df4205fc.js";import{u as I}from"./config.9895c546.js";const y=m({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(_){var r;const s=_;d(n=>({"71ded496":c(p)}));const e=I();(r=e==null?void 0:e.nuxtIcon)!=null&&r.aliases;const l=o(()=>{var n;return(((n=e==null?void 0:e.nuxtIcon)==null?void 0:n.aliases)||{})[s.name]||s.name}),p=o(()=>`url('https://api.iconify.design/${l.value.replace(":","/")}.svg')`),a=o(()=>{var t,i,u;if(!s.size&&typeof((t=e.nuxtIcon)==null?void 0:t.size)=="boolean"&&!((i=e.nuxtIcon)!=null&&i.size))return;const n=s.size||((u=e.nuxtIcon)==null?void 0:u.size)||"1em";return String(Number(n))===n?`${n}px`:n});return(n,t)=>(f(),x("span",{style:S({width:c(a),height:c(a)})},null,4))}});const b=z(y,[["__scopeId","data-v-11604bcf"]]);export{b as default};

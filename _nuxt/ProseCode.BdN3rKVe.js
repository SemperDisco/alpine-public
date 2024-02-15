import{r as g,ak as z,al as D,am as F,M as k,I as B,a7 as G,aj as X,o as H,d as T,y as J,b as h,c as A,e as M,g as $,w as K,X as x,T as Q,n as O,a6 as U,p as Y,i as Z,l as L,t as ee,f as te,a5 as ne}from"./entry.BbDYukYW.js";function W(e){return D()?(F(e),!0):!1}function b(e){return typeof e=="function"?e():k(e)}const C=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const oe=Object.prototype.toString,se=e=>oe.call(e)==="[object Object]",S=()=>{},ae=ie();function ie(){var e,t;return C&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((t=window==null?void 0:window.navigator)==null?void 0:t.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function re(e){let t;function s(){return t||(t=e()),t}return s.reset=async()=>{const n=t;t=void 0,n&&await n},s}function ce(e,t,s={}){const{immediate:n=!0}=s,i=g(!1);let o=null;function l(){o&&(clearTimeout(o),o=null)}function c(){i.value=!1,l()}function d(...p){l(),i.value=!0,o=setTimeout(()=>{i.value=!1,o=null,e(...p)},b(t))}return n&&(i.value=!0,C&&d()),W(c),{isPending:z(i),start:d,stop:c}}function w(e){var t;const s=b(e);return(t=s==null?void 0:s.$el)!=null?t:s}const j=C?window:void 0,N=C?window.navigator:void 0;function _(...e){let t,s,n,i;if(typeof e[0]=="string"||Array.isArray(e[0])?([s,n,i]=e,t=j):[t,s,n,i]=e,!t)return S;Array.isArray(s)||(s=[s]),Array.isArray(n)||(n=[n]);const o=[],l=()=>{o.forEach(u=>u()),o.length=0},c=(u,f,a,r)=>(u.addEventListener(f,a,r),()=>u.removeEventListener(f,a,r)),d=G(()=>[w(t),b(i)],([u,f])=>{if(l(),!u)return;const a=se(f)?{...f}:f;o.push(...s.flatMap(r=>n.map(m=>c(u,r,m,a))))},{immediate:!0,flush:"post"}),p=()=>{d(),l()};return W(p),p}let I=!1;function ue(e,t,s={}){const{window:n=j,ignore:i=[],capture:o=!0,detectIframe:l=!1}=s;if(!n)return S;ae&&!I&&(I=!0,Array.from(n.document.body.children).forEach(a=>a.addEventListener("click",S)),n.document.documentElement.addEventListener("click",S));let c=!0;const d=a=>i.some(r=>{if(typeof r=="string")return Array.from(n.document.querySelectorAll(r)).some(m=>m===a.target||a.composedPath().includes(m));{const m=w(r);return m&&(a.target===m||a.composedPath().includes(m))}}),u=[_(n,"click",a=>{const r=w(e);if(!(!r||r===a.target||a.composedPath().includes(r))){if(a.detail===0&&(c=!d(a)),!c){c=!0;return}t(a)}},{passive:!0,capture:o}),_(n,"pointerdown",a=>{const r=w(e);c=!d(a)&&!!(r&&!a.composedPath().includes(r))},{passive:!0}),l&&_(n,"blur",a=>{setTimeout(()=>{var r;const m=w(e);((r=n.document.activeElement)==null?void 0:r.tagName)==="IFRAME"&&!(m!=null&&m.contains(n.document.activeElement))&&t(a)},0)})].filter(Boolean);return()=>u.forEach(a=>a())}function le(){const e=g(!1);return X()&&H(()=>{e.value=!0}),e}function R(e){const t=le();return B(()=>(t.value,!!e()))}function P(e,t={}){const{controls:s=!1,navigator:n=N}=t,i=R(()=>n&&"permissions"in n);let o;const l=typeof e=="string"?{name:e}:e,c=g(),d=()=>{o&&(c.value=o.state)},p=re(async()=>{if(i.value){if(!o)try{o=await n.permissions.query(l),_(o,"change",d),d()}catch{c.value="prompt"}return o}});return p(),s?{state:c,isSupported:i,query:p}:c}function de(e={}){const{navigator:t=N,read:s=!1,source:n,copiedDuring:i=1500,legacy:o=!1}=e,l=R(()=>t&&"clipboard"in t),c=P("clipboard-read"),d=P("clipboard-write"),p=B(()=>l.value||o),u=g(""),f=g(!1),a=ce(()=>f.value=!1,i);function r(){l.value&&c.value!=="denied"?t.clipboard.readText().then(v=>{u.value=v}):u.value=q()}p.value&&s&&_(["copy","cut"],r);async function m(v=b(n)){p.value&&v!=null&&(l.value&&d.value!=="denied"?await t.clipboard.writeText(v):V(v),u.value=v,f.value=!0,a.start())}function V(v){const y=document.createElement("textarea");y.value=v??"",y.style.position="absolute",y.style.opacity="0",document.body.appendChild(y),y.select(),document.execCommand("copy"),y.remove()}function q(){var v,y,E;return(E=(y=(v=document==null?void 0:document.getSelection)==null?void 0:v.call(document))==null?void 0:y.toString())!=null?E:""}return{isSupported:p,text:u,copied:f,copy:m}}const pe=e=>(Y("data-v-620d258e"),e=e(),Z(),e),fe=pe(()=>M("span",{class:"sr-only"},"Copy to clipboard",-1)),me={class:"icon-wrapper"},ve=T({__name:"ProseCodeCopyButton",props:{content:{type:String,default:""},show:{type:Boolean,default:!1}},setup(e){const t=e,s=g(),{copy:n}=de();ue(s,()=>{o.value==="copied"&&(o.value="init")});const{prose:i}=J(),o=g("init"),l=c=>{n(t.content).then(()=>{o.value="copied"}).catch(d=>{console.warn("Couldn't copy to clipboard!",d)})};return(c,d)=>{const p=U;return h(),A("button",{ref_key:"copyButtonRef",ref:s,class:O([(e.show||o.value==="copied")&&"show"]),onClick:l},[fe,M("span",me,[$(Q,{name:"fade"},{default:K(()=>{var u,f;return[o.value==="copied"?(h(),x(p,{key:0,name:(u=k(i).copyButton)==null?void 0:u.iconCopied,size:"18",class:"copied"},null,8,["name"])):(h(),x(p,{key:1,name:(f=k(i).copyButton)==null?void 0:f.iconCopy,size:"18"},null,8,["name"]))]}),_:1})])],2)}}}),ye=L(ve,[["__scopeId","data-v-620d258e"]]),ge={key:0,class:"filename"},we=T({__name:"ProseCode",props:{code:{type:String,default:""},language:{type:String,default:null},filename:{type:String,default:null},highlights:{type:Array,default:()=>[]}},setup(e){const t=g(!1);return(s,n)=>{const i=ye;return h(),A("div",{class:O([[`highlight-${e.language}`],"prose-code"]),onMouseenter:n[0]||(n[0]=o=>t.value=!0),onMouseleave:n[1]||(n[1]=o=>t.value=!1)},[e.filename?(h(),A("span",ge,ee(e.filename),1)):te("",!0),ne(s.$slots,"default",{},void 0,!0),$(i,{show:t.value,content:e.code,class:"copy-button"},null,8,["show","content"])],34)}}}),_e=L(we,[["__scopeId","data-v-5b33d759"]]);export{_e as default};

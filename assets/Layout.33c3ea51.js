import{_ as C,r as R,o as n,c,b as $,f as S,i as P,j as h,k as de,h as e,F as I,l as A,m as w,a as g,t as T,n as z,p as Y,q as x,w as N,s as ce,v as y,d as j,x as X,y as xe,z as J,A as Q,B as K,C as pe,D as he,E,u as _e,g as D,T as fe,G as F,H as me,I as q,J as G,K as Te,L as Be,M as Z,N as be,O as ge,e as Ne,P as ke,Q as De,R as U,S as ee,U as Ie,V as Me,W as He,X as Pe}from"./app.28d46d7d.js";const Ee=i=>/^mailto:/.test(i),Re=i=>/^tel:/.test(i),Ae={},Oe={class:"theme-default-content custom"};function Fe(i,r){const t=R("Content");return n(),c("div",Oe,[$(t)])}var ze=C(Ae,[["render",Fe],["__file","HomeContent.vue"]]);const We={key:0,class:"features"},Ve=S({setup(i){const r=P(),t=h(()=>de(r.value.features)?r.value.features:[]);return(u,o)=>e(t).length?(n(),c("div",We,[(n(!0),c(I,null,A(e(t),d=>(n(),c("div",{key:d.title,class:"feature"},[g("h2",null,T(d.title),1),g("p",null,T(d.details),1)]))),128))])):w("",!0)}});var Ue=C(Ve,[["__file","HomeFeatures.vue"]]);const je=["innerHTML"],Ke=["textContent"],qe=S({setup(i){const r=P(),t=h(()=>r.value.footer),u=h(()=>r.value.footerHtml);return(o,d)=>e(t)?(n(),c(I,{key:0},[e(u)?(n(),c("div",{key:0,class:"footer",innerHTML:e(t)},null,8,je)):(n(),c("div",{key:1,class:"footer",textContent:T(e(t))},null,8,Ke))],64)):w("",!0)}});var Ge=C(qe,[["__file","HomeFooter.vue"]]);const Xe=["href","rel","target","aria-label"],Ye=S({inheritAttrs:!1}),Je=S({...Ye,props:{item:{type:Object,required:!0}},setup(i){const r=i,t=z(),u=xe(),{item:o}=Y(r),d=h(()=>X(o.value.link)),f=h(()=>Ee(o.value.link)||Re(o.value.link)),_=h(()=>{if(!f.value){if(o.value.target)return o.value.target;if(d.value)return"_blank"}}),a=h(()=>_.value==="_blank"),s=h(()=>!d.value&&!f.value&&!a.value),l=h(()=>{if(!f.value){if(o.value.rel)return o.value.rel;if(a.value)return"noopener noreferrer"}}),v=h(()=>o.value.ariaLabel||o.value.text),p=h(()=>{const L=Object.keys(u.value.locales);return L.length?!L.some(m=>m===o.value.link):o.value.link!=="/"}),b=h(()=>p.value?t.path.startsWith(o.value.link):!1),k=h(()=>s.value?o.value.activeMatch?new RegExp(o.value.activeMatch).test(t.path):b.value:!1);return(L,m)=>{const B=R("RouterLink"),M=R("AutoLinkExternalIcon");return e(s)?(n(),x(B,ce({key:0,class:{"router-link-active":e(k)},to:e(o).link,"aria-label":e(v)},L.$attrs),{default:N(()=>[y(L.$slots,"before"),j(" "+T(e(o).text)+" ",1),y(L.$slots,"after")]),_:3},16,["class","to","aria-label"])):(n(),c("a",ce({key:1,class:"external-link",href:e(o).link,rel:e(l),target:e(_),"aria-label":e(v)},L.$attrs),[y(L.$slots,"before"),j(" "+T(e(o).text)+" ",1),e(a)?(n(),x(M,{key:0})):w("",!0),y(L.$slots,"after")],16,Xe))}}});var H=C(Je,[["__file","AutoLink.vue"]]);const Qe={class:"hero"},Ze={key:0,id:"main-title"},et={key:1,class:"description"},tt={key:2,class:"actions"},at=S({setup(i){const r=P(),t=J(),u=Q(),o=h(()=>u.value&&r.value.heroImageDark!==void 0?r.value.heroImageDark:r.value.heroImage),d=h(()=>r.value.heroText===null?null:r.value.heroText||t.value.title||"Hello"),f=h(()=>r.value.heroAlt||d.value||"hero"),_=h(()=>r.value.tagline===null?null:r.value.tagline||t.value.description||"Welcome to your VuePress site"),a=h(()=>de(r.value.actions)?r.value.actions.map(({text:l,link:v,type:p="primary"})=>({text:l,link:v,type:p})):[]),s=()=>{if(!o.value)return null;const l=K("img",{src:pe(o.value),alt:f.value});return r.value.heroImageDark===void 0?l:K(he,()=>l)};return(l,v)=>(n(),c("header",Qe,[$(s),e(d)?(n(),c("h1",Ze,T(e(d)),1)):w("",!0),e(_)?(n(),c("p",et,T(e(_)),1)):w("",!0),e(a).length?(n(),c("p",tt,[(n(!0),c(I,null,A(e(a),p=>(n(),x(H,{key:p.text,class:E(["action-button",[p.type]]),item:p},null,8,["class","item"]))),128))])):w("",!0)]))}});var nt=C(at,[["__file","HomeHero.vue"]]);const rt={class:"home"},ot=S({setup(i){return(r,t)=>(n(),c("main",rt,[$(nt),$(Ue),$(ze),$(Ge)]))}});var st=C(ot,[["__file","Home.vue"]]);const lt=S({setup(i){const r=_e(),t=J(),u=D(),o=Q(),d=h(()=>u.value.home||r.value),f=h(()=>t.value.title),_=h(()=>o.value&&u.value.logoDark!==void 0?u.value.logoDark:u.value.logo),a=()=>{if(!_.value)return null;const s=K("img",{class:"logo",src:pe(_.value),alt:f.value});return u.value.logoDark===void 0?s:K(he,()=>s)};return(s,l)=>{const v=R("RouterLink");return n(),x(v,{to:e(d)},{default:N(()=>[$(a),e(f)?(n(),c("span",{key:0,class:E(["site-name",{"can-hide":e(_)}])},T(e(f)),3)):w("",!0)]),_:1},8,["to"])}}});var ut=C(lt,[["__file","NavbarBrand.vue"]]);const it=S({setup(i){const r=u=>{u.style.height=u.scrollHeight+"px"},t=u=>{u.style.height=""};return(u,o)=>(n(),x(fe,{name:"dropdown",onEnter:r,onAfterEnter:t,onBeforeLeave:r},{default:N(()=>[y(u.$slots,"default")]),_:3}))}});var $e=C(it,[["__file","DropdownTransition.vue"]]);const ct=["aria-label"],vt={class:"title"},dt=g("span",{class:"arrow down"},null,-1),pt=["aria-label"],ht={class:"title"},_t={class:"navbar-dropdown"},ft={class:"navbar-dropdown-subtitle"},mt={key:1},bt={class:"navbar-dropdown-subitem-wrapper"},gt=S({props:{item:{type:Object,required:!0}},setup(i){const r=i,{item:t}=Y(r),u=h(()=>t.value.ariaLabel||t.value.text),o=F(!1),d=z();me(()=>d.path,()=>{o.value=!1});const f=a=>{a.detail===0?o.value=!o.value:o.value=!1},_=(a,s)=>s[s.length-1]===a;return(a,s)=>(n(),c("div",{class:E(["navbar-dropdown-wrapper",{open:o.value}])},[g("button",{class:"navbar-dropdown-title",type:"button","aria-label":e(u),onClick:f},[g("span",vt,T(e(t).text),1),dt],8,ct),g("button",{class:"navbar-dropdown-title-mobile",type:"button","aria-label":e(u),onClick:s[0]||(s[0]=l=>o.value=!o.value)},[g("span",ht,T(e(t).text),1),g("span",{class:E(["arrow",o.value?"down":"right"])},null,2)],8,pt),$($e,null,{default:N(()=>[q(g("ul",_t,[(n(!0),c(I,null,A(e(t).children,l=>(n(),c("li",{key:l.text,class:"navbar-dropdown-item"},[l.children?(n(),c(I,{key:0},[g("h4",ft,[l.link?(n(),x(H,{key:0,item:l,onFocusout:v=>_(l,e(t).children)&&l.children.length===0&&(o.value=!1)},null,8,["item","onFocusout"])):(n(),c("span",mt,T(l.text),1))]),g("ul",bt,[(n(!0),c(I,null,A(l.children,v=>(n(),c("li",{key:v.link,class:"navbar-dropdown-subitem"},[$(H,{item:v,onFocusout:p=>_(v,l.children)&&_(l,e(t).children)&&(o.value=!1)},null,8,["item","onFocusout"])]))),128))])],64)):(n(),x(H,{key:1,item:l,onFocusout:v=>_(l,e(t).children)&&(o.value=!1)},null,8,["item","onFocusout"]))]))),128))],512),[[G,o.value]])]),_:1})],2))}});var kt=C(gt,[["__file","NavbarDropdown.vue"]]);const ve=i=>decodeURI(i).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),$t=(i,r)=>{if(r.hash===i)return!0;const t=ve(r.path),u=ve(i);return t===u},Le=(i,r)=>i.link&&$t(i.link,r)?!0:i.children?i.children.some(t=>Le(t,r)):!1,ye=i=>!X(i)||/github\.com/.test(i)?"GitHub":/bitbucket\.org/.test(i)?"Bitbucket":/gitlab\.com/.test(i)?"GitLab":/gitee\.com/.test(i)?"Gitee":null,Lt={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},yt=({docsRepo:i,editLinkPattern:r})=>{if(r)return r;const t=ye(i);return t!==null?Lt[t]:null},wt=({docsRepo:i,docsBranch:r,docsDir:t,filePathRelative:u,editLinkPattern:o})=>{if(!u)return null;const d=yt({docsRepo:i,editLinkPattern:o});return d?d.replace(/:repo/,X(i)?i:`https://github.com/${i}`).replace(/:branch/,r).replace(/:path/,Te(`${Be(t)}/${u}`)):null},Ct={key:0,class:"navbar-items"},St=S({setup(i){const r=()=>{const s=Z(),l=_e(),v=J(),p=D();return h(()=>{var B,M;const b=Object.keys(v.value.locales);if(b.length<2)return[];const k=s.currentRoute.value.path,L=s.currentRoute.value.fullPath;return[{text:(B=p.value.selectLanguageText)!=null?B:"unknown language",ariaLabel:(M=p.value.selectLanguageAriaLabel)!=null?M:"unkown language",children:b.map(O=>{var ne,re,oe,se,le,ue;const W=(re=(ne=v.value.locales)==null?void 0:ne[O])!=null?re:{},te=(se=(oe=p.value.locales)==null?void 0:oe[O])!=null?se:{},ae=`${W.lang}`,Ce=(le=te.selectLanguageName)!=null?le:ae;let V;if(ae===v.value.lang)V=L;else{const ie=k.replace(l.value,O);s.getRoutes().some(Se=>Se.path===ie)?V=ie:V=(ue=te.home)!=null?ue:O}return{text:Ce,link:V}})}]})},t=()=>{const s=D(),l=h(()=>s.value.repo),v=h(()=>l.value?ye(l.value):null),p=h(()=>l.value&&!X(l.value)?`https://github.com/${l.value}`:l.value),b=h(()=>p.value?s.value.repoLabel?s.value.repoLabel:v.value===null?"Source":v.value:null);return h(()=>!p.value||!b.value?[]:[{text:b.value,link:p.value}])},u=s=>be(s)?ge(s):s.children?{...s,children:s.children.map(u)}:s,d=(()=>{const s=D();return h(()=>(s.value.navbar||[]).map(u))})(),f=r(),_=t(),a=h(()=>[...d.value,...f.value,..._.value]);return(s,l)=>e(a).length?(n(),c("nav",Ct,[(n(!0),c(I,null,A(e(a),v=>(n(),c("div",{key:v.text,class:"navbar-item"},[v.children?(n(),x(kt,{key:0,item:v},null,8,["item"])):(n(),x(H,{key:1,item:v},null,8,["item"]))]))),128))])):w("",!0)}});var we=C(St,[["__file","NavbarItems.vue"]]);const xt=["title"],Tt={class:"icon",focusable:"false",viewBox:"0 0 32 32"},Bt=Ne('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9),Nt=[Bt],Dt={class:"icon",focusable:"false",viewBox:"0 0 32 32"},It=g("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1),Mt=[It],Ht=S({setup(i){const r=D(),t=Q(),u=()=>{t.value=!t.value};return(o,d)=>(n(),c("button",{class:"toggle-dark-button",title:e(r).toggleDarkMode,onClick:u},[q((n(),c("svg",Tt,Nt,512)),[[G,!e(t)]]),q((n(),c("svg",Dt,Mt,512)),[[G,e(t)]])],8,xt))}});var Pt=C(Ht,[["__file","ToggleDarkModeButton.vue"]]);const Et=["title"],Rt=g("div",{class:"icon","aria-hidden":"true"},[g("span"),g("span"),g("span")],-1),At=[Rt],Ot=S({emits:["toggle"],setup(i){const r=D();return(t,u)=>(n(),c("div",{class:"toggle-sidebar-button",title:e(r).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:u[0]||(u[0]=o=>t.$emit("toggle"))},At,8,Et))}});var Ft=C(Ot,[["__file","ToggleSidebarButton.vue"]]);const zt=S({emits:["toggle-sidebar"],setup(i){const r=D(),t=F(null),u=F(null),o=F(0),d=h(()=>o.value?{maxWidth:o.value+"px"}:{}),f=h(()=>r.value.darkMode);ke(()=>{const s=_(t.value,"paddingLeft")+_(t.value,"paddingRight"),l=()=>{var v;window.innerWidth<=719?o.value=0:o.value=t.value.offsetWidth-s-(((v=u.value)==null?void 0:v.offsetWidth)||0)};l(),window.addEventListener("resize",l,!1),window.addEventListener("orientationchange",l,!1)});function _(a,s){var p,b,k;const l=(k=(b=(p=a==null?void 0:a.ownerDocument)==null?void 0:p.defaultView)==null?void 0:b.getComputedStyle(a,null))==null?void 0:k[s],v=Number.parseInt(l,10);return Number.isNaN(v)?0:v}return(a,s)=>{const l=R("NavbarSearch");return n(),c("header",{ref_key:"navbar",ref:t,class:"navbar"},[$(Ft,{onToggle:s[0]||(s[0]=v=>a.$emit("toggle-sidebar"))}),g("span",{ref_key:"navbarBrand",ref:u},[$(ut)],512),g("div",{class:"navbar-items-wrapper",style:De(e(d))},[y(a.$slots,"before"),$(we,{class:"can-hide"}),y(a.$slots,"after"),e(f)?(n(),x(Pt,{key:0})):w("",!0),$(l)],4)],512)}}});var Wt=C(zt,[["__file","Navbar.vue"]]);const Vt={class:"page-meta"},Ut={key:0,class:"meta-item edit-link"},jt={key:1,class:"meta-item last-updated"},Kt={class:"meta-item-label"},qt={class:"meta-item-info"},Gt={key:2,class:"meta-item contributors"},Xt={class:"meta-item-label"},Yt={class:"meta-item-info"},Jt=["title"],Qt=j(", "),Zt=S({setup(i){const r=()=>{const a=D(),s=U(),l=P();return h(()=>{var M,O,W;if(!((O=(M=l.value.editLink)!=null?M:a.value.editLink)!=null?O:!0))return null;const{repo:p,docsRepo:b=p,docsBranch:k="main",docsDir:L="",editLinkText:m}=a.value;if(!b)return null;const B=wt({docsRepo:b,docsBranch:k,docsDir:L,filePathRelative:s.value.filePathRelative,editLinkPattern:(W=l.value.editLinkPattern)!=null?W:a.value.editLinkPattern});return B?{text:m!=null?m:"Edit this page",link:B}:null})},t=()=>{const a=D(),s=U(),l=P();return h(()=>{var b,k,L,m;return!((k=(b=l.value.lastUpdated)!=null?b:a.value.lastUpdated)!=null?k:!0)||!((L=s.value.git)!=null&&L.updatedTime)?null:new Date((m=s.value.git)==null?void 0:m.updatedTime).toLocaleString()})},u=()=>{const a=D(),s=U(),l=P();return h(()=>{var p,b,k,L;return((b=(p=l.value.contributors)!=null?p:a.value.contributors)!=null?b:!0)&&(L=(k=s.value.git)==null?void 0:k.contributors)!=null?L:null})},o=D(),d=r(),f=t(),_=u();return(a,s)=>{const l=R("ClientOnly");return n(),c("footer",Vt,[e(d)?(n(),c("div",Ut,[$(H,{class:"meta-item-label",item:e(d)},null,8,["item"])])):w("",!0),e(f)?(n(),c("div",jt,[g("span",Kt,T(e(o).lastUpdatedText)+": ",1),$(l,null,{default:N(()=>[g("span",qt,T(e(f)),1)]),_:1})])):w("",!0),e(_)&&e(_).length?(n(),c("div",Gt,[g("span",Xt,T(e(o).contributorsText)+": ",1),g("span",Yt,[(n(!0),c(I,null,A(e(_),(v,p)=>(n(),c(I,{key:p},[g("span",{class:"contributor",title:`email: ${v.email}`},T(v.name),9,Jt),p!==e(_).length-1?(n(),c(I,{key:0},[Qt],64)):w("",!0)],64))),128))])])):w("",!0)])}}});var ea=C(Zt,[["__file","PageMeta.vue"]]);const ta={key:0,class:"page-nav"},aa={class:"inner"},na={key:0,class:"prev"},ra={key:1,class:"next"},oa=S({setup(i){const r=a=>a===!1?null:be(a)?ge(a):Ie(a)?a:!1,t=(a,s,l)=>{const v=a.findIndex(p=>p.link===s);if(v!==-1){const p=a[v+l];return p!=null&&p.link?p:null}for(const p of a)if(p.children){const b=t(p.children,s,l);if(b)return b}return null},u=P(),o=ee(),d=z(),f=h(()=>{const a=r(u.value.prev);return a!==!1?a:t(o.value,d.path,-1)}),_=h(()=>{const a=r(u.value.next);return a!==!1?a:t(o.value,d.path,1)});return(a,s)=>e(f)||e(_)?(n(),c("nav",ta,[g("p",aa,[e(f)?(n(),c("span",na,[$(H,{item:e(f)},null,8,["item"])])):w("",!0),e(_)?(n(),c("span",ra,[$(H,{item:e(_)},null,8,["item"])])):w("",!0)])])):w("",!0)}});var sa=C(oa,[["__file","PageNav.vue"]]);const la={class:"page"},ua={class:"theme-default-content"},ia=S({setup(i){return(r,t)=>{const u=R("Content");return n(),c("main",la,[y(r.$slots,"top"),g("div",ua,[$(u)]),$(ea),$(sa),y(r.$slots,"bottom")])}}});var ca=C(ia,[["__file","Page.vue"]]);const va={class:"sidebar-item-children"},da=S({props:{item:{type:Object,required:!0},depth:{type:Number,required:!1,default:0}},setup(i){const r=i,{item:t,depth:u}=Y(r),o=z(),d=Z(),f=h(()=>Le(t.value,o)),_=h(()=>({"sidebar-item":!0,"sidebar-heading":u.value===0,active:f.value,collapsible:t.value.collapsible})),a=F(!0),s=F(void 0);return t.value.collapsible&&(a.value=f.value,s.value=()=>{a.value=!a.value},d.afterEach(()=>{a.value=f.value})),(l,v)=>{var b;const p=R("SidebarItem",!0);return n(),c("li",null,[e(t).link?(n(),x(H,{key:0,class:E(e(_)),item:e(t)},null,8,["class","item"])):(n(),c("p",{key:1,tabindex:"0",class:E(e(_)),onClick:v[0]||(v[0]=(...k)=>s.value&&s.value(...k)),onKeydown:v[1]||(v[1]=Me((...k)=>s.value&&s.value(...k),["enter"]))},[j(T(e(t).text)+" ",1),e(t).collapsible?(n(),c("span",{key:0,class:E(["arrow",a.value?"down":"right"])},null,2)):w("",!0)],34)),(b=e(t).children)!=null&&b.length?(n(),x($e,{key:2},{default:N(()=>[q(g("ul",va,[(n(!0),c(I,null,A(e(t).children,k=>(n(),x(p,{key:`${e(u)}${k.text}${k.link}`,item:k,depth:e(u)+1},null,8,["item","depth"]))),128))],512),[[G,a.value]])]),_:1})):w("",!0)])}}});var pa=C(da,[["__file","SidebarItem.vue"]]);const ha={key:0,class:"sidebar-items"},_a=S({setup(i){const r=z(),t=ee();return me(()=>r.hash,u=>{const o=document.querySelector(".sidebar");if(!o)return;const d=document.querySelector(`.sidebar a.sidebar-item[href="${r.path}${u}"]`);if(!d)return;const f=o.getBoundingClientRect().top,_=o.getBoundingClientRect().height,a=d.getBoundingClientRect().top,s=d.getBoundingClientRect().height;a<f?d.scrollIntoView(!0):a+s>f+_&&d.scrollIntoView(!1)}),(u,o)=>e(t).length?(n(),c("ul",ha,[(n(!0),c(I,null,A(e(t),d=>(n(),x(pa,{key:d.link||d.text,item:d},null,8,["item"]))),128))])):w("",!0)}});var fa=C(_a,[["__file","SidebarItems.vue"]]);const ma={class:"sidebar"},ba=S({setup(i){return(r,t)=>(n(),c("aside",ma,[$(we),y(r.$slots,"top"),$(fa),y(r.$slots,"bottom")]))}});var ga=C(ba,[["__file","Sidebar.vue"]]);const ka=S({setup(i){const r=U(),t=P(),u=D(),o=h(()=>t.value.navbar!==!1&&u.value.navbar!==!1),d=ee(),f=F(!1),_=m=>{f.value=typeof m=="boolean"?m:!f.value},a={x:0,y:0},s=m=>{a.x=m.changedTouches[0].clientX,a.y=m.changedTouches[0].clientY},l=m=>{const B=m.changedTouches[0].clientX-a.x,M=m.changedTouches[0].clientY-a.y;Math.abs(B)>Math.abs(M)&&Math.abs(B)>40&&(B>0&&a.x<=80?_(!0):_(!1))},v=h(()=>[{"no-navbar":!o.value,"no-sidebar":!d.value.length,"sidebar-open":f.value},t.value.pageClass]);let p;ke(()=>{p=Z().afterEach(()=>{_(!1)})}),He(()=>{p()});const b=Pe(),k=b.resolve,L=b.pending;return(m,B)=>(n(),c("div",{class:E(["theme-container",e(v)]),onTouchstart:s,onTouchend:l},[y(m.$slots,"navbar",{},()=>[e(o)?(n(),x(Wt,{key:0,onToggleSidebar:_},{before:N(()=>[y(m.$slots,"navbar-before")]),after:N(()=>[y(m.$slots,"navbar-after")]),_:3})):w("",!0)]),g("div",{class:"sidebar-mask",onClick:B[0]||(B[0]=M=>_(!1))}),y(m.$slots,"sidebar",{},()=>[$(ga,null,{top:N(()=>[y(m.$slots,"sidebar-top")]),bottom:N(()=>[y(m.$slots,"sidebar-bottom")]),_:3})]),y(m.$slots,"page",{},()=>[e(t).home?(n(),x(st,{key:0})):(n(),x(fe,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:e(k),onBeforeLeave:e(L)},{default:N(()=>[(n(),x(ca,{key:e(r).path},{top:N(()=>[y(m.$slots,"page-top")]),bottom:N(()=>[y(m.$slots,"page-bottom")]),_:3}))]),_:3},8,["onBeforeEnter","onBeforeLeave"]))])],34))}});var La=C(ka,[["__file","Layout.vue"]]);export{La as default};

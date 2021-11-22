"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1163],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||r;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){var o=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return o.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return s}});var o=n(7294),a=n(9443);var r=function(){var e=(0,o.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(6010),l="tabItem_1uMI",c="tabItemActive_2DSg";var s=function(e){var t,n=e.lazy,a=e.block,s=e.defaultValue,u=e.values,p=e.groupId,m=e.className,d=o.Children.toArray(e.children),f=null!=u?u:d.map((function(e){return{value:e.props.value,label:e.props.label}})),v=null!=s?s:null==(t=d.find((function(e){return e.props.default})))?void 0:t.props.value,g=r(),h=g.tabGroupChoices,b=g.setTabGroupChoices,y=(0,o.useState)(v),k=y[0],x=y[1],w=[];if(null!=p){var N=h[p];null!=N&&N!==k&&f.some((function(e){return e.value===N}))&&x(N)}var j=function(e){var t=e.currentTarget,n=w.indexOf(t),o=f[n].value;x(o),null!=p&&(b(p,o),setTimeout((function(){var e,n,o,a,r,i,l,s;(e=t.getBoundingClientRect(),n=e.top,o=e.left,a=e.bottom,r=e.right,i=window,l=i.innerHeight,s=i.innerWidth,n>=0&&r<=s&&a<=l&&o>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},R=function(e){var t,n=null;switch(e.key){case"ArrowRight":var o=w.indexOf(e.target)+1;n=w[o]||w[0];break;case"ArrowLeft":var a=w.indexOf(e.target)-1;n=w[a]||w[w.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},m)},f.map((function(e){var t=e.value,n=e.label;return o.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":k===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:R,onFocus:j,onClick:j},null!=n?n:t)}))),n?(0,o.cloneElement)(d.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},9443:function(e,t,n){var o=(0,n(7294).createContext)(void 0);t.Z=o},454:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return m},default:function(){return f}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=n(5064),l=n(8215),c=["components"],s={id:"recoil",title:"Recoil.js",sidebar_label:"Recoil.js",description:"How to Use Recoil.js in Next.js?"},u=void 0,p={unversionedId:"nextjs/state-management/recoil",id:"nextjs/state-management/recoil",isDocsHomePage:!1,title:"Recoil.js",description:"How to Use Recoil.js in Next.js?",source:"@site/docs/nextjs/state-management/recoil.md",sourceDirName:"nextjs/state-management",slug:"/nextjs/state-management/recoil",permalink:"/superplate/docs/nextjs/state-management/recoil",editUrl:"https://github.com/pankod/superplate/tree/master/documentation/docs/nextjs/state-management/recoil.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1620740656,formattedLastUpdatedAt:"5/11/2021",frontMatter:{id:"recoil",title:"Recoil.js",sidebar_label:"Recoil.js",description:"How to Use Recoil.js in Next.js?"},sidebar:"someSidebar",previous:{title:"Redux Toolkit",permalink:"/superplate/docs/nextjs/state-management/redux-toolkit"},next:{title:"Mobx",permalink:"/superplate/docs/nextjs/state-management/mobx"}},m=[{value:"Adding Recoil to your project later",id:"adding-recoil-to-your-project-later",children:[]}],d={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,c);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Recoil.js is a state management library, open-sourced by Facebook. It's offering a simple and powerful way of dealing with global, asynchronous and derived state."),(0,r.kt)("p",null,"We'll show basic usage of Recoil API with simple counter example.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://recoiljs.org/docs/introduction/motivation"},"Refer to official documentation for detailed usage. ","\u2192")),(0,r.kt)("p",null,"We need to wrap our code with RecoilRoot in root component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="pages/__app.tsx"',title:'"pages/__app.tsx"'},'import React from "react";\nimport { AppProps } from "next/app";\nimport { RecoilRoot } from "recoil";\n\nfunction MyApp({ Component, pageProps }: AppProps): JSX.Element {\n  return (\n    <RecoilRoot>\n      <Component {...pageProps} />\n    </RecoilRoot>\n  );\n}\n\nexport default MyApp;\n')),(0,r.kt)("p",null,"An ",(0,r.kt)("inlineCode",{parentName:"p"},"atom")," is simply a unit of state that component can subscribe. By updating the value, each subscribed component is re-rendered with the new value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="recoil/atoms/index.ts"',title:'"recoil/atoms/index.ts"'},'import { atom } from "recoil";\n\nenum Atoms {\n  Counter = "Counter",\n}\n\nexport const counter = atom({\n  key: Atoms.Counter,\n  default: 0,\n});\n')),(0,r.kt)("p",null,"To read and write an atom from a component, we use a hook called ",(0,r.kt)("inlineCode",{parentName:"p"},"useRecoilState"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/RecoilExample/index.tsx"',title:'"components/RecoilExample/index.tsx"'},'import { useRecoilState } from "recoil";\nimport { counter } from "recoil/atoms/index.ts";\n\n const useCounter: () => [\n    number,\n    { increase: () => void; decrease: () => void }\n ] = () => {\n    // highlight-next-line\n  const [count, setCount] = useRecoilState(counter);\n\n  const increase = () => {\n    setCount((current) => current + 1);\n  };\n\n  const decrease = () => {\n    setCount((current) => current - 1);\n  };\n\n  return [count, { increase, decrease }];\n};\n\nexport const RecoilExample: React.FC = () => {\n      // highlight-next-line\n  const [count, { increase, decrease }] = useCounter();\n\n  return (\n      <>\n          <h2>Recoil Counter</h2>\n          <div>\n              <button onClick={increase}> + </button>\n              <span>{count}</span>\n              <button onClick={decrease}> - </button>\n          </div>\n      </>\n  );\n};\n')),(0,r.kt)("p",null,"Clicking on the buttons will update state and change count. It's that simple."),(0,r.kt)("br",null),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"We recommend watching ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=_ISAA_Jt9kI&feature=youtu.be&ab_channel=ReactEurope"},"Dave McCabe's presentation about Recoil")," to understand the logic behind the Recoil."))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"All required configurations will be handled automatically by CLI as long as you choose Recoil plugin during the project creation phase."))),(0,r.kt)("h3",{id:"adding-recoil-to-your-project-later"},"Adding Recoil to your project later"),(0,r.kt)("p",null,"If you didn't choose Recoil plugin during project creation phase, you can follow the instructions below to add it."),(0,r.kt)(i.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install recoil\n"))),(0,r.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add recoil\n")))),(0,r.kt)("p",null,"Refer to official ",(0,r.kt)("a",{parentName:"p",href:"https://recoiljs.org/docs/introduction/installation"},"documentation")," for installation."))}f.isMDXComponent=!0},6010:function(e,t,n){function o(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);
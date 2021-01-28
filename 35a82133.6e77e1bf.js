(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{114:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},v={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,m=b["".concat(i,".").concat(d)]||b[d]||v[d]||o;return n?r.a.createElement(m,c(c({ref:t},l),{},{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(114)),i={id:"env",title:"Environment Variables(.env)",sidebar_label:"Enviroment Variables"},c={unversionedId:"env",id:"env",isDocsHomePage:!1,title:"Environment Variables(.env)",description:"Using Environment variables important to keep your private information secure. Next.js comes with built-in support for environment variables.",source:"@site/docs/env.md",slug:"/env",permalink:"/superplate/docs/env",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/env.md",version:"current",sidebar_label:"Enviroment Variables",sidebar:"someSidebar",previous:{title:"SVGR",permalink:"/superplate/docs/svgr"},next:{title:"Apollo GraphQL Support",permalink:"/superplate/docs/apollo-graphql"}},s=[{value:".env.local",id:"envlocal",children:[]},{value:".env.development",id:"envdevelopment",children:[]},{value:".env.production",id:"envproduction",children:[]},{value:".env.test",id:"envtest",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Using Environment variables important to keep your private information secure. Next.js comes with built-in support for environment variables."),Object(o.b)("p",null,"superplate has a plugin to generate those files for different environments automatically."),Object(o.b)("h3",{id:"envlocal"},".env.local"),Object(o.b)("p",null,"Next.js has built-in support for loading environment variables from .env.local into process.env."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-CSS",metastring:'title=".env.local"',title:'".env.local"'}),"DB_HOST_URL=localhost\nDB_USER=user\nDB_PASS=password\n")),Object(o.b)("p",null,"This loads ",Object(o.b)("inlineCode",{parentName:"p"},"process.env.DB_HOST_URL"),", ",Object(o.b)("inlineCode",{parentName:"p"},"process.env.DB_USER"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"process.env.DB_PASS")," into the Node.js environment automatically."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="pages/index.tsx"',title:'"pages/index.tsx"'}),"export async function getServerSideProps() {\n  const db = await myDB.connect({\n    host: process.env.DB_HOST_URL,\n    username: process.env.DB_USER,\n    password: process.env.DB_PASS,\n  })\n  // ...\n}\n")),Object(o.b)("h3",{id:"envdevelopment"},".env.development"),Object(o.b)("p",null,"Next.js allows us to set defaults in .env (all environments), .env.development (development environment), and .env.production (production environment)."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-env",metastring:'title=".env.development"',title:'".env.development"'}),'# DO NOT ADD SECRETS TO THIS FILE. This is a good place for defaults.\n# If you want to add secrets use `.env.development.local` instead.\n\nDEVELOPMENT_ENV_VARIABLE="server_only_development_variable"\nNEXT_PUBLIC_DEVELOPMENT_ENV_VARIABLE="public_development_variable"\n')),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"In order to expose a variable to the browser you have to prefix the variable with ",Object(o.b)("inlineCode",{parentName:"p"},"NEXT_PUBLIC_"),"."))),Object(o.b)("h3",{id:"envproduction"},".env.production"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-env",metastring:'title=".env.production"',title:'".env.production"'}),'# DO NOT ADD SECRETS TO THIS FILE. This is a good place for defaults.\n# If you want to add secrets use `.env.production.local` instead.\n\nPRODUCTION_ENV_VARIABLE="server_only_production_variable"\nNEXT_PUBLIC_PRODUCTION_ENV_VARIABLE="public_production_variable"\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="components/envExample.tsx"',title:'"components/envExample.tsx"'}),'import React from "react";\nimport styles from "./index.module.css";\n\nexport const EnvExample: React.FC = () => {\n    console.log(process.env.NEXT_PUBLIC_ENV_VARIABLE);\n    console.log(process.env.NEXT_PUBLIC_DEVELOPMENT_ENV_VARIABLE);\n    console.log(process.env.NEXT_PUBLIC_PRODUCTION_ENV_VARIABLE);\n};\n')),Object(o.b)("h3",{id:"envtest"},".env.test"),Object(o.b)("p",null,"In the same way you can set defaults for development or production environments, you can do the same with .env.test file for testing environment"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-env",metastring:'title=".env.test"',title:'".env.test"'}),'# USE THIS FILE IF YOU WANT TO DEFINE VARIABLES SPECIFIC TO TEST ENVIRONMENT\n\nENV_TEST_VARIABLE="test_variable"\n')),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},Object(o.b)("inlineCode",{parentName:"p"},".env.test")," is useful when running tests with tools like jest or cypress where you need to set specific environment variables only for testing."))),Object(o.b)("p",null,"Refer to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://nextjs.org/docs/basic-features/environment-variables#loading-environment-variables"}),"documentation")," for detailed usage."))}p.isMDXComponent=!0}}]);
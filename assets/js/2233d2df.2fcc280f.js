"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1478],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8215:function(e,t,r){var n=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},5064:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(7294),a=r(9443);var o=function(){var e=(0,n.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=r(6010),c="tabItem_1uMI",l="tabItemActive_2DSg";var u=function(e){var t,r=e.lazy,a=e.block,u=e.defaultValue,s=e.values,p=e.groupId,d=e.className,m=n.Children.toArray(e.children),f=null!=s?s:m.map((function(e){return{value:e.props.value,label:e.props.label}})),y=null!=u?u:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,v=o(),h=v.tabGroupChoices,g=v.setTabGroupChoices,k=(0,n.useState)(y),b=k[0],N=k[1],w=[];if(null!=p){var x=h[p];null!=x&&x!==b&&f.some((function(e){return e.value===x}))&&N(x)}var O=function(e){var t=e.currentTarget,r=w.indexOf(t),n=f[r].value;N(n),null!=p&&(g(p,n),setTimeout((function(){var e,r,n,a,o,i,c,u;(e=t.getBoundingClientRect(),r=e.top,n=e.left,a=e.bottom,o=e.right,i=window,c=i.innerHeight,u=i.innerWidth,r>=0&&o<=u&&a<=c&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},j=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=w.indexOf(e.target)+1;r=w[n]||w[0];break;case"ArrowLeft":var a=w.indexOf(e.target)-1;r=w[a]||w[w.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},d)},f.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,i.Z)("tabs__item",c,{"tabs__item--active":b===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:j,onFocus:O,onClick:O},null!=r?r:t)}))),r?(0,n.cloneElement)(m.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},9443:function(e,t,r){var n=(0,r(7294).createContext)(void 0);t.Z=n},9693:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return f}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=r(5064),c=r(8215),l=["components"],u={id:"react-query",title:"React Query",sidebar_label:"React Query",description:"React Query with server side rendering using React"},s=void 0,p={unversionedId:"react/hooks/react-query",id:"react/hooks/react-query",isDocsHomePage:!1,title:"React Query",description:"React Query with server side rendering using React",source:"@site/docs/react/hooks/react-query.md",sourceDirName:"react/hooks",slug:"/react/hooks/react-query",permalink:"/superplate/docs/react/hooks/react-query",editUrl:"https://github.com/pankod/superplate/tree/master/documentation/docs/react/hooks/react-query.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1620740656,formattedLastUpdatedAt:"5/11/2021",frontMatter:{id:"react-query",title:"React Query",sidebar_label:"React Query",description:"React Query with server side rendering using React"},sidebar:"someSidebar",previous:{title:"SWR",permalink:"/superplate/docs/react/hooks/swr"},next:{title:"React Use",permalink:"/superplate/docs/react/hooks/react-use"}},d=[{value:"Adding react-query to your project later",id:"adding-react-query-to-your-project-later",children:[]}],m={toc:d};function f(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Provides performant and powerful data synchronization for React."),(0,o.kt)("p",null,"React Query is often described as the missing data-fetching library for React, but in more technical terms, it makes fetching, caching, synchronizing and updating server state in your React applications a breeze.  "),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/"},"Refer to official documentation for detailed usage. ","\u2192")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"All required configurations will be handled automatically by CLI as long as you choose plugins during the project creation phase."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { QueryClient, QueryClientProvider } from "react-query";\n\nimport Home from "pages";\n\nfunction App(): JSX.Element {\n  const queryClient = new QueryClient();\n  return (\n    <QueryClientProvider client={queryClient}>\n      <div className="App">\n        <Home />\n      </div>\n    </QueryClientProvider>\n  );\n}\n\nexport default App;\n')),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you didn't choose the plugin during project creation phase, you must update your ",(0,o.kt)("inlineCode",{parentName:"p"},"src/App.tsx")," file as above after ",(0,o.kt)("a",{parentName:"p",href:"#adding-react-query-to-your-project-later"},"installing required package")," to add it."))),(0,o.kt)("h4",{id:"example-usage-usequery"},"Example usage ",(0,o.kt)("inlineCode",{parentName:"h4"},"useQuery"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/reactQueryExample/index.tsx"',title:'"components/reactQueryExample/index.tsx"'},'import { useQuery } from "react-query";\n\nconst API_URL = "https://official-joke-api.appspot.com/jokes/programming/random";\n\nexport const ReactQueryExample = () => {\n\n  const { data } = useQuery("random-programming-joke", () => \n    fetch(\n      API_URL\n    ).then(res => res.json())\n  );\n};\n')),(0,o.kt)("h2",{id:"adding-react-query-to-your-project-later"},"Adding react-query to your project later"),(0,o.kt)("p",null,"If you didn't choose the plugin during project creation phase, you can follow the instructions below to add it."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install ",(0,o.kt)("inlineCode",{parentName:"li"},"react-query")," package.")),(0,o.kt)(i.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-query\n"))),(0,o.kt)(c.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-query\n")))))}f.isMDXComponent=!0},6010:function(e,t,r){function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:function(){return a}})}}]);
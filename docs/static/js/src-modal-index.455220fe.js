(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"./src/Modal/index.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return u}));var o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/index.es.js")),s=t("./node_modules/docz/dist/index.esm.js"),a=t("./node_modules/antd/es/button/index.js"),i=(t("./node_modules/antd/dist/antd.css"),t("./src/Modal/index.tsx")),c={},d="wrapper";function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)(d,Object.assign({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"modal\u6a21\u6001\u7a97"},"Modal(\u6a21\u6001\u7a97)"),Object(r.b)("h2",{id:"\u57fa\u672c\u7528\u6cd5basic-usage"},"\u57fa\u672c\u7528\u6cd5(Basic usage)"),Object(r.b)("p",null,"\u53c2\u8003",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://ant.design/components/modal-cn/"}),"antd modal"),"(\u6ce8:\u53ea\u662f\u6d6e\u52a8\u4f4d\u7f6e\u9ed8\u8ba4\u6539\u6210\u4e86\u5c45\u4e2d)"),Object(r.b)(s.Playground,{__position:0,__code:"<Button\n  onClick={() =>\n    Modal.info({\n      title: '\u8fd9\u662finfo',\n      onOk: () => new Promise(resolve => setTimeout(() => resolve(), 2000)),\n    })\n  }\n>\n  info\n</Button>\n\u533a\u522b\u4e0eantd\u7684\u7ec4\u4ef6 open,\u4f46\u662fopen \u4e0d\u652f\u6301 onCancel return promise\n\u663e\u793aloading\u90a3\u79cd\u65b9\u6cd5\n<Button onClick={() => Modal.open({ title: '\u8fd9\u662finfo' })}>info</Button>",__scope:{props:this?this.props:t,Playground:s.Playground,Props:s.Props,Button:a.a,Modal:i.a},__codesandbox:"undefined",mdxType:"Playground"},Object(r.b)(a.a,{onClick:function(){return i.a.info({title:"\u8fd9\u662finfo",onOk:function(){return new Promise((function(e){return setTimeout((function(){return e()}),2e3)}))}})},mdxType:"Button"},"info"),"\u533a\u522b\u4e0eantd\u7684\u7ec4\u4ef6 open,\u4f46\u662fopen \u4e0d\u652f\u6301 onCancel return promise \u663e\u793aloading\u90a3\u79cd\u65b9\u6cd5",Object(r.b)(a.a,{onClick:function(){return i.a.open({title:"\u8fd9\u662finfo"})},mdxType:"Button"},"info")),Object(r.b)("h2",{id:"\u5c5e\u6027properties"},"\u5c5e\u6027(Properties)"),Object(r.b)(s.Props,{of:i.a,mdxType:"Props"}))}u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src\\Modal\\index.mdx"}}),u.isMDXComponent=!0},"./src/Modal/index.tsx":function(e,n,t){"use strict";var o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),r=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),s=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),a=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),i=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),c=t("./node_modules/antd/es/modal/index.js"),d=t("./node_modules/react/index.js"),u=t.n(d),l=t("./node_modules/react-dom/index.js"),p=t.n(l);function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(t,!0).forEach((function(n){Object(i.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function f(e,n){var t=document.createElement("div"),o=!1;function r(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];n.onOk&&n.onOk(t),s()}function s(){for(var e=arguments.length,t=new Array(e),c=0;c<e;c++)t[c]=arguments[c];return n.onCancel&&n.onCancel(t),i(m({},n,{onCancel:s,onOk:r,visible:!1})),o=!0,new Promise((function(e){return setTimeout((function(){a(),e(!0)}),200)}))}function a(){o?p.a.unmountComponentAtNode(t)&&t.parentNode&&t.parentNode.removeChild(t):s()}function i(n){p.a.render(u.a.createElement(e,n),t)}return document.body.appendChild(t),i(m({},n,{onCancel:s,onOk:r,visible:!0})),{render:i,onCancel:s,destory:a}}f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"open",filename:"src\\Modal\\index.tsx"}});var j=function(e){function n(e,t){return Object(o.a)(this,n),Object(r.a)(this,Object(s.a)(n).call(this,e,t))}return Object(a.a)(n,e),n}(c.a);j.open=function(e){return f(j,e)},j.error=function(e){return c.a.error(m({centered:!0},e))},j.success=function(e){return c.a.success(m({centered:!0},e))},j.confirm=function(e){return c.a.confirm(m({centered:!0},e))},j.warning=function(e){return c.a.warning(m({centered:!0},e))},n.a=j,"undefined"!==typeof j&&j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Modal",filename:"src\\Modal\\index.tsx"}})}}]);
//# sourceMappingURL=src-modal-index.c0abce03e6a11149eaa5.js.map
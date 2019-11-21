(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"./src/Grid/Col.tsx":function(e,t,n){"use strict";var a=n("./node_modules/react/index.js"),l=n.n(a),r=n("./node_modules/antd/es/col/index.js"),o=n("./src/Grid/Context.ts"),s=function(e){var t=Object(a.useContext)(o.a);return l.a.createElement(r.a,Object.assign({},t.colProps,e))};t.a=s,s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Col",filename:"src\\Grid\\Col.tsx"}})},"./src/Grid/Context.ts":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n("./node_modules/react/index.js"),l=n.n(a).a.createContext({});"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"RowContext",filename:"src\\Grid\\Context.ts"}})},"./src/Grid/index.ts":function(e,t,n){"use strict";var a=n("./src/Grid/Col.tsx"),l=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=n("./node_modules/react/index.js"),o=n.n(r),s=n("./node_modules/antd/es/row/index.js"),c=n("./src/Grid/Context.ts"),b=function(e){var t=e.colProps,n=Object(l.a)(e,["colProps"]);return o.a.createElement(c.a.Provider,{value:{colProps:t}},o.a.createElement(s.a,n))},i=b;b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Row",filename:"src\\Grid\\Row.tsx"}}),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a.a})),"undefined"!==typeof a.a&&a.a&&a.a===Object(a.a)&&Object.isExtensible(a.a)&&Object.defineProperty(a.a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Col",filename:"src\\Grid\\index.ts"}}),"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Row",filename:"src\\Grid\\index.ts"}})},"./src/Label/Context.ts":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n("./node_modules/react/index.js"),l=n.n(a).a.createContext({});"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"LabelRowContext",filename:"src\\Label\\Context.ts"}})},"./src/Label/LabelRow.tsx":function(e,t,n){"use strict";var a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=n("./node_modules/react/index.js"),r=n.n(l),o=n("./src/Grid/index.ts"),s=n("./src/Label/Context.ts"),c=function(e){var t=e.colProps,n=e.labelFloat,l=Object(a.a)(e,["colProps","labelFloat"]);return r.a.createElement(s.a.Provider,{value:{colProps:t,labelFloat:n}},r.a.createElement(o.b,l))};t.a=c,c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"LabelRow",filename:"src\\Label\\LabelRow.tsx"}})},"./src/Label/index.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),r=n("./node_modules/docz/dist/index.esm.js"),o=n("./node_modules/antd/es/input/index.js"),s=(n("./node_modules/antd/dist/antd.css"),n("./src/Label/index.tsx")),c=n("./src/Grid/Col.tsx"),b=n("./src/Label/LabelRow.tsx"),i={},d="wrapper";function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)(d,Object.assign({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"label"},"Label"),Object(l.b)("h2",{id:"\u5c5e\u6027properties"},"\u5c5e\u6027(Properties)"),Object(l.b)(r.Props,{of:s.a,mdxType:"Props"}),Object(l.b)("h2",{id:"\u57fa\u672c\u7528\u6cd5basic-usage"},"\u57fa\u672c\u7528\u6cd5(Basic usage)"),Object(l.b)(r.Playground,{__position:1,__code:'<Label text="\u59d3\u540d1">\n  <Input />\n</Label>',__scope:{props:this?this.props:n,Playground:r.Playground,Props:r.Props,Input:o.a,Label:s.a,Col:c.a,LabelRow:b.a},__codesandbox:"undefined",mdxType:"Playground"},Object(l.b)(s.a,{text:"\u59d3\u540d1",mdxType:"Label"},Object(l.b)(o.a,{mdxType:"Input"}))),Object(l.b)("h1",{id:"labelrow"},"LabelRow"),Object(l.b)("h2",{id:"\u5c5e\u6027properties-1"},"\u5c5e\u6027(Properties)"),Object(l.b)("p",null,"\u53ef\u4ee5\u900f\u4f20 label \u7684 colProps \u4e0e labelFloat \u5c5e\u6027\n\u5176\u4ed6\u5c5e\u6027\u53c2\u8003 ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"../Grid#Row"}),"Row")),Object(l.b)("h2",{id:"\u57fa\u672c\u7528\u6cd5basic-usage-1"},"\u57fa\u672c\u7528\u6cd5(Basic usage)"),Object(l.b)(r.Playground,{__position:2,__code:'<LabelRow\n  type="flex"\n  align="middle"\n  labelFloat="right"\n  colProps={{ label: { span: 4 }, children: { span: 4 } }}\n>\n  <Label text="\u8f93\u5165\u68461">\n    <Input />\n  </Label>\n  <Label text="\u8f93\u5165\u68462">\n    <Input />\n  </Label>\n  <Col span={24}>\n    <LabelRow\n      type="flex"\n      align="middle"\n      labelFloat="right"\n      colProps={{ label: { span: 4 }, children: { span: 4 } }}\n    >\n      <Label text="\u8f93\u5165\u68463">\n        <Input />\n      </Label>\n    </LabelRow>\n  </Col>\n</LabelRow>',__scope:{props:this?this.props:n,Playground:r.Playground,Props:r.Props,Input:o.a,Label:s.a,Col:c.a,LabelRow:b.a},__codesandbox:"undefined",mdxType:"Playground"},Object(l.b)(b.a,{type:"flex",align:"middle",labelFloat:"right",colProps:{label:{span:4},children:{span:4}},mdxType:"LabelRow"},Object(l.b)(s.a,{text:"\u8f93\u5165\u68461",mdxType:"Label"},Object(l.b)(o.a,{mdxType:"Input"})),Object(l.b)(s.a,{text:"\u8f93\u5165\u68462",mdxType:"Label"},Object(l.b)(o.a,{mdxType:"Input"})),Object(l.b)(c.a,{span:24,mdxType:"Col"},Object(l.b)(b.a,{type:"flex",align:"middle",labelFloat:"right",colProps:{label:{span:4},children:{span:4}},mdxType:"LabelRow"},Object(l.b)(s.a,{text:"\u8f93\u5165\u68463",mdxType:"Label"},Object(l.b)(o.a,{mdxType:"Input"})))))))}u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src\\Label\\index.mdx"}}),u.isMDXComponent=!0},"./src/Label/index.scss":function(e,t,n){},"./src/Label/index.tsx":function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),l=n("./node_modules/react/index.js"),r=n.n(l),o=n("./node_modules/classnames/index.js"),s=n.n(o),c=n("./node_modules/lodash-es/uniqueId.js"),b=(n("./src/Label/index.scss"),n("./src/Grid/index.ts")),i=n("./src/Label/Context.ts"),d=n("./src/Label/LabelRow.tsx");function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(n,!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,"b",(function(){return d.a}));var m=function(e){var t=Object(l.useContext)(i.a),n=Object(l.useMemo)((function(){return e.id?e.id:Object(c.a)("label")}),[e.id]),a=e.colProps||t.colProps,o=e.float||t.labelFloat,d=Object(l.useMemo)((function(){var t={};if("object"===typeof o)for(var l=0,c=["xs","sm","md","lg","xl","xxl"];l<c.length;l++){var i=c[l],d=o[i];d&&(t["label-".concat(i,"-").concat(d)]=!0)}else t["label-".concat(o)]=o;return e.text?r.a.createElement(b.a,Object.assign({style:p({display:"flex"},e.labelStyle)},a?a.label:{}),r.a.createElement("label",{title:e.text,htmlFor:n,className:s()("tea-label",e.className,{"label-required":e.required},t)},e.text," :")):void 0}),[e.text,e.className,e.required,o,a,e.labelStyle,t.colProps]),u=Object(l.useMemo)((function(){return r.a.Children.map(e.children,(function(e){return r.a.cloneElement(e,{id:n})}))}),[e.children]);return r.a.createElement(r.a.Fragment,null,d,r.a.createElement(b.a,Object.assign({style:p({paddingTop:10,paddingBottom:10},e.childrenStyle)},a?a.children:{}),u))};m.defaultProps={},"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Label",filename:"src\\Label\\index.tsx"}}),"undefined"!==typeof d.a&&d.a&&d.a===Object(d.a)&&Object.isExtensible(d.a)&&Object.defineProperty(d.a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"LabelRow",filename:"src\\Label\\index.tsx"}}),t.c=Object(l.memo)(m)}}]);
//# sourceMappingURL=src-label-index.9a2a674f532a92cd25fc.js.map
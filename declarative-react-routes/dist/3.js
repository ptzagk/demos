webpackJsonp([3],{575:function(e,t,n){"use strict";function r(e){var t=e.title,n=e.commits;return o.a.createElement(a.a,null,o.a.createElement(l.a,null,o.a.createElement("h1",{className:"mdl-typography--title"},t),o.a.createElement("p",{className:"mdl-typography--body-1"},"This is a demo page showing the latest commits from ",o.a.createElement("a",{href:"https://github.com/kriasoft/react-starter-kit"},"React Starter Kit")," repository:"),o.a.createElement("ul",{style:i.list},n.map(function(e){return o.a.createElement("li",{key:e.sha},"[",o.a.createElement("a",{href:e.url},e.sha.substr(0,5)),"] ",e.commit.message," by",o.a.createElement("a",{href:"https://github.com/"+e.author.login},e.author.login))}))))}var u=n(251),o=u&&u.__esModule?function(){return u["default"]}:function(){return u};n.d(o,"a",o);var a=n(647),l=n(645),i={list:{paddingLeft:0,listStyleType:"none"}};t["default"]=r},640:function(e,t,n){e.exports={"default":n(656),__esModule:!0}},641:function(e,t){"use strict";t.__esModule=!0,t["default"]=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},642:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var u=n(650),o=r(u);t["default"]=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,o["default"])(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()},643:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var u=n(651),o=r(u),a=n(253),l=r(a),i=n(252),c=r(i);t["default"]=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof t?"undefined":(0,c["default"])(t)));e.prototype=(0,l["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(o["default"]?(0,o["default"])(e,t):e.__proto__=t)}},644:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var u=n(252),o=r(u);t["default"]=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==("undefined"==typeof t?"undefined":(0,o["default"])(t))&&"function"!=typeof t?e:t}},645:function(e,t,n){"use strict";function r(e){var t=e.style,n=void 0===t?{}:t,r=l()(e,["style"]);return c.a.createElement("div",o()({style:o()({},n,{maxWidth:"960px",margin:"0 auto"})},r))}var u=n(652),o=u&&u.__esModule?function(){return u["default"]}:function(){return u};n.d(o,"a",o);var a=n(653),l=a&&a.__esModule?function(){return a["default"]}:function(){return a};n.d(l,"a",l);var i=n(251),c=i&&i.__esModule?function(){return i["default"]}:function(){return i};n.d(c,"a",c),t.a=r},646:function(e,t,n){"use strict";var r=n(640),u=r&&r.__esModule?function(){return r["default"]}:function(){return r};n.d(u,"a",u);var o=n(641),a=o&&o.__esModule?function(){return o["default"]}:function(){return o};n.d(a,"a",a);var l=n(642),i=l&&l.__esModule?function(){return l["default"]}:function(){return l};n.d(i,"a",i);var c=n(644),f=c&&c.__esModule?function(){return c["default"]}:function(){return c};n.d(f,"a",f);var d=n(643),s=d&&d.__esModule?function(){return d["default"]}:function(){return d};n.d(s,"a",s);var m=n(251),_=m&&m.__esModule?function(){return m["default"]}:function(){return m};n.d(_,"a",_);var p=n(648),v=function(e){function t(){return a()(this,t),f()(this,u()(t).apply(this,arguments))}return s()(t,e),i()(t,[{key:"componentDidMount",value:function(){window.componentHandler.upgradeElement(this.refs.root)}},{key:"componentWillUnmount",value:function(){window.componentHandler.downgradeElements(this.refs.root)}},{key:"render",value:function(){return _.a.createElement("header",{className:"mdl-layout__header",ref:"root"},_.a.createElement("div",{className:"mdl-layout__header-row"},_.a.createElement("a",{className:"mdl-layout-title",to:"#/",style:{color:"#fff"}},"Declarative React Routes"),_.a.createElement("div",{className:"mdl-layout-spacer"}),_.a.createElement(p.a,null)))}}]),t}(_.a.Component);t.a=v},647:function(e,t,n){"use strict";var r=n(640),u=r&&r.__esModule?function(){return r["default"]}:function(){return r};n.d(u,"a",u);var o=n(641),a=o&&o.__esModule?function(){return o["default"]}:function(){return o};n.d(a,"a",a);var l=n(642),i=l&&l.__esModule?function(){return l["default"]}:function(){return l};n.d(i,"a",i);var c=n(644),f=c&&c.__esModule?function(){return c["default"]}:function(){return c};n.d(f,"a",f);var d=n(643),s=d&&d.__esModule?function(){return d["default"]}:function(){return d};n.d(s,"a",s);var m=n(251),_=m&&m.__esModule?function(){return m["default"]}:function(){return m};n.d(_,"a",_);var p=n(646),v=function(e){function t(){return a()(this,t),f()(this,u()(t).apply(this,arguments))}return s()(t,e),i()(t,[{key:"componentDidMount",value:function(){window.componentHandler.upgradeElement(this.refs.root)}},{key:"componentWillUnmount",value:function(){window.componentHandler.downgradeElements(this.refs.root)}},{key:"render",value:function(){return _.a.createElement("div",{className:"mdl-layout mdl-js-layout",ref:"root"},_.a.createElement("div",{className:"mdl-layout__inner-container"},_.a.createElement(p.a,null),_.a.createElement("main",this.props)))}}]),t}(_.a.Component);t.a=v},648:function(e,t,n){"use strict";var r=n(640),u=r&&r.__esModule?function(){return r["default"]}:function(){return r};n.d(u,"a",u);var o=n(641),a=o&&o.__esModule?function(){return o["default"]}:function(){return o};n.d(a,"a",a);var l=n(642),i=l&&l.__esModule?function(){return l["default"]}:function(){return l};n.d(i,"a",i);var c=n(644),f=c&&c.__esModule?function(){return c["default"]}:function(){return c};n.d(f,"a",f);var d=n(643),s=d&&d.__esModule?function(){return d["default"]}:function(){return d};n.d(s,"a",s);var m=n(251),_=m&&m.__esModule?function(){return m["default"]}:function(){return m};n.d(_,"a",_);var p=function(e){function t(){return a()(this,t),f()(this,u()(t).apply(this,arguments))}return s()(t,e),i()(t,[{key:"componentDidMount",value:function(){window.componentHandler.upgradeElement(this.refs.root)}},{key:"componentWillUnmount",value:function(){window.componentHandler.downgradeElements(this.refs.root)}},{key:"render",value:function(){return _.a.createElement("nav",{className:"mdl-navigation",ref:"root"},_.a.createElement("a",{className:"mdl-navigation__link",href:"#/"},"Home"),_.a.createElement("a",{className:"mdl-navigation__link",href:"#/about"},"About"),_.a.createElement("a",{className:"mdl-navigation__link",href:"#/not-found"},"Not Found"))}}]),t}(_.a.Component);t.a=p},649:function(e,t,n){e.exports={"default":n(654),__esModule:!0}},650:function(e,t,n){e.exports={"default":n(655),__esModule:!0}},651:function(e,t,n){e.exports={"default":n(657),__esModule:!0}},652:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var u=n(649),o=r(u);t["default"]=o["default"]||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}},653:function(e,t){"use strict";t.__esModule=!0,t["default"]=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}},654:function(e,t,n){n(659),e.exports=n(22).Object.assign},655:function(e,t,n){n(660);var r=n(22).Object;e.exports=function(e,t,n){return r.defineProperty(e,t,n)}},656:function(e,t,n){n(661),e.exports=n(22).Object.getPrototypeOf},657:function(e,t,n){n(662),e.exports=n(22).Object.setPrototypeOf},658:[635,76,173,112,111,254,75],659:[636,65,658],660:[637,65,51,43],661:[638,111,255,256],662:[639,65,257]});
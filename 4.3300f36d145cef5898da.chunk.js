// [AIV_SHORT]  Build version: 2.0.3 - Thursday, April 9th, 2020, 4:44:45 PM  
 webpackJsonp([4],{"./app/containers/HomePage/index.js":function(e,a,t){"use strict";function n(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function o(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?e:a}function c(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}Object.defineProperty(a,"__esModule",{value:!0});var r=t("./node_modules/react/index.js"),d=t.n(r),i=t("./node_modules/react-intl/lib/index.es.js"),f=Object(i.d)({header:{id:"app.components.HomePage.header",defaultMessage:"Know Your Coin Privacy."}}),b=t("./app/services/uiUtils.js"),s=t("./node_modules/@fortawesome/free-solid-svg-icons/index.es.js"),l=t("./node_modules/@fortawesome/react-fontawesome/index.es.js"),u=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(a,t,n,o){var c=a&&a.defaultProps,r=arguments.length-3;if(t||0===r||(t={}),t&&c)for(var d in c)void 0===t[d]&&(t[d]=c[d]);else t||(t=c||{});if(1===r)t.children=o;else if(r>1){for(var i=Array(r),f=0;f<r;f++)i[f]=arguments[f+3];t.children=i}return{$$typeof:e,type:a,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}}(),p=function(){function e(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(a,t,n){return t&&e(a.prototype,t),n&&e(a,n),a}}(),m=u("strong",{},void 0,"Browsing personal transactions?"),y=u("strong",{},void 0,"Tor/VPN"),v=u("strong",{},void 0,"switch identity"),h=u("br",{}),g=u("br",{}),w=u("br",{}),j=u("br",{}),_=u("br",{}),k=u("br",{}),x=u("br",{}),O=u("strong",{},void 0,"Hall of Fame:"),P=function(e){function a(){return n(this,a),o(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return c(a,e),p(a,[{key:"render",value:function(){this.handleSearchRedirect();var e=function(e){return function(){return b.g.goSearch(e)}},a={"0e3e2357e806b6cdb1f70b54c3a3a17b6714ee1f0e68bebb44a74b1efd512098":"First Bitcoin",f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16:"First TX (Satoshi to Hal Finney)",a1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d:"10.000 BTC pizza","323df21f0b0756f98336437aa3d2fb87e02b59f1946b714a7b09df04d429dec2":"Whirlpool",b3dcc5d68e7ba4946e8e7fec0207906fba89ccb4768112a25d6e6941f2e99d97:"Wasabi","5e292be15bc152c4c6c91bb3211de2a6ae576e7194a53dcb5870763cabdf99bc":"Wasabi","3e00df65f1f95312aca24082a2ecbe32289d624f8536bd0acfb140d24388087d":"Wasabi",b994a9cbdc20e971207bde4f800b9ce99dba35478a2a997bc48e7f9f80bd2d02:"Wasabi","4f89d6599fd1d728a78972d96930b8fca55e060aca9a04171b6c703c88285325":"Wasabi post-mix spending","8e56317360a548e8ef28ec475878ef70d1371bee3526c017ac22ad61ae5740b8":"DarkWallet","3a1b9e330d32fef1ee42f8e86420d2be978bbe0dc5862f17da9027cf9e11f8c4":"MTGox 424242.42424242","2f17c08654e518f3ee46dd1438b58ef52b772e8cbc446b96b123d680a80bc3f7":"Basic transaction","015d9cf0a12057d009395710611c65109f36b3eaefa3a694594bf243c097f404":"Non-deterministic TX","722d83ae4183ee17704704bdf31d9e77e6964387f657bbc0e09810a84a7fbad2":"Complex TX",ca48b14f0a836b91d8719c51e50b313b425356a87111c4ed2cd6d81f0dbe60de:"JoinMarket","615e269c65d2e78928938b7675095ea0437b5b976217d4210a980d37b56b35b4":"JoinMarket","51a2f747b6efe36762c05771d9168bc9d2aea8e90474b2b53594f34aa054ba18":"JoinMarket","92af14f15ac7f8d2439359dcad931317c8dca92a3fcc4e5dcc6704da7ae21232":"Weak CoinJoin",a9b5563592099bf6ed68e7696eeac05c8cb514e21490643e0b7a9b72dac90b07:"Weak CoinJoin","0f7bf562c8768454077f9b5c6fe0c4c55c9a34786ad7380e00c2d8d00ebf779d":"Address reuse","2157b554dcfda405233906e461ee593875ae4b1b97615872db6a25130ecc1dd6":"Block reward","03a858678475235b8b35a67495d67b65d5f2323236571aba3395f57eac57d72d":"Input/output merges",b527350146e2a37aff219a63bbf9b8e10f9ba12ab32aa4a70d680742917a281f:"Input merges + address reuse",e979d30a933c8c3e4e512b3812a74f483a9073957e860236ff103b819a1eaf15:"Aggregation"};return u("div",{},void 0,u("div",{className:"text-center colorLight"},void 0,u(l.a,{icon:s.d})," ",m," use"," ",y," and ",v," ","frequently for your privacy."),u("h1",{style:{marginTop:"10em",textAlign:"center"}},void 0,d.a.createElement(i.a,f.header)),u("div",{className:"text-center"},void 0,u("small",{className:"colorLight"},void 0,u(l.a,{icon:s.a})," Boltzmann analysis",u(l.a,{icon:s.a,style:{marginLeft:"1.5em"}})," ","Entity analysis",u(l.a,{icon:s.a,style:{marginLeft:"1.5em"}})," ","Address reuse",u(l.a,{icon:s.a,style:{marginLeft:"1.5em"}})," ","Input/output merges")),h,g,w,j,_,k,x,u("div",{className:"examples colorMain"},void 0,O,u("ul",{},void 0,Object.keys(a).map(function(t){return u("li",{},t,u("strong",{},void 0,a[t]),":"," ",u("a",{onClick:e(t)},void 0,t))}))))}},{key:"handleSearchRedirect",value:function(){var e=window.location.search;if(e&&e.startsWith("?search=")){var a="/#"+e.substr("?search=".length);console.log("Redirecting to: "+a),window.location.href=a}}}]),a}(d.a.PureComponent);a.default=P}}); 
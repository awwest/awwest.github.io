(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{139:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(143),o=n(153),l=n(151);t.default=function(){return i.a.createElement(o.a,null,i.a.createElement(l.a,{title:"Page two"}),i.a.createElement("h1",null,"Hi from the second page"),i.a.createElement("p",null,"Welcome to page 2"),i.a.createElement(r.Link,{to:"/"},"Go back to the homepage"))}},143:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return u}),n.d(t,"StaticQuery",function(){return g}),n.d(t,"useStaticQuery",function(){return A});var a=n(0),i=n.n(a),r=n(4),o=n.n(r),l=n(142),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(144),d=n.n(s);n.d(t,"PageRenderer",function(){return d.a});var p=n(32);n.d(t,"parsePath",function(){return p.a});var u=i.a.createContext({}),g=function(e){return i.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})},A=function(e){i.a.useContext;var t=i.a.useContext(u);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},144:function(e,t,n){var a;e.exports=(a=n(146))&&a.default||a},145:function(e){e.exports={data:{site:{siteMetadata:{title:"Alex West"}}}}},146:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),i=n.n(a),r=n(4),o=n.n(r),l=n(53),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},147:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAABCCAYAAAASX1tlAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBQTU3M0Y1MDFDN0QxMUUyQjkxNEY3RUNEMkY1ODRBRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBQTU3M0Y1MTFDN0QxMUUyQjkxNEY3RUNEMkY1ODRBRCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk3MEE3MEM5MUM3RDExRTJCOTE0RjdFQ0QyRjU4NEFEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk3MEE3MENBMUM3RDExRTJCOTE0RjdFQ0QyRjU4NEFEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+TJdpngAAAp5JREFUeNrsnLFS20AQhk+e2JbdhHSBiqGkTQltupQZyqQjr5Ay6VJSuwrkFZyKGqrQuk4VWlJZrpR/yWm4YZC9awtbvvt3ZkfidHdjfeze7t557MqydJAd6HdomZjKO+8IA4tmHthv6EuXpvyF7gPGnXZAB3qWMDDn3/3MMiDzZpq8wNIyi6VRjEJohEZohJYstMFgMOt0Ol/lVqKNjzgDaZNnSUVbjQJKgethXZYsz3yfrawOLBWBawJYDOAs0FTuOZvNvqHzRJEgTqRv7K6prQhkDStUE2ZZjss0+YpAC6zqG3tQUFma5b/gra1M3tK8y7mm+0adpyEP+6ye0NA36jyNKccSeRqT2yWhVeDgfl9wnwcT5NK2zcCs0Lhz+1zRk0Jo8UPL8/wal4/Q42A7ak/+lvZut/tjExVIowvlKuPD/oA10aQ5wdgPgHfbqui5TmiwngvrqXcVyfv9/jg5aMsCC9Vb6eZTDm1IrivWNePhXlfT6fRo5V0I1L+Y6w5z9aNPOYqieN9QzlU852Zoqyyt0RczboYyufXWhqDwk8mtUeCil0lBg3sdIQqOxd1Fh8Nh0ev1LnC/a5jmV/TJbZioztlpuQ13WRblbW5TR3hrtrBdgBnVPUca8RqXT9p1LRX3PFmUX8FtT1iwB4KI95a7HHb3fKXoc0BoRvHrGqG1xYq2sozSns5var7oKwKuaYRGaIRGITRCa4u8IILa/E4OpN89ah4jn/tDaHOAAdDoUfspdExoT8s9MIEUtN1UbVzTFpdXI29xb7im6V21srYbRs8VLO2+3bXoYGVdn2fefO7/V7lOn5hLrG6PXx99sKhMm3IQWg00VgQsowiN0AiNMhfaOTHYGPCnwJb5KTDfeT9Rizu3AhP5J8AAsVp75+4pkr8AAAAASUVORK5CYII="},148:function(e,t,n){e.exports=n.p+"static/al-f349f67721ec33a235390e9115ddf7da.png"},149:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyRTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyRjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTJDOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTJEOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+FYrpWAAABrNJREFUeNrkW2ls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"},150:function(e,t,n){e.exports=n.p+"static/self3-72e85a216c8dff21736cc7c62cea7a2a.png"},151:function(e,t,n){"use strict";var a=n(152),i=n(0),r=n.n(i),o=n(4),l=n.n(o),c=n(155),s=n.n(c),d=n(143);function p(e){var t=e.description,n=e.lang,i=e.meta,o=e.keywords,l=e.title;return r.a.createElement(d.StaticQuery,{query:u,render:function(e){var a=t||e.site.siteMetadata.description;return r.a.createElement(s.a,{htmlAttributes:{lang:n},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:l},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(i)})},data:a})}p.defaultProps={lang:"en",meta:[],keywords:[]},p.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=p;var u="1025518380"},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Alex West",description:"",author:"@awwest"}}}}},153:function(e,t,n){"use strict";var a=n(145),i=n(0),r=n.n(i),o=n(4),l=n.n(o),c=n(143),s=n(147),d=n.n(s),p=n(148),u=n.n(p),g=n(149),A=n.n(g),m=n(150),w=n.n(m),h=function(e){var t=e.siteTitle;return r.a.createElement("header",{style:{marginBottom:"1.45rem",position:"fixed",top:0,width:"100%",zIndex:5}},r.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"0.5rem 1.0875rem"}},r.a.createElement(c.Link,{to:"/",style:{color:"white",textDecoration:"none",display:"flex",alignItems:"center"}},r.a.createElement("img",{src:w.a,style:{height:"4rem",marginRight:"15px",borderRadius:"50%",border:"1px solid black"}}),r.a.createElement("h1",{style:{margin:"10px",minWidth:"11rem"}},t)),r.a.createElement("div",{style:{position:"relative",fontSize:"1.2em",color:"#fff",fontWeight:"bold"}},"Web Engineer"),r.a.createElement("div",{className:"social-icons",style:{display:"flex",flexDirection:"row",alignItems:"center",margin:"10px"}},r.a.createElement("a",{href:"https://linkedin.com/in/alexwwest",target:"_blank",rel:"noopener noreferrer",style:{backgroundColor:"white",borderRadius:"50%",padding:"10%",position:"relative",display:"inline-block",height:"35px",width:"35px",marginRight:"15px"}},r.a.createElement("img",{src:d.a,alt:"linkedin.com/in/alexwwest",style:{height:"22px",backgroundColor:"transparent",color:"white",bottom:"7px",right:"7px",position:"relative"}})),r.a.createElement("a",{href:"https://github.com/awwest",target:"_blank",rel:"noopener noreferrer",style:{backgroundColor:"white",borderRadius:"50%",padding:"10%",position:"relative",display:"inline-block",height:"35px",width:"35px",marginRight:"15px"}},r.a.createElement("img",{src:A.a,alt:"github.com/awwest",style:{height:"1.5em",width:"1.5em",backgroundColor:"transparent",color:"white",bottom:"9px",right:"9px",position:"relative"}})),r.a.createElement("a",{href:"https://angel.co/alex-west",target:"_blank",rel:"noopener noreferrer",style:{backgroundColor:"white",borderRadius:"50%",padding:"10%",position:"relative",display:"inline-block",height:"35px",width:"35px"}},r.a.createElement("img",{src:u.a,alt:"angel.co/alex-west",style:{height:"1.5em",backgroundColor:"transparent",color:"white",bottom:"8px",right:"6px",position:"relative"}})))))};h.propTypes={siteTitle:l.a.string},h.defaultProps={siteTitle:"Alex West"};var b=h,y=(n(154),function(e){var t=e.children;return r.a.createElement(c.StaticQuery,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{siteTitle:e.site.siteMetadata.title}),r.a.createElement("div",{style:{paddingTop:0}},r.a.createElement("main",null,t),r.a.createElement("footer",null,"Icon made by ",r.a.createElement("a",{style:{textDecoration:"none",color:"#fff"},href:"https://www.flaticon.com/authors/freepik"},"Freepik")," from www.flaticon.com")))},data:a})});y.propTypes={children:l.a.node.isRequired};t.a=y}}]);
//# sourceMappingURL=component---src-pages-page-2-js-50bb9e72f2999cd9572d.js.map
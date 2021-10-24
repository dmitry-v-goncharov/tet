(this.webpackJsonptetris=this.webpackJsonptetris||[]).push([[0],{10:function(e,t,c){"use strict";c.d(t,"c",(function(){return a})),c.d(t,"b",(function(){return i})),c.d(t,"d",(function(){return r}));var s=c(9);const n=Object(s.b)({name:"showMenu",initialState:{isShow:!1},reducers:{openMenu(e){e.isShow=!0},hideMenu(e){e.isShow=!1}}});t.a=n.reducer;const{openMenu:a,hideMenu:i}=n.actions,r=e=>e.menuState.isShow},11:function(e,t,c){"use strict";c.d(t,"a",(function(){return r})),c.d(t,"b",(function(){return l})),c.d(t,"d",(function(){return j}));var s=c(9);const n=sessionStorage.getItem("theme"),a={value:n||"defaultTheme"},i=Object(s.b)({name:"theme",initialState:a,reducers:{changeTheme(e){e.value="changedTheme"},changeThemeToDefault(e){e.value="defaultTheme"}}});t.c=i.reducer;const{changeTheme:r,changeThemeToDefault:l}=i.actions,j=e=>e.theme.value},21:function(e,t,c){"use strict";c.d(t,"d",(function(){return a})),c.d(t,"b",(function(){return r})),c.d(t,"c",(function(){return l})),c.d(t,"g",(function(){return j})),c.d(t,"e",(function(){return x})),c.d(t,"f",(function(){return h}));var s=c(9);const n=Object(s.b)({name:"tetris",initialState:{score:0,lines:0,level:0,nextPiece:[[0,0,0],[0,0,0],[0,0,0]],isGameOver:!1,isGamePlaying:!1},reducers:{increaseStats(e,t){e.score=t.payload.score,e.level=t.payload.level,e.lines=t.payload.lines},clearStats(e){e.score=0,e.level=1},gameOver(e,t){e.isGameOver=t.payload},gamePlaying(e,t){e.isGamePlaying=t.payload}}});t.a=n.reducer;const{increaseStats:a,clearStats:i,gameOver:r,gamePlaying:l}=n.actions,j=e=>e.tetris,x=e=>e.tetris.isGameOver,h=e=>e.tetris.isGamePlaying},22:function(e,t,c){"use strict";c.d(t,"a",(function(){return l}));var s=c(9),n=c(11),a=c(21),i=c(10);const r=Object(s.c)({immutableCheck:!1,serializableCheck:!1,thunk:!0}),l=Object(s.a)({devTools:!0,middleware:r,reducer:{theme:n.c,menuState:i.a,tetris:a.a}})},28:function(e,t,c){},29:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c.n(s),a=c(16),i=c.n(a),r=(c(28),c(12)),l=c(3),j=(c(29),c(1));const x=[{path:"/tet",component:function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsx)("h1",{className:"",children:"Welcome to the Games!"}),Object(j.jsx)("h2",{children:"Pick the game do you want play:"}),Object(j.jsxs)("ol",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(r.b,{className:"link",to:"/tet/play-tetris",children:"Tetris"})}),Object(j.jsxs)("li",{children:["Picker ",Object(j.jsx)("span",{className:"coming-soon",children:"(coming soon)"})]})]})]})})},exact:!0,key:"WelcomePage",title:"Home"},{path:"/tet/play-tetris",component:n.a.lazy((()=>c.e(3).then(c.bind(null,38)))),exact:!0,key:"TetrisPage",title:"Tetris"}];var h=c(8),d=c(11);function o(){return Object(j.jsx)("div",{className:"loader__container",children:Object(j.jsxs)("svg",{className:"loader",width:"220",height:"70",viewBox:"0 0 220 70",children:[Object(j.jsx)("g",{className:"f1",children:b.map((e=>Object(j.jsx)("rect",{x:e.x,y:e.y,width:"10",height:"10"},"key"+e.x+e.y)))}),Object(j.jsx)("g",{className:"f2",children:m.map((e=>Object(j.jsx)("rect",{x:e.x,y:e.y,width:"10",height:"10"},"key"+e.x+e.y)))}),Object(j.jsxs)("g",{className:"f3",children:[Object(j.jsx)("g",{children:u.map((e=>Object(j.jsx)("rect",{x:e.x,y:e.y,width:"10",height:"10"},"key"+e.x+e.y)))}),Object(j.jsx)("g",{children:y.map((e=>Object(j.jsx)("rect",{x:e.x,y:e.y,width:"10",height:"10"},"key"+e.x+e.y)))})]}),Object(j.jsxs)("g",{className:"f4",children:[Object(j.jsx)("g",{children:O.map((e=>Object(j.jsx)("rect",{x:e.x,y:e.y,width:"10",height:"10"},"key"+e.x+e.y)))}),Object(j.jsx)("g",{children:g.map((e=>Object(j.jsx)("rect",{x:e.x,y:e.y,width:"10",height:"10"},"key"+e.x+e.y)))})]}),Object(j.jsx)("g",{className:"f5",children:f.map((e=>Object(j.jsx)("rect",{x:e.x,y:e.y,width:"10",height:"10"},"key"+e.x+e.y)))}),Object(j.jsxs)("g",{className:"f6",children:[Object(j.jsx)("g",{children:p.map((e=>Object(j.jsx)("rect",{x:e.x,y:e.y,width:"10",height:"10"},"key"+e.x+e.y)))}),Object(j.jsx)("g",{children:v.map((e=>Object(j.jsx)("rect",{x:e.x,y:e.y,width:"10",height:"10"},"key"+e.x+e.y)))})]}),Object(j.jsxs)("g",{className:"f7",children:[Object(j.jsx)("g",{children:w.map((e=>Object(j.jsx)("rect",{x:e.x,y:e.y,width:"10",height:"10"},"key"+e.x+e.y)))}),Object(j.jsx)("g",{children:N.map((e=>Object(j.jsx)("rect",{x:e.x,y:e.y,width:"10",height:"10"},"key"+e.x+e.y)))})]})]})})}const b=[{x:0,y:10},{x:0,y:20},{x:0,y:30},{x:10,y:30}],m=[{x:30,y:20},{x:40,y:20},{x:30,y:30},{x:40,y:30}],u=[{x:60,y:0},{x:60,y:10},{x:60,y:20},{x:60,y:30}],y=[{x:70,y:10},{x:70,y:20},{x:80,y:20},{x:80,y:30}],O=[{x:100,y:20},{x:100,y:30},{x:110,y:20},{x:110,y:30}],g=[{x:120,y:0},{x:120,y:10},{x:120,y:20},{x:120,y:30}],f=[{x:140,y:0},{x:140,y:10},{x:140,y:20},{x:140,y:30}],p=[{x:160,y:0},{x:160,y:10},{x:160,y:20},{x:160,y:30}],v=[{x:170,y:10},{x:180,y:10},{x:180,y:20},{x:180,y:30}],w=[{x:200,y:20},{x:210,y:20},{x:200,y:30},{x:210,y:30}],N=[{x:210,y:40},{x:200,y:50},{x:210,y:50},{x:210,y:60}];var k=c(10),T=c.p+"static/media/switch_d.deaea3e9.png",_=c.p+"static/media/switch_n.cf7a680a.png";function S(){const e=Object(h.b)(d.d),t=Object(h.a)();return Object(j.jsx)("button",{onClick:c=>(c=>{const s="defaultTheme"===e?Object(d.a)():Object(d.b)();t(s),sessionStorage.setItem("theme","defaultTheme"===e?"changedTheme":"defaultTheme"),c.currentTarget.blur()})(c),id:"color-switcher",className:"tetris__color-switch",type:"button",children:Object(j.jsx)(P,{currentTheme:e})})}function P({currentTheme:e}){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("svg",{width:"200",height:"200",viewBox:"0 0 200 200",children:"defaultTheme"===e?Object(j.jsx)("image",{href:T}):Object(j.jsx)("image",{href:_})})})}function C(){const e=Object(h.b)(k.d),t=Object(h.a)(),c=()=>{t(Object(k.b)())};return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"menu__wrapper"+(e?" show":""),children:[Object(j.jsx)(S,{}),Object(j.jsxs)("ul",{className:"menu",children:[Object(j.jsx)("li",{className:"menu__item",children:Object(j.jsx)(r.c,{to:"/tet",onClick:c,activeClassName:"active",className:"menu__link",exact:!0,children:"Home"})}),Object(j.jsx)("li",{className:"menu__item",children:Object(j.jsx)(r.c,{to:"/tet/play-tetris",onClick:c,activeClassName:"active",className:"menu__link",exact:!0,children:"Tetris"})})]})]})})}function M(){const e=Object(h.a)(),t=Object(h.b)(k.d);return Object(j.jsx)("button",{onClick:()=>e(t?Object(k.b)():Object(k.c)()),className:"menu__close"+(t?" active":""),"aria-label":"toggle main menu","aria-roledescription":"button",children:Object(j.jsxs)("svg",{width:"50",height:"50",viewBox:"0 0 50 50",className:"menu__close--svg",xmlns:"http://www.w3.org/2000/svg",children:[Object(j.jsx)("path",{className:"top",d:"M 10,10 L 40,10"}),Object(j.jsx)("path",{className:"middle",d:"M 15,25 L 35,25"}),Object(j.jsx)("path",{className:"bottom",d:"M 10,40 L 40,40"})]})})}function F(){return Object(j.jsxs)("header",{className:"header",children:[Object(j.jsx)(M,{}),Object(j.jsx)(C,{})]})}var G=function(){const e=Object(h.b)(d.d);return Object(j.jsx)(r.a,{children:Object(j.jsxs)("div",{className:`${e} app-styles container`,children:[Object(j.jsx)(F,{}),Object(j.jsx)(n.a.Suspense,{fallback:Object(j.jsx)(o,{}),children:Object(j.jsx)(l.c,{children:x.map((e=>Object(j.jsx)(l.a,{...e})))})})]})})};var B=e=>{e&&e instanceof Function&&c.e(4).then(c.bind(null,37)).then((({getCLS:t,getFID:c,getFCP:s,getLCP:n,getTTFB:a})=>{t(e),c(e),s(e),n(e),a(e)}))},L=c(15),I=c(22);i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(L.a,{store:I.a,children:Object(j.jsx)(G,{})})}),document.getElementById("root")),B()},8:function(e,t,c){"use strict";c.d(t,"a",(function(){return n})),c.d(t,"b",(function(){return a}));var s=c(15);const n=()=>Object(s.b)(),a=s.c}},[[36,1,2]]]);
//# sourceMappingURL=main.1875ccc1.chunk.js.map
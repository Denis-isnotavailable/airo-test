"use strict";(self.webpackChunkairo_test=self.webpackChunkairo_test||[]).push([[839],{839:function(n,e,i){i.r(e),i.d(e,{default:function(){return E}});var t,r,o,c,d,l,s,u=i(791),a=i(168),h=i(867),p=h.ZP.div(t||(t=(0,a.Z)(["\n    padding: 20px 30px;\n"]))),f=i(439),x=h.ZP.div(r||(r=(0,a.Z)(["\n   position: relative;\n\n   button {\n    position: fixed;\n    top: calc(100vh - 100px);\n    left: calc(100% - 180px);\n\n    padding: 20px 40px;\n    border-radius: 10px;\n    background-color: #ffffff;\n    font-size: 20px;\n    cursor: pointer;\n\n    transition: background-color 250ms linear;    \n   }\n\n    button:hover {\n        background-color: #d4d2d2;\n    }\n"]))),g=i(535),b=i(87),m=h.ZP.li(o||(o=(0,a.Z)(["    \n    margin-bottom: 20px;    \n    border: 1px solid #010110;\n    border-radius: 10px;\n    overflow: hidden;\n    background-color: ",";\n\n    cursor: pointer;\n\n    transition: background-color 250ms linear;\n\n    :hover {\n        background-color: ",";\n    }\n    \n"])),(function(n){return n.$isMarked?"#f6b8b8":"#f3f1f1"}),(function(n){return n.$isMarked?"#f6b8b8":"#e3e1e1"})),v=(0,h.ZP)(b.OL)(c||(c=(0,a.Z)(["    \n    display: flex;\n    padding: 10px;\n    text-decoration: none;\n    color: #000000;\n"]))),j=h.ZP.div(d||(d=(0,a.Z)(["\n    width: 120px;\n    height: 300px;\n    margin-right: 30px;\n    border-radius: 5px;\n\n    background-color: inherit;\n    \n    overflow: hidden;\n\n    img {\n        width: 100%;\n        height: 100%;\n    }\n"]))),k=h.ZP.div(l||(l=(0,a.Z)(["\n    text-align: center;\n    width: calc(100% - 150px);\n\n    p {\n        min-height: 20px;\n        max-height: 59px;\n        margin-bottom: 8px;\n        overflow: hidden;\n    }\n"]))),w=h.ZP.div(s||(s=(0,a.Z)(["\n   h2, h3, h4 {\n    margin-bottom: 10px;\n   }\n"]))),Z=i(184);var P=function(n){var e=n.recipe,i=(0,g.D)(),t=i.togglelistToDeleteRecipes,r=i.listToDeleteRecipes,o=e.id,c=e.image_url,d=e.name,l=e.tagline,s=e.contributed_by,u=e.description,a=e.abv,h=e.food_pairing;return(0,Z.jsx)(m,{onContextMenu:function(n){n.preventDefault(),"contextmenu"===n.type&&t(e.id)},$isMarked:r.includes(o),children:(0,Z.jsxs)(v,{to:"/".concat(o),children:[(0,Z.jsx)(j,{children:(0,Z.jsx)("img",{src:c,alt:"beer",width:150,height:300})}),(0,Z.jsxs)(k,{children:[(0,Z.jsxs)(w,{children:[(0,Z.jsxs)("h2",{children:["Name: ",d]}),(0,Z.jsx)("h3",{children:l}),(0,Z.jsxs)("h4",{children:["Contributed by: ",s]})]}),(0,Z.jsx)("p",{children:u}),(0,Z.jsxs)("p",{children:["Alcohol by Volume: ",(0,Z.jsx)("strong",{children:a})]}),(0,Z.jsx)("p",{children:(0,Z.jsx)("strong",{children:"Food Pairing:"})}),(0,Z.jsx)("ul",{children:h.map((function(n,e){return(0,Z.jsx)("li",{children:n},e)}))})]})]})})};var D=function(){var n=(0,u.useState)(5),e=(0,f.Z)(n,2),i=e[0],t=e[1],r=(0,g.D)(),o=r.recipes,c=r.page,d=r.fetch,l=r.nextPage,s=r.listToDeleteRecipes,a=r.clearListToDeleteRecipes,h=r.deleteRecipe;(0,u.useEffect)((function(){d(c)}),[]),(0,u.useEffect)((function(){o.length>0&&o.length<25&&(d(c+1),l())}),[o]);var p=function(){window.innerHeight+document.documentElement.scrollTop+1<document.documentElement.offsetHeight||i<15&&t((function(n){return n+5}))};return(0,u.useEffect)((function(){return window.addEventListener("scroll",p),function(){return window.removeEventListener("scroll",p)}}),[i]),(0,Z.jsxs)(x,{children:[(0,Z.jsx)("button",{type:"button",onClick:function(){s.forEach((function(n){h(n)})),a()},disabled:0===s.length,children:"Delete"}),(0,Z.jsx)("ul",{children:o.slice(0,i).map((function(n){return(0,Z.jsx)(P,{recipe:n},null===n||void 0===n?void 0:n.id)}))})]})};var E=function(){return(0,Z.jsx)(p,{children:(0,Z.jsx)(D,{})})}}}]);
//# sourceMappingURL=839.ad255b74.chunk.js.map
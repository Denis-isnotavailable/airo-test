"use strict";(self.webpackChunkairo_test=self.webpackChunkairo_test||[]).push([[43],{43:function(n,i,e){e.r(i),e.d(i,{default:function(){return I}});var r,t,l,s,d,o,c,a,x=e(791),h=e(168),u=e(867),p=u.ZP.div(r||(r=(0,h.Z)(["\n    padding: 20px 30px;\n"]))),j=e(439),g=e(689),f=e(134),v=e(87),m=u.ZP.div(t||(t=(0,h.Z)(["\n    position: relative;\n    display: flex;\n    justify-content: space-between;\n    padding: 40px 10px;\n    background-color: #f3f1f1;\n\n    border: 2px solid #000000;\n    border-radius: 10px;\n"]))),b=(0,u.ZP)(v.OL)(l||(l=(0,h.Z)(["\n    position: absolute;\n    top: -2px;\n    left: -1px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 80px;\n    padding: 10px;\n    border: 2px solid #000000;\n    border-bottom-right-radius: 10px;\n    border-top-left-radius: 10px;\n    text-decoration: none;\n    color: #000000;\n    background-color: #fff;\n"]))),Z=u.ZP.div(s||(s=(0,h.Z)(["\n    width: 200px;\n    height: 500px;\n    margin-left: 30px;\n    border-radius: 5px;\n\n    background-color: inherit;\n    \n    overflow: hidden;\n\n    img {\n        width: 100%;\n        height: 100%;\n    }\n"]))),y=u.ZP.div(d||(d=(0,h.Z)(["\n    text-align: center;\n    width: calc(100% - 200px);\n\n    h2, h3, h4 {\n        margin-bottom: 10px;\n    }\n\n    h2 {\n        /* margin-top: 24px; */\n        font-size: 40px;\n    }\n\n    h3 {\n        font-size: 25px;\n    }\n\n    h4 {\n        font-size: 20px;\n    }\n\n    p, ul {\n        margin-bottom: 10px;        \n    }\n"]))),k=u.ZP.div(o||(o=(0,h.Z)(["\n    display: flex;\n    justify-content: center;\n    margin-bottom: 10px;\n\n    ul {\n        margin-left: 50px;\n        text-align: left;\n    }\n"]))),w=u.ZP.div(c||(c=(0,h.Z)(["    \n    margin-bottom: 30px;\n\n    ul {\n        display: flex;\n        justify-content: space-around;\n    }\n"]))),P=u.ZP.div(a||(a=(0,h.Z)(["\n    display: flex;\n    justify-content: space-around;\n"]))),_=e(535),S=e(184);var C=function(){var n,i,e,r,t,l,s=(0,g.UO)().id,d=(0,x.useState)({}),o=(0,j.Z)(d,2),c=o[0],a=o[1],h=(0,_.D)().recipes;(0,x.useEffect)((function(){var n=h.find((function(n){return+s===n.id}));n?(a(n),localStorage.setItem("currentRecipe",JSON.stringify(n))):a(JSON.parse(localStorage.getItem("currentRecipe")))}),[h,s]);var u=c.image_url,p=c.name,v=c.tagline,C=c.contributed_by,I=c.description,O=c.abv,z=c.ibu,R=c.target_fg,F=c.target_og,J=c.ebc,M=c.srm,N=c.ph,D=c.attenuation_level;return(0,S.jsx)(S.Fragment,{children:c&&(0,S.jsxs)(m,{children:[(0,S.jsxs)(b,{to:"/",onClick:function(){localStorage.removeItem("currentRecipe")},children:[(0,S.jsx)(f.kyg,{})," Go back"]}),(0,S.jsxs)(y,{children:[(0,S.jsx)("h2",{children:p}),(0,S.jsx)("h3",{children:v}),(0,S.jsxs)("h4",{children:["Contributed by: ",C]}),(0,S.jsx)("p",{children:I}),(0,S.jsxs)(w,{children:[(0,S.jsx)("h4",{children:"Main Characteristics:"}),(0,S.jsxs)("ul",{children:[(0,S.jsxs)("li",{children:["abv: ",(0,S.jsx)("strong",{children:O})]}),(0,S.jsxs)("li",{children:["ibu: ",(0,S.jsx)("strong",{children:z})]}),(0,S.jsxs)("li",{children:["target fg: ",(0,S.jsx)("strong",{children:R})]}),(0,S.jsxs)("li",{children:["target og: ",(0,S.jsx)("strong",{children:F})]}),(0,S.jsxs)("li",{children:["ebc: ",(0,S.jsx)("strong",{children:J})]}),(0,S.jsxs)("li",{children:["srm: ",(0,S.jsx)("strong",{children:M})]}),(0,S.jsxs)("li",{children:["ph: ",(0,S.jsx)("strong",{children:N})]}),(0,S.jsxs)("li",{children:["attenuation level: ",(0,S.jsx)("strong",{children:D})]})]})]}),(0,S.jsxs)(k,{children:[(0,S.jsx)("h4",{children:"Food Pairing:"}),(0,S.jsx)("ul",{children:null===c||void 0===c||null===(n=c.food_pairing)||void 0===n?void 0:n.map((function(n,i){return(0,S.jsx)("li",{children:n},i)}))})]}),(0,S.jsx)("h4",{children:"Ingredients:"}),(0,S.jsxs)(P,{children:[(0,S.jsxs)("div",{children:[(0,S.jsx)("h5",{children:"Malt:"}),(0,S.jsx)("ul",{children:null===c||void 0===c||null===(i=c.ingredients)||void 0===i||null===(e=i.malt)||void 0===e?void 0:e.map((function(n,i){return(0,S.jsxs)("li",{children:[n.name,": ",n.amount.value," ",n.amount.unit]},i)}))})]}),(0,S.jsxs)("div",{children:[(0,S.jsx)("h5",{children:"Hops:"}),(0,S.jsx)("ul",{children:null===c||void 0===c||null===(r=c.ingredients)||void 0===r||null===(t=r.hops)||void 0===t?void 0:t.map((function(n,i){return(0,S.jsxs)("li",{children:[n.name,": ",n.amount.value," ",n.amount.unit]},i)}))})]}),(0,S.jsxs)("div",{children:[(0,S.jsx)("h5",{children:"Yeast:"}),(0,S.jsx)("p",{children:null===c||void 0===c||null===(l=c.ingredients)||void 0===l?void 0:l.yeast})]})]})]}),(0,S.jsx)(Z,{children:(0,S.jsx)("img",{src:u,alt:"beer",width:200,height:500})})]})})};var I=function(){return(0,S.jsx)(p,{children:(0,S.jsx)(C,{})})}}}]);
//# sourceMappingURL=43.82aace2a.chunk.js.map
(this["webpackJsonpmapping-tool"]=this["webpackJsonpmapping-tool"]||[]).push([[0],{66:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n(0),r=n.n(c),i=n(9),l=n.n(i),s=n(11),o=n(108),d=n(100),j=n(95),u=n(101),m=n(109),b=n(14),h=n(102),O=n(103),f=n(104),x=n(105),p=n(106),g=n(107),v=n(99),_=n(111),y=n(110),C=n(112),S=function(e){var t=e.classes,n=r.a.useState([]),i=Object(s.a)(n,2),l=i[0],o=i[1],m=r.a.useState([]),S=Object(s.a)(m,2),M=S[0],N=S[1],G=Object(c.useState)(""),k=Object(s.a)(G,2),I=k[0],E=k[1],w=Object(c.useState)(""),A=Object(s.a)(w,2),B=A[0],H=A[1],J=Object(c.useState)([]),F=Object(s.a)(J,2),T=F[0],D=F[1],P="http://test.api2.myauto.ge/ka/";Object(c.useEffect)((function(){return fetch(P+"leadGenerator/getMans").then((function(e){return e.json()})).then((function(e){return D(e.data)}))}),[]),Object(c.useEffect)((function(){return fetch(P+"leadGenerator/getMans?type=all").then((function(e){return e.json()})).then((function(e){return N(e.data)}))}),[]),Object(c.useEffect)((function(){return fetch(P+"leadGenerator/mans").then((function(e){return e.json()})).then((function(e){return o(e.data)}))}),[]);return Object(a.jsxs)(r.a.Fragment,{children:[Object(a.jsx)(j.a,{item:!0,xs:2,children:Object(a.jsxs)(v.a,{className:t.formControl,children:[Object(a.jsx)(_.a,{id:"demo-simple-select-label",children:"MyAuto"}),Object(a.jsx)(y.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:I,onChange:function(e){return E(e.target.value)},children:l.length&&l.map((function(e){return Object(a.jsx)(C.a,{value:e.man_id,children:e.man_name},e.man_id)}))})]})}),Object(a.jsx)(j.a,{item:!0,xs:2,children:Object(a.jsxs)(v.a,{className:t.formControl,children:[Object(a.jsx)(_.a,{id:"demo-simple-select-label",children:"BidsHistory"}),Object(a.jsx)(y.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:B,onChange:function(e){return H(e.target.value)},children:M.length&&M.map((function(e){return Object(a.jsx)(C.a,{value:e.foreign_id,children:e.name},e.foreign_id)}))})]})}),Object(a.jsx)(j.a,{item:!0,xs:2,children:Object(a.jsx)(d.a,{className:t.paper,children:Object(a.jsx)(u.a,{variant:"contained",color:"primary",href:"#contained-buttons",onClick:function(){if(I&&B){var e=l.find((function(e){return e.man_id===I})),t=M.find((function(e){return e.foreign_id===B}));fetch(P+"leadGenerator/setManID",{method:"POST",body:JSON.stringify({local_id:I,foreign_id:B})}).then((function(){D([{man_name:e.man_name,name:t.name,foreign_id:t.foreign_id}].concat(Object(b.a)(T))),H(""),E("");var n=l.filter((function(t){return t!==e})),a=M.filter((function(e){return e!==t}));o(n),N(a)}))}},children:"\u10d3\u10d0\u10db\u10d4\u10de\u10d5\u10d0"})})}),Object(a.jsx)(j.a,{item:!0,xs:7,children:Object(a.jsx)(h.a,{component:d.a,children:Object(a.jsxs)(O.a,{className:t.table,"aria-label":"simple table",children:[Object(a.jsx)(f.a,{children:Object(a.jsxs)(x.a,{children:[Object(a.jsx)(p.a,{children:"MyAuto"}),Object(a.jsx)(p.a,{children:"BidsHistory"}),Object(a.jsx)(p.a,{children:"\u10ec\u10d0\u10e8\u10da\u10d0"})]})}),Object(a.jsx)(g.a,{children:T.map((function(e){return Object(a.jsxs)(x.a,{children:[Object(a.jsx)(p.a,{component:"th",scope:"row",children:e.man_name}),Object(a.jsx)(p.a,{children:e.name}),Object(a.jsx)(p.a,{style:{cursor:"pointer"},onClick:function(){return alert(e.foreign_id)},children:"x"})]},e.foreign_id)}))})]})})})]})},M=function(e){var t=e.classes,n=r.a.useState([]),i=Object(s.a)(n,2),l=i[0],o=i[1],m=r.a.useState([]),S=Object(s.a)(m,2),M=S[0],N=S[1],G=Object(c.useState)(""),k=Object(s.a)(G,2),I=k[0],E=k[1],w=Object(c.useState)(""),A=Object(s.a)(w,2),B=A[0],H=A[1],J=Object(c.useState)([]),F=Object(s.a)(J,2),T=F[0],D=F[1],P=Object(c.useState)([]),W=Object(s.a)(P,2),L=W[0],q=W[1],z=Object(c.useState)(""),K=Object(s.a)(z,2),Q=K[0],R=K[1],U=Object(c.useState)(""),V=Object(s.a)(U,2),X=V[0],Y=V[1],Z=Object(c.useState)([]),$=Object(s.a)(Z,2),ee=$[0],te=$[1],ne="http://test.api2.myauto.ge/ka/";Object(c.useEffect)((function(){return fetch(ne+"leadGenerator/getMappedModels").then((function(e){return e.json()})).then((function(e){return te(e.data)}))}),[]),Object(c.useEffect)((function(){return fetch(ne+"leadGenerator/getMans?type=eveything").then((function(e){return e.json()})).then((function(e){return N(e.data)}))}),[]),Object(c.useEffect)((function(){return fetch(ne+"leadGenerator/mans").then((function(e){return e.json()})).then((function(e){return o(e.data)}))}),[]);return Object(a.jsxs)(r.a.Fragment,{children:[Object(a.jsx)(j.a,{item:!0,xs:2,children:Object(a.jsxs)(v.a,{className:t.formControl,children:[Object(a.jsx)(_.a,{id:"demo-simple-select-label",children:"MyAuto"}),Object(a.jsx)(y.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:I,onChange:function(e){return t=e.target.value,E(t),void fetch("".concat(ne,"leadGenerator/getLocalModels?man_id=").concat(t)).then((function(e){return e.json()})).then((function(e){return D(e.data)}));var t},children:l.length&&l.map((function(e){return Object(a.jsx)(C.a,{value:e.man_id,children:e.man_name},e.man_id)}))})]})}),Object(a.jsx)(j.a,{item:!0,xs:2,children:Object(a.jsxs)(v.a,{className:t.formControl,children:[Object(a.jsx)(_.a,{id:"demo-simple-select-label",children:"Models"}),Object(a.jsx)(y.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:Q,onChange:function(e){return R(e.target.value)},children:T.length&&T.map((function(e){return Object(a.jsx)(C.a,{value:e.model_id,children:e.model_name},e.model_id)}))})]})}),Object(a.jsx)(j.a,{item:!0,xs:2,children:Object(a.jsxs)(v.a,{className:t.formControl,children:[Object(a.jsx)(_.a,{id:"demo-simple-select-label",children:"BidsHistory"}),Object(a.jsx)(y.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:B,onChange:function(e){return t=e.target.value,H(t),void fetch("".concat(ne,"leadGenerator/getForeignModels?man_id=").concat(t)).then((function(e){return e.json()})).then((function(e){return q(e.data)}));var t},children:M.length&&M.map((function(e){return Object(a.jsx)(C.a,{value:e.foreign_id,children:e.name},e.foreign_id)}))})]})}),Object(a.jsx)(j.a,{item:!0,xs:2,children:Object(a.jsxs)(v.a,{className:t.formControl,children:[Object(a.jsx)(_.a,{id:"demo-simple-select-label",children:"Models"}),Object(a.jsx)(y.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:X,onChange:function(e){return Y(e.target.value)},children:L.length&&L.map((function(e){return Object(a.jsx)(C.a,{value:e,children:e.name},e.slug)}))})]})}),Object(a.jsx)(j.a,{item:!0,xs:2,children:Object(a.jsx)(d.a,{className:t.paper,children:Object(a.jsx)(u.a,{variant:"contained",color:"primary",href:"#contained-buttons",onClick:function(){if(Q&&X){var e=T.find((function(e){return e.model_id===Q})),t=L.find((function(e){return e.slug===X.slug}));fetch(ne+"leadGenerator/setModelID",{method:"POST",body:JSON.stringify({man_id:B,model_name:X.name,local_id:Q,slug:X.slug})}).then((function(){te([{model_name:e.model_name,name:t.name,slug:t.slug}].concat(Object(b.a)(ee))),Y(""),R("");var n=T.filter((function(t){return t!==e})),a=L.filter((function(e){return e!==t}));D(n),q(a)}))}},children:"\u10d3\u10d0\u10db\u10d4\u10de\u10d5\u10d0"})})}),Object(a.jsx)(j.a,{item:!0,xs:7,children:Object(a.jsx)(h.a,{component:d.a,children:Object(a.jsxs)(O.a,{className:t.table,"aria-label":"simple table",children:[Object(a.jsx)(f.a,{children:Object(a.jsxs)(x.a,{children:[Object(a.jsx)(p.a,{children:"MyAuto"}),Object(a.jsx)(p.a,{children:"BidsHistory"}),Object(a.jsx)(p.a,{children:"\u10ec\u10d0\u10e8\u10da\u10d0"})]})}),Object(a.jsx)(g.a,{children:ee.map((function(e){return Object(a.jsxs)(x.a,{children:[Object(a.jsx)(p.a,{component:"th",scope:"row",children:e.model_name}),Object(a.jsx)(p.a,{children:e.name}),Object(a.jsx)(p.a,{style:{cursor:"pointer"},onClick:function(){return alert(e.slug)},children:"x"})]},e.slug)}))})]})})})]})},N=Object(o.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}}));function G(){var e=Object(c.useState)("mans"),t=Object(s.a)(e,2),n=t[0],r=t[1],i=N();return Object(a.jsx)(m.a,{maxWidth:"lg",children:Object(a.jsx)("div",{className:i.root,children:Object(a.jsxs)(j.a,{container:!0,spacing:3,children:[Object(a.jsx)(j.a,{item:!0,xs:6,children:Object(a.jsx)(d.a,{className:i.paper,children:Object(a.jsx)(u.a,{variant:"contained",color:"primary",href:"#contained-buttons",onClick:function(){return r("mans")},children:"\u10db\u10ec\u10d0\u10e0\u10db\u10dd\u10d4\u10d1\u10da\u10d4\u10d1\u10d8"})})}),Object(a.jsx)(j.a,{item:!0,xs:6,children:Object(a.jsx)(d.a,{className:i.paper,children:Object(a.jsx)(u.a,{variant:"contained",color:"primary",href:"#contained-buttons",onClick:function(){return r("models")},children:"\u10db\u10dd\u10d3\u10d4\u10da\u10d4\u10d1\u10d8"})})}),"mans"===n?Object(a.jsx)(S,{classes:i}):Object(a.jsx)(M,{classes:i})]})})})}l.a.render(Object(a.jsx)(G,{}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.b2d73021.chunk.js.map
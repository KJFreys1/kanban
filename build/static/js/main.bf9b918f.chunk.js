(this.webpackJsonpkanban=this.webpackJsonpkanban||[]).push([[0],{33:function(e,a,t){e.exports=t(47)},44:function(e,a,t){},47:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),r=t(15),l=t.n(r),o=t(26),i=t(5);function s(e){return n.a.createElement("div",{className:"lp-body"},n.a.createElement("div",{className:"lp-center"},n.a.createElement("div",{className:"float-left"},n.a.createElement("h1",null,"Kanban Board"),n.a.createElement("p",null,"Organize your life for a minty-fresh mind"),n.a.createElement("hr",null),n.a.createElement("p",null,"This simple, yet powerful tool to help manage your tasks."),n.a.createElement("button",{className:"call-to-action",onClick:function(){e.history.push("/dashboard")}},"Get Started")),n.a.createElement("div",{className:"float-right img"})))}var d=t(13),m=t(10),u=t(1),b=t(4),f=t(14),O=t(48),p=t(21),j=t.n(p),g=t(19),h=t(20),v=t(16);var E=function(e){var a=function(e,a){a.action()},t=function(){var a={card:e.task,column:e.column};e.toggleModal(a)},c={backgroundColor:e.pref.color.bgCard,color:e.pref.color.cardText};return n.a.createElement(n.a.Fragment,null,n.a.createElement(v.b,{id:e.task.id},n.a.createElement(f.b,{draggableId:e.task.id,index:e.index},(function(a,r){var l=Object(u.a)(Object(u.a)({},a.draggableProps),{},{style:Object(u.a)(Object(u.a)({},a.draggableProps.style),c)});return n.a.createElement("div",Object.assign({className:"t-box ".concat(r.isDragging?"fade-t-box":null)},l,a.dragHandleProps,{ref:a.innerRef,onClick:t}),e.task.content,n.a.createElement("div",null,e.task.image?n.a.createElement(g.c,{style:{marginRight:"8px",marginTop:"5px"}}):null,e.task.description?n.a.createElement(g.b,{style:{marginRight:"8px",marginTop:"5px"}}):null))}))),n.a.createElement(v.a,{id:e.task.id,className:"context-menu"},n.a.createElement(v.c,{className:"context-item",data:{action:t,id:e.task.id},onClick:a},"Edit"),n.a.createElement(v.c,{className:"context-item",data:{action:function(){var a={card:{id:e.task.id,content:e.task.content,description:e.task.description},column:{id:e.column.id}};e.handleDeleteCard(a)},id:e.task.id},onClick:a},"Delete"),e.columnIndex<e.numColumns-1?n.a.createElement(v.c,{className:"context-item",data:{action:function(){e.handleMoveCard(e.task,e.columnIndex)},id:e.task.id},onClick:a},"Move Right"):null))};var k=function(e){var a=Object(c.useState)(""),t=Object(b.a)(a,2),r=t[0],l=t[1],o=Object(c.useState)(e.column.title),i=Object(b.a)(o,2),s=i[0],d=i[1],m=Object(c.useState)(!0),p=Object(b.a)(m,2),j=p[0],v=p[1],k=Object(c.useState)(!1),C=Object(b.a)(k,2),y=C[0],N=C[1],x=Object(c.useState)({backgroundColor:e.pref.color.bgSecondary}),S=Object(b.a)(x,2),w=S[0],I=S[1],D=Object(c.useState)({color:e.pref.color.text}),T=Object(b.a)(D,2),P=T[0],L=T[1],R=Object(c.useState)(!1),M=Object(b.a)(R,2),F=M[0],A=M[1];Object(c.useEffect)((function(){I({backgroundColor:e.pref.color.bgSecondary}),L({color:e.pref.color.text})}),[e.pref]);var B=Object(c.useRef)(null),_=Object(c.useRef)(null),J=function(){v(!0),e.toggleModal({column:e.column})},H=function(){v(!0);var a={column:{id:e.column.id}};e.handleDeleteList(a)},Y=function(){var a={column:{id:e.column.id}};e.handleReorderList(a,"newest")},z=function(){var a={column:{id:e.column.id}};e.handleReorderList(a,"oldest")},K=function(){v(!1)},G=function(e){l(e.target.value)},U=function(a){if(a&&a.preventDefault(),""!==r){var t={card:{id:Object(O.a)(),content:r},column:{id:e.column.id}};e.handleNewCard(t),l("")}},V=function(){N(!0),L({color:e.pref.color.cardText}),A(!0)},q=function(){N(!1),L({color:e.pref.color.text}),A(!1),U()},Q=function(){L({color:e.pref.color.cardText})},W=function(){F||L({color:e.pref.color.text})};Object(c.useEffect)((function(){y&&B.current.scrollIntoView({behavior:"smooth"})}),[y]),Object(c.useEffect)((function(){j||_.current.focus()}),[j]);var X=n.a.createElement("form",{onSubmit:function(a){a.preventDefault();var t={column:{id:e.column.id,title:s}};e.handleEditList(t),v((function(e){return!e}))}},n.a.createElement("input",{ref:_,className:"col-title-input",type:"text",value:s,onChange:function(e){d(e.target.value)},onBlur:function(){v(!0),d(e.column.title)}})),Z=n.a.createElement("button",{type:"submit",style:{backgroundColor:e.pref.color.highlight}},"Submit"),$={backgroundColor:e.pref.color.bgSecondary};return n.a.createElement(f.b,{draggableId:e.column.id,index:e.index},(function(a){var t=Object(u.a)(Object(u.a)({},a.draggableProps),{},{style:Object(u.a)(Object(u.a)({},a.draggableProps.style),$)});return n.a.createElement("div",Object.assign({className:"column"},t,{ref:a.innerRef}),n.a.createElement("header",Object.assign({},a.dragHandleProps,{className:"my-col-head"}),j?n.a.createElement("h1",{className:"col-title",onClick:K},e.column.title):X,n.a.createElement("span",{className:"spacer"}),n.a.createElement("div",{className:"dropdown"},n.a.createElement("button",{className:"dropbtn",style:Object(u.a)(Object(u.a)({},w),{},{color:e.pref.color.text}),onMouseOver:function(){return I({backgroundColor:e.pref.color.bgPrimary})},onMouseOut:function(){return I({backgroundColor:e.pref.color.bgSecondary})}},n.a.createElement(g.a,null)),n.a.createElement("div",{className:"dropdown-content"},n.a.createElement("div",{className:"drop-select",onClick:J},"New Card"),n.a.createElement("div",{className:"drop-select",onClick:K},"Edit List"),n.a.createElement("div",{className:"drop-select",onClick:H},"Discard List"),n.a.createElement("div",{className:"drop-break"}),n.a.createElement("div",{className:"drop-select",onClick:z},"Newest First"),n.a.createElement("div",{className:"drop-select",onClick:Y},"Oldest First")))),n.a.createElement("div",{className:"t-container-outer"},n.a.createElement(f.c,{droppableId:e.column.id,type:"task"},(function(a){return n.a.createElement("div",Object.assign({className:"t-container",ref:a.innerRef},a.droppableProps),e.tasks.map((function(a,t){return n.a.createElement(E,{key:a.id,pref:e.pref,task:a,index:t,column:e.column,columnIndex:e.index,numColumns:e.numColumns,handleMoveCard:e.handleMoveCard,handleEditCard:e.handleEditCard,handleDeleteCard:e.handleDeleteCard,toggleModal:e.toggleModal})})),a.placeholder)}))),n.a.createElement("span",{className:"spacer"}),n.a.createElement("form",{className:"new-card-form",style:{backgroundColor:e.pref.color.bgSecondary},onSubmit:U},n.a.createElement(h.a,{value:y||r.length>0?r:"+ Add new card",placeholder:"+ Add new card",style:Object(u.a)({border:"1px solid ".concat(e.pref.color.bgSecondary)},P),onChange:G,onFocus:V,onBlur:q,onMouseOver:Q,onMouseLeave:W}),y?Z:null),n.a.createElement("span",{ref:B}))}))};function C(e){var a=e.data,t=e.close,r=e.addCard,l=e.editCard,o=e.deleteCard,i=e.pref,s=Object(c.useState)(a.card?a.card.content:""),d=Object(b.a)(s,2),m=d[0],f=d[1],p=Object(c.useState)(a.card?a.card.description:""),j=Object(b.a)(p,2),g=j[0],v=j[1],E=Object(c.useState)(a.card?a.card.image:null),k=Object(b.a)(E,2),C=k[0],y=k[1],N=function(e){return new Promise((function(a,t){var c=new FileReader;c.onload=function(){return a(c.result)},c.onerror=function(e){return t(e)},c.readAsDataURL(e)}))};return n.a.createElement("div",{className:"card-modal-outer"},n.a.createElement("div",{className:"card-modal-inner",style:{backgroundColor:i.color.bgSecondary}},n.a.createElement("h1",{"aria-hidden":"true",className:"close-modal",onClick:t},"\xd7"),n.a.createElement("form",{className:"card-modal-form",onSubmit:function(e){if(e.preventDefault(),""!==m){if(a.card){var c={card:Object(u.a)(Object(u.a)({},a.card),{},{content:m,description:g,image:C,updated:(new Date).toJSON().slice(0,10).replace(/-/g,"/")})};l(c)}else{var n={card:{id:Object(O.a)(),content:m,description:g},column:{id:a.column.id}};r(n)}t()}else t()}},n.a.createElement("div",{className:"modal-top"},n.a.createElement("label",{htmlFor:"content"},"From the ",a.column.title," list:"),n.a.createElement("span",{className:"spacer"})),n.a.createElement(h.a,{className:"modal-ta-content",name:"content",placeholder:"Click to add content...",value:m,onChange:function(e){f(e.target.value)}}),n.a.createElement("label",{htmlFor:"description"},"Description"),n.a.createElement(h.a,{className:"modal-ta-desc",name:"description",placeholder:"Click to add description...",value:g,onChange:function(e){v(e.target.value)},minRows:2}),a.card&&a.card.date?n.a.createElement("p",null,"Created on ",a.card.date):null,a.card&&a.card.updated?n.a.createElement("p",null,"Last edited on ",a.card.updated):null,C?n.a.createElement("img",{src:C,height:200,width:200,style:{marginTop:"20px"},alt:"uploaded from local storage"}):null,n.a.createElement("input",{type:"file",id:"imageFile",name:"imageFile",onChange:function(e){var a=e.target.files[0];N(a).then((function(e){y(e),console.debug("file stored",e)}))}}),n.a.createElement("div",{className:"btn-container"},n.a.createElement("button",{className:"submit-btn",type:"submit",style:{backgroundColor:i.color.highlight}},"Save Information"),a.card?n.a.createElement("button",{className:"delete-btn",style:{backgroundColor:i.color.warning},onClick:function(){o(a),t()}},"Delete Card"):null))))}function y(e){var a=e.data.recycle.map((function(a,t){var c=e.data.columns[a];return n.a.createElement("div",{key:t,className:"recycle-item",style:{color:e.pref.color.cardText}},n.a.createElement("div",{className:"recycle-card-title"},c.title),n.a.createElement("span",{className:"spacer"}),n.a.createElement("div",{className:"recycle-card-num"},"Cards: ",c.taskIds.length),n.a.createElement("div",{className:"button-container"},n.a.createElement("button",{className:"retrieve-btn",style:{backgroundColor:e.pref.color.highlight},onClick:function(){return function(a){var t={column:a};e.retrieveList(t),e.close()}(c)}},"Retrieve List"),n.a.createElement("button",{className:"delete-btn",style:{backgroundColor:e.pref.color.warning},onClick:function(){return function(a){var t={column:a};e.removeList(t)}(c)}},"Delete List")))}));return n.a.createElement("div",{className:"card-modal-outer"},n.a.createElement("div",{className:"card-modal-inner",style:{backgroundColor:e.pref.color.bgSecondary}},n.a.createElement("div",{className:"recycle-head"},n.a.createElement("h1",{className:"recycle-title"},"Recycle Bin"),n.a.createElement("span",{className:"spacer"}),n.a.createElement("div",{"aria-hidden":"true",className:"close-modal",onClick:e.close},"\xd7")),n.a.createElement("div",{className:"recycle-item-container"},a),a.length?null:n.a.createElement("p",{className:"recycle-msg"},"Nothing in the recycle bin")))}function N(e){var a={backgroundColor:e.pref.color.bgCard,color:e.pref.color.cardText};return n.a.createElement("div",{className:"alert-clear",style:e.show?Object(u.a)(Object(u.a)({},a),{},{transform:"translateY(0)"}):Object(u.a)(Object(u.a)({},a),{},{transform:"translateY(-300px)",boxShadow:"none"})},n.a.createElement("h1",null,"Are you sure you want to clear the board?"),n.a.createElement("p",null,"All information stored on this board will be lost forever."),n.a.createElement("div",{className:"alert-btn-grp"},n.a.createElement("button",{onClick:function(){e.clear(),e.close()},style:{backgroundColor:e.pref.color.highlight}},"Yes"),n.a.createElement("button",{onClick:function(){e.close()},style:{backgroundColor:e.pref.color.warning}},"No")))}t(44);var x={tasks:{},columns:{"column-1":{id:"column-1",title:"To Do",taskIds:[]},"column-2":{id:"column-2",title:"In Progress",taskIds:[]},"column-3":{id:"column-3",title:"Finished",taskIds:[]}},columnOrder:["column-1","column-2","column-3"],recycle:[]},S={mint:{text:"#081c15",bgPrimary:"#95d5b2",bgSecondary:"#d8f3dc",bgCard:"#ffffff",cardText:"#001427",highlight:"#2d6a4f",warning:"#d00000",projTitle:"#ffffff"},ocean:{text:"#03045e",bgPrimary:"#00b4d8",bgSecondary:"#90e0ef",bgCard:"#ffffff",cardText:"#001427",highlight:"#023e8a",warning:"#d00000",projTitle:"#ffffff"},punk:{text:"#ffffff",bgPrimary:"#002855",bgSecondary:"#f72585",bgCard:"#ffffff",cardText:"#001427",highlight:"#8900f2",warning:"#6a040f"},pallette:{text:"#0f4c5c",bgPrimary:"#d8e2dc",bgSecondary:"#f4acb7",bgCard:"#ffffff",cardText:"#001427",highlight:"#6d6875",warning:"#d00000",projTitle:"#ffffff"},rustic:{text:"#2b2d42",bgPrimary:"#8a817c",bgSecondary:"#bcb8b1",bgCard:"#ffffff",cardText:"#001427",highlight:"#463f3a",warning:"#a4161a",projTitle:"#ffffff"}},w={color:S.mint};function I(e){var a=Object(c.useState)(j.a.get("mainData")||x),t=Object(b.a)(a,2),r=t[0],l=t[1],o=Object(c.useState)(j.a.get("preferences")||w),i=Object(b.a)(o,2),s=i[0],p=i[1],g=Object(c.useState)(""),h=Object(b.a)(g,2),v=h[0],E=h[1],I=Object(c.useState)({backgroundColor:s.color.bgSecondary,color:s.color.text}),D=Object(b.a)(I,2),T=D[0],P=D[1],L=Object(c.useState)(!1),R=Object(b.a)(L,2),M=R[0],F=R[1],A=Object(c.useState)(!1),B=Object(b.a)(A,2),_=B[0],J=B[1],H=Object(c.useState)(!1),Y=Object(b.a)(H,2),z=Y[0],K=Y[1],G=Object(c.useState)(!1),U=Object(b.a)(G,2),V=U[0],q=U[1],Q=Object(c.useState)(),W=Object(b.a)(Q,2),X=W[0],Z=W[1],$=Object(c.useState)(!1),ee=Object(b.a)($,2),ae=ee[0],te=ee[1];Object(c.useEffect)((function(){j.a.set("mainData",r)}),[r]),Object(c.useEffect)((function(){j.a.set("preferences",s),P({backgroundColor:s.color.bgSecondary,color:s.color.text})}),[s]);var ce=function(e){Z(e||null),J((function(e){return!e}))},ne=function(){K((function(e){return!e}))},re=function(){q((function(e){return!e}))},le=function(e){var a=Object(u.a)(Object(u.a)({},r),{},{tasks:Object(u.a)(Object(u.a)({},r.tasks),{},Object(m.a)({},e.card.id,{id:e.card.id,content:e.card.content,description:e.card.description,date:(new Date).toJSON().slice(0,10).replace(/-/g,"/"),_date:(new Date).getTime()})),columns:Object(u.a)(Object(u.a)({},r.columns),{},Object(m.a)({},e.column.id,Object(u.a)(Object(u.a)({},r.columns[e.column.id]),{},{taskIds:[].concat(Object(d.a)(r.columns[e.column.id].taskIds),[e.card.id])})))});l(a)},oe=function(e,a){var t,c=Object(u.a)({},r.columns[r.columnOrder[a]]),n=Object(u.a)({},r.columns[r.columnOrder[a+1]]),o=Object(d.a)(c.taskIds).filter((function(a){return a!==e.id}));n.taskIds.push(e.id);var i=Object(u.a)(Object(u.a)({},r),{},{columns:Object(u.a)(Object(u.a)({},r.columns),{},(t={},Object(m.a)(t,c.id,Object(u.a)(Object(u.a)({},c),{},{taskIds:o})),Object(m.a)(t,n.id,n),t))});l(i)},ie=function(e){var a=Object(u.a)(Object(u.a)({},r),{},{tasks:Object(u.a)(Object(u.a)({},r.tasks),{},Object(m.a)({},e.card.id,Object(u.a)({},e.card)))});l(a)},se=function(e){var a=Object(u.a)({},r.columns[e.column.id]);a.taskIds.splice(a.taskIds.indexOf(e.card.id),1);var t=Object(u.a)({},r.tasks);delete t[e.card.id];var c=Object(u.a)(Object(u.a)({},r),{},{tasks:t,columns:Object(u.a)(Object(u.a)({},r.columns),{},Object(m.a)({},e.column.id,a))});l(c)},de=function(e){var a=Object(u.a)(Object(u.a)({},r),{},{columns:Object(u.a)(Object(u.a)({},r.columns),{},Object(m.a)({},e.column.id,Object(u.a)(Object(u.a)({},r.columns[e.column.id]),{},{title:e.column.title})))});l(a)},me=function(e){var a=Object(d.a)(r.columnOrder).filter((function(a){return a!==e.column.id})),t=Object(d.a)(r.recycle);t.push(e.column.id);var c=Object(u.a)(Object(u.a)({},r),{},{columnOrder:a,recycle:t});l(c)},ue=function(e,a){var t=Object(u.a)({},r.tasks),c=Object(u.a)({},r.columns[e.column.id]);if("newest"===a)c.taskIds.sort((function(e,a){return t[e]._date-t[a]._date}));else{if("oldest"!==a)return;c.taskIds.sort((function(e,a){return t[a]._date-t[e]._date}))}var n=Object(u.a)(Object(u.a)({},r),{},{columns:Object(u.a)(Object(u.a)({},r.columns),{},Object(m.a)({},e.column.id,c))});l(n)},be=function(e){p(Object(u.a)(Object(u.a)({},s),{},{color:S[e]})),te(!1)},fe=r.columnOrder.map((function(e,a){var t=r.columns[e],c=t.taskIds.map((function(e){return r.tasks[e]}));return n.a.createElement(k,{key:t.id,pref:s,column:t,tasks:c,index:a,numColumns:r.columnOrder.length,handleNewCard:le,handleMoveCard:oe,handleEditCard:ie,handleDeleteCard:se,handleEditList:de,handleReorderList:ue,handleDeleteList:me,toggleModal:ce})}));return n.a.createElement("div",{id:"dashboard",style:{backgroundColor:s.color.bgPrimary,color:s.color.text}},_?n.a.createElement(C,{data:X,pref:s,close:ce,addCard:le,editCard:ie,deleteCard:se}):null,z?n.a.createElement(y,{data:r,pref:s,close:ne,retrieveList:function(e){var a=Object(d.a)(r.recycle).filter((function(a){return a!==e.column.id})),t=Object(d.a)(r.columnOrder);t.push(e.column.id);var c=Object(u.a)(Object(u.a)({},r),{},{columnOrder:t,recycle:a});l(c)},removeList:function(e){var a=Object(d.a)(r.recycle).filter((function(a){return a!==e.column.id})),t=Object(u.a)({},r.tasks),c=Object(u.a)({},r.columns);c[e.column.id].taskIds.forEach((function(e){delete t[e]})),delete c[e.column.id];var n=Object(u.a)(Object(u.a)({},r),{},{tasks:t,columns:c,recycle:a});l(n)}}):null,n.a.createElement(N,{show:V,close:re,clear:function(){l(x)},pref:s}),n.a.createElement("header",{className:"dash-header",style:{backgroundColor:s.color.highlight}},n.a.createElement("h2",{className:"dash-title",style:{color:s.color.projTitle}},"Kanban"),n.a.createElement("span",{className:"spacer"}),n.a.createElement("div",{className:"ham-drop"},n.a.createElement("div",{className:"hamburger ".concat(ae?"ham-active":null),onClick:function(){te((function(e){return!e}))}},n.a.createElement("div",{className:"ham-line ham1"}),n.a.createElement("div",{className:"ham-line ham2"}),n.a.createElement("div",{className:"ham-line ham3"})),n.a.createElement("div",{className:"ham-content ".concat(ae?null:"ham-content-hide")},n.a.createElement("div",{className:"ham-select",onClick:function(){te(!1),function(){var e=Object(O.a)(),a=Object(u.a)(Object(u.a)({},r),{},{columns:Object(u.a)(Object(u.a)({},r.columns),{},Object(m.a)({},e,{id:e,title:"Click to Edit",taskIds:[]})),columnOrder:[].concat(Object(d.a)(r.columnOrder),[e])});l(a)}()}},"New List"),n.a.createElement("div",{className:"ham-select",onClick:function(){te(!1),ne()}},"Recylce Bin"),n.a.createElement("div",{className:"ham-select ham-space"},n.a.createElement("div",null,"Preferences"),n.a.createElement("div",{className:"pref-content"},n.a.createElement("div",{className:"ham-select",onClick:function(){return be("mint")}},"Mint"),n.a.createElement("div",{className:"ham-select",onClick:function(){return be("ocean")}},"Ocean"),n.a.createElement("div",{className:"ham-select",onClick:function(){return be("punk")}},"Punk"),n.a.createElement("div",{className:"ham-select",onClick:function(){return be("pallette")}},"Pallette"),n.a.createElement("div",{className:"ham-select",onClick:function(){return be("rustic")}},"Rustic"))),n.a.createElement("div",{className:"ham-select",onClick:function(){te(!1),re()}},"Clear Board"),n.a.createElement("div",{className:"ham-select",onClick:function(){e.history.push("/")}},"Back Home")))),n.a.createElement(f.a,{onDragEnd:function(e){var a,t=e.destination,c=e.source,n=e.draggableId,o=e.type;if(t&&(t.droppableId!==c.droppableId||t.index!==c.index))if("column"!==o){var i=r.columns[c.droppableId],s=r.columns[t.droppableId];if(i!==s){var d=Array.from(i.taskIds);d.splice(c.index,1);var b=Object(u.a)(Object(u.a)({},i),{},{taskIds:d}),f=Array.from(s.taskIds);f.splice(t.index,0,n);var O=Object(u.a)(Object(u.a)({},s),{},{taskIds:f}),p=Object(u.a)(Object(u.a)({},r),{},{columns:Object(u.a)(Object(u.a)({},r.columns),{},(a={},Object(m.a)(a,b.id,b),Object(m.a)(a,O.id,O),a))});l(p)}else{var j=Array.from(i.taskIds);j.splice(c.index,1),j.splice(t.index,0,n);var g=Object(u.a)(Object(u.a)({},i),{},{taskIds:j}),h=Object(u.a)(Object(u.a)({},r),{},{columns:Object(u.a)(Object(u.a)({},r.columns),{},Object(m.a)({},g.id,g))});l(h)}}else{var v=Array.from(r.columnOrder);v.splice(c.index,1),v.splice(t.index,0,n);var E=Object(u.a)(Object(u.a)({},r),{},{columnOrder:v});l(E)}}},n.a.createElement("div",{className:"drop-container"},r.columnOrder.length?n.a.createElement(f.c,{droppableId:"all-columns",direction:"horizontal",type:"column"},(function(e){return n.a.createElement("div",Object.assign({className:"col-container"},e.droppableProps,{ref:e.innerRef}),fe,e.placeholder)})):null,n.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a=Object(O.a)(),t=Object(u.a)(Object(u.a)({},r),{},{columns:Object(u.a)(Object(u.a)({},r.columns),{},Object(m.a)({},a,{id:a,title:v,taskIds:[]})),columnOrder:[].concat(Object(d.a)(r.columnOrder),[a])});l(t),E("")},className:"new-list-form"},n.a.createElement("input",{className:"new-list-parabtn",style:T,value:M||v.length>0?v:"+ Add new list",placeholder:"+ Add new list",onFocus:function(){F(!0),P({backgroundColor:s.color.bgCard,color:s.color.cardText})},onBlur:function(){F(!1),P({backgroundColor:s.color.bgSecondary,color:s.color.text})},onChange:function(e){return E(e.target.value)}})),n.a.createElement("div",{className:"col-container-space"}))))}function D(){return n.a.createElement("main",null,n.a.createElement(i.a,{path:"/",exact:!0,render:function(e){return n.a.createElement(s,e)}}),n.a.createElement(i.a,{path:"/dashboard",render:function(e){return n.a.createElement(I,e)}}))}t(46);l.a.render(n.a.createElement(o.a,null,n.a.createElement(D,null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.bf9b918f.chunk.js.map
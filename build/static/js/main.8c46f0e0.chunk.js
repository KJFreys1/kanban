(this.webpackJsonpkanban=this.webpackJsonpkanban||[]).push([[0],{15:function(e,a,t){e.exports=t(27)},26:function(e,a,t){},27:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(4),s=t.n(r),l=t(11),o=t(2),d=t(1),i=t(7),u=t(3),m=t(28);var b=function(e){return c.a.createElement(u.b,{draggableId:e.task.id,index:e.index},(function(a,t){return c.a.createElement("div",Object.assign({className:"t-box ".concat(t.isDragging?"blue":null)},a.draggableProps,a.dragHandleProps,{ref:a.innerRef}),e.task.content)}))};var O=function(e){var a=Object(n.useState)(""),t=Object(i.a)(a,2),r=t[0],s=t[1],l=function(e){s(e.target.value)},o=function(a){a.preventDefault();var t={card:{id:Object(m.a)(),content:r},column:{id:e.column.id}};e.handleNewCard(t),s("")};return c.a.createElement(u.b,{draggableId:e.column.id,index:e.index},(function(a){return c.a.createElement("div",Object.assign({className:"column"},a.draggableProps,{ref:a.innerRef}),c.a.createElement("header",Object.assign({},a.dragHandleProps,{className:"col-header"}),c.a.createElement("h1",{className:"col-title"},e.column.title),c.a.createElement("span",{className:"spacer"}),c.a.createElement("button",{className:"add-task-btn"},"+")),c.a.createElement(u.c,{droppableId:e.column.id,type:"task"},(function(a,t){return c.a.createElement("div",Object.assign({className:"t-container ".concat(t.isDraggingOver?"gray":null),ref:a.innerRef},a.droppableProps),e.tasks.map((function(e,a){return c.a.createElement(b,{key:e.id,task:e,index:a})})),a.placeholder)})),c.a.createElement("form",{onSubmit:o},c.a.createElement("textarea",{value:r,onChange:l}),c.a.createElement("button",{type:"sumbit"},"Submit")))}))},k=(t(26),{tasks:{"task-1":{id:"task-1",content:"Take out trash"},"task-2":{id:"task-2",content:"Clean dishes"},"task-3":{id:"task-3",content:"Take dogs out"},"task-4":{id:"task-4",content:"Make bed"},"task-5":{id:"task-5",content:"Shower"},"task-6":{id:"task-6",content:"Laundry"}},columns:{"column-1":{id:"column-1",title:"To Do",taskIds:["task-1","task-2","task-3","task-4"]},"column-2":{id:"column-2",title:"In Progress",taskIds:["task-5","task-6"]},"column-3":{id:"column-3",title:"Finished",taskIds:[]}},columnOrder:["column-1","column-2","column-3"]});var j=function(){var e=Object(n.useState)(k),a=Object(i.a)(e,2),t=a[0],r=a[1],s=function(e){var a=Object(d.a)(Object(d.a)({},t),{},{tasks:Object(d.a)(Object(d.a)({},t.tasks),{},Object(o.a)({},e.card.id,{id:e.card.id,content:e.card.content})),columns:Object(d.a)(Object(d.a)({},t.columns),{},Object(o.a)({},e.column.id,Object(d.a)(Object(d.a)({},t.columns[e.column.id]),{},{taskIds:[].concat(Object(l.a)(t.columns[e.column.id].taskIds),[e.card.id])})))});r(a)},b=t.columnOrder.map((function(e,a){var n=t.columns[e],r=n.taskIds.map((function(e){return t.tasks[e]}));return c.a.createElement(O,{key:n.id,column:n,tasks:r,index:a,handleNewCard:s})}));return c.a.createElement("div",{id:"dashboard"},c.a.createElement("header",{className:"dash-header"},c.a.createElement("button",{onClick:function(){var e=Object(m.a)(),a=Object(d.a)(Object(d.a)({},t),{},{columns:Object(d.a)(Object(d.a)({},t.columns),{},Object(o.a)({},e,{id:e,title:"Click to Edit",taskIds:[]})),columnOrder:[].concat(Object(l.a)(t.columnOrder),[e])});r(a)}},"Add List")),c.a.createElement(u.a,{onDragEnd:function(e){var a,n=e.destination,c=e.source,s=e.draggableId,l=e.type;if(n&&(n.droppableId!==c.droppableId||n.index!==c.index))if("column"!==l){var i=t.columns[c.droppableId],u=t.columns[n.droppableId];if(i!==u){var m=Array.from(i.taskIds);m.splice(c.index,1);var b=Object(d.a)(Object(d.a)({},i),{},{taskIds:m}),O=Array.from(u.taskIds);O.splice(n.index,0,s);var k=Object(d.a)(Object(d.a)({},u),{},{taskIds:O}),j=Object(d.a)(Object(d.a)({},t),{},{columns:Object(d.a)(Object(d.a)({},t.columns),{},(a={},Object(o.a)(a,b.id,b),Object(o.a)(a,k.id,k),a))});r(j)}else{var p=Array.from(i.taskIds);p.splice(c.index,1),p.splice(n.index,0,s);var f=Object(d.a)(Object(d.a)({},i),{},{taskIds:p}),g=Object(d.a)(Object(d.a)({},t),{},{columns:Object(d.a)(Object(d.a)({},t.columns),{},Object(o.a)({},f.id,f))});r(g)}}else{var v=Array.from(t.columnOrder);v.splice(c.index,1),v.splice(n.index,0,s);var E=Object(d.a)(Object(d.a)({},t),{},{columnOrder:v});r(E)}}},c.a.createElement(u.c,{droppableId:"all-columns",direction:"horizontal",type:"column"},(function(e){return c.a.createElement("div",Object.assign({className:"col-container"},e.droppableProps,{ref:e.innerRef}),b,e.placeholder)}))))};s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(j,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.8c46f0e0.chunk.js.map
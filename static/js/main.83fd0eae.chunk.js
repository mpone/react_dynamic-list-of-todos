(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{11:function(e,t,a){e.exports=a(23)},17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(9),c=a.n(s),o=a(5),l=a.n(o),i=a(10),u=a(1),d=a(2),m=a(4),p=a(3),f=(a(17),a(18),a(19),a(6)),h=a.n(f),_=a(7),v=a.n(_),E=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={searchTodoByTitle:"",searchTodoByCompleteness:"all"},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.todos,n=t.onSelectUser,s=t.selectedUserId,c=this.state,o=c.searchTodoByTitle,l=c.searchTodoByCompleteness,i=a.filter((function(e){return o?null!==e.title?e.title.toLowerCase().includes(o.toLowerCase()):"active"===l?!e.completed:"completed"===l?e.completed:null:e}));return i=i.filter((function(e){return"active"===l?!e.completed:"completed"===l?e.completed:e})),r.a.createElement("div",{className:"TodoList"},r.a.createElement("h2",null,"Todos:"),r.a.createElement("section",{className:"TodoList__filters"},r.a.createElement("input",{className:"TodoList__find",type:"text",name:"search",autoComplete:"off",onChange:function(t){return e.setState({searchTodoByTitle:t.target.value})}}),r.a.createElement("select",{className:"TodoList__select",value:l,onChange:function(t){return e.setState({searchTodoByCompleteness:t.target.value})}},r.a.createElement("option",{value:"all"},"All"),r.a.createElement("option",{value:"active"},"Active"),r.a.createElement("option",{value:"completed"},"Completed"))),r.a.createElement("div",{className:"TodoList__list-container"},r.a.createElement("ul",{className:"TodoList__list"},i.map((function(e){return r.a.createElement("li",{key:e.id,className:v()("TodoList__item",{"TodoList__item--unchecked":!e.completed,"TodoList__item--checked":e.completed})},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",checked:e.completed,readOnly:!0}),r.a.createElement("p",null,e.title)),r.a.createElement("button",{className:v()("TodoList__user-button","button",{"TodoList__user-button--selected":s===e.userId}),type:"button",onClick:function(){return n(e.userId)}},"User\xa0",e.userId))})))))}}]),a}(r.a.Component);E.defaultProps={todos:h.a.arrayOf(h.a.shape({title:"",userId:"",completed:null})),selectedUserId:0};a(22);var U=function(e){var t=e.id,a=e.name,n=e.email,s=e.phone,c=e.clear;return r.a.createElement("div",{className:"CurrentUser"},r.a.createElement("h2",{className:"CurrentUser__title"},r.a.createElement("span",null,"Selected user:",t)),r.a.createElement("h3",{className:"CurrentUser__name"},a),r.a.createElement("p",{className:"CurrentUser__email"},n),r.a.createElement("p",{className:"CurrentUser__phone"},s),r.a.createElement("button",{type:"button",className:"CurrentUser__button button",onClick:c},"Clear"))};U.defaultProps={id:0,name:"",email:"",phone:""};var b=function(){return fetch("https://mate-api.herokuapp.com/todos").then((function(e){return e.json()}))},y=function(e){return fetch("https://mate-api.herokuapp.com/users/".concat(e)).then((function(e){return e.json()}))},T=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={todos:[],selectedUserId:0,selectedUser:[]},e.selectedUser=function(t){e.setState({selectedUserId:t})},e.clearUser=function(){e.setState({selectedUserId:0,selectedUser:[]})},e.componentDidMount=Object(i.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b();case 2:a=t.sent,e.setState({todos:a.data});case 4:case"end":return t.stop()}}),t)}))),e.componentDidUpdate=function(){var t=e.state,a=t.selectedUserId,n=t.selectedUser;0!==a&&a&&a!==n.id&&y(a).then((function(t){return e.setState({selectedUser:t.data})}))},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state,t=e.todos,a=e.selectedUserId,n=e.selectedUser;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App__sidebar"},r.a.createElement(E,{todos:t,selectedUserId:a,onSelectUser:this.selectedUser})),r.a.createElement("div",{className:"App__content"},r.a.createElement("div",{className:"App__content-container"},a&&n?r.a.createElement(U,Object.assign({},n,{clear:this.clearUser})):"No user selected")))}}]),a}(r.a.Component);c.a.render(r.a.createElement(T,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.83fd0eae.chunk.js.map
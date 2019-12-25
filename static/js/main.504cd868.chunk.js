(this["webpackJsonpreact-ts-todo"]=this["webpackJsonpreact-ts-todo"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),l=n(8),r=n.n(l),o=(n(14),n(2)),d=n(3),c=n(5),h=n(4),s=n(1),u=n(6),p=(n(15),n(16),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={time:new Date},n}return Object(u.a)(t,e),Object(d.a)(t,[{key:"tick",value:function(){this.setState({time:new Date})}},{key:"componentDidMount",value:function(){var e=this;setInterval((function(){return e.tick()}),1e3)}},{key:"render",value:function(){var e="The current time is "+this.state.time.toLocaleTimeString();return this.state.time.getSeconds()%5===0?i.a.createElement("p",{className:"highlight-10"},e):i.a.createElement("p",null,e)}}]),t}(a.Component)),E=(n(17),function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=null!=this.props.editingEntryInfo?i.a.createElement("span",null,i.a.createElement("input",{type:"text",className:"editing",value:this.props.editingEntryInfo.text,onChange:this.props.handleEditingEntryTextChange}),i.a.createElement("button",{onClick:this.props.handleSaveEntryText},"Save"),i.a.createElement("button",{onClick:this.props.handleCancelEditingEntry},"Cancel")):i.a.createElement("span",{onDoubleClick:this.props.handleDoubleClick},this.props.item);return i.a.createElement("li",null,i.a.createElement("input",{type:"checkbox",checked:this.props.completed,onChange:this.props.handleToggleCompletion}),e)}}]),t}(a.Component)),g=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){for(var e=this,t=[],n=function(n){var a=e.props.completed[n];if(e.props.hideCompleted&&a)return"continue";var l=null!=e.props.editingEntryInfo&&n===e.props.editingEntryInfo.id?e.props.editingEntryInfo:null,r=i.a.createElement(E,{item:e.props.items[n],completed:a,editingEntryInfo:l,handleCancelEditingEntry:e.props.handleCancelEditingEntry,handleDoubleClick:function(){return e.props.handleStartEditingEntry(n)},handleEditingEntryTextChange:e.props.handleEditingEntryTextChange,handleSaveEntryText:e.props.handleSaveEntryText,handleToggleCompletion:function(t){return e.props.handleToggleCompletion(t,n)},key:n});t.push(r)},a=0;a<this.props.items.length;a++)n(a);return i.a.createElement("div",{id:"todoList"},i.a.createElement("h1",null,"to-do"),i.a.createElement("div",{id:"listContainer"},i.a.createElement("input",{id:"newEntryInput",type:"text",placeholder:"New entry",value:this.props.newEntryText,onChange:this.props.handleNewEntryTextChange}),i.a.createElement("button",{onClick:this.props.handleAddNewEntry},"Add"),i.a.createElement("div",{id:"hideCompleted"},i.a.createElement("input",{type:"checkbox",checked:this.props.hideCompleted,onChange:this.props.handleToggleHideCompleted}),"Hide completed"),i.a.createElement("ul",null,t)))}}]),t}(a.Component),y=function(){function e(){Object(o.a)(this,e)}return Object(d.a)(e,[{key:"get",value:function(e){return localStorage.getItem(e)}},{key:"set",value:function(e,t){localStorage.setItem(e,t)}}]),e}(),m=function(e){function t(e){var n;Object(o.a)(this,t),(n=Object(c.a)(this,Object(h.a)(t).call(this,e))).backend=void 0,n.backend=new y;var a=n.getState();return n.state=null!=a?a:{name:"test-list-1",items:["take a shower","take out the trash","C"],completed:[!1,!0,!1],newEntryText:":)",editingEntryInfo:null,hideCompleted:!1},n.handleAddNewEntry=n.handleAddNewEntry.bind(Object(s.a)(n)),n.handleNewEntryTextChange=n.handleNewEntryTextChange.bind(Object(s.a)(n)),n.handleCancelEditingEntry=n.handleCancelEditingEntry.bind(Object(s.a)(n)),n.handleEditingEntryTextChange=n.handleEditingEntryTextChange.bind(Object(s.a)(n)),n.handleSaveEntryText=n.handleSaveEntryText.bind(Object(s.a)(n)),n.handleStartEditingEntry=n.handleStartEditingEntry.bind(Object(s.a)(n)),n.handleToggleCompletion=n.handleToggleCompletion.bind(Object(s.a)(n)),n.handleToggleHideCompleted=n.handleToggleHideCompleted.bind(Object(s.a)(n)),n}return Object(u.a)(t,e),Object(d.a)(t,[{key:"componentDidUpdate",value:function(){this.persistState()}},{key:"handleStartEditingEntry",value:function(e){this.setState((function(t,n){return{editingEntryInfo:{text:t.items[e],id:e}}}))}},{key:"handleEditingEntryTextChange",value:function(e){var t=e.target.value;this.setState((function(e,n){return null==e.editingEntryInfo?null:{editingEntryInfo:Object.assign({},e.editingEntryInfo,{text:t})}}))}},{key:"persistState",value:function(){this.backend.set("rttodo_state",JSON.stringify(this.state))}},{key:"getState",value:function(){return JSON.parse(this.backend.get("rttodo_state")||"null")}},{key:"handleNewEntryTextChange",value:function(e){this.setState({newEntryText:e.target.value})}},{key:"handleAddNewEntry",value:function(){var e=this;this.setState((function(t,n){return{items:t.items.concat(t.newEntryText),completed:e.state.completed.concat(!1),newEntryText:""}}))}},{key:"handleToggleCompletion",value:function(e,t){this.setState((function(e,n){return{completed:e.completed.map((function(e,n){return t===n?!e:e}))}}))}},{key:"handleToggleHideCompleted",value:function(e){this.setState((function(e,t){return{hideCompleted:!e.hideCompleted}}))}},{key:"handleSaveEntryText",value:function(){this.setState((function(e,t){return null==e.editingEntryInfo?null:{items:e.items.map((function(t,n){return e.editingEntryInfo.id===n?e.editingEntryInfo.text:t})),editingEntryInfo:null}}))}},{key:"handleCancelEditingEntry",value:function(){this.setState((function(e,t){return{editingEntryInfo:null}}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement("p",null,"hello, react + typescript")),i.a.createElement("main",null,i.a.createElement(p,null),i.a.createElement("hr",null),i.a.createElement(g,{name:this.state.name,items:this.state.items,completed:this.state.completed,newEntryText:this.state.newEntryText,editingEntryInfo:this.state.editingEntryInfo,hideCompleted:this.state.hideCompleted,handleAddNewEntry:this.handleAddNewEntry,handleCancelEditingEntry:this.handleCancelEditingEntry,handleEditingEntryTextChange:this.handleEditingEntryTextChange,handleNewEntryTextChange:this.handleNewEntryTextChange,handleSaveEntryText:this.handleSaveEntryText,handleStartEditingEntry:this.handleStartEditingEntry,handleToggleCompletion:this.handleToggleCompletion,handleToggleHideCompleted:this.handleToggleHideCompleted})))}}]),t}(i.a.Component);r.a.render(i.a.createElement(m,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.504cd868.chunk.js.map
(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var a=s(1),n=s.n(a),i=s(8),c=s.n(i),l=(s(14),s(2)),r=s(3),o=s(6),d=s(5),h=s(4),k=(s(15),s(16),s(17),s(18),s(0)),u=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){return Object(l.a)(this,s),t.call(this)}return Object(r.a)(s,[{key:"render",value:function(){var e=this.props.tomatos;return Object(k.jsxs)("div",{className:"task-circles",children:[Array(e.count).fill("").map((function(e,t){return Object(k.jsx)("div",{className:"task-circle task-circle-past"},"task-circle"+t)})),Array(e.sum-e.count).fill("").map((function(t,s){return Object(k.jsx)("div",{className:"task-circle"},"task-circle"+s+e.count)}))]})}}]),s}(a.Component),j=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){return Object(l.a)(this,s),t.call(this)}return Object(r.a)(s,[{key:"render",value:function(){var e=this.props,t=e.isTaskWorking,s=e.firstTask,a=s.title,n=s.tomatos;return Object(k.jsxs)("div",{className:"task-block",children:[Object(k.jsx)("p",{className:"title",children:a}),t?Object(k.jsx)("div",{className:"task-doing",children:Object(k.jsx)(u,{tomatos:n})}):Object(k.jsx)("div",{className:"break-card",children:"BREAK"})]})}}]),s}(a.Component),m=(s(20),s(21),function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){return Object(l.a)(this,s),t.call(this)}return Object(r.a)(s,[{key:"render",value:function(){var e=this.props,t=e.handleTaskPlaying,s=e.isTaskPlaying,a=e.isTaskWorking,n=a?"task-start":"task-break",i="material-icons ";return Object(k.jsxs)("div",{className:"task-setting",children:[Object(k.jsx)("i",{className:i+(!s&&n),onClick:function(){!s&&t("start")},children:"play_arrow"}),Object(k.jsx)("i",{className:i+(s&&n),onClick:function(){s&&t("pause")},children:"pause"}),Object(k.jsx)("i",{className:i+(a&&n),onClick:function(){a&&t("reset")},children:"replay"})]})}}]),s}(a.Component)),b=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){return Object(l.a)(this,s),t.call(this)}return Object(r.a)(s,[{key:"render",value:function(){var e=this.props,t=e.handleTasks,s=e.handleTaskPlaying,a=e.isTaskPlaying,n=e.isTaskWorking,i=e.nowTimePlace,c=n?10:5,l=i.split(":");return l=942*(1-(60*parseInt(l[0])+parseInt(l[1]))/c),Object(k.jsxs)("div",{className:"task-timer",children:[Object(k.jsxs)("div",{className:"task-now",children:[Object(k.jsx)("svg",{viewBox:"0 0 300 300",children:Object(k.jsx)("circle",{className:"circle1",r:"150",cx:"150",cy:"150","data-stroke-break":n,style:{strokeDasharray:l+" 942"}})}),Object(k.jsx)("p",{className:"task-now-timer",children:i})]}),a?Object(k.jsx)("div",{className:"task-complete",children:Object(k.jsx)("label",{htmlFor:"checkbox-task-complete",style:{cursor:"not-allowed"},children:"TASK COMPLETE"})}):Object(k.jsx)("div",{className:"task-complete",children:Object(k.jsx)("label",{htmlFor:"checkbox-task-complete",onClick:function(){t({doType:"completed",doIndex:-1},!0)},children:"TASK COMPLETE"})}),Object(k.jsx)(m,{handleTaskPlaying:s,isTaskPlaying:a,isTaskWorking:n})]})}}]),s}(a.Component),T=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){return Object(l.a)(this,s),t.call(this)}return Object(r.a)(s,[{key:"render",value:function(){var e=this.props,t=e.tasks,s=e.isTaskPlaying,a=e.isTaskWorking,n=e.handleTasks,i=e.handleTaskPlaying;return t.length>0?Object(k.jsxs)("div",{className:"main-page",children:[Object(k.jsx)(j,{firstTask:t[0],isTaskWorking:a}),Object(k.jsx)(b,{isTaskPlaying:s,isTaskWorking:a,nowTimePlace:t[0].nowTimePlace,handleTasks:n,handleTaskPlaying:i})]}):Object(k.jsx)("div",{className:"main-page",children:Object(k.jsx)("div",{className:"orange",children:Object(k.jsx)("div",{className:"color"})})})}}]),s}(a.Component),p=(s(22),s(9)),O=(s(23),function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(l.a)(this,s),(e=t.call(this)).onChangeTask=e.onChangeTask.bind(Object(o.a)(e)),e.handleTasks=e.handleTasks.bind(Object(o.a)(e));var a=new Date,n=[a.getFullYear(),a.getMonth()+1,a.getDate()];return e.state={title:"",count:1,errorMsg:"",menuLists:[{"add-task":"add_circle_outline"},{"show-tasks":"menu"},{"analysis-tasks":"bar_chart"},{"choose-music":"music_note"}],todayDateArray:n},e}return Object(r.a)(s,[{key:"_getSevenDaysArray",value:function(e){var t=[e];return Array(6).fill().forEach((function(e,s){var a=new Date(new Date(t[s]).getTime()+864e5);t.push("".concat(a.getFullYear(),"/").concat(parseInt(a.getMonth()+1),"/").concat(a.getDate()))})),t}},{key:"onChangeTask",value:function(e){var t=e.target,s=t.className,a=t.value,n=t.dataset;this.setState(Object(p.a)({},s,"count"===s?parseInt(n.number):a))}},{key:"handleTasks",value:function(e){var t=[],s=e.doType,a=e.doIndex;this.props.isTaskPlaying&&t.push("\u8acb\u5148\u5c07\u5012\u6578\u5668\u505c\u6b62"),0===this.state.count&&"create"===s&&t.push("\u8acb\u9078\u64c7\u60f3\u8981\u6dfb\u52a0\u5e7e\u9846\u756a\u8304"),""===this.state.title&&t.push("\u8acb\u8f38\u5165\u4efb\u52d9\u540d\u7a31"),t.length>0?this.setState({errorMsg:"ERROR\uff1a"+t.join("\u3001")}):""!==s&&(this.props.handleTasks({doType:s,doIndex:a},this.state),this.setState({title:"",errorMsg:"",count:1}))}},{key:"render",value:function(){var e=this,t=this.props,s=t.whereSideMenu,a=t.tasks,n=t.passedTasks;switch(s){case"add-task":var i=this.state,c=i.title,l=i.count,r=i.errorMsg;return Object(k.jsxs)("div",{id:"side-page-content",className:"add-task-content",children:[Object(k.jsx)("p",{className:"title",children:"ADD NEW TASK"}),Object(k.jsxs)("div",{className:"content-block",children:[Object(k.jsx)("p",{className:"sub-title",children:"TASK TITLE"}),Object(k.jsx)("input",{className:"title",type:"text",onChange:this.onChangeTask,value:c})]}),Object(k.jsxs)("div",{className:"content-block",children:[Object(k.jsx)("p",{className:"sub-title",children:"ESTIMATED TOMOTO"}),Object(k.jsx)("div",{className:"tomatos",children:Array(10).fill("").map((function(t,s){return Object(k.jsx)("div",{className:"tomato",children:Object(k.jsx)("label",{className:"count",onClick:e.onChangeTask,"data-number":s+1,"data-filled":l>s})},"tomato"+s)}))})]}),Object(k.jsx)("button",{onClick:function(){e.handleTasks({doType:"create",doIndex:-1})},children:"ADD TASK"}),Object(k.jsx)("p",{className:"error-msg",children:r})]});case"show-tasks":var o=this.props,d=o.handleTaskSetting,h=o.handleTasks;return Object(k.jsxs)("div",{id:"side-page-content",className:"show-tasks-content",children:[Object(k.jsx)("p",{className:"title",children:"TASK LISTS"}),Object(k.jsxs)("div",{className:"content-block",children:[Object(k.jsx)("p",{className:"sub-title",children:"TO DO"}),Object(k.jsx)("ul",{className:"todo-content-block",children:a.length>0&&a.map((function(t,s){var a=t.title,n=t.tomatos,i=t.isEditing;return Object(k.jsxs)("li",{className:"todo-content",children:[Object(k.jsxs)("div",{className:"show-todo",children:[Object(k.jsxs)("div",{className:"task-info",children:[Object(k.jsx)("p",{children:a}),Object(k.jsx)(u,{tomatos:n})]}),Object(k.jsx)("i",{className:"task-setting fas fa-ellipsis-h","data-rotate":i,onClick:function(){d({doType:"edit",doIndex:s},{tasks:t})}})]}),!0===i&&Object(k.jsxs)("div",{className:"edit-todo",children:[Object(k.jsx)("p",{className:"edit-todo-title",children:"TASK TITLE"}),Object(k.jsx)("input",{className:"title",type:"text",onChange:e.onChangeTask,value:e.state.title}),Object(k.jsx)("button",{className:"edit-todo-save",onClick:function(){e.handleTasks({doType:"edit",doIndex:s})},children:"SAVE"}),Object(k.jsx)("button",{className:"edit-todo-delete",onClick:function(){h({doType:"delete",doIndex:s})},children:"DELETE"})]})]},"todo-content"+s)}))})]}),Object(k.jsxs)("div",{className:"content-block",children:[Object(k.jsx)("p",{className:"sub-title",children:"DONE"}),Object(k.jsx)("ul",{className:"done-content-block",children:n.length>0&&n.map((function(e,t){var s=e.title,a=e.tomatos,n=e.isEditing;return Object(k.jsxs)("li",{className:"done-content",children:[Object(k.jsxs)("div",{className:"show-done",children:[Object(k.jsx)("i",{className:"far fa-check-circle"}),Object(k.jsxs)("div",{className:"task-info",children:[Object(k.jsx)("p",{children:s}),Object(k.jsx)(u,{tomatos:a})]}),Object(k.jsx)("i",{className:"task-setting fas fa-ellipsis-h","data-rotate":n,onClick:function(){d({doType:"edit",doIndex:t},{passedTasks:e})}})]}),!0===n&&Object(k.jsx)("div",{className:"edit-done",children:Object(k.jsx)("button",{className:"edit-todo-save",onClick:function(){h({doType:"redo",doIndex:t})},children:"REDO"})})]},"done-content"+t)}))})]})]});case"analysis-tasks":var j=this.state.todayDateArray,m=this.props,b=m.sevenDaysAgoDate,T=m.handleChartsPeriod,p=[b.getFullYear(),b.getMonth()+1,b.getDate()],O=this._getSevenDaysArray(p.join("/"));return Object(k.jsxs)("div",{id:"side-page-content",className:"analysis-tasks-content",children:[Object(k.jsx)("p",{className:"title",children:"ANALYTICS REPORT"}),Object(k.jsxs)("div",{className:"content-block",children:[Object(k.jsx)("p",{className:"sub-title",children:"TOMATO OF THIS WEEKE"}),Object(k.jsxs)("div",{className:"analysis-datas",children:[Object(k.jsxs)("div",{className:"analysis-data-block",children:[Object(k.jsx)("p",{className:"statistics-data",children:n.filter((function(e,t){return new Date(e.completedTime).getTime()===new Date(j.join("/")).getTime()})).length}),Object(k.jsx)("p",{className:"statistics-period",children:"TODAY"})]}),Object(k.jsxs)("div",{className:"analysis-data-block",children:[Object(k.jsx)("p",{className:"statistics-data",children:n.filter((function(e,t){return new Date(e.completedTime).getTime()>=new Date(O[0]).getTime()&&new Date(e.completedTime).getTime()<=new Date(O[6]).getTime()})).length}),Object(k.jsx)("p",{className:"statistics-period",children:O[0]+"-"+O[6]})]})]})]}),Object(k.jsxs)("div",{className:"content-block",children:[Object(k.jsx)("p",{className:"sub-title",children:"CHART"}),Object(k.jsx)("div",{className:"analysis-charts",children:O.map((function(e,t){var s=n.filter((function(t,s){return t.completedTime===e})).length;return Object(k.jsxs)("div",{className:"analysis-charts-column",children:[Object(k.jsxs)("div",{className:"analysis-charts-count",children:[Object(k.jsx)("p",{className:"analysis-charts-count-number",children:s>0&&s}),Object(k.jsx)(u,{tomatos:{sum:s,count:s}})]}),Object(k.jsx)("div",{className:"analysis-charts-period",children:e.replace(j[0]+"/","")})]},"analysis-charts-column"+t)}))}),Object(k.jsxs)("div",{className:"setting-block",children:[Object(k.jsx)("button",{onClick:function(){T("prev")},children:"PREV"}),O[6]===j.join("/")?Object(k.jsx)("button",{className:"not-click",children:"NEXT"}):Object(k.jsx)("button",{onClick:function(){T("next")},children:"NEXT"})]})]})]});case"choose-music":return Object(k.jsxs)("div",{id:"side-page-content",className:"choose-music-content",children:[Object(k.jsx)("p",{className:"title",children:"RING TONE"}),Object(k.jsxs)("div",{className:"content-block",children:[Object(k.jsx)("p",{className:"sub-title",children:"WORK"}),Object(k.jsx)("ul",{className:"music-content-block"})]}),Object(k.jsxs)("div",{className:"content-block",children:[Object(k.jsx)("p",{className:"sub-title",children:"BREAK"}),Object(k.jsx)("ul",{className:"music-content-block"})]})]})}}}]),s}(a.Component)),v=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;return Object(l.a)(this,s),(e=t.call(this)).state={menuLists:[{"add-task":"add_circle_outline"},{"show-tasks":"menu"},{"analysis-tasks":"bar_chart"},{"choose-music":"music_note"}]},e}return Object(r.a)(s,[{key:"render",value:function(){var e=this.props,t=e.tasks,s=e.passedTasks,a=e.handleTasks,n=e.handleTaskSetting,i=e.handleSideMenu,c=e.handleClickMenu,l=e.handleChartsPeriod,r=e.isTaskPlaying,o=e.showSideMenu,d=e.whereSideMenu,h=e.sevenDaysAgoDate,u=this.state.menuLists;return Object(k.jsxs)("div",{className:"side-page",children:[Object(k.jsx)("div",{id:"side-page-menu",children:u.map((function(e,t){var s=Object.keys(e)[0];return Object(k.jsx)("i",{onClick:function(){c(s)},"data-menu-clicked":d===s,className:"material-icons "+s,children:Object.values(e)},"side-menu"+t)}))}),Object(k.jsxs)("div",{id:"control-button",children:[Object(k.jsx)("input",{type:"checkbox",id:"control-nav",onClick:function(){i()}}),Object(k.jsx)("label",{htmlFor:"control-nav"})]}),o&&Object(k.jsx)(O,{tasks:t,passedTasks:s,isTaskPlaying:r,handleTasks:a,handleTaskSetting:n,handleChartsPeriod:l,whereSideMenu:d,sevenDaysAgoDate:h})]})}}]),s}(a.Component),g=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(l.a)(this,s),(e=t.call(this)).handleSideMenu=e.handleSideMenu.bind(Object(o.a)(e)),e.handleTaskPlaying=e.handleTaskPlaying.bind(Object(o.a)(e)),e.handleTasks=e.handleTasks.bind(Object(o.a)(e)),e.handleClickMenu=e.handleClickMenu.bind(Object(o.a)(e)),e.handleTaskSetting=e.handleTaskSetting.bind(Object(o.a)(e)),e.handleChartsPeriod=e.handleChartsPeriod.bind(Object(o.a)(e));var a=new Date(new Date-5184e5);return e.workTimeLength="00:10",e.breakTimeLength="00:05",e.state={showSideMenu:!1,isTaskWorking:!0,isTaskPlaying:!1,whereSideMenu:"add-task",sevenDaysAgoDate:a,passedTasks:[],tasks:[]},e}return Object(r.a)(s,[{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"_separateTimeString",value:function(e){var t=e.split(":");return 60*parseInt(t[0])+parseInt(t[1])}},{key:"_combineTimeString",value:function(e){var t=e%60<10?"0"+e%60:e%60;return((e-t)/60<10?"0"+(e-t)/60:(e-t)/60)+":"+t}},{key:"_startTimer",value:function(){var e=this;clearInterval(this.timerID);var t=this.state.tasks;t[0].isCompleted||(this.timerID=setInterval((function(){t=e.state.tasks;var s=e._separateTimeString(t[0].nowTimePlace);if(0===s)return clearInterval(e.timerID),t[0].tomatos.count++,e.setState({tasks:t}),void e._completedLevel();s--,t[0].nowTimePlace=e._combineTimeString(s),e.setState({tasks:t,isTaskWorking:!0,isTaskPlaying:!0})}),500))}},{key:"_pauseTimer",value:function(){clearInterval(this.timerID);var e=this.state.tasks;this.setState({tasks:e})}},{key:"_breakTimer",value:function(){var e=this;clearInterval(this.timerID);var t=this.state.tasks;this.timerID=setInterval((function(){var s=(t=e.state.tasks)[0],a=s.nowTimePlace,n=s.tomatos,i=e._separateTimeString(a);return n.count===n.sum&&0===i?(clearInterval(e.timerID),t[0].isCompleted=!0,e.setState({isTaskWorking:!0,isTaskPlaying:!1,tasks:t}),void e._resetTask()):0===i?(clearInterval(e.timerID),void e._completedLevel()):(i--,t[0].nowTimePlace=e._combineTimeString(i),void e.setState({tasks:t}))}),500)}},{key:"_resetTask",value:function(){var e=this.state,t=e.tasks,s=e.passedTasks;if(t[0].isCompleted){var a=new Date;t[0].completedTime="".concat(a.getFullYear(),"/").concat(parseInt(a.getMonth()+1),"/").concat(a.getDate());var n=t.shift();s.push(n),this.setState({tasks:t,passedTasks:s})}}},{key:"_completedLevel",value:function(){var e=this,t=this.state,s=t.tasks,a=t.isTaskWorking,n=a?this.breakTimeLength:this.workTimeLength;s[0].nowTimePlace=n,setTimeout((function(){e.setState({tasks:s,isTaskWorking:!a,isTaskPlaying:!1})}),300)}},{key:"handleTaskPlaying",value:function(e){var t=this.state,s=t.tasks,a=t.isTaskWorking;switch(e){case"start":a?(this._startTimer(),this.setState({isTaskPlaying:!0,isTaskWorking:!0})):(this._breakTimer(),this.setState({isTaskPlaying:!0,isTaskWorking:!1}));break;case"pause":this._pauseTimer(),this.setState({isTaskPlaying:!1});break;case"reset":s[0].nowTimePlace=this.workTimeLength,this.setState({tasks:s})}}},{key:"handleSideMenu",value:function(){this.setState({showSideMenu:!this.state.showSideMenu})}},{key:"handleTaskSetting",value:function(e,t){e.doType;var s=e.doIndex,a=this.state,n=a.tasks,i=a.passedTasks;if("tasks"in t){var c=t.tasks.isEditing;n=n.map((function(e,t){return e.isEditing=!c&&(s===t?!c:c),e})),this.setState({tasks:n})}else if("passedTasks"in t){var l=t.passedTasks.isEditing;i=i.map((function(e,t){return e.isEditing=!l&&(s===t?!l:l),e})),this.setState({passedTasks:i})}}},{key:"handleTasks",value:function(e,t){var s=e.doType,a=e.doIndex,n=this.state,i=n.tasks,c=n.passedTasks;switch(s){case"create":i.push({title:t.title,tomatos:{sum:t.count,count:0},isCompleted:!1,completedTime:null,nowTimePlace:this.workTimeLength,isEditing:!1}),this._resetTask(),this.setState({tasks:i});break;case"edit":i[a].title=t.title,i[a].isEditing=!1,this.setState({tasks:i});break;case"delete":if(0===a)return;i.splice(a,1),this._resetTask(),this.setState({tasks:i});break;case"redo":c[a].nowTimePlace=this.workTimeLength,c[a].isCompleted=!1,c[a].isEditing=!1,i.push(c[a]),c.splice(a,1),this.setState({tasks:i,passedTasks:c});break;case"completed":clearInterval(this.timerID),i[0].isCompleted=!0,this._resetTask(),this.setState({tasks:i,passedTasks:c})}}},{key:"handleClickMenu",value:function(e){this.setState({whereSideMenu:e})}},{key:"handleChartsPeriod",value:function(e){var t=864e5,s=this.state.sevenDaysAgoDate;"prev"===e?s=new Date(s.getTime()-t):"next"===e&&(s=new Date(s.getTime()+t)),this.setState({sevenDaysAgoDate:s})}},{key:"render",value:function(){var e=this.state,t=e.tasks,s=e.passedTasks,a=e.isTaskPlaying,n=e.isTaskWorking,i=e.showSideMenu,c=e.whereSideMenu,l=e.sevenDaysAgoDate;return Object(k.jsxs)("div",{className:"App",children:[Object(k.jsx)(T,{tasks:t,isTaskPlaying:a,isTaskWorking:n,handleTasks:this.handleTasks,handleTaskPlaying:this.handleTaskPlaying}),Object(k.jsx)(v,{passedTasks:s,tasks:t,isTaskPlaying:a,handleTasks:this.handleTasks,handleTaskSetting:this.handleTaskSetting,handleSideMenu:this.handleSideMenu,handleChartsPeriod:this.handleChartsPeriod,showSideMenu:i,whereSideMenu:c,sevenDaysAgoDate:l,handleClickMenu:this.handleClickMenu})]})}}]),s}(n.a.Component);c.a.render(Object(k.jsx)(g,{}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.6617d51c.chunk.js.map
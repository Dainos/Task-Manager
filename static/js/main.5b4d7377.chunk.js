(this["webpackJsonptask-4"]=this["webpackJsonptask-4"]||[]).push([[0],{70:function(e,t,n){e.exports=n(81)},79:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(7),l=n.n(o),c=n(35),i=n(37),u=(n(79),n(29)),m=n(40),s=n(25),d=n(57),p=n(58),T=n(60),E=n(126),b=n(137),f=n(135),h=n(138),g=n(136),y=n(127),S=n(129),v=n(128),A=n(121),O=n(125),I=Object(u.f)((function(e){return a.a.createElement(A.a,null,e.item.map((function(e,t){return a.a.createElement(O.a,{key:t},e)})),e.item[0]>0?a.a.createElement(O.a,null,a.a.createElement(E.a,{variant:"contained",type:"submit",onClick:function(){!function(e){console.log(e),e.history.push("/tasks/".concat(e.index))}(e)}},"Info")):null,e.item[0]>0?a.a.createElement(O.a,null,a.a.createElement(E.a,{variant:"contained",type:"submit",onClick:function(){e.deleteData(e.index)}},"Delete")):null)})),D=function(e){var t=e.table;return a.a.createElement(y.a,null,a.a.createElement(v.a,null,a.a.createElement(I,{item:t[0]})),a.a.createElement(S.a,null,t.map((function(t,n){return n>0?a.a.createElement(I,{item:t,key:n,index:n,deleteData:e.deleteData}):null}))))},w=n(140),j=n(134),k=n(132),N=n(133),M=n(131),R=function(e){return a.a.createElement(w.a,{open:e.open,color:"primary"},a.a.createElement(M.a,{color:"primary"},"Empty task name"),a.a.createElement(k.a,null,a.a.createElement(N.a,null,"You are trying close your task without name, enter the title and try again!")),a.a.createElement(j.a,null,a.a.createElement(E.a,{color:"primary",onClick:e.handle},"CLOSE")))},C=function(e){function t(){var e,n;Object(m.a)(this,t);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(n=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).startTimer=function(){var e=n.props,t=e.currentTime,r=e.changeTime,a=e.setTimer,o=t;a(setInterval((function(){r(++o)}),1e3))},n.stopTimer=function(){""!==n.props.currentName?(n.props.stopTimer(),n.props.addData(n.timeRender().timeString),console.log(n.props)):n.alert()},n.restartTimer=function(){var e=localStorage.getItem("reduxState")?JSON.parse(localStorage.getItem("reduxState")):{},t=n.props,r=t.dateStart,a=t.changeTime,o=t.restartTimer,l=t.currentTime;if(null!==r){console.log(n.props);var c=new Date,i=n.subTime(c.getSeconds(),r.seconds)+60*n.subTime(c.getMinutes(),r.minutes)+3600*n.subTime(c.getHours(),r.hours);if(null!==e.timerId&&i>l){clearTimeout(e.table.timerId),console.log(l);var u=n.timeFormat(n.subTime(c.getSeconds(),r.seconds),n.subTime(c.getMinutes(),r.minutes),n.subTime(c.getHours(),r.hours)),m=setInterval((function(){a(++i)}),1e3);console.log(n.subTime(c.getSeconds(),n.timeRender().seconds)),o(u,m)}}},n.subTime=function(e,t){return e>=t?e-t:e-t+60},n.delData=function(e){n.props.deleteData(e)},n.buttons=function(){return null==n.props.timerId?a.a.createElement(E.a,{variant:"contained",type:"submit",color:"primary",onClick:n.startTimer},"Start"):a.a.createElement(E.a,{variant:"contained",type:"submit",color:"primary",onClick:n.stopTimer},"Stop")},n.handleInput=function(e){n.props.updateName(e.target.value)},n.timeFormat=function(e,t,n){return n<10&&(n="0"+n),t<10&&(t="0"+t),e<10&&(e="0"+e),"".concat(n,":").concat(t,":").concat(e)},n.timeRender=function(){var e,t,r,a=n.props.currentTime;return a<60?(e=a,t=0,r=0):a<3600?(t=Math.floor(a/60),e=a%60,r=0):(r=Math.floor(a/3600),t=Math.floor(a%3600/60),e=Math.floor(a%3600%60)),{timeString:n.timeFormat(e,t,r),seconds:e,minutes:t,hours:r}},n.alert=function(){console.log("trying alert"),n.props.alert()},n}return Object(T.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.currentTab,n=e.changeTab,r=e.currentName,o=e.table,l=e.showAlert,c=[a.a.createElement(D,{table:o,deleteData:this.delData}),a.a.createElement("h1",null,"TASKS CHART")];return this.restartTimer(),a.a.createElement("div",null,a.a.createElement(R,{open:l,handle:this.alert}),a.a.createElement(f.a,{container:!0,direction:"column",justify:"flex-start",alignItems:"center"},a.a.createElement(b.a,{id:"standard-basic",value:r,label:"Name of your task",color:"primary",onChange:this.handleInput}),a.a.createElement("h1",null,this.timeRender().timeString),this.buttons()),a.a.createElement(h.a,{value:t,indicatorColor:"secondary",textColor:"primary",variant:"fullWidth",onChange:n},a.a.createElement(g.a,{label:"TASKS LOG"}),a.a.createElement(g.a,{label:"TASKS CHART"})),c[t])}}]),t}(r.Component),_=Object(c.b)((function(e){return{currentTab:e.currentTab,currentTime:e.currentTime,currentName:e.currentName,timerId:e.timerId,dateStart:e.dateStart,table:e.table,showAlert:e.showAlert}}),(function(e){return{changeTab:function(){return e({type:"CHANGE_TAB"})},changeTime:function(t){return e({type:"CHANGE_TIME",payload:t})},setTimer:function(t){return e({type:"SET_TIMER",payload:t})},stopTimer:function(){return e({type:"STOP_TIMER"})},addData:function(t){return e({type:"ADD_DATA",payload:t})},updateName:function(t){return e({type:"UPDATE_NAME",payload:t})},alert:function(){return e({type:"ALERT"})},deleteData:function(t){return e({type:"DELETE_DATA",payload:t})},restartTimer:function(t,n){return e({type:"RESTART_TIMER",payload:{time:t,timerId:n}})}}}))(C),x=n(39),P=n(20),H=n(8),L="CHANGE_TAB",G="CHANGE_TIME",J="STOP_TIMER",B="SET_TIMER",F="ADD_DATA",K="UPDATE_NAME",W="DELETE_DATA",U="ALERT",Y="RESTART_TIMER";function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(Object(n),!0).forEach((function(t){Object(H.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var z=function(e,t,n){return n<10&&(n="0"+n),t<10&&(t="0"+t),e<10&&(e="0"+e),"".concat(n,":").concat(t,":").concat(e)};var Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:localStorage.length<1?V:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return 1===e.currentTab?q({},e,{currentTab:0}):q({},e,{currentTab:1});case G:return q({},e,{currentTime:t.payload});case B:var n=new Date,r={seconds:n.getSeconds(),minutes:n.getMinutes(),hours:n.getHours()};return console.log("creating new start date - "+r),q({},e,{timerId:t.payload,dateStart:r,timeStart:z(r.seconds,r.minutes,r.hours)});case J:clearTimeout(e.timerId);var a=new Date;return q({},e,{timerId:null,currentTime:0,timeEnd:z(a.getSeconds(),a.getMinutes(),a.getHours())});case F:return q({},e,{table:[].concat(Object(P.a)(e.table),[[e.table.length,e.currentName,e.timeStart,e.timeEnd,t.payload]]),currentName:""});case K:return q({},e,{currentName:t.payload});case U:return q({},e,{showAlert:!e.showAlert});case W:return e.table.splice(t.payload,1),q({},e,{table:Object(P.a)(e.table)});case Y:return q({},e,{currentTime:t.payload.time,timerId:t.payload.timerId});default:return e}},V={currentTab:0,currentTime:0,currentName:"",timerId:null,timeStart:null,timeEnd:null,dateStart:null,table:[["\u2116","Task","Time Start","Time End","Time Spend","Info","Delete"]],showAlert:!1},X=localStorage.getItem("reduxState")?JSON.parse(localStorage.getItem("reduxState")):{};console.log(X);var Z=Object(x.b)(Q),ee=function(e){var t=Z.getState().table[e.match.params.index];return void 0===t?a.a.createElement("h1",null,"404 not found"):(console.log(t),a.a.createElement("div",null,a.a.createElement("h1",null,"Task: ",t[1]),a.a.createElement("h1",null,"Time Start: ",t[2]),a.a.createElement("h1",null,"Time End: ",t[3]),a.a.createElement("h1",null,"Time Spend ",t[4])))},te=Object(c.b)((function(e){return{currentTab:e.currentTab,currentTime:e.currentTime,currentName:e.currentName,timerId:e.timerId,table:e.table,showAlert:e.showAlert}}))((function(e){return a.a.createElement("div",null,a.a.createElement(i.b,{basename:"/"},a.a.createElement(u.c,null,a.a.createElement(u.a,{path:"/",exact:!0,component:_}),e.table.map((function(e,t){return t>0?a.a.createElement(u.a,{path:"/tasks/:index",key:t,exact:!0,component:ee}):null})),a.a.createElement(u.a,{render:function(){return a.a.createElement("h1",null,"404 not found")}}))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ne=a.a.createElement(c.a,{store:Z},a.a.createElement(i.a,null,a.a.createElement(te,null)));Z.subscribe((function(){localStorage.setItem("reduxState",JSON.stringify(Z.getState()))})),l.a.render(ne,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[70,1,2]]]);
//# sourceMappingURL=main.5b4d7377.chunk.js.map
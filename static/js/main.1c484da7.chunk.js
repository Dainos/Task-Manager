(this["webpackJsonptask-4"]=this["webpackJsonptask-4"]||[]).push([[0],{238:function(e,t,a){e.exports=a(425)},247:function(e,t,a){},425:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(15),c=a.n(o),l=a(65),u=a(97),i=a(46);a(247),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var m=a(41),s=a(196),d=a(33),p=a(16),f="CHANGE_TAB",E="CHANGE_TIME",b="STOP_TIMER",h="SET_TIMER",y="ADD_DATA",T="UPDATE_NAME",v="DELETE_DATA",O="ALERT",g="RESTART_TIMER",S="UPDATE_FROM_LOCALSTORAGE",w="ADD_GENERATED",k=function(e){return{type:E,payload:e}},H=function(e){return{type:v,payload:e}},j=function(e){return{type:S,payload:e}};function D(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function I(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?D(Object(a),!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):D(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return I({},e,{currentTab:t.payload});case E:return I({},e,{currentTime:t.payload});case h:return I({},e,{timerId:t.payload.timerId,dateStart:t.payload.dateStart,timeStart:t.payload.timeStart});case b:return I({},e,{timerId:null,currentTime:0,timeEnd:t.payload});case y:return I({},e,{table:[].concat(Object(d.a)(e.table),[[e.table.length,e.currentName,e.timeStart,e.timeEnd,t.payload]]),currentName:""});case T:return I({},e,{currentName:t.payload});case O:return I({},e,{showAlert:!e.showAlert});case v:return I({},e,{table:Object(d.a)(e.table)});case g:return I({},e,{currentTime:t.payload.time,timerId:t.payload.timerId});case S:return t.payload;case w:return I({},e,{table:t.payload});default:return e}},A=a(27),_=a.n(A),N=a(70),C=_.a.mark(K),R=_.a.mark(U),M=_.a.mark(B),P=_.a.mark(W),G=_.a.mark(V),L=a(102),J=[f,E,h,b,y,T,O,v];function K(){var e,t,a,n;return _.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,X(100);case 2:if(e=L($.getState().timeStart,"HH:mm:ss"),t=e.seconds()+60*e.minutes()+3600*e.hours(),a=L().subtract(t,"second"),n=a.seconds()+60*a.minutes()+3600*a.hours(),!($.getState().timerId>0)){r.next=18;break}return clearTimeout($.getState().timerId),r.next=10,X(50);case 10:return r.next=12,X(1e3);case 12:if(null!==$.getState().timerId){r.next=14;break}return r.abrupt("break",18);case 14:return r.next=16,Object(N.b)(k(++n));case 16:r.next=10;break;case 18:case"end":return r.stop()}}),C)}function U(){var e;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=JSON.parse(localStorage.getItem("applicationState")),console.log(e),null===e){t.next=7;break}return t.next=5,Object(N.b)(j(e));case 5:t.next=8;break;case 7:return t.abrupt("return");case 8:case"end":return t.stop()}}),R)}var X=function(e){return new Promise((function(t){return setTimeout(t,e)}))};function B(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X(200);case 2:localStorage.setItem("applicationState",JSON.stringify($.getState()));case 3:case"end":return e.stop()}}),M)}function W(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(N.c)(J,B);case 2:return e.next=4,Object(N.c)(J[3],K);case 4:case"end":return e.stop()}}),P)}function V(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(N.a)([U(),K(),B(),W()]);case 2:case"end":return e.stop()}}),G)}var z="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):m.c,F={currentTab:0,currentTime:0,currentName:"",timerId:null,timeStart:null,timeEnd:null,dateStart:null,table:[],showAlert:!1},Y=Object(s.a)(),$=Object(m.d)(x,z(Object(m.a)((function(e){return function(e){return function(t){return e(t)}}}),Y)));Y.run(V);var q=a(91),Q=a(42),Z=a(185),ee=a(186),te=a(197),ae=a(469),ne=a(480),re=a(478),oe=a(481),ce=a(479),le=a(470),ue=a(472),ie=a(464),me=a(471),se=a(468),de=Object(i.f)((function(e){var t=e.item,a=e.index,n=e.deleteData,o=e.history;return r.a.createElement(ie.a,null,t.map((function(e,t){return r.a.createElement(se.a,{key:t},e)})),r.a.createElement(se.a,null,r.a.createElement(ae.a,{variant:"contained",type:"submit",onClick:function(){o.push("/tasks/".concat(a))}},"Info")),r.a.createElement(se.a,null,r.a.createElement(ae.a,{variant:"contained",type:"submit",onClick:function(){n(a)}},"Delete")))})),pe=function(e){var t=e.table,a=e.deleteData;return r.a.createElement(le.a,null,r.a.createElement(me.a,null,r.a.createElement(ie.a,null,r.a.createElement(se.a,null,"\u2116"),r.a.createElement(se.a,null,"Task"),r.a.createElement(se.a,null,"Time Start"),r.a.createElement(se.a,null,"Time End"),r.a.createElement(se.a,null,"Time Spend"),r.a.createElement(se.a,null,"Info"),r.a.createElement(se.a,null,"Delete"))),r.a.createElement(ue.a,null,t.map((function(e,t){return r.a.createElement(de,{item:e,key:t,index:t,deleteData:a})}))))},fe=a(69),Ee=a(102),be=function(e){for(var t=Math.floor(5*Math.random()+10),a=[],n=0;n<t;n++){a.push([]);var r=Math.floor(80*Math.random()+10),o=Math.floor(23*Math.random()),c=Math.floor(59*Math.random());a[n][0]=n,a[n][1]="Random name",a[n][2]=Ee("00:00:00","HH:mm:ss").add(o,"hours").add(c,"minute").format("HH:mm:ss"),a[n][3]=Ee(a[n][2],"HH:mm:ss").add(r,"minute").format("HH:mm:ss"),a[n][4]=Ee("00:00:00","HH:mm:ss").add(r,"minute").format("HH:mm:ss")}e(a)},he=Object(l.b)((function(e){return{table:e.table}}),(function(e){return{deleteData:function(t){return e(H(t))},addGenerated:function(t){return e({type:w,payload:t})}}}))((function(e){for(var t=e.table,a=e.addGenerated,n=[],o={},c=0;c<24;c++)o[c]=0;for(var l=1;l<t.length;l++){var u=t[l][2].split(":");console.log(u);var i=t[l][4].split(":");o[+u[0]]+=+i[1]}for(var m=0;m<24;m++)n.push({name:m,"minutes of the hour":o[m]});return r.a.createElement("div",null,r.a.createElement(fe.b,{width:1300,height:400,data:n,margin:{top:50,right:30,left:20,bottom:5}},r.a.createElement(fe.d,{dataKey:"name",stroke:"#8884d8"}),r.a.createElement(fe.e,null),r.a.createElement(fe.c,null),r.a.createElement(fe.a,{type:"monotone",dataKey:"minutes of the hour",barSize:20,fill:"#8884d8",label:"label"})),r.a.createElement(ae.a,{variant:"contained",type:"submit",color:"primary",onClick:function(){be(a)}},"GENERATE"))})),ye=a(483),Te=a(477),ve=a(475),Oe=a(476),ge=a(474),Se=function(e){return r.a.createElement(ye.a,{open:e.open,color:"primary"},r.a.createElement(ge.a,{color:"primary"},"Empty task name"),r.a.createElement(ve.a,null,r.a.createElement(Oe.a,null,"You are trying close your task without name, enter the title and try again!")),r.a.createElement(Te.a,null,r.a.createElement(ae.a,{color:"primary",onClick:e.handle},"CLOSE")))},we=a(102),ke=function(e){function t(){var e,a;Object(q.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(Z.a)(this,(e=Object(ee.a)(t)).call.apply(e,[this].concat(o)))).changeTab=function(){var e=a.props,t=e.currentTab,n=e.changeTab;n(1===t?0:1)},a.startTimer=function(){var e=a.props,t=e.currentTime,n=e.changeTime,r=e.setTimer,o=t,c=setInterval((function(){n(++o)}),1e3);r({seconds:we().seconds(),minutes:we().minutes(),hours:we().hours(),timeStart:we().format("HH:mm:ss"),timerId:c})},a.stopTimer=function(){var e=a.props,t=e.timerId,n=e.stopTimer,r=e.addData;""!==e.currentName?(clearTimeout(t),n(we().format("HH:mm:ss")),r(a.timeRender().timeString)):a.alert()},a.restartTimer=function(){console.log("restartTimer")},a.delData=function(e){var t=a.props,n=t.table,r=t.deleteData;n.splice(e,1),r(e)},a.buttons=function(){return null==a.props.timerId?r.a.createElement(ae.a,{variant:"contained",type:"submit",color:"primary",onClick:a.startTimer},"Start"):r.a.createElement(ae.a,{variant:"contained",type:"submit",color:"primary",onClick:a.stopTimer},"Stop")},a.handleInput=function(e){a.props.updateName(e.target.value)},a.timeRender=function(){var e=a.props.currentTime;return{timeString:we("00:00:00","HH:mm:ss").add(e,"second").format("HH:mm:ss"),seconds:we("00:00:00","HH:mm:ss").add(e,"second").format("ss"),minutes:we("00:00:00","HH:mm:ss").add(e,"second").format("mm"),hours:we("00:00:00","HH:mm:ss").add(e,"second").format("HH")}},a.alert=function(){console.log("trying alert"),a.props.alert()},a}return Object(te.a)(t,e),Object(Q.a)(t,[{key:"render",value:function(){var e=this.props,t=e.currentTab,a=e.currentName,n=e.table,o=e.showAlert,c=[r.a.createElement(pe,{table:n,deleteData:this.delData}),r.a.createElement(he,null)];return r.a.createElement("div",null,r.a.createElement(Se,{open:o,handle:this.alert}),r.a.createElement(re.a,{container:!0,direction:"column",justify:"flex-start",alignItems:"center"},r.a.createElement(ne.a,{id:"standard-basic",value:a,label:"Name of your task",color:"primary",onChange:this.handleInput}),r.a.createElement("h1",null,this.timeRender().timeString),this.buttons()),r.a.createElement(oe.a,{value:t,indicatorColor:"secondary",textColor:"primary",variant:"fullWidth",onChange:this.changeTab},r.a.createElement(ce.a,{label:"TASKS LOG"}),r.a.createElement(ce.a,{label:"TASKS CHART"})),c[t])}}]),t}(n.Component),He=Object(l.b)((function(e){return{currentTab:e.currentTab,currentTime:e.currentTime,currentName:e.currentName,timerId:e.timerId,dateStart:e.dateStart,table:e.table,showAlert:e.showAlert}}),(function(e){return{changeTab:function(t){return e(function(e){return{type:f,payload:e}}(t))},changeTime:function(t){return e(k(t))},setTimer:function(t){return e(function(e){return{type:h,payload:e}}(t))},stopTimer:function(t){return e(function(e){return{type:b,payload:e}}(t))},addData:function(t){return e(function(e){return{type:y,payload:e}}(t))},updateName:function(t){return e(function(e){return{type:T,payload:e}}(t))},alert:function(){return e({type:O})},deleteData:function(t){return e(H(t))}}}))(ke),je=function(e){var t=$.getState().table[e.match.params.index];return void 0===t?r.a.createElement("h1",null,"404 not found"):(console.log(t),r.a.createElement("div",null,r.a.createElement("h1",null,"Task: ",t[1]),r.a.createElement("h1",null,"Time Start: ",t[2]),r.a.createElement("h1",null,"Time End: ",t[3]),r.a.createElement("h1",null,"Time Spend ",t[4])))},De=r.a.createElement(l.a,{store:$},r.a.createElement(u.a,null,r.a.createElement(u.b,{basename:"/"},r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",exact:!0,component:He}),r.a.createElement(i.a,{path:"/tasks/:index",exact:!0,component:je}),r.a.createElement(i.a,{render:function(){return r.a.createElement("h1",null,"404 not found")}})))));c.a.render(De,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[238,1,2]]]);
//# sourceMappingURL=main.1c484da7.chunk.js.map
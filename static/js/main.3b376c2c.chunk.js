(this.webpackJsonpcountdown=this.webpackJsonpcountdown||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(2),i=a.n(o),s=(a(12),a(3)),c=a(4),l=a(5),u=a(6),m=(a(13),function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={days:void 0,hours:void 0,minutes:void 0,seconds:void 0},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){var t=e.props.deadline,a=new Date(t).getTime()-(new Date).getTime(),n=Math.floor(a/864e5),r=Math.floor(a%864e5/36e5),o=Math.floor(a%36e5/6e4),i=Math.floor(a%6e4/1e3);e.setState({days:n,hours:r,minutes:o,seconds:i})}),1e3)}},{key:"componentWillUnmount",value:function(){this.interval&&clearInterval(this.interval)}},{key:"render",value:function(){var e=this.state,t=e.days,a=e.hours,n=e.minutes,o=e.seconds,i=f(t,30,0,0,360),s=f(a,24,0,0,360),c=f(n,60,0,0,360),l=f(o,60,0,0,360);return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"Time left to upskill: "),r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"items"},r.a.createElement(d,{radius:i}),t,r.a.createElement("div",null,"Days")),r.a.createElement("div",{className:"items"},r.a.createElement(d,{radius:s}),a,r.a.createElement("div",null,"Hours")),r.a.createElement("div",{className:"items"},r.a.createElement(d,{radius:c}),n,r.a.createElement("div",null,"Minutes")),r.a.createElement("div",{className:"items"},r.a.createElement(d,{radius:l}),o,r.a.createElement("div",null,"Seconds")))))}}]),a}(n.Component)),d=function(e){var t=e.radius;return r.a.createElement("svg",{className:"countdown-svg"},r.a.createElement("path",{fill:"none",stroke:"white","stroke-width":"4",d:h(50,50,48,0,t)}))};function v(e,t,a,n){var r=(n-90)*Math.PI/180;return{x:e+a*Math.cos(r),y:t+a*Math.sin(r)}}function h(e,t,a,n,r){var o=v(e,t,a,r),i=v(e,t,a,n),s=r-n<=180?"0":"1";return["M",o.x,o.y,"A",a,a,0,s,0,i.x,i.y].join(" ")}function f(e,t,a,n,r){return(e-t)*(r-n)/(a-t)+n}var E=m;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,{deadline:"Apr 14, 2020 00:00:00"})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.3b376c2c.chunk.js.map
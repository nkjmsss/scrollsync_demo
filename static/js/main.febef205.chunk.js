(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{117:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(26),r=n.n(c),o=(n(34),n(5)),s=n(6),l=n(8),h=n(7),u=n(9),d=n(2),m=n(27),p=n.n(m),v=Array(30).fill(0).reduce(function(e,t,n){return e+"\n  # This is a header".concat(n+1,"\n\n  This is a paragraph\n\n  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet aut ea quam ipsum culpa illum recusandae sapiente hic iusto. Nesciunt adipisci officia atque omnis numquam unde eum aut, commodi eaque?\n  ")},""),f=Object(d.a)({}),b=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).$el=i.a.createRef(),n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.$el.current;e&&this.props.setChildHeight&&this.props.setChildHeight(e.clientHeight)}},{key:"render",value:function(){return i.a.createElement("div",{ref:this.$el},i.a.createElement(p.a,{source:v,className:Object(d.a)(f,this.props.className)}))}}]),t}(i.a.Component),w=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(h.a)(t).call(this,e))).container=i.a.createRef(),n.state={height:0,childHeight:0},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("scroll",function(){var t=window.pageYOffset/(document.body.clientHeight-window.innerHeight);null!==e.container.current&&(e.container.current.scrollTop=(e.state.childHeight-e.container.current.clientHeight)*t)})}},{key:"setChildHeight",value:function(e){this.setState({childHeight:e})}},{key:"render",value:function(){return i.a.createElement("div",{className:this.props.className,ref:this.container},i.a.createElement(b,{setChildHeight:this.setChildHeight.bind(this)}))}}]),t}(i.a.Component),g=Object(d.a)({position:"fixed",overflow:"hidden",zIndex:2}),O=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("main",null,i.a.createElement(b,{className:Object(d.a)({visibility:"hidden"})}),i.a.createElement(w,{className:Object(d.a)(g,{width:"75vw",height:"30vh",left:"0",top:"0",borderBottom:"1px solid #000"})}),i.a.createElement(w,{className:Object(d.a)(g,{width:"25vw",height:"100vh",left:"75vw",top:"0vh",borderLeft:"1px solid #000"})}),i.a.createElement(w,{className:Object(d.a)(g,{width:"20vw",height:"70vh",left:"0vw",top:"30vh",borderRight:"1px solid #000"})}),i.a.createElement(w,{className:Object(d.a)(g,{width:"55vw",height:"70vh",left:"20vw",top:"30vh"})}))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},28:function(e,t,n){e.exports=n(117)},34:function(e,t,n){}},[[28,1,2]]]);
//# sourceMappingURL=main.febef205.chunk.js.map
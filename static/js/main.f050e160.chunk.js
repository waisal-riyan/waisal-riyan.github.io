(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{126:function(e,a,t){},135:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(7),r=t(8),i=t(10),o=t(9),m=t(11),s=t(18),d=t(42),u=t(43),v=t(27),g=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(e){return Object(c.a)(this,t),a.call(this,e)}return Object(r.a)(t,[{key:"render",value:function(){var e=new Date,a=new Date("2001-11-17"),t=0;(e.getMonth()<a.getMonth()||e.getMonth()===e.getMonth()&&e.getDate()<a.getDate())&&(t=1);var n=e.getFullYear()-a.getFullYear()-t;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container d-flex justify-content-center align-items-center min-vh-100"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 pt-6 order-1 order-md-0"},l.a.createElement(v.Animated,{animationIn:"fadeInLeftBig",animationInDuration:2e3},l.a.createElement("div",{className:"h5"},"Hi,"),l.a.createElement("div",{className:"h5"},"I`m Waisal Riyanto Saputra"),l.a.createElement("div",{className:"h3"},"Junior Web Programmer"),l.a.createElement("p",{className:"text-justify"},"I'm ",n," years old, I've been learning programming from vocational high school. after graduate, I follow of the training at ",l.a.createElement("strong",null,"BBPLK BEKASI")," as a web developer in 2 months and at ",l.a.createElement("strong",null,"ENIGMA BOOTCAMP")," as a full-stack software engineer in 3 months.",l.a.createElement("br",null)," there, I learned new things such as PHP, JAVA, JAVASCRIPT, REACTJS, REACT NATIVE, SPRING BOOT, MYSQL, NODE JS, AND EXPRESS JS.",l.a.createElement("br",null),"and currently, I focused learn fundamentals java, javascript, and version control git for maximizing when learning framework."),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 col-sm-12 d-flex align-items-center"},l.a.createElement("a",{download:!0,href:"/cv.pdf",className:"btn btn-sm mr-2 btn-dark text-light","aria-label":"Left Align"},l.a.createElement(m.a,{icon:s.a,"aria-hidden":!0})," \xa0 Download CV"),l.a.createElement("a",{target:"_blank",href:"https://github.com/waisal-riyan/",className:"mr-2 fontIcon"},l.a.createElement(m.a,{icon:d.faGithub})),l.a.createElement("a",{target:"_blank",className:"fontIcon",href:"https://www.instagram.com/waisal.r/"},l.a.createElement(m.a,{icon:u.faInstagram})))))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement(v.Animated,{animationIn:"zoomIn",animationInDuration:1500,isVisible:!0},l.a.createElement("img",{src:"/images/me2.png",className:"img-fluid",alt:""}))))))}}]),t}(n.Component),E=t(16),b=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={active:""},n}return Object(r.a)(t,[{key:"doClickToggler",value:function(){"active"===this.state.active?this.setState({active:""}):this.setState({active:"active"})}},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar fixed-bottom navbar-expand-lg navbar-light bg-light"},l.a.createElement("div",{className:"container"},l.a.createElement("button",{className:"navbar-toggler ".concat(this.state.active),onClick:function(){return e.doClickToggler()},type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(E.b,{exact:!0,activeClassName:"active-link",className:"nav-link",title:"Home",to:"/"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(E.b,{activeClassName:"active-link",className:"nav-link",title:"portfolio",to:"/project"},"Project")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(E.b,{activeClassName:"active-link",to:"/contact",className:"nav-link"},"contact me")))))))}}]),t}(n.Component),h=t(45),f=[{img:"images/harbor.JPG",title:"HarborApp",technology:["Springboot","React js"],link:"https://github.com/mini-project-harbor"}],p=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){var e=f.map((function(e){return l.a.createElement("div",{className:"card mb-4"},l.a.createElement("img",{src:e.img,alt:e.title,className:"card-img-top h-100"}),l.a.createElement("div",{className:"card-text"},l.a.createElement("h3",null,e.title),l.a.createElement("h6",null,e.technology.join(", ")),l.a.createElement("a",{href:e.link,className:"btn btn-light btn-sm"},l.a.createElement(m.a,{icon:h.faBook})," \xa0 source code")))}));return l.a.createElement("div",{className:"container pb-5"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{className:"h2 project-title pt-4 mb-3 pb-3"},"My Projects"),e)))}}]),t}(n.Component),N=t(2),j=t(46),k=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container d-flex pt-5 justify-content-center align-items-lg-start"},l.a.createElement("div",{className:"row text-center"},l.a.createElement("div",{className:"col-12 mb-5"},l.a.createElement("h2",{className:"text-center"},"Let's get in touch!"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-4 offset-4"},l.a.createElement("div",{className:"border-bottom border-dark"})))),l.a.createElement("div",{className:"col-sm-12 col-lg-6"},l.a.createElement("a",{href:"tel:0858-9346-7032"},l.a.createElement("div",{className:"btn btn-outline-dark h5 d-flex flex-row justify-content-center align-items-center rounded-pill  p-3"},l.a.createElement(m.a,{icon:s.c}),"\xa0 0858-9346-7032"))),l.a.createElement("div",{className:"col-sm-12 col-lg-6 col-md-12"},l.a.createElement("a",{href:"mailto:waisal.riyan@gmail.com"},l.a.createElement("div",{className:"btn btn-outline-dark h5 d-flex flex-row justify-content-center align-items-center rounded-pill p-3"},l.a.createElement(m.a,{icon:s.b}),"\xa0 waisal.riyan@gmail.com"))),l.a.createElement("div",{className:"col-sm-12 offset-lg-3 col-lg-6 mt-lg-2"},l.a.createElement("a",{target:"_blank",href:"https://api.whatsapp.com/send?phone=6281283715745"},l.a.createElement("div",{className:"btn btn-outline-dark h5 d-flex flex-row justify-content-center align-items-center rounded-pill p-3"},l.a.createElement(m.a,{icon:j.a}),"\xa0 0812-8371-5745")))))}}]),t}(n.Component),w=t(47),y=t.n(w),O=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={isLoading:!0},n}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({isLoading:!1})}),3500)}},{key:"render",value:function(){return this.state.isLoading?l.a.createElement("div",{className:"d-flex w-100 min-vh-100 position-absolute justify-content-center align-items-center bg-light"},l.a.createElement(y.a,{type:"Grid",color:"#333",height:100,width:100})):l.a.createElement(l.a.Fragment,null,l.a.createElement(E.a,null,l.a.createElement(N.c,null,l.a.createElement(N.a,{path:"/",exact:!0,component:g}),l.a.createElement(N.a,{path:"/project",component:p}),l.a.createElement(N.a,{path:"/contact",component:k})),l.a.createElement(b,null)))}}]),t}(n.Component),x=(t(126),t(127),t(128),t(48)),I=t.n(x);t(134);I.a.render(l.a.createElement(O,null),document.getElementById("root"))},49:function(e,a,t){e.exports=t(135)}},[[49,1,2]]]);
//# sourceMappingURL=main.f050e160.chunk.js.map
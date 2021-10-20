(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(3),c=a.n(r),s=(a(15),a(16),a(4)),i=a(5),l=a(7),u=a(6),h=(a(17),a(8)),d=a(10),g=a.n(d),p=(a(38),a(1));function m(e){var t=e.image,a=e.openModal;return Object(p.jsx)("li",{className:"ImageGalleryItem",onClick:function(){return a(t.largeImageURL)},children:Object(p.jsx)("img",{src:t.webformatURL,alt:"",className:"ImageGalleryItem-image"})})}a(40);function b(e){var t=e.images,a=e.openModal;return Object(p.jsx)(p.Fragment,{children:t&&Object(p.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){return Object(p.jsx)(m,{image:e,openModal:a},e.id)}))})})}a(41),a(42);var j=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={inputText:"","\u0441urrentSearch":""},e.handleChange=function(t){e.setState({inputText:t.currentTarget.value})},e.handleSubmit=function(t){var a=e.state,n=a.inputText,o=a.\u0441urrentSearch;t.preventDefault(),""!==n.trim()?n.trim().toLowerCase()!==o.toLowerCase()?(e.props.onSubmit(n.toLowerCase()),e.setState({"\u0441urrentSearch":n})):Object(h.b)("enter a new search query"):Object(h.b)("enter your search term")},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(p.jsx)("header",{className:"Searchbar",children:Object(p.jsxs)("form",{onSubmit:this.handleSubmit,className:"SearchForm",children:[Object(p.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(p.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(p.jsx)("input",{className:"SearchForm-input",type:"text",name:"inputText",value:this.state.inputText,onChange:this.handleChange,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(n.Component);a(43);function f(e){var t=e.clickBtn;return Object(p.jsx)("button",{type:"button",className:"Button",onClick:t,children:"Load more"})}a(44);var O=document.querySelector("#modal-root"),A=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).handleKeydown=function(t){"Escape"===t.code&&e.props.closeModal()},e.handleOverlay=function(t){t.currentTarget===t.target&&e.props.closeModal()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeydown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeydown)}},{key:"render",value:function(){return Object(r.createPortal)(Object(p.jsx)("div",{className:"Overlay",onClick:this.handleOverlay,children:Object(p.jsx)("div",{className:"Modal",children:Object(p.jsx)("img",{src:this.props.largeImageURL,alt:""})})}),O)}}]),a}(n.Component),y=a.p+"static/media/pixabay.97bc8187.svg";function x(e){var t=e.searchQuery;return Object(p.jsxs)("div",{className:"Div-loader",children:[Object(p.jsxs)("p",{children:['by request: "',Object(p.jsx)("span",{children:t}),'" nothing found']}),Object(p.jsx)("img",{src:"data:image/png;base64,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",alt:"",className:"Logo-image"})]})}var v=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={searchQuery:"",page:1,images:null,status:"idle",error:null,showModal:!1,largeImageURL:null},e.handleSerchQuery=function(t){e.setState({searchQuery:t,page:1,images:null})},e.clickLoadMore=function(){e.setState((function(e){return{page:e.page+1}}))},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.openModal=function(t){e.toggleModal(),e.setState({largeImageURL:t})},e.writeDownData=function(t){null===e.state.images?e.setState({images:t.hits}):e.setState((function(e){return{images:e.images.concat(t.hits)}}))},e.checkNeedLoadMore=function(){if(null!==e.state.images&&0!==e.state.images.length&&e.state.images.length%12===0)return!0},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t,a){var n=this,o=this.state,r=o.searchQuery,c=o.page;t.searchQuery===r&&t.page===c||(t.page===c&&this.setState({status:"pending"}),fetch("https://pixabay.com/api/?q=".concat(r,"&page=").concat(c,"&key=").concat("23100345-a1985f2d3b70e4240f74cca05","&image_type=").concat("photo","&orientation=").concat("horizontal","&per_page=").concat(12)).then((function(e){return e.ok?e.json():Promise.reject(new Error("nothing found for this request: ".concat(r)))})).then((function(e){n.setState({status:"resolved"}),n.writeDownData(e)})).then((function(){0===n.state.images.length&&n.setState({status:"rejected"})})).catch((function(e){return n.setState({status:"rejected"})}))),1!==c&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.showModal,a=e.largeImageURL,n=e.status,o=e.searchQuery;return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(j,{onSubmit:this.handleSerchQuery}),"idle"===n&&Object(p.jsx)("img",{src:y,alt:"",className:"Logo-image"}),"pending"===n&&Object(p.jsx)("div",{className:"Div-loader",children:Object(p.jsx)(g.a,{type:"ThreeDots",color:"blue"})}),"resolved"===n&&Object(p.jsx)(b,{images:this.state.images,openModal:this.openModal}),"rejected"===n&&Object(p.jsx)(x,{searchQuery:o}),this.checkNeedLoadMore()&&Object(p.jsx)(f,{clickBtn:this.clickLoadMore}),t&&Object(p.jsx)(A,{closeModal:this.toggleModal,largeImageURL:a}),Object(p.jsx)(h.a,{autoClose:2e3})]})}}]),a}(n.Component),w=v;c.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(w,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.c2e51f45.chunk.js.map
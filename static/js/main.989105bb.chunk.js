(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{20:function(e,a,t){e.exports=t(47)},43:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),s=t(13),i=t.n(s),c=t(3),m=t.n(c),o=t(14),l=t(15),u=t(16),v=t(19),d=t(18),p=t(17),g=t.n(p),y=(t(43),t(2)),f=t.n(y);t(46);function E(e){var a=e.year,t=e.title,r=e.summary,s=e.poster,i=e.genres;return n.a.createElement("div",{className:"movie"},n.a.createElement("img",{src:s,alt:t,title:t}),n.a.createElement("div",{className:"movie_data"},n.a.createElement("h3",{className:"movie_title"},t),n.a.createElement("h5",{className:"movie_year"},a),n.a.createElement("ul",{className:"movie_genres"},i.map((function(e,a){return n.a.createElement("li",{key:a,className:"genres_genre"},e)}))),n.a.createElement("p",{className:"movie_summary"},r.slice(0,140),"...")))}E.propTyes={id:f.a.number.isRequired,year:f.a.number.isRequired,title:f.a.string.isRequired,summary:f.a.string.isRequired,poster:f.a.string.isRequired,genres:f.a.arrayOf(f.a.string).isRequired};var h=E,_=function(e){Object(v.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=a.call.apply(a,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(o.a)(m.a.mark((function a(){var t,r;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,g.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:t=a.sent,r=t.data.data.movies,e.setState({movies:r,isLoading:!1});case 5:case"end":return a.stop()}}),a)}))),e}return Object(u.a)(t,[{key:"componentWillMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,a=e.isLoading,t=e.movies;return n.a.createElement("section",{className:"container"},a?n.a.createElement("div",{className:"loader"},n.a.createElement("span",{className:"loader_text"},"Loading...")):n.a.createElement("div",{className:"movies"},t.map((function(e){return n.a.createElement(h,{key:e.id,title:e.title,year:e.year,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),t}(n.a.Component);i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(_,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.989105bb.chunk.js.map
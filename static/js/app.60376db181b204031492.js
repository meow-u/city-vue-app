webpackJsonp([1],{"4inK":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),a=n("7t+N"),o=n.n(a),i={name:"TopArea",data:function(){return{sdata:this.$store.state.cityData,num:2}},methods:{chgData:function(t){console.log("업데이트!",t),this.$store.commit("chgData",t)},chgMenu:function(t){var e=this;console.log("메뉴변경:",t),this.$store.commit("chgMenu",t),this.num=1===t?2:1,o()(function(){return e.setJQ()})},setJQ:function(){console.log("jQ셋팅!"),o()(".gnb a").click(function(t){t.preventDefault(),o()(this).addClass("on").parent().siblings().find("a").removeClass("on"),o()("main img").css({opacity:0}).stop().delay(500).fadeTo(500,1),o()("main p").css({opacity:0}).stop().delay(1e3).fadeTo(500,1)})}},mounted:function(){this.setJQ()}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("ul",{staticClass:"gnb"},t._l(this.$store.state.cityData,function(e,s){return n("li",{key:s},["인트로"!=s?n("a",{attrs:{href:"#"},on:{click:function(e){return t.chgData(s)}}},[t._v("\n        "+t._s(s)+"\n      ")]):t._e()])}),0),t._v(" "),n("div",{staticClass:"m2"},[n("a",{attrs:{href:"#"},domProps:{textContent:t._s("메뉴"+t.num)},on:{click:function(e){return e.preventDefault(),t.chgMenu(t.num)}}})])])},staticRenderFns:[]};var c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("main",[e("img",{attrs:{src:this.$store.state.imgsrc,alt:"지역이미지"}}),this._v(" "),e("p",{domProps:{textContent:this._s(this.$store.state.desc)}})])},staticRenderFns:[]};var u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this._m(0),this._v(" "),e("div",{staticClass:"asso"},[e("router-link",{attrs:{to:"/trip",tag:"button"}},[this._v(" 세계여행사")]),this._v(" "),e("router-link",{attrs:{to:"/foods"}},[this._v(" 세계먹거리")]),this._v(" "),e("router-view")],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",[e("address",[this._v("서울시 강남구 역삼동 119 뷰엑스B")])])}]};var p={name:"App",components:{TopArea:n("VU/8")(i,r,!1,function(t){n("Yabf")},"data-v-d7f646c0",null).exports,MainArea:n("VU/8")({name:"MainArea",data:function(){return{msg:"Welcome to Your Vue.js App"}}},c,!1,function(t){n("f3kS")},"data-v-65b90ec5",null).exports,FooterArea:n("VU/8")({name:"FooterArea",data:function(){return{msg:"Welcome to Your Vue.js App"}}},u,!1,function(t){n("SQPt")},"data-v-819c814e",null).exports}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("TopArea"),this._v(" "),e("MainArea")],1)},staticRenderFns:[]};var l=n("VU/8")(p,m,!1,function(t){n("4inK")},null,null).exports,f=n("/ocq");s.a.use(f.a);var d=new f.a({routes:[{path:"/trip",component:{template:'<div class="trip router">World Trip</div>'}},{path:"/foods",component:{template:'<div class="foods router">World Foods</div>'}}]}),h=n("Dd8w"),g=n.n(h),v=n("NYxO"),_=(n("j1ja"),{"인트로":{"이미지":"https://img.freepik.com/premium-vector/city-illustration_23-2147514701.jpg","설명":"도시소개에 오신것을 환영합니다!"}}),y={"서울":{"이미지":"https://www.shutterstock.com/image-photo/songpagu-seoul-south-korea-september-260nw-2094838786.jpg","설명":"대한민국의 수도인 서울을 지방자치단체인 특별시로 부르는 명칭이다. 한반도 중앙에 있으며, 한강을 사이에 두고 남북으로 펼쳐져 있다. 북쪽 끝은 도봉구 도봉동, 동쪽 끝은 강동구 상일동, 남쪽 끝은 서초구 원지동, 서쪽 끝은 강서구 오곡동이다. 시청은 중구 을지로1가(태평로1가 31)에 있다."},"부산":{"이미지":"https://imagescdn.gettyimagesbank.com/500/201901/jv11336724.jpg","설명":"대한민국 제2의 도시이자, 제1의 무역항이다. 동쪽과 남쪽은 바다에 면하고, 서쪽은 김해시 장유동과 창원시 진해구, 북쪽은 양산시 물금읍과 김해시 대동면, 동쪽은 울산광역시 서생면·온양읍에 접한다. 대한민국 남동단의 관문으로 서울특별시에서 남동쪽으로 약 450km, 대한해협을 끼고 일본 시모노세키[下關]와 약 250km 떨어져 있다. 1군 15구로 이루어져 있으며, 면적은 765.94㎢이다. 시청 소재지는 부산광역시 연제구 연산5동 1000번지이다."},"제주":{"이미지":"https://www.jejusori.net/news/photo/202211/409902_416608_4312.jpg","설명":"한국·중국·일본 등 극동 지역의 중앙부에 있어 지정학적으로도 중요하며, 도 전체가 바다로 둘러싸였다. 수리적(數理的)으로는 동경 126°08'∼126°58', 북위 33°06'∼34°00'에 위치한다. 북단은 북위 34°00'의 제주시 추자면 대서리이며, 남단은 북위 33°06'의 서귀포시 대정읍 마라도다. 한국 최남단에 있는 도로서, 제주도를 포함해 9개의 유인도와 55개의 무인도로 이루어졌다. 이 가운데 유인도는 우도·상추자도·하추자도·비양도·횡간도·추포도·가파도·마라도이다. 남북 간의 거리가 약 31㎞, 동서간의 거리가 약 73㎞로 동서로 가로놓인 모양이다. 러시아·중국 등의 대륙과 일본·동남아 등지를 연결하는 요충지이며, 천혜의 자연경관이 수려한 세계적인 휴양관광지다."}};s.a.use(v.a);var D=new v.a.Store({state:{cityData:g()({},_,y),myD0:_,myD1:y,myD2:{"대전":{"이미지":"https://i.pinimg.com/originals/3f/75/8c/3f758c4e8822c15f318e0ff79ddf6fc8.jpg","설명":"동경 127°14'~127°33', 북위 36°10'~36°29'에 있다. 동쪽으로 충청북도 보은군·옥천군, 북쪽으로 충청북도 청주시, 세종특별자치시, 남쪽으로 충청남도 금산군, 서쪽으로 충청남도 논산시·공주시에 접한다."},"대구":{"이미지":"https://file.mk.co.kr/neds/20220225/20220225_4956350_1645675922.jpg","설명":"북쪽으로 경상북도 칠곡군·군위군, 동쪽으로 경상북도 경산시·청도군, 남쪽으로 경상남도 창녕군, 서쪽으로 경상북도 고령군·성주군과 접한다. 영남지방의 중앙에서 서쪽으로 치우친 대구분지의 중앙부, 낙동강(洛東江)과 금호강(琴湖江)의 합류지점 동쪽 금호강 연안에 있다."},"광주":{"이미지":"https://tour.gwangju.go.kr/uploads/board/2017/02/201702111107061840.jpg","설명":"북동쪽으로 담양군, 북쪽으로 장성군, 서쪽으로 함평군, 남쪽으로 나주시, 남동쪽으로 화순군에 접한다. 서울·부산·대구·인천·대전에 이어 국내 제6위를 차지하는 대도시이며, 호남지방 최대의 도시이다. 2011년 현재 행정구분은 5개 자치구, 93개 행정동으로 이루어져 있으며, 시청 소재지는 광주시 서구 내방로 111이다."}},imgsrc:"",desc:""},mutations:{initSet:function(t){console.log("데이터변경! 초기화!",t),t.imgsrc=t.cityData.인트로.이미지,t.desc=t.cityData.인트로.설명},chgData:function(t,e){t.imgsrc=t.cityData[e].이미지,t.desc=t.cityData[e].설명},chgMenu:function(t,e){t.cityData=1==e?g()({},t.myD0,t.myD1):g()({},t.myD0,t.myD2),console.log("뮤테호출!",e,t.cityData),t.imgsrc=t.cityData.인트로.이미지,t.desc=t.cityData.인트로.설명}},actions:{myAct:function(t,e){console.log("나의액숀:",t,e)}}});s.a.config.productionTip=!1,new s.a({el:"#app",store:D,router:d,components:{App:l},template:"<App/>",created:function(){D.commit("initSet")}})},SQPt:function(t,e){},Yabf:function(t,e){},f3kS:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.60376db181b204031492.js.map
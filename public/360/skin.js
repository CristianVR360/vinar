// Garden Gnome Software - Skin
// Pano2VR 6.1.2/17873
// Filename: vendimia.ggsk
// Generated 2025-05-05T14:55:47

function pano2vrSkin(player,base) {
	player.addVariable('vis_card', 2, false);
	player.addVariable('numerolote', 0, "");
	player.addVariable('popup_geoInfo', 2, false);
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('configloaded', function() { me.callNodeChange(me.divSkin); });
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 483px;';
		hs+='left : -7px;';
		hs+='opacity : 0.1;';
		hs+='position : absolute;';
		hs+='top : -13px;';
		hs+='visibility : hidden;';
		hs+='width : 626px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._rectangle_1);
		el=me._svg_10=document.createElement('div');
		els=me._svg_10__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjQuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI3Ny4xIDgwLjg7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCIgaWQ9IkNhcGFfMSIgeD0iMHB4IiB2aWV3Qm94PSIwID'+
			'AgMjc3LjEgODAuOCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9JiN4ZDsKPC9zdHlsZT4KIDxnPgogIDxnPgogICA8Zz4KICAgIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMzYuNyw4MC44SDQwLjRDMTguMSw4MC44LDAsNjIuNywwLDQwLjRTMTgsMCw0MC40LDBoMTk2LjNjMjIuMywwLDQwLjQsMTguMSw0MC40LDQwLjQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtTMjU5LjEsODAuOCwyMzYuNyw4MC44eiBNNDAuNCwzQzE5LjgsMywzLDE5LjgsMyw0MC40czE2LjgsMzcuNCwzNy40LDM3LjRoMTk2LjNjMjAuNiwwLDM3LjQtMTYuOCwzNy40'+
			'LTM3LjRTMjU3LjMsMywyMzYuNywzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7QzIzNi44LDMsNDAuNCwzLDQwLjQsM3oiLz4KICAgPC9nPgogICA8Zz4KICAgIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zOC44LDIuN2MxLjIsMCwyLjMsMCwzLjUsMGMwLjQsMC4xLDAuOCwwLjEsMS4yLDAuMmMyLjQsMC4yLDQuOCwwLjYsNy4xLDEuMmM5LjYsMi43LDE3LjIsOC40LDIyLjMsMTcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjNS41LDkuMyw2LjgsMTkuMiwzLjksMjkuNmMtMi42LDkuMy04LjEsMTYuNS0xNi4yLDIxLjdjLTQuNCwyLjgtOS4zLDQuNi0xNC41LDUuM2MtMSwwLjEtMi'+
			'wwLjMtMywwLjRjLTEuNywwLTMuNCwwLTUuMSwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7QzM3LjcsNzgsMzcuNSw3OCwzNy4yLDc4Yy02LjEtMC42LTExLjctMi40LTE2LjgtNS43QzEwLjgsNjYuMSw1LjIsNTcuNCwzLjMsNDYuMmMtMC4yLTEuMy0wLjItMi43LTAuNS00YzAtMS4yLDAtMi4zLDAtMy41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7QzMsMzgsMywzNy4zLDMsMzYuNmMwLjctNi40LDIuNy0xMi4yLDYuNC0xNy41QzE1LjgsMTAsMjQuNiw0LjYsMzUuNiwzQzM2LjcsMi45LDM3LjgsMi45LDM4LjgsMi43eiBNNjAuMyw0MC40JiN4ZDsmI3hhOyYjeDk7JiN4OTsm'+
			'I3g5OyYjeDk7YzAtMi45LDAtNS44LDAtOC42YzAtMC44LDAtMS41LTAuMi0yLjNjLTEuMS01LjMtNS4zLTguOS0xMC43LTljLTYtMC4xLTEyLDAtMTcuOSwwYy0yLjYsMC01LDAuOS03LDIuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMi42LDIuMi0zLjksNS4xLTMuOSw4LjVjMCw1LjgsMCwxMS43LDAsMTcuNWMwLDAuNywwLDEuNCwwLjIsMi4yYzEuMSw1LjMsNS40LDguOSwxMC44LDguOWM1LjksMCwxMS45LDAsMTcuOCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzEuNSwwLDMtMC4yLDQuMy0wLjljNC4zLTIsNi41LTUuNCw2LjYtMTAuMkM2MC40LDQ2LjMsNjAuMy'+
			'w0My4zLDYwLjMsNDAuNHoiLz4KICAgIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MC41LDU2LjhjLTIuNSwwLTQuOSwwLTcuNCwwYy00LjIsMC03LjgtMi44LTguOC02LjljLTAuMi0wLjctMC4yLTEuNC0wLjItMi4xYzAtNSwwLTkuOSwwLTE0LjkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC00LjQsMy4zLTguMSw3LjYtOC43YzAuNC0wLjEsMC45LTAuMSwxLjMtMC4xYzQuOSwwLDkuOCwwLDE0LjcsMGM0LjMsMCw3LjksMi44LDguOSw3YzAuMiwwLjYsMC4yLDEuMywwLjIsMmMwLDUsMCw5LjksMCwxNC45JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAsNC4yLTIuOCw3Ljct'+
			'Ni45LDguN2MtMC43LDAuMi0xLjUsMC4yLTIuMiwwLjJDNDUuMyw1Ni44LDQyLjksNTYuOCw0MC41LDU2LjhMNDAuNSw1Ni44eiBNNTAuNiw0MC4zYzAtNS42LTQuNS0xMC4yLTEwLTEwLjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTUuNiwwLTEwLjIsNC42LTEwLjIsMTAuMmMwLDUuNyw0LjUsMTAuMywxMCwxMC4zQzQ2LDUwLjYsNTAuNiw0Niw1MC42LDQwLjN6IE01My42LDI5LjdjMC0xLjQtMS4xLTIuNS0yLjQtMi40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0xLjMsMC0yLjQsMS4xLTIuNCwyLjRjMCwxLjMsMS4xLDIuNSwyLjQsMi41QzUyLjUsMzIuMSw1My42LD'+
			'MxLDUzLjYsMjkuN3oiLz4KICAgIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zMy43LDQwLjRjMC0zLjcsMy02LjcsNi43LTYuN3M2LjcsMyw2LjcsNi43YzAsMy44LTMsNi43LTYuNyw2LjdTMzMuNyw0NC4xLDMzLjcsNDAuNHoiLz4KICAgPC9nPgogIDwvZz4KICA8Zz4KICAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTExMS4zLDQ2LjNsMy4yLTkuN2gzLjRsLTQuNiwxMi43aC0zLjlsLTQuNi0xMi42aDMuNEwxMTEuMyw0Ni4zeiIvPgogICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTIwLDM0LjZjLTAuNC0wLjMtMC41LTAuOC0wLjUtMS4zczAuMi0xLDAuNS0xLjNjMC40LTAuMywwLjktMC41LDEuNC0w'+
			'LjVzMS4xLDAuMiwxLjQsMC41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjQsMC4zLDAuNSwwLjgsMC41LDEuM3MtMC4yLDEtMC41LDEuM2MtMC40LDAuMy0wLjksMC41LTEuNCwwLjVDMTIwLjksMzUuMSwxMjAuMywzNSwxMjAsMzQuNnogTTEyMywzNi42djEyLjZoLTMuMlYzNi42SDEyM3oiLz4KICAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTEzNi44LDM3LjljMC45LDAuOSwxLjQsMi4yLDEuNCw0djcuNEgxMzV2LTYuOWMwLTEtMC4zLTEuOC0wLjctMi4zYy0wLjUtMC41LTEuMi0wLjgtMi0wLjgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjksMC0xLjYsMC4zLTIuMSwwLjhzLTAuOC'+
			'wxLjMtMC44LDIuM3Y3aC0zLjJWMzYuNmgzLjJ2MS42YzAuNC0wLjUsMS0xLDEuNy0xLjNjMC43LTAuMywxLjQtMC41LDIuMi0wLjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzEzNC42LDM2LjQsMTM1LjksMzYuOSwxMzYuOCwzNy45eiIvPgogICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTQxLjIsMzkuNWMwLjUtMSwxLjItMS43LDItMi4zYzAuOS0wLjUsMS45LTAuOCwyLjktMC44YzAuOSwwLDEuOCwwLjIsMi40LDAuNmMwLjcsMC40LDEuMywwLjksMS43LDEuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTt2LTEuOGgzLjJ2MTIuNmgtMy4ydi0xLjljLTAuNCwwLjYtMSwxLjEtMS43LDEuNWMt'+
			'MC43LDAuNC0xLjYsMC42LTIuNSwwLjZjLTEuMSwwLTItMC4zLTIuOS0wLjhzLTEuNi0xLjMtMi0yLjMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjUtMS0wLjgtMi4xLTAuOC0zLjRDMTQwLjQsNDEuNiwxNDAuNiw0MC41LDE0MS4yLDM5LjV6IE0xNDkuOSw0MWMtMC4zLTAuNS0wLjctMS0xLjMtMS4zYy0wLjUtMC4zLTEuMS0wLjUtMS43LTAuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtzLTEuMSwwLjEtMS43LDAuNWMtMC41LDAuMy0wLjksMC43LTEuMiwxLjNjLTAuMywwLjUtMC41LDEuMi0wLjUsMnMwLjEsMS41LDAuNSwyYzAuMywwLjYsMC43LDEsMS4zLDEuM2MwLjUsMC4zLDEuMS'+
			'wwLjUsMS43LDAuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC42LDAsMS4xLTAuMSwxLjctMC41YzAuNS0wLjMsMC45LTAuNywxLjMtMS4zYzAuMy0wLjUsMC41LTEuMiwwLjUtMkMxNTAuMyw0Mi4yLDE1MC4yLDQxLjUsMTQ5LjksNDF6Ii8+CiAgIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNjEuNSwzN2MwLjctMC40LDEuNC0wLjYsMi4yLTAuNnYzLjRoLTAuOWMtMSwwLTEuOCwwLjMtMi4yLDAuN2MtMC41LDAuNS0wLjgsMS4zLTAuOCwyLjR2Ni4zaC0zLjJWMzYuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtoMy4ydjJDMTYwLjMsMzcuOSwxNjAuOSwzNy40LDE2MS41LDM3eiIvPgogICA8'+
			'cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTgwLjIsNTAuMnYzaC0xMy40di0zQzE2Ni44LDUwLjIsMTgwLjIsNTAuMiwxODAuMiw1MC4yeiIvPgogICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTgzLjksMzkuNWMwLjUtMSwxLjMtMS43LDIuMi0yLjNjMC45LTAuNSwyLTAuOCwzLjItMC44YzEuNiwwLDIuOCwwLjQsMy45LDEuMmMxLjEsMC44LDEuNywxLjksMiwzLjNoLTMuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMi0wLjUtMC41LTEtMC45LTEuM3MtMS0wLjUtMS42LTAuNWMtMC45LDAtMS43LDAuMy0yLjIsMXMtMC44LDEuNi0wLjgsMi44czAuMywyLjEsMC44LDIuOHMxLjMsMSwyLjIsMS'+
			'YjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMS4zLDAsMi4xLTAuNiwyLjUtMS43aDMuNGMtMC4zLDEuNC0xLjEsMi40LTIsMy4yYy0xLjEsMC44LTIuMywxLjItMy45LDEuMmMtMS4yLDAtMi4zLTAuMy0zLjItMC44cy0xLjctMS4zLTIuMi0yLjMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7cy0wLjgtMi4xLTAuOC0zLjRDMTgzLjEsNDEuNiwxODMuNCw0MC41LDE4My45LDM5LjV6Ii8+CiAgIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMDcuNCwzNy4xYzAuNywwLjQsMS4zLDEuMSwxLjcsMS45czAuNywxLjgsMC43LDIuOXY3LjRoLTMuMnYtNi45YzAtMS0wLjMtMS44LTAuNy0yLjMmI3hkOyYjeGE7'+
			'JiN4OTsmI3g5OyYjeDk7Yy0wLjUtMC41LTEuMi0wLjgtMi0wLjhzLTEuNiwwLjMtMi4xLDAuOHMtMC44LDEuMy0wLjgsMi4zdjdoLTMuMnYtMTdoMy4ydjUuOGMwLjQtMC41LDEtMSwxLjctMS4zczEuNS0wLjUsMi4zLTAuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDMjA1LjgsMzYuNCwyMDYuNywzNi43LDIwNy40LDM3LjF6Ii8+CiAgIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMTMsMzQuNmMtMC40LTAuMy0wLjUtMC44LTAuNS0xLjNzMC4yLTEsMC41LTEuM2MwLjQtMC4zLDAuOS0wLjUsMS40LTAuNWMwLjYsMCwxLjEsMC4yLDEuNCwwLjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNC'+
			'wwLjMsMC41LDAuOCwwLjUsMS4zcy0wLjIsMS0wLjUsMS4zYy0wLjQsMC4zLTAuOSwwLjUtMS40LDAuNVMyMTMuNCwzNSwyMTMsMzQuNnogTTIxNiwzNi42djEyLjZoLTMuMlYzNi42SDIxNnoiLz4KICAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTIyMi4zLDMyLjR2MTYuOWgtMy4yVjMyLjRIMjIyLjN6Ii8+CiAgIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMzcuMiw0My45aC05LjNjMC4xLDAuOSwwLjQsMS43LDEsMi4xYzAuNiwwLjUsMS4zLDAuOCwyLDAuOGMxLjIsMCwyLTAuNSwyLjUtMS41aDMuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuNCwxLjItMS4xLDIuMi0yLjEsM2MtMS4xLDAu'+
			'OC0yLjMsMS4yLTMuOCwxLjJjLTEuMiwwLTIuMy0wLjMtMy4zLTAuOHMtMS43LTEuMy0yLjItMi4zcy0wLjgtMi4xLTAuOC0zLjRzMC4zLTIuNCwwLjgtMy40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O3MxLjMtMS43LDIuMi0yLjNjMS0wLjUsMi0wLjgsMy4zLTAuOGMxLjIsMCwyLjIsMC4zLDMuMiwwLjhjMC45LDAuNSwxLjcsMS4zLDIuMiwyLjJzMC44LDIsMC44LDMuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDMjM3LjMsNDMuMiwyMzcuMyw0My42LDIzNy4yLDQzLjl6IE0yMzMuOSw0MS44YzAtMC44LTAuMy0xLjUtMC45LTJzLTEuMy0wLjctMi4xLTAuN2MtMC44LDAtMS41LDAuMy0yLD'+
			'AuN3MtMC45LDEuMS0xLDJIMjMzLjl6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._svg_10__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggDx=84;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 33px;';
		hs+='visibility : inherit;';
		hs+='width : 128px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_10.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._svg_10.onclick=function (e) {
			player.openUrl("https:\/\/www.instagram.com\/vinar_chile","_blank");
		}
		me._svg_10.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._svg_10);
		el=me._svg_2=document.createElement('div');
		els=me._svg_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._svg_2__img.setAttribute('src',basePath + 'images/svg_2.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2";
		el.ggDx=-82;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 33px;';
		hs+='visibility : inherit;';
		hs+='width : 182px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._svg_2.onclick=function (e) {
			player.openUrl("https:\/\/www.vendimiaaraucania.cl","_blank");
		}
		me._svg_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._svg_2);
		el=me._card=document.createElement('div');
		el.ggId="card";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 8px;';
		hs+='border-radius : 8px;';
		hs+='background : rgba(95,0,27,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 96px;';
		hs+='cursor : default;';
		hs+='height : 180px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._card.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._card.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_card') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._card.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._card.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._card.style[domTransition]='';
				if (me._card.ggCurrentLogicStateVisible == 0) {
					me._card.style.visibility=(Number(me._card.style.opacity)>0||!me._card.style.opacity)?'inherit':'hidden';
					me._card.ggVisible=true;
				}
				else {
					me._card.style.visibility="hidden";
					me._card.ggVisible=false;
				}
			}
		}
		me._card.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._card_body=document.createElement('div');
		els=me._card_body__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="card_body";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text cardDescription";
		el.ggType='text';
		hs ='';
		hs+='height : 128px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 33px;';
		hs+='visibility : inherit;';
		hs+='width : 260px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 260px;';
		hs+='height: 128px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._card_body.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._card_body.ggUpdatePosition=function (useTransition) {
		}
		me._card.appendChild(me._card_body);
		el=me._container_2=document.createElement('div');
		el.ggId="Container 2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 15px;';
		hs+='height : 17px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 169px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._svg_1=document.createElement('div');
		els=me._svg_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQyNS4yIDI4My41OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB5PSIwcHgiIGlkPSJDYXBhXzEiIHg9IjBweCIgdmlld0JveD0iMC'+
			'AwIDQyNS4yIDI4My41Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojQjRCNkMzO30mI3hkOwoJLnN0MXtmaWxsOiMxQjFBMTg7fSYjeGQ7Cjwvc3R5bGU+CiA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzY4LjIsMjgzLjVINTdjLTMxLjUsMC01Ny0yMS4yLTU3LTQ3LjVWNDcuNUMwLDIxLjIsMjUuNSwwLDU3LDBoMzExLjJjMzEuNSwwLDU3LDIxLjIsNTcsNDcuNXYxODguNCYjeGQ7JiN4YTsmI3g5O0M0MjUuMiwyNjIuMSwzOTkuNywyODMuNSwzNjguMiwyODMuNXoiLz4KIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zMDguMSw0NS44Yy0yNC0yNC01NS45LTM3LjMtODku'+
			'OC0zNy4zYy03MCwwLTEyNyw1Ny0xMjcsMTI3YzAsMjIuNCw1LjksNDQuMiwxNi45LDYzLjRsLTE4LDY1LjhsNjcuMy0xNy43JiN4ZDsmI3hhOyYjeDk7YzE4LjUsMTAuMSwzOS40LDE1LjQsNjAuNywxNS40aDAuMWM2OS45LDAsMTI4LjEtNTcsMTI4LjEtMTI3QzM0Ni40LDEwMS43LDMzMiw2OS44LDMwOC4xLDQ1Ljh6IE0yMTguMywyNDEuMSYjeGQ7JiN4YTsmI3g5O2MtMTksMC0zNy41LTUuMS01My44LTE0LjdsLTMuOC0yLjNsLTM5LjksMTAuNWwxMC42LTM4LjlsLTIuNS00Yy0xMC42LTE2LjgtMTYuMS0zNi4yLTE2LjEtNTYuMmMwLTU4LjEsNDcuNC0xMDUuNSwxMDUuNi0xMDUuNSYjeGQ7Ji'+
			'N4YTsmI3g5O2MyOC4yLDAsNTQuNywxMSw3NC41LDMxczMyLjEsNDYuNCwzMi4xLDc0LjZDMzI1LDE5My44LDI3Ni40LDI0MS4xLDIxOC4zLDI0MS4xeiBNMjc2LjIsMTYyLjFjLTMuMS0xLjYtMTguNy05LjItMjEuNi0xMC4zJiN4ZDsmI3hhOyYjeDk7Yy0yLjktMS4xLTUuMS0xLjYtNy4yLDEuNmMtMi4xLDMuMi04LjIsMTAuMy0xMCwxMi41Yy0xLjksMi4xLTMuNywyLjQtNi44LDAuOGMtMTguNi05LjMtMzAuOS0xNi43LTQzLjItMzcuNyYjeGQ7JiN4YTsmI3g5O2MtMy4zLTUuNiwzLjMtNS4yLDkuMy0xNy4zYzEuMS0yLjEsMC41LTMuOS0wLjMtNS42Yy0wLjgtMS42LTcuMi0xNy4yLTkuOC0y'+
			'My42Yy0yLjYtNi4yLTUuMi01LjMtNy4yLTUuNGMtMS45LTAuMS0zLjktMC4xLTYtMC4xJiN4ZDsmI3hhOyYjeDk7Yy0yLjEsMC01LjYsMC44LTguNCwzLjljLTIuOSwzLjItMTEuMSwxMC44LTExLjEsMjYuNHMxMS40LDMwLjcsMTMsMzIuOGMxLjYsMi4xLDIyLjQsMzQuMiw1NC4yLDQ3LjljMjAuMSw4LjcsMjgsOS40LDM4LjEsOCYjeGQ7JiN4YTsmI3g5O2M2LjEtMC45LDE4LjctNy42LDIxLjQtMTUuMWMyLjctNy41LDIuNy0xMy44LDEuOS0xNS4xQzI4MS41LDE2NC40LDI3OS4zLDE2My42LDI3Ni4yLDE2Mi4xeiIvPgo8L3N2Zz4K';
		me._svg_1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggDx=-38;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 37px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['svg_1'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._svg_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._svg_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._svg_1.style[domTransition]='' + cssPrefix + 'transform 300ms ease 0ms';
				if (me._svg_1.ggCurrentLogicStateScaling == 0) {
					me._svg_1.ggParameter.sx = 1.1;
					me._svg_1.ggParameter.sy = 1.1;
					me._svg_1.style[domTransform]=parameterToTransform(me._svg_1.ggParameter);
				}
				else {
					me._svg_1.ggParameter.sx = 1;
					me._svg_1.ggParameter.sy = 1;
					me._svg_1.style[domTransform]=parameterToTransform(me._svg_1.ggParameter);
				}
			}
		}
		me._svg_1.onclick=function (e) {
			player.openUrl("https:\/\/wa.me\/","_blank");
		}
		me._svg_1.onmouseover=function (e) {
			me.elementMouseOver['svg_1']=true;
			me._svg_1.logicBlock_scaling();
		}
		me._svg_1.onmouseout=function (e) {
			me.elementMouseOver['svg_1']=false;
			me._svg_1.logicBlock_scaling();
		}
		me._svg_1.ontouchend=function (e) {
			me.elementMouseOver['svg_1']=false;
			me._svg_1.logicBlock_scaling();
		}
		me._svg_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._container_2.appendChild(me._svg_1);
		el=me._buttongdownload=document.createElement('div');
		els=me._buttongdownload__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="buttongdownload";
		el.ggDx=32;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 18px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 75px;';
		hs+='pointer-events:auto;';
		hs+='font-weight: 700; margin-bottom:2px;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 75px;';
		hs+='height: 18px;';
		hs+='background: #b4b6c3;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 2px;';
		hs+=cssPrefix + 'border-radius: 2px;';
		hs+='color: #000000;';
		hs+='font-size: 12px;';
		hs+='font-weight: 800;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 1px 2px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Cotizar";
		el.appendChild(els);
		me._buttongdownload.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._buttongdownload.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['buttongdownload'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._buttongdownload.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._buttongdownload.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._buttongdownload.style[domTransition]='' + cssPrefix + 'transform 300ms ease 0ms';
				if (me._buttongdownload.ggCurrentLogicStateScaling == 0) {
					me._buttongdownload.ggParameter.sx = 1.1;
					me._buttongdownload.ggParameter.sy = 1.1;
					me._buttongdownload.style[domTransform]=parameterToTransform(me._buttongdownload.ggParameter);
				}
				else {
					me._buttongdownload.ggParameter.sx = 1;
					me._buttongdownload.ggParameter.sy = 1;
					me._buttongdownload.style[domTransform]=parameterToTransform(me._buttongdownload.ggParameter);
				}
			}
		}
		me._buttongdownload.onclick=function (e) {
			player.openUrl("https:\/\/","_blank");
		}
		me._buttongdownload.onmouseover=function (e) {
			me.elementMouseOver['buttongdownload']=true;
			me._buttongdownload.logicBlock_scaling();
		}
		me._buttongdownload.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._buttongdownload__text)
					return;
				}
			}
			me.elementMouseOver['buttongdownload']=false;
			me._buttongdownload.logicBlock_scaling();
		}
		me._buttongdownload.ontouchend=function (e) {
			me.elementMouseOver['buttongdownload']=false;
			me._buttongdownload.logicBlock_scaling();
		}
		me._buttongdownload.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._container_2.appendChild(me._buttongdownload);
		me._card.appendChild(me._container_2);
		el=me._buttonclose=document.createElement('div');
		els=me._buttonclose__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="buttonclose";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 9px;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		hs+='font-weight: 700; margin-bottom:2px;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: 20px;';
		hs+='height: 20px;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 9px;';
		hs+=cssPrefix + 'border-radius: 9px;';
		hs+='color: rgba(65,65,65,1);';
		hs+='font-size: 10px;';
		hs+='font-weight: 800;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="X";
		el.appendChild(els);
		me._buttonclose.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._buttonclose.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['buttonclose'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._buttonclose.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._buttonclose.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._buttonclose.style[domTransition]='' + cssPrefix + 'transform 300ms ease 0ms';
				if (me._buttonclose.ggCurrentLogicStateScaling == 0) {
					me._buttonclose.ggParameter.sx = 1.1;
					me._buttonclose.ggParameter.sy = 1.1;
					me._buttonclose.style[domTransform]=parameterToTransform(me._buttonclose.ggParameter);
				}
				else {
					me._buttonclose.ggParameter.sx = 1;
					me._buttonclose.ggParameter.sy = 1;
					me._buttonclose.style[domTransform]=parameterToTransform(me._buttonclose.ggParameter);
				}
			}
		}
		me._buttonclose.onclick=function (e) {
			player.setVariableValue('vis_card', false);
		}
		me._buttonclose.onmouseover=function (e) {
			me.elementMouseOver['buttonclose']=true;
			me._buttonclose.logicBlock_scaling();
		}
		me._buttonclose.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._buttonclose__text)
					return;
				}
			}
			me.elementMouseOver['buttonclose']=false;
			me._buttonclose.logicBlock_scaling();
		}
		me._buttonclose.ontouchend=function (e) {
			me.elementMouseOver['buttonclose']=false;
			me._buttonclose.logicBlock_scaling();
		}
		me._buttonclose.ggUpdatePosition=function (useTransition) {
		}
		me._card.appendChild(me._buttonclose);
		me.divSkin.appendChild(me._card);
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	me.callChildLogicBlocksHotspot_ht_info_mouseover = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._text_10 && hotspotTemplates['ht_info'][i]._text_10.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._text_10.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_resumen_mouseover = function(){
		if(hotspotTemplates['ht_resumen']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_resumen'].length; i++) {
				if (hotspotTemplates['ht_resumen'][i]._text_1 && hotspotTemplates['ht_resumen'][i]._text_1.logicBlock_visible) {
					hotspotTemplates['ht_resumen'][i]._text_1.logicBlock_visible();
				}
			}
		}
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_agradecimiento(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._agradecimiento=document.createElement('div');
		el.ggId="agradecimiento";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._agradecimiento.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._agradecimiento.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._agradecimiento.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._agradecimiento.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._agradecimiento.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._agradecimiento.ggUpdatePosition=function (useTransition) {
		}
		el=me._logo_vendimia=document.createElement('div');
		els=me._logo_vendimia__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._logo_vendimia__img.setAttribute('src',basePath + 'images/logo_vendimia.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="logo_vendimia";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 450px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 450px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._logo_vendimia.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._logo_vendimia.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._agradecimiento.appendChild(me._logo_vendimia);
		me.__div = me._agradecimiento;
	};
	function SkinHotspotClass_ht_info(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_info=document.createElement('div');
		el.ggId="ht_info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 108px;';
		hs+='position : absolute;';
		hs+='top : 164px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_info.onclick=function (e) {
			player.moveTo("47.98","-40.56","73.63","10.0000");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_info']=true;
			me._text_10.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_info']=false;
			me._text_10.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.ontouchend=function (e) {
			me.elementMouseOver['ht_info']=false;
			me._text_10.logicBlock_visible();
		}
		me._ht_info.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_30=document.createElement('div');
		els=me._svg_30__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjQuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMCAxMDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCIgaWQ9IkNhcGFfMSIgeD0iMHB4IiB2aWV3Qm94PSIwIDAgMT'+
			'AwIDEwMCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I0MzMDIzNzt9JiN4ZDsKCS5zdDF7ZmlsbDojRkZGRkZGO30mI3hkOwo8L3N0eWxlPgogPGNpcmNsZSBjeT0iNTAiIHI9IjUwIiBjbGFzcz0ic3QwIiBjeD0iNTAiLz4KIDxnPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik00Ny45LDEwLjdjMS4yLDAuNiwxLjYsMS41LDEuNSwyLjhjLTAuMSwwLjYsMCwxLjMsMCwxLjljMCwwLjQtMC4xLDAuNS0wLjUsMC41Yy0yLjksMC01LjgsMC04LjcsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQsMC0wLjUtMC4xLTAuNS0wLjVjMC0wLjcsMC0xLjQsMC0yLjFjLTAuMS0x'+
			'LjMsMC40LTIuMiwxLjYtMi43QzQzLjUsMTAuNyw0NS43LDEwLjcsNDcuOSwxMC43eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik01MC4zLDg3LjNjLTkuMSwwLTE4LjIsMC0yNy4zLDBjLTAuMiwwLTAuNSwwLTAuNywwYy0wLjYtMC4xLTEuMS0wLjUtMS4xLTEuMWMwLTAuNiwwLjQtMSwxLTEuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMywwLDAuNSwwLDAuOCwwYzIuOSwwLDUuOSwwLDguOCwwYzAuNSwwLDAuNy0wLjEsMC42LTAuNmMtMC4xLTAuMywwLTAuNiwwLTFjMC05LjcsMC0xOS40LDAtMjkuMWMwLTMuMSwwLjEtNi4zLDEuMy05LjImI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjEtMi43LD'+
			'IuMy01LjQsMy41LTguMWMwLjktMiwxLjctNCwyLjEtNi4xYzAuMS0wLjQsMC4zLTAuNiwwLjctMC42YzMuMSwwLDYuMSwwLDkuMiwwYzAuNCwwLDAuNiwwLjIsMC43LDAuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMywxLjUsMC4zLDEuNS0xLjIsMS41Yy0yLjUsMC0zLjUsMC43LTQuMiwzLjFjLTEsMy4zLTIuMyw2LjUtMyw5LjhjLTAuOCwzLjctMS4xLDcuNSwwLjIsMTEuMWMwLjIsMC41LDAuMywwLjksMC42LDEuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMiwwLjQsMC4yLDAuNi0wLjQsMC42Yy0yLjEsMC00LjMsMC02LjQsMGMtMC42LDAtMC43LDAuMi0wLjcsMC44YzAsNC4yLDAsOC41LDAs'+
			'MTIuN2MwLDAuNiwwLjEsMC44LDAuOCwwLjhjNS4zLDAsMTAuNywwLDE2LDAmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjcsMCwwLjgsMC4yLDAuOCwwLjhjMCwxLjYsMCwzLjIsMCw0LjljMCwwLjYtMC4yLDAuOC0wLjcsMC45Yy0xLjYsMC4zLTMuMiwwLjktNC42LDEuN2MtMS40LDAuOC0yLjYsMS45LTMuMiwzLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4yLDAuNS0wLjEsMC43LDAuNCwwLjZjMC4yLDAsMC40LDAsMC41LDBjMC44LDAuMSwxLjMtMC4xLDEuOC0wLjhjMC45LTEuMiwyLjItMS43LDMuNi0yLjJjMS4yLTAuNSwyLjUtMC43LDMuOS0wLjkmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjQsMC'+
			'wwLjYtMC4xLDAuNi0wLjZjMC0zLjQsMC02LjgsMC0xMC4yYzAtMi0wLjctMy44LTEuOC01LjRjLTAuNi0wLjgtMS40LTEuNC0yLjMtMS45Yy01LjEtMi41LTcuNy03LjMtNy4zLTEzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4yLTMuOCwxLjQtNy4zLDIuNi0xMC45YzAuNC0xLjEsMC44LTIuMywxLjEtMy40YzAuMi0wLjgsMC43LTEuMSwxLjUtMS4xYzQuOSwwLDkuOSwwLDE0LjgsMGMwLjYsMCwxLjIsMC4yLDEuNCwwLjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjEsMy43LDIuNiw3LjIsMy40LDExYzAuNiwzLjEsMC44LDYuMS0wLjIsOS4yYy0xLjEsMy4yLTMuMSw1LjYtNi4yLDcuMWMtMy4xLDEu'+
			'NS00LjQsNC4xLTQuNSw3LjNjLTAuMiwzLjUsMCw3LTAuMSwxMC41JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwwLjQsMC4xLDAuNSwwLjUsMC42YzEuOSwwLjIsMy43LDAuNiw1LjQsMS41YzEsMC41LDEuOSwxLjEsMi41LDIuMWMwLjIsMC40LDAuNSwwLjMsMC44LDAuM2MzLjksMCw3LjksMCwxMS44LDAmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjMsMCwwLjYsMCwwLjgsMC4xYzAuNSwwLjIsMC44LDAuNiwwLjgsMS4xYzAsMC42LTAuNCwwLjktMC45LDFjLTAuMywwLjEtMC41LDAtMC44LDBDNjguNiw4Ny4zLDU5LjUsODcuMyw1MC4zLDg3LjN6JiN4ZDsmI3hhOyYjeDk7JiN4OTsgTTU1LjYsNDguNG'+
			'MyLjksMCw1LjgsMCw4LjgsMGMxLjUsMCwxLjUsMCwxLjItMS41Yy0wLjctMy4yLTEuOS02LjItMi45LTkuNGMtMC4yLTAuNS0wLjUtMC40LTAuOS0wLjRjLTMuOSwwLTcuNywwLTExLjYsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0xLjUsMC0xLjUsMC0xLjksMS40Yy0wLjksMy0yLjIsNi0yLjcsOS4yYy0wLjEsMC42LDAsMC44LDAuNiwwLjhDNDkuMyw0OC40LDUyLjUsNDguNCw1NS42LDQ4LjR6Ii8+CiAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTQ5LjQsMjMuMmMwLDEuNSwwLDIuOSwwLDQuNGMwLDAuNC0wLjEsMC42LTAuNiwwLjZjLTIuOSwwLTUuNywwLTguNiwwYy0wLjQsMC0wLjYtMC4xLTAu'+
			'Ni0wLjUmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTMsMC4xLTUuOSwwLTguOWMwLTAuNSwwLjItMC43LDAuNy0wLjZjMi44LDAsNS41LDAsOC4zLDBjMC41LDAsMC43LDAuMSwwLjcsMC43QzQ5LjQsMjAuMyw0OS40LDIxLjcsNDkuNCwyMy4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtDNDkuNCwyMy4yLDQ5LjQsMjMuMiw0OS40LDIzLjJ6Ii8+CiAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTQ0LjYsNjkuMWMtMS45LDAtMy40LTEuNS0zLjQtMy40YzAtMS45LDEuNS0zLjQsMy40LTMuNGMxLjksMCwzLjQsMS42LDMuNCwzLjVDNDgsNjcuNiw0Ni41LDY5LjEsNDQuNiw2OS4xeiYjeGQ7JiN4YTsmI3g5OyYjeD'+
			'k7Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_30__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 3";
		el.ggDx=0;
		el.ggDy=-14;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 100px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_30.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_30.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_info.appendChild(me._svg_30);
		el=me._text_10=document.createElement('div');
		els=me._text_10__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='bottom : -41px;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.79999;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 116px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 12px;';
		hs+=cssPrefix + 'border-radius: 12px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 5px 8px 5px 8px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Expositores";
		el.appendChild(els);
		me._text_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_10.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_info'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_10.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_10.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_10.style[domTransition]='';
				if (me._text_10.ggCurrentLogicStateVisible == 0) {
					me._text_10.style.visibility=(Number(me._text_10.style.opacity)>0||!me._text_10.style.opacity)?'inherit':'hidden';
					me._text_10.ggVisible=true;
				}
				else {
					me._text_10.style.visibility="hidden";
					me._text_10.ggVisible=false;
				}
			}
		}
		me._text_10.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((114-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_info.appendChild(me._text_10);
		me.__div = me._ht_info;
	};
	function SkinHotspotClass_ht_resumen(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_resumen=document.createElement('div');
		el.ggId="ht_resumen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 226px;';
		hs+='position : absolute;';
		hs+='top : 164px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_resumen.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_resumen.onclick=function (e) {
			player.moveTo("178.57","-34.01","39.71","5.0000");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_resumen.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_resumen.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_resumen']=true;
			me._text_1.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_resumen.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_resumen']=false;
			me._text_1.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_resumen.ontouchend=function (e) {
			me.elementMouseOver['ht_resumen']=false;
			me._text_1.logicBlock_visible();
		}
		me._ht_resumen.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_3=document.createElement('div');
		els=me._svg_3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjQuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMCAxMDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCIgaWQ9IkNhcGFfMSIgeD0iMHB4IiB2aWV3Qm94PSIwIDAgMT'+
			'AwIDEwMCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I0MzMDIzNzt9JiN4ZDsKCS5zdDF7ZmlsbDojRkZGRkZGO30mI3hkOwo8L3N0eWxlPgogPGNpcmNsZSBjeT0iNTAiIHI9IjUwIiBjbGFzcz0ic3QwIiBjeD0iNTAiLz4KIDxnPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik00Ni44LDkxLjFjLTEuNy0wLjItMy40LTAuMy01LjEtMC41Yy00LjEtMC41LTguMi0xLjMtMTItM2MtMS40LTAuNy0yLjgtMS40LTMuNy0yLjdjLTAuOC0xLTEtMi4xLTAuNy0zLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MzLjMtMTMuOCw2LjYtMjcuNyw5LjktNDEuNWMyLjMtOS44LDQuNy0x'+
			'OS41LDctMjkuM2MwLjQtMS43LDAuNy0yLDIuNS0yYzMuNiwwLDcuMiwwLDEwLjgsMGMxLjYsMCwyLDAuMywyLjMsMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMywxMi40LDUuOSwyNC44LDguOSwzNy4yQzY5LjQsNTksNzIsNzAsNzQuNyw4MS4xYzAuNiwyLjYtMC4zLDQtMiw1LjJjLTIuNCwxLjctNS4xLDIuNi03LjksMy4zYy0zLjUsMC45LTcuMSwxLjMtMTAuNywxLjUmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zLDAtMC42LDAtMC45LDAuMUM1MS4xLDkxLjEsNDguOSw5MS4xLDQ2LjgsOTEuMXogTTI5LjMsNzguM2MxLjQtMC42LDIuNy0xLjEsNC0xLjVjNC43LTEuNCw5LjUtMiwxNC4zLTIuMS'+
			'YjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNiwwLDAuOS0wLjIsMC45LTAuOWMwLTYuNiwwLTEzLjIsMC0xOS44YzAtMC42LTAuMi0wLjgtMC44LTAuOWMtMS44LTAuMy0zLjEtMS42LTMuNS0zLjRjLTAuMS0wLjUsMC0wLjYsMC41LTAuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuMSwwLDIuMSwwLDMuMiwwYzAuNiwwLDAuOS0wLjMsMC45LTAuOWMwLTAuNi0wLjQtMC44LTAuOS0wLjljLTAuNywwLTEuNSwwLTIuMiwwYy0xLjYsMC0xLjYsMC0xLjYtMS42YzAtMC41LDAuMi0wLjcsMC43LTAuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuMSwwLDIuMSwwLDMuMiwwYzAuNSwwLDAuOS0wLjMsMC45LTAuOGMw'+
			'LTAuNi0wLjQtMC45LTAuOS0wLjljLTAuOCwwLTEuNiwwLTIuMywwYy0xLjYsMC0xLjYsMC0xLjUtMS43YzAtMC40LDAuMS0wLjYsMC42LTAuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEsMCwyLjEsMCwzLjEsMGMwLjYsMCwxLjEtMC4yLDEuMS0wLjljMC0wLjctMC41LTAuOC0xLjEtMC44Yy0xLDAtMi4xLDAtMy4xLDBjLTAuNCwwLTAuNSwwLTAuNS0wLjVjMC4yLTEuNywxLjgtMy4zLDMuNS0zLjUmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjUtMC4yLDMuMS0wLjIsNC42LDBjMS44LDAuMiwzLjMsMS42LDMuNywzLjRjMC4xLDAuNSwwLDAuNi0wLjUsMC42Yy0xLjEsMC0yLjEsMC0zLjIsMGMtMC42LD'+
			'AtMSwwLjEtMS4xLDAuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMC43LDAuNSwwLjksMSwwLjljMC44LDAsMS42LDAsMi4zLDBjMS42LDAsMS42LDAsMS42LDEuNmMwLDAuNi0wLjIsMC43LTAuOCwwLjdjLTEsMC0yLDAtMywwYy0wLjYsMC0xLjIsMC4xLTEuMiwwLjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLDAuOCwwLjYsMC45LDEuMiwwLjljMC43LDAsMS40LDAsMi4xLDBjMS43LDAsMS43LDAsMS42LDEuN2MwLDAuNS0wLjIsMC42LTAuNiwwLjZjLTEuMSwwLTIuMiwwLTMuMywwYy0wLjYsMC0xLDAuMi0xLDAuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMC43LDAuNCwwLjksMSwwLjljMS4xLDAs'+
			'Mi4xLDAsMy4yLDBjMC41LDAsMC43LDAuMSwwLjUsMC42Yy0wLjQsMS44LTEuNywzLjEtMy41LDMuNGMtMC43LDAuMS0wLjgsMC40LTAuOCwxYzAsNi41LDAsMTMsMCwxOS40JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwwLjgsMC4yLDEuMSwxLDEuMWM0LjUsMC4xLDguOSwwLjYsMTMuMiwxLjhjMS43LDAuNCwzLjMsMSw1LDEuOGMtMC4xLTAuMy0wLjEtMC40LTAuMS0wLjVjLTIuMy05LjctNC42LTE5LjQtNy0yOS4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTIuOS0xMi01LjctMjMuOS04LjYtMzUuOUM1NSwxMi4yLDU0LjcsMTIsNTQuMSwxMmMtMi43LDAtNS4zLDAuMS04LDBjLTAuOCwwLTEuMSwwLj'+
			'MtMS4yLDFDNDAuMiwzMi40LDM1LjYsNTEuOCwzMSw3MS4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMzAuNCw3My41LDI5LjgsNzUuOSwyOS4zLDc4LjN6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_3__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 3";
		el.ggDx=0;
		el.ggDy=-14;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 100px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_resumen.appendChild(me._svg_3);
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='bottom : -41px;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.79999;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 116px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 12px;';
		hs+=cssPrefix + 'border-radius: 12px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 5px 8px 5px 8px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Escenario";
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_resumen'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_1.style[domTransition]='';
				if (me._text_1.ggCurrentLogicStateVisible == 0) {
					me._text_1.style.visibility=(Number(me._text_1.style.opacity)>0||!me._text_1.style.opacity)?'inherit':'hidden';
					me._text_1.ggVisible=true;
				}
				else {
					me._text_1.style.visibility="hidden";
					me._text_1.ggVisible=false;
				}
			}
		}
		me._text_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((114-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_resumen.appendChild(me._text_1);
		me.__div = me._ht_resumen;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		if (hotspot.skinid=='agradecimiento') {
			hotspot.skinid = 'agradecimiento';
			hsinst = new SkinHotspotClass_agradecimiento(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='ht_info') {
			hotspot.skinid = 'ht_info';
			hsinst = new SkinHotspotClass_ht_info(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_info_mouseover();;
		} else
		{
			hotspot.skinid = 'ht_resumen';
			hsinst = new SkinHotspotClass_ht_resumen(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_resumen_mouseover();;
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['agradecimiento']) {
			var i;
			for(i = 0; i < hotspotTemplates['agradecimiento'].length; i++) {
				hotspotTemplates['agradecimiento'][i] = null;
			}
		}
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				hotspotTemplates['ht_info'][i] = null;
			}
		}
		if(hotspotTemplates['ht_resumen']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_resumen'].length; i++) {
				hotspotTemplates['ht_resumen'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	me._card.logicBlock_visible();
	player.addListener('changenode', function(args) { me._card.logicBlock_visible(); });
	player.addListener('varchanged_vis_card', function(args) { me._card.logicBlock_visible(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_ht_info_mouseover();me.callChildLogicBlocksHotspot_ht_resumen_mouseover(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
	me.skinTimerEvent();
};
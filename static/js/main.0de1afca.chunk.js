(this.webpackJsonpbounce=this.webpackJsonpbounce||[]).push([[0],{12:function(e,t,i){e.exports={root:"style_root__D1GZz",game:"style_game__1is8e",movement:"style_movement__2MKHA"}},23:function(e,t,i){},24:function(e,t,i){"use strict";i.r(t);var a=i(3),s=i.n(a),o=i(14),r=i.n(o),n=i(10),l=i(6),c=i.n(l),d=i(8),h=i.n(d),u=i(11);function p(e){var t=this;e.forEach((function(e){var i=e.method;e.data.forEach((function(e){var a;(a=t.load)[i].apply(a,Object(u.a)(e))}))}))}var y=500,g=800,v=250,f=2,b=300,m=100,x=500,j=400,w=500,k=.2,O=function(e){return e/2},B=800,D={width:150,height:170,y:10},P={buttons:{width:100,height:100,margin:{top:10,right:15}},colors:{names:"red",text:"white"},triggerDebug:!0},A={animation:{ease:"Quad.easeInOut",duration:1e3}},T={tal:{NAME:"TAL",PORTRAIT:"tal"}},N=i(1),I=i(2),M=i(16),C=i(15),S=function(e){Object(M.a)(i,e);var t=Object(C.a)(i);function i(){var e;Object(N.a)(this,i);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).player=null,e.extensions=void 0,e.dialog=null,e.map=null,e.world=null,e}return Object(I.a)(i,[{key:"preload",value:function(){this.extensions=new V(this),p.call(this,z)}},{key:"create",value:function(){this.map=this.make.tilemap({key:"map"});var e=this.map.addTilesetImage("platforms32x32","platforms32x32");this.world=this.map.createLayer(0,e,0,0),this.player=new _(this),this.dialog=new E(this,K,0);new H(this)}},{key:"update",value:function(e,t){var i,a,s;null===(i=this.player)||void 0===i||i.update(e,t,null===(a=this.dialog)||void 0===a||null===(s=a.activeDialog)||void 0===s?void 0:s.isActive)}}]),i}(d.Scene),_=function(){function e(t){Object(N.a)(this,e),this.cursors=void 0,this.playerBody=void 0,this.playerVisual=void 0,this.camera=void 0,this.playerParamsConfig={blockMove:{left:{blocked:!1,time:0},right:{blocked:!1,time:0}}},this.coordinates={x:0,y:0};var i=t.world,a=t.map;a&&i&&(this.createPlayer(t,a,i),this.createCamera(t,a,this.playerBody)),this.createTeleport(t,this.playerBody)}return Object(I.a)(e,[{key:"createPlayer",value:function(e,t,i){var a=k,s=t.getObjectLayer("player").objects[0];this.playerBody=e.physics.add.sprite(s.x||0,s.y||0,"playerSprite").setAlpha(0),this.playerVisual=e.add.sprite(this.playerBody.x,this.playerBody.y,"playerBody"),this.coordinates.x=this.playerBody.x,this.coordinates.y=this.playerBody.y,this.playerBody.setBounce(a).setCircle(this.playerBody.width/2),e.physics.add.collider(this.playerBody,i),this.playerBody.body.setCollideWorldBounds(!0),e.physics.world.setBounds(0,0,t.widthInPixels,t.heightInPixels),i.setCollisionByExclusion([-1],!0),this.cursors=e.input.keyboard.createCursorKeys()}},{key:"createCamera",value:function(e,t,i){this.camera=e.cameras.main,this.camera.setBounds(0,0,t.widthInPixels,t.heightInPixels),this.smoothMoveCameraTowards(i)}},{key:"smoothMoveCameraTowards",value:function(e,t){this.camera&&e&&(void 0===t&&(t=0),this.camera.scrollX=t*this.camera.scrollX+(1-t)*(e.x-.5*this.camera.width),this.camera.scrollY=t*this.camera.scrollY+(1-t)*(e.y-.5*this.camera.height))}},{key:"createTeleport",value:function(e,t){var i=this;e.anims.create({key:"teleportAnimation",frames:"teleport",frameRate:20,repeat:0}),e.input.keyboard.on("keydown-ENTER",(function(){i.coordinates={x:t.x||0,y:t.y||0}})),e.input.keyboard.on("keydown-SPACE",(function(){var a=i.coordinates,s=a.x,o=a.y;t&&(t.x=s,t.y=o);var r=e.add.sprite(s,o,"teleport").play("teleportAnimation").on("complete",(function(){r.destroy()}))}))}},{key:"update",value:function(e,t,i){this.control(t,e,i),this.resetBlockMove(e),this.controlPlayerBody(t),this.smoothMoveCameraTowards(this.playerBody,.9)}},{key:"controlPlayerBody",value:function(e){this.playerVisual.x=this.playerBody.x,this.playerVisual.y=this.playerBody.y,this.playerBody.body.velocity.x&&(this.playerVisual.angle+=.003*e*this.playerBody.body.velocity.x)}},{key:"control",value:function(e,t,i){var a=g,s=v,o=f,r=x,n=j,l=b,c=m,d=O,h=this.playerBody.body.velocity,u=h.x;!this.cursors.left.isDown||this.playerParamsConfig.blockMove.left.blocked||i?!this.cursors.right.isDown||this.playerParamsConfig.blockMove.right.blocked||i?this.playerBody.body.blocked.down&&(h.x>c?h.x-=2*e:h.x<-c?h.x+=2*e:h.x=0):this.playerBody.body.blocked.none?h.x+=o:0===u?h.x=s:u<0?h.x=-1*u:h.x<a?h.x+=d(e):h.x>=a&&(h.x=a):this.playerBody.body.blocked.none?h.x-=o:0===u?h.x=-s:u>0?h.x=-1*u:h.x>-1*a?h.x-=d(e):h.x>=-1*a&&(h.x=-1*a),this.cursors.up.isDown&&!i&&(this.playerBody.body.blocked.left?(this.setBlockMove("left",t),this.playerBody.setVelocityX(Math.max(r,u)),this.playerBody.setVelocityY(-n)):this.playerBody.body.blocked.right?(this.setBlockMove("right",t),this.playerBody.setVelocityX(Math.min(-r,u)),this.playerBody.setVelocityY(-n)):this.playerBody.body.blocked.down&&this.playerBody.setVelocityY(-l))}},{key:"setBlockMove",value:function(e,t){var i=this.playerParamsConfig.blockMove;i[e].blocked=!0,i[e].time=t}},{key:"resetBlockMove",value:function(e){var t=w,i=this.playerParamsConfig.blockMove,a=i.left,s=i.right,o=e-a.time>t,r=e-s.time>t;o&&(a.blocked=!1),r&&(s.blocked=!1)}}]),e}(),E=function(){function e(t,i,a){Object(N.a)(this,e),this.scene=void 0,this.extensions=void 0,this.wrapper=void 0,this.tweens=void 0,this.activeDialog=null,this.sceneDialogs=void 0,this.sceneId=void 0,this.sceneId=a,this.sceneDialogs=i,this.scene=t,this.extensions=t.extensions;var s=t.game.config,o=s.width,r=(s.height,Number(o)),n=t.add.sprite(0,0,"dialogLeft").setOrigin(0,0),l=t.add.sprite(r,0,"dialogRight").setOrigin(0,0);l.setPosition(l.x-l.width,l.y);var c=P.buttons,d=t.add.sprite(r-c.margin.right,c.margin.top,"dialogNextButton").setInteractive().setScrollFactor(0).setOrigin(1,0),h=t.add.sprite(r-c.margin.right,2*c.margin.top+c.height,"dialogSkipButton").setInteractive().setScrollFactor(0).setOrigin(1,0),u=this.nextDialog,p=this.dialogEnd,y=u.bind(this),g=p.bind(this,!0);d.on("pointerup",y),h.on("pointerup",g);var v=t.add.tileSprite(n.width,0,r-n.width-l.width,l.height,"dialogCenter").setOrigin(0,0);this.wrapper=t.add.container(0,0).add([n,l,v,d,h]).setScrollFactor(0).setPosition(0,-v.height);var f=t.tweens.create({targets:this.wrapper,y:-v.height,ease:"Quad.easeInOut",repeat:0,duration:B}),b=t.tweens.create({targets:this.wrapper,y:0,ease:"Quad.easeInOut",repeat:0,duration:B});this.tweens={hide:f,show:b},this.createDialogTriggers(t.map)}return Object(I.a)(e,[{key:"tweensPlay",value:function(e,t){t&&e.once("complete",(function(){t&&t()})),e.play()}},{key:"showDialog",value:function(e){this.activeDialog&&(this.activeDialog.isActive=!0),this.tweensPlay(this.tweens.show,e)}},{key:"hideDialog",value:function(e){this.activeDialog&&(this.activeDialog.isActive=!1),this.tweensPlay(this.tweens.hide,e)}},{key:"createConversation",value:function(e){var t=this.sceneDialogs[e];if(t){this.activeDialog={dialog:t,replica:0,id:e,objects:{}};var i=t[0],a=i.name,s=i.portrait,o=i.replica;this.createPortrait(s),this.createName(a),this.createText(o),this.showDialog()}}},{key:"createPortrait",value:function(e){var t=D,i=t.height,a=t.width,s=t.y,o=this.wrapper.list[0],r=this.scene.add.image(o.width||25,s,e).setOrigin(0);this.extensions.imgFit(r,a,i),this.wrapper.add(r),this.activeDialog&&(this.activeDialog.objects.portrait=r)}},{key:"createName",value:function(e){var t=D,i=t.height,a=t.width,s=this.scene.make.text({x:0,y:0,text:e,origin:{x:.5,y:0},style:{font:"25px Arial",color:P.colors.names,wordWrap:{width:a,useAdvancedWrap:!0}}});s.x=25+a/2,s.y=i+30,this.wrapper.add(s),this.activeDialog&&(this.activeDialog.objects.name=s)}},{key:"createText",value:function(e){var t=D,i=t.y,a=t.width,s=P,o=s.buttons,r=s.colors,n=this.scene.make.text({x:a+50,y:2*i,text:e,origin:{x:0,y:0},style:{font:"bold 25px Arial",color:r.text,wordWrap:{width:Number(this.scene.game.config.width)-100-a-o.width,useAdvancedWrap:!0}}});this.wrapper.add(n),this.activeDialog&&(this.activeDialog.objects.text=n)}},{key:"clearDialog",value:function(){if(this.activeDialog){var e,t,i,a=this.activeDialog.objects;null===(e=a.name)||void 0===e||e.destroy(),null===(t=a.portrait)||void 0===t||t.destroy(),null===(i=a.text)||void 0===i||i.destroy()}}},{key:"nextDialog",value:function(){if(this.activeDialog){var e=this.activeDialog,t=e.dialog,i=e.replica+1;if(i<t.length){var a=t[i],s=a.name,o=a.portrait,r=a.replica;this.clearDialog(),this.createPortrait(o),this.createName(s),this.createText(r),this.activeDialog.replica=i}else this.dialogEnd()}}},{key:"dialogEnd",value:function(e){if(this.activeDialog){var t=this.activeDialog,i=t.dialog,a=t.replica,s=t.id,o=i[a]||i[i.length-1];if(o.callback&&o.callback(),this.closeDialog(),e&&(s||0===s)){var r=JSON.parse(localStorage.getItem("ignoredDialogs")||"[]"),n=r[this.sceneId]||[];n.push(s);var l=Object(u.a)(new Set(n));r[this.sceneId]=l,localStorage.setItem("ignoredDialogs",JSON.stringify(r))}}}},{key:"closeDialog",value:function(){var e=this.clearDialog;this.hideDialog(e.bind(this))}},{key:"createTrigger",value:function(e,t,i,a){var s=P.triggerDebug;return this.scene.extensions.createRectangle(e,t,i,a,65280,s?.3:0)}},{key:"createDialogTriggers",value:function(e){var t=this;e&&e.getObjectLayer("dialogs").objects.forEach((function(e){var i,a=e.x,s=void 0===a?-100:a,o=e.y,r=void 0===o?-100:o,n=e.width,l=void 0===n?32:n,c=e.height,d=void 0===c?32:c,h=e.properties,u=Number(null===(i=h.find((function(e){return"id"===e.name})))||void 0===i?void 0:i.value),p=t.scene.add.zone(s,r,l,d).setOrigin(0);t.scene.physics.world.enable(p),p.body.setAllowGravity(!1),p.body.moves=!1;var y=t.scene.player;(null===y||void 0===y?void 0:y.playerBody)&&t.scene.physics.add.overlap(y.playerBody,p,(function(){t.createConversation(u),p.destroy()}))}))}}]),e}(),R=i(9),L=i(4),V=function(){function e(t){Object(N.a)(this,e),this.scene=void 0,this.scene=t}return Object(I.a)(e,[{key:"imgFit",value:function(e,t,i){var a=t/e.width,s=i/e.height,o=Math.min(a,s,1);e.setScale(o)}},{key:"createRectangle",value:function(e,t,i,a,s,o){return this.scene.add.graphics().fillStyle(s,o).fillRect(e,t,i,a)}},{key:"getPropsFromObject",value:function(e){return e.reduce((function(e,t){var i=t.name,a=t.value;return Object(L.a)(Object(L.a)({},e),{},Object(R.a)({},i,a))}),{})}},{key:"findCorners",value:function(e){var t=Math.min.apply(null,e.reduce((function(e,t){var i=t.x;return e.push(i),e}),[])),i=Math.min.apply(null,e.reduce((function(e,t){var i=t.y;return e.push(i),e}),[]));return{upLeftX:t,upLeftY:i,rectWidth:Math.max.apply(null,e.reduce((function(e,t){var i=t.x,a=t.width;return e.push(i+a),e}),[]))-t,rectHeight:Math.max.apply(null,e.reduce((function(e,t){var i=t.y,a=t.height;return e.push(i+a),e}),[]))-i}}}]),e}(),F=function(e){return function(t){if(!t)return!1;var i=t[e];return!!i||0===i}},W=F("setVelocity"),Y=A.animation,G=Y.duration,X=Y.ease,H=function(){function e(t){var i;Object(N.a)(this,e),this.scene=void 0,this.scene=t;var a=t.map,s=null===(i=t.player)||void 0===i?void 0:i.playerBody;a&&s&&(this.createButtons(t,a,s),this.createTraps(t,a,s))}return Object(I.a)(e,[{key:"createButtons",value:function(e,t,i){var a=this,s=t.getObjectLayer("buttons").objects,o=e.textures.get("buttons").getFrameNames();s.forEach((function(s,r){var n=s.x,l=void 0===n?-100:n,c=s.y,d=void 0===c?-100:c,h=s.width,u=void 0===h?-100:h,p=s.height,y=void 0===p?-100:p,g=s.properties,v=e.extensions.getPropsFromObject(g),f=e.add.tileSprite(l,d,u,y,"buttons",v.tileName||o[0]).setOrigin(0,1);e.physics.world.enable(f),W(f.body)&&f.body.setAllowGravity(!1),e.physics.add.overlap(i,f,(function(){f.destroy(),a.createBridge(e,t,i,v.bridgetId)}))}))}},{key:"createBridge",value:function(e,t,i,a){var s=this;if(a){var o=t.getObjectLayer("bridges").objects,r=e.textures.get("bridges").getFrameNames(),n=e.game.config.height,l=Number(n),c=[];o.forEach((function(t,i){var s=t.x,o=void 0===s?-100:s,n=t.y,d=void 0===n?-100:n,h=t.width,u=void 0===h?0:h,p=t.height,y=void 0===p?0:p,g=t.properties,v=e.extensions.getPropsFromObject(g);if(v.bridgetId===a){var f="bottom"===v.from?2*-y:l+2*y,b=e.add.tileSprite(o,f,u,y,"bridges",v.tileName||r[0]).setOrigin(0,1);c.push(Object(L.a)(Object(L.a)({},b),{},{y:d}));e.tweens.add({targets:b,y:d,ease:X,duration:G,repeat:0})}})),setTimeout((function(){var t=e.extensions.findCorners(c),a=t.upLeftX,o=t.upLeftY,r=t.rectWidth,n=t.rectHeight,l=e.add.zone(a,o,r,n).setOrigin(0,1);s.scene.physics.world.enable(l,Phaser.Physics.Arcade.STATIC_BODY),W(l.body)&&(l.body.setAllowGravity(!1).setImmovable().setFriction(0,0),l.body.moves=!1),e.physics.add.collider(i,l,(function(){}))}),G)}}},{key:"createTraps",value:function(e,t,i){var a=t.getObjectLayer("traps");((null===a||void 0===a?void 0:a.objects)||[]).forEach((function(t){var a=t.x,s=void 0===a?-100:a,o=t.y,r=void 0===o?-100:o,n=t.properties,l="vertical"===e.extensions.getPropsFromObject(n).orientation?"trap_v":"trap_h",c=e.add.sprite(s,r,l).setOrigin(0,1).setDepth(-1);e.physics.world.enable(c),W(c.body)&&(c.body.setAllowGravity(!1),c.body.moves=!1),e.physics.add.overlap(i,c,(function(){}))}))}}]),e}(),J=T.tal,K=[[{portrait:J.PORTRAIT,name:J.NAME,replica:"Hi, my friend"},{portrait:J.PORTRAIT,name:J.NAME,replica:"This is our first dialog"},{portrait:J.PORTRAIT,name:J.NAME,replica:"test string: lalalalalala ababagalamaga -sdfdsf -dfsd f -hhfghfgh-jopikdsf ojeo sdfdsf -dfsd f -hhfghfgh-jopikdsf ojeo -*/ s d f dsf -dfsd f -hhfghfgh-jopikdsf ojeo /* sdfdsf -dfsd f -hhfghfgh-jopikdsf ojeo sdfdsf -dfsd f -hhfghfgh-jopikdsf ojeo sdfdsf -dfsd f -hhfghfgh-jopikdsf ojeo sdfdsf -dfsd f -hhfghfgh-jopikdsf ojeo"},{portrait:J.PORTRAIT,name:J.NAME,replica:"Hope you fun"}]],z=[{method:"image",data:[["platforms32x32","assets/platforms/platforms32x32.png"],["playerSprite","assets/player/body.png"],["playerBody","assets/player/ball.png"],["dialogCenter","assets/ui/dialog-2.png"],["dialogLeft","assets/ui/dialog-1.png"],["dialogRight","assets/ui/dialog-3.png"],["dialogNextButton","assets/ui/dialog-button-next.png"],["dialogSkipButton","assets/ui/dialog-button-skip.png"],[T.tal.PORTRAIT,"assets/characters/TAL/portrait.png"],["trap_h","assets/enemies/fire.png"],["trap_v","assets/enemies/fire_2.png"]]},{method:"tilemapTiledJSON",data:[["map","assets/levels/default/level.json"]]},{method:"atlas",data:[["teleport","assets/effects/teleport.png","assets/effects/teleport_atlas.json"],["buttons","assets/buttons/buttons.png","assets/buttons/buttons.json"],["bridges","assets/bridges/bridget.png","assets/bridges/bridget.json"]]}],Q={type:Phaser.CANVAS,parent:"game-box",height:720,width:1280,scene:[S],backgroundColor:1310779,physics:{default:"arcade",arcade:{gravity:{y:y},debug:!0}}},U=i(12),Z=i.n(U),q=i(0),$=null,ee=function(){var e=Object(a.useState)(null),t=Object(n.a)(e,2),i=t[0],s=t[1];return Object(a.useLayoutEffect)((function(){return i&&(i.offsetWidth,$=new h.a.Game(Q)),function(){var e;null===(e=$)||void 0===e||e.destroy(!0,!1)}})),Object(q.jsxs)("div",{className:Z.a.root,children:[Object(q.jsx)("div",{className:Z.a.game,id:"game-box",ref:function(e){s(e)}}),Object(q.jsxs)("div",{className:Z.a.movement,children:[Object(q.jsxs)("p",{children:[Object(q.jsx)("b",{children:"Left/Right arrow"})," -- move"]}),Object(q.jsxs)("p",{children:[Object(q.jsx)("b",{children:"Up arrow"})," -- jump"]}),Object(q.jsxs)("p",{children:[Object(q.jsx)("b",{children:"Up arrow + Left/Right arrow, when hitting the wall"})," -- spring back"]}),Object(q.jsxs)("p",{children:[Object(q.jsx)("b",{children:"Enter"})," -- save position"]}),Object(q.jsxs)("p",{children:[Object(q.jsx)("b",{children:"Space"})," -- teleport to saved position"]})]})]})};var te=function(){var e=Object(a.useState)(!1),t=Object(n.a)(e,2),i=t[0],s=t[1],o=function(e){var t;(null===(t=Q.physics)||void 0===t?void 0:t.arcade)&&(Q.physics.arcade.debug=e),s(!0)};return Object(q.jsx)("div",{className:c.a.root,children:i?Object(q.jsx)(ee,{}):Object(q.jsxs)("div",{className:c.a.debug,children:[Object(q.jsx)("p",{children:"Enable physic debug?"}),Object(q.jsxs)("div",{children:[Object(q.jsx)("button",{onClick:function(){o(!0)},className:c.a.dButton,children:"yes"}),Object(q.jsx)("button",{onClick:function(){o(!1)},className:c.a.dButton,children:"no"})]})]})})};i(23);r.a.render(Object(q.jsx)(s.a.StrictMode,{children:Object(q.jsx)(te,{})}),document.getElementById("root"))},6:function(e,t,i){e.exports={root:"style_root__28lIV",debug:"style_debug__saV1K",dButton:"style_dButton__1LtKb"}}},[[24,1,2]]]);
//# sourceMappingURL=main.0de1afca.chunk.js.map
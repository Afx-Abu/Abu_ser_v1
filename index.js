const Jsl_0x1aba05=Jsl_0x1aa7;function Jsl_0x1aa7(_0x5372cc,_0x5374e0){const _0x577a9b=Jsl_0x577a();return Jsl_0x1aa7=function(_0x1aa77e,_0x54a0a){_0x1aa77e=_0x1aa77e-0xd8;let _0x235e4b=_0x577a9b[_0x1aa77e];return _0x235e4b;},Jsl_0x1aa7(_0x5372cc,_0x5374e0);}(function(_0x518d76,_0xa31d91){const _0x30ee18=Jsl_0x1aa7,_0x44804a=_0x518d76();while(!![]){try{const _0x177cda=-parseInt(_0x30ee18(0x10b))/0x1*(parseInt(_0x30ee18(0xfd))/0x2)+parseInt(_0x30ee18(0xd9))/0x3*(-parseInt(_0x30ee18(0xe4))/0x4)+-parseInt(_0x30ee18(0x11e))/0x5*(-parseInt(_0x30ee18(0x126))/0x6)+parseInt(_0x30ee18(0xfe))/0x7+parseInt(_0x30ee18(0xea))/0x8*(-parseInt(_0x30ee18(0x107))/0x9)+parseInt(_0x30ee18(0x124))/0xa+parseInt(_0x30ee18(0xdc))/0xb;if(_0x177cda===_0xa31d91)break;else _0x44804a['push'](_0x44804a['shift']());}catch(_0x1b8e70){_0x44804a['push'](_0x44804a['shift']());}}}(Jsl_0x577a,0x595dd));function Jsl_0x577a(){const _0x57bcea=['test','stringify','readdirSync','\x0a\x0a\x0a\x0a\x0a','./temp/session.json','./lib/db/plugins','text','dataValues','Desktop','statusCode','1062RddYIZ','4440639ynviLw','./lib/ss/store.json','payload','log','child','sender','join','./config','prefix','140688VwTnZi','notify','pino','macOS','305lOrKoC','sendMessage','error','.js','pattern','./lib/store','✅\x20Plugins\x20Installed!','./lib/','got','body','user','creds.update','store','./media/session.json','imageMessage','existsSync','forEach','map','bind','425545EICytv','findAll','./lib/serialize','slice','uncaughtException','close','573130IvsgFD','split','6aGmiih','fromMe','SUDO','./plugins','messages','trim','group-participants.update','match','extname','791355VNelcb','function','name','6699022Zkvclm','events','sync','Session\x20Restored\x20✅','url','commands','silent','DATABASE','4QUhtHt','output','./lib/Base','isSelf','./plugins/','sticker','304GqGeQa','type','includes','writeFileSync','HANDLERS','messages.upsert','Abu\x20MD','writeToFile','EventEmitter'];Jsl_0x577a=function(){return _0x57bcea;};return Jsl_0x577a();}const {default:makeWASocket,useSingleFileAuthState,Browsers,makeInMemoryStore}=require('@adiwajshing/baileys'),fs=require('fs'),{serialize}=require(Jsl_0x1aba05(0x120)),{Message,Image,Sticker}=require(Jsl_0x1aba05(0xe6)),pino=require(Jsl_0x1aba05(0x109)),path=require('path'),events=require('./lib/utils'),got=require(Jsl_0x1aba05(0x113)),config=require(Jsl_0x1aba05(0x105));let ssname=path['join'](__dirname,Jsl_0x1aba05(0xf7));const {MakeSession}=require('./lib/session');!fs[Jsl_0x1aba05(0x11a)](ssname)&&MakeSession(config['Session_Id'],ssname);const {PluginDB}=require(Jsl_0x1aba05(0xf8)),Greetings=require('./lib/Greetings'),{decodeJid}=require(Jsl_0x1aba05(0x112)),{bind}=require(Jsl_0x1aba05(0x110)),store=makeInMemoryStore({'logger':pino()[Jsl_0x1aba05(0x102)]({'level':Jsl_0x1aba05(0xe2),'stream':Jsl_0x1aba05(0x117)})});require(Jsl_0x1aba05(0xdd))[Jsl_0x1aba05(0xf2)]['defaultMaxListeners']=0x64;async function bot(){const _0x14bd7e=Jsl_0x1aba05;await config[_0x14bd7e(0xe3)][_0x14bd7e(0xde)]();const {state:_0x1ac309,saveState:_0x3030e4}=useSingleFileAuthState(_0x14bd7e(0x118),pino({'level':_0x14bd7e(0xe2)}));let _0x2709ad=makeWASocket({'logger':pino({'level':_0x14bd7e(0xe2)}),'auth':_0x1ac309,'printQRInTerminal':!![],'browser':Browsers[_0x14bd7e(0x10a)](_0x14bd7e(0xfb)),'downloadHistory':![],'syncFullHistory':![]});store[_0x14bd7e(0x11d)](_0x2709ad['ev']),setInterval(()=>{const _0x2b2da8=_0x14bd7e;store[_0x2b2da8(0xf1)](_0x2b2da8(0xff));},0x1e*0x3c*0x3e8),_0x2709ad['ev']['on']('connection.update',async _0x4ea528=>{const _0x4488bc=_0x14bd7e,{connection:_0x1f7b10,lastDisconnect:_0x538aa9}=_0x4ea528;_0x1f7b10==='connecting'&&console[_0x4488bc(0x101)](_0x4488bc(0xf0));_0x1f7b10===_0x4488bc(0x123)&&_0x538aa9&&_0x538aa9[_0x4488bc(0x10d)]&&_0x538aa9[_0x4488bc(0x10d)]['output'][_0x4488bc(0xfc)]!=0x191&&(console['log'](_0x538aa9['error'][_0x4488bc(0xe5)][_0x4488bc(0x100)]),bot());if(_0x1f7b10==='open'){console[_0x4488bc(0x101)](_0x4488bc(0xdf)),console[_0x4488bc(0x101)]('Installing\x20Plugins.✅');let _0x56fb98=await PluginDB[_0x4488bc(0x11f)]();_0x56fb98[_0x4488bc(0x11c)](async _0x460488=>{const _0x1c1aa3=_0x4488bc;if(!fs[_0x1c1aa3(0x11a)](_0x1c1aa3(0xe8)+_0x460488[_0x1c1aa3(0xfa)][_0x1c1aa3(0xdb)]+_0x1c1aa3(0x10e))){console[_0x1c1aa3(0x101)](_0x460488[_0x1c1aa3(0xfa)]['name']);var _0x4737bc=await got(_0x460488['dataValues'][_0x1c1aa3(0xe0)]);_0x4737bc['statusCode']==0xc8&&(fs[_0x1c1aa3(0xed)]('./plugins/'+_0x460488['dataValues'][_0x1c1aa3(0xdb)]+_0x1c1aa3(0x10e),_0x4737bc[_0x1c1aa3(0x114)]),require(_0x1c1aa3(0xe8)+_0x460488['dataValues'][_0x1c1aa3(0xdb)]+_0x1c1aa3(0x10e)));}}),fs[_0x4488bc(0xf5)](_0x4488bc(0x129))[_0x4488bc(0x11b)](_0x2fbc6b=>{const _0x1c7895=_0x4488bc;path[_0x1c7895(0xd8)](_0x2fbc6b)['toLowerCase']()==_0x1c7895(0x10e)&&require('./plugins/'+_0x2fbc6b);}),console['log'](_0x4488bc(0x111));try{_0x2709ad['ev']['on'](_0x4488bc(0x116),_0x3030e4),_0x2709ad['ev']['on'](_0x4488bc(0x12c),async _0x41d9f1=>{Greetings(_0x41d9f1,_0x2709ad);}),_0x2709ad['ev']['on'](_0x4488bc(0xef),async _0xa07111=>{const _0x3554b2=_0x4488bc;if(_0xa07111[_0x3554b2(0xeb)]!==_0x3554b2(0x108))return;let _0x1da37b=_0xa07111[_0x3554b2(0x12a)][0x0],_0x31bb97=await serialize(JSON['parse'](JSON[_0x3554b2(0xf4)](_0x1da37b)),_0x2709ad);if(!_0x31bb97['message'])return;let _0x5508e4=_0x31bb97[_0x3554b2(0x114)];if(_0x5508e4)console[_0x3554b2(0x101)](_0x5508e4);events[_0x3554b2(0xe1)]['map'](async _0x166066=>{const _0xd34c72=_0x3554b2;if(_0x166066[_0xd34c72(0x127)]&&!config[_0xd34c72(0x128)][_0xd34c72(0x125)](',')[_0xd34c72(0xec)](_0x31bb97[_0xd34c72(0x103)][_0xd34c72(0x125)]('@')[0x0]||!_0x31bb97[_0xd34c72(0xe7)]))return;if(_0x166066[_0xd34c72(0x10f)]&&_0x166066[_0xd34c72(0x10f)][_0xd34c72(0xf3)](_0x5508e4)){var _0x524e55=_0x5508e4[_0xd34c72(0x12b)]()['split'](/ +/)[_0xd34c72(0x121)](0x1)[_0xd34c72(0x104)]('\x20');whats=new Message(_0x2709ad,_0x31bb97,_0x1da37b),_0x166066[_0xd34c72(0xda)](whats,_0x524e55,_0x31bb97,_0x2709ad);}else{if(_0x5508e4&&_0x166066['on']===_0xd34c72(0xf9))_0x31bb97[_0xd34c72(0x106)]=_0x5508e4[_0xd34c72(0x12d)](new RegExp(config[_0xd34c72(0xee)]))?_0x5508e4[_0xd34c72(0x12d)](new RegExp(config['HANDLERS']))[0x0]:'',whats=new Message(_0x2709ad,_0x31bb97,_0x1da37b),_0x166066[_0xd34c72(0xda)](whats,_0x5508e4,_0x31bb97,_0x2709ad,_0xa07111);else{if((_0x166066['on']==='image'||_0x166066['on']==='photo')&&_0x31bb97[_0xd34c72(0xeb)]===_0xd34c72(0x119))whats=new Image(_0x2709ad,_0x31bb97,_0x1da37b),_0x166066['function'](whats,_0x5508e4,_0x31bb97,_0x2709ad,_0xa07111,_0x1da37b);else _0x166066['on']===_0xd34c72(0xe9)&&_0x31bb97[_0xd34c72(0xeb)]==='stickerMessage'&&(whats=new Sticker(_0x2709ad,_0x31bb97,_0x1da37b),_0x166066[_0xd34c72(0xda)](whats,_0x31bb97,_0x2709ad,_0xa07111,_0x1da37b));}}});});}catch(_0x41bcad){console[_0x4488bc(0x101)](_0x41bcad+_0x4488bc(0xf6)+JSON[_0x4488bc(0xf4)](msg));}}}),process['on'](_0x14bd7e(0x122),_0x4baf61=>{const _0x5b55f6=_0x14bd7e;let _0x210899=_0x4baf61['message'];_0x2709ad[_0x5b55f6(0x10c)](_0x2709ad[_0x5b55f6(0x115)]['id'],{'text':_0x210899}),console[_0x5b55f6(0x101)](_0x4baf61);});}bot();

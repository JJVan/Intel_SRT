$(function(){
  var obj={
           img1:$('#img1_1'),
           img2:$('#img1_2'),
           img3:$('#img1_3'),
           img4:$('#img1_4'),
           openafter:$('#openafter'),
           img5:$('#img2_1'),
           img6:$('#img2_2'),
           foronthego:$('#foronthego'),
           forhome:$('#forhome'),
           img7:$('#img3_1'),
           img8:$('#img3_2'),
           img9:$('#img3_3'),

           choosetablet:$('#choosetablet'),
           not:$('#not'),
           openninghide:$('.openninghide'),
           foronthego:$('#foronthego'),
           forhome:$('#forhome'),
           want:$('#want'),
           chooselaptop:$('#chooselaptop'),
           choose2in1:$('#choose2in1'),
           choosedesktop:$('#choosedesktop'),
           allinone:$('#allinone'),

           toop:$('#top'), 
           cover:$('#cover'),
           contain:$('.contain'),
           section:$('.section'),
           floot:$('#float'),
           blue:$('.blue'),
           white:$('.white'),
           mfloat:$('.mobliefloat'),
           lega:$('#lega'),
           meetbox:$('#meetbox'),
           closebtn:$('#closebtn'),
           fallback:$('#fallback'),

           c1:$('#img2_3'),
           c2:$('#img2_3_1'),
           c3:$('#img2_4'),
           c4:$('#img2_5'),
           c5:$('#img2_5_1'),
           c6:$('#img2_6'),
           close:$('#close'),
           c7:$('#img10_6_3'),
           tablet:$('#tablet'),
           choosePC:$('#choosePC'), 
           in1 :$('#in1'),
           in1D:$('#in1D'),
           tabletlist:$('#tabletlist'),
           laptoplist:$('#laptoplist'),
           desktoplist:$('#desktoplist'),
           allinonelist:$('#allinonelist'),
           hb:$('html,body'),
           section3:$('#section3'),
           tw:TweenMax
    };
var sUserAgent = navigator.userAgent.toLowerCase(),
    bIsIpad = sUserAgent.match(/ipad/i) == 'ipad',
    bIsIphoneOs = sUserAgent.match(/iphone os/i) == 'iphone os',
    bIsMidp = sUserAgent.match(/midp/i) == 'midp',
    bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == 'rv:1.2.3.4',
    bIsUc = sUserAgent.match(/ucweb/i) == 'ucweb',
    bIsAndroid = sUserAgent.match(/android/i) == 'android',       
    bIsCE = sUserAgent.match(/windows ce/i) == 'windows ce',
    bIsWM = sUserAgent.match(/windows mobjle/i) == 'windows mobjle';
    (function() {//browserDistinguish
       if (bIsIpad) {   //ipad 
       }else if(bIsIphoneOs||bIsAndroid||bIsMidp||bIsUc7||bIsUc||bIsWM){        //phone
        obj.floot.removeClass('float');
        obj.floot.addClass('mobliefloat');
       }else{      //pc
        obj.contain.addClass('containpc');
        obj.section.addClass('sectionpc');
        obj.blue.css({'overflow':'hidden'});
        obj.white.css({'overflow':'hidden'});
      }
    })();
    var st = {
    scrollToElement : function(from,to){
       var target = to.offset().top;
       var pos = from.offset().top;
       var time = Math.abs(parseFloat(target - pos))/800;
       time = time < .5 ? .5 : time;
       time = time > 1 ? 1 : time;
       obj.tw.to(obj.hb, time, {scrollTop:target,ease:Sine.easeInOut});
      }
    };
    (function(){/*redirct*/
       obj.foronthego.click(function(){st.scrollToElement(obj.foronthego,obj.tablet);});
       obj.forhome.click(function(){st.scrollToElement(obj.forhome,obj.choosePC);});
       obj.not.click(function(){st.scrollToElement(obj.not,obj.in1);});
       obj.want.click(function(){st.scrollToElement(obj.want,obj.in1D);}); 
       obj.choosetablet.click(function(){st.scrollToElement(obj.choosetablet,obj.tabletlist);});
       obj.chooselaptop.click(function(){st.scrollToElement(obj.chooselaptop,obj.laptoplist);}); 
       obj.choose2in1.click(function(){st.scrollToElement(obj.choose2in1,obj.in1D);});
       obj.choosedesktop.click(function(){st.scrollToElement(obj.choosedesktop,obj.desktoplist);  });
       obj.allinone.click(function(){st.scrollToElement(obj.allinone,obj.allinonelist); }); 
       obj.toop.click(function(){   
       var target = obj.cover.offset().top;
       var pos = obj.toop.offset().top;
       var time = Math.abs(parseFloat(target - pos))/2000;
       time = time < .5 ? .5 : time;
       time = time > 1 ? 1: time;
       obj.tw.to(obj.hb, time, {scrollTop:target,ease:Sine.easeInOut});});     
    })();

/*show legal*/
  (function (){
    obj.lega.click(function(){
      obj.tw.set(obj.meetbox,{css:{display:'block'}});
      obj.tw.set(obj.closebtn,{css:{display:'block'}});      
    });
/*close legal*/
   obj.closebtn.click(function(){   
      obj.tw.set(obj.meetbox,{css:{display:'none'}});
      obj.tw.set(obj.closebtn,{css:{display:'none'}});
    });
  })();
function selectHandle(type,action){
  $('#main').on(action,function(event){
    var target = event.target;
    switch(target.id){
      case 'img2_3':
      case 'img2_3_1':
      case 'img2_4':if(type==0){obj.tw.set(obj.c1,{css:{display: 'none'}});
                        obj.tw.set(obj.c2,{css:{display:'block'}});
                        obj.tw.set(obj.c3,{css:{backgroundColor:'#FFA800'}});
                    }else{obj.tw.set(obj.c1,{ css:{display: 'block'}});
                        obj.tw.set(obj.c2,{css:{display:'none'}});
                        obj.tw.set(obj.c3,{css:{backgroundColor:'#146ec5'}});}              
                    break;
      case 'img2_5':
      case 'img2_5_1':
      case 'img2_6':if(type==0){obj.tw.set(obj.c4,{css:{display: 'none'}});
                        obj.tw.set(obj.c5,{css:{display:'block'}});
                        obj.tw.set(obj.c6,{css:{backgroundColor:'#FFA800'}});
                    }else{obj.tw.set(obj.c4,{css:{display: 'block'}});
                        obj.tw.set(obj.c5,{css:{display:'none'}});
                        obj.tw.set(obj.c6,{css:{backgroundColor:'#01AEF0'}});}              
                    break;                       
      case 'close':
            if(type==0){obj.close.attr('src','images/closebtnhover002x.png');}
            else{obj.close.attr('src','images/closebtn002x.png');}
            break;
      case 'img10_6_3':
            if(type==0){obj.tw.to(obj.c7,.5, {css:{scale:'1.1'}});}
            else{obj.tw.to(obj.c7,.5, {css:{scale:'1'}});}
            break;
      case 'fallback':
            if(type==0){obj.tw.to(obj.fallback,.5, {css:{scale:'1.1'}});}
            else{obj.tw.to(obj.fallback,.5, {css:{scale:'1'}});}
            break;
       }
    });
}
  selectHandle(0,'mouseover');
  selectHandle(1,'mouseout');
  selectHandle(0,'touchstart');
  selectHandle(1,'touchend'); 
 
/*opening animation*/
(function (){ 
    obj.tw.to(obj.img1, .5, {css:{opacity:0.999},delay:2}); 
     obj.tw.to(obj.img2, .5, {css:{opacity:0.999},delay:3}); 
      obj.tw.to(obj.img3, .5, {css:{opacity:0.999},delay:4}); 
       obj.tw.to(obj.img4, 1, {css:{left:'54%', opacity:0.999},delay:5});
        obj.tw.to(obj.section3, 1, {css:{opacity:0},delay:6}); 
         obj.tw.to(obj.openafter, 1, {css:{opacity:0.999,display:'block'},delay:6.5}); 
          obj.tw.to(obj.img5, .5, {css:{opacity:0.999},delay:7}); 
           obj.tw.to(obj.img6, .5, {css:{opacity:0.999},delay:7.5}); 
            obj.tw.to(obj.foronthego, .5, {css:{opacity:0.999},delay:8}); 
            obj.tw.to(obj.forhome, .5, {css:{opacity:0.999},delay:8});
            obj.tw.to(obj.section3, 1, {css:{opacity:0.999},delay:8}); 
            obj.tw.to(obj.img7, .5, {css:{opacity:0.999},delay:8}); 
            obj.tw.to(obj.img8, .5, {css:{opacity:0.999},delay:8}); 
            obj.tw.to(obj.img9, .5, {css:{opacity:0.999},delay:8}); 
            obj.tw.to(obj.choosetablet, .5, {css:{opacity:0.999},delay:8}); 
            obj.tw.to(obj.not, .5, {css:{opacity:0.999},delay:8}); 
            obj.tw.to(obj.openninghide, .5, {css:{opacity:0.999,display:'block'},delay:8}); 
 })();
  
function getScrollTop() {/*get top*/
  var scrollPos; 
  if(window.pageYOffset) {
    scrollPos = window.pageYOffset; } 
  else if (document.compatMode && document.compatMode != 'BackCompat') { 
    scrollPos = document.documentElement.scrollTop; 
  } else if (document.body) { scrollPos = document.body.scrollTop; } 
  return scrollPos;
}
window.onscroll = function(){  
     if(bIsIphoneOs||bIsAndroid||bIsMidp||bIsUc7||bIsUc||bIsWM){//phone
       if(getScrollTop() >=10) {
         obj.tw.to(obj.floot, .5, {css:{display:'block',right:'-149px'}}); 
       }else if(getScrollTop() < 10) {
         obj.tw.to(obj.floot, .5, {css:{display:'none',right:'-229px'}}); 
       }       
     }else{//pc and ipad
        if(getScrollTop()>=10) {
          obj.tw.to(obj.floot, .5, {css:{display:'block',bottom:0}}); 
        }else if(getScrollTop() < 10) {
          obj.tw.to(obj.floot, .5, {css:{display:'none',bottom:'-70px'}}); 
       }   
     }   
}
}); 



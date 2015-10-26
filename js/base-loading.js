var _PageHeight = document.documentElement.clientHeight;
var _LoadingHtml = '<div id="loadingDiv" style="position:absolute;left:0;width:100%;height:' + _PageHeight + 'px;top:0;background:#146ec5;opacity:1;filter:alpha(opacity=80);z-index:10000;"><img id="loading" src="images/loading-white.png"></div>';

document.write(_LoadingHtml);
document.onreadystatechange = setTimeout(completeLoading,2000);
function setImg(index) {  
   var oDiv = $(".picdelay");  
   var src = oDiv[index].getAttribute('data-src');  
   var oImg = document.createElement('img');  
   oImg.src = src;  
   if (oDiv[index].children.length == 0) {  
     oDiv[index].appendChild(oImg);  
   }  
} 
function completeLoading() {
    if (document.readyState == "complete") {
        var oDiv = $(".picdelay");  
        for (var i = 0, l = oDiv.length; i < l; i++) { 
          setImg(i); 
        } 
        /*var loadingMask = document.getElementById('loadingDiv');
        var display = document.getElementById('section3');*/
        var loadingMask = $('#loadingDiv');
        var display = $('#section3');
        loadingMask.remove();
        display.css("display","block");    
    }
}

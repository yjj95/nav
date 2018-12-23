//1.初始化数据
var data=init()
var arr=data.arr
var hash=data.hash
//2.生成键盘
//3.监听事件

 for(var index=0;index<arr.length;index++){
     div=tag("div")
     var row=arr[index]//里层数组
     for(var index2=0;index2<row.length;index2++){
         kbd=tag("kbd");
         kbd.textContent=row[index2]
         div.appendChild(kbd)
         
         //favicon
         img=tag("img")
         kbd.appendChild(img);
         //添加src
         //存在情况一定要写else也要写
         //如果这个icon不存在就要设置一个肯定存在的
         //图片请求出错
         var key=row[index2]
         createImageSrc(hash[key])
         

         //点击编辑按钮编辑网址
         var btn=tag("button")
         btn.textContent="编辑"//
         btn.id=row[index2]
         kbd.appendChild(btn)
         //点击编辑
         btn.onclick=function(e){
             k=e.target.id
             x=prompt("给我一个网址")
             //拿到网址放到这个键对应的hash里
             hash[k]=x;//现在的hash发生变化了
             //此时icon也要变,此时icon肯定存在
             //如果这不写改src，那么刷新后才会改
             //?编辑不能立马改变
             //x就是新网址，src里直接写x
             createImageSrc(x)
             //把整个hash存起来不是仅存变化
             localStorage.setItem("xh",JSON.stringify(hash))
             
         }
     }
     main.appendChild(div);
 }
 
 
 document.onkeypress=function(e){
     var key=e.key//新开一个窗口打开
     window.open("http://"+hash[key],"_blank")
 }
 //生成html结构、内容，添加事件，编辑hash，使用localstorage,favicon,图片加载失败两种原因,封装,css,对比，熟练
 //...背景，制作图片，使用工具查阴影
 //下面是工具函数
 function init(){
    var arr={
            '0': {0:'q',1:'w',2:'e',3:'r',4:'t',5:'y',6:'u',7:'i',8:'o',9:'p',length:10},
             '1': {0:'a',1:'s',2:'d',3:'f',4:'g',5:'h',6:'j',7:'k',8:'l',length:9},
             '2': {0:'z',1:'x',2:'c',3:'v',4:'b',5:'n',6:'m',length:7},
             'length': 3
         };
    var hash = {'q': 'qq.com', 'w': 'weibo.com', 'e': 'ele.me', 'r': 'renren.com', 't': 'tianya.com', 'y': 'youtube.com', 'u': 'uc.com' , 'i': 'iqiyi.com', 'o': 'opera.com', 'p': undefined, 'a': 'acfun.tv', 's': 'sohu.com', 'z': 'zhihu.com', 'm': 'www.mcdonalds.com.cn'
     };
     //取出新hash覆盖hash
     hashlocalStorage=getFormLocalstorage("xh")
     if(hashlocalStorage){
         hash=hashlocalStorage
     }
    return {arr:arr,hash:hash}
}
function createImageSrc(domain){
     if(domain){
         img.src="http://"+domain+"/favicon.ico"
     }else{
         img.src="//i.loli.net/2017/11/10/5a05afbc5e183.png"//.
     }
    //  img.onerror=function(e){
    //      e.target.src="//i.loli.net/2017/11/10/5a05afbc5e183.png"//x
    //  }
 }
 function createButton(){

 }
 function createSpan(){

 }
 function tag(tagName){
    return document.createElement(tagName);
 }
 function getFormLocalstorage(key){
    return JSON.parse(localStorage.getItem(key)||"null")
 }
 function generateKeyboard(){

 }
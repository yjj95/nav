//1.初始化数据
var data=init()
var arr=data.arr
var hash=data.hash
//2.生成键盘
generateKeyboard(arr,hash)
//3.监听事件
 document.onkeypress=function(e){
     var key=e.key//新开一个窗口打开
     window.open("http://"+hash[key],"_blank")
 }
 
 //下面是工具函数
 function init(){
    var arr={
            '0': {0:'tab',1:'q',2:'w',3:'e',4:'r',5:'t',6:'y',7:'u',8:'i',9:'o',10:'p',11:'{',12:'}',13:'|',length:14},
             '1': {0:'caps lock',1:'a',2:'s',3:'d',4:'f',5:'g',6:'h',7:'j',8:'k',9:'l',10:':',11:'"',12:'enter',length:13},
             '2': {0:'shift',1:'z',2:'x',3:'c',4:'v',5:'b',6:'n',7:'m',8:'<',9:'>',10:'?',11:'shift',length:12},
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
    //存在情况一定要写else也要写
    //如果这个icon不存在就要设置一个肯定存在的
    //图片请求出错
     if(domain){
         img.src="http://"+domain+"/favicon.ico"
     }else{
         img.src="//i.loli.net/2017/11/10/5a05afbc5e183.png"//.
     }
      img.onerror=function(e){
          e.target.src="//i.loli.net/2017/11/10/5a05afbc5e183.png"//x
      }
 }
 function createButton(id){
    //点击编辑按钮编辑网址
    var btn=tag("button")
    btn.textContent="编辑"//
    btn.id=id
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
    return btn
 }
 function createSpan(){

 }
 function tag(tagName){
    return document.createElement(tagName);
 }
 function getFormLocalstorage(key){
    return JSON.parse(localStorage.getItem(key)||"null")
 }
 function generateKeyboard(word,domain){
    for(var index=0;index<word.length;index++){
        div=tag("div")
        var row=word[index]//里层数组
        for(var index2=0;index2<row.length;index2++){
            kbd=tag("kbd");
            kbd.textContent=row[index2]
            if(row[index2].length>1){
                kbd.classList.add('special')
            }
            switch (row[index2]) {
                case 'tab':
                kbd.classList.add(row[index2])
                    break;
                case 'caps lock':
                kbd.className='caps-lock'
                    break;
                case 'enter':
                kbd.className=row[index2]
                    break;
                case 'shift':
                kbd.className=row[index2]
                    break;
                default:
                    break;
            }
            div.appendChild(kbd)
            //favicon
            img=tag("img")
            kbd.appendChild(img);
            //a-z
            var key=row[index2]
            //添加src
            createImageSrc(domain[key])
            var btn=createButton(key)
            kbd.appendChild(btn)
        }
        main.appendChild(div);
    }
 }
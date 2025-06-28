javascript:(function(){
var config = {
    selectors: ['article', 'main', '.post-content', '.article-body', '.content'],
    minLength: 300
};
var d=document,c=null;
for(var s of config.selectors) {
    c = d.querySelector(s);
    if(c) break;
}
if(!c){
    var a=d.querySelectorAll('div,section'),m=0,i;
    for(i=0;i<a.length;i++){
        var l=a[i].textContent.length;
        if(l>m&&l>config.minLength){
            m=l;
            c=a[i];
        }
    }
}
if(!c) return alert('No content');
if(d.getElementById('r')) return d.getElementById('r').remove();
var o=d.createElement('div');
o.id='r';
o.innerHTML='<div style="position:fixed;top:0;left:0;width:100%;height:100%;background:#fff;z-index:9999;overflow:auto;padding:20px;font:18px/1.6 serif"><button onclick="this.parentNode.parentNode.remove()" style="float:right;background:#333;color:#fff;border:0;padding:8px;cursor:pointer">✕</button><div style="max-width:700px;margin:0 auto">'+c.innerHTML+'</div></div>';
d.body.appendChild(o);
})();
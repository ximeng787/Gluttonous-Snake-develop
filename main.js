
window.onload=function(){
    var box=document.getElementById('box');
    $地图.$创建地图(box, 100, 100, 6);

    //画一条蛇
    for (var i=0; i<10; i++)
        $地图.set(i,3,255,0,255);
}


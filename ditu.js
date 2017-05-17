

var $地图={};

//地图对象私有块 为立即执行函数
(function () {

    //用于记录地图上每个单元格的颜色
    //每个数组成员是一个对象，有三个属性R G B，属性值为0-255。
    //每个成员对象还有一个属性$元素,指向元素对象
    //还有一个'$物品'属性指向在该格上的物品对象，默认值为未定义
    var $地图数组=[];



    //创建地图，初始化地图
    //第一个参数是要创建地图的div元素对象，请自行准备好可以容纳地图的div元素
    //第2个参数是x轴的长度 第3个参数是Y轴的长度(坐标0也计入长度，比如长度5的坐标值为0-4)
    //左上角坐标为0,0
    //第4个参数是每一格和CSS像素单位的比例，比如3即表示每1地图格填充至CSS像素的3倍次方格(3*3)
    //第5个参数为默认颜色布尔值，true为黑，false为白
    //该函数不会填充任何物品到地图上
    //返回成功布尔
    $地图.$创建地图 = function (div, x, y, bili, yanse) {

        //为地图数组每个单元格创建div
        for(var i=0; i<=y; i++){
            $地图数组[i]=[];
            for (var j=0; j<=x; j++)
            {
                var $i=yanse?0:255;
                $地图数组[i][j]={'R':$i, 'G':$i, 'B':$i};
                var $j=document.createElement('div');

                //填充默认颜色
                $j.style.backgroundColor='rgb(' + $i + ',' + $i + ',' + $i +')' ;

                $j.style.height=bili+'px';
                $j.style.width=bili+'px';
                $j.style['float']='left';
                if(j==0)$j.style.clear='left';//清楚浮动换行
                div.appendChild($j);
                $地图数组[i][j].$元素=$j;
            }
        }

        return true;

    }



    //设置地图单元格颜色
    //第1个参数为X坐标 第2个参数为Y轴坐标
    //第3-5个参数分别为R G B的值(0-255)
    //返回成功布尔
    $地图.set=function(x, y, R, G, B){
        $地图数组[y][x].$元素.style.backgroundColor='rgb(' + R + ',' + G + ',' + B +')' ;
        return true;
    }



    //获取地图单元格的颜色
    //两个参数分别为X Y坐标
    //返回成功一个对象，有三个属性分别是RGB，请调用者自行释放该对象
    $地图.get=function(){
        var $i={};
        $i.R=$地图数组[y][x].R;
        $i.G=$地图数组[y][x].G;
        $i.B=$地图数组[y][x].B;
    }

}());
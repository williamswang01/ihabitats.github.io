window.onload = function() {
    getMap();
    refreshs();
}

function getMap() {
    //初始化地图
    var map = new AMap.Map('amap', {
        resizeEnable: true,
        zoom: 17,
        center: [120.208581, 30.237526],
        lang: "zh_cn" //可选值：en，zh_en, zh_cn
    });
    var marker = new AMap.Marker({
        position: [120.208581, 30.237526],
        map: map,
        icon: new AMap.Icon({
            size: new AMap.Size(64, 64), //图标大小
            image: "./images/logo.png",
            // imageOffset: new AMap.Pixel(0, 0),
            imageSize: new AMap.Size(64, 64)
        })
    });
    map.add(marker);
}

function refreshs() {
    var map = document.getElementById("highway-amaps");
    map.onclick = function() {
        window.location.reload()
    }
}
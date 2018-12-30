window.addEventListener('load', function () {

    setHeaderOpacity();

    function setHeaderOpacity() {
        //获取元素;
        var slide = document.querySelector('#slide');
        var header = document.querySelector('#header');
        var slideHeight = slide.offsetHeight;
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        //   console.log(scrollTop);
        var opacity = scrollTop / slideHeight;
        console.log(opacity)
        //把透明度设置给头部的rgba的a上;
        header.style.backgroundColor = 'rgba(222,24,27,' + opacity + ')';
    }
    window.addEventListener('scroll', setHeaderOpacity);
    //添加时间事件;
})
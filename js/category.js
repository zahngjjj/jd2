window.addEventListener('load', function () {
    var swiper = new Swiper('.contentLeft .swiper-container', {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        mousewheel: true,
      });

      var swiper = new Swiper('.contentRight .swiper-container', {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        scrollbar: {
          el: '.swiper-scrollbar',
        },
        mousewheel: true,
      });

      //------------
      var liList = document.querySelectorAll('.contentLeft li');
      var liHeight = liList[0].offsetHeight;
      // 获取分类左侧的swiper-wrapper 真正滑动的元素
      var swiperWrapper = document.querySelector(' .contentLeft .swiper-wrapper');
      var parent = this.document.querySelector('.swiper-container');
      var children = this.document.querySelector('.swiper-slide');
      var minTranslateY = parent.offsetHeight - children.offsetHeight;
      console.log(minTranslateY);
      for (var i = 0; i < liList.length; i++) {
          liList[i].dataset['index'] = i;
          liList[i].addEventListener('click', function () {
              console.log(liHeight);
              var translateY = -(this.dataset['index'] * liHeight);
              if (translateY < minTranslateY) {
                  translateY = minTranslateY;
              }
              swiperWrapper.style.transform = 'translate3d(0px,' + translateY + 'px,0px)';
              swiperWrapper.style.transition = 'all 0.2s';
              for (var j = 0; j < liList.length; j++) {
                liList[j].classList.remove('active');
            }
          })
       
          this.classList.add('active');   

      }
    //----------------------------------------------------------------------
    //    var lis = document.querySelectorAll(' .contentLeft li');
    //    var liHeight = lis[0].offsetHeight;
    //    // 获取分类左侧的swiper-wrapper 真正滑动的元素
    //    var swiperWrapper = document.querySelector(' .contentLeft .swiper-wrapper');
    //    // 计算最小的位移的距离  父容器高度 - 子容器的高度
    //    var parent = document.querySelector('.swiper-container');
    //    var children = document.querySelector('.swiper-slide');
    //    var minTranslateY = parent.offsetHeight - children.offsetHeight;
    //    console.log(minTranslateY);
       
    //    for (var i = 0; i < lis.length; i++) {
    //        //JS 对象添加属性
    //        // lis[i].index = i;
    //        //添加标签属性
    //        // lis[i].setAttribute('index',i);
    //        //HTML5的自定义data-属性 
    //        lis[i].dataset['index'] = i;
    //        lis[i].addEventListener('click', function () {
    //            // console.dir(this);
    //            // 获取JS对象的属性的值
    //            //   console.log(this.index);                  
    //            // 获取li标签属性的值
    //            //   console.log(this.getAttribute('index'));  
    //            // 获取HTML5的自定义data-属性                 
    //            // console.log(this.dataset['index']);
    //            // console.log(liHeight);
    //            // 因为是往上位移 值是负值
    //            var translateY = -(this.dataset['index'] * liHeight);
    //            console.log(translateY);
    //            // 在设置位移之前判断当前位移的距离 是否小于最小的位移距离
    //            if(translateY < minTranslateY){
    //                // 如果计算位移距离超过了最小位移距离 就设置为最小位移距离
    //                translateY = minTranslateY;
    //            }
    //            // 给swiperWrapper 设置位移
    //            swiperWrapper.style.transform = 'translate3d(0px,' + translateY + 'px,0px)';
    //            // 设置一个过渡效果 慢慢位移
    //            swiperWrapper.style.transition = 'all 0.2s';
    //            // 先删除所有人 active 给当前点击添加active
    //            for (var j = 0; j < lis.length; j++) {
    //                lis[j].classList.remove('active');
    //            }
    //            // 给当前li添加active
    //            this.classList.add('active');            
    //        });
    //    }
    //   ----------------------------------------------------------------
});
<template>
  <div class="index_main" v-if='showMe'>
    <!-- //头部 -->
    <div class="index_header">
      <div class="address">
        <p>广州<span class="downArr"></span></p>
        
      </div>
      <div class="search">
        <input type="text" name="" placeholder="输入商家/品类/商圈">
        <i></i>
      </div>
      <div class="myzong">
        <span></span>
        <p>我 的</p>
      </div>
    </div>

    <div class="index_banner">
      <Swipe class='my-swiper'> <!-- 取消自动轮播 -->
        <Swipe-item class="slide slide1">
          <router-link to='/search/美食'>
            <div class="common_slider">
              <img src="../images/slider-pic/slider-pic1.jpeg" alt="">
              <p>美食</p>
            </div>
          </router-link>
          <router-link to='/search/猫眼电影'>
            <div class="common_slider">
              <img src="../images/slider-pic/slider-pic2.jpeg" alt="">
              <p>猫眼电影</p>
            </div>
          </router-link>
          <router-link to='/search/酒店'>
            <div class="common_slider">
              <img src="../images/slider-pic/slider-pic3.jpeg" alt="">
              <p>酒店</p>
            </div>
          </router-link>
          <router-link to='/search/休闲娱乐'>
            <div class="common_slider">
              <img src="../images/slider-pic/slider-pic4.jpeg" alt="">
              <p>休闲娱乐</p>
            </div>
          </router-link>
          <router-link to='/search/外卖'>
            <div class="common_slider">
              <img src="../images/slider-pic/slider-pic5.jpeg" alt="">
              <p>外卖</p>
            </div>
          </router-link>
          <router-link to='/search/KTV'>
            <div class="common_slider">
              <img src="../images/slider-pic/slider-pic6.jpeg" alt="">
              <p>KTV</p>
            </div>
          </router-link>
          <router-link to='/search/周边游'>
            <div class="common_slider">
              <img src="../images/slider-pic/slider-pic7.jpeg" alt="">
              <p>周边游</p>
            </div>
          </router-link>
          <router-link to='/search/丽人'>
            <div class="common_slider">
              <img src="../images/slider-pic/slider-pic8.jpeg" alt="">
              <p>丽人</p>
            </div>
          </router-link>
        </Swipe-item>

        <Swipe-item class="slide slide2">
          <router-link to='/search/小吃快餐'>
            <div class="common_slider">
              <img src="../images/slider-pic/slider-pic9.jpeg" alt="">
              <p>小吃快餐</p>
            </div>
          </router-link>
          <router-link to='/search/机票/火车'>
            <div class="common_slider">
              <img src="../images/slider-pic/slider-pic10.jpeg" alt="">
              <p>机票/火车</p>
            </div>
          </router-link>
          <router-link to="/search/汉堡">
            <div class="common_slider">
              <img src="../images/slider-pic/slider-pic11.jpeg" alt="">
              <p>汉堡</p>
            </div>
          </router-link>
          <router-link to="/search/日韩料理">
            <div class="common_slider">
              <img src="../images/slider-pic/slider-pic12.jpeg" alt="">
              <p>日韩料理</p>
            </div>
          </router-link>
          <router-link to="/search/麻辣烫">
            <div class="common_slider">
              <img src="../images/slider-pic/slider-pic13.jpeg" alt="">
              <p>麻辣烫</p>
            </div>
          </router-link>
          <router-link to="/search/披萨意面">
            <div class="common_slider">
              <img src="../images/slider-pic/slider-pic14.jpeg" alt="">
              <p>披萨意面</p>
            </div>
          </router-link>
          <router-link to="/search/川湘菜">
            <div class="common_slider">
              <img src="../images/slider-pic/slider-pic15.jpeg" alt="">
              <p>川湘菜</p>
            </div>
          </router-link>
          <router-link to="/search/包子粥店">
            <div class="common_slider">
              <img src="../images/slider-pic/slider-pic16.jpeg" alt="">
              <p>包子粥店</p>
            </div>
          </router-link>
        </Swipe-item>
      </Swipe>

    </div>


  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vue-swipe';

export default {

  name: 'hello',
  data () {
    return {
      showMe:true
    }
  },
  components:{
    Swipe,
    SwipeItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
  @blueBase: #06c1ae;
  @baserem : 64rem;
  .index_main{
    overflow: hidden;
    width:640/@baserem;
    .index_header{
      border-bottom:1px solid #ccc;
      background:@blueBase;
      height:100/@baserem;
      box-sizing: border-box;
      display: flex;
      .address{
        width:134/@baserem;
        height:100%;
        font-size: 36/@baserem;
        color:#fff;
        display: flex;
        p{
          height:100%;
          text-align: left;
          line-height:100/@baserem;
          width:100%;
          padding:0 25/@baserem;
          background:url(../images/img/downArr.png) no-repeat right center;
          }
        }
      .search{
        width:408/@baserem;
        height:64/@baserem;
        margin:0.24rem 0.2rem 0 0.2rem;
        position: relative;
        background:@blueBase;
        input{
          position: absolute;
          left: 0;
          top:0;
          width:100%;
          height: 100%;
          background: rgba(0,0,0,.15);
          border-radius: 0.2rem;
          vertical-align: middle;
          font-size:28/@baserem;
          color:#68dbce;
          text-indent: 1rem;
        }
        i{
          width:26/@baserem;
          height:56/@baserem;
          background:url(../images/img/search.png) no-repeat;
          background-size: 100% 100%;
          position: absolute;
          left:0.3rem;
          top:0.1rem;
        }
      }
      .myzong{
        width:84/@baserem;
        height:64/@baserem;
        font-size: 0.28rem;
        margin-top:12/@baserem;
        color:#fff;
        span{
          display: block;
          width:48/@baserem;
          height:40/@baserem;
          margin-left: 0.24rem;
          background:url(../images/img/user.png) no-repeat center center;
          background-size: 100% 100%;
        }
        p{
          width:100%;
          margin-top:8px;
          font-size: 24/@baserem;
          text-align: center;
        }
      }

    }
    .index_banner{
      height:4.6rem;
      background:#fff;
      margin-bottom:0.2rem;
      .common_slider{
        width:2.5rem;
        height:2rem;
        float: left;
        img{
          margin: 0 auto;
          display:block;
          width:1.2rem;
          height:1.2rem;
          margin-top:.2rem;
        }
        p{
          text-align:center;
          font-size: 28/@baserem;
          color:#666;
        }
      }
    }
    

  }
/*swipe插件改写*/
/* slider插件css + 改写*/
.mint-swipe,.mint-swipe-items-wrap{overflow:hidden;position:relative;height:100%}
.mint-swipe-items-wrap>div{position:absolute;-webkit-transform:translateX(-100%);transform:translateX(-100%);width:100%;height:100%;display:none}
.mint-swipe-items-wrap>div.is-active{display:block;-webkit-transform:none;transform:none}
.mint-swipe-indicators{position:absolute;bottom:10px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}
.mint-swipe-indicator{width:.1rem;height:.1rem;display:inline-block;border-radius:50%;background:#ccc;margin:0 3px}
.mint-swipe-indicator.is-active{background:@blueBase}

  
</style>

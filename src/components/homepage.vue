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
    <!-- 下载 图片 -->
    <div class="download">
      <router-link to="/">
        <img src="../images/img/download.jpg">
      </router-link>
    </div>

    <div class="index_banner">

      <Swipe class="my-swipe" :auto="0"><!-- swipe 设置不自动滚动 -->
        <Swipe-item class="slide slide1">
          <router-link to="/search/美食">
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
    <!-- 一个列表 -->
    <div class="someList">
      <section class="left_list">
        <dl>
          <dt>
            <h3>我们约吧</h3>
            <p>恋人家人好朋友</p>
          </dt>
          <dd><img src="../images/img/lovers.png"></dd>
        </dl>
      </section>
      <section class="right_list">
        <div class="list_top">
          <dl>
            <dt>
              <h3>超低价格</h3>
              <p>十元惠生活</p>
            </dt>
            <dd><img src="../images/img/hamburger.jpg"></dd>
          </dl>
        </div>
        <div class="list_bottom">
          <section>
            <dl>
              <dt>
                <h3>逛街必备</h3>
                <p>甜点奶茶随手找</p>
              </dt>
              <dd><img src="../images/img/coffee.png"></dd>
            </dl>
          </section>
          <section>
            <dl>
              <dt>
                <h3 class="color_ano">名店抢购</h3>
                <p>距离结束</p>
              </dt>
              <dd><span>{{content.hour}}</span>:<span>{{content.minutes}}</span>:<span>{{content.second}}</span></dd>
            </dl>
          </section>
        </div>
      </section>
    </div>

    <div class="main_content">
      <h3>猜你喜欢</h3>
      <oneShop v-for='n in getFalseBussinessbrief' :aitem='n' :key='n'></oneShop>
  

    </div>

  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vue-swipe';
import oneShop from './tpl/one_shop'
import { mapGetters } from 'vuex';

export default {

  name: 'hello',
  data () {
    return {
      showMe:false,
      sexteen_slider: '',
      content:{}
    }
  },
  mounted(){
    // 设置当前状态为加载中
    this.$store.dispatch('setLoading',true);
    //设置当前页面标记为首页
    this.$store.dispatch('setWhichpage','homepage')

    var time = Math.floor(Math.random()*2000);
    console.log('模拟加载用时: ' + time)
    setInterval(() => {
      this.$store.dispatch('setLoading',false);
      this.showMe = true;
    },time)

    this.countdowm('2017-4-12 9:40:20');  //设置活动结束时间
  },
  computed:{
    ...mapGetters([
      'getLogin',
      'getFalseBussinessbrief' // 商家简略信息
    ])
  },
  methods:{
    //倒计时
    countdowm(endtime){
      let self = this;
      let timer = setInterval(() =>{
        let nowTime = Date.parse(new Date())/1000;
        let stopTime1 = Date.parse(endtime)/1000;
        let allSecond = stopTime1 - nowTime;
        if(allSecond > 0){
          let hour = Math.floor(allSecond/3600);
          let minutes = Math.floor(allSecond%3600/60);
          let second = Math.floor(allSecond%3600%60);
          hour = hour < 10? '0' + hour : hour;
          minutes = minutes < 10? '0' + minutes : minutes;
          second = second < 10? '0' + second :second
          self.content = {
           hour:hour,
           minutes:minutes,
           second:second
          }; 
        }else{
          self.content = {
            hour:'00',
            minutes:'00',
            second:'00'
          }
        }
      },1000)
      

    }
  },
  components:{
    Swipe,
    SwipeItem,
    oneShop
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
    /*头部搜索区域*/
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
          position: relative;
          padding:0 25/@baserem;

          span{
            position: absolute;
            width:22/@baserem;
            height:36/@baserem;
            right:0;
            top:50%;
            margin-top:-0.28rem;
            background:#fff url(../images/img/downArr.png) no-repeat center center;
            background-size: 100% 100%;
            }
          }
        }
      .search{
        width:408/@baserem;
        height:64/@baserem;
        margin:0.28rem 0.2rem 0 0.2rem;
        position: relative;
        background:@blueBase;
        input{
          box-sizing: border-box;
          width:100%;
          height: 100%;
          background: rgba(0,0,0,.15);
          border-radius: 0.2rem;
          font-size:28/@baserem;
          color:#68dbce;
          padding-left: 1rem;
          border:0;
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
          margin-top:5px;
          font-size: 24/@baserem;
          text-align: center;
        }
      }

    }
    /*可滑动菜单列表*/
    .index_banner{
      height:4.6rem;
      background:#fff;
      margin-bottom:0.2rem;
      border-bottom:1px solid #ddd8ce;
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
    /* 下载app */
    .download{
      height:100/@baserem;
      img{
        width:100%;
      }
    }
    /*中间列表*/
    .someList{
      height:5rem;
      margin:0.4rem 0;
      padding:12/@baserem;
      display: flex;
      background:#fff;
      border-top:1px solid #DDD8CE;
      border-bottom:1px solid #DDD8CE;
      .left_list{
        flex:1;
        border-right:1px solid #ddd8ce;
        padding-left: 16/@baserem;
        h3{
          font-size: 30/@baserem;
          color:#55a40f;
          margin:20/@baserem 0;
        }
        p{
          color:#666;
          font-size:24/@baserem;
        }
      }
      .right_list{
        flex:2;
        div.list_top{
          height:50%;
          border-bottom:1px solid #ddd8ce;
          dl{
            height:100%;
            dt{
              width:170/@baserem;
              float:left;
              margin-left:40/@baserem;
              height:100%;
              h3{
                font-size: 30/@baserem;
                color:#ff3f0d;
                margin:20/@baserem 0;
              }
              p{
                color:#666;
                font-size:24/@baserem;
              }
            }
            dd{
              display: inline-block;
            }
          }
        }
        div.list_bottom{
          display: flex;
          section{
            box-sizing: border-box;
            padding-left: 18/@baserem;
            flex:1;
            border-left: 1px solid #DDD8CE;
            h3{
              font-size: 30/@baserem;
              color:#f742a0;
              margin-bottom:10/@baserem; 
            }
            h3.color_ano{
              color:#ff8601;
            }
            p{
              color:#666;
              font-size:24/@baserem;
            }
            dd{
              font-size:24/@baserem;
              height:80/@baserem;
              text-align: left;
              img{
                width: 80/@baserem;
                height:80/@baserem;
                margin-left:40/@baserem;
              }
              span{
                display: inline-block;
                width:40/@baserem;
                height:30/@baserem;
                background:#4C4C4C;
                border-radius: 6/@baserem;
                color:#fff;
                font-size: 24/@baserem;
                margin-top:20px;
                text-align: center;
                line-height:30/@baserem;
              }
            }
          }
        }
      }
    }
    .main_content{
      background:#fff;
      padding-left:20/@baserem;
      h3{
        padding:28/@baserem 20/@baserem;
        color:#666;
        font-weight:normal;
        font-size: 34/@baserem;
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

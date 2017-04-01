<template>
	<!-- 列表单个商家 -->
    <router-link :to="'/business' + aitem.path">
		<dl>
			<dt><img :src="aitem.img"></dt>
			<dd>
				<div class="right">
					<h3>{{aitem.shop_name}}</h3>
					<p>{{aitem.notice}}</p>
					<div class="sons">
						<p><strong>{{aitem.price}}</strong><i>元</i> <em>门市价:{{aitem.markprice}}元</em></p><span>已售<b>{{aitem.sale}}</b></span>
					</div>
				</div>
			</dd>
		</dl>
    </router-link>

</template>

<script type="text/javascript">
	
	export default {
	  name: 'one_shop',
	  props: ['aitem'],
	  data () {
	    return {
	      msg: '1'

	    }
	  },
	  mounted () {

	  },
	  computed: {

	  },
	  methods: {

	  }

	}
</script>

<style lang='less' scoped>
	@baserem:64rem;
	a{
		color:#333;
	}
	dl{
		height:210/@baserem;
		border-top:1px solid #DDD8CE;
		padding:24/@baserem 10/@baserem;
		box-sizing: border-box;
		dt{
			width:170/@baserem;
			height:170/@baserem;
			float:left;
			margin-right:20/@baserem;
			img{
				width:100%;
				height:100%;
			}
		}
		dd div.right{
			width:400/@baserem;
			float:left;
			color:#333;
			h3{
				font-size: 30/@baserem;
				font-weight: 400;
				margin:4/@baserem 0;
			}
			p{	
				height: 68/@baserem;
				font-size: 24/@baserem;
				color:#666;
			}
			div.sons{
				overflow: hidden;
				p{
					float:left;
					strong{
						color:#06c1ae;
						font-size: 38/@baserem;
						font-weight: 400;
					}
					i{
						color:#06c1ae;
					}
					em{
						font-weight: 400;
					}
				}
				span{
					float:right;
					font-size: 24/@baserem;
					color:#666;
					b{
						font-weight: 400;
					}
				}
			}
		}
	}
</style>
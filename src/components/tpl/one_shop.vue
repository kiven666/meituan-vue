<template>
	<!-- 列表单个商家 -->
    <router-link :to="'/business' + aitem.path">
		<dl>
			<dt><img :src="aitem.img"></dt>
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
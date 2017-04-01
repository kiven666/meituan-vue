//提交mutations方法
export default {
	//改变是否登录
	setLogin ({commit},platform){
		commit('SET_LOGIN',platform)
	},//改变是否加载中
	setLoading ({commit},platform){
		commit('SET_LOADING',platform)
	},//改变当前页面的标记
	setWhichpage ({commit},platform){
		commit('SET_WHICHPAGE',platform)
	},//改变首页是否加载更多
	setHomepageMore ({commit},platform){
		commit('SET_HOME_PAGE_MORE',platform)
	}
}
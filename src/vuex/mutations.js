//设置状态
export default{
	//设置是否登录
	SET_LOGIN (state,platform){
		state.isLogin = platform
	},//设置是否在加载
	SET_LOADING (state,platform){
		state.isLoading = platform
	},//设置当前页面所在标记
	SET_WHICHPAGE (state,platform){
		state.whichPage = platform
	},//首页加载更多
	SET_HOME_PAGE_MORE (state, platform) {
	  state.falseBussinessbrief = platform;
	}
}
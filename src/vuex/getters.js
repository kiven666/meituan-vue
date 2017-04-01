export default {
	//得到是否在加载中
	getLoading:(state) => state.isLoading,
	//得到是否已登录
	getLogin:(state) => state.isLoad,
	//得到当前用户名
	getUsername:(state) => state.username,
	getPassword:(state) => state.password,
	//得到当前页面
	getWhichpage:(state) => state.whichPage,
	//得到商家信息
	getFalseBussinessbrief:(state) => state.falseBussinessbrief
}
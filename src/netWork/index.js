

import ajax from './ajax'

// 1. 定义基础路径
const BASE_URL = 'http://localhost:1688';


// 2. 请求的方法
// 2.1 请求首页的轮播图
export const getHomeCasual = () => ajax(BASE_URL + '/api/homecasual');

// 2.2 请求首页导航
export const getHomeNav = () => ajax(BASE_URL + '/api/homenav');

// 2.3 请求首页商品数据
export const getHomeShopList = () => ajax(BASE_URL + '/api/homeshoplist');

// 2.4 请求推荐商品数据
export const getRecommendShopList = () => ajax(BASE_URL + '/api/recommendshoplist');
// 2.5 请求推荐商品数据下拉加载更多
export const getRecommendShopListAll = () => ajax(BASE_URL + '/api/recommend');

// 2.6 请求推荐商品数据
export const getSearchGoods = () => ajax(BASE_URL + '/api/searchgoods');

// 2.7 请求验证码
export const getMegCode = (phone) => ajax(BASE_URL + '/api/send_code',{phone});

// 2.8 验证手机验证码登录
export const postPhoneCode = (phone,code) => ajax(BASE_URL + '/api/login_code',{phone,code},'POST');

// 2.9 用户名密码登录

export const postPwdCode = (name,pwd,captcha) => ajax(BASE_URL + '/api/login_pwd',{name,pwd,captcha},'POST');

// 2.10 获取登录的用户信息
export const getUserInfo = () => ajax(BASE_URL + '/api/userinfo');

// 2.10 获取购物车数据
export const getBuyCart = () => ajax(BASE_URL + '/api/buycart');

// 9. 退出登录
export const getLogOut = () => ajax(BASE_URL + '/api/logout');
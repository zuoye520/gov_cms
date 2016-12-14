/**
 * @Desc: 过滤数据
 * @Author: zuozuo
 * @Date: 2016-09-06
 **/

/*
 * 商品详情数据过滤
 */
export const filterGoodsDetail = (state) =>{
	const reg = /<img[^>]*src[=\'\"\s]+([^\"\']*)[\"\']?[^>]*>/gi;
	let detail = state.detail.data;//详情数据
	
	//运费计算
	detail.transport = detail.transport > 0 ? (detail.transport / 100).toFixed(2) : "免运费";
	//轮播图
	detail.picList = detail.picList.length > 0 ? detail.picList.map((item,index)=>{
		return {
			picPath : item.smallPic,//小图
			bigPic : item.bigPic,//大图
		}
	}) : [{picPath:""}];
	//获取详情里面的图片地址
	let detailPic = [];
	while (reg.exec(detail.detail))
	{
	    detailPic.push(RegExp.$1);
	}
	detail.detailPic = detailPic;
	//价格区间
	let	priceArr = detail.modelList.map(function(item, index) {
			return item.price;
		});
		detail.maxPrice = Math.max(...priceArr);
		detail.minPrice = Math.min(...priceArr);
	
	return detail;
}

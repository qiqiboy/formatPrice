/* 金额格式化函数
 * by qiqiboy imqiqiboy@gmail.com
 * Blog http://www.qiqiboy.com
 * 示例：formatPrice('$9999999'); // output $9,999,999
 *		formatPrice('今天我赚了$1000块'); // output 今天我赚了$1,000块
 *		formatPrice('今天我赚了$3000块，吃饭花了$100，给妹纸$1888零花钱'); // 今天我赚了$,3000块，吃饭花了$100，给妹纸$1,888零花钱
 * 
 * @param String|Number str 原始字符串或金额
 *
 */
	function formatPrice(str){
		return String(str).replace(/\d+/g,function(price){
			var arr=[];
			do{
				arr.push(price.slice(-3));
				price=price.substring(0,price.length-3);
			}while(price.length);
			return arr.reverse().join(',');
		});
	}
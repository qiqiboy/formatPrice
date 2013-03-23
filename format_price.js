/* 金额格式化函数
 * by qiqiboy imqiqiboy@gmail.com
 * Blog http://www.qiqiboy.com
 * 将字符串中的整数或者浮点数格式化为千分位表示
 * 示例：formatPrice('$9999999'); // output $9,999,999
 *		formatPrice('今天我赚了$1000块'); // output 今天我赚了$1,000块
 *		formatPrice('今天我赚了$3000块，吃饭花了$100，给妹纸$1888零花钱'); // 今天我赚了$3,000块，吃饭花了$100，给妹纸$1,888零花钱
 * 		formatPrice('12345678.8654321'); //output "12,345,678.8654321"
 *		formatPrice('12345678.8654321.'); //output "12,345,678.8654321."
 *		formatPrice('12345678.8654321.6766'); //output "12345678.8654321.6766" 非标准浮点数，跳过
 * @param String|Number str 原始字符串或金额
 *
 */
	function formatPrice(str){
		return String(str).replace(/\d+(?:\.\d+)*/g,function(price){
			var arr=price.split('.');
			if(arr.length>2){
				return price;
			}
			arr[0]=arr[0].replace(/(\d{1,3})(?=(\d{3})+$)/g, '$1,');
			return arr.join('.');
		});
	}
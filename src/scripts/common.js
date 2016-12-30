
/*let name ="哈哈哈哈"

export default name;*/

//module.exports="hello world";

var $=require("./libs/jquery");

var common = {
	getList:function () {
		$.ajax({
			url:"./api/list",
			success:function (res) {
				console.log(res);
			}
		})
	}
};
module.exports=common;
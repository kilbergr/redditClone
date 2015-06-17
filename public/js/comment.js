$(function(){
	var adddate = function(){
		$("#newcomment").on("submit", function(event){
			var date = new Date();
			var datePost = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear().toString().substr(2,2);
		})
	}
})
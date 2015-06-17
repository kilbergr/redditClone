var mongoose = require("mongoose");
var date = new Date();
var dateComment = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear().toString().substr(2,2);

var commentSchema = new mongoose.Schema ({
												content: {
													type: String,
													required: true},
												date: {
													type: String,
													default: dateComment
													},
												post: {
													type: mongoose.Schema.Types.ObjectId,
													ref: "Post"
													},
												user: {
													type: mongoose.Schema.Types.ObjectId,
													ref: "User"
													}
											});

var Comment = mongoose.model("Comment", commentSchema);

//making sure models were properly set up--checked so commented out
//Comment.find({}).populate('post').exec(function(err, comment){
	// console.log(comment.post);
 // });
module.exports = Comment;
var mongoose = require("mongoose");

var commentSchema = new mongoose.Schema ({
												content: {
													type: String,
													required: true},
													date: String,
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
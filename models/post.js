var mongoose = require("mongoose");
var Comment = require("./comment");

var postSchema = new mongoose.Schema({
											title: {
												type: String, 
												required: true
											},
											content: {
												type: String, 
												required: true
											},
											tag: String,
											date: String,
											comments: [{
												type: mongoose.Schema.Types.ObjectId,
												ref: "Comment"
											}],
											user: {
												type: mongoose.Schema.Types.ObjectId,
												ref: "User"
											}
});

postSchema.pre('remove', function(next){
	Comment.remove({post: this._id}).exec();
});

var Post = mongoose.model("Post", postSchema);

//making sure models were properly set up--checked so commented out
// Post.find({}).populate('user').exec(function(err, post){
// 	console.log(post.user);
//  });

module.exports = Post;

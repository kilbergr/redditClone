var express = require("express"),
app = express(),
morgan = require("morgan"),
bodyParser = require("body-parser"),
methodOverride = require("method-override"),
db = require("./models"),
session = require("cookie-session");

app.set("view engine", "ejs");
app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.use(express.static(__dirname + '/public'));

//POST routes
//ROOT
app.get('/', function(req, res){
	res.redirect("/posts");
});

//index
app.get('/posts', function(req, res){
	db.Post.find({}, function(err, posts){
		if(err){
			console.log(err);
			//TODO: figure out what to do with errors 
			res.render("errors/404")
		}
		else{
			res.render("posts/index", {posts:posts});
		}
	})
})

//new
app.get('/posts/new', function(req, res){
	res.render('posts/new');
})

//create
app.post('/posts', function(req, res){
	db.Post.create(req.body.post, function(err, post){
		if(err){
			console.log(err);
			//TODO: error handling
			res.render("posts/new");
		}
		else{
			res.redirect('/posts');
		}
	});
});

//show
app.get('/posts/:id', function(req, res){
	db.Post.findById(req.params.id)
	.populate('comments')
	.exec(function(err, post){
		if(err){
			console.log(err);
			//TODO: error handling
			res.render('posts/index')
		}
		else{
			res.render("posts/show", {post:post})
		}
	});
});

//edit
app.get('/posts/:id/edit', function(req, res){
	db.Post.findById(req.params.id)
	.populate('comments')
	.exec(function(err, post){
		if(err){
			console.log(err);
			//TODO: error handling
			res.render('posts/show')
		}
		else{
			res.render('posts/edit', {post:post})
		}
	});
});

//update
app.put('/posts/:id', function(req, res){
	db.Post.findByIdAndUpdate(req.params.id, req.body.post, function(err, post){
		if(err){
			console.log(err);
			//TODO: error handling
			res.render('posts/edit');
		}
		else{
			res.redirect('/posts');
		}
	});
});

//destroy
app.delete('/posts/:id', function(req, res){
	db.Post.findByIdAndRemove(req.params.id, function(err, posts){
		if(err){
			console.log(err);
			//TODO: error handling
			res.render('posts/show');
		}
		else{
			post.remove();
			res.redirect('/posts');
		}
	});
});

//COMMENT routes
//index

//new

//create

//show

//edit

//update

//destroy

//remaining errors

//start server
app.listen(8000, function(){
	console.log("server listening on 8000");
});
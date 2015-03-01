Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'
});

//main
Router.route('/', {
	name: 'drawingList'
});

// Router.route('/posts', {name: 'postsList'});
// //post detail
// Router.route('/posts/:_id', {
// 	name: 'postPage', 
// 	data: function() { return Posts.findOne(this.params._id); }
// });

Router.route('/drawing/:_id',{
	name: 'drawingDetail',
	data: function() { return Artworks.findOne(this.params._id); }
});

Router.route('/user', {
	name: 'userPage',
	data: function() { return Meteor.users.findOne(this.params._id)}
}); 

// Router.route('/posts/:_id/edit', {
// 	name: 'postEdit',
// 	data: function() {
// 		return Posts.findOne(this.params._id);
// 	}
// });

Router.route('/artlist', {name:'artList'});

Router.route('/artlist/:_artId', {
	name:'drawPage',
	data: function() {
		return {artId : this.params._artId}
	}
});



// Router.route('/submit', {name: 'postSubmit'});

var requireLogin = function() {
	if (! Meteor.user()){
		if (Meteor.loggingIn()){
			this.render(this.loadingTemplate);
		} else {
			this.render('accessDenied');
		}
	} else {
		this.next();
	}
}

Router.onBeforeAction('dataNotFound', {only: 'postPage'});
Router.onBeforeAction(requireLogin, {only: ['postSubmit', 'drawPage', 'artList']});





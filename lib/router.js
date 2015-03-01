Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
	waitOn: function() { return Meteor.subscribe('artworks');}
});

//main
Router.route('/', {name: 'drawingList'});

Router.route('/posts', {name: 'postsList'});
//post detail
Router.route('/posts/:_id', {
	name: 'postPage', 
	data: function() { return Posts.findOne(this.params._id); }
});

Router.route('/posts/:_id/edit', {
	name: 'postEdit',
	data: function() {
		return Posts.findOne(this.params._id);
	}
});

Router.route('/artlist', {name:'artList'});

Router.route('/artlist/:_artId', {
	name:'drawPage',
	data: function() {
		return {artId : this.params._artId}
	}
});

Router.route('/submit', {name: 'postSubmit'});

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





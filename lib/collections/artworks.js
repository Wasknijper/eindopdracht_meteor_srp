Artworks  = new Meteor.Collection('artworks');

Artworks.allow({
	insert: function(userId, doc) {
		return !! userId;
	}
});
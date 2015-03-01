
Meteor.publish('artworks', function() {
	return Artworks.find();
});

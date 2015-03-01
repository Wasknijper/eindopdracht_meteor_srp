Template.drawingList.helpers({
	drawings: function() {
		return Artworks.find({}, {sort: {submitted: -1}});
	}
}); 

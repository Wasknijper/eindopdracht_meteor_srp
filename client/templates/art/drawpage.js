var artPiece;

Template.drawPage.helpers({
	artUrl : function(){
		var artId = this.artId;
		artPieces = Session.get('results');
		if(artPieces) {
			artPiece = _.filter(artPieces, function(artPiece){ console.log('test',artId); return artPiece.objectNumber == artId});
			console.log(artPiece);
			return artPiece[0].webImage.url.replace("s0", "s600");
		}
		
	}
		
})

Template.drawPage.events({  
  'click #Save': function(e) {
  	e.preventDefault();
	var user = Meteor.user();

  	var savedWork = {
  		artUrl: artPiece[0].webImage.url.replace("s0", "s600"),
  		drawing: document.querySelector('#SketchPad').toDataURL(),
  		userId: Meteor.userId(),
  		artistName: user.username,
      submitted: new Date()
  	};

  	console.log('saved I hope?')

  	console.log(savedWork.drawing);

    Meteor.call('insertArtwork', savedWork, function (error, drawingId) {
      Router.go('drawingDetail', {_id:drawingId});
    });
  	console.log(Artworks.find().count());

  }
});
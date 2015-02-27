Template.drawPage.helpers({
	artUrl : function(){
		var artId = this.artId;
		artPieces = Session.get('results');
		if(artPieces) {
			var artPiece = _.filter(artPieces, function(artPiece){ console.log('test',artId); return artPiece.objectNumber == artId});
			console.log(artPiece);
			return artPiece[0].webImage.url.replace("s0", "s600");
		}
		
	}
		
})

Template.artList.events({  
  'click #Save': function(e) {
  	e.preventDefault();

  	var savedWork = {
  		artUrl: artPiece[0].webImage.url.replace("s0", "s600"),
  		drawing: $('SketchPad')toDataURL("image/png", 1.0);
  	};

  	console.log('saved I hope?')

  	Artworks.insert(savedWork);
  }
});
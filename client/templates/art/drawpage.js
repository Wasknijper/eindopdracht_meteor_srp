Template.drawPage.helpers({
	artUrl : function(){
		var artId = this.artId;
		artPieces = Session.get('results');
		if(artPieces) {
			var artPiece = _.filter(artPieces, function(artPiece){ console.log('test',artId); return artPiece.objectNumber == artId});
			console.log(artPiece);
			return artPiece[0].webImage.url.replace("s0", "s800");
		}
		
	}
		
})
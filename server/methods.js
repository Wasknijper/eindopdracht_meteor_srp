// Mether.methods({
// 	getResults: function(query){
// 		var artUrl = "https://www.rijksmuseum.nl/api/nl/collection?key=tBz1zThp&format=json&toppieces=true&q=" + query;
// 		return Meteor.http.get(artUrl);
// 	}
// })

Meteor.methods({
	getArtPiece: function(artId){
		Meteor.http.get("https://www.rijksmuseum.nl/api/nl/collection/" + artId + "/?format=jsonp&key=tBz1zThp", function(err, res){
			 return Session.set('currentObject', res.data.artObject);
		})
	}

});
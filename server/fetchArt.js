// var artUrl = "https://www.rijksmuseum.nl/api/nl/collection?q=Q&key=tBz1zThp&format=json&toppieces=true";
// 	   var results;

// 	   //console.log($.getJSON(artUrl));

	   

// 	   results = $.get(artUrl, function(){

// 	   }) .done(function(data){
// 	   		console.log("data: " + data.artObjects);
// 			// loop over alle art objects los
// 			data.artObjects.forEach(
// 				Artworks.insert()
// 			);
// 	   	});

// Meteor.publish('fetchArt', function(query) {  
//   var self = this;
//   var artUrl = "https://www.rijksmuseum.nl/api/nl/collection?q=Q&key=tBz1zThp&format=json&toppieces=true";
// //   var response = HTTP.get(artUrl.replace("Q", query), function(){
// //   	data.artObjects.forEach(
// // 	      Artworks.insert({
// // 	      	imgUrl: data.artObjects.webImage.url,
// // 	      	title: data.artObjects.title,
// // 	      	creator: data.artObjects.principalOrFirstMaker
// // 	      })
// // 	    );
// // 	})
// // // //  	console.log("data:" + data.artObjects);
	  	
// // // 	 }); 
//  });
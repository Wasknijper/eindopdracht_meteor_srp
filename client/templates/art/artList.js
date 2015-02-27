
Session.setDefault('searching', false);

// Tracker.autorun(function() {  
//   if (Session.get('query')) {
//     var searchHandle = Meteor.subscribe('fetchArt', Session.get('query'));
//     Session.set('searching', ! searchHandle.ready());
//   }
// });

Template.artList.events({  
  'submit form': function(event, template) {
    Session.set('searching', true);
    event.preventDefault();
    var query = template.$('input[type=text]').val();
    if (query) {
      // Meteor.call(getResults, query, function(error, response){

      // })
      var artUrl = "https://www.rijksmuseum.nl/api/nl/collection?key=tBz1zThp&format=json&imgonly=true&toppieces=true&q=" + query;
      Meteor.http.get(artUrl,function(err,res){
        Session.set('results', res.data.artObjects);
        Session.set('searching', false);
      });
    }
      Session.set('query', query);
  }
});

Template.artList.helpers({  
  artList: function() {
    console.log(Session.get('results'));
    return Session.get('results');
  },
  searching: function() {
    return Session.get('searching');
  }
});

Template.artPiece.helpers({
  imgUrl: function(){
    return this.webImage.url.replace("s0", "s800")

  },
  title: function(){
    return this.title
  },
  creator: function(){
   return this.principalOrFirstMaker 
  },
  artId: function(){
    return this.objectNumber
  }
})
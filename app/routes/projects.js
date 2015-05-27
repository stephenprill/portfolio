import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return [{
      id: 1,
      name: "Spotibility",
      description: "It's like Basecamp but better.",
      images: 'pictures/spotibility.png',
      url: 'https://spotibility.herokuapp.com',
    },
    {
      id: 2,
      name: "Local Notes",
      description: "Best place to take notes without a internet connection",
      images: 'pictures/localnotes.png',
      url: 'https://localnotes.herokuapp.com/notes',
    },
    {
      id: 3,
      name: "gCamp",
      description: "It's like Basecamp but better.",
      images: 'pictures/gcamp.png',
      url: 'https://gcamp-prill.herokuapp.com',
    },
    {
      id: 4,
      name: "Rantly",
      description: "This is like Twitter.",
      images: 'pictures/rantly.png',
      url: 'https://rantly-prill.herokuapp.com',
    }];
  }
});

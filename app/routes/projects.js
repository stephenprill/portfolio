import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return [{
      id: 1,
      name: "Spotibility",
      description: "A Ruby on Rails app that allows users to compare their musical tastes via a calculated match percentage through the Spotify API.",
      images: 'pictures/spotibility_small.png',
      url: 'https://spotibility.herokuapp.com',
    },
    {
      id: 2,
      name: "gCamp",
      description: "A Basecamp clone built in Ruby on Rails with Twitter Bootstrap, postgreSQL, and Pivotal Tracker API.",
      images: 'pictures/gcamp_small.png',
      url: 'https://gcamp-prill.herokuapp.com',
    },
    {
      id: 3,
      name: "Local Notes",
      description: "Ember CLI frontend and Rails API backend and allows you to store local notes on your computer.",
      images: 'pictures/localnotes_small.png',
      url: 'https://localnotes.herokuapp.com/notes',
    },
    {
      id: 4,
      name: "Rantly",
      description: "This is like Twitter but you have to have over 140 characters in order to rant.",
      images: 'pictures/rantly_small.png',
      url: 'https://rantly-prill.herokuapp.com',
    }];
  }
});

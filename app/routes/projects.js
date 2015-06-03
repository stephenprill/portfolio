import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return [{
      id: 1,
      name: "Spotibility",
      description: "Spotibility is a Ruby on Rails app that allows users to compare their musical tastes via a calculated match percentage through the Spotify API.",
      images: 'pictures/spotibility_small.png',
      url: 'https://spotibility.herokuapp.com',
      github: 'https://github.com/stephenprill/spotibility'
    },
    {
      id: 2,
      name: "gCamp",
      description: "gCamp is a Basecamp clone built in Ruby on Rails with Twitter Bootstrap, postgreSQL, and Pivotal Tracker API.",
      images: 'pictures/gcamp_small.png',
      url: 'https://gcamp-prill.herokuapp.com',
      github: 'https://github.com/stephenprill/gCamp'
    },
    {
      id: 3,
      name: "Local Notes",
      description: "Local Notes has an Ember CLI frontend and Rails API backend and allows user to store local notes on your computer.",
      images: 'pictures/localnotes_small.png',
      url: 'https://localnotes.herokuapp.com/notes',
      github: 'https://github.com/stephenprill/ember-notes'
    },
    {
      id: 4,
      name: "Rantly",
      description: "Rantly is a Twitter clone built in Rails where user requires over 140 characters in order to post a rant.",
      images: 'pictures/rantly_small.png',
      url: 'https://rantly-prill.herokuapp.com',
      github: 'https://github.com/stephenprill/rantly'
    }];
  }
});

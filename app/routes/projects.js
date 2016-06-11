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
      description: "Local Notes allows users to store notes locally on their computer featuring Ember CLI front end and Ruby on Rails API back end.",
      images: 'pictures/localnotes_small.png',
      url: 'https://localnotes.herokuapp.com/notes',
      github: 'https://github.com/stephenprill/ember-notes'
    },
    {
      id: 5,
      name: "Teenage Mutant Ninja Markdown",
      description: "Teenage Mutant Ninja Markdown is a live markdown editor that renders HTML in real-time built in Ember.",
      images: 'pictures/tmnm_small.png',
      url: 'https://markdown-prill.herokuapp.com/',
      github: 'https://github.com/stephenprill/markdown-editor'
    },
    {
      id: 4,
      name: "Rantly",
      description: "Rantly is a Twitter clone built in Ruby on Rails that requires users to type over 140 characters in order to post a rant.",
      images: 'pictures/rantly_small.png',
      url: 'https://rantly-prill.herokuapp.com',
      github: 'https://github.com/stephenprill/rantly'
    }];
  }
});

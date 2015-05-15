import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return [{
      id: 1,
      name: "gCamp",
      description: "It's like Basecamp but better.",
    },
    {
      id: 2,
      name: "Listen",
      description: "You can listen to the classic jams of your past.",
    },
    {
      id: 3,
      name: "Rantly",
      description: "This is like Twitter.",
    }]
  }
});

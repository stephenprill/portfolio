import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [{
      title: 'Job 1',
      responsibilities: 'Did Job 1 to the fullest.'
    },
    {
      title: 'Job 2',
      responsibilities: 'After killing it at Job 1, it was time to move on to Job 2 where I continued to kill it.'
    }
  ];
}
});

import Ember from 'ember';

export default Ember.TextField.extend({
  type: 'file',
  change: function(evt) {
    console.log('hello file');
    debugger;
  }
});

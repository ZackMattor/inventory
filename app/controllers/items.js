import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    actions: {
      addItem: function() {
        console.log("lets add an item!");
        return false;
      }
    }
  }
});

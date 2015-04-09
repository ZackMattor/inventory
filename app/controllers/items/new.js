import Ember from 'ember';

export default Ember.Controller.extend({
  init: function() {
    this.set('item', Ember.Object.create());
  },
  actions: {
    addItem: function() {
      var newItem = this.store.createRecord('item', {
        name: this.get('item.name'),
        location: this.get('item.location'),
        image: this.get('item.image')
      });
      newItem.save();

      this.setProperties({
        'item.name': '',
        'item.location': '',
        'item.image': ''
      });

      this.transitionToRoute('items');
    }
  }
});

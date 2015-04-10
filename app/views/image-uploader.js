import Ember from 'ember';

export default Ember.TextField.extend({
  type: 'file',
  attributeBindings: ['name'],
  change: function(evt) {
    var self = this;
    var reader = new FileReader();
    var input = evt.target;

    reader.onloadstart = function(e) {
      if((e.total / 1024) / 1024 > 3) {
        return false;
      }
    };

    reader.progress = function(e) {
      console.log("progress");
      console.log(e);
    };

    reader.onload = function(e) {
      var fileData = e.srcElement.result;
      self.get('targetObject').set(self.get('name'), fileData);
    };

    if(input.files[0]) {
      reader.readAsDataURL(input.files[0]);
    }
  }
});

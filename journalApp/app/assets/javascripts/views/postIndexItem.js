JournalApp.Views.PostIndexItem = Backbone.View.extend({
  tagName: "li",
  className: 'post-item',

  template: JST['posts/postIndexItem'],

  events: {
    "click button" : "deleteItem",
    "click ": "showItem"
  },

  render: function(){
    var renderedContent = this.template({post: this.model });
    this.$el.html(renderedContent);
    return this;
  },

  deleteItem: function(event){
    event.stopPropagation();
    this.model.destroy();
    this.remove();
  },

  showItem: function(event) {
    Backbone.history.navigate("/posts/" + this.model.id, {trigger: true});
  }

})

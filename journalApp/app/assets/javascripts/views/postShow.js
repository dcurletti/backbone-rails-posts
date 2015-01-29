JournalApp.Views.PostShow = Backbone.View.extend({
  template: JST['posts/postShow'],

  events: {
    'click button': "back"
  },

  initialize: function() {

  },

  render: function() {
    var renderedContent = this.template({post: this.model });
    this.$el.html(renderedContent);
    return this;
  },

  back: function(){
    Backbone.history.navigate("", {trigger: true})
  }
});

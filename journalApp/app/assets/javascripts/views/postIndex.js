JournalApp.Views.PostsIndex = Backbone.View.extend({
  template: JST['posts/postsIndex'],

  tagName: 'ul',

  render: function(){
    this.$el.empty();
    this.collection.each(function(post){
      var postItem = new JournalApp.Views.PostIndexItem({
        model: post,
        collection: this.collection
      });
      postItem.render();
      this.$el.append(postItem.$el);
    }.bind(this));

    return this;
  },

  initialize: function(){
    this.collection = new JournalApp.Collections.Posts();
    this.collection.fetch();
    this.listenTo(this.collection, "remove sync", this.render);
  }
});

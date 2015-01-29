JournalApp.Collections.Posts = Backbone.Collection.extend({
  model: JournalApp.Models.Post,
  url: '/posts',


  initialize: function() {

  },

  getOrFetch: function (id) {
    var that = this;

    var post;
    if (post = this.get(id)) {
      post.fetch();
    } else {
      post = new JournalApp.Models.Post({ id: id });
      post.fetch({
        success: function () { that.add(post); }
      });
    }

    return post;
  }
});

JournalApp.Routers.Posts = Backbone.Router.extend({

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "": "postsIndex",
    "posts/new": "postNew",
    "posts/:id": "postsShow"
  },

  postsIndex: function (){
    var indexView = new JournalApp.Views.PostsIndex();

    $('#posts-index').html(indexView.render().$el)
  },

  postsShow: function (id){
    var that = this;
    var newCollection = new JournalApp.Collections.Posts();
    newCollection.fetch({
      success: function(){
        var post = newCollection.getOrFetch(id);
        var postShow = new JournalApp.Views.PostShow({model: post});
        that._swapView(postShow);
      }
    });
  },

  postNew: function(){
    var that = this;
    var newCollection = new JournalApp.Collections.Posts();
    newCollection.fetch({
      success: function(){
        var post = new JournalApp.Models.Post();
        var postFormView = new JournalApp.Views.PostForm({model: post, collection: newCollection });
        that._swapView(postFormView);
      }
    });
  },

  _swapView: function (newView) {
    if (this.currentView) {
      this.currentView.remove();
    }

    $("#backbone-content").append(newView.render().$el);

    this.currentView = newView;
  }
})

JournalApp.Routers.Posts = Backbone.Router.extend({

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "": "postsIndex",
    "posts/:id": "postsShow"
  },

  postsIndex: function (){
    var indexView = new JournalApp.Views.PostsIndex();

    this._swapView(indexView);
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

  _swapView: function (newView) {
    if (this.currentView) {
      this.currentView.remove();
    }

    $("body").append(newView.render().$el);

    this.currentView = newView;
  }
})

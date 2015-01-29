window.JournalApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new JournalApp.Routers.Posts({
      $rootEl: $('#backbone-content')
    });
    Backbone.history.start();
    // debugger
  }
};

$(document).ready(function(){
  JournalApp.initialize();

  // var postsIndex = new JournalApp.Views.PostsIndex();
  // postsIndex.render();
  // $("#postsIndexList").html(postsIndex.$el);
});

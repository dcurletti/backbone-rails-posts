JournalApp.Views.PostForm = Backbone.View.extend({

  template: JST["posts/post_form"],

  events: {
    "submit form": "createPost"
  },

  render: function(){
    var renderedContent = this.template();
    this.$el.append(renderedContent);
    return this;
  },

  createPost: function (event) {
    event.preventDefault();
    var that = this;
    var target = $(event.currentTarget).serializeJSON();

    this.model.save(target.post, {
      success: function(){
        that.collection.add(that.model, {merge: true});
        Backbone.history.navigate("", {trigger: true});
      },
      error: function(data, errors) {
        var $error = $('<p>' + errors.statusText + '</p>');
        that.$el.append($error);
      }
    });
  }


})

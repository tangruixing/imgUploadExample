var Images = new FS.Collection("images", {
  stores: [new FS.Store.FileSystem("images", {path: "~/imgUploadExample"})]
});

if (Meteor.isClient) {
  Template.summernoteEditor.rendered = function() {
    $('#summernote').summernote({
      width: '800px',
      height: '300px',

      onImageUpload: function(files, editor, $editable) {
        Images.insert(files[0], function (err, fileObj) {
          setTimeout(function() {
            editor.insertImage($editable, fileObj.url());
          }, 300)
        });
      }
    });
  }
}

Package.describe({
  summary: "Hubspot messenger repackaged for Meteor"
});

Package.on_use(function (api, where) {
  where = where || ['client'];
  
  api.use('jquery', where);
  
  api.add_files('lib/messenger/build/js/messenger.min.js', where);
  api.add_files('lib/messenger/build/js/messenger-theme-future.js', where);
  api.add_files('lib/messenger/build/css/messenger.css', where);
  api.add_files('lib/messenger/build/css/messenger-theme-future.css', where);
});
Template.活動詳情.helpers({
    撈出的資料: function() {
        return 資料庫.findOne();
    },
    pageTitle: function() { return Session.get('pageTitle');}
});
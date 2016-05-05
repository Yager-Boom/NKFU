Router.configure({
    layoutTemplate: 'layout',
    waitOn: function() { return Meteor.subscribe('free'); },

});
Router.route('/', function () {
    this.render('活動列表');
});
Router.route('/index.html', {name: '活動列表'});
Router.route('/index_a_:_id.html', {name: '活動詳情' , data:function(){return 資料庫.findOne(this.params._id)}});
Router.route('/search_:keyword', function () {
    this.render('活動列表', {
        data: function () {
            return 資料庫.find({event_name: this.params.keyword});
        }
    });
});

Router.route('/step_1.html', {name: '活動申請'});
Router.route('/apply_active.html', {name: '使用說明'});
Router.route('/result.html', {name: '成果展示'});
Router.route('/calendar.html', {name: '行事曆'});
Router.route('/index_1.html', {name: '活動列表1'});
Router.route('/index_2.html', {name: '活動列表2'});
Router.route('/index_3.html', {name: '活動列表3'});
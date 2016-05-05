/**
 * Created by yager on 2016/1/8.
 */
Meteor.publish('free', function() {
    return 資料庫.find();
});
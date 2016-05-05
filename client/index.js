Template.活動列表.helpers({
    撈出的資料: function() {
    return 資料庫.find();
    },
    pageTitle: function() { return Session.get('pageTitle');}
});
Template.活動資料行.helpers({
    event_img: function (a) {
        switch (a){
            case 0 :  return '/images/Square3.png';
            case 1: return '/images/Square2.png';
            case -1: return '/images/Square.png';
        }
        return '/images/Square3.png' ;
    }
});

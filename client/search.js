Template.search.helpers({
    //add you helpers here
});

Template.search.events({
    'click #search_btn': function (e) {
        e.preventDefault();
        var post = $("#search_txt").val();
        location.href = "http://" + window.location.hostname + ":3000/search_" + post;
    }
});

Template.search.onCreated(function () {
    //add your statement here
});

Template.search.onRendered(function () {
    //add your statement here
});

Template.search.onDestroyed(function () {
    //add your statement here
});


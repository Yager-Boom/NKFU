Template.活動申請.events({
    'submit form': function (e) {
        e.preventDefault();

        var a =0;
        if ($('[name=CheckBox4]:checked').length){a = 1};
        if ($('[name=CheckBox5]:checked').length){a = a + 2};
        if ($('[name=CheckBox6]:checked').length){a = a + 4};
        if ($('[name=CheckBox7]:checked').length){a = a + 8};

        var post = {
            event_DropDownList1: $(e.target).find('[name=event_DropDownList1]').val(),
            event_name: $(e.target).find('[name=event_name]').val(),
            event_spot: $(e.target).find('[name=event_spot]').val(),
            event_content: $(e.target).find('[name=event_content]').val(),
            event_state: 0,
            event_supervise: '課指組',
            event_date_1: $(e.target).find('[name=TextBox4]').val(),
            event_date_2: $(e.target).find('[name=TextBox5]').val(),
            event_date_3: $(e.target).find('[name=TextBox6]').val(),
            event_date_4: $(e.target).find('[name=TextBox7]').val(),
            event_teacher: $(e.target).find('[name=TextBox8]').val(),
            event_student: $(e.target).find('[name=TextBox9]').val(),
            event_other: $(e.target).find('[name=TextBox10]').val(),
            event_teacher_name: $(e.target).find('[name=TextBox11]').val(),
            event_teacher_phone: $(e.target).find('[name=TextBox12]').val(),
            event_transport: a,
        };
        //-1=審核失敗
        //0=審核中
        //1=審核通過
        //2=報名中
        //3=報名結束
        //4=進行中
        //5=活動結束
        console.log(post);
        資料庫.insert(post);
        Router.go('活動列表');
    }
});
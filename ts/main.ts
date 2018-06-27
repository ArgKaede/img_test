/// <reference path="./ractive.d.ts"/>


var r = new Ractive({
    // el...どこに(cssにおける#id)
    el: '#containar',
    // template...何を(cssにおける#id)
    template: '#template',
    // 初期値を指定
    data: {
        n: 'sagaru',
        hr: 60,
        sbp: 100,
        shv: 0
    }
});
function exec() {
    r.set ('img','img/moke_tate.png')
    r.set('re', 'もけ');
}

var r = new Ractive({
    // el...どこに(cssにおける#id)
    el : '#containar' ,
    // template...何を(cssにおける#id)
    template : '#template' ,
    // 初期値を指定
    data : {
        img : 'img/moke_teacher_A.png',
    }   
});

r.on({
    enter: function (e) {
        if (e.event.keyCode == 13) {
            exec();
        }
    },
    health: function () {
        exec();
    }
});
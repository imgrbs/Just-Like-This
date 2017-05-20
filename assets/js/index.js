new WOW().init();
var btn = ['#piano-btn','#violin-btn','#cello-btn',
        '#guitar-btn','#harmo-btn','#saxo-btn','#prod-btn'];
$(document).ready(function(){
    getOnStart()
    for (var i = 0; i < btn.length; i++) {
        getContent(btn[i])
    }
})

var getOnStart = ()=>{
    $.getJSON('./assets/json/showcase/data.json', function(data) {
        $('#name-ins').text(data.showcase.piano.key);
        $('#content-1').text(data.showcase.piano.content1);
        $('#content-2').html(data.showcase.piano.content2);
        $('#content-2').append('<p>' + data.showcase.piano.content3 + '</p>');
        $('#content-2').append('<p>' + data.showcase.piano.content4 + '</p>');
    });
}

var getContent = (id)=>{
    var obj = [];
    $(id).click(()=> {
        $(id).attr('class','nav-link active');
        $.getJSON('./assets/json/showcase/data.json', function(data) {
            switch (id) {
                case (btn[0]):{
                        obj = [data.showcase.piano.key,data.showcase.piano.content1,
                        data.showcase.piano.content2,data.showcase.piano.content3,
                        data.showcase.piano.content4];
                    }break;
                case (btn[1]):{
                        obj = [data.showcase.violin.key,data.showcase.violin.content1,
                        data.showcase.violin.content2,data.showcase.violin.content3,
                        data.showcase.violin.content4];
                    }break;
                case (btn[2]):{
                        obj = [data.showcase.cello.key,data.showcase.cello.content1,
                        data.showcase.cello.content2,data.showcase.cello.content3,
                        data.showcase.cello.content4];
                    }break;
                case (btn[3]):{
                        obj = [data.showcase.guitar.key,data.showcase.guitar.content1,
                        data.showcase.guitar.content2,data.showcase.guitar.content3,
                        data.showcase.guitar.content4];
                    }break;
                case (btn[4]):{
                        obj = [data.showcase.harmo.key,data.showcase.harmo.content1,
                        data.showcase.harmo.content2,data.showcase.harmo.content3,
                        data.showcase.harmo.content4];
                    }break;
                case (btn[5]):{
                        obj = [data.showcase.saxo.key,data.showcase.saxo.content1,
                        data.showcase.saxo.content2,data.showcase.saxo.content3,
                        data.showcase.saxo.content4];
                    }break;
                case (btn[6]):{
                        console.log("products")
                    }break;
            }
            $('#name-ins').text(obj[0]);
            $('#content-1').text(obj[1]);
            $('#content-2').html(obj[2]);
            $('#content-2').append('<p>' + obj[3] + '</p>');
            $('#content-2').append('<p>' + obj[4] + '</p>');
        });
    });
}
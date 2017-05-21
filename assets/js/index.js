new WOW().init();

var btn = ['#piano-btn','#violin-btn','#cello-btn',
        '#guitar-btn','#harmo-btn','#saxo-btn','#prod-btn'];

$(document).ready(function(){
    getOnStart()
    for (var i = 0; i < btn.length; i++) {
        getContent(btn[i])
    }
})

var globalData;

var getOnStart = () =>{
    $.getJSON('./assets/json/showcase/data.json', function(data) {
    // $.getJSON('https://dev.taehub.me/muchwow/assets/json/showcase/data.json', function(data) {
        globalData = data;
        var obj = [Object.keys(globalData.showcase)[0],globalData.showcase.Piano.content1,
        globalData.showcase.Piano.content2,globalData.showcase.Piano.content3,
        globalData.showcase.Piano.content4,globalData.showcase.Piano.content5,
        globalData.showcase.Piano.pathbg1,globalData.showcase.Piano.pathbg2,
        globalData.showcase.Piano.pathbg3];    
        changeName(obj)
    });
}

var getContent = (id)=>{
    var obj = [];
    $(id).click(()=> {
        $(id).attr('class','nav-link active');
        switch (id) {
                case (btn[0]):{
                        for (var i = 1; i < btn.length; i++) {
                            $(btn[i]).attr('class','nav-link');
                        }
                        obj = [Object.keys(globalData.showcase)[0],globalData.showcase.Piano.content1,
                        globalData.showcase.Piano.content2,globalData.showcase.Piano.content3,
                        globalData.showcase.Piano.content4,globalData.showcase.Piano.content5,
                        globalData.showcase.Piano.pathbg1,globalData.showcase.Piano.pathbg2,
                        globalData.showcase.Piano.pathbg3];
                    }break;
                case (btn[1]):{
                        $(btn[0]).attr('class','nav-link');
                        for (var i = 2; i < btn.length; i++) {
                            $(btn[i]).attr('class','nav-link');
                        }
                        obj = [Object.keys(globalData.showcase)[1],globalData.showcase.Violin.content1,
                        globalData.showcase.Violin.content2,globalData.showcase.Violin.content3,
                        globalData.showcase.Violin.content4,globalData.showcase.Violin.content5,
                        globalData.showcase.Violin.pathbg1,globalData.showcase.Violin.pathbg2,
                        globalData.showcase.Violin.pathbg3];
                    }break;
                case (btn[2]):{
                        for (var i = 0; i < 2; i++) {
                            $(btn[i]).attr('class','nav-link');
                        }
                        for (var i = 3; i < btn.length; i++) {
                            $(btn[i]).attr('class','nav-link');
                        }
                        obj = [Object.keys(globalData.showcase)[2],globalData.showcase.Cello.content1,
                        globalData.showcase.Cello.content2,globalData.showcase.Cello.content3,
                        globalData.showcase.Cello.content4,globalData.showcase.Cello.content5,
                        globalData.showcase.Cello.pathbg1,globalData.showcase.Cello.pathbg2,
                        globalData.showcase.Cello.pathbg3];
                    }break;
                case (btn[3]):{
                        for (var i = 0; i < 3; i++) {
                            $(btn[i]).attr('class','nav-link');
                        }
                        for (var i = 4; i < btn.length; i++) {
                            $(btn[i]).attr('class','nav-link');
                        }
                        obj = [Object.keys(globalData.showcase)[3],globalData.showcase.Guitar.content1,
                        globalData.showcase.Guitar.content2,globalData.showcase.Guitar.content3,
                        globalData.showcase.Guitar.content4,globalData.showcase.Guitar.content5,
                        globalData.showcase.Guitar.pathbg1,globalData.showcase.Guitar.pathbg2,
                        globalData.showcase.Guitar.pathbg3];
                    }break;
                case (btn[4]):{
                        for (var i = 0; i < 4; i++) {
                            $(btn[i]).attr('class','nav-link');
                        }
                        $(btn[5]).attr('class','nav-link');
                        obj = [Object.keys(globalData.showcase)[4],globalData.showcase.Harmonica.content1,
                        globalData.showcase.Harmonica.content2,globalData.showcase.Harmonica.content3,
                        globalData.showcase.Harmonica.content4,globalData.showcase.Harmonica.content5,
                        globalData.showcase.Harmonica.pathbg1,globalData.showcase.Harmonica.pathbg2,
                        globalData.showcase.Harmonica.pathbg3];
                    }break;
                case (btn[5]):{
                        for (var i = 0; i < 5; i++) {
                            $(btn[i]).attr('class','nav-link');
                        }
                        obj = [Object.keys(globalData.showcase)[5],globalData.showcase.Saxophone.content1,
                        globalData.showcase.Saxophone.content2,globalData.showcase.Saxophone.content3,
                        globalData.showcase.Saxophone.content4,globalData.showcase.Piano.content5,
                        globalData.showcase.Saxophone.pathbg1,globalData.showcase.Saxophone.pathbg2,
                        globalData.showcase.Saxophone.pathbg3];
                    }break;
                case (btn[6]):{
                        for (var i = 0; i < 6; i++) {
                            $(btn[i]).attr('class','nav-link');
                        }
                        console.log("products")
                    }break;
            }
            if(id==btn[1]||id==btn[2]||id==btn[4]) {
                $('.navbar-brand').attr('style','color:white;transition:1s;');
                if(window.innerWidth>990){
                    $('.navbar-brand').attr('style','color:white;transition:0.7s;');
                    $('.nav-link').attr('style','color:white;transition:1s;');
                    $('#prod-btn').attr('onMouseOver','this.style.color="#fff"');
                    $('#prod-btn').attr('onMouseOut','this.style.color="#fff"');
                }
            }else{
                $('.navbar-brand').attr('style','color:black;transition:0.7s;');
                $('.nav-link').attr('style','color:black;transition:1s;');
                $('#prod-btn').attr('onMouseOver','this.style.color="#fff"');
                $('#prod-btn').attr('onMouseOut','this.style.color="#000"');
            }
            
            changeName(obj)
    });
}

var changeName = (obj) => {
    $('#pic1').attr('style','background-image: url('+obj[6]+');transition: 0.5s');
    $('#pic2').attr('style','background-image: url('+obj[7]+');transition: 0.5s');
    $('#footer').attr('style','background-image: url('+obj[8]+');transition: 0.5s');
    $('#name-ins').html('<h1  class="wow fadeInUp">'+obj[0]+'</h1>');
    $('#content-1').html('<p  class="wow fadeInUp">'+obj[1]+'</span>');
    $('#content-1').append('<p  class="wow fadeInUp">'+obj[2]+'</span>');
    $('#content-2').html('<div class="wow fadeInUp">' + obj[3] + '</div>'+
                        '<div class="wow fadeInUp">' + obj[4] + '</div>');    
}
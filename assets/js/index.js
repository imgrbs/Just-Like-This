new WOW().init();

var btn = ['#piano-btn','#violin-btn','#cello-btn',
        '#guitar-btn','#harmo-btn','#saxo-btn','#prod-btn'];

var items = [$('#pianoprodbtn'),$('#violinprodbtn'),$('#celloprodbtn'),
            $('#guitarprodbtn'),$('#harmoprodbtn'),$('#saxoprodbtn')];

var itemsblock = [$('#itempiano'),$('#itemviolin'),$('#itemcello'),
            $('#itemguitar'),$('#itemharmo'),$('#itemsaxo')];

$(document).ready(function(){
    getOnStart()
    for (var i = 0; i < btn.length; i++) {
        getContent(btn[i])
    }

})

var globalData;
var itemData;

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
                        obj = ['Products','Products','Products','Products',
                        'Products','Products','Products','Products',
                        'Products']
                        console.log("products")
                    }break;
            }
            if(id==btn[1]||id==btn[2]||id==btn[4]||id==btn[3]) {
                $('.navbar-brand').attr('style','color:white;transition:1s;');
                if(window.innerWidth>992){
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
            if(id==btn[6]){
                getLists()

                listsForShop()

                if(window.innerWidth<=992){
                    $('.navbar-toggler-icon').attr('style','filter:invert(100%)');
                    $('.navbar-nav').attr('style','background-color:rgba(25, 25, 25, 0.5);');
                }else{
                    $('.navbar-toggler-icon').attr('style','filter:invert(0%)');
                    $('.navbar-nav').attr('style','');
                }
                $('#piccontent1').fadeOut(100);
                $('#content1').fadeOut(100);
                $('#pic2').fadeOut(100);
                $('#pic2').addClass('forDisplayNone');
                $('#content2').fadeOut(100);
                $('#pic1').addClass('pic1edited');
                $('body').attr('style','background-color:black');
                $('.navbar-brand').attr('style','color:white;transition:0.7s;');
                $('.nav-link').attr('style','color:white;');
                $('#itemmenu').fadeIn(1000);
                $('#itemlist').fadeIn(1000);
                $('#prod-btn').attr('style','background-color:white;');
                $('#prod-btn').attr('onMouseOver','this.style.color="#fff";this.style.backgroundColor="rgba(25, 25, 25, 0.8)"');
                $('#prod-btn').attr('onMouseOut','this.style.color="#000";this.style.backgroundColor="#fff"');
                $('#footer').addClass('footeredited');
                
            }else{
                $('.navbar-toggler-icon').attr('style','filter:invert(0%)');
                $('.navbar-nav').attr('style','');
                $('#piccontent1').fadeIn(1000);
                $('#content1').fadeIn(1000);
                $('#pic2').removeClass('forDisplayNone');
                $('#pic2').fadeIn(1000);
                $('#content2').fadeIn(1000);
                $('#itemlist').fadeOut(600);
                $('#itemmenu').fadeOut(600);
                $('#pic1').removeClass('pic1edited');
                $('nav').attr('style','color:black;');
                $('#footer').removeClass('footeredited');
            }
            
            changeName(obj)
    });
}

var changeName = (obj) => {
    $('#pic1').attr('style','background-image: url('+obj[6]+');transition: 0.5s');
    $('#pic2').attr('style','background-image: url('+obj[7]+');transition: 0.5s');
    $('#footer').attr('style','background-image: url('+obj[8]+');transition: 0.5s');
    $('#name-ins').html('<h1  class="wow fadeInUp">'+obj[0]+'</h1>');
    $('#content-1').html('<p  class="wow fadeInUp">'+obj[1]+'</p>');
    $('#description').html('<div class="wow fadeInUp col-12"><p class="">'+obj[2]+'</p></div>');
    $('#content-2').html('<div class="wow fadeInUp col-xs-12 offset-xs-0 col-md-6 offset-md-0 text-center">' + '<img src="'+ 'http://cp.lnwfile.com/unv2hf.jpg' + '" class="rounded-circle" alt="itempicture" style="width:50%" /><br><p class="text-left">' + obj[3] + '</p></div>'+
                        '<div class="wow fadeInUp col-xs-12  offset-xs-0 col-md-6 offset-md-0 text-center">' + '<img src="'+ 'http://cp.lnwfile.com/unv2hf.jpg' + '" class="rounded-circle" alt="itempicture" style="width:50%" /><br><p class="text-left">' + obj[4] + '</p></div>');    
}

var getLists = () => {
    // $.getJSON('./assets/json/lists/lists.json', function(data) {
    // // $.getJSON('https://dev.taehub.me/muchwow/assets/json/showcase/lists.json', function(data) {
    //     itemData = data;
    //     var obj = [Object.keys(itemData.showcase)[0],itemData.showcase.Piano.content1,
    //     itemData.showcase.Piano.content2,itemData.showcase.Piano.content3,
    //     itemData.showcase.Piano.content4,itemData.showcase.Piano.content5,
    //     itemData.showcase.Piano.pathbg1,itemData.showcase.Piano.pathbg2,
    //     itemData.showcase.Piano.pathbg3];    
    //     changeName(obj)
    // });
}

var listsForShop = () => {
    
    $('.showall').click(()=>{
        for (var i = 0; i < items.length; i++) {
            itemsblock[i].fadeIn(100);
        }
    })

    items[0].click(()=>{
        itemsblock[0].fadeIn(100);
        for (var i = 1; i < items.length; i++) {
            itemsblock[i].fadeOut(100);
        }
    })

    items[1].click(()=>{
        itemsblock[1].fadeIn(100);
        itemsblock[0].fadeOut(100);
        for (var i = 2; i < items.length; i++) {
            itemsblock[i].fadeOut(100);
        }
    })
    
    items[2].click(()=>{
        itemsblock[2].fadeIn(100);
        itemsblock[0].fadeOut(100);
        itemsblock[1].fadeOut(100);
        for (var i = 3; i < items.length; i++) {
            itemsblock[i].fadeOut(100);
        }
    })

    items[3].click(()=>{
        itemsblock[3].fadeIn(100);
        for (var i = 0; i < 3; i++) {
            itemsblock[i].fadeOut(100);
        }
        for (var i = 4; i < items.length; i++) {
            itemsblock[i].fadeOut(100);
        }
    })

    items[4].click(()=>{
        itemsblock[4].fadeIn(100);
        for (var i = 0; i < 4; i++) {
            itemsblock[i].fadeOut(100);
        }
        for (var i = 5; i < items.length; i++) {
            itemsblock[i].fadeOut(100);
        }
    })

    items[5].click(()=>{
        itemsblock[5].fadeIn(100);
        for (var i = 0; i < 5; i++) {
            itemsblock[i].fadeOut(100);
        }
    })
}
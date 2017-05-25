new WOW().init();

var popup = () => {
    var temp = $('#itemcarttemp').get();
    console.log(temp)
    x0p({
        title: 'Confirm Order',
        html: true,
        text: 'Please Confirm Your Order.',
        animationType: 'fadeIn',
        buttons: [
            {
                type: 'cancel'
            },
            {
                type: 'info',
                text: 'Confirm',
                showLoading: true
            }
        ]
    }).then(function(data) {
        if(data.button == 'info') {
            
            setTimeout(function() {
                x0p('Success', null, 'ok', false);
                $('#listcartitemuser').html('');
                $('#itemcarttemp').modal('hide');
            
                numOfValue=0;
                getNumOfProd.text(numOfValue);
            }, 2000);

        }
    });
}

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

var globalForCheckProducts = 0;

var getOnStart = () =>{
    $.getJSON('./assets/json/showcase/data.json', function(data) {
    // $.getJSON('https://dev.taehub.me/muchwow/assets/json/showcase/data.json', function(data) {
        globalData = data;
        var obj = [Object.keys(globalData.showcase)[0],globalData.showcase.Piano.content1,
        globalData.showcase.Piano.content2,globalData.showcase.Piano.content3,
        globalData.showcase.Piano.content4,globalData.showcase.Piano.content5,
        globalData.showcase.Piano.pathbg1,globalData.showcase.Piano.pathbg2,
        globalData.showcase.Piano.pathbg3,globalData.showcase.Piano.contentpic1,
        globalData.showcase.Piano.contentpic2,globalData.showcase.Piano.contentpic3];    
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
                        globalData.showcase.Piano.pathbg3,globalData.showcase.Piano.contentpic1,
                        globalData.showcase.Piano.contentpic2,globalData.showcase.Piano.contentpic3];
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
                        globalData.showcase.Violin.pathbg3,globalData.showcase.Violin.contentpic1,
                        globalData.showcase.Violin.contentpic2,globalData.showcase.Violin.contentpic3];
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
                        globalData.showcase.Cello.pathbg3,globalData.showcase.Cello.contentpic1,
                        globalData.showcase.Cello.contentpic2,globalData.showcase.Cello.contentpic3];
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
                        globalData.showcase.Guitar.pathbg3,globalData.showcase.Guitar.contentpic1,
                        globalData.showcase.Guitar.contentpic2,globalData.showcase.Guitar.contentpic3];
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
                        globalData.showcase.Harmonica.pathbg3,globalData.showcase.Harmonica.contentpic1,
                        globalData.showcase.Harmonica.contentpic2,globalData.showcase.Harmonica.contentpic3];
                    }break;
                case (btn[5]):{
                        for (var i = 0; i < 5; i++) {
                            $(btn[i]).attr('class','nav-link');
                        }
                        obj = [Object.keys(globalData.showcase)[5],globalData.showcase.Saxophone.content1,
                        globalData.showcase.Saxophone.content2,globalData.showcase.Saxophone.content3,
                        globalData.showcase.Saxophone.content4,globalData.showcase.Saxophone.content5,
                        globalData.showcase.Saxophone.pathbg1,globalData.showcase.Saxophone.pathbg2,
                        globalData.showcase.Saxophone.pathbg3,globalData.showcase.Saxophone.contentpic1,
                        globalData.showcase.Saxophone.contentpic2,globalData.showcase.Saxophone.contentpic3];
                    }break;
                case (btn[6]):{
                        for (var i = 0; i < 6; i++) {
                            $(btn[i]).attr('class','nav-link');
                        }
                        globalForCheckProducts++;
                        obj = ['Products','Products','Products','Products',
                        'Products','Products',globalData.showcase.Saxophone.pathbg1,globalData.showcase.Saxophone.pathbg2,
                        globalData.showcase.Saxophone.pathbg3]
                        getLists()
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
                $('.cart').fadeIn(1000);
                $('#valueitem').fadeIn(1000);
                if(window.innerWidth<=992){
                    $('.navbar-toggler-icon').attr('style','filter:invert(100%)');
                    $('.navbar-nav').attr('style','background-color:rgba(25, 25, 25, 0.5);');
                }else{
                    $('.navbar-toggler-icon').attr('style','filter:invert(0%)');
                    $('.navbar-nav').attr('style','');
                }
                $('#piccontent1').fadeOut(300);
                $('#content1').fadeOut(100);
                $('#pic2').fadeOut(100);
                $('#pic2').addClass('forDisplayNone');
                $('#content2').fadeOut(100);
                $('#pic1').addClass('pic1edited');
                $('#pic1').attr('style','background-color:black;transition:0.5s');
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
                globalForCheckProducts = 0;
                $('.navbar-toggler-icon').attr('style','filter:invert(0%)');
                $('.navbar-nav').attr('style','');
                $('#piccontent1').fadeIn(100);
                $('#content1').fadeIn(100);
                $('#pic2').removeClass('forDisplayNone');
                $('#pic2').fadeIn(100);
                $('#content2').fadeIn(100);
                $('#itemlist').fadeOut(100);
                $('#itemmenu').fadeOut(100);
                $('#pic1').removeClass('pic1edited');
                $('nav').attr('style','color:black;');
                $('#footer').removeClass('footeredited');
                changeName(obj)
            
                $('.cart').fadeOut(100);
                $('#valueitem').fadeOut(100);
            }
            
    });
}

var changeName = (obj) => {
    $('#pic1').attr('style','background-image: url('+obj[6]+');transition: 0.5s');
    $('#pic2').attr('style','background-image: url('+obj[7]+');transition: 0.5s');
    $('#footer').attr('style','background-image: url('+obj[8]+');transition: 0.5s');
    $('#name-ins').html('<h1  class="wow fadeInUp">'+obj[0]+'</h1>');
    $('#content-1').html('<p  class="wow fadeInUp">'+obj[1]+'</p>');
    $('#description').html('<div class="wow fadeInUp col-12"><p class="">'+obj[2]+'</p></div>');
    $('#content-2').html('<div class="demoProd wow fadeInUp col-xs-12 col-md-4 text-center">' + '<img src="'+ obj[9] + '" class="rounded-circle" alt="itempicture" style="width:50%" /><br><p class="text-left">' + obj[3] + '</p></div>'+
                        '<div class="demoProd wow fadeInUp col-xs-12  col-md-4 text-center">' + '<img src="'+ obj[10] + '" class="rounded-circle" alt="itempicture" style="width:50%" /><br><p class="text-left">' + obj[4] + '</p></div>'+   
                        '<div class="demoProd wow fadeInUp col-xs-12  col-md-4 text-center">' + '<img src="'+ obj[11] + '" class="rounded-circle" alt="itempicture" style="width:50%" /><br><p class="text-left">' + obj[5] + '</p></div>');    
}

var getLists = () => {
    if(globalForCheckProducts==1){
        $.getJSON('./assets/json/list/lists.json', function(data) {
            // // $.getJSON('https://dev.taehub.me/muchwow/assets/json/showcase/lists.json', function(data) {
                itemData = data;
                piano = [],violin = [],cello = [],guitar = [],harmonica = [],saxophone = [];
                var arrayObj = [piano,violin,cello,guitar,harmonica,saxophone];
                for (var key in itemData.root.piano) {
                    var temp = [];
                    temp = [key,itemData.root.piano[key].description,
                    itemData.root.piano[key].price,itemData.root.piano[key].pathpic]
                    piano.push(temp);
                }
                for (var key in itemData.root.violin) {
                    var temp = [];
                    temp = [key,itemData.root.violin[key].description,
                    itemData.root.violin[key].price,itemData.root.violin[key].pathpic]
                    violin.push(temp);
                }
                for (var key in itemData.root.cello) {
                    var temp = [];
                    temp = [key,itemData.root.cello[key].description,
                    itemData.root.cello[key].price,itemData.root.cello[key].pathpic]
                    cello.push(temp);
                }
                for (var key in itemData.root.guitar) {
                    var temp = [];
                    temp = [key,itemData.root.guitar[key].description,
                    itemData.root.guitar[key].price,itemData.root.guitar[key].pathpic]
                    guitar.push(temp);
                }
                for (var key in itemData.root.harmonica) {
                    var temp = [];
                    temp = [key,itemData.root.harmonica[key].description,
                    itemData.root.harmonica[key].price,itemData.root.harmonica[key].pathpic]
                    harmonica.push(temp);
                }
                for (var key in itemData.root.saxophone) {
                    var temp = [];
                    temp = [key,itemData.root.saxophone[key].description,
                    itemData.root.saxophone[key].price,itemData.root.saxophone[key].pathpic]
                    saxophone.push(temp);
                }
            
                listsForShop(arrayObj)
        });
    }
   
}

var listsForShop = (arr=[]) => {   
    console.log(arr)
    var idcontent = ['#contentpiano','#contentviolin','#contentcello',
                    '#contentguitar','#contentharmonica','#contentsaxo'];
    $('.showall').click(()=>{
        for (var i = 0; i < items.length; i++) {
            itemsblock[i].fadeIn(100);
        }
    })
    
    for (var i = 0; i < arr.length; i++) {
        var tempName = '';
        switch (i) {
            case 0:{tempName='piano'}break;
            case 1:{tempName='violin'}break;
            case 2:{tempName='cello'}break;
            case 3:{tempName='guitar'}break;
            case 4:{tempName='harmonica'}break;
            case 5:{tempName='saxophone'}break;
        }

        

        for (var j = 0; j < arr[i].length; j++) {
            var showChar = 100;
            var tempText;
            var keepText;
            if(arr[i][j][1].length>showChar){
                var tempContent = arr[i][j][1];
                tempText = tempContent.substr(0,showChar);
                keepText = tempContent.substr(showChar,tempContent.length - showChar);
            }
            var tempNameIns = arr[i][j][0];
            // if(tempNameIns.length>23){
            //     tempNameIns = tempNameIns.substr(0,23)+'...';
            // }
            var prodId = tempName+(j+1);
            var iduni = 'idpicture'+prodId;
            var img = document.getElementById(iduni);
            var mainId = 'main'+prodId;
            var htmlTag = 
                '<div  id="'+mainId+'" class="col-xs-12 col-md-4"><div class="card">'+
                '<div id="'+iduni+'"><img  class="card-img-top" src="'+arr[i][j][3]+'" alt="Item'+(i+1)+'"></div>'+
                '<div class="card-block"><h4 id="idname'+prodId+'" class="card-title">' + tempNameIns + '</h4>'+
                '<p class="card-text">' + arr[i][j][1] + '</p>' +
                '<p id="idprice'+prodId+'" class="text-muted"> Price : '+ arr[i][j][2] +' USD</p>'+
                '<div class="text-center"><a id="addCart'+prodId+'" class="btn btn-primary"' + 
                'style="color:white;cursor:pointer" onclick="addToCart('+mainId+','+iduni+',idname'+prodId+',idprice'+prodId+')">Add to Cart</a></div></div></div></div>';
            $(idcontent[i]).append(
                htmlTag
            );
            getCartBtn((j+1),i);
        }
    }

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

var numOfValue = 0;
var getNumOfProd = $('#valueitem');
var arrAddCartBtn = [piano = [],violin = [],cello = [],
                    guitar = [],harmonica = [],saxophone = []];

var getCartBtn = (id,i) => {
    var tempName = '';
    switch (i) {
        case 0:{tempName='piano'}break;
        case 1:{tempName='violin'}break;
        case 2:{tempName='cello'}break;
        case 3:{tempName='guitar'}break;
        case 4:{tempName='harmonica'}break;
        case 5:{tempName='saxophone'}break;
    }
    arrAddCartBtn[i].push($('#addCart'+tempName+id));
}

var addToCart = (mainId,genpic,id2,id3) => {
    numOfValue++;
    var nameRem = 'box'+mainId;
    var img = genpic.innerHTML;
    console.log(mainId);
    var tempBlock = '<div id="'+nameRem+'" class="col-xs-12 text-center"><div class="card text-left">'+img+'<div class="card-block">'+
                    $(id2).html()+"<br>"+$(id3).html()+'</div></div></div>';
    getNumOfProd.text(numOfValue);
    // console.log(genpic)
    $('#listcartitemuser').append(tempBlock);
}

var loaditem = () => {
    var text = $('#listcartitemtempuser');
    // for
    
    $('#listcartitemuser').append(text);

}

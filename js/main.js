(function() {
    'use strict'
    document.querySelector('#navbarSideCollapse').addEventListener('click', function() {
        document.querySelector('.offcanvas-collapse').classList.toggle('open')
    })
})()

let ItemsImg = [
    {
        desktopImg : "./pic/desktop/image-deep-earth.jpg",
        mobileImg : "./pic/mobile/image-deep-earth.jpg",
        id:0,
        text:{
            textOrg:"DEEP EARTH",
            text1:"DEEP",
            text2:"EARTH"
        }
    },
    {
        desktopImg : "./pic/desktop/image-night-arcade.jpg",
        mobileImg : "./pic/mobile/image-night-arcade.jpg",
        id:1,
        text:{
            textOrg:"NIGHT ARCADE",
            text1:"NIGHT",
            text2:"ARCADE"
        }
    },
    {
        desktopImg : "./pic/desktop/image-soccer-team.jpg",
        mobileImg : "./pic/mobile/image-soccer-team.jpg",
        id:2,
        text:{
            textOrg:"SOCCER TEAM VR",
            text1:"SOCCER",
            text2:"TEAM VR"
        }
    },
    {
        desktopImg : "./pic/desktop/image-grid.jpg",
        mobileImg : "./pic/mobile/image-grid.jpg",
        id:3,
        text:{
            textOrg:"THE GRID",
            text1:"THE",
            text2:"GRID"
        }
    },


    {
        desktopImg : "./pic/desktop/image-from-above.jpg",
        mobileImg : "./pic/mobile/image-from-above.jpg",  
        id:4,     
        text:{
            textOrg:"FROM UP ABOVE VR",
            text1:"FROM UP",
            text2:"ABOVE VR"
        }

    },
    {
        desktopImg : "./pic/desktop/image-pocket-borealis.jpg",
        mobileImg : "./pic/mobile/image-pocket-borealis.jpg",
        id:5,
        text:{
            textOrg:"POCKET BOREALIS",
            text1:"POCKET",
            text2:"BOREALIS"
        }
    },
    {
        desktopImg : "./pic/desktop/image-curiosity.jpg",
        mobileImg : "./pic/mobile/image-curiosity.jpg",
        id:6,
        text:{
            textOrg:"THE CORIOSITY",
            text1:"THE",
            text2:"CORIOSITY"
        }
    },
    {
        desktopImg : "./pic/desktop/image-fisheye.jpg",
        mobileImg : "./pic/mobile/image-fisheye.jpg",
        id:7,
        text:{
            textOrg:"MAKE IT FISHEYE",
            text1:"MAKE IT",
            text2:"FISHEYE"
        }
    },
]

$("#Boximages").html(`
    ${ItemsImg.map((item)=>`
        <div class="item_images">
            <picture class="img_items imgopacity${item.id}">
                <source media="(max-width:991.98px)" srcset=${item.mobileImg}>
                <img src=${item.desktopImg} alt=${item.text.textOrg}  >
            </picture>
            <div class="item_images_text" id="image${item.id}">
                <span>${item.text.text1}</span>
                <span>${item.text.text2}</span>  
            </div>
        </div>
    `).join("")}
`)

$(document).on("click","#navbarSideCollapse",function(e) {
    var cssBody = $( "body" ).css( "overflow" );
    if(cssBody === "hidden"){
        console.log(cssBody)
        $("body").css({"overflow":"auto"});
    }else{
        $("body").css({"overflow":"hidden"});
    }
});

ItemsImg.map((item)=>{
    $(`#image${item.id}`).hover(function(){
        $(`.imgopacity${item.id}`).toggleClass( "opacity04" )
    
    })
})

ItemsImg.map((item)=>{
    $(`.imgopacity${item.id}`).hover(function(){
        $(`.imgopacity${item.id}`).toggleClass( "opacity04" )
    
    })
})

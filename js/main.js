$(document).ready(function() {
    // process bar
    setTimeout(function() {
        firstQuestion();
        $('.spinner').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    }, 600);
    var audio = new Audio('sound/Cưới Thôi - Masiu x Masew.mp3');
        audio.play();
    window.onload = function () {
        var audio = new Audio('sound/Cưới Thôi - Masiu x Masew.mp3');
        audio.play();
    }
})

function init(){
    $('#title').text(CONFIG.title)
    $('#desc').text(CONFIG.desc)
    $('#yes').text(CONFIG.btnYes)
    $('#no').text(CONFIG.btnNo)
}

function firstQuestion(){
    $('.content').hide();
    Swal.fire({
        title: CONFIG.introTitle,
        text: CONFIG.introDesc,
        imageUrl: 'https://lh3.googleusercontent.com/6M6n6_cNG29a0SnarpXMyVctcNq02QHrpPkTtMpzLBAl0kv_Hh8Or4u5-c_vfG9oT7lUPVk6kBZRewYwMxkN9T4BCpQdH7MlmKtSIvBGBFylrU8S7w3_b8_P_qVAi72cl6gCD5_MeR3Z1MNcO4b54KIBi_KPu92C983drskrgCvFOxg4RvqyWIWJO5JRpIXVtBOcCXUxrs9U6Z4JXdbZTJ5phOavAMN7SW3d5iOf0qICDzdckgwSd8d-7c73QHpGTM69AvPMWFKH6qxcejENix6hR6xlY_RSbH7hVjmqTLJuODO1Z4k2bpY58HBOV8eo9I5sS5uN0ClITUlW6F3WDTAwq9PsT97Vy6yGYW5ySIjFM-hnOIalLEmnkH75fO20eVObehijsncW3GYf-i0fpnK9PfyK2KBVv1zuef0ppyLALzHB6exviONj31ra-lPxlQ2m8ZCh1Nwl_gv3-RVfWxXcb1mI-UOvO9DX-hsMwQhPdX_SvlTwV_j453F8A2vhByjkRED4c47tqo2yaytwgVJjxJEQ6Yfpw_eftSlfwXVuUkbYzsjHu02AkwWgMYNeFNqzZKV-UwngwFLPVTdP9rq-6qJhTgJGl_y1p5yMiRYDNYstwB3dB97wFhYEy8cyDh__Slz7E62YjgOTak_sA1q2I0fWEr4lRJOmSpqMn6N0Y0xnHRsj83StUPs4yzCvGeYRRF10-GOz5NQUUqCoSHhN=w320-h576-no?authuser=0',
        imageWidth: 300,
        imageHeight: 300,
        background: '#fff url("img/iput-bg.jpg")',
        imageAlt: 'Custom image',
        confirmButtonText: CONFIG.btnIntro
      }).then(function(){
        $('.content').show(200);
      })
}

 // switch button position
 function switchButton() {
    var audio = new Audio('sound/duck.mp3');
    audio.play();
    var leftNo = $('#no').css("left");
    var topNO = $('#no').css("top");
    var leftY = $('#yes').css("left");
    var topY = $('#yes').css("top");
    $('#no').css("left", leftY);
    $('#no').css("top", topY);
    $('#yes').css("left", leftNo);
    $('#yes').css("top", topNO);
}
// move random button póition
function moveButton() {
    var audio = new Audio('sound/Swish1.mp3');
    audio.play();
    var x = Math.random() * ($(window).width() - $('#no').width()) * 0.9 ;
    var y = Math.random() * ($(window).height() - $('#no').height()) * 0.9;
    var left = x + 'px';
    var top = y + 'px';
    $('#no').css("left", left);
    $('#no').css("top", top);
}

init()

var n = 0;
$('#no').mousemove(function() {
    if (n < 1)
        switchButton();
    if (n > 1)
        moveButton();
    n++;
});
$('#no').click(() => {
    if (screen.width>=900)
        switchButton();
})

// generate text in input
function textGenerate() {
    var n = "";
    var text = " " + CONFIG.reply;
    var a = Array.from(text);
    var textVal = $('#txtReason').val() ? $('#txtReason').val() : "";
    var count = textVal.length;
    if (count > 0) {
        for (let i = 1; i <= count; i++) {
            n = n + a[i];
            if (i == text.length + 1) {
                $('#txtReason').val("");
                n = "";
                break;
            }
        }
    }
    $('#txtReason').val(n);
    setTimeout("textGenerate()", 1);
}

// show popup
$('#yes').click(function() {
    var audio = new Audio('sound/tick.mp3');
    audio.play();
    Swal.fire({
        width: 900,
        confirmButtonText: CONFIG.btnAccept,
        background: '#fff url("img/iput-bg.jpg")',
        title: CONFIG.mess,
        text: CONFIG.messDesc,
        confirmButtonColor: '#83d0c9',
        onClose: () => {
        window.location = CONFIG.messLink;
        }
    })
    // Swal.fire({
    //     title: CONFIG.question,
    //     html: true,
    //     width: 900,
    //     padding: '3em',
    //     html: "<input type='text' class='form-control' id='txtReason' onmousemove=textGenerate()  placeholder=''>",
    //     background: '#fff url("img/iput-bg.jpg")',
    //     backdrop: `
    //           rgba(0,0,123,0.4)
    //           url("img/giphy2.gif")
    //           left top
    //           no-repeat
    //         `,
    //     confirmButtonColor: '#3085d6',
    //     confirmButtonColor: '#fe8a71',
    //     confirmButtonText: CONFIG.btnReply
    // }).then((result) => {
    //     if (result.value) {
    //         Swal.fire({
    //             width: 900,
    //             confirmButtonText: CONFIG.btnAccept,
    //             background: '#fff url("img/iput-bg.jpg")',
    //             title: CONFIG.mess,
    //             text: CONFIG.messDesc,
    //             confirmButtonColor: '#83d0c9',
    //             onClose: () => {
    //                 window.location = CONFIG.messLink;
    //               }
    //         })
    //     }
    // })
})


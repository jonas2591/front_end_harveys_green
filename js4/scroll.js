$('#about-us').click(function(){

    var p = document.getElementById('video-about');
    posicoes = p.getBoundingClientRect();


    const positionX = posicoes.x;
    const positionY = posicoes.y -100;


    window.scroll(positionX, positionY)

})


$('#prices-text').click(function(){

    var p = document.getElementById('container-prices');
    posicoes = p.getBoundingClientRect();


    const positionX = posicoes.x;
    const positionY = posicoes.y -100;


    window.scroll(positionX, positionY)

})


$('#prizes-us').click(function(){

    var p = document.getElementById('container-prizes');
    posicoes = p.getBoundingClientRect();


    const positionX = posicoes.x;
    const positionY = posicoes.y +50;


    window.scroll(positionX, positionY)

})



$('#affiliate-us').click(function(){

    var p = document.getElementById('container-affiliate');
    posicoes = p.getBoundingClientRect();


    const positionX = posicoes.x;
    const positionY = posicoes.y +50;


    window.scroll(positionX, positionY)

})

$('#about-us1').click(function(){

    var p = document.getElementById('video-about');
    posicoes = p.getBoundingClientRect();


    const positionX = posicoes.x;
    const positionY = posicoes.y +6650;


    window.scroll(positionX, positionY)

})


$('#prices-text1').click(function(){

    var p = document.getElementById('container-prices');
    posicoes = p.getBoundingClientRect();


    const positionX = posicoes.x;
    const positionY = posicoes.y +6400;


    window.scroll(positionX, positionY)

})
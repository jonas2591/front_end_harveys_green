const lang = navigator.language ;


(function () {
    if(lang === 'pt-BR'){
        document.getElementById('button-1').innerHTML = "Entrar"
        document.getElementById('button-2').innerHTML = "Se Registrar"
        document.getElementById('home-text').innerHTML = "Inicio"
        document.getElementById('prices-text').innerHTML = "Preços"

        document.getElementById('sub-menu-text-home').innerHTML = "Inicio"
        document.getElementById('sub-menu-text-prices').innerHTML = "Preços"
        document.getElementById('sub-menu-text-login').innerHTML = "Entrar"
        document.getElementById('sub-menu-text-register').innerHTML = "Registrar"
    }
})()
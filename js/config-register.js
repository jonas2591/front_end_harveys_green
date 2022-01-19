
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}


(function () { //verifica se o usuário já está logado
    try{
        if(localStorage.getItem('jwt_token').length > 0){
        
            window.location.href = "dashboard/index.html"
            
        }
    }catch(err){

    }
})()
const apiURL = 'http://www.localhost'
async function requestRegister(username, email, senha){ //quando o usuario for logar

    const recaptchaResponse = grecaptcha.getResponse()
    

    if(recaptchaResponse != ""){
        if(email.length > 0 && senha.length > 0){

            
            let referalCookie = getCookie('dad_affiliate_id')


            const request = await axios.post(`${apiURL}:3002/register`, {"referal": referalCookie, "username":username, "email": email, "password": senha, "recaptcha": recaptchaResponse})

            
            if(request.data.error){
                alert(request.data.error)
                location.reload();
                //Reenvia o codigo de confirmação
            }
            if(request.status == 201){
                alert('Your account has been successfully created!')
                window.location = "login.html"
            }
            
            
    
        }else{
            alert("Campos invalidos")
            location.reload();
        }
    }else{
        alert("por favor clique em não sou um robo")
        location.reload();
    }
    
    
}


$("#btn-login").click(function() {
    $('#btn-login').prop('disabled', true);
    const username = $('#username').val()
    const email = $('#email').val()
    const senha = $('#senha').val()
    const confirm_senha = $('#confirm-senha').val()

    if(confirm_senha != senha){
        alert('passwords do not match')
    }else{
        console.log(`${username} ${email} ${senha} ${confirm_senha}`)
        requestRegister(username, email, senha)

    }
});



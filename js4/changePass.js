
const apiURL = 'https://api.harveys-cloud-mining.online'



async function requestLogin(senha, confirmsenha){ //quando o usuario for logar

    try{
        const recaptchaResponse = grecaptcha.getResponse()
    
        const queryStringDataPass = window.location.search.split('=')[1]

        if(recaptchaResponse != ""){

            if(senha === confirmsenha){
                if(senha.length > 0 && confirmsenha.length > 0){

                    const request = await axios.post(`${apiURL}/changepass/${queryStringDataPass}`, {"newPassword": senha, "recaptcha": recaptchaResponse})
    
                    
                    if(request.data.error){
                        alert(request.data.error)
                        location.reload();
                    }
                    if(request.data.msg){
                        alert(`${request.data.msg}, redirecting...`)
                        window.location = 'login.html'
                    }
                    
            
                }else{
                    alert("invalid fields")
                    location.reload();
                }
            }else{
                alert('passwords do not match ')
                location.reload();
            }

            
        }else{
            alert("please click I'm not a robot ")
            location.reload();
        }
    }catch(err){
        alert('Error')
        location.reload();
    }

    
    
}


$("#btn-login").click(function() {
    $('#btn-login').prop('disabled', true);
    const senha = $('#new-password').val()
    const confirmsenha = $('#confirm-new-password').val()

    requestLogin(senha, confirmsenha)
});



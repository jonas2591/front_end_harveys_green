
const apiURL = 'https://api.harveys-cloud-mining.online'



async function requestLogin(email){ //quando o usuario for logar

    try{
        const recaptchaResponse = grecaptcha.getResponse()
    
        
        if(recaptchaResponse != ""){
            if(email.length > 0){

                const request = await axios.post(`${apiURL}/sendmailchange`, {"email": email, "recaptcha": recaptchaResponse})
                
                if(request.data.msg){
                    alert(request.data.msg)
                    
                }

                if(request.data.error){
                    alert(request.data.error)
                    location.reload();
                }
        
            }else{
                alert("Invalid fields")
                location.reload();
            }
        }else{
            alert("please click I'm not a robot")
        }
    }catch(err){
        console.log(err)
        //alert('Error')
        //location.reload();
    }

    
    
}


$("#btn-login").click(function() {
    $('#btn-login').prop('disabled', true);
    const email = $('#email').val()

    requestLogin(email)
});



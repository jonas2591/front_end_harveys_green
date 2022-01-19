const queryString = window.location.search;
const apiURL = 'https://api.harveys-cloud-mining.online'
async function init(){
    const request = await axios.get(`${apiURL}/confirmUser/${queryString.split('=')[1]}`)
    
    if(request.data.error){
        $('#msg-confirm').text('Error when confirming account').css("color", "red")
    }else{
        $('#msg-confirm').text('Your account has been confirmed').css("color", "rgb(0, 105, 40)")
    }
    //
}

init()
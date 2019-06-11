
(function() {

    // Write your custom script here!!
    var submitCtaBtn = document.getElementById('submit-cta');
    submitCtaBtn.addEventListener('click', function() {
        getBrowserInfo();
    });
})();


function getBrowserInfo(){
    var getUserAgentInfo = navigator.userAgent
    var findBrowrserName = getUserAgentInfo.split(' ');
    var popup = document.querySelector('.popup');
    findBrowrserName.forEach( function( name ){
        var nametoLowerCase = name.toLowerCase();
        // If browser is Edge
        if(nametoLowerCase.includes("chrome") && nametoLowerCase.includes("edge")){
            popup.style.bottom = '20px';
            popup.style.left = '50%';
            popup.style.right = '50%';
            popup.style.transform = 'translate(-50%, 0)'
            popup.style.display = 'block'; 
        }
        // If browser is Firefox
        else if(nametoLowerCase.includes("firefox")){
            popup.style.top = '20px';
            popup.style.left = '20px';
            popup.style.display = 'block'; 
        }
         // If browser is Chrome
        else if(nametoLowerCase.includes("chrome") || nametoLowerCase.includes("edge")){
            popup.style.top = '20px';
            popup.style.right = '20px';
            popup.style.display = 'block'; 
        }
    });
}
document.getElementById('portraitsPricingWrapper').style.display = 'none';
document.getElementById('printingPricingWrapper').style.display = 'none';
document.getElementById('passportPricingWrapper').style.display = 'none'; 
document.getElementById('restorationPricingWrapper').style.display = 'none';
document.getElementById('wallartPricingWrapper').style.display = 'none';
document.getElementById('filmPricingWrapper').style.display = 'none';


function showPricing() {
    var dropDown = document.getElementById("servicePricing").value;

    if(dropDown === "default"){
        document.getElementById("portraitsPricingWrapper").style.display = 'none';
        document.getElementById('printingPricingWrapper').style.display = 'none';
        document.getElementById('passportPricingWrapper').style.display = 'none';
        document.getElementById('restorationPricingWrapper').style.display = 'none';
        document.getElementById('wallartPricingWrapper').style.display = 'none';
        document.getElementById('filmPricingWrapper').style.display = 'none';    
    } 
    else {
        document.getElementById('portraitsPricingWrapper').style.display = 'none';
        document.getElementById('printingPricingWrapper').style.display = 'none';
        document.getElementById('passportPricingWrapper').style.display = 'none';
        document.getElementById('restorationPricingWrapper').style.display = 'none';
        document.getElementById('wallartPricingWrapper').style.display = 'none';
        document.getElementById('filmPricingWrapper').style.display = 'none';
        if(dropDown === "portraits"){
            document.getElementById('portraitsPricingWrapper').style.display = 'block';      
        } 
        else if(dropDown === "printing"){
            document.getElementById('printingPricingWrapper').style.display = 'block';
        } 
        else if(dropDown === "passport"){
            document.getElementById('passportPricingWrapper').style.display = 'block';
        }
        else if(dropDown === "restoration"){
            document.getElementById('restorationPricingWrapper').style.display = 'block';
        }
        else if(dropDown === "wallart"){
            document.getElementById('wallartPricingWrapper').style.display = 'block';
        }
        else if(dropDown === "film"){
            document.getElementById('filmPricingWrapper').style.display = 'block';
        }
    }
}  
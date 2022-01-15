function updateRate() {
    var slider = document.getElementById("rate");
    var output = document.getElementById("rate_val");
    output.innerHTML = slider.value; // Display the default slider value

    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function() 
    {
        output.innerHTML = this.value;
    }  
}

function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML="If you deposit " + "<span class='highlight'>" + principal + "</span>."  + ", <br> at an interest rate of "+ "<span class='highlight'>" + rate + "</span>%." + "<br> You will receive an amount of " + "<span class='highlight'>" + interest + "</span>" + ", <br> in the year " + "<span class='highlight'>" + year + "</span>";
    
}

function valid() {
    if (principal.value < 1) {
        alert("Please enter a number which is a valid one(positive number)");
        principal.focus();
    } else {
        compute();
    }
}

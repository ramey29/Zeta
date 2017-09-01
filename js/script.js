$(document).ready(function () {
    

    var displayResources = $('.mcb-body');
    
    displayResources.text('Loading data from JSON source...');
    
    $.ajax({
    type: "GET",
    url: "/jsonFile.json",
    success: function(result)
    {
    console.log(result);
    var output="";
    for (var i in result)
    {
        output += "<div class='mcb-content'><span class='mcb-conImg'><img src='" + result[i].img + "' /></span><p class='mcb-conHeadtxt'>" + result[i].heading + " <span class='statusSpan " + result[i].status + "'> " +result[i].status+ " </span>   <br> <span class='mcb-conSubtxt'> by " + result[i].provider + "</span></p><span class='mcb-checkbox'><label class='check'><input type='checkbox'/><div class='box'></div></label></span></div>"
    }
    
    displayResources.html(output);
    
    }
    });
    
   
   });
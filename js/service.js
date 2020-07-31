 /*==============================================================================
 * When a Element is selected, It reveals 
 ==============================================================================*/

$(document).ready(function(){
    $("select").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue){
                $(".box").not("." + optionValue).hide();
                $("." + optionValue).show(); /* Reveal the Element that is selected */
            } else{
                $(".box").hide(); /* Hides the Element that isn't selected */
            }
        });
    }).change();
});

/*=============================================================================*/
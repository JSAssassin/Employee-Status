$(document).ready(function(){
    //$.getJSON(url, data, callback function)
    var url = "../data/employees.json";
    $.getJSON(url, function (response) {
        var statusHTML = '<ul class="bulleted">';
        //$.each(datta,array or object, callback function)
        $.each(response, function (index, employee) {
            if (employee.inoffice === true) {
                statusHTML += "<li class='in'>";
            } else {
                statusHTML += "<li class='out'>";
            }
            statusHTML += employee.name + "</li>";

        });
        statusHTML += '</ul>'
        $('#employeeList').html(statusHTML);
    });//end getJSON

});//end ready. 
//$(document).ready(function() - This function is a jQuery thing, it waits for all the HTML in a 
//file to load into the browser before running any of the JAVA script inside it.
//This is required only when you include your
//JavaScript in the head of your document before html.

// 


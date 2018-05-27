var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        // console.log(typeof xhr.responseText); to check what tyoe the response is. In this case it is a string. 
        //We can't access the bits and pieces of the data like individual employees
        //names or their status when it's in a big long string like this.
        //We need to turn this string into real JavaScript and here's how.
        var employees = JSON.parse(xhr.responseText);
        
        // console.log(typeof employees); Check the response type again and this time it is an object
        // console.log(employees); gives an array

        var statusHTML = '<ul class="bulleted">';
        for (var i=0; i<employees.length; i++) {
            if (employees[i].inoffice === true) {
                statusHTML+='<li class="in">';
            } else {
                statusHTML+='<li class="out">';
            }
            statusHTML+=employees[i].name;
            statusHTML+='</li>';
        }
        statusHTML+='</ul>';
        document.getElementById('employeeList').innerHTML = statusHTML;
    }
};

xhr.open('GET', '../data/employees.json');
xhr.send();

var request = new XMLHttpRequest();
request.onreadystatechange = function () {
    if (request.readyState === 4) {
        var Rooms = JSON.parse(request.responseText);
        var statusHTML = '<ul class="rooms">';
        for (var i=0; i<Rooms.length; i++) {
            if (Rooms[i].available === true) {
                statusHTML+='<li class="empty">';
            } else {
                statusHTML+='<li class="full">';
            }
            statusHTML+=Rooms[i].roomNumber;
            statusHTML+='</li>';
        }
        statusHTML+='</ul>';
        document.getElementById('roomList').innerHTML = statusHTML;
    }
};

request.open('GET', '../data/rooms.json');
request.send();
var workshop = [{
    title: 'Matlab Workshop',
    limit: 5,
    people: []
}, {
    title: 'Arduino Workshop',
    limit: 5,
    people: []
}, {
    title: 'AutoCad Workshop',
    limit: 5,
    people: []
}];

var user = [];


register = function (event) {

    let ws_titles = [];
    for (let i = 0; i < workshop.length; i += 1) {
        ws_titles.push(workshop[i].title);
    }

    ws = document.getElementById("workshops").value;
    obj = {
        firstName: document.getElementById("first_name").value,
        lastName: document.getElementById("last_name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        workshop: document.getElementById("workshops").value
    };

    for (let i = 0; i < ws_titles.length; i += 1) {
        if (ws_titles[i] == ws) {
            if (workshop[i].people.length < workshop[i].limit) {
                workshop[i].people.push(obj);
                user.push(obj);

                var userList = document.getElementById('list');


                // Create User and Assign Input Text Value
                var item = document.createElement('div');
                item.classList.add('item');

                var item_text = document.createElement('div');
                item_text.classList.add('item-text');
                item_text.textContent = ' > ' + obj.firstName + obj.lastName + ' is going to ' + obj.workshop;

                // Add a Remove button and assing Delete function
                var btn_remove = document.createElement('button');
                btn_remove.classList.add('action-btn');
                btn_remove.classList.add('remove-btn');
                btn_remove.textContent = "Delete";

                btn_remove.addEventListener('click', function () {
                    item.parentNode.removeChild(item);
                    user.pop();
                    console.log(user)
                });


                // Append Elements
                item.append(item_text);
                item.append(btn_remove);
                userList.append(item);

            } else {
                console.log("No hay cupo en " + workshop[i].title);
            }

        }
    }
    console.log(user);
    console.log(workshop);
}


element = document.getElementById("formulario");
element.addEventListener("submit", function (event) {
    event.preventDefault()
});
element.addEventListener("submit", register, false);

var search = document.getElementById('search_btn');
search.addEventListener('click', function () {
    var search_text = document.getElementById('seach_txt');
    console.log(search_text.value);

    var displayUser = document.getElementById('oneUser');
    var obj = document.createElement('div');
    obj.classList.add('item');
    var user_text = document.createElement('div');
    user_text.classList.add('item-text');

    //search
    for (let i = 0; i < user.length; i += 1) {
        if (user[i].firstName == search_text.value) {
            user_text.textContent = ' > ' + user[i].firstName + user[i].lastName + ' is going to ' + user[i].workshop;

        }
    }




    // Append Elements
    obj.append(user_text);
    displayUser.append(obj);

});
function storeData() {
    var fname = document.getElementById("fname");
    var mname = document.getElementById("mname");
    var lname = document.getElementById('lname');
    var email = document.getElementById('emailid');
    var password = document.getElementById('password');
    var address = document.getElementById('address');
    var phone = document.getElementById('phone');
    var accnt = document.getElementById('selectaccnt');
    var dt = document.getElementById('date');
    var post = document.getElementById('post');
    var radio = document.querySelector('input[name="radio"]:checked').value;
    var rvalue;
    if (radio == 'male') {
        rvalue = document.getElementById('male').value;
    }
    else if (radio == 'female') {
        rvalue = document.getElementById('female').value;
    }
    else if (radio == 'others') {
        rvalue = document.getElementById('others').value;
    }

    // fname=fname.value;
    // console.log(fname);

    const userArray = {
        "name": fname.value + " " + mname.value + " " + lname.value,
        'email': email.value,
        'password': password.value,
        'phone': phone.value,
        'address': address.value,
        'date': dt.value,
        'accnt': accnt.value,
        'gender': rvalue,
        'post': post.value
    }

    if (typeof (Storage) !== "undefined") {
        if (sessionStorage.clickcount) {
            sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
            localStorage.setItem("user(" + sessionStorage.clickcount + ")", JSON.stringify(userArray));
            var user = JSON.parse(localStorage.getItem('user(' + sessionStorage.clickcount + ')'));
            var fname = user.name;
            var email = user.email;
            var phone = user.phone;
            var password = user.password;
            var address = user.address;
            var date = user.date;
            var accnt = user.accnt;
            var gender = user.gender;
            var post = user.post;

            createTable(fname, phone, email, address, post, date, gender, accnt, password);


        } else {
            sessionStorage.clickcount = 1;
            localStorage.setItem("user(" + sessionStorage.clickcount + ")", JSON.stringify(userArray));
            var user = JSON.parse(localStorage.getItem('user(' + sessionStorage.clickcount + ')'));
            var fname = user.name;
            var email = user.email;
            var phone = user.phone;
            var password = user.password;
            var address = user.address;
            var date = user.date;
            var accnt = user.accnt;

            createTable(fname, phone, email, address, date, accnt, password);
        }

    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}

function storeUserSignInData() {
    var email = document.getElementById('emailid');
    var password = document.getElementById('password');
    
    const userArray = {
        'email': email.value,
        'password': password.value
        }

    if (typeof (Storage) !== "undefined") {
        if (sessionStorage.clickcount) {
            sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
            localStorage.setItem("user(" + sessionStorage.clickcount + ")", JSON.stringify(userArray));
            var user = JSON.parse(localStorage.getItem('user(' + sessionStorage.clickcount + ')'));
            var email = user.email;
            var password = user.password;
            console.log(email, password);
            createUserSignInTable(email, password);


        } else {
            sessionStorage.clickcount = 1;
            localStorage.setItem("user(" + sessionStorage.clickcount + ")", JSON.stringify(userArray));
            var user = JSON.parse(localStorage.getItem('user(' + sessionStorage.clickcount + ')'));
            var email = user.email;
            var password = user.password;
            console.log(email, password);
            createUserSignInTable(email, password);
        }

    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}

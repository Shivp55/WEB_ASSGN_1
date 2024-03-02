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
    // fname=fname.value;
    // console.log(fname);

    const userArray = Array(
        'name', fname.value + " " + mname.value + " " + lname.value,
        'email', email.value,
        'password', password.value,
        'phone', phone.value,
        'address', address.value,
        'date', date.value,
        'accnt', accnt.value
    );

    localStorage.setItem('user', JSON.stringify(userArray));
    const userData = JSON.parse(localStorage.getItem('user'));
    userDT = JSON.stringify(Object.assign({},userData));
    // print(userDT)
    // console.log(userData);
    return userDT;
    // document.write(userDT);
}
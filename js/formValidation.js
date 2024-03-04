// Load script
var filerefjs = document.createElement('script');
filerefjs.setAttribute("type", "text/javascript");
filerefjs.setAttribute("src", "https://unpkg.com/sweetalert/dist/sweetalert.min.js");
function validate_form(event) {
    event.preventDefault();

    var i;
    var fname = document.getElementById("fname");
    var mname = document.getElementById("mname");
    var lname = document.getElementById('lname');
    var email = document.getElementById('emailid');
    var password = document.getElementById('password');
    var cfmpassword = document.getElementById('cfmpassword');
    var address = document.getElementById('address');
    var phone = document.getElementById('phone');
    var accnt = document.getElementById('selectaccnt');
    var post = document.getElementById('post');

    //function check names
    if (fname.value == null || fname.value == "") {
        alert("Please enter a valid first name");
        document.getElementById('firstname').style.borderColor = "red"
        fname.focus();
        return false;
    }
    else {
        document.getElementById('firstname').style.borderColor = "green"
    }
    if (mname.value == null || mname.value == "") {
        alert("Please enter a valid middle name");
        document.getElementById('middlename').style.borderColor = "red"
        mname.focus();
        return false;
    }
    else {
        document.getElementById('middlename').style.borderColor = "green"
    }
    if (lname.value == null || lname.value == "") {
        alert("Please enter a valid last name");
        document.getElementById('lastname').style.borderColor = "red"
        lname.focus();
        return false;
    }
    else {
        document.getElementById('lastname').style.borderColor = "green"
    }

    //Validating Select box
    if (accnt.selectedIndex == 0) {
        alert("Please select Account Type");
        document.getElementById('selectaccnt').style.borderColor = "red"
        accnt.focus();
        return false;
    }
    else {
        document.getElementById('selectaccnt').style.borderColor = "green"
    }
    // Validating phone number
    if (phone.value.length < 1 || phone.value.length > 10) {
        alert("Invalid phone number");
        document.getElementById('ph.no').style.borderColor = "red"
        phone.focus();
        return false;
    } else {
        document.getElementById('ph.no').style.borderColor = "green"
    }

    var pwd = password.value;
    //Validating Password
    if (pwd.length === 0) {
        alert("You must enter a valid password");
        document.getElementById('pwd').style.borderColor = "red"
        password.focus();
        return false;
    }
    else {
        document.getElementById('pwd').style.borderColor = "green"
    }

    if (pwd.length < 6) {
        alert("Length of Password must be greater than 6 characters");
        document.getElementById('pwd').style.borderColor = "red"
        password.focus();
        return false;
    }
    else {
        document.getElementById('pwd').style.borderColor = "green"
    }

    //Validating Address
    if (address.value == null || address.value == "") {
        alert("Please enter a valid address");
        document.getElementById('addr').style.borderColor = "red"
        address.focus();
        return false;
    }
    else {
        document.getElementById('addr').style.borderColor = "green"
    }
    if (post.value == null || post.value == "") {
        alert("Please enter a valid postal address");
        document.getElementById('poc').style.borderColor = "red"
        address.focus();
        return false;
    }
    else {
        document.getElementById('poc').style.borderColor = "green"
    }
    if(check_bothPass()==true && ValidateEmail()==true) {
    

    // alert("All fields are valid");
    // this.innerHTML = "<div class='loader'></div>";
    var btn = document.getElementById("user_register");
    btn.innerHTML = "<div class='loader'></div>";

    // Start a timer for the animation to finish
    var timeout = setTimeout(function () {
        console.log("work done");

        // When the work is done, reset the button to original state
        btn.innerHTML = 'Create Account';

        // After the animation finishes, show SweetAlert
        swal({
            title: "Account Created",
            text: "Please Check the table below to confirm your account",
            icon: "success",
            button: "OK",
        });
        storeData();
        document.getElementById("signup_form").reset();
    }, 3000);

    // Clear the timeout if the button is clicked before the animation finishes
    btn.addEventListener('click', function () {
        clearTimeout(timeout);
        btn.innerHTML = 'Create Account'; // Reset button text
    });
}


}
function check_bothPass() {
    var password = document.getElementById('password');
    var cfmpassword = document.getElementById('cfmpassword');
    //Checking both Passwords
    if (password.value === cfmpassword.value) {
        return true;
    }
    alert("Passwords do not match");
    document.getElementById('pwd').style.borderColor = "red"
    cfmpassword.focus();
    password.focus();
    return false;
}

//Validating email
function ValidateEmail(mail) {
    var mail = document.getElementById("emailid");
    //alert(mail.value);

    const emailRegex = /^[\w.-]+@[A-Za-z\d.-]+\.[A-Za-z]{2,}$/;
    if (emailRegex.test(mail.value)) {
        return true;
    }
    else {
        alert('invalid email');
        document.getElementById('email').style.borderColor = "red"
        mail.focus();
        return false;
    }
}
//Show/Hide Password
function show_Hide(check_box) {
    var val = document.getElementById("password");
    if (check_box.checked) {
        val.setAttribute("type", 'text');
    }
    else {
        val.setAttribute("type", 'password');
    }
}


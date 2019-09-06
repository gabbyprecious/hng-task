function ValidateForm() {
    var fname = document.myform.fname.value;
    var lname = document.myform.lastname.value;
    var email = document.myform.email.value;

    // Validate first name
    if (fname == "") {
        alert("Please enter your first name");
        return false;
    }


    // Validate last name
    if (lname == "") {
        alert("Please enter your last name");
        return false;

    }

    // Validate email address
    if (email == "") {
        alert("Please enter your email address");
        return false;
    }
}
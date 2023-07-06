function validateForm() {
    let name2 = document.forms["formulir"]["name"].value;
    let email2 = document.forms["formulir"]["email"].value;


    if (name2 === "") {
        alert("Name required.")
        return false;
    }

    if (email2 === "") {
        alert("Email required")
        return false;
    }

    const name = document.getElementsByClassName("name").value;
    const email = document.getElementsByClassName("email").value;
    const pesan = document.getElementsByClassName("pesan").value;
    return false;

}
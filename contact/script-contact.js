document.addEventListener("DOMContentLoaded", function () {
    const APIKEY = "65be42a8459ebb29dd283fad"; // API KEY

    document.getElementById("add-update-msg").style.display = "none";

    document.getElementById("contact-submit").addEventListener("click", function (e) {
        e.preventDefault();

        if (validateForm()) {
            let contactName = document.getElementById("contact-name").value;
            let contactEmail = document.getElementById("contact-email").value;
            let contactNumber = document.getElementById("contact-number").value;
            let contactSubject = document.getElementById("contact-subject").value;
            let contactMessage = document.getElementById("contact-msg").value;

            let jsondata = {
                "Name": contactName,
                "Email": contactEmail,
                "Phone Number": contactNumber,
                "Subject": contactSubject,
                "Message": contactMessage
            };

            let settings = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-apikey": APIKEY,
                    "Cache-Control": "no-cache"
                },
                body: JSON.stringify(jsondata),
                beforeSend: function () {
                    document.getElementById("contact-submit").disabled = true;
                }
            }

            fetch("https://contactus-ed6c.restdb.io/rest/contact", settings) //the restdb url
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    document.getElementById("contact-submit").disabled = false;
                    document.getElementById("add-update-msg").style.display = "block";
                    setTimeout(function () {
                        document.getElementById("add-update-msg").style.display = "none";
                    }, 3000);
                    getContacts();
                    document.getElementById("add-contact-form").reset(); // Reset the form
                });
        } 
    });

    function validateForm() {
        var name = document.getElementById('contact-name').value;
        var email = document.getElementById('contact-email').value;
        var number = document.getElementById('contact-number').value;
        var subject = document.getElementById('contact-subject').value;
        var message = document.getElementById('contact-msg').value;

        if (name === '' || email === '' || number === '' || subject === '' || message === '') {
            alert('Please fill in all fields');
            return false;
        }

        var validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!validEmail.test(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        var validPhone = /^[89]\d{7}$/;
        if (!validPhone.test(number)) {
            alert('Please enter a valid phone number with 8 digits, starting with either number "9" or "8".');
            return false;
        }

        return true;
    }

    function getContacts(limit = 10, all = true) {
        let settings = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "x-apikey": APIKEY,
                "Cache-Control": "no-cache"
            },
        }
    }
});





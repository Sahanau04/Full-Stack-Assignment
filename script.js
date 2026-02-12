document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();

    try {
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let age = document.getElementById("age").value;
        let phone = document.getElementById("phone").value.trim();
        let gender = document.querySelector('input[name="gender"]:checked');

        if (name === "") throw "Name is required";
        if (email === "") throw "Email is required";
        if (age === "" || age <= 0) throw "Enter valid age";
        if (phone.length !== 10) throw "Phone number must be 10 digits";
        if (!gender) throw "Please select gender";

        document.getElementById("msg").innerHTML =
            "<span style='color:green'>Registration Successful</span>";

        document.getElementById("result").innerHTML = `
            <h3>Student Details</h3>
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Age:</b> ${age}</p>
            <p><b>Phone:</b> ${phone}</p>
            <p><b>Gender:</b> ${gender.value}</p>
        `;

        document.getElementById("form").reset();

    } catch (error) {
        document.getElementById("msg").innerHTML =
            "<span style='color:red'>" + error + "</span>";
    }
});

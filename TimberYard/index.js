document.getElementById("submitbtn").addEventListener("click" ,function(){
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("textarea").value.trim();
    
    document.getElementById("namewarning").style.display = "none";
    document.getElementById("emailwarning").style.display = "none";
    document.getElementById("messagewarning").style.display = "none";
    
    let isValid = true;
    if (!name) {
        document.getElementById("namewarning").style.display = "inline";
        isValid = false;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("emailwarning").style.display = "inline";
        isValid = false;
    }
    if (!message) {
        document.getElementById("messagewarning").style.display = "inline";
        isValid = false;
    
    }
    if (isValid) {
        alert("Form submitted successfully!");
    }
    });
    let newDate = document.getElementById("myYear");
    let newYear = new Date().getFullYear();
    newDate.textContent = newYear;
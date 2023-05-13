function validateForm() {
    let x = document.forms["form2"]["username"].value;
    let y = document.forms["form2"]["password"].value;
    if (x == "") {
      alert(" fields must be filled out");
      return false;
    }
    if (y == "") {
      alert(" fields must be filled out");
      return false;
    }
  } 

/*
Sample Output:

TO: gfrost@usbaseball.org
From: john.smith@gmail.com
Subject: US Baseball Website Inquiry: John Smith

Full Name: John Smith
Email: john.smith@gmail.com
Phone Number: 615-555-5555
Preferred method of contact: Email
I am: a parent/guardian

I would like a membership form emailed to me for review.

Message:
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
*/

var name, email, phone, method, iam, formpreference, message, body;

function getName () {
  name = $("#inputName").val();
  return name;
}

function getEmail () {
  email = $("#inputEmail").val();
  return email;
}

function getPhone () {
  phone = $("#inputPhone").val();
  return phone;
}


function getMethod () {
  if ($("#emailMethod").is(":checked")) {
    return "Email";
  } else if($("#phoneMethod").is(":checked")) {
    return "Phone";
  }
}

function getIama() {
  if ($("#coach").is(":checked")) {
    return "a coach";
  } else if ($("#player").is(":checked")) {
    return "a player";
  } else if ($("#parent").is(":checked")) {
    return "a parent/guardian";
  } else {
    return "No option was specified";
  }
}

function getFormPreference () {
  if ($("#membershipForm").is(":checked")) {
    return "I would like a membership form emailed to me for review.";
  } else {
    return "I would NOT like a membership form emailed to me for review.";
  }
}

function getMessage() {
  message = $("#message").val();
  return message;
}

// function createBody () {
//   body = "Full Name: " + getName() + "\n" +
//          "Email: " + getEmail() + "\n" +
//          "Phone Number: " + getPhone() + "\n" +
//          "Preferred method of contact: " + getMethod() + "\n" +
//          "I am: " + getIama() + "\n" + "\n" +
//          getFormPreference() + "\n" + "\n" +
//          "Message: " + "\n" +
//          getMessage();
//
//   return body;
// }

function sendEmail() {
  // ajax query to send mail using API
  // fields are pulled from other functions

  emailjs.send("gmail", "contactform", {"name":getName(),"email":getEmail(),"phone":getPhone(),"method":getMethod(),"iam":getIama(),"formpreference":getFormPreference(),"message":getMessage()}).then(function(response) {
     console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
  }, function(err) {
     console.log("FAILED. error=", err);
  });
}

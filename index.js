let check = () => {
  if (document.getElementById("password").value == document.getElementById("confirm").value) {
    document.getElementById("message").style.color = "green";
    document.getElementById("message").innerHTML = "MATCHING";
    document.getElementById("submit").disabled = false;
  } else {
    document.getElementById("message").style.color = "red";
    document.getElementById("message").innerHTML = "NOT MATCHING";
    document.getElementById("submit").disabled = true;
  }
}
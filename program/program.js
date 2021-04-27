var program;
function initialize() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = JSON.parse(this.responseText);
      program = myObj;
    }
  };
  xmlhttp.open("GET", "../assets/data/program.json", true);
  xmlhttp.send();
}

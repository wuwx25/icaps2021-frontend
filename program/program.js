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
  render();
}

function update() {}

function render() {
  str = "";
  for (var element in program) {
    if (element["render"] == true) {
      str += '<div class="accordion-item">';
      str += '<h2 class="accordion-header" id=' + element["id"] + ">";
      str +=
        '    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">';
      str += element["title"];
      str += "</button> </h2>";
      str +=
        '    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">';
      str += '      <div class="accordion-body">';
      str += "        <strong>" + element["abstract"] + "</strong>";
      str += "      </div>";
      str += "    </div>";
      str += "  </div>";
    }
  }
  var accordion = document.getElementById("accordionExample");
  accordion.innerHTML = str;
}

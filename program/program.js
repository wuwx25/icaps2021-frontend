var program;
function initialize() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = JSON.parse(this.responseText);
      program = myObj;
      render();
    }
  };
  xmlhttp.open("GET", "../assets/data/program.json", true);
  xmlhttp.send();
}

function update(search_string) {
  var str_parts = search_string.split(" ");
  if (str_parts.length > 0) {
    for (var s_id in str_parts) {
      for (var id in program) {
        if (program[id]["render"] == true) {
          var match_found = false;
          if (program[id]["title"].includes(str_parts[s_id]) == true) {
            match_found = true;
          }
          if (program[id]["authors"].includes(str_parts[s_id]) == true) {
            match_found = true;
          }
          if (program[id]["abstract"].includes(str_parts[s_id]) == true) {
            match_found = true;
          }
          if (program[id]["track"].includes(str_parts[s_id]) == true) {
            match_found = true;
          }
          for (var k_id in program[id]["keywords"]) {
            if (
              program[id]["keywords"][k_id].includes(str_parts[s_id]) == true
            ) {
              match_found = true;
            }
          }
          for (var k_id in program[id]["topics"]) {
            if (program[id]["topics"][k_id].includes(str_parts[s_id]) == true) {
              match_found = true;
            }
          }
          if (match_found != true) {
            program[id]["render"] = false;
          }
        }
      }
    }
  }
  render();
}

function render() {
  str = "";
  for (var id in program) {
    element = program[id];
    if (element["render"] == true) {
      str += '<div class="accordion-item">';
      str += '<h2 class="accordion-header" id=' + element["id"] + ">";
      str +=
        '          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">';
      str += element["title"];
      str += "</button> </h2>";
      str +=
        '    <div id="flush-collapse' +
        element["id"] +
        '" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">';
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

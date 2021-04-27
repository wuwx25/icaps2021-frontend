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
function reset_program() {
  for (var id in program) {
    program[id]["render"] = true;
  }
}
function update(search_string) {
  var str_parts = search_string.toLowerCase().split(" ");
  reset_program();

  if (str_parts.length > 0) {
    for (var s_id in str_parts) {
      for (var id in program) {
        if (program[id]["render"] == true) {
          var match_found = false;
          if (
            program[id]["title"].toLowerCase().includes(str_parts[s_id]) == true
          ) {
            match_found = true;
          }
          if (
            program[id]["authors"].toLowerCase().includes(str_parts[s_id]) ==
            true
          ) {
            match_found = true;
          }
          if (
            program[id]["abstract"].toLowerCase().includes(str_parts[s_id]) ==
            true
          ) {
            match_found = true;
          }
          if (
            program[id]["track"].toLowerCase().includes(str_parts[s_id]) == true
          ) {
            match_found = true;
          }
          for (var k_id in program[id]["keywords"]) {
            if (
              program[id]["keywords"][k_id]
                .toLowerCase()
                .includes(str_parts[s_id]) == true
            ) {
              match_found = true;
            }
          }
          for (var k_id in program[id]["topics"]) {
            if (
              program[id]["topics"][k_id]
                .toLowerCase()
                .includes(str_parts[s_id]) == true
            ) {
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
      str +=
        '<h2 class="accordion-header" id=flush-heading' + element["id"] + ">";
      str +=
        '          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse' +
        element["id"] +
        '" aria-expanded="false" aria-controls="flush-collapseOne">';
      str += element["title"];
      str += "</button> </h2>";
      str +=
        '    <div id="flush-collapse' +
        element["id"] +
        '" class="accordion-collapse collapse" aria-labelledby="flush-heading' +
        element["id"] +
        '" data-bs-parent="#accordionProgram">';
      str += '      <div class="accordion-body">';
      str +=
        '       <span class="badge bg-dark">' +
        element["track"] +
        "</span><br/>";
      str +=
        "        <p><strong>Abstract: </strong>" + element["abstract"] + "</p>";
      author_str = element["authors"].join();

      str += "        <p><strong>Authors: </strong>" + author_str + "</p>";

      keyword_str = element["keywords"].join();
      topic_str = element["topics"].join();

      str += "        <p><strong>Keywords:  </strong>" + keyword_str + "</p>";
      str += "        <p><strong>Topics: </strong>" + topic_str + "</p>";

      str += "      </div>";
      str += "    </div>";
      str += "  </div>";
    }
  }

  var accordion = document.getElementById("accordionProgram");
  accordion.innerHTML = str;
}

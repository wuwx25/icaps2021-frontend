$(document).on("change", ".toggle-viz", function (event) {
  if ($(this).attr("id") === "btnradio1") {
    $("#accordionPaperList").removeClass("d-none");
    $("#canvas").addClass("d-none");
  } else {
    $("#accordionPaperList").addClass("d-none");
    $("#canvas").removeClass("d-none");
  }
});

$(document).on("click", ".list-group-keyword", function (event) {
  if ($(this).hasClass("active")) {
    $(this).removeClass("active");
  } else {
    $(this).addClass("active");
  }
});

$(document).on("click", ".dropdown-item-track", function (event) {
  $("#select-track").text($(this).attr("name"));
});

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
  xmlhttp.open("GET", "./assets/data/program.json", true);
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
          for (var k_id in program[id]["authors"]) {
            if (
              program[id]["authors"][k_id]
                .toLowerCase()
                .includes(str_parts[s_id]) == true
            ) {
              match_found = true;
            }
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
  keyword_template_str = `<span class="badge bg-secondary">@INDIV_KEYWORD@</span>`;
  template_str = `
                <div class="accordion-item mb-1">
                    <h2 class="accordion-header" id="flush-heading@ID@">
                      <button
                        class="accordion-button accordion-header-item collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapse@ID@"
                      >
                        @TITLE@
                      </button>
                    </h2>
                    <div
                      id="flush-collapse@ID@"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionPaperList"
                    >
                      <div class="accordion-body">
                        <div class="mb-3">
                          @KEYWORD@
                        </div>
                        <p class="mb-2">
                          <b>Authors: </b>
                          @AUTHOR_STR@
                        </p>
                        <p>
                          <b>Abstract: </b>
                          @ABSTRACT@
                        </p>
                        <button type="button" class="btn btn-dark btn-sm">
                          PDF
                        </button>
                      </div>
                    </div>
                  </div>
                 `;
  str = "";
  for (var id in program) {
    element = program[id];
    keyword_str = "";
    if (element["render"] == true) {
      for (var k in e) {
        keyword_str += keyword_template_str.replaceAll(
          "@INDIV_KEYWORD@",
          element["keywords"][k]
        );
      }
      str = template_str
        .replaceAll("@ID@", element["id"])
        .replaceAll("@TITLE@", element["title"])
        .replaceAll("@KEYWORD@", keyword_str)
        .replaceAll("@AUTHOR_STR@", element["authors"].join(","))
        .replaceAll("@ABSTRACT@", element["abstract"]);
    }
  }

  var accordion = document.getElementById("accordionPaperList");
  accordion.innerHTML = str;
}

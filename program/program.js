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
var keyword_filter;
var keyword_cnt;
function initialize() {
  keyword_filter = [];
  program = [];
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = JSON.parse(this.responseText);
      for (var id in myObj) {
        program.push(myObj[id]);
        program[id]["render"] = true;
        program[id]["render_track"] = true;
      }
      update_keyword_count();
      render_paper_list();
    }
  };
  xmlhttp.open("GET", "./assets/data/program.json", true);
  xmlhttp.send();
}

function reset_program() {
  for (var id in program) {
    program[id]["render"] = true;
  }
  update_keyword_count();
}

function reset_track_program() {
  for (var id in program) {
    program[id]["render_track"] = true;
  }
  update_keyword_count();
  render_paper_list();
}

function render_with_topics(track) {
  for (var id in program) {
    if (program[id]["track"] == track) {
      program[id]["render_track"] = true;
    } else {
      program[id]["render_track"] = false;
    }
  }
  update_keyword_count();
  render_paper_list();
}

function update_keyword_count() {
  keyword_cnt = {};
  for (var id in program) {
    if (program[id]["render"] == true && element["render_track"] == true) {
      for (tpc in program[id]["topics"]) {
        if (tpc in keyword_cnt) {
          keyword_cnt[tpc] += 1;
        } else {
          keyword_cnt[tpc] = 1;
        }
      }
    }
  }
  for (var id in program) {
    if (program[id]["render"] == true) {
      if (keyword_filter.length > 0) {
        keyword_match_found = false;
        for (var keywrd_id in keyword_filter) {
          var keywrd = keyword_filter[keywrd_id];

          for (var k_id in program[id]["keywords"]) {
            if (program[id]["keywords"][k_id].toLowerCase() == keywrd) {
              keyword_match_found = true;
            }
          }
        }
        if (keyword_match_found != true) {
          program[id]["render"] = false;
        }
      }
    }
  }
}

function update(search_string) {
  var str_parts = search_string.toLowerCase().split(" ");
  reset_program();
  if (str_parts.length > 0) {
    for (var s_id in str_parts) {
      for (var id in program) {
        if (program[id]["render"] == true) {
          var keyword_match_found = false;
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
          if (keyword_filter.length > 0) {
            keyword_match_found = false;
            for (var keywrd_id in keyword_filter) {
              var keywrd = keyword_filter[keywrd_id];

              for (var k_id in program[id]["keywords"]) {
                if (program[id]["keywords"][k_id].toLowerCase() == keywrd) {
                  keyword_match_found = true;
                }
              }
            }
            if (keyword_match_found != true) {
              program[id]["render"] = false;
            }
          }
        }
      }
    }
  }
  update_keyword_count();
  render_paper_list();
  render_keyword_columns();
}

function render_paper_list() {
  keyword_template_str = `<label><span class="badge bg-secondary">@INDIV_KEYWORD@</span>&nbsp;</label>`;
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
                          PDF - Will be added soon
                        </button>
                      </div>
                    </div>
                  </div>
                 `;
  str = "";
  for (var id in program) {
    element = program[id];
    keyword_str = "";
    if (element["render"] == true && element["render_track"] == true) {
      for (var k in element["keywords"]) {
        keyword_str += keyword_template_str.replaceAll(
          "@INDIV_KEYWORD@",
          element["keywords"][k]
        );
      }
      str += template_str
        .replaceAll("@ID@", element["UID"])
        .replaceAll("@TITLE@", element["title"])
        .replaceAll("@KEYWORD@", keyword_str)
        .replaceAll("@AUTHOR_STR@", element["authors"].join(","))
        .replaceAll("@ABSTRACT@", element["abstract"]);
    }
  }

  var accordion = document.getElementById("accordionPaperList");
  accordion.innerHTML = str;
}

function update_paper_list_for_topics() {
  keyword_filter = [];
  for (var keyword in keyword_cnt) {
    if (keyword_cnt[keyword] > 0) {
      keyword_anchor = document.getElementById("KEYWORD_" + keyword);
      is_active = false;
      for (var cid in keyword_anchor.classList) {
        if (a.classList[k] == "active") {
          is_active = true;
        }
      }
      keyword_filter.push(keyword);
    }
  }
}

function render_keyword_columns() {
  topics_str = `
                <a
                    href="javascript:update_paper_list_for_topics()"
                    class="list-group-item list-group-keyword list-group-item-action d-flex justify-content-between align-items-start"
                    id="KEYWORD_@TPC@"
                  >
                    @TPC@
                    <span class="badge bg-secondary rounded-pill">@CNT@</span>
                  </a>
                 `;
  str = "";
  for (var tpc in keyword_cnt) {
    str += topics_str
      .replaceAll("@TPC@", tpc)
      .replaceAll("@CNT@", topics_str[tpc]);
  }

  var column = document.getElementById("Keyword_column");
  column.innerHTML = str;
}

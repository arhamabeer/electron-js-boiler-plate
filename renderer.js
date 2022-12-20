window.addEventListener("DOMContentLoaded", () => {
  var value = document.getElementById("value_id");
  let btns = document.querySelectorAll(".btn-click");

  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      switch (e.target.getAttribute("data-type")) {
        case "sub":
          value.textContent = value.textContent - 1;
          break;
        case "add":
          value.textContent = parseInt(value.textContent) + 1;
          break;
      }
    });
  });
});

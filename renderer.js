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

//! 2nd Commit

const information = document.getElementById("info");
information.innerText = `This app is using Chrome (v${pkg_vers.chrome()}), Node.js (v${pkg_vers.node()}), and Electron (v${pkg_vers.electron()})`;

const ipcCheck = async () => {
  const response = await pkg_vers.hello();
  console.log(response);
};
ipcCheck();

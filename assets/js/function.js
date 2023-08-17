const btnScrollTop = document.querySelector("#scroll_to_top");
// const teamItem = document.querySelectorAll(".team_grid-item");
// const teamDialog = document.querySelector("#team_dialog");
// const teamDialogCloseBtn = document.querySelector("#dialog_close-btn");

btnScrollTop.onclick = () => {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
// teamItem.forEach((t) => {
//   t.addEventListener("click", () => {
//     teamDialog.showModal();
//   });
// });
// teamDialogCloseBtn.onclick = () => teamDialog.close();

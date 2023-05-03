// Lấy chuỗi truy vấn
const queryString = window.location.search;
console.log(queryString);
// khởi tạo một đối tượng "UrlSearchParams" mới
const urlParams = new URLSearchParams(queryString);
//
const project = urlParams.get("project");
console.log(project);
//
if (project === "resume") {
  let all = document.querySelectorAll(".resume");
  all.forEach((item) => {
    item.classList.remove("d-none");
  });
} else if (project === "football") {
  let all = document.querySelectorAll(".football");
  all.forEach((item) => {
    item.classList.remove("d-none");
  });
} else if (project === "follow") {
  let all = document.querySelectorAll(".follow");
  all.forEach((item) => {
    item.classList.remove("d-none");
  });
}

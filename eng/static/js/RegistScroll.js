document.getElementById("regist_scroll").addEventListener("click", function() {
    const target = document.querySelector(".forum-regist .items");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
  
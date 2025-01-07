const dark = document.getElementById("dark");

dark.onclick = function () {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    dark.src = "assets/sun.png";
  } else {
    dark.src = "assets/moon.png";
  }
};

const gallery = document.querySelector(".img-gallery");
const thumbnail = document.querySelector(".thumbnail");
const option = document.querySelectorAll(".option");

gallery.addEventListener("click", function (e) {
  if (e.target.className == "option") {
    thumbnail.src = e.target.src;
    thumbnail.classList.add("fade-transition");
    setTimeout(function () {
      jumbo.classList.remove("fade-transition");
    }, 500);

    option.forEach(function (option) {
      option.className = "option";
    });

    e.target.classList.add("active");
  }
});

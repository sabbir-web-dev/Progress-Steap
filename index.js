const cercles = document.querySelectorAll(".cercle");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const progress = document.querySelector(".progress");

var count = 1;

next.addEventListener("click", () => {
  count++;
  if (count > cercles.length) {
    count = cercles.length;
  }
  update();
});

prev.addEventListener("click", () => {
  count--;
  if (count === 1) {
    count = 1;
  }
  update();
});

const update = () => {
  cercles.forEach((cercle, index) => {
    if (index < count) {
      cercle.classList.add("active");
    } else {
      cercle.classList.remove("active");
    }
  });
  const active = document.querySelectorAll(".active");

  progress.style.width =
    ((active.length - 1) / (cercles.length - 1)) * 100 + "%";

    if(count === 1){
      prev.disabled = true;
    }else if (count === cercles.length){
      next.disabled = true;
    }else{
      next.disabled = false;
      prev.disabled = false;
    }
};

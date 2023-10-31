let balls = document.getElementsByClassName("ball");
let eye = document.getElementsByClassName("eye");

document.onmousemove = function (e) {
  let x   = (e.clientX * 100) / innerWidth + "%";
  let y  = (e.clientY * 100) / innerHeight + "%";

  for (let  i = 0; i < 2; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].style.transform   = `translate(-${x}, -${y})`;
  }

  for (let i  = 0; i  < 2; i++) {
    eye[i].addEventListener("click", (e) => {
      console.log("click");
      e.target.classList.add("close-eye");
      console.log(`${e.target.classList}`);
    });
  }

  console.log("innerWidth: ", innerWidth);
  console.log("innerHeight: ", innerHeight);
  console.log("x = ", x);
  console.log("y = ", y);
};

array.forEach((element, index) => {});

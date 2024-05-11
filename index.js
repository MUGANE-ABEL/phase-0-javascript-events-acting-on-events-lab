// Your code here

const dodger = document.getElementById("dodger");

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
  if (e.key === "ArrowUp") {
    moveDodgerUp();
  }
  if (e.key === "ArrowDown") {
    moveDodgerDown();
  }
  if (e.key === ",") {
    superLeft();
  }
  if (e.key === ".") {
    superRight();
  }
  if (e.key === "l") {
    centre();
  }
  });

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 25}px`;
  }
}

function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left < 360) {
    dodger.style.left = `${left + 25}px`;
  }
}

function moveDodgerUp() {
  const upNumbers = dodger.style.bottom.replace("px", "");
  const up = parseInt(upNumbers, 10);

  if (up < 380) {
    dodger.style.bottom = `${up + 25}px`;
  }
}

function moveDodgerDown() {
  const upNumbers = dodger.style.bottom.replace("px", "");
  const up = parseInt(upNumbers, 10);

  if (up > 0) {
    dodger.style.bottom = `${up - 20}px`;
  }
}

function superLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${0}px`;
  }
}

function superRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left < 360) {
    dodger.style.left = `${360}px`;
  }
}

function centre() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  dodger.style.left = `${180}px`;
}


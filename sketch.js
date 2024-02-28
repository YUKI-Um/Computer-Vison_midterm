let babyStand, babyGiggle;
let mySound;
let soundOn;

function preload() {
  babyStand = loadAni("assets/babystand1.png");
  babyGiggle = loadAni(
    "assets/baby1.png",
    "assets/baby2.png",
    "assets/baby3.png",
    "assets/baby4.png"
  );
  soundFormats("m4a");
  mySound = loadSound("assets/monster.m4a");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  soundOn = false;
}

function draw() {
  background(255);

  if (mouseIsPressed) {
    if (soundOn == false) {
      //first pressed
      mySound.play();
      soundOn = true;
    }
    animation(babyGiggle, mouseX, mouseY);
  } else {
    soundOn = false;
    mySound.pause();
    animation(babyStand, mouseX, mouseY);
  }
}

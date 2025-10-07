const img = new Image();
img.onload = function () {
  console.log(`Width: ${this.width}, Height: ${this.height}`);
};
img.src = "image.jpg"; // Provide valid image path

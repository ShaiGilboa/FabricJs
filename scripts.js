var canvas = new fabric.Canvas('c');
canvas.set({
  width: 4000,
  height: 4000,
  left:10,
})
console.log('canvas.getWidth()',canvas.getWidth())
var imgElement = document.getElementById('my-image');
var imgInstance = new fabric.Image(imgElement, {
  left: 100,
  top: 100,
  angle: 30,
  opacity: 0.85
});
canvas.add(imgInstance);

// var imgInstance = new fabric.loadSVGFromURL('./assets/sprinkle-svgrepo-com.svg',(image) => {

//   canvas.add(image);
// });
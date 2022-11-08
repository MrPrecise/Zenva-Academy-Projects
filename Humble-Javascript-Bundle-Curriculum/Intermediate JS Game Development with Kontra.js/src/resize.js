export function rezise(gameWidth, gameHeight) {
  const canvas = document.getElementById("canvas");
  const width = window.innerWidth;
  const height = window.innerHeight;
  const wRatio = width / height;
  const gRatio = gameWidth / gameHeight;

  console.log(canvas, wRatio, gRatio);

  if (gRatio < wRatio) {
    canvas.style.width = `${height * gRatio}px`;
    canvas.style.height = `${height}px`;
  } else {
    canvas.style.width = `${width}px`;
    canvas.style.height = `${width / wRatio}px`;
  }
}

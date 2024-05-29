let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(1500)
  .typeString('¡Diseñadora y Desarrolladora Web Front-End Junior!')
  .pauseFor(1500)
  .deleteChars(10)
  .start();

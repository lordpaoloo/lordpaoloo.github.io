// Initialize the Typewriter effect on the element with id 'hi'
document.addEventListener('DOMContentLoaded', () => {
  const hiElement = document.getElementById('hi');
  const typewriter = new Typewriter(hiElement, {
    loop: true,
    delay: 75,
  });

  typewriter
    .typeString('How are you?')
    .pauseFor(2000)
    .deleteAll()
    .typeString('Welcome to my site!')
    .pauseFor(2000)
    .start();
});


function changeMode(size, weight, transform, background, color) {
  return function() {
    document.body.style.fontSize = size + 'px';
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };
}

function main() {
  var spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  var darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  var screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

  var container = document.createElement('div');
  container.style.position = 'absolute';
  container.style.bottom = '10px';
  container.style.left = '10px';

  var paragraph = document.createElement('p');
  paragraph.textContent = 'Welcome Holberton!';
  container.appendChild(paragraph);

  var spookyButton = document.createElement('button');
  spookyButton.textContent = 'Spooky';
  spookyButton.addEventListener('click', spooky);
  container.appendChild(spookyButton);

  var darkModeButton = document.createElement('button');
  darkModeButton.textContent = 'Dark mode';
  darkModeButton.addEventListener('click', darkMode);
  container.appendChild(darkModeButton);

  var screamModeButton = document.createElement('button');
  screamModeButton.textContent = 'Scream mode';
  screamModeButton.addEventListener('click', screamMode);
  container.appendChild(screamModeButton);

  document.body.appendChild(container);

  var centerContainer = document.createElement('div');
  centerContainer.style.textAlign = 'center';
  centerContainer.style.marginTop = '50vh';
  centerContainer.style.transform = 'translateY(-50%)';

  var heading = document.createElement('h1');
  heading.textContent = 'YOU\'RE BROWSING AS A GUEST';
  centerContainer.appendChild(heading);
  document.body.appendChild(centerContainer);

  var anotherParagraph = document.createElement('p');
  anotherParagraph.textContent = 'This is another paragraph This is another paragraph This is another paragraph This is another paragraph.';
  centerContainer.appendChild(anotherParagraph);

  var learnMore = document.createElement('p');
  learnMore.textContent = 'Learn more';
  learnMore.style.marginTop = '20px';
  learnMore.style.color = 'blue';
  centerContainer.appendChild(learnMore);

  document.body.appendChild(centerContainer);

}

main();
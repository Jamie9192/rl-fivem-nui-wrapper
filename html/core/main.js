const navBarDiv = document.getElementById('navbar');

pages.forEach(page => {
  navBarDiv.innerHTML += page.draw();
});

pages.length > 0 && changePage(defaultPage);

window.addEventListener('message', (event) => {
  const { type, data } = event.data;
  const nuiType = nuiTypes.find(nuiType => nuiType.type === type);

  if (nuiType) {
    nuiType.callback(data);
  } else {
    console.error('Invalid NUI type received: ' + type + '! Make sure to add it to core/config.js');
  }
});

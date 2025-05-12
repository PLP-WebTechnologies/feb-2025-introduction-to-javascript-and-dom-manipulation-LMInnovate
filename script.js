document.getElementById('changeTextBtn').addEventListener('click', () => {
    const title = document.getElementById('main-title');
    title.textContent = 'DOM Magic Activated!';
    title.classList.add('text-changed');
  
    setTimeout(() => {
      title.classList.remove('text-changed');
    }, 1500);
  });
  
  document.getElementById('changeStyleBtn').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const desc = document.getElementById('description');
    desc.classList.toggle('highlight');
  });
  
  document.getElementById('addItemBtn').addEventListener('click', () => {
    const list = document.getElementById('itemList');
    const newItem = document.createElement('li');
    const itemNumber = list.children.length + 1;
    newItem.textContent = `Item ${itemNumber}`;
    newItem.className = 'list-item fade-in';
    list.appendChild(newItem);
  });
  
  document.getElementById('removeItemBtn').addEventListener('click', () => {
    const list = document.getElementById('itemList');
    const lastItem = list.lastElementChild;
    if (lastItem) {
      lastItem.classList.add('fade-out');
      setTimeout(() => list.removeChild(lastItem), 500);
    }
  });
  
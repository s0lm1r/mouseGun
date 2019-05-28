'use strict';

document.addEventListener('click', (event) => {  /*I know right now we can do without argument "event" 
  but this way my code more readable, as I think*/  
  const removedElement = document.elementFromPoint(event.clientX, event.clientY);
  removedElement.remove();
  });


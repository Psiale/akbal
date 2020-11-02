const htmlElement = (element, elementId, elementClass = '') => {
  const newElement = document.createElement(element);
  newElement.id = elementId;
  if (elementClass !== '') newElement.classList.add(elementClass);
  return newElement;
};

const iconGenerator = (iconClass) => {
    const element = document.createElement('p')
    const icon = document.createElement('i');
    icon.classList.add('fas');
    icon.classList.add(iconClass);
    element.append(icon);
    return element;
}

export {
  htmlElement,
}

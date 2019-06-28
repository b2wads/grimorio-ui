// https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f
// https://stackoverflow.com/questions/34045777/copy-to-clipboard-using-javascript-in-ios

const createFake = value => {
  const fakeElem = document.createElement('textarea');
  fakeElem.value = value;
  fakeElem.setAttribute('readonly', '');
  fakeElem.style.position = 'absolute';
  fakeElem.style.left = '-9999px';

  return fakeElem;
};

export const copyToClipboard = ({ value, success, error }) => {
  let selected;
  const fakeElem = createFake(value);
  document.body.appendChild(fakeElem);

  // handle iOS as a special case
  if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
    // save current contentEditable/readOnly status
    const { contentEditable, readOnly } = fakeElem;

    // convert to editable with readonly to stop iOS keyboard opening
    fakeElem.contentEditable = true;
    fakeElem.readOnly = true;

    // create a selectable range
    const range = document.createRange();
    range.selectNodeContents(fakeElem);

    // select the range
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    fakeElem.setSelectionRange(0, 999999);

    // restore contentEditable/readOnly to original state
    fakeElem.contentEditable = contentEditable;
    fakeElem.readOnly = readOnly;
  } else {
    selected = document.getSelection().rangeCount > 0 // Check if there is any content selected previously
      ? document.getSelection().getRangeAt(0) // Store selection if found
      : false; // Mark as false to know no selection existed before

    fakeElem.select();
  }

  try {
    document.execCommand('copy'); // Copy - only works as a result of a user action (e.g. click events)
    success && success();
  } catch (err) {
    error && error(err);
  }

  document.body.removeChild(fakeElem);

  if (selected) {
    // If a selection existed before copying
    document.getSelection().removeAllRanges(); // Unselect everything on the HTML document
    document.getSelection().addRange(selected); // Restore the original selection
  }
};

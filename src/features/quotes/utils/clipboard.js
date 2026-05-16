export function copyTextToClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(text);
  }

  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'absolute';
  textarea.style.left = '-9999px';
  document.body.appendChild(textarea);

  const selection = document.getSelection();
  const selectedRange =
    selection && selection.rangeCount > 0 ? selection.getRangeAt(0) : null;

  textarea.select();
  textarea.setSelectionRange(0, textarea.value.length);

  let successful;
  try {
    successful = document.execCommand('copy');
  } catch {
    successful = false;
  }

  document.body.removeChild(textarea);
  if (selectedRange && selection) {
    selection.removeAllRanges();
    selection.addRange(selectedRange);
  }

  return successful
    ? Promise.resolve()
    : Promise.reject(new Error('copy failed'));
}

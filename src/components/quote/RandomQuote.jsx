import * as React from 'react';
import { useRandomQuote } from '../../hooks/use-random-quote';
import './RandomQuote.css';

function RandomQuote() {
  const { quote, isLoading, error, fetchRandomQuotes } = useRandomQuote();
  const [copyStatus, setCopyStatus] = React.useState('');

  React.useEffect(() => {
    if (!copyStatus) {
      return undefined;
    }

    const timeout = window.setTimeout(() => {
      setCopyStatus('');
    }, 2000);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [copyStatus]);

  function copyTextToClipboard(text) {
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

    let successful = false;
    try {
      successful = document.execCommand('copy');
    } catch (error) {
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

  async function handleCopyQuote() {
    if (!quote) {
      return;
    }

    try {
      await copyTextToClipboard(quote);
      setCopyStatus('Quote copied!');
    } catch (error) {
      setCopyStatus('Unable to copy quote.');
    }
  }

  return (
    <section className="card">
      <h2 className="hero">Random Quote</h2>
      <p
        className={quote ? 'quote quote-clickable' : 'quote'}
        onClick={handleCopyQuote}
        title={quote ? 'Click to copy quote' : ''}
      >
        {isLoading
          ? 'Loading...'
          : quote || 'Press the button to fetch a new quote.'}
      </p>
      {copyStatus && <p className="copy-status">{copyStatus}</p>}
      {error && <p className="error">Error: {error}</p>}
      <button className="button" onClick={fetchRandomQuotes}>
        Fetch Random Quote
      </button>
    </section>
  );
}

export default RandomQuote;

import * as React from 'react';
import Button from '@/shared/components/Button';
import Card from '@/shared/components/Card';
import { useRandomQuote } from '@/features/quotes/hooks/useRandomQuote';
import { copyTextToClipboard } from '@/features/quotes/utils/clipboard';
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

  async function handleCopyQuote() {
    if (!quote) {
      return;
    }

    try {
      await copyTextToClipboard(quote);
      setCopyStatus('Quote copied!');
    } catch {
      setCopyStatus('Unable to copy quote.');
    }
  }

  return (
    <Card>
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
      <Button onClick={fetchRandomQuotes} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Fetch Random Quote'}
      </Button>
    </Card>
  );
}

export default RandomQuote;

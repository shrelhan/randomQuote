import * as React from 'react';

export function useRandomQuote() {
  const [quote, setQuote] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  async function fetchRandomQuotes() {
    setIsLoading(true);
    setError('');
    try {
      const response = await fetch('https://dummyjson.com/quotes');
      const { quotes } = await response.json();
      if (quotes && quotes.length > 0) {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex].quote);
      }
    } catch (error) {
      console.log(error);
      setError('Failed to fetch quote');
    } finally {
      setIsLoading(false);
    }
  }
  return {
    quote,
    fetchRandomQuotes,
    isLoading,
    error,
  };
}

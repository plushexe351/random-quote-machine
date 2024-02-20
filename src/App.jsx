// App.jsx
import React, { useEffect, useState } from "react";
import { FaTwitter, FaQuoteLeft } from "react-icons/fa";
import quoteList from "./quoteList";
import "./App.scss";

function App() {
  const [newRandomColor, setNewRandomColor] = useState("");
  const [fade, setFade] = useState(true);
  const [quoteAuthor, setQuoteAuthor] = useState("");
  const [quoteText, setQuoteText] = useState("");

  const getNewQuote = () => {
    const quote = quoteList[Math.floor(Math.random() * quoteList.length)];

    setNewRandomColor(
      `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
        Math.random() * 255
      )},${Math.floor(Math.random() * 255)})`
    );

    setFade(false);
    setTimeout(() => {
      setFade(true);
      setQuoteAuthor(quote.author);
      setQuoteText(quote.quote);
    }, 500);
  };

  const handleClick = () => {
    console.log(quoteAuthor);
    getNewQuote();
  };

  useEffect(() => {
    getNewQuote();
  }, []);

  const tweetIntentUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `"${quoteText}" - ${quoteAuthor}`
  )}`;

  return (
    <div className="App" style={{ backgroundColor: newRandomColor }}>
      <blockquote id="quote-box">
        <div
          id="text"
          className={fade ? "fade-in" : "fade-out"}
          style={{ color: newRandomColor }}
        >
          <FaQuoteLeft
            className="quoteLogo"
            style={{ color: newRandomColor }}
          />{" "}
          {quoteText}
        </div>
        <div
          id="author"
          className={fade ? "fade-in" : "fade-out"}
          style={{ color: newRandomColor }}
        >
          {" "}
          - {quoteAuthor}
        </div>
        <button
          id="new-quote"
          onClick={handleClick}
          style={{ backgroundColor: newRandomColor }}
        >
          New quote
        </button>
        <a
          href={tweetIntentUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="tweet-code"
          style={{ backgroundColor: newRandomColor }}
        >
          <FaTwitter />
        </a>
      </blockquote>
      <a
        href="https://github.com/plushexe351"
        target="_blank"
        rel="noopener noreferrer"
        id="creator"
      >
        by Ushnish
      </a>
    </div>
  );
}

export default App;

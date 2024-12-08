import React, { useState, useEffect } from "react";
import { Tweet as EmbeddedTweet } from "react-tweet";
import s from "./Tweet.module.css";

function Tweet() {
  const [inputValue, setInputValue] = useState("");
  const [tweetId, setTweetId] = useState("");

  const extractTweetId = (urlOrId) => {
    const tweetIdMatch = urlOrId.match(/(\d{10,})$/);
    return tweetIdMatch ? tweetIdMatch[0] : "";
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      const id = extractTweetId(inputValue);
      if (id) {
        setTweetId(id);
      } else {
        setTweetId("");
      }
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue]);

  return (
    <div className={s.container}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter tweet URL or ID"
        className={s.input}
      />
      {tweetId && <EmbeddedTweet id={tweetId} />}
    </div>
  );
}

export default Tweet;

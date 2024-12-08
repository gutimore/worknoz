import Tweet from "./Tweet";
import s from "./App.module.css";

function App() {
  return (
    <div className={s.tweetContainer}>
      <Tweet />
    </div>
  );
}

export default App;

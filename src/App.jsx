import ReactDOM from "react-dom";
import SearchParam from "./SearchParam";
const App = () => {
  return (
    <div onClick={() => {}}>
      <h1>Adopt Me!</h1>
      <SearchParam />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

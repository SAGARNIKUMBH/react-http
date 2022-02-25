import logo from "./logo.svg";
import "./App.css";
import PostList from "./Components/PostList";
import PostForm from "./Components/PostForm";
import AssignPostForm from "./Components/AssignPostFrom";
import ValueFrom from "./Components/ValueFrom";
import HelloShow from "./Components/HelloShow";

function App() {
  return (
    <div className="App">
      <HelloShow />
      <ValueFrom />
      {/* <AssignPostForm /> */}
      {/* <PostForm /> */}
      {/* <PostList /> */}
    </div>
  );
}

export default App;

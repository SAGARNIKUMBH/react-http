import logo from "./logo.svg";
import "./App.css";
import PostList from "./Components/PostList";
import PostForm from "./Components/PostForm";
import AssignPostForm from "./Components/AssignPostFrom";

function App() {
  return (
    <div className="App">
      <AssignPostForm />
      {/* <PostForm /> */}
      {/* <PostList /> */}
    </div>
  );
}

export default App;

// import { applyMiddleware } from "redux";
import PostItem from "./components/PostItem";
import { fetchPost, addPost, editPost, deletePost } from "./store";
import { connect } from "react-redux";

function App({ posts, fetchPost, editPost, addPost, deletePost }) {
  const renderedPostItem = posts.posts.map((post, id) => {
    return (
      <PostItem
        key={id}
        title={post.title}
        body={post.body}
        onEdit={() => editPost(post.id)}
        onDelete={() => deletePost(post.id)}
      />
    );
  });

  return (
    <div className="container ">
      <h1 className="title">Welcome to post Listing with Redux</h1>
      <div className="buttons">
        <button onClick={addPost} className="button is-info">
          Add Post
        </button>
        <button onClick={fetchPost} className="button is-warning">
          Reload
        </button>
      </div>
      {posts.error && posts.error}
      {posts.isLoading ? "Loading..." : renderedPostItem}
    </div>
  );
}
const mapStateToProps = ({ posts }) => {
  return { posts };
};

export default connect(mapStateToProps, { fetchPost, addPost, editPost, deletePost })(App);

import React from "react";
import { useEffect, useState } from "react";
import { getPosts, createPost, updatePost, deletePost } from "./fetchApi";
import Postcard from "../components/Postcard";
function Fetch() {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = { title, body, id: Date.now() };
    //res\cored - index data[index][title]=newtitle,
    if (editId) {
      updatePost(editId, post)
        .then((updatedPost) => {
          setData((prevData) =>
            prevData.map((item) => (item.id === editId ? updatedPost : item))
          );
          setTitle("");
          setBody("");
          setEditId(null);
        })
        .catch((error) => {
          console.error("Error updating post:", error);
        });
    } else {
      createPost(post)
        .then(() => {
          setData((prevData) => [...prevData, post]);
          setTitle("");
          setBody("");
        })
        .catch((error) => {
          console.error("Error creating post:", error);
        });
    }
  };
  console.log(data);
  // Function to set up editing for a specific post
  const handleEdit = (post) => {
    setEditId(post.id);
    setTitle(post.title);
    setBody(post.body);
  };

  // Corrected handleDelete function
  const handleDelete = (post) => {
    deletePost(post.id)
      .then(() => {
        setData((prevData) => prevData.filter((item) => item.id !== post.id));
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
      });
  };

  // Fetch posts when the component mounts
  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();
      setData(posts);
    };

    fetchPosts();
  }, []);
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="mb-4 mt-5 pt-10 px-20 flex justify-center items-center flex-col"
      >
        <input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="border p-2 mb-2 w-full"
        />
        <textarea
          placeholder="Post Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          className="border p-2 mb-2 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 mt-3">
          {editId ? "Save Changes" : "Add Post"}
        </button>
      </form>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-6">
        {data.length > 0 ? (
          data.map((post) => (
            <Postcard
              key={post.id}
              title={post.title}
              body={post.body}
              onEdit={() => handleEdit(post)}
              onDelete={() => handleDelete(post)}
            />
          ))
        ) : (
          <p>No data</p>
        )}
      </div>
    </div>
  );
}

export default Fetch;

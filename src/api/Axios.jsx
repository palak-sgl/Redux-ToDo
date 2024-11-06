import axios from "axios";
import { useEffect, useState } from "react";
import Postcard from "../components/Postcard";

export const Axios = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [editId, setEditId] = useState(null);
  const API = "https://jsonplaceholder.typicode.com/posts";

  const getData = async () => {
    try {
      const res = await axios.get(API);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      title,
      body,
      id: Date.now(),
    };

    try {
      if (editId) {
        setData((prevData) =>
          prevData.map((item) => (item.id === editId ? newPost : item))
        );
        setEditId(null);
      } else {
        setData((prevData) => [...prevData, newPost]);
      }
      setTitle("");
      setBody("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (post) => {
    setEditId(post.id);
    setTitle(post.title);
    setBody(post.body);
  };

  const handleDelete = (post) => {
    try {
      setData((prevData) => prevData.filter((item) => item.id !== post.id));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="mb-4 mt-5 pt-10 px-20 flex justify-center items-center flex-col"
      >
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="border p-2 mb-2 w-full"
        />
        <textarea
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          className="border p-2 mb-2 w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 my-3 rounded-md"
        >
          {editId ? "Save Changes" : "Add Post"}
        </button>
      </form>
      <ul className="grid grid-cols-4 gap-3 px-10">
        {data &&
          data.map((item) => (
            <Postcard
              key={item.id}
              title={item.title}
              body={item.body}
              onEdit={() => handleEdit(item)}
              onDelete={() => handleDelete(item)}
            />
          ))}
      </ul>
    </div>
  );
};

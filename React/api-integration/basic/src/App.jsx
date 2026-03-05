import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [post, setPost] = useState(null);

  useEffect(() => {

    async function getPost() {

      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/1"
      );

      setPost(response.data);

    }

    getPost();

  }, []);

  return (
    <div>
      <h1>Post</h1>
      {post && <p>{post.title}</p>}
    </div>
  );
}
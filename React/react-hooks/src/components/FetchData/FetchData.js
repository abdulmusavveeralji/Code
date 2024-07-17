import axios from "axios";
import React, { useEffect, useState } from "react";

function FetchData() {
  const [id, setId] = useState(1);
  const [post, setPost] = useState(null);
  const [isButtonClicked, setIsButtonClicked] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch((error) => console.log(error));
  }, [isButtonClicked]);

  const fetchData = () => {
    setIsButtonClicked(id);
  };
  return (
    <div>
      <input value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={fetchData}>Fetch Data</button>

      <p>{post?.title}</p>
    </div>
  );
}

export default FetchData;

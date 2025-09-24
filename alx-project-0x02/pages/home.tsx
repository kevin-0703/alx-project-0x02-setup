import React from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { useState } from "react";

interface Post {
  title: string;
  content: string;
}

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  const handleAddPost = (post: Post) => {
    setPosts((prev) => [...prev, post]);
  };
  return (
    <>
      <h1>Welcome to home page</h1>
      <Card title="card title" content="card content" />
      <button onClick={() => setIsModalOpen(true)}>Add new post</button>
      <div>
        {posts.length === 0 ? (
          <p>No posts available, Add post</p>
        ) : (
          posts.map((post, idx) => (
            <div key={idx}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </div>
          ))
        )}
      </div>
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />
    </>
  );
};

export default HomePage;

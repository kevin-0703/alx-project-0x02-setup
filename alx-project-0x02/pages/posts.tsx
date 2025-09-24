import React from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { useState, useEffect } from "react";
import { type PostProps } from "@/interfaces";
const Posts = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      const data = await response.json();
      const formattedPosts: PostProps[] = data.map((post: any) => ({
        title: post.title,
        content: post.body,
        userID: post.userId,
      }));
      setPosts(formattedPosts);
    };
    fetchPosts();
  }, []);
  return (
    <>
      <Header />
      <h1>Welcome to posts page</h1>
      <p>This is the posts page.</p>
      <div>
        {posts.length === 0 ? (
          <p>posts loading ....</p>
        ) : (
          posts.map((post, idx) => (
            <PostCard
              key={idx}
              title={post.title}
              content={post.content}
              userID={post.userID}
            />
          ))
        )}
      </div>
    </>
  );
};
export default Posts;

import React from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { type PostProps } from "@/interfaces";

export interface PostsPageProps {
  posts: PostProps[];
}
const Posts: React.FC<PostsPageProps> = ({ posts }) => {
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
              userId={post.userId}
            />
          ))
        )}
      </div>
    </>
  );
};
export default Posts;

export async function getStaticProps() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  const data = await response.json();

  const posts: PostProps[] = data.map((post: any) => ({
    title: post.title,
    content: post.body,
    userId: post.userId,
  }));
  return {
    props: {
      posts,
    },
  };
}

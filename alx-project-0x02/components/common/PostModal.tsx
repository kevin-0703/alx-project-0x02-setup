import { Content } from "next/font/google";
import { useState } from "react";
import React from "react";

interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { title: string; content: string }) => void;
}

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) return;
    onSubmit({ title, content });
    setTitle("");
    setContent("");
    onClose();
  };
  return (
    <div>
      <div>
        <h2>create post</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={onClose}
              className="span-1 hover:bg-white"
            >
              cancel
            </button>
            <button type="submit" className="span-1 hover:bg-amber-950">
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default PostModal;

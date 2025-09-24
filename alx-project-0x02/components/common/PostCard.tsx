import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userID }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md mb-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{content}</p>
      <p className="text-sm text-gray-500">User ID: {userID}</p>
    </div>
  );
};

export default PostCard;

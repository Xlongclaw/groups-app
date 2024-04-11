import PostWrapper from "@/components/posts-wrapper";
import React from "react";
import { PostContext } from "../posts-section/PostsProvider";

export default function PostsContainer(): React.JSX.Element {
  const { posts } = React.useContext(PostContext);

  return (
    <div className="d-flex flex-column gap-3">
      {posts.map((post) => (
        <PostWrapper post={post} />
      ))}
    </div>
  );
}

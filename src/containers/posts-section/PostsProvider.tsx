import allPosts from "@/constants/posts";
import { IPost } from "@/types";
import React from "react";

interface IProps {
  children: React.JSX.Element;
}

interface IPostContext {
  posts: IPost[];
  changePostsType: (postType: string) => void;
}

export const PostContext = React.createContext<IPostContext>({
  posts: [],
  changePostsType: () => {},
});

export default function PostsProvider({ children }: IProps) {
  const [posts, setPosts] = React.useState<IPost[]>(allPosts);

  const changePostsType = (postType: string) => {
    if (postType === "All Posts") {
        setPosts(allPosts)
    } else {
      const filteredPosts = allPosts.filter(
        (post) => post.type === postType.toLowerCase()
      );
      setPosts(filteredPosts);
    }
  };

  return (
    <PostContext.Provider value={{ posts: posts, changePostsType }}>
      {children}
    </PostContext.Provider>
  );
}

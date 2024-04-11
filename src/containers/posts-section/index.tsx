import PostsNavigator from "@/components/posts-navigator";
import React from "react";
import PostsContainer from "../posts-container";
import PostsProvider from "./PostsProvider";

export default function PostsSection(): React.JSX.Element {
  return (
    <PostsProvider>
      <section className="padding-x-lg">
        <PostsNavigator />
        <div className="d-flex gap-4 mt-4">
          <div style={{ width: "65%" }} className="overflow-hidden">
            <PostsContainer />
          </div>
          <div>{/*  */}</div>
        </div>
      </section>
    </PostsProvider>
  );
}

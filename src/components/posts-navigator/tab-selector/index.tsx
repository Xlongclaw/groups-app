import { PostContext } from "@/containers/posts-section/PostsProvider";
import React from "react";

const TABS = ["All Posts", "Article", "Event", "Education", "Job"];

export default function TabSelector(): React.JSX.Element {
  const { posts, changePostsType } = React.useContext(PostContext);
  const [selected, setSelected] = React.useState<string>("All Posts");
  return (
    <div className="d-flex gap-4 align-items-end">
      {TABS.map((tab) => {
        if (selected === tab) {
          return (
            <span style={{cursor:"pointer"}} className="text-black fw-medium border-bottom border-black border-2 pb-4">
              {tab}
              {`(${posts.length})`}
            </span>
          );
        } else
          return (
            <span
            style={{cursor:"pointer"}}
              onClick={() => {
                setSelected(tab);
                changePostsType(tab);
              }}
              className="text-secondary pb-4"
            >
              {tab}
            </span>
          );
      })}
    </div>
  );
}

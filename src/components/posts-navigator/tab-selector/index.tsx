import React from "react";

const TABS = ["All Posts", "Article", "Event", "Education", "Job"];

type TabsType = "all posts" | "article" | "events" | "education" | "job";

export default function TabSelector(): React.JSX.Element {
  const [selected, setSelected] = React.useState<TabsType>("all posts");
  return (
    <div className="d-flex gap-4 align-items-end">
      {TABS.map((tab) => {
        if (selected === tab.toLowerCase()) {
            return <span className="text-black fw-medium border-bottom border-black border-2 pb-4">{tab}{`(32)`}</span>;
        }
        else return <span className="text-secondary pb-4">{tab}</span>
      })}
    </div>
  );
}

import users from "@/constants/users";
import { IPost } from "@/types";
import React from "react";

export default function PostWrapper(props: { post: IPost }): React.JSX.Element {
  return (
    <div className="w-100 border rounded-3 overflow-hidden">
      <img className="w-100" src={props.post.image} alt="" />
      <div className="p-3">
        <span className="fw-semibold">
          {props.post.type === "article"
            ? `✍️ Article`
            : props.post.type === "education"
            ? `🔬️ Education`
            : props.post.type === "event"
            ? `🗓️ ${props.post.eventType}`
            : `💼️ Job`}
        </span>
        <div className="d-flex align-items-start justify-content-between my-2">
          <span className="fw-semibold fs-4 w-75">{props.post.title}</span>
          <img className="" src="three-dot-black.png" alt="" />
        </div>
        <span className=" fs-5 w-75 text-body-tertiary">{`I’ve worked in UX for the better part of a decade. From now on, I plan to rei…`}</span>
        <div className="mt-4 d-flex justify-content-between align-items-center">
          {users
            .filter((user) => user.userName === props.post.postedBy)
            .map((user) => (
              <div className="gap-3 d-flex align-items-center fw-bold">
                <img style={{ width: 48 }} src={user.image} alt="" />
                <span className="fs-6">
                  {user.firstName} {user.lastName}
                </span>
              </div>
            ))}
          <div className="">
            <span className="mx-4">{props.post.views} views</span>
            <img
              className="bg-body-secondary p-2 rounded"
              src="share.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

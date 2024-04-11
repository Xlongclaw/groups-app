import React from "react";
import ButtonGroup from "./button-group";
import TabSelector from "./tab-selector";

export default function PostsNavigator(): React.JSX.Element {
  return (
    <div className="pt-3">
      <div className="d-flex justify-content-between mt-4 align-items-center">
        <TabSelector />
        <ButtonGroup />
      </div>
      <div style={{height:2,backgroundColor:'gray',opacity:0.2, marginTop:-3}}></div>
    </div>
  );
}

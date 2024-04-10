import React from "react";
import CreateAccButton from "@components/create-acc-btn";
import SearchBar from "@components/search-bar";
import Logo from "@components/logo";

export default function NavigationBar(): React.JSX.Element {
  return (
    <nav
      style={{ paddingLeft: 48, paddingRight: 48 }}
      className="d-flex align-items-center justify-content-between py-2"
    >
      <Logo/>
      <SearchBar/>
      <CreateAccButton/>
    </nav>
  );
}

import React from 'react'

export default function SearchBar():React.JSX.Element {
  return (
    <div className="d-flex align-items-center bg-body-secondary py-2 px-3 gap-2 rounded-pill">
        <img src="searchIcon.png" alt="Search Icon" />
        <input
          type="text"
          placeholder="Search for your favorite groups in ATG"
          className="fw-medium border-0 text-body-secondary"
        />
      </div>
  )
}

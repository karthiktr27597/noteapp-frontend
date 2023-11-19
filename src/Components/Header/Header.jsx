import React from 'react'
import "./Header.css"

function Header() {
    return (
        <nav className='header'>
            <div className="logo">NoteApp</div>
            <div className="searchbar">
                <input type="text"></input>
                <button>Search</button>
            </div>
            <div className="profile">Profile</div>
        </nav>
    )
}

export default Header
import React, { Component } from 'react'

export class NavBar extends Component {
  

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-success">
            <div className="container-fluid">
                <a className="navbar-brand text-light" href="/">NewsFetch</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link text-light" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-light" href="/">About</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-light" href="/">business</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-light" href="/">bntertainment</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-light" href="/">general</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-light" href="/">health</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-light" href="/">sciences</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-light" href="/">sports</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-light" href="/">technology</a>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2 text-success" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-light" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
      </div>
    )
  }
}

export default NavBar
// business entertainment general health sciences ports technology

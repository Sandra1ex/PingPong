const React = require('react');

function Header({ user }) {
  return (
    (!user ? (
      <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">PingPong</a>
          <a className="navbar-brand" href="/login">Login</a>
          <a className="navbar-brand" href="/reg">Registration</a>
        </div>
      </nav>
    ) : (
      <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">PingPong</a>
          <a className="navbar-brand" href="/logout">Profile</a>
          <a className="navbar-brand" href="/logout">Logout</a>
        </div>
      </nav>
    ))
  );
}

module.exports = Header;

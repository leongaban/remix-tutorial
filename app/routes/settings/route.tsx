import { Link, Outlet } from '@remix-run/react';

export default function Settings() {
  return (
    <div>
      <h1>Settings</h1>
      <p>This is the Settings page</p>
      <nav>
        <Link to="app">App</Link>
        <br />
        <Link to="profile">Profile</Link>
        <Outlet />
      </nav>
    </div>
  );
}

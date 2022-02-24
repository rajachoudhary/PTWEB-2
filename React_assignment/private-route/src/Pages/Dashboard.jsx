import { Link, Outlet, useNavigate } from "react-router-dom";

export const Dashboard = () => {
  return (
    <div>
      <h1>Welcome to Dashboard page</h1>
      <Link to="setting">Setting</Link>
      <Outlet />
    </div>
  );
};

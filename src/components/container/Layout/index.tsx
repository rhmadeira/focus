import { Outlet } from "react-router-dom";
import Bar from "../../Bar";

export default function Layout() {
  return (
    <div>
      <Bar />
      <Outlet />
    </div>
  );
}

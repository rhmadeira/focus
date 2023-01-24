import { Outlet } from "react-router-dom";
import Bar from "../../shared/Bar";

export default function Layout() {
  return (
    <div>
      <Bar />
      <Outlet />
    </div>
  );
}

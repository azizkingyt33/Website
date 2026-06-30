import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CursorGlow from "../components/CursorGlow";

export default function MainLayout() {
  return (
    <div className="relative min-h-screen bg-bg text-ink font-body">
      <CursorGlow />
      <Navbar />
      <main className="relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

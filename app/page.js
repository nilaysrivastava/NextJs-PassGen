"use-client";
import "./globals.css";
import Land from "../components/Land";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Land />
      <Footer />
    </div>
  );
}

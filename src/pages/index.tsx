import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "./components/layouts/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div>Hello World</div>
    </div>

  );
}

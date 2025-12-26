import Image from "next/image";
import styles from "./page.module.css";
import Card from "./myComponents/card/Card";
export default function Home() {
  return (
    <div className="app">
      <Card />
    </div>
  );
}

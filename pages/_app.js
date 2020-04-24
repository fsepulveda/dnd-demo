import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";

import "../styles/index.css";
import Header from "../components/Header";

export default function MyApp({ Component, pageProps }) {
  return (
    <DndProvider backend={Backend}>
      <Header />
      <Component {...pageProps} />
      <div id="app"></div>
    </DndProvider>
  );
}

import { useState } from "react";

import { localize } from "./Translations";
import "./App.css";

function App() {
  const [lang, setLang] = useState(() => "js");

  return (
    <>
      <h1>{localize(lang, "title")}</h1>
      <h3>{localize(lang, "hello")}</h3>
      <h3 className="flag">{localize(lang, "icon")}</h3>
      <div>
        <button onClick={() => setLang("en")}>Choose English</button>
        <button onClick={() => setLang("es")}>Elige Español</button>
        <button onClick={() => setLang("jp")}>日本語を選ぶ</button>
      </div>
    </>
  );
}

export default App;

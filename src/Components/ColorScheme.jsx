import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function ColorScheme() {
  const [colorScheme, setColorScheme] = useState("dark");
  console.log(colorScheme);

  useEffect(() => {
    const changeHandle = (e) => {
      if (e.matches) {
        setColorScheme("dark");
      } else {
        setColorScheme("light");
      }
    };

    const colorScheme = matchMedia("(prefers-color-scheme: dark)");
    colorScheme.addEventListener("change", changeHandle);

    changeHandle(colorScheme);
  }, []);

  return (
    <div className="App" style={{ 
        backgroundColor: colorScheme === 'dark' ? '#000' : '#ffff',
        color: colorScheme=== 'dark'? '#eee' : '#000'
        }}>
      <h1>Sistem Rengi = {colorScheme}</h1>
    </div>
  );
}

export default ColorScheme;

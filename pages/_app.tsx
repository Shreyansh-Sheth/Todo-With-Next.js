import theme from "../src/styles/theme";

import { ThemeProvider } from "theme-ui";
import Navbar from "../src/components/navbar";
import { useContext, useEffect, useState } from "react";
import notesContext, { iTask } from "../src/components/noteContext";

export default function App({ Component, pageProps }) {
  const [notes, setNotes] = useState<iTask[]>([]);
  useEffect(() => {
    if (window.localStorage.getItem("note") !== null) {
      setNotes(JSON.parse(window.localStorage.getItem("note")));
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <notesContext.Provider
          value={{
            data: notes,
            add: (task) => {
              setNotes([...notes, task]);
              window.localStorage.setItem(
                "note",
                JSON.stringify([...notes, task])
              );
            },
            remove: (id) => {
              setNotes([...notes.filter((task) => task.id !== id)]);
              window.localStorage.setItem(
                "note",
                JSON.stringify([...notes.filter((task) => task.id !== id)])
              );
            },
            change: (id, content) => {
              let newNotes = notes.map((task) => {
                if (task.id === id) {
                  let x: iTask = {
                    id,
                    content,
                    time: task.time,
                  };
                  return x;
                }
                return task;
              });
              setNotes(newNotes);
              window.localStorage.setItem("note", JSON.stringify(newNotes));
            },
          }}
        >
          <Navbar></Navbar>
          <Component {...pageProps} />
        </notesContext.Provider>
      </div>
    </ThemeProvider>
  );
}

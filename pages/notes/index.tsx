/** @jsxRuntime classic /
/**@jsx jsx */
import Head from "next/head";
import React from "react";
import { useContext, useState } from "react";
import { Grid, jsx } from "theme-ui";
import NoteCard from "../../src/components/noteCard";
import notesContext, { iTask } from "../../src/components/noteContext";

export default function Home() {
  //const [notes, setNotes] = useState<iNote[]>([]);
  const [inputTaskField, setInputTaskField] = useState("");

  return (
    <div>
      <Head>
        <title>Notes Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <notesContext.Consumer>
        {(context) => (
          <React.Fragment>
            <Grid columns={[2]}>
              <h1>Notes</h1>
              <div sx={{ display: "flex", my: "auto" }}>
                <input
                  sx={{
                    borderWidth: "0px",
                    height: "48px",
                    fontSize: "large",
                    borderBottomWidth: "2px",
                    ":focus": {
                      outline: "none",
                    },
                  }}
                  type="text"
                  value={inputTaskField}
                  onChange={(e) => setInputTaskField(e.target.value)}
                  placeholder="Enter Task"
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      if (inputTaskField.trim() === "") {
                        return;
                      }

                      context.add({
                        id:
                          Date.now().toString() +
                          (504 * Math.random()).toString(),
                        content: inputTaskField.trim(),
                        time: new Date(),
                      });
                      setInputTaskField("");
                    }
                  }}
                ></input>
                <button
                  sx={{
                    width: "70px",
                    height: "50px  ",
                    fontSize: "20px",
                    backgroundColor: "primary",
                    color: "white",
                    boxShadow: "none",
                    border: "none",
                  }}
                  onClick={(e) => {
                    if (inputTaskField.trim() === "") {
                      return;
                    }
                    context.add({
                      id: Date.now().toString(),
                      content: inputTaskField.trim(),
                      time: new Date(),
                    });
                    console.log(context.data);
                    setInputTaskField("");
                  }}
                >
                  Add
                </button>
              </div>
            </Grid>
            <div>
              <Grid gap={5} width={350}>
                {context.data.map((v, index) => {
                  console.log(context);
                  return (
                    <NoteCard
                      key={v.id}
                      id={v.id}
                      content={v.content.toString()}
                      time={v.time}
                      change={context.change}
                    ></NoteCard>
                  );
                })}
              </Grid>
            </div>
          </React.Fragment>
        )}
      </notesContext.Consumer>
    </div>
  );
}

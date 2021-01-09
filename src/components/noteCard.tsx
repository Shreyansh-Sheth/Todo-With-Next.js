/** @jsxRuntime classic /
/**@jsx jsx */
import { jsx, Card, Text, Context, Input } from "theme-ui";
import Image from "next/image";
import notesContext from "./noteContext";
import { useEffect, useState } from "react";

interface iTask {
  id: string;
  content: string;
  time: Date;
  change: (id: string, content: string) => void;
}

export default function noteCard({ id, content, time, change }: iTask) {
  const [isEdit, setIsEdit] = useState(false);
  const [contentData, setContentData] = useState(content);

  useEffect(() => {
    change(id, contentData);
    console.log("here");
  }, [contentData]);

  let contentView = !isEdit ? (
    <Text
      sx={{
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
      }}
      onDoubleClick={(e) => {
        e.preventDefault();
        setIsEdit(!isEdit);
      }}
    >
      {contentData}
    </Text>
  ) : (
    <Input
      sx={{
        fontSize: "h3",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
      }}
      value={contentData}
      onChange={(e) => {
        setContentData(e.target.value);
      }}
      onKeyPress={(e) => {
        if (e.key === "Enter") {
          setIsEdit(false);
        }
      }}
    ></Input>
  );

  return (
    <notesContext.Consumer>
      {(Context) => {
        return (
          <Card>
            <Text sx={{ color: "gray" }}>
              {" "}
              {new Date(time).toDateString()}{" "}
            </Text>
            <Text sx={{ color: "gray" }}> {id} </Text>

            {contentView}
            <div
              sx={{ display: "Flex", justifyContent: "space-between", p: "3" }}
            >
              <Image
                sx={{ variant: "containers.link" }}
                src={isEdit ? "/save.svg" : "/edit.svg"}
                alt="Edit"
                width="20"
                height="20"
                onClick={(e) => setIsEdit(!isEdit)}
              ></Image>

              <Image
                onClick={(e) => {
                  Context.remove(id);
                }}
                sx={{
                  variant: "containers.link",
                }}
                src="/delete.svg"
                alt="Delete"
                width="20"
                height="20"
              ></Image>
            </div>
          </Card>
        );
      }}
    </notesContext.Consumer>
  );
}

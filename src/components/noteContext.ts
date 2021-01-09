import { createContext } from "react";

export interface iTask {
  id: string;
  content: string;
  time: Date;
}

const notesContext = createContext<{
  data: iTask[];
  add: (task: iTask) => void;
  remove: (id: string) => void;
  change: (id: string, content: string) => void;
} | null>(null);
export default notesContext;

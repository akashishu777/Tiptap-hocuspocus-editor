import React, { useEffect } from "react";
import { Editor } from "@tiptap/core";
import { StarterKit } from "@tiptap/starter-kit";
import Collaboration from "@tiptap/extension-collaboration";
import CollaborationCursor from "@tiptap/extension-collaboration-cursor";
import * as Y from "yjs";
import { HocuspocusProvider } from "@hocuspocus/provider";

function App() {
  useEffect(() => {
    const ydoc = new Y.Doc();

    const provider = new HocuspocusProvider({
      url: "ws://127.0.0.1:1234", // Replace with your WebSocket server URL
      name: "example-document",
      document: ydoc,
    });

    new Editor({
      element: document.querySelector(".element"),
      extensions: [
        StarterKit.configure({
          history: false,
        }),
        Collaboration.configure({
          document: ydoc,
        }),
        CollaborationCursor.configure({
          provider,
          user: { name: "sky", color: "#ffcc00" },
        }),
      ],
    });
  }, []);

  return (
    <div className="App" style={{ borderColor: "coral" }}>
      <h2>Tiptap collaboration editor</h2>
      <div className="element" style={{ backgroundColor: "lightgray" }}></div>
    </div>
  );
}

export default App;

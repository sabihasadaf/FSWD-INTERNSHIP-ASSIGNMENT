import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [folders, setFolders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [copiedFolder, setCopiedFolder] = useState(null);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setFolders([
        { id: 1, name: "Documents" },
        { id: 2, name: "Pictures" },
        { id: 3, name: "Projects" },
      ]);
      setLoading(false);
    }, 1500);
  }, []);

  const copyFolder = (folder) => {
    setCopiedFolder(folder);
    alert(`Folder "${folder.name}" copied!`);
  };

  const pasteFolder = () => {
    if (!copiedFolder) {
      alert("No folder copied! Please copy a folder first.");
      return;
    }
    const newFolder = {
      id: folders.length + 1,
      name: copiedFolder.name + " (Copy)",
    };
    setFolders([...folders, newFolder]);
    setCopiedFolder(null);
  };

  const deleteFolder = (id) => {
    setFolders(folders.filter((f) => f.id !== id));
  };

  return (
    <div className="folder-architect">
      <h1>Folder Architect</h1>
      {loading ? (
        <p>Retrieving data. Wait a few seconds...</p>
      ) : (
        <div className="folder-list">
          {folders.map((folder) => (
            <div key={folder.id} className="folder-item">
              <span>{folder.name}</span>
              <div className="actions">
                <button onClick={() => copyFolder(folder)}>Copy</button>
                <button onClick={() => deleteFolder(folder.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
      <button onClick={pasteFolder} className="paste-btn">
        Paste Folder
      </button>
    </div>
  );
}

export default App;
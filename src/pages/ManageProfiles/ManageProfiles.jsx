import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./ManageProfiles.css";

const defaultChildren = [
  {
    id: 1,
    name: "Mason",
    avatar: "😊",
    grade: "Kindergarten",
    theme: {
      background: "#fff7c7",
      button: "#ff9fd0",
      buttonHover: "#ff85c4",
      glow: "#ffd6ec",
      text: "#2f2f2f",
    },
  },
  {
    id: 2,
    name: "Lily",
    avatar: "🎨",
    grade: "Kindergarten",
    theme: {
      background: "#f5efff",
      button: "#bda7ff",
      buttonHover: "#a48cff",
      glow: "#e5d6ff",
      text: "#2f2f2f",
    },
  },
];

function ManageProfiles() {
  const navigate = useNavigate();

  const [children, setChildren] = useState(() => {
    const savedChildren = localStorage.getItem("koelliteChildren");
    return savedChildren ? JSON.parse(savedChildren) : defaultChildren;
  });

  const [newChildName, setNewChildName] = useState("");
  const [newChildAvatar, setNewChildAvatar] = useState("😊");
  const [newChildGrade, setNewChildGrade] = useState("Kindergarten");
  const [editingChildId, setEditingChildId] = useState(null);

  useEffect(() => {
    localStorage.setItem("koelliteChildren", JSON.stringify(children));
  }, [children]);

  function resetForm() {
    setEditingChildId(null);
    setNewChildName("");
    setNewChildAvatar("😊");
    setNewChildGrade("Kindergarten");
  }

  function deleteChildProfile(childId) {
    if (children.length <= 1) {
      alert("At least one child profile is required.");
      return;
    }

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this child profile?"
    );

    if (!confirmDelete) return;

    setChildren((currentChildren) =>
      currentChildren.filter((child) => child.id !== childId)
    );

    if (editingChildId === childId) {
      resetForm();
    }
  }

  function startEditingChild(child) {
    setEditingChildId(child.id);
    setNewChildName(child.name);
    setNewChildAvatar(child.avatar);
    setNewChildGrade(child.grade);
  }

  function addChildProfile(event) {
    event.preventDefault();

    if (!newChildName.trim()) return;

    if (editingChildId) {
      setChildren((currentChildren) =>
        currentChildren.map((child) =>
          child.id === editingChildId
            ? {
                ...child,
                name: newChildName,
                avatar: newChildAvatar,
                grade: newChildGrade,
              }
            : child
        )
      );

      resetForm();
      return;
    }

    const newChild = {
      id: Date.now(),
      name: newChildName,
      avatar: newChildAvatar,
      grade: newChildGrade,
      theme: {
        background: "#fff7c7",
        button: "#ff9fd0",
        buttonHover: "#ff85c4",
        glow: "#ffd6ec",
        text: "#2f2f2f",
      },
    };

    setChildren((currentChildren) => [...currentChildren, newChild]);

    resetForm();
  }

  return (
    <main className="manage-profiles-page">
      <section className="manage-profiles-container">
        <button className="back-home-button" onClick={() => navigate("/parent")}>
          ← Back to Parent Area
        </button>

        <div className="manage-profiles-header">
          <p>Profile Tools</p>
          <h1>Manage Child Profiles</h1>
          <span>Add, edit, or remove child learning profiles.</span>
        </div>

        <div className="profiles-list">
          {children.map((child) => (
            <div className="manage-profile-card" key={child.id}>
              <div className="manage-profile-avatar">{child.avatar}</div>

              <div>
                <h2>{child.name}</h2>
                <p>{child.grade}</p>
              </div>

              <div className="profile-actions">
                <button onClick={() => startEditingChild(child)}>Edit</button>

                <button onClick={() => deleteChildProfile(child.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        <form className="add-child-form" onSubmit={addChildProfile}>
          <h2>{editingChildId ? "Edit Child" : "Add Child"}</h2>

          <label>
            Child Name
            <input
              type="text"
              value={newChildName}
              onChange={(event) => setNewChildName(event.target.value)}
              placeholder="Enter child name"
            />
          </label>

          <label>
            Avatar
            <select
              value={newChildAvatar}
              onChange={(event) => setNewChildAvatar(event.target.value)}
            >
              <option value="😊">😊 Happy</option>
              <option value="🎨">🎨 Creative</option>
              <option value="🚀">🚀 Explorer</option>
              <option value="🦖">🦖 Dino</option>
              <option value="⭐">⭐ Star</option>
            </select>
          </label>

          <label>
            Grade
            <select
              value={newChildGrade}
              onChange={(event) => setNewChildGrade(event.target.value)}
            >
              <option value="Kindergarten">Kindergarten</option>
              <option value="Pre-K">Pre-K</option>
              <option value="1st Grade">1st Grade</option>
              <option value="2nd Grade">2nd Grade</option>
            </select>
          </label>

          <button type="submit" className="add-child-button">
            {editingChildId ? "Save Changes" : "+ Add Child"}
          </button>

          {editingChildId && (
            <button
              type="button"
              className="cancel-edit-button"
              onClick={resetForm}
            >
              Cancel Edit
            </button>
          )}
        </form>
      </section>
    </main>
  );
}

export default ManageProfiles;
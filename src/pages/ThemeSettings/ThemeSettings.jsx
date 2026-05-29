import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./ThemeSettings.css";

const defaultTheme = {
  background: "#fff7c7",
  button: "#ff9fd0",
  buttonHover: "#ff85c4",
  glow: "#ffd6ec",
  text: "#2f2f2f",
};

function ThemeSettings() {
  const navigate = useNavigate();

  const [children, setChildren] = useState(() => {
    const savedChildren = localStorage.getItem("koelliteChildren");
    return savedChildren ? JSON.parse(savedChildren) : [];
  });

  const [selectedChildId, setSelectedChildId] = useState(
    children[0]?.id || null
  );

  const selectedChild = children.find((child) => child.id === selectedChildId);

  useEffect(() => {
    localStorage.setItem("koelliteChildren", JSON.stringify(children));
  }, [children]);

  function updateTheme(colorType, colorValue) {
    setChildren((currentChildren) =>
      currentChildren.map((child) =>
        child.id === selectedChildId
          ? {
              ...child,
              theme: {
                ...child.theme,
                [colorType]: colorValue,
              },
            }
          : child
      )
    );
  }

  function resetTheme() {
    setChildren((currentChildren) =>
      currentChildren.map((child) =>
        child.id === selectedChildId
          ? {
              ...child,
              theme: defaultTheme,
            }
          : child
      )
    );
  }

  return (
    <main className="theme-settings-page">
      <section className="theme-settings-container">
        <button
          className="back-home-button"
          onClick={() => navigate("/parent/settings")}
        >
          ← Back to Settings
        </button>

        <div className="theme-settings-header">
          <p>Theme Controls</p>
          <h1>Theme Settings</h1>
          <span>
            Choose a child and customize their background, buttons, and page text.
          </span>
        </div>

        {children.length === 0 ? (
          <div className="theme-empty-card">
            <h2>No child profiles yet</h2>
            <p>Add a child profile before customizing themes.</p>

            <button onClick={() => navigate("/parent/profiles")}>
              Add Child Profile
            </button>
          </div>
        ) : (
          <div className="theme-settings-card">
            <label>
              Select Child
              <select
                value={selectedChildId}
                onChange={(event) =>
                  setSelectedChildId(Number(event.target.value))
                }
              >
                {children.map((child) => (
                  <option key={child.id} value={child.id}>
                    {child.avatar} {child.name} — {child.grade}
                  </option>
                ))}
              </select>
            </label>

            {selectedChild && (
              <>
                <div
                  className="theme-preview"
                  style={{
                    background: `radial-gradient(circle at top left, ${selectedChild.theme.glow}, transparent 220px), ${selectedChild.theme.background}`,
                    color: selectedChild.theme.text,
                  }}
                >
                  <div
                    className="theme-preview-card"
                    style={{
                      backgroundColor: "#ffffff",
                      color: "#2f2f2f",
                    }}
                  >
                    <span>{selectedChild.avatar}</span>
                    <h2>{selectedChild.name}'s Learning Space</h2>
                    <button
                      style={{
                        backgroundColor: selectedChild.theme.button,
                        color: selectedChild.theme.text,
                      }}
                    >
                      Sample Button
                    </button>
                  </div>
                </div>

                <div className="theme-controls">
                  <label>
                    Background
                    <input
                      type="color"
                      value={selectedChild.theme.background}
                      onChange={(event) =>
                        updateTheme("background", event.target.value)
                      }
                    />
                  </label>

                  <label>
                    Buttons
                    <input
                      type="color"
                      value={selectedChild.theme.button}
                      onChange={(event) =>
                        updateTheme("button", event.target.value)
                      }
                    />
                  </label>

                  <label>
                    Text
                    <input
                      type="color"
                      value={selectedChild.theme.text}
                      onChange={(event) =>
                        updateTheme("text", event.target.value)
                      }
                    />
                  </label>
                </div>

                <button className="reset-theme-button" onClick={resetTheme}>
                  Reset Theme
                </button>
              </>
            )}
          </div>
        )}
      </section>
    </main>
  );
}

export default ThemeSettings;
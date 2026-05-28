import "./ColorCustomizer.css";

function ColorCustomizer({ activeChild, onUpdateTheme, onResetTheme }) {
  return (
    <section className="color-customizer">
      <div>
        <p>Personalize</p>
        <h2>Choose Your Colors</h2>
      </div>

      <div className="color-controls">
        <label>
          Background
          <input
            type="color"
            value={activeChild.theme.background}
            onChange={(event) =>
              onUpdateTheme("background", event.target.value)
            }
          />
        </label>

        <label>
          Buttons
          <input
            type="color"
            value={activeChild.theme.button}
            onChange={(event) => onUpdateTheme("button", event.target.value)}
          />
        </label>

        <label>
            Text
            <input
            type="color"
            value={activeChild.theme.text}
            onChange={(event) => onUpdateTheme("text", event.target.value)}
          />
        </label>

        <button className="reset-colors-button" onClick={onResetTheme}> Reset Colors </button>
      </div>
    </section>
  );
}

export default ColorCustomizer;
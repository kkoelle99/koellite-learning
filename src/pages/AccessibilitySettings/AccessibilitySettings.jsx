import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./AccessibilitySettings.css";

const defaultAccessibilitySettings = {
  reduceMotion: false,
  largeText: false,
  calmMode: true,
  highContrast: false,
  soundEffects: false,
  timersEnabled: false,
};

function AccessibilitySettings() {
  const navigate = useNavigate();

  const [settings, setSettings] = useState(() => {
    const savedSettings = localStorage.getItem("koelliteAccessibilitySettings");
    return savedSettings
      ? JSON.parse(savedSettings)
      : defaultAccessibilitySettings;
  });

  useEffect(() => {
    localStorage.setItem(
      "koelliteAccessibilitySettings",
      JSON.stringify(settings)
    );
  }, [settings]);

  function toggleSetting(settingName) {
    setSettings((currentSettings) => ({
      ...currentSettings,
      [settingName]: !currentSettings[settingName],
    }));
  }

  function resetSettings() {
    setSettings(defaultAccessibilitySettings);
  }

  return (
    <main className="accessibility-page">
      <section className="accessibility-container">
        <button
          className="back-home-button"
          onClick={() => navigate("/parent/settings")}
        >
          ← Back to Settings
        </button>

        <div className="accessibility-header">
          <p>Learning Comfort</p>
          <h1>Accessibility Settings</h1>
          <span>
            Adjust the learning experience to support focus, comfort, and
            different sensory needs.
          </span>
        </div>

        <div className="accessibility-settings-card">
          <SettingToggle
            title="Reduce Animations"
            description="Minimize movement and transitions throughout the app."
            checked={settings.reduceMotion}
            onClick={() => toggleSetting("reduceMotion")}
          />

          <SettingToggle
            title="Large Text"
            description="Increase text size for easier reading."
            checked={settings.largeText}
            onClick={() => toggleSetting("largeText")}
          />

          <SettingToggle
            title="Calm Mode"
            description="Keep the experience simple, soft, and low stimulation."
            checked={settings.calmMode}
            onClick={() => toggleSetting("calmMode")}
          />

          <SettingToggle
            title="High Contrast"
            description="Use stronger contrast for better visibility."
            checked={settings.highContrast}
            onClick={() => toggleSetting("highContrast")}
          />

          <SettingToggle
            title="Sound Effects"
            description="Allow gentle sound feedback in future activities."
            checked={settings.soundEffects}
            onClick={() => toggleSetting("soundEffects")}
          />

          <SettingToggle
            title="Timers Enabled"
            description="Allow timed activities. Recommended off for early grades."
            checked={settings.timersEnabled}
            onClick={() => toggleSetting("timersEnabled")}
          />

          <button className="reset-accessibility-button" onClick={resetSettings}>
            Reset Accessibility Settings
          </button>
        </div>
      </section>
    </main>
  );
}

function SettingToggle({ title, description, checked, onClick }) {
  return (
    <button
      type="button"
      className={`setting-toggle ${checked ? "setting-toggle-active" : ""}`}
      onClick={onClick}
    >
      <div>
        <strong>{title}</strong>
        <p>{description}</p>
      </div>

      <span className="toggle-pill">
        <span className="toggle-dot" />
      </span>
    </button>
  );
}

export default AccessibilitySettings;
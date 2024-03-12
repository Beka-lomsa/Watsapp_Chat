import { useState } from "react";
import Chat from "../Chat_Component/Chat";
import Settings from "../Settings_Component/Settings";
import settingIcon from "../../img/SetIcon.png";
import darkSetting from "../../img/darkSett.png";
import "../../App.css";

const WrapperComp = () => {
  // State to manage the visibility of the Settings component
  const [settingsVisible, setSettingsVisible] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState(false);
  const [messageShortcutSetting, setMessageShortcutSetting] = useState(false);
  const [language, setLanguage] = useState("English");
  const [clocksDisplay, setClockDisplay] = useState<boolean>(true);

  return (
    <div className={`bg-zinc-200 py-[8rem] relative font-roboto 
     sm:bg-red-500
     
     
     
     min-[1920px]:bg-green-400 min-[1920px]:h-screen xl:bg-slate-500
     ${darkMode && "dark:bg-stone-900"}
    `}>
      <div className="w-[25rem] h-[43rem] m-auto relative
      sm:max-sm:
      
      ">
        <header
          className={`w-[25rem] h-[3.5rem] py-[1.125rem] flex bg-headerBg  items-center m-auto  relative
           ${darkMode && "dark:bg-darkHeadInput"}
        `}
        >
          <span
            className={`text-maincommonColor text-lg font-medium mx-auto cursor-pointer pl-[1rem]
          ${darkMode && "dark:text-whiteletters"}
          `}
          >
            {language === "Georgian"
              ? "სასაუბრო"
              : language === "English"
              ? "Chat"
              : language === "Spanish"
              ? "Charla"
              : "Default Result"}
          </span>
          <span
            className="px-[0.4rem]"
            onClick={() => setSettingsVisible(!settingsVisible)}
          >
            <img
              className="cursor-pointer pr-[0.1rem]"
              src={darkMode ? darkSetting : settingIcon}
              alt="settingIcon"
            />
          </span>
          {/* Settings component */}
          {settingsVisible && (
            <div className="absolute top-[0rem] right-0 z-10 bg-white">
              <Settings
                setSettingsVisible={setSettingsVisible}
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                messageShortcutSetting={messageShortcutSetting}
                setMessageShortcutSetting={setMessageShortcutSetting}
                language={language}
                setLanguage={setLanguage}
                clocksDisplay={clocksDisplay}
                setClockDisplay={setClockDisplay}
              />
            </div>
          )}
        </header>
        <div>
          <Chat
            settingsVisible={settingsVisible}
            darkMode={darkMode}
            messageShortcutSetting={messageShortcutSetting}
            clocksDisplay={clocksDisplay}
            language={language}
          />
        </div>
      </div>
    </div>
  );
};

export default WrapperComp;

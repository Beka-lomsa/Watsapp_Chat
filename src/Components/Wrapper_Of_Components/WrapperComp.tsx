import { useState } from "react";
import Chat from "../Chat_Component/Chat";
import Settings from "../Settings_Component/Settings";
import settingIcon from "../../img/SetIcon.png";
import darkSetting from "../../img/darkSett.png";
import "../../App.css";
import { useTranslation } from "react-i18next";

const WrapperComp = () => {
  // State to manage the visibility of the Settings component
  const [settingsVisible, setSettingsVisible] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState(false);
  const [messageShortcutSetting, setMessageShortcutSetting] = useState(false);
  const [language, setLanguage] = useState("English");
  const [clocksDisplay, setClockDisplay] = useState<boolean>(true);

  // language
  const { t } = useTranslation();

  return (
    <div className={`bg-zinc-200 py-[4rem] relative font-roboto h-dvh pb-[50rem]
    sm:pb-[32rem]
     ${darkMode && "dark:bg-stone-900"}
    `}>
      <div className="w-[25rem] h-[43rem] m-auto relative
      2xl:w-[24rem] 2xl:h-[39.5rem]
      xl:w-[20rem] xl:h-[36rem] 
      sm:w-[16rem] sm:h-[32rem]
      Xsm:w-[14rem] Xsm:h-[30rem]
      ">
        <header
          className={`w-[25rem] h-[3.5rem] py-[1.125rem] flex bg-headerBg  items-center m-auto  relative
          2xl:w-[24rem] 2xl:h-[3rem] 
          xl:w-[20rem] xl:h-[2.8rem]
          sm:w-[16rem] sm:h-[2.3rem]
          Xsm:w-[14rem] Xsm:h-[2rem]
           ${darkMode && "dark:bg-darkHeadInput"}
        `}
        >
          <span
            className={`text-maincommonColor text-lg font-medium mx-auto cursor-pointer pl-[1rem]
            xl:text-base 
            sm:text-sm
            Xsm:text-xs
          ${darkMode && "dark:text-whiteletters"}
          `}
          > 
            {t("chat")}
          </span>
          <span
            className="px-[0.4rem]"
            onClick={() => setSettingsVisible(!settingsVisible)}
          >
            <img
              className="cursor-pointer pr-[0.1rem]
              xl:w-[1.3rem] xl:h-[1.3rem]
              sm:w-[1.2rem] sm:h-[1.2rem]
              Xsm:w-[1.1rem] Xsm:h-[1.1rem]
              "
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

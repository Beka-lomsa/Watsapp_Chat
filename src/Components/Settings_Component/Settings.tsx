import { useState } from "react";
import closeX from "../../img/closeX.png";
import trash from "../../img/trash.png";
import { BsTrash3 } from "react-icons/bs";
import darkClose from "../../img/darkClose.png";
import downErrow from "../../img/downErrow.png";

interface SettingsProps {
  setSettingsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  messageShortcutSetting: boolean;
  setMessageShortcutSetting: React.Dispatch<React.SetStateAction<boolean>>;
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  clocksDisplay: boolean;
  setClockDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}

const Settings = ({
  setSettingsVisible,
  darkMode,
  setDarkMode,
  messageShortcutSetting,
  setMessageShortcutSetting,
  language,
  setLanguage,
  clocksDisplay,
  setClockDisplay,
}: SettingsProps) => {
  const [dropDown, setDropDown] = useState<boolean>(false);

  const handleLightDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const handleShortcutSetting = () => {
    setMessageShortcutSetting(!messageShortcutSetting);
  };

  const handleDropDownList = () => {
    setDropDown(!dropDown);
  };
  const handleLanguageChange = (lan: string) => {
    setLanguage(lan);
    setDropDown(false);
  };

  // Reset all settings
  const handleResetSetting = () => {
    setDarkMode(false);
    setMessageShortcutSetting(false);
    setLanguage("English");
    setClockDisplay(true);
  };

  return (
    <div
      className={`h-[43.4rem] w-[15rem] bg-headerBg font-roboto text-maincommonColor
    ${darkMode && "dark:bg-darkcommon text-whiteletters"}
    `}
    >
      <header className="w-[100%] flex justify-end items-center  py-[1rem] px-[0.5rem]">
        <div className="m-auto">
          <h1 className="text-[0.95rem] font-bold">
            {language === "Georgian"
              ? "პარამეტრები"
              : language === "English"
              ? "Settings"
              : language === "Spanish"
              ? "Ajustes"
              : "Default Result"}
          </h1>
        </div>
        <div>
          <img
            onClick={() => setSettingsVisible(false)}
            src={darkMode ? darkClose : closeX}
            alt="closeX"
            className="h-[1.2rem] w-[1.2rem] cursor-pointer"
          />
        </div>
      </header>
      <section className="flex justify-center">
        <div className="w-[12.5rem] flex flex-col">
          <h4 className="mt-[3.5rem] text-[0.75rem]">
            {language === "Georgian"
              ? "მომხმარებლის სახელი"
              : language === "English"
              ? "User name"
              : language === "Spanish"
              ? "Nombre de usuario"
              : "Default Result"}
          </h4>
          <input
            className={`h-[1.5rem] mt-[0.2rem] outline-none border border-frameColors
             ${darkMode && "dark:bg-darkHeadInput border-0"}
          `}
            type="text"
          />

          {/* Light & Dark / Modes */}
          <div
            className="flex items-center text-center mt-[2.5rem]"
            typeof="dark_light"
          >
            <button
              onClick={handleLightDarkMode}
              className="h-[1.3rem] w-[2.5rem] bg-frameColors rounded-full flex items-center transition duration-300"
            >
              <div
                className={`h-[1.3rem] w-[1.3rem] border border-frameColors bg-headerBg rounded-full transition duration-500 ${
                  darkMode &&
                  "translate-x-[1.2rem]  dark:bg-darkYellow border border-darkYellow"
                }`}
              />
            </button>
            <p className="text-[0.75rem] ml-[1rem] font-normal">
              {language === "Georgian"
                ? "ბნელი რეჟიმი"
                : language === "English"
                ? "Dark mode"
                : language === "Spanish"
                ? "Modo oscuro"
                : "Default Result"}
            </p>
          </div>

          {/* CTRL + ENTER Shortcut */}
          <div
            className="flex items-center text-center mt-[0.8rem]"
            typeof="CTRL + ENTER Shortcut"
          >
            <button
              onClick={handleShortcutSetting}
              className="h-[1.3rem] w-[2.5rem] border bg-frameColors  rounded-full flex items-center transition duration-300"
            >
              <div
                className={`h-[1.3rem] w-[1.3rem] border border-frameColors bg-headerBg rounded-full transition duration-500 
                ${messageShortcutSetting && " translate-x-[1.2rem]"}
                ${darkMode && "dark:bg-darkYellow border border-darkYellow"}
              `}
              />
            </button>
            <p className="text-[0.75rem] ml-[1rem] font-normal">
              {language === "Georgian"
                ? "გაგზავნა"
                : language === "English"
                ? "Send on"
                : language === "Spanish"
                ? "Enviar con"
                : "Default Result"}
              <span className="font-medium ml-[0.2rem]">CTRL+ENTER</span>
            </p>
          </div>

          {/* Time Format */}
          <div className="flex flex-col mt-[2rem] text-[0.75rem]">
            <p className="text-[0.75rem] mb-[0.3rem]">
              {language === "Georgian"
                ? "დროის ფორმატი"
                : language === "English"
                ? "Time format"
                : language === "Spanish"
                ? "Formato de hora"
                : "Default Result"}
            </p>

            {/* 12HRS */}
            <div className="flex w-[12.5rem] justify-start">
              <div
                typeof="12_HRS_Part"
                className="flex items-center cursor-pointer"
              >
                <div
                  onClick={() => setClockDisplay(true)}
                  className="w-[1.2rem] h-[1.2rem] border border-frameColors rounded-full relative flex justify-center"
                >
                  {clocksDisplay && (
                    <button className="w-[0.74rem] h-[0.74rem] bg-yellow rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  )}
                </div>
                <p className="text-[0.75rem] font-light ml-[0.5rem]">
                  {language === "Georgian"
                    ? "12 საათი"
                    : language === "English"
                    ? "12 hrs"
                    : language === "Spanish"
                    ? "12 horas"
                    : "Default Result"}
                </p>
              </div>

              {/* 24-HRS */}
              <div
                typeof="24_HRS_Part"
                className="flex items-center cursor-pointer m-auto"
              >
                <div
                  onClick={() => setClockDisplay(false)}
                  className="w-[1.2rem] h-[1.2rem] border border-frameColors rounded-full relative flex justify-center"
                >
                  {!clocksDisplay && (
                    <button className="w-[0.74rem] h-[0.74rem] bg-yellow rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  )}
                </div>
                <p className="text-[0.75rem] font-light ml-[0.5rem]">
                  {language === "Georgian"
                    ? "24 საათი"
                    : language === "English"
                    ? "24 hrs"
                    : language === "Spanish"
                    ? "24 horas"
                    : "Default Result"}
                </p>
              </div>
            </div>
          </div>
          {/* Language */}
          <div className="mt-[2rem]">
            <p className="text-[0.75rem] mb-[0.3rem]">
              {language === "Georgian"
                ? "ენა"
                : language === "English"
                ? "Language"
                : language === "Spanish"
                ? "Idioma"
                : "Default Result"}
            </p>
            <button
              onClick={handleDropDownList}
              className={`w-[100%] flex justify-between items-center px-[0.6rem] py-[0.3rem] border border-frameColors bg-yellow-100 ${
                dropDown && "border-b-0"
              } 
                ${darkMode && "dark:bg-darkHeadInput border-0"}
              `}
            >
              <h4
                className={`text-[0.75rem] font-light text-downErrow
                 ${darkMode && "dark:text-whiteletters"}
              `}
              >
                {language}
              </h4>
              <img
                className={`w-[1rem] h-[0.6rem] transition-transform duration-300 ${
                  dropDown ? "rotate-180" : ""
                }`}
                src={downErrow}
                alt="downErrow"
              />
            </button>
            {dropDown && (
              <div
                className={`w-full text-[0.75rem] font-light text-downErrow cursor-pointer border border-frameColors
                ${
                  darkMode &&
                  "dark:border-0 dark:text-whiteletters dark:bg-neutral-800"
                }
              `}
              >
                <button
                  onClick={() => handleLanguageChange("English")}
                  className={`block w-full py-1 px-2 hover:bg-frameColors focus:outline-none
                    ${darkMode && "hover:dark:bg-neutral-900"}
                  `}
                >
                  English
                </button>
                <button
                  onClick={() => handleLanguageChange("Spanish")}
                  className={`block w-full py-1 px-2 hover:bg-frameColors focus:outline-none
                    ${darkMode && "hover:dark:bg-neutral-900"}
                  `}
                >
                  Spanish
                </button>
                <button
                  onClick={() => handleLanguageChange("Georgian")}
                  className={`block w-full py-1 px-2 hover:bg-frameColors focus:outline-none
                   ${darkMode && "hover:dark:bg-neutral-900"}
                  `}
                >
                  Georgian
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* Reset Settings to default */}
      <footer className="w-full flex justify-end absolute bottom-0">
        <button
          onClick={handleResetSetting}
          className="flex px-[0.5rem] py-[0.5rem] cursor-pointer hover:underline"
        >
          {darkMode ? (
            <BsTrash3 className="mx-[0.7rem] w-[1rem] h-[0.95rem]" />
          ) : (
            <img
              className="mx-[0.7rem] w-[1rem] h-[0.95rem]"
              src={trash}
              alt="trash"
            />
          )}
          <p
            className={`text-[0.75rem] font-normal text-maincommonColor
              ${darkMode && "dark:text-whiteletters"}
            `}
          >
            {language === "Georgian"
                ? "ნაგულისხმები პარამეტრები"
                : language === "English"
                ? "Reset Settings to default"
                : language === "Spanish"
                ? "Ajustes predeterminados"
                : "Default Result"}
            
          </p>
        </button>
      </footer>
    </div>
  );
};
export default Settings;

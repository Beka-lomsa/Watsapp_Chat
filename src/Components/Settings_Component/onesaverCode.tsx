// import { useState } from "react";
// import closeX from "../../img/closeX.png";
// import trash from "../../img/trash.png";
// import { BsTrash3 } from "react-icons/bs";
// import darkClose from "../../img/darkClose.png";
// import downErrow from "../../img/downErrow.png";

// interface SettingsProps {
//   setSettingsVisible: React.Dispatch<React.SetStateAction<boolean>>;
//   darkMode: boolean;
//   setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
//   messageShortcutSetting: boolean;
//   setMessageShortcutSetting: React.Dispatch<React.SetStateAction<boolean>>;
//   language: string;
//   setLanguage: React.Dispatch<React.SetStateAction<string>>;
//   clocksDisplay: boolean;
//   setClockDisplay: React.Dispatch<React.SetStateAction<boolean>>;
// }

// const Settings = ({
//   setSettingsVisible,
//   darkMode,
//   setDarkMode,
//   messageShortcutSetting,
//   setMessageShortcutSetting,
//   language,
//   setLanguage,
//   clocksDisplay,
//   setClockDisplay,
// }: SettingsProps) => {
//   const [dropDown, setDropDown] = useState<boolean>(false);

//   const handleLightDarkMode = () => {
//     setDarkMode(!darkMode);
//   };
//   const handleShortcutSetting = () => {
//     setMessageShortcutSetting(!messageShortcutSetting);
//   };

//   const handleDropDownList = () => {
//     setDropDown(!dropDown);
//   };
//   const handleLanguageChange = (lan: string) => {
//     setLanguage(lan);
//     setDropDown(false);
//   };

//   // Reset all settings
//   const handleResetSetting = () => {
//     setDarkMode(false);
//     setMessageShortcutSetting(false);
//     setLanguage("English");
//     setClockDisplay(true);
//   };

//   return (
//     <div
//       className={`w-[15rem] h-[43.4rem] bg-headerBg font-roboto text-maincommonColor
//       2xl:w-[14rem] 2xl:h-[39.5rem]
//       xl:w-[13rem] xl:h-[36rem] 
//       sm:w-[11rem] sm:h-[31.5rem] sm:flex sm:flex-col sm:text-center
//       Xsm:w-[9rem] Xsm:h-[28.5rem]
      

//     ${darkMode && "dark:bg-darkcommon text-whiteletters"}
//     `}
//     >
//       <header className="w-[100%] flex justify-end items-center  py-[0.7rem] px-[0.5rem]">
//         <div className="m-auto">
//           <h1
//             className="text-[0.95rem] font-bold
//           xl:text-sm 
//           Xsm:text-xs
//           "
//           >
//             {language === "Georgian"
//               ? "პარამეტრები"
//               : language === "English"
//               ? "Settings"
//               : language === "Spanish"
//               ? "Ajustes"
//               : "Default Result"}
//           </h1>
//         </div>
//         <div>
//           <img
//             onClick={() => setSettingsVisible(false)}
//             src={darkMode ? darkClose : closeX}
//             alt="closeX"
//             className="h-[1.2rem] w-[1.2rem] cursor-pointer
//             xl:w-[1.15rem] sm:h-[1.15rem]
//             Xsm:w-[1rem] Xsm:h-[1rem]
//             "
//           />
//         </div>
//       </header>
//       <section
//         className="flex justify-center 
//          sm:text-center
//       "
//       >
//         <div className="w-[12.5rem] flex flex-col">
//           <h4 className="mt-[3.5rem] text-[0.75rem]
//           sm:my-[0.1rem]
//           ">
//             {language === "Georgian"
//               ? "მომხმარებლის სახელი"
//               : language === "English"
//               ? "User name"
//               : language === "Spanish"
//               ? "Nombre de usuario"
//               : "Default Result"}
//           </h4>
//           <input
//             className={`h-[1.5rem] mt-[0.2rem] outline-none border border-frameColors
//             sm:w-[10rem] sm:m-auto
//             Xsm:w-[7rem]
//              ${darkMode && "dark:bg-darkHeadInput border-0"}
//           `}
//             type="text"
//           />

//           {/* Light & Dark / Modes */}
//           <div
//             className="flex items-center text-center mt-[2.5rem]
//             sm:ml-[2.1rem] sm:mt-[1.5rem]
//             Xsm:ml-[2.2rem]
//             "
//             typeof="dark_light"
//           >
//             <button
//               onClick={handleLightDarkMode}
//               className="h-[1.3rem] w-[2.5rem] bg-frameColors rounded-full flex items-center transition duration-300"
//             >
//               <div
//                 className={`h-[1.3rem] w-[1.3rem] border border-frameColors bg-headerBg rounded-full transition duration-500 
                
//                 ${
//                   darkMode &&
//                   "translate-x-[1.2rem]  dark:bg-darkYellow border border-darkYellow"
//                 }`}
//               />
//             </button>
//             <div className="text-[0.75rem] ml-[1rem] font-normal
//             sm:ml-[1.5rem]
//             Xsm:ml-[1rem]
//             ">
//               {language === "Georgian"
//                 ? "ბნელი რეჟიმი"
//                 : language === "English"
//                 ? "Dark mode"
//                 : language === "Spanish"
//                 ? "Modo oscuro"
//                 : "Default Result"}
//             </div>
//           </div>

//           {/* CTRL + ENTER Shortcut */}
//           <div
//             className="flex items-center text-center mt-[0.8rem]
//             sm:justify-center
//             Xsm:justify-items-center Xsm:px-{rem}
//             "
//             typeof="CTRL + ENTER Shortcut"
//           >
//             <button
//               onClick={handleShortcutSetting}
//               className="h-[1.3rem] w-[2.5rem] bg-frameColors  rounded-full flex items-center transition duration-300"
//             >
//               <div
//                 className={`h-[1.3rem] w-[1.3rem] border border-frameColors bg-headerBg rounded-full transition duration-500 
//                 ${messageShortcutSetting && " translate-x-[1.2rem]"}
//                 ${darkMode && "dark:bg-darkYellow border border-darkYellow"}
//               `}
//               />
//             </button>
//             <div
//               className="text-[0.75rem] ml-[1rem] font-normal flex
//               sm:block
//               Xsm:flex Xsm:flex-col Xsm:ml-[1rem]
//             "
//             >
//               <div>
//                 {language === "Georgian"
//                   ? "გაგზავნა"
//                   : language === "English"
//                   ? "Send on"
//                   : language === "Spanish"
//                   ? "Enviar con"
//                   : "Default Result"}
//               </div>
//               <span className="font-medium ml-[0.2rem]
//               Xsm:ml-[0rem]
//               ">CTRL+ENTER</span>
//             </div>
//           </div>

//           {/* Time Format */}
//           <div className="flex flex-col mt-[2rem] text-[0.75rem]
//           sm:mt-[1rem]
//           Xsm:ml-[0.3rem]
//           ">
//             <div className="text-[0.75rem] mb-[0.3rem]">
//               {language === "Georgian"
//                 ? "დროის ფორმატი"
//                 : language === "English"
//                 ? "Time format"
//                 : language === "Spanish"
//                 ? "Formato de hora"
//                 : "Default Result"}
//             </div>

//             {/* 12HRS */}
//             <div
//               className="flex w-[12.5rem] justify-start
//               sm:pl-[2rem]
//             "
//             >
//               <div
//                 typeof="12_HRS_Part"
//                 className="flex items-center cursor-pointer"
//               >
//                 <div
//                   onClick={() => setClockDisplay(true)}
//                   className="w-[1.2rem] h-[1.2rem] border border-frameColors rounded-full relative flex justify-center"
//                 >
//                   {clocksDisplay && (
//                     <button className="w-[0.74rem] h-[0.74rem] bg-yellow rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
//                   )}
//                 </div>
//                 <div className="text-[0.75rem] font-light ml-[0.5rem]">
//                   {language === "Georgian"
//                     ? "12 სთ"
//                     : language === "English"
//                     ? "12 hrs"
//                     : language === "Spanish"
//                     ? "12 hrs"
//                     : "Default Result"}
//                 </div>
//               </div>

//               {/* 24-HRS */}
//               <div
//                 typeof="24_HRS_Part"
//                 className="flex items-center cursor-pointer m-auto
//                 sm:ml-[1rem]
//                 Xsm:ml-[0.6rem]
//                 "
//               >
//                 <div
//                   onClick={() => setClockDisplay(false)}
//                   className="w-[1.2rem] h-[1.2rem] border border-frameColors rounded-full relative flex justify-center"
//                 >
//                   {!clocksDisplay && (
//                     <button className="w-[0.74rem] h-[0.74rem] bg-yellow rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
//                   )}
//                 </div>
//                 <div className="text-[0.75rem] font-light ml-[0.5rem]">
//                   {language === "Georgian"
//                     ? "24 სთ"
//                     : language === "English"
//                     ? "24 hrs"
//                     : language === "Spanish"
//                     ? "24 hrs"
//                     : "Default Result"}
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* Language */}
//           <div className="mt-[2rem]
//           sm:mt-[1rem]
//           ">
//             <div className="text-[0.75rem] mb-[0.3rem]
//             ">
//               {language === "Georgian"
//                 ? "შეარჩიე ენა"
//                 : language === "English"
//                 ? "Language"
//                 : language === "Spanish"
//                 ? "Idioma"
//                 : "Default Result"}
//             </div>
//             <button
//               onClick={handleDropDownList}
//               className={`w-[100%] flex justify-between items-center px-[0.6rem] py-[0.3rem] border border-frameColors bg-yellow-100
//               sm:w-[10rem] sm:m-auto sm:mt-[0.5rem]
//               Xsm:w-[7rem]
//               ${
                
//                 dropDown && "border-b-0"
//               } 
//                 ${darkMode && "dark:bg-darkHeadInput dark:border-0"}
//               `}
//             >
//               <h4
//                 className={`text-[0.75rem] font-light text-downErrow
//                  ${darkMode && "dark:text-whiteletters"}
//               `}
//               >
//                 {language}
//               </h4>
//               <img
//                 className={`w-[1rem] h-[0.6rem] transition-transform duration-300 ${
//                   dropDown ? "rotate-180" : ""
//                 }`}
//                 src={downErrow}
//                 alt="downErrow"
//               />
//             </button>
//             {dropDown && (
//               <div
//                 className={`w-full text-[0.75rem] font-light text-downErrow cursor-pointer border border-frameColors
//                 sm:w-[10rem] sm:m-auto
//                 Xsm:w-[7rem]
//                 ${
//                   darkMode &&
//                   "dark:border-0 dark:text-whiteletters dark:bg-neutral-800"
//                 }
//               `}
//               >
//                 <button
//                   onClick={() => handleLanguageChange("English")}
//                   className={`block w-full py-1 px-2 hover:bg-frameColors focus:outline-none
//                     ${darkMode && "hover:dark:bg-neutral-900"}
//                   `}
//                 >
//                   English
//                 </button>
//                 <button
//                   onClick={() => handleLanguageChange("Spanish")}
//                   className={`block w-full py-1 px-2 hover:bg-frameColors focus:outline-none
//                     ${darkMode && "hover:dark:bg-neutral-900"}
//                   `}
//                 >
//                   Spanish
//                 </button>
//                 <button
//                   onClick={() => handleLanguageChange("Georgian")}
//                   className={`block w-full py-1 px-2 hover:bg-frameColors focus:outline-none
//                    ${darkMode && "hover:dark:bg-neutral-900"}
//                   `}
//                 >
//                   Georgian
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </section>
//       {/* Reset Settings to default */}
//       <footer className="w-full flex justify-end absolute bottom-0 
//         sm:justify-center
//       ">
//         <button
//           onClick={handleResetSetting}
//           className="flex px-[0.5rem] py-[0.5rem] cursor-pointer hover:underline
//           sm:align-middle sm:items-center
//           "
//         >
//           {darkMode ? (
//             <BsTrash3 className="mx-[0.7rem] w-[1rem] h-[0.95rem]" />
//           ) : (
//             <img
//               className="mx-[0.7rem] w-[1rem] h-[0.95rem]
//               sm:mx-[0rem]
//               "
//               src={trash}
//               alt="trash"
//             />
//           )}
//           <div
//             className={`text-[0.75rem] font-normal text-maincommonColor
//             sm:ml-[0.2rem]
//               ${darkMode && "dark:text-whiteletters"}
//             `}
//           >
//             {language === "Georgian"
//               ? "ნაგულისხმები პარამეტრები"
//               : language === "English"
//               ? "Reset Settings to default"
//               : language === "Spanish"
//               ? "Ajustes predeterminados"
//               : "Default Result"}
//           </div>
//         </button>
//       </footer>
//     </div>
//   );
// };
// export default Settings;










// CHAT
// import { ChangeEvent, useState, useEffect, useRef } from "react";
// import Clock from "../Clock_12_24/Clock";
// import sendIcon from "../../img/sendIcon.png";
// import darkSend from "../../img/darkSend.png";
// import { v4 as uuidv4 } from "uuid";

// interface chatProps {
//   settingsVisible: boolean;
//   darkMode: boolean;
//   messageShortcutSetting: boolean;
//   clocksDisplay: boolean;
//   language: string;
// }

// const Chat = ({
//   settingsVisible,
//   darkMode,
//   messageShortcutSetting,
//   clocksDisplay,
//   language,
// }: chatProps) => {
//   const [message, setMessage] = useState<string>("");
//   const [messages, setMessages] = useState<
//     { id: string; text: string; time: Date }[]
//   >([]);
//   const contentRef = useRef<HTMLDivElement>(null);

//   const handleChangeMessage = (e: ChangeEvent<HTMLInputElement>) => {
//     setMessage(e.target.value);
//   };
//   const handleSubmit = () => {
//     if (message.trim() !== "") {
//       const newMessage = {
//         id: uuidv4(),
//         text: message,
//         time: new Date(),
//       };
//       setMessages([...messages, newMessage]);
//       setMessage("");
//     }
//   };

//   useEffect(() => {
//     if (contentRef.current) {
//       contentRef.current.scrollTop = contentRef.current.scrollHeight;
//     }
//   }, [messages]);

//   //  ShortcutEvent
//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (messageShortcutSetting === true && e.key === "Enter" && e.ctrlKey) {
//         handleSubmit();
//       }
//     };
//     document.addEventListener("keydown", handleKeyDown);

//     return () => {
//       document.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [handleSubmit, messageShortcutSetting]);

//   return (
//     <div className="w-[25rem] h-[39.5rem] font-roboto
//     2xl:w-[24rem] 2xl:h-[35.5rem]
//     xl:w-[20rem] xl:h-[28rem]
//     sm:w-[16rem] sm:h-[25rem] 
//     Xsm:w-[14rem] Xsm:h-[22rem]
//     ">
//       <div
//         className={`w-[25rem] h-[33.7rem] bg-chatBg flex justify-end columns-1 p-[0.5rem] overflow-auto custom-scrollbar pt-[0.3rem] 
//         2xl:w-[24rem] 2xl:h-[30.5rem]
//         xl:w-[20rem] xl:h-[28rem]
//         sm:w-[16rem] sm:h-[25rem]
//         Xsm:w-[14rem] Xsm:h-[22rem]
//         ${settingsVisible ? "opacity-90" : "opacity-100"} 
//         ${darkMode && "dark:bg-darkcommon"}
//         `}
//         ref={contentRef}
//       >
//         <div className="block ">
//           {messages.map((item) => {
//             return (
//               <div
//                 key={item.id}
//                 className={`w-[12rem] h-auto bg-yourContentColor border rounded-t-[1.25rem] rounded-l-[1.25rem] px-[1.2rem] py-[0.3rem] mb-[0.5rem] break-words
//                 ${darkMode && "dark:bg-darkcommon"}
                
//                 `}
//               >
//                 <div className="flex items-center mb-[0.2rem]">
//                   <p
//                     className={`text-[0.85rem] mr-[0.3rem] text-maincommonColor font-bold
//                     ${darkMode && "dark:text-whiteletters"}
//                     `}
//                   >
//                     {language === "Georgian"
//                       ? "შენ"
//                       : language === "English"
//                       ? "You"
//                       : language === "Spanish"
//                       ? "Tú"
//                       : "Default Result"}
//                   </p>
//                   <Clock
//                     messageSentTime={item.time}
//                     clocksDisplay={clocksDisplay}
//                     darkMode={darkMode}
//                   />
//                 </div>
//                 <p
//                   className={`text-[0.8rem] text-maincommonColor font-light
//                   ${darkMode && "dark:text-whiteletters"}
//                 `}
//                 >
//                   {item.text}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//       <div
//         className={`w-full h-[1.2rem] bg-chatBg
//         ${settingsVisible ? "opacity-90" : "opacity-100"}
//         ${darkMode && "dark:bg-darkcommon"}
//       `}
//       />
//       <div
//         className={`w-[25rem] h-[5rem] bg-headerBg flex items-center justify-center
//         2xl:w-[24rem] 2xl:h-[5rem] 
//         xl:w-[20rem] xl:h-[4rem]
//         sm:w-[16rem] sm:h-[3rem]
//         Xsm:w-[14rem]
//         ${darkMode && "dark:bg-darkHeadInput"}
//       `}
//       >
//         <input
//           value={message}
//           onChange={handleChangeMessage}
//           className={` w-[19.5rem] h-[3rem] outline-none 
//             px-[1.5rem] text-[0.8rem] bg-chatBg text-maincommonColor
//            placeholder-maincommonColor placeholder-opacity-753
//            focus:placeholder-gray-100 
//            xl:w-[16.5rem] xl:h-[2.5rem]
//            sm:w-[13rem] sm:h-[2rem] sm:px-[0.5rem]
//            Xsm:w-[11rem]
//            ${
//              darkMode &&
//              "dark:bg-darkcommon text-whiteletters placeholder-whiteletters  dark:focus:placeholder-darkcommon "
//            }
//            `}
//           placeholder={
//             language === "Georgian"
//               ? "გამარჯობა, აქ ხარ?"
//               : language === "English"
//               ? "Hello are you there?"
//               : language === "Spanish"
//               ? "ChHola, ¿estás ahí?"
//               : "Default Result"
//           }
//         />
//         <div
//           className={`h-[3rem] w-auto flex items-center bg-chatBg pr-[1rem]
//           xl:h-[2.5rem]
//           sm:h-[2rem]
//           ${darkMode && "dark:bg-darkcommon "}
//         `}
//         >
//           <img
//             onClick={handleSubmit}
//             className={`bg-chatBg  w-[1.8rem] h-[1.6rem] cursor-pointer fill-slate-700
//             xl:w-[1.4rem] xl:h-[1.4rem]
//             sm:w-[1.2rem] sm:h-[1.2rem]
//             Xsm:w-[1.1rem] Xsm:h-[1.1rem]
//             ${darkMode && "dark:bg-darkcommon "}
//             `}
//             src={darkMode ? darkSend : sendIcon}
//             alt="sendIcon"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chat;



//  Wrappper Part

// import { useState } from "react";
// import Chat from "../Chat_Component/Chat";
// import Settings from "../Settings_Component/Settings";
// import settingIcon from "../../img/SetIcon.png";
// import darkSetting from "../../img/darkSett.png";
// import "../../App.css";

// const WrapperComp = () => {
//   // State to manage the visibility of the Settings component
//   const [settingsVisible, setSettingsVisible] = useState<boolean>(false);
//   const [darkMode, setDarkMode] = useState(false);
//   const [messageShortcutSetting, setMessageShortcutSetting] = useState(false);
//   const [language, setLanguage] = useState("English");
//   const [clocksDisplay, setClockDisplay] = useState<boolean>(true);

//   return (
//     <div className={`bg-zinc-200 py-[4rem] relative font-roboto h-dvh pb-[50rem]
//     sm:pb-[32rem]
//      ${darkMode && "dark:bg-stone-900"}
//     `}>
//       <div className="w-[25rem] h-[43rem] m-auto relative
//       2xl:w-[24rem] 2xl:h-[39.5rem]
//       xl:w-[20rem] xl:h-[36rem] 
//       sm:w-[16rem] sm:h-[32rem]
//       Xsm:w-[14rem] Xsm:h-[30rem]
//       ">
//         <header
//           className={`w-[25rem] h-[3.5rem] py-[1.125rem] flex bg-headerBg  items-center m-auto  relative
//           2xl:w-[24rem] 2xl:h-[3rem] 
//           xl:w-[20rem] xl:h-[2.8rem]
//           sm:w-[16rem] sm:h-[2.3rem]
//           Xsm:w-[14rem] Xsm:h-[2rem]
//            ${darkMode && "dark:bg-darkHeadInput"}
//         `}
//         >
//           <span
//             className={`text-maincommonColor text-lg font-medium mx-auto cursor-pointer pl-[1rem]
//             xl:text-base 
//             sm:text-sm
//             Xsm:text-xs
//           ${darkMode && "dark:text-whiteletters"}
//           `}
//           >
//             {language === "Georgian"
//               ? "სასაუბრო"
//               : language === "English"
//               ? "Chat"
//               : language === "Spanish"
//               ? "Charla"
//               : "Default Result"}
//           </span>
//           <span
//             className="px-[0.4rem]"
//             onClick={() => setSettingsVisible(!settingsVisible)}
//           >
//             <img
//               className="cursor-pointer pr-[0.1rem]
//               xl:w-[1.3rem] xl:h-[1.3rem]
//               sm:w-[1.2rem] sm:h-[1.2rem]
//               Xsm:w-[1.1rem] Xsm:h-[1.1rem]
//               "
//               src={darkMode ? darkSetting : settingIcon}
//               alt="settingIcon"
//             />
//           </span>
//           {/* Settings component */}
//           {settingsVisible && (
//             <div className="absolute top-[0rem] right-0 z-10 bg-white">
//               <Settings
//                 setSettingsVisible={setSettingsVisible}
//                 darkMode={darkMode}
//                 setDarkMode={setDarkMode}
//                 messageShortcutSetting={messageShortcutSetting}
//                 setMessageShortcutSetting={setMessageShortcutSetting}
//                 language={language}
//                 setLanguage={setLanguage}
//                 clocksDisplay={clocksDisplay}
//                 setClockDisplay={setClockDisplay}
//               />
//             </div>
//           )}
//         </header>
//         <div>
//           <Chat
//             settingsVisible={settingsVisible}
//             darkMode={darkMode}
//             messageShortcutSetting={messageShortcutSetting}
//             clocksDisplay={clocksDisplay}
//             language={language}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WrapperComp;

const Clock = ({
  messageSentTime,
  clocksDisplay,
  darkMode,
}: {
  messageSentTime: Date;
  clocksDisplay: boolean;
  darkMode: boolean;
}) => {
  // 12 Hours Display
  const TwelveHoursClock = (time: Date) => {
    const currentTime = time;
    let hours: number = currentTime.getHours();
    let minutes: number = currentTime.getMinutes();
    hours = hours % 12 || 12;
    const formattedHours = hours < 10 ? "0" + hours : hours.toString();
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes.toString();
    return `${formattedHours}:${formattedMinutes}`;
  };
  // 24 Hours Display
  const TwentyFourHoursClock = (time: Date) => {
    const currentTime = time;
    let hours: string | number = currentTime.getHours();
    let minutes: string | number = currentTime.getMinutes();
    const formattedHours = hours < 10 ? "0" + hours : hours.toString();
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes.toString();
    return `${formattedHours}:${formattedMinutes}`;
  };

  return (
    <div
      className={`text-[0.55rem] font-light mt-[0.1rem] text-maincommonColor 
      ${darkMode && "text-whiteletters"}`}
    >
      {clocksDisplay
        ? TwelveHoursClock(messageSentTime)
        : TwentyFourHoursClock(messageSentTime)}
    </div>
  );
};

export default Clock;

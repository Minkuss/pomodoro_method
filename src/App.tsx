import { FC, useState } from "react";
import pomodoro from "./assets/pomodoro.png";
import "./App.scss";

export const App: FC = () => {
  const [timeStemp, setTimeStemp] = useState({ min: 0, sec: 0 }); // 25 minutes
  let time = 120000;
  let timer: number;

  const workingTimer = () => {
    time -= 1000;
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    setTimeStemp({ sec: seconds, min: minutes });
    console.log(time);
    if (time <= 0) {
      clearTimeout(timer);
    } else {
      timer = setTimeout(workingTimer, 1000);
    }
  };

  return (
    <div className="pomodoro-main">
      <img
        className="pomodoro-main_img"
        src={pomodoro}
        alt="pomodoro_timer_image"
      />
      <span className="pomodoro-main_timer">{`${
        timeStemp.min + ":" + timeStemp.sec
      }`}</span>
      <button
        onClick={workingTimer}
        className="pomodoro-main_button"
        type="button"
      >
        Start
      </button>
    </div>
  );
};

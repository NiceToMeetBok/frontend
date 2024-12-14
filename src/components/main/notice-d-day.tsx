"use client";

import { useEffect, useState } from "react";

const DDAY = new Date("2025-01-01 10:00:00").getTime();
export const NoticeDDay = () => {
  const [timegap, setTimegap] = useState(DDAY - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimegap(DDAY - new Date().getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const days = Math.ceil(timegap / (1000 * 60 * 60 * 24));
  const seconds = String(Math.floor(timegap / 1000) % 60).padStart(2, "0");
  const minutes = String(Math.floor(timegap / (1000 * 60)) % 60).padStart(2, "0");
  const hours = String(Math.floor(timegap / (1000 * 60 * 60)) % 24).padStart(2, "0");

  if (days === 0 && hours === "00" && minutes === "00" && seconds === "00") {
    return <div className="font-bold text-sm">새해 복 많이 받으세요!</div>;
  }
  return (
    <div className="flex gap-1 font-bold text-sm">
      <div>2025년 새해까지 </div>
      <div className="w-[125px]">
        <div className="w-full font-bold text-sm text-primary">
          {days}일 {hours}시 {minutes}분 {seconds}초
        </div>
      </div>
      <div>남았습니다 !</div>
    </div>
  );
};

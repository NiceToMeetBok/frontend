"use client";

import { useEffect, useState } from "react";
const DDAYTimeStamp = new Date("2025-01-01 00:00:00").getTime();

export const DDayProgress = () => {
  let signupdate = "2024-12-15 10:00:00"; // 임시 -> 나중에 user 정보에서 가져올 예정

  const SignupTimeStamp = new Date(signupdate).getTime();
  const [percent, setPercent] = useState(0);
  const totalDuration = DDAYTimeStamp - SignupTimeStamp;

  useEffect(() => {
    const updateProgress = () => {
      const now = new Date().getTime();
      const elapsed = now - SignupTimeStamp;
      setPercent(Math.min(100, Math.floor((elapsed / totalDuration) * 100)));
    };

    updateProgress();
    const interval = setInterval(updateProgress, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex h-[50px] w-full bg-secondary">
      <div
        className="z-10 flex h-full items-center justify-end rounded-r-full bg-primary"
        style={{ minWidth: "50px", width: `${percent}%` }}
      >
        {percent >= 50 && (
          <div className="flex w-full flex-col items-center font-regular text-sm">
            <div>
              <span>받은 덕담은 </span>
              <span className="text-white">2025년 1월 1일</span>
              <span>에</span>
            </div>
            <div> 확인할 수 있어요</div>
          </div>
        )}
        <img src="/bambok-progress.png" className="h-full" alt="progress" />
      </div>

      <img
        src="/progress-end.png"
        className="absolute right-1 top-0 z-0 h-[47px]"
        alt="progress-end"
      />

      {percent < 50 && (
        <div className="flex w-full flex-col items-center justify-center font-regular text-sm">
          <div>
            <span>받은 덕담은 </span>
            <span className="text-primary">2025년 1월 1일</span>
            <span>에</span>
          </div>
          <div> 확인할 수 있어요</div>
        </div>
      )}
    </div>
  );
};

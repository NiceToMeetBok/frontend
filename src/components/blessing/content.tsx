"use client";
import { getBlessing } from "@/services/apis/get-blessing";
import { BlessingType } from "@/types/blessings";
import { useEffect, useState } from "react";

type ContentProps = {
  id: string;
  token: string;
};

const Content = ({ id, token }: ContentProps) => {
  const [nickname, setNickname] = useState("");
  const [messageLines, setMessageLines] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const blessingdata: BlessingType = await getBlessing({ id, token });
      setNickname(blessingdata.nickname);
      setMessageLines(blessingdata.body.trim().split("\n"));
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="relative size-full">
        <img src="/letter.svg" className="absolute size-full" alt="편지지" />

        <div className="absolute left-1/2 top-1/2 box-border flex h-3/5 w-[70%] -translate-x-1/2 -translate-y-1/2 p-6">
          <div className="relative flex size-full items-center justify-center overflow-hidden">
            <div className="max-h-full w-full overflow-y-auto">
              {messageLines.map((line, index) => (
                <div key={index} className="whitespace-pre-wrap break-words py-1 text-center">
                  {line.trim() !== "" ? line : <br />}
                </div>
              ))}
              <div className="mt-4 w-full border-t-2 border-[#3C5ABE] p-2 text-right">
                from. {nickname}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;

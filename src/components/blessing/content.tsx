"use client";
import { getBlessing } from "@/services/apis/get-blessing";
import { BlessingType } from "@/types/blessings";
import { useEffect, useState } from "react";
import { Letter } from "@/components/ui";

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
    <div className="h-[95%]">
      <Letter messageLines={messageLines} nickname={nickname} />
    </div>
  );
};

export default Content;

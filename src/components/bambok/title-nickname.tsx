"use client";
import { getUserById } from "@/services/get-user-by-id";
import { UserType } from "@/types/user";
import { useEffect, useState } from "react";

type TitleNicknameProps = {
  isSame: boolean;
  identifier: string;
  loggedInUser: UserType | null;
};
const TitleNickname = ({ isSame, identifier, loggedInUser }: TitleNicknameProps) => {
  const [receiveUser, setReceiveUser] = useState<UserType | null>(loggedInUser);

  useEffect(() => {
    const fetchData = async () => {
      if (!isSame) {
        const data = await getUserById(identifier);
        setReceiveUser(data);
        console.log("receive:", data);
      } else {
        setReceiveUser(loggedInUser);
      }
    };
    fetchData();
  }, [isSame, identifier]);

  return (
    <div>
      <span className="text-primary">{receiveUser?.nickname}</span>
      <span> 님의 뱀복이가</span>
    </div>
  );
};

export default TitleNickname;

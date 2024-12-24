"use client";
import { getBlessingsById } from "@/services/get-blessings-by-id";
import { getBlessingsByToken } from "@/services/get-blessings-by-token";
import { getUserById } from "@/services/get-user-by-id";
import { BlessingType } from "@/types/blessings";
import { UserType } from "@/types/user";
import { useEffect, useState } from "react";

type TitleProps = {
  isSame: boolean;
  identifier: string;
  loggedInUser: UserType | null;
  token: string;
};
const Title = ({ isSame, identifier, loggedInUser, token }: TitleProps) => {
  const [receiveUser, setReceiveUser] = useState<UserType | null>(loggedInUser);
  const [blessings, setBlessings] = useState<BlessingType[] | []>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!isSame) {
        const userdata = await getUserById(identifier);
        setReceiveUser(userdata);

        const blessingdata = await getBlessingsById(identifier);
        setBlessings(blessingdata);
      } else {
        const blessingdata = await getBlessingsByToken(token);
        setBlessings(blessingdata);
        setReceiveUser(loggedInUser);
      }
    };
    fetchData();
  }, [isSame, identifier]);

  return (
    <>
      <header className="flex items-center">
        <div className="font-bold text-3xl">
          <div>
            <span className="text-primary">{receiveUser?.nickname}</span>
            <span> 님의 뱀복이가</span>
          </div>
          <div>
            <span className="text-primary">{blessings.length}</span>
            <span>개의 덕담을 받았어요. </span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Title;

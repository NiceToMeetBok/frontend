"use client";
import { getBlessingsById } from "@/services/apis/get-blessings-by-id";
import { getBlessingsByToken } from "@/services/apis/get-blessings-by-token";
import { getUserById } from "@/services/apis/get-user-by-id";
import { BlessingType } from "@/types/blessings";
import { UserType } from "@/types/user";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/ui";
type TitleProps = {
  isSame: boolean;
  identifier: string;
  loggedInUser: UserType | null;
  token: string;
};
const Title = ({ isSame, identifier, loggedInUser, token }: TitleProps) => {
  const [receiveUser, setReceiveUser] = useState<UserType | null>(loggedInUser);
  const [blessings, setBlessings] = useState<BlessingType[] | []>([]);
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      try {
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
      } catch (error) {
        router.push("/");
        console.error(error);
      }
    };
    fetchData();
  }, [isSame, identifier, token, loggedInUser]);

  return (
    <>
      <Header>
        <div>
          <span className="text-primary">{receiveUser?.nickname}</span>
          <span> 님의 뱀복이가</span>
        </div>
        <div>
          <span className="text-primary">{blessings.length}</span>
          <span>개의 덕담을 받았어요. </span>
        </div>
      </Header>
    </>
  );
};

export default Title;

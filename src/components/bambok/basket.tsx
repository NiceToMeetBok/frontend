"use client";
import { useEffect, useState } from "react";
import { getBlessingsById } from "@/services/get-blessings-by-id";
import { getBlessingsByToken } from "@/services/get-blessings-by-token";
import { BlessingType } from "@/types/blessings";

const BASKET_POSITION = [
  { left: "50%", top: "50%" },
  { left: "29%", top: "35%" },
  { left: "75%", top: "38%" },
  { left: "54%", top: "25%" },
  { left: "30%", top: "62%" },
  { left: "70%", top: "62%" },
];

type BasketProps = {
  isSame: boolean;
  identifier: string;
  token: string;
};

const Basket = ({ isSame, identifier, token }: BasketProps) => {
  const [blessings, setBlessings] = useState<BlessingType[] | []>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!isSame) {
        const blessingdata = await getBlessingsById(identifier);
        setBlessings(blessingdata);
      } else {
        const blessingdata = await getBlessingsByToken(token);
        setBlessings(blessingdata);
      }
    };
    fetchData();
  }, [isSame, identifier, token]);

  return (
    <div className="relative">
      <img src="/bambok-basket.png" className="w-full" />

      {blessings.length > 0 ? (
        blessings.map((blessing, index) => {
          const position = BASKET_POSITION[index % 6];

          return (
            <div
              key={index}
              className="absolute w-[20%] -translate-x-1/2 -translate-y-1/2"
              style={{
                left: position.left,
                top: position.top,
              }}
            >
              <div className="flex flex-col items-center">
                <img src={`/luckybags/${blessing.luckyBagId}.png`} />
                <div className="text-sm text-white">{blessing.nickname}</div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 transform text-2xl text-white">
          <div className="whitespace-nowrap">뱀복이를 공유하고</div>
          <div className="whitespace-nowrap">덕담을 받아보세요!</div>
        </div>
      )}
    </div>
  );
};

export default Basket;

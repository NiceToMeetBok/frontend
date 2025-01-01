"use client";
import { useEffect, useState } from "react";
import { getBlessingsById } from "@/services/apis/get-blessings-by-id";
import { getBlessingsByToken } from "@/services/apis/get-blessings-by-token";
import { BlessingType } from "@/types/blessings";
import { useRouter } from "next/navigation";
import { DDAY } from "@/constants/dday";

const BASKET_POSITION = [
  { left: "50%", top: "48%" },
  { left: "29%", top: "30%" },
  { left: "75%", top: "31%" },
  { left: "54%", top: "25%" },
  { left: "30%", top: "55%" },
  { left: "72%", top: "55%" },
];

const ITEMS_PER_PAGE = 6;

type BasketProps = {
  isSame: boolean;
  identifier: string;
  token: string;
};

const Basket = ({ isSame, identifier, token }: BasketProps) => {
  const router = useRouter();
  const [blessings, setBlessings] = useState<BlessingType[] | []>([]);
  const [currentPage, setCurrentPage] = useState(1);

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

  const totalPages = Math.ceil(blessings.length / ITEMS_PER_PAGE);
  const currentBlessings = blessings.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );
  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleOpenBlessing = (id: number) => {
    const now = new Date();
    if (now >= DDAY && id != 0 && isSame) {
      router.push(`/blessing/${id}`);
    }
  };

  return (
    <div className="relative pb-10">
      <img src="/bambok-basket.png" className="w-full" alt="basket" />

      {blessings.length > 0 ? (
        <>
          {currentBlessings.map((blessing, index) => {
            const position = BASKET_POSITION[index % 6];

            return (
              <div
                key={index}
                className="absolute w-1/5 -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: position.left,
                  top: position.top,
                }}
                onClick={() => handleOpenBlessing(blessing.id || 0)}
              >
                <div className="flex flex-col items-center">
                  <img src={`/luckybags/${blessing.luckyBagId}.png`} alt="luckybag" />
                  <div
                    className="overflow-hidden truncate text-center text-sm text-white"
                    style={{ width: "100%" }}
                  >
                    {blessing.nickname}
                  </div>
                </div>
              </div>
            );
          })}
          {totalPages > 1 && (
            <div className="absolute left-1/2 flex -translate-x-1/2 gap-2 text-black">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="rounded-full bg-gray px-4 py-1 disabled:opacity-50"
              >
                &lt;
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-4 py-2 ${page === currentPage && "bg-secondary"} rounded-3xl`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="rounded-full bg-gray px-4 py-1 disabled:opacity-50"
              >
                &gt;
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-2xl text-white">
          {isSame ? (
            <>
              <div className="whitespace-nowrap">뱀복이를 공유하고</div>
              <div className="whitespace-nowrap">덕담을 받아보세요!</div>
            </>
          ) : (
            <>
              <div className="whitespace-nowrap">따뜻한 마음을 담아</div>
              <div className="whitespace-nowrap">바구니를 채워주세요</div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Basket;

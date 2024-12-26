import { Button } from "@/components/ui";
import { BlessFormData } from "@/types/create";
import { useForm } from "react-hook-form";

type SelectLuckybagProps = {
  onPrevious: () => void;
  onNext: () => void;
  setValue: ReturnType<typeof useForm<BlessFormData>>["setValue"];
  watch: ReturnType<typeof useForm<BlessFormData>>["watch"];
};

export default function SelectLuckybag({
  onPrevious,
  onNext,
  setValue,
  watch,
}: SelectLuckybagProps) {
  const luckyBagId = watch("luckyBagId");
  const luckybagslist = Array.from({ length: 12 }, (_, index) => index + 1);

  return (
    <div className="flex h-full flex-col justify-between gap-7">
      <div className="text-lg">
        보내실 <span className="text-primary"> 복주머니 모양</span>을 선택해주세요
      </div>

      <div>
        <div className="grid grid-cols-3 content-center items-center">
          {luckybagslist.map((id) => (
            <div
              key={id}
              onClick={() => setValue("luckyBagId", id)}
              className={`cursor-pointer rounded-lg border-2 ${
                luckyBagId === id ? "border-secondary" : "border-none"
              } p-1.5`}
            >
              <img src={`/luckybags/${id}.png`} className="mx-auto w-3/4 object-contain" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex w-full flex-row justify-between">
        <Button onClick={onPrevious} className="w-[32%] rounded-lg bg-quaternary py-8 text-xl">
          이전
        </Button>
        <Button className="w-[65%] rounded-lg bg-secondary py-8 text-xl" onClick={onNext}>
          다음 단계 2/2
        </Button>
      </div>
    </div>
  );
}

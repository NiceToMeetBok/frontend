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
  const luckybagid = watch("luckybagid");
  const luckybagslist = Array.from({ length: 12 }, (_, index) => index + 1);

  return (
    <div>
      <div>복주머니 선택</div>

      <div className="grid grid-cols-3 content-center items-center gap-4">
        {luckybagslist.map((id) => (
          <div
            key={id}
            onClick={() => setValue("luckybagid", id)}
            className={`cursor-pointer rounded-lg border-2 ${
              luckybagid === id ? "border-secondary" : "border-none"
            }`}
          >
            <img src={`/luckybags/${id}.png`} className="mx-auto w-3/4 object-contain" />
          </div>
        ))}
      </div>

      <div className="flex w-full flex-row justify-between">
        <Button onClick={onPrevious} className="h-16 w-[32%] rounded-lg bg-quaternary text-xl">
          이전
        </Button>
        <Button className="h-16 w-[65%] rounded-lg bg-secondary text-xl" onClick={onNext}>
          다음 2/2
        </Button>
      </div>
    </div>
  );
}

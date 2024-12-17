import { Button } from "@/components/ui";
import { BlessFormData } from "@/types/create";
import { UseFormGetValues } from "react-hook-form";

type PreviewProps = {
  onPrevious: () => void;
  onNext: () => void;
  getValues: UseFormGetValues<BlessFormData>;
};

export default function Preview({ onPrevious, onNext, getValues }: PreviewProps) {
  const { nickname, message, luckybagid } = getValues();
  const messageLines = message.split("\n");

  return (
    <div className="flex h-full flex-col justify-between gap-7">
      <div className="text-lg">보빈님에게 아래와 같이 남겨져요!</div>

      <div className="relative h-full w-full">
        <img src="/letter.svg" className="absolute h-full w-full" alt="편지지" />
        <div className="absolute left-[50%] top-[50%] h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 overflow-y-auto">
          {messageLines.map((line, index) => (
            <div key={index} className="whitespace-pre-wrap break-words py-1">
              {line.trim() !== "" ? line : <br />}
            </div>
          ))}
          <div className="border-t-2 border-[#3C5ABE] p-2 text-right"> from. {nickname}</div>
        </div>
      </div>

      <div className="flex w-full flex-row justify-between">
        <Button onClick={onPrevious} className="h-16 w-[32%] rounded-lg bg-quaternary text-xl">
          이전
        </Button>
        <Button className="h-16 w-[65%] rounded-lg bg-secondary text-xl" onClick={onNext}>
          덕담 남기기
        </Button>
      </div>
    </div>
  );
}

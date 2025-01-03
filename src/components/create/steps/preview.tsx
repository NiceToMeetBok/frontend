import { Button, Letter } from "@/components/ui";
import { BlessFormData } from "@/types/create";
import { UseFormGetValues } from "react-hook-form";

type PreviewProps = {
  onPrevious: () => void;
  onNext: () => void;
  getValues: UseFormGetValues<BlessFormData>;
  r_nickname: string;
};

export default function Preview({ onPrevious, onNext, getValues, r_nickname }: PreviewProps) {
  const { nickname, message } = getValues();
  const messageLines = message.trim().split("\n");

  return (
    <div className="flex h-full flex-col justify-between gap-7">
      <div className="text-lg">{r_nickname}님에게 아래와 같이 남겨져요!</div>

      <Letter messageLines={messageLines} nickname={nickname} />

      <div>
        <div className="pb-2 text-center">
          한번 보내면 <span className="text-warn">수정할 수 없어요!</span>
        </div>
        <div className="flex w-full flex-row justify-between">
          <Button onClick={onPrevious} className="w-[32%] rounded-lg bg-quaternary py-8 text-xl">
            이전
          </Button>
          <Button className="w-[65%] rounded-lg bg-secondary py-8 text-xl" onClick={onNext}>
            덕담 남기기
          </Button>
        </div>
      </div>
    </div>
  );
}

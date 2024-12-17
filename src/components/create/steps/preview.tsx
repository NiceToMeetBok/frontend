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

  return (
    <div>
      <div>미리보기</div>
      <div>{message}</div>

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

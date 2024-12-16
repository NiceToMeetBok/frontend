import { Button } from "@/components/ui";

type NextStepProps = {
  onPrevious: () => void;
  onNext: () => void;
};

export default function Preview({ onPrevious, onNext }: NextStepProps) {
  return (
    <div>
      <div>미리보기</div>

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

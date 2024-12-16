import { Button } from "@/components/ui";

type NextStepProps = {
  onPrevious: () => void;
  onNext: () => void;
};
export default function SelectLuckybag({ onPrevious, onNext }: NextStepProps) {
  return (
    <div>
      <div>복주머니 선택</div>

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

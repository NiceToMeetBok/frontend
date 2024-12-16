import { Button } from "@/components/ui";

type NextStepProps = {
  onNext: () => void;
};

export default function InputBless({ onNext }: NextStepProps) {
  return (
    <div className="flex flex-col">
      <div>덕담입력</div>

      <div className="flex w-full flex-row justify-between">
        <Button
          onClick={() => {
            console.log("이전 페이지로 이동");
          }}
          className="h-16 w-[32%] rounded-lg bg-quaternary text-xl"
        >
          이전
        </Button>
        <Button className="h-16 w-[65%] rounded-lg bg-secondary text-xl" onClick={onNext}>
          다음 1/2
        </Button>
      </div>
    </div>
  );
}

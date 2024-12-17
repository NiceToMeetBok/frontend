import { Button, Input, Textarea } from "@/components/ui";
import { BlessFormData } from "@/types/create";
import { useForm, UseFormRegister } from "react-hook-form";

type InputBlessProps = {
  onNext: () => void;
  register: UseFormRegister<BlessFormData>; // 정확한 타입 지정
  watch: ReturnType<typeof useForm<BlessFormData>>["watch"];
};

export default function InputBless({ onNext, register, watch }: InputBlessProps) {
  const nickname = watch("nickname");
  const message = watch("message");

  return (
    <div className="flex flex-col">
      <div className="flex w-full items-center gap-2 rounded-md border-2 border-secondary px-3 py-2">
        <Input
          id="nickname"
          className="text-lg"
          placeholder="닉네임을 작성해주세요"
          {...register("nickname")}
        />
      </div>
      <div className="flex w-full items-center gap-2 rounded-md border-2 border-secondary px-3 py-2">
        <Textarea
          id="message"
          className="text-lg"
          placeholder="알잘딱깔센 덕담! 새해를 꽉 채워줄 한 줄 덕담 남겨주세요!"
          {...register("message")}
        />
      </div>

      <div className="flex w-full flex-row justify-between">
        <Button
          onClick={() => {
            console.log("이전 페이지로 이동");
          }}
          className="h-16 w-[32%] rounded-lg bg-quaternary text-xl"
        >
          이전
        </Button>
        <Button
          className="h-16 w-[65%] rounded-lg bg-secondary text-xl"
          disabled={!nickname || !message}
          onClick={onNext}
        >
          다음 단계 1/2
        </Button>
      </div>
    </div>
  );
}

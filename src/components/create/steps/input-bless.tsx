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
    <div className="flex h-full flex-col justify-between gap-7">
      <div className="text-lg">
        <span className="text-primary">뱀복이</span>가 대신 따뜻한 메세지를 전달해 드려요.
      </div>

      <div className="flex h-[90%] flex-col gap-6">
        <div className="flex w-full items-center gap-2 rounded-md border-2 border-secondary">
          <Input
            id="nickname"
            className="h-14 text-lg"
            placeholder="닉네임을 작성해주세요"
            {...register("nickname")}
          />
        </div>
        <div className="flex w-full flex-1 items-center gap-2 rounded-md border-2 border-secondary">
          <Textarea
            id="message"
            className="h-full text-lg"
            placeholder={`알잘딱깔센 덕담! \n새해를 꽉 채워줄 덕담을 남겨주세요!`}
            {...register("message")}
          />
        </div>
      </div>

      <div className="flex w-full flex-row justify-between">
        <Button
          onClick={() => {
            console.log("이전 페이지로 이동");
          }}
          className="w-[32%] rounded-lg bg-quaternary py-8 text-xl"
        >
          이전
        </Button>
        <Button
          className="w-[65%] rounded-lg bg-secondary py-8 text-xl"
          disabled={!nickname || !message}
          onClick={onNext}
        >
          다음 단계 1/2
        </Button>
      </div>
    </div>
  );
}

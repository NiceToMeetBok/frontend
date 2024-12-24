"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import InputBless from "./steps/input-bless";
import SelectLuckybag from "./steps/select-luckybag";
import Preview from "./steps/preview";
import { BlessFormData } from "@/types/create";
import { postBlessing } from "@/services/post-blessing";
import { LuckyBagIdType } from "@/types/blessings";

export default function BlessSteps({ identifier }: { identifier: string }) {
  const [step, setStep] = useState<"덕담입력" | "복주머니선택" | "미리보기">("덕담입력");
  const { register, handleSubmit, setValue, getValues, watch } = useForm<BlessFormData>({
    defaultValues: {
      nickname: "",
      message: "",
      luckyBagId: 1 as LuckyBagIdType,
    },
  });

  const onSubmit: SubmitHandler<BlessFormData> = async (data) => {
    console.log("전체 데이터:", data);
    await postBlessing({
      identifier: identifier,
      nickname: data.nickname,
      body: data.message,
      luckyBagId: data.luckyBagId as LuckyBagIdType,
    });
  };

  return (
    <>
      {step === "덕담입력" && (
        <InputBless onNext={() => setStep("복주머니선택")} register={register} watch={watch} />
      )}

      {step === "복주머니선택" && (
        <SelectLuckybag
          onPrevious={() => setStep("덕담입력")}
          onNext={() => setStep("미리보기")}
          setValue={setValue}
          watch={watch}
        />
      )}
      {step === "미리보기" && (
        <Preview
          onPrevious={() => setStep("복주머니선택")}
          onNext={handleSubmit(onSubmit)}
          getValues={getValues}
        />
      )}
    </>
  );
}

"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";
import InputBless from "./steps/input-bless";
import SelectLuckybag from "./steps/select-luckybag";
import Preview from "./steps/preview";
import { BlessFormData } from "@/types/create";
import { postBlessing } from "@/services/apis/post-blessing";
import { LuckyBagIdType } from "@/types/blessings";
import { useRouter } from "next/navigation";
import { getUserById } from "@/services/apis/get-user-by-id";
import { UserType } from "@/types/user";

export default function BlessSteps({ identifier }: { identifier: string }) {
  const router = useRouter();
  const [receiveUser, setReceiveUser] = useState<UserType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const userdata = await getUserById(identifier);
      setReceiveUser(userdata);
    };
    fetchData();
  }, [identifier]);

  const [step, setStep] = useState<"덕담입력" | "복주머니선택" | "미리보기">("덕담입력");
  const { register, handleSubmit, setValue, getValues, watch } = useForm<BlessFormData>({
    defaultValues: {
      nickname: "",
      message: "",
      luckyBagId: 1 as LuckyBagIdType,
    },
  });

  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const onSubmit: SubmitHandler<BlessFormData> = async (data) => {
    // console.log("전체 데이터:", data);
    await postBlessing({
      identifier: identifier,
      nickname: data.nickname,
      body: data.message,
      luckyBagId: data.luckyBagId as LuckyBagIdType,
    });

    setShowSuccessAlert(true);
    setTimeout(() => {
      setShowSuccessAlert(false);
      router.push(`/bambok/${identifier}`);
    }, 1000);
  };

  return (
    <>
      {step === "덕담입력" && (
        <InputBless
          onNext={() => setStep("복주머니선택")}
          register={register}
          watch={watch}
          identifier={identifier}
        />
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
          r_nickname={receiveUser?.nickname || ""}
        />
      )}
      {showSuccessAlert && (
        <div className="fixed bottom-32 left-1/2 -translate-x-1/2 rounded-3xl bg-black bg-opacity-50 px-4 py-4">
          덕담 남기기 성공!
        </div>
      )}
    </>
  );
}

"use client";
import { useState } from "react";
import InputBless from "./steps/input-bless";
import SelectLuckybag from "./steps/select-luckybag";
import Preview from "./steps/preview";

export default function BlessSteps() {
  const [step, setStep] = useState<"덕담입력" | "복주머니선택" | "미리보기">("덕담입력");
  return (
    <div>
      {step === "덕담입력" && <InputBless onNext={() => setStep("복주머니선택")} />}

      {step === "복주머니선택" && (
        <SelectLuckybag onPrevious={() => setStep("덕담입력")} onNext={() => setStep("미리보기")} />
      )}
      {step === "미리보기" && (
        <Preview onPrevious={() => setStep("복주머니선택")} onNext={() => console.log("성공")} />
      )}
    </div>
  );
}

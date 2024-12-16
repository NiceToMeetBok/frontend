"use client";
import { useState } from "react";

export default function BlessSteps() {
  const [step, setStep] = useState<"덕담입력" | "복주머니선택" | "미리보기">("덕담입력");
  return (
    <div>
      {step === "덕담입력" && (
        <div>
          <div>덕담입력</div>
          <div
            onClick={() => {
              setStep("복주머니선택");
            }}
          >
            다음
          </div>
        </div>
      )}

      {step === "복주머니선택" && (
        <div>
          <div>복주머니 선택</div>
          <div
            onClick={() => {
              setStep("미리보기");
            }}
          >
            다음
          </div>
        </div>
      )}

      {step === "미리보기" && (
        <div>
          <div>미리보기</div>
          <div
            onClick={() => {
              console.log("성공");
            }}
          >
            덕담 남기기
          </div>
        </div>
      )}
    </div>
  );
}

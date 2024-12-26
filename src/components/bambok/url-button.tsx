"use client";
import { Button } from "@/components/ui/index";
import Image from "next/image";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const URLButton = ({ identifier }: { identifier: string }) => {
  const textToCopy = `${process.env.NEXT_PUBLIC_BASE_URL}/bambok/${identifier}`;
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showFailAlert, setShowFailAlert] = useState(false);

  const handleCopy = (text: string, success: boolean) => {
    if (success) {
      setShowSuccessAlert(true);
      setTimeout(() => setShowSuccessAlert(false), 800);
    } else {
      setShowFailAlert(true);
      setTimeout(() => setShowFailAlert(false), 800);
    }
  };
  return (
    <div className="flex flex-col items-center gap-2">
      <div>
        친구들에게 <span className="text-primary">링크를 공유</span>해서
        <span className="text-primary"> 덕담</span>을 나눠보세요!
      </div>
      <CopyToClipboard text={textToCopy} onCopy={handleCopy}>
        <Button className="flex h-14 w-full items-center justify-center rounded-lg bg-secondary text-lg">
          <Image width={28} height={28} alt="share" src="/icon/share.svg" />

          <div className="text-xl">url 복사하기</div>
        </Button>
      </CopyToClipboard>
      {showSuccessAlert && (
        <div className="fixed bottom-28 left-1/2 -translate-x-1/2 rounded-3xl bg-black bg-opacity-50 px-4 py-4">
          URL 복사 성공!
        </div>
      )}
      {showFailAlert && (
        <div className="fixed bottom-28 left-1/2 -translate-x-1/2 rounded-3xl bg-black bg-opacity-50 px-4 py-4">
          URL 복사 실패!
        </div>
      )}
    </div>
  );
};

export default URLButton;

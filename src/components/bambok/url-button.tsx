"use client";
import { Button } from "@/components/ui/index";
import Image from "next/image";
import { CopyToClipboard } from "react-copy-to-clipboard";

const URLButton = ({ identifier }: { identifier: string }) => {
  const textToCopy = `${process.env.NEXT_PUBLIC_BASE_URL}/bambok/${identifier}`;

  return (
    <div className="flex flex-col items-center gap-2">
      <div>
        친구들에게 <span className="text-primary">링크를 공유</span>해서
        <span className="text-primary"> 덕담</span>을 나눠보세요!
      </div>
      <CopyToClipboard text={textToCopy}>
        <Button className="flex h-14 w-full items-center justify-center rounded-lg bg-secondary text-lg">
          <Image width={28} height={28} alt="share" src="/icon/share.svg" />

          <div className="text-xl">url 복사하기</div>
        </Button>
      </CopyToClipboard>
    </div>
  );
};

export default URLButton;

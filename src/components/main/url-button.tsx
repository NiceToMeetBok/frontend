import { Button } from "@/components/ui/index";
import Image from "next/image";

const URLButton = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div>
        친구들에게 <span className="text-primary">링크를 공유</span>해서{" "}
        <span className="text-primary">덕담</span>을 나눠보세요!
      </div>
      <Button className="flex h-16 w-full items-center justify-center rounded-lg bg-secondary text-lg">
        <Image width={28} height={28} alt="share" src="/icon/share.svg" />
        <div className="text-xl">url 복사하기</div>
      </Button>
    </div>
  );
};

export default URLButton;
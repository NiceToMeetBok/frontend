import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Page() {
  return (
    <>
      <div className="flex w-[90%] flex-col justify-center gap-2">
        <Label>
          <div className="text-lg">
            <span>사용하실</span>
            <span className="text-primary"> 닉네임</span>
            <span>을 작성해주세요</span>
          </div>
        </Label>
        <div className="flex w-full items-center gap-2 rounded-md border-2 border-secondary px-3 py-2">
          <Input className="min-w-0 flex-1" placeholder="ex) 보빈" />
          <span className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500">님의 뱀복이</span>
        </div>
      </div>
    </>
  );
}

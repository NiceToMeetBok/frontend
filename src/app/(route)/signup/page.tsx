import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Page() {
  return (
    <>
      <div>
        <div>나만의 뱀복이 만들기</div>
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label>사용하실 닉네임을 작성해주세요</Label>
        <Input placeholder="ex) 보빈" />
      </div>
    </>
  );
}

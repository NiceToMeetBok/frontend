import { Button } from "@/components/ui/index";

type SignUpButton = {
  active: boolean;
};
const SignUpButton = ({ active }: SignUpButton) => {
  return (
    <div>
      {active ? (
        <Button className="flex h-16 w-full items-center justify-center rounded-lg bg-secondary text-lg">
          <div>나의 뱀복이 만나러 가기</div>
        </Button>
      ) : (
        <Button className="flex h-16 w-full items-center justify-center rounded-lg bg-disable text-lg">
          <div>나의 뱀복이 만나러 가기</div>
        </Button>
      )}
    </div>
  );
};

export default SignUpButton;

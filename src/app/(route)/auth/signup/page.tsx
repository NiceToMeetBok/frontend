import SignupForm from "@/components/signup/signup-form";

export default function Signup() {
  return (
    <div className="flex h-full flex-col justify-between pl-[6vw] pr-[6vw]">
      <header className="flex items-center">
        <div className="font-bold text-3xl">
          <span> 나만의</span>
          <span className="text-primary"> 뱀복이</span>
          <span> 만들기</span>
        </div>
      </header>

      <div className="flex h-full flex-col justify-center">
        <SignupForm />
      </div>
    </div>
  );
}

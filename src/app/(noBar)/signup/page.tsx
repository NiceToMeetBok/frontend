import SignupForm from "@/components/signup/signup-form";
import { Header } from "@/components/ui";

export default function Signup() {
  return (
    <>
      <Header>
        <span> 나만의</span>
        <span className="text-primary"> 뱀복이</span>
        <span> 만들기</span>
      </Header>

      <div className="flex h-full flex-col pt-6">
        <SignupForm />
      </div>
    </>
  );
}

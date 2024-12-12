"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form } from "@/components/ui/index";
import NicknameInput from "./nickname-input";
import TermsAgreement from "./terms-agreement";
import SignupButton from "./signup-button";

const signupSchema = z.object({
  nickname: z.string().nonempty(),
  ageAgree: z.boolean(),
  privacyAgree: z.boolean(),
});

export type SignupFormValues = z.infer<typeof signupSchema>;

export default function SignupForm() {
  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      nickname: "",
      ageAgree: false,
      privacyAgree: false,
    },
    mode: "onChange",
  });

  const isButtonDisabled =
    !form.watch("nickname") || !form.watch("ageAgree") || !form.watch("privacyAgree");

  const onSubmit = (data: SignupFormValues) => {
    console.log("form data:", data);
    // TODO : 회원가입 API 호출
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <NicknameInput form={form} />
        <div className="flex justify-center">
          <img src="/bambok.png" alt="logo" className="w-2/3"></img>
        </div>
        <TermsAgreement form={form} />
        <SignupButton active={!isButtonDisabled} />
      </form>
    </Form>
  );
}

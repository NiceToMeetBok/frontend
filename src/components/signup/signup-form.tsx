"use client";

import { useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form } from "@/components/ui/index";
import NicknameInput from "./nickname-input";
import TermsAgreement from "./terms-agreement";
import SignupButton from "./signup-button";

import { useRouter } from "next/navigation";
import { putNickname } from "@/services/apis/put-nickname";

const signupSchema = z.object({
  nickname: z.string().nonempty(),
  ageAgree: z.boolean(),
  privacyAgree: z.boolean(),
});

export type SignupFormValues = z.infer<typeof signupSchema>;

export default function SignupForm() {
  const code = useSearchParams().get("code") || "";

  const router = useRouter();

  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      nickname: "",
      ageAgree: false,
      privacyAgree: false,
    },
    mode: "onChange",
  });

  const isButtonActive =
    form.watch("nickname") && form.watch("ageAgree") && form.watch("privacyAgree");

  const onSubmit = async (data: SignupFormValues) => {
    try {
      const response = await putNickname(code, data.nickname);
      const { identifier } = response;
      router.push(`/bambok/${identifier}`);
    } catch (error) {
      router.push("/");
      console.error("닉네임 저장 실패.");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex h-full flex-col justify-between gap-2"
      >
        <NicknameInput form={form} />
        <div className="flex justify-center">
          <img src="/bambok.png" alt="logo" className="w-2/3"></img>
        </div>
        <TermsAgreement form={form} />
        <SignupButton active={isButtonActive ? true : false} />
      </form>
    </Form>
  );
}

"use client";

import { Checkbox, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/index";
import { UseFormReturn } from "react-hook-form";
import { SignupFormValues } from "./signup-form";

type TermsAgreementProps = {
  form: UseFormReturn<SignupFormValues>;
};

export default function TermsAgreement({ form }: TermsAgreementProps) {
  const ageAgree = form.watch("ageAgree");
  const privacyAgree = form.watch("privacyAgree");
  const allAgree = ageAgree && privacyAgree;

  const handleAllAgreeChange = (value: boolean) => {
    form.setValue("ageAgree", value);
    form.setValue("privacyAgree", value);
  };

  return (
    <div>
      <FormItem>
        <FormLabel htmlFor="allAgree">
          <Checkbox id="allAgree" checked={allAgree} onCheckedChange={handleAllAgreeChange} />
          <span>전체 동의</span>
        </FormLabel>
      </FormItem>

      <hr className="bg-secondary" />

      <FormField
        control={form.control}
        name="ageAgree"
        render={({ field }) => (
          <FormItem>
            <FormLabel htmlFor="ageAgree">
              <Checkbox id="ageAgree" checked={field.value} onCheckedChange={field.onChange} />
              <span>필수 </span>
              <span>14세 이상 동의</span>
            </FormLabel>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="privacyAgree"
        render={({ field }) => (
          <FormItem>
            <FormLabel htmlFor="privacyAgree">
              <Checkbox id="privacyAgree" checked={field.value} onCheckedChange={field.onChange} />
              <span>필수 </span>
              <span>개인정보 수집 동의</span>
            </FormLabel>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}

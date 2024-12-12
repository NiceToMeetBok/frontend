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
    <div className="flex flex-col gap-2">
      <FormItem>
        <FormLabel htmlFor="allAgree" className="flex items-center gap-2">
          <Checkbox
            className="h-6 w-6"
            id="allAgree"
            checked={allAgree}
            onCheckedChange={handleAllAgreeChange}
          />
          <div className="text-base">전체 동의</div>
        </FormLabel>
      </FormItem>

      <hr className="h-[2px] border-secondary" />

      <FormField
        control={form.control}
        name="ageAgree"
        render={({ field }) => (
          <FormItem>
            <FormLabel htmlFor="ageAgree" className="flex items-center gap-2">
              <Checkbox
                className="h-6 w-6"
                id="ageAgree"
                checked={field.value}
                onCheckedChange={field.onChange}
              />
              <div>
                <span className="text-base text-warn">(필수) </span>
                <span className="text-base">14세 이상 동의</span>
              </div>
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
            <FormLabel htmlFor="privacyAgree" className="flex items-center gap-2">
              <Checkbox
                className="h-6 w-6"
                id="privacyAgree"
                checked={field.value}
                onCheckedChange={field.onChange}
              />
              <div>
                <span className="text-base text-warn">(필수) </span>
                <span className="text-base">개인정보 수집 동의</span>
              </div>
            </FormLabel>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}

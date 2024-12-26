"use client";

import { Input, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/index";
import { UseFormReturn } from "react-hook-form";
import { SignupFormValues } from "./signup-form";

type NicknameInputProps = {
  form: UseFormReturn<SignupFormValues>;
};

const NicknameInput = ({ form }: NicknameInputProps) => {
  return (
    <FormField
      control={form.control}
      name="nickname"
      render={({ field }) => (
        <FormItem>
          <FormLabel htmlFor="nickname">
            <div className="text-lg">
              <span>사용하실</span>
              <span className="text-primary"> 닉네임</span>
              <span>을 작성해주세요</span>
            </div>
          </FormLabel>
          <FormControl>
            <div className="flex w-full items-center gap-2 rounded-md border-2 border-secondary bg-quaternary px-3 py-2">
              <Input
                id="nickname"
                className="min-w-0 flex-1"
                placeholder="ex) 보빈 (최대 6자)"
                maxLength={6}
                {...field}
              />
              <span className="flex-shrink-0 whitespace-nowrap text-sm text-darkgray">
                님의 뱀복이
              </span>
            </div>
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default NicknameInput;

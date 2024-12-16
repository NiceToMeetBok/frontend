type NextStepProps = {
  onPrevious: () => void;
  onNext: () => void;
};

export default function Preview({ onPrevious, onNext }: NextStepProps) {
  return (
    <div>
      <div>미리보기</div>
      <div onClick={onPrevious}>이전</div>
      <div onClick={onNext}>덕담 남기기</div>
    </div>
  );
}

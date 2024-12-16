type NextStepProps = {
  onPrevious: () => void;
  onNext: () => void;
};
export default function SelectLuckybag({ onPrevious, onNext }: NextStepProps) {
  return (
    <div>
      <div>복주머니 선택</div>
      <div onClick={onPrevious}>이전</div>
      <div onClick={onNext}>다음 2/2</div>
    </div>
  );
}

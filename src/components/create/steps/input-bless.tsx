type NextStepProps = {
  onNext: () => void;
};

export default function InputBless({ onNext }: NextStepProps) {
  return (
    <div>
      <div>덕담입력</div>
      <div
        onClick={() => {
          console.log("이전 페이지로 이동");
        }}
      >
        이전
      </div>
      <div onClick={onNext}>다음 1/2</div>
    </div>
  );
}

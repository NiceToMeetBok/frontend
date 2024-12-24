import BlessSteps from "@/components/create/bless-steps";

export default function Create({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <div className="flex h-full flex-col pl-[6%] pr-[6%]">
      <header className="flex items-center">
        <div className="font-bold text-3xl">덕담 보내기</div>
      </header>

      <div className="flex-1 justify-between pt-6">
        <BlessSteps identifier={id}  />
      </div>
    </div>
  );
}

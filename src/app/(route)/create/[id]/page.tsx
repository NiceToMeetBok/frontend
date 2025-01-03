import BlessSteps from "@/components/create/bless-steps";
import { Header } from "@/components/ui";

export default function Create({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <div className="flex h-full flex-col px-[6%]">
      <Header>덕담 보내기</Header>

      <div className="flex-1 justify-between pt-6">
        <BlessSteps identifier={id} />
      </div>
    </div>
  );
}

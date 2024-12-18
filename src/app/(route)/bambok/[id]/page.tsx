export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  return <h1>{id}</h1>;
}

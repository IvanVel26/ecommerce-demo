import Catalog from "@/components/features/Catalog/Catalog";

interface ProductosPageProps {
  searchParams: Promise<{ buscar?: string }>;
}

export default async function ProductosPage({ searchParams }: ProductosPageProps) {
  const { buscar } = await searchParams;

  return (
    <div>
      <Catalog initialSearch={buscar ?? ""} />
    </div>
  );
}

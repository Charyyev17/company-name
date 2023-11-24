import Link from "next/link";
interface BreadcrumbProps {
  pageName: string;
}
const Breadcrumb = ({ pageName }: BreadcrumbProps) => {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex gap-4">
        <h2 className="text-3xl font-semibold text-black">{pageName}</h2>
        <Link
          href={pageName === "Projeler" ? "/admin/projects/add" : "/admin/gallery/add"}
          className="ml-3 bg-red-600 font-medium text-white px-5 py-2 rounded border-2 border-red-600 hover:bg-transparent hover:border-red-600 hover:text-red-600 transition-all duration-300"
        >
          {pageName === "Projeler" ? "Proje" : "Resim"} Ekle
        </Link>
      </div>

      <nav>
        <ol className="flex items-center gap-2">
          <li>
            <Link className="font-medium" href="/admin">
              Admin Panel /
            </Link>
          </li>
          <li className="font-medium text-red-600">{pageName}</li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;

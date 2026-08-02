export default function ResearchCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      
      <div className="text-4xl">
        {icon}
      </div>

      <h3 className="mt-4 text-xl font-bold text-gray-900">
        {title}
      </h3>

      <p className="mt-3 text-gray-600 leading-relaxed">
        {description}
      </p>

    </div>
  );
}
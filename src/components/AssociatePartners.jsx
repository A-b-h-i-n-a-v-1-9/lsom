export default function AssociatePartners({ partners = [] }) {
  if (!partners.length) return null;

  return (
    <section className="px-6 py-12 max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
        In Association With
      </h2>

      <div className="flex flex-wrap items-center gap-8">
        {partners.map((p, index) => (
          <a
            key={index}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <img
              src={p.logo}
              alt={p.title}
              className="h-20 w-auto object-contain rounded-xl"
            />
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
              {p.title}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
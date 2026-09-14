const audiences = [
  {
    title: "Adults",
    description:
      "Support for adults navigating anxiety, stress, relationships, and personal challenges.",
  },
  {
    title: "Couples",
    description:
      "A supportive space to improve communication, understanding, and connection.",
  },
  {
    title: "Children & Teens",
    description:
      "Guidance and support for younger clients working through emotional and behavioral challenges.",
  },
];

export default function WhoWeHelp() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
            Who We Help
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            Support for where you are right now.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every person comes to therapy with a different experience. We
            create space to understand what you are going through and find a
            path forward.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {audiences.map((audience) => (
            <article
              key={audience.title}
              className="rounded-2xl border border-gray-200 bg-white p-8"
            >
              <h3 className="text-2xl font-semibold text-gray-900">
                {audience.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {audience.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
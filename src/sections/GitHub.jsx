import GitHubCalendar from "react-github-calendar";

export default function GitHub() {
  return (
    <section className="bg-[#111827] text-white py-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">

        <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
          Open Source
        </p>

        <h2 className="text-5xl font-bold mb-12">
          GitHub Contributions
        </h2>

        <div className="bg-[#0B0F19] p-8 rounded-3xl border border-gray-800 overflow-auto">
          <GitHubCalendar username="VinayTiwari023" />
        </div>

      </div>
    </section>
  );
}
export default function OfficeShifting() {
  return (
    <>
      <section className="bg-white py-16 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Office Shifting Services
          </h1>
          <p className="text-lg text-gray-600 mb-10">
            Relocate your office quickly, safely, and with minimal downtime.
            We take care of files, equipment, and furniture with precision.
          </p>
        </div>

        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          <div className="bg-blue-50 rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
            <div className="text-5xl mb-4">💻</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Secure Device Packing
            </h2>
            <p className="text-gray-600">
              Monitors, desktops, servers — securely handled and packed to avoid damage.
            </p>
          </div>

          <div className="bg-blue-50 rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
            <div className="text-5xl mb-4">📂</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Files & Document Safety
            </h2>
            <p className="text-gray-600">
              Important files are sealed & labeled for secure and organized relocation.
            </p>
          </div>

          <div className="bg-blue-50 rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
            <div className="text-5xl mb-4">🪑</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Furniture Relocation
            </h2>
            <p className="text-gray-600">
              Dismantling, reassembly & ergonomic placement — we set up your workspace back.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="/find-movers"
            className="inline-block bg-blue-600 text-white text-lg font-medium px-8 py-3 rounded-full hover:bg-blue-700 transition"
          >
            Get Free Office Shifting Quote
          </a>
        </div>
      </section>
    </>
  );
}

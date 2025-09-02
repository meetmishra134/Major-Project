import { GrNotes } from "react-icons/gr";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";

function KeyHighlights() {
  return (
    <section className="mx-auto mt-12 px-6 py-16 xl:max-w-7xl">
      <h2 className="mb-12 text-center text-4xl">Key Highlights</h2>
      <div className="flex justify-center gap-10">
        <div className="flex h-52 w-70 flex-col items-center justify-center gap-3 rounded-2xl bg-blue-100 p-6 shadow-md transition hover:scale-105 hover:shadow-xl">
          <GrNotes
            size="4.5em"
            className="text-blue-800"
            style={{ marginTop: "5px" }}
          />
          <h3 className="text-lg font-semibold text-blue-700">
            Study Material Sharing
          </h3>
        </div>
        <div className="flex h-52 w-70 flex-col items-center justify-center gap-2 rounded-2xl bg-pink-100 p-6 shadow-md transition hover:scale-105 hover:shadow-xl">
          <HiOutlineBellAlert size="4.7em" className="text-pink-800" />
          <h3 className="text-lg font-semibold text-pink-700">
            Real Time Notices
          </h3>
        </div>
        <div className="flex h-52 w-70 flex-col items-center justify-center rounded-2xl bg-yellow-100 p-6 shadow-md transition hover:scale-105 hover:shadow-xl">
          <IoSearch size="4.7em" className="text-yellow-800" />
          <h3 className="text-lg font-semibold text-yellow-700">
            Search & Filter Functionality
          </h3>
        </div>
        <div className="flex h-52 w-70 flex-col items-center justify-center gap-2 rounded-2xl bg-green-100 p-6 shadow-md transition hover:scale-105 hover:shadow-xl">
          <IoPersonSharp className="text-green-800" size="4.5em" />
          <h3 className="text-lg font-semibold text-green-700">
            Role Based Access
          </h3>
        </div>
      </div>
    </section>
  );
}

export default KeyHighlights;

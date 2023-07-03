export default function InputName() {
  return (
    <div className="flex flex-col mx-auto justify-center w-full">
      <input className="w-full shadow-sm rounded-md py-2 pl-4 truncate border focus:outline-none focus:ring-4 focus:ring-opacity-20 transition disabled:opacity-50 disabled:cursor-not-allowed" />
      <button className="w-full align-center mt-4 ml-4 px-4 py-1 rounded-md bg-rose-600 hover:bg-rose-500 focus:outline-none focus:ring-4 focus:ring-rose-500 focus:ring-opacity-50 text-white transition">
        Set Name
      </button>
    </div>
  );
}

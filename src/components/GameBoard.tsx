export default function GameBoard() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Game Board</h2>
      <div className="grid grid-cols-2 gap-5 w-40 sm:60 md:80 justify-items-center items-center">
        <p className="cursor-pointer bg-red-600 p-4">Cat</p>
        <p className="cursor-pointer bg-blue-600 p-4">Dog</p>
        <p className="col-span-2 text-center cursor-pointer bg-gray-600 p-4">
          Empty
        </p>
        <p className="cursor-pointer bg-gray-600 p-4">Empty</p>
        <p className="cursor-pointer bg-gray-600 p-4">Empty</p>
      </div>
    </div>
  );
}

import { Outlet, Form } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div className="text-3xl font-bold text-center">Food Roulette</div>
      <div className="flex justify-center mt-4">
        <Form method="get" action="/results" className="w-1/2">
          <input
            type="text"
            placeholder="Zip Code"
            name="search"
            className="border rounded w-full py-2 px-3"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4"
          >
            Search
          </button>
        </Form>
      </div>
      <div id="detail" className="mt-4">
        <Outlet />
      </div>
    </>
  );
}

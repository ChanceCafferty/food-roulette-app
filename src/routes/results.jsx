/**
 * This is the results page. It will display the results of the search. The results are a list of restaurants that match the search criteria given to the Google Places API.
 */

import { Link, useLoaderData } from "react-router-dom";

export async function loader() {
  const results = [{ id: 1, name: "Burger King" }];
  return { results };
}

export default function Results() {
  const { results } = useLoaderData();
  return (
    <div className="">
      <h1>Results</h1>
      <nav>
        {results.length ? (
          <ul>
            {results.map((result) => (
              <li key={result.id}>
                <Link to={`results/${result.id}`}>{result.name}</Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>
            <i>No results</i>
          </p>
        )}
      </nav>
    </div>
  );
}

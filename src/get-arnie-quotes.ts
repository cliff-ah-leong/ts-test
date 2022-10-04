import { httpGet } from "./mock-http-interface";

// TODO define this type properly
type TResult = Partial<{
  "Arnie Quote": string;
  FAILURE: string;
}>;

export const getArnieQuotes = async (urls: string[]): Promise<TResult[]> => {
  // TODO: Implement this function.
  const promises = urls.map((url) => httpGet(url));
  return Promise.all(promises).then((results) =>
    results.map((result) =>
      result.status === 200
        ? { "Arnie Quote": JSON.parse(result.body).message }
        : { FAILURE: JSON.parse(result.body).message }
    )
  );
};

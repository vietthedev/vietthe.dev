import { STATUS_CODE } from "@std/http/status";
import { HttpError, PageProps } from "fresh";

const ErrorPage = (props: PageProps) => {
  const error = props.error; // Contains the thrown Error or HTTPError
  if (error instanceof HttpError) {
    const status = error.status; // HTTP status code

    // Render a 404 not found page
    if (status === STATUS_CODE.NotFound) {
      return <h1>What you're looking for isn't here :(</h1>;
    }
  }

  return (
    <section>
      <h1>Oh no. Something went wrong.</h1>
      <p>{(error as Error).message}</p>
    </section>
  );
};

export default ErrorPage;

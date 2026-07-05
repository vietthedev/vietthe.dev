import { STATUS_CODE } from "@std/http/status";
import { HttpError, PageProps } from "fresh";

const ErrorPage = (props: PageProps) => {
  const { error, params: { debug } } = props;

  if (error instanceof HttpError) {
    const status = error.status;

    if (status === STATUS_CODE.NotFound) {
      return <h1>What you're looking for isn't here :(</h1>;
    }
  }

  return (
    <section>
      <h1>Oh no. Something went wrong.</h1>
      {Boolean(debug) && (
        <ul>
          <li>Cause: {(error as Error).cause}</li>
          <li>Message: {(error as Error).message}</li>
          <li>{(error as Error).stack}</li>
        </ul>
      )}
    </section>
  );
};

export default ErrorPage;

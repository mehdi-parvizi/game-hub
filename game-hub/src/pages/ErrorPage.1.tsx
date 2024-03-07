import { Heading } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <Heading>Oops...</Heading>
      <Text>
        {isRouteErrorResponse(error)
          ? "Invalid page"
          : "an unexpected error happened"}
      </Text>
    </>
  );
};

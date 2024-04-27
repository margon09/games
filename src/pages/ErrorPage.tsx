import { isRouteErrorResponse, useRouteError } from "react-router-dom"
import TextPageSkeleton from "./TextPageSkeleton"

const ErrorPage = () => {
  const error = useRouteError()

  return (
    <TextPageSkeleton
      heading='Oops...'
      text={
        isRouteErrorResponse(error)
          ? 'This page does not exist'
          : 'An unexpected error occurred'
      }
    />
  )
}

export default ErrorPage
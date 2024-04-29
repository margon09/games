import { useParams } from "react-router-dom"
import useGame from "../hooks/useGame"
import { Spinner } from "@chakra-ui/react"
import TextPageSkeleton from "./TextPageSkeleton"

const GameDetailsPage = () => {
  const {slug} = useParams()
  // this const/slug will never be null
  const {data: game, isLoading, error} = useGame(slug!)

  if (isLoading) {
    return (
      <TextPageSkeleton
        spinner={<Spinner />}
      />
    )
  }

  if(error || !game) throw error
  
  return (
      <TextPageSkeleton
        heading={game.name}
        text={game.description_raw}
      />
  )
}

export default GameDetailsPage
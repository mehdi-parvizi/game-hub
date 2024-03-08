import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useTrailers(gameId);
  const first = data?.results[0];
  if (isLoading) return null;
  if (error) throw error;
  return first ? (
    <video src={data?.results[0]?.data[480]} poster={first.preview} controls />
  ) : null;
};

export default GameTrailer;

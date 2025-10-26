import { useSearchParams } from "react-router-dom";

function useUrlPosition() {
  const [searchParam] = useSearchParams();
  const lat = parseFloat(searchParam.get("lat"));
  const lng = parseFloat(searchParam.get("lng"));
  return { lat, lng };
}

export default useUrlPosition;

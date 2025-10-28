import { useSearchParams } from "react-router-dom";

function useUrlPosition() {
  const [searchParam] = useSearchParams();
  const lat = parseFloat(searchParam.get("lat")) || undefined;
  const lng = parseFloat(searchParam.get("lng")) || undefined;
  return { lat, lng };
}

export default useUrlPosition;

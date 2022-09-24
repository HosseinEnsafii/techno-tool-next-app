import { useSelector } from "react-redux";

function useUiState() {
  const uiState = useSelector((state) => state.uiState);
  return { ...uiState };
}

export default useUiState;

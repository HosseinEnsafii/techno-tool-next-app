import { useSelector } from "react-redux";

const useHomeState = () => {
  const homeState = useSelector((state) => state.homeState);
  return { ...homeState };
};
export default useHomeState;

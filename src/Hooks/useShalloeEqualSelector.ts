import { useSelector, shallowEqual } from "react-redux";

export default function useShallowEqualSelector(selector : any) {
  return useSelector(selector, shallowEqual);
}

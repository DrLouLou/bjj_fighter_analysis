import { useEffect,useRef } from "react";
/**
 * Simulate componentDidUpdate() method of Class Component
 * https://reactjs.org/docs/react-component.html#componentdidupdate
 */
const useUpdateEffect = (
  effect: AnyFunction,
  deps: unknown[] | undefined = undefined,
): void => {
  const mounted = useRef<boolean>();
  useEffect(() => {
    if (!mounted.current) {
      // fire componentDidMount
      mounted.current = true;
    } else {
      effect();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export default useUpdateEffect;

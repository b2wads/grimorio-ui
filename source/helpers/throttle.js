export const throttle = (fn, period) => {
  let currentCall;
  return () => {
    let previousCall = currentCall;
    currentCall = Date.now();
    if (previousCall === undefined || currentCall - previousCall > period) {
      fn();
    }
  };
};

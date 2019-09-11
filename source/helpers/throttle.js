export const throttle = (fn, time) => {
  let lastCall;
  return () => {
    let previousCall = lastCall;
    lastCall = Date.now();
    if (previousCall === undefined || lastCall - previousCall > time) {
      fn();
    }
  };
};

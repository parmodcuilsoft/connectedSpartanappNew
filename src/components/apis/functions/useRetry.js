/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from 'react';

function useRetry(fn) {
  const second = 1000; // Milliseconds to seconds
  const max = 600; // Ten minutes wait time
  const [retry, setRetry] = useState(1);
  const [call, setCall] = useState(false);
  const [response, setResponse] = useState();
  const exponentialScaleRetry = () =>
    setRetry(max > retry * 2 ? retry * 2 : max);
  const startCall = () => setCall(true);

  useEffect(() => {
    const callFn = async () => {
      const t = await fn();
      if (t) {
        setResponse(t);
      } else {
        setTimeout(exponentialScaleRetry, retry * second);
        console.log('Unsuccesful. Retry again in ', retry * second);
      }
    };
    if (call) {
      callFn();
    }
  }, [call, retry]);

  return [response, startCall];
}

export default useRetry;

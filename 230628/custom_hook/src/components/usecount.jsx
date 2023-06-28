import useCounter from "../hooks/count_hook";

function useCount() {
  const { count, increment } = useCounter(100);
  return (
    <div>
      <p>count : {count}</p>
      <button onClick={increment}>count up</button>
    </div>
  );
}

export default useCount;

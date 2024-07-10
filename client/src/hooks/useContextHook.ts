import { useAppContext } from "@/context/main";

const useContextHook = () => {
  const context = useAppContext();
  if (!context) return;

  const { state, sum } = context;

  return {
    state,
    sum,
  };
};

export default useContextHook;
// use
// const context = useContextHook();
// if (!context) {
//   return (
//     <div className="w-full h-screen flex items-center justify-center">
//       <div className="loader"></div>
//     </div>
//   );
// }

// const { state } = context;

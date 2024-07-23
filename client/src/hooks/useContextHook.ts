import { useAppContext } from "@/context/main";

const useContextHook = () => {
  const context = useAppContext();
  if (!context) return;

  const { linksArr, setLinkArr } = context;

  return {
    linksArr,
    setLinkArr,
  };
};

export default useContextHook;
// useage
// const context = useContextHook();
// if (!context) {
//   return (
//     <div className="w-full h-screen flex items-center justify-center">
//       <div className="loader"></div>
//     </div>
//   );
// }

// const { state } = context;

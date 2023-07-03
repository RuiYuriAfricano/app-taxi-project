import { cache } from "../../cache";
import { useApp } from "../../context/app";

export const useOnBoardThree = () => {
  const { setIsFirstTime } = useApp();

  const handleGoHome = async () => {
    await cache.set("isFirstTime", false);

    setIsFirstTime(false);
  };

  return { handleGoHome };
};

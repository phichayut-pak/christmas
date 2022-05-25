import { useState } from "react"
import Hi from "./components/Hi";
import GoodKid from "./components/GoodKid";
import GiveSomething from "./components/GiveSomething";
import LoadingBar from "./components/LoadingBar";
import BeforePresent from "./components/BeforePresent";
import Present from "./components/Present";
import Bye from "./components/Bye";

const App = () => {
  const [isHiDone, setIsHiDone] = useState(0)
  const [isGoodKidDone, setIsGoodKidDone] = useState(0)
  const [isGiveSomethingDone, setIsGiveSomethingDone] = useState(0)
  const [isLoadingDone, setIsLoadingDone] = useState(0)
  const [isBeforePresentDone, setIsBeforePresentDone] = useState(0)
  const [isPresentDone, setIsPresentDone] = useState(0)
  const [isByeDone, setIsByeDone] = useState(0)


  const isHiFinish = isHiDone !== 2 && isHiDone <= 2
  const isGoodKidDoneFinish = isHiDone >= 2 && (isGoodKidDone !== 2 && isGoodKidDone <= 2)
  const isGiveSomethingFinish = isHiDone >= 2 && isGoodKidDone >= 2 && (isGiveSomethingDone !== 2 && isGiveSomethingDone <= 2)
  const isLoadingFinish = isHiDone >= 2 && isGoodKidDone >= 2 && isGiveSomethingDone >= 2 && (isLoadingDone !== 2 && isLoadingDone <= 2)
  const isBeforePresentFinish = isHiDone >= 2 && isGoodKidDone >= 2 && isGiveSomethingDone >= 2 && isLoadingDone >= 2 && (isBeforePresentDone !== 2 && isBeforePresentDone <= 2)
  const isPresentFinish = isHiDone >= 2 && isGoodKidDone >= 2 && isGiveSomethingDone >= 2 && isLoadingDone >= 2 && isBeforePresentDone >= 2 && (isPresentDone !== 2 && isPresentDone <= 2)
  const isByeFinish = isHiDone >= 2 && isGoodKidDone >= 2 && isGiveSomethingDone >= 2 && isLoadingDone >= 2 && isBeforePresentDone >= 2 && (isByeDone !== 2 && isByeDone <= 2)

  return (
    <div className="min-h-screen bg-[#101820FF] flex justify-center items-center">
      {isHiFinish && <Hi doneHi={() => setIsHiDone(prev => prev + 1)}/>}
      {isGoodKidDoneFinish && <GoodKid doneGoodKid={() => setIsGoodKidDone(prev => prev + 1)} />}
      {isGiveSomethingFinish && <GiveSomething doneGive={() => setIsGiveSomethingDone(prev => prev + 1)} />}
      {isLoadingFinish && <LoadingBar doneLoading={() => setIsLoadingDone(prev => prev + 1)} />}
      {isBeforePresentFinish && <BeforePresent doneBeforePresent={() => setIsBeforePresentDone(prev => prev + 1)}/>}
      {isPresentFinish && <Present donePresent={() => setIsPresentDone(prev => prev + 1)} />}
      {/* {isByeFinish && <Bye doneBye={() => setIsByeDone(prev => prev + 1)} />} */}
    </div>
  );
}

export default App;

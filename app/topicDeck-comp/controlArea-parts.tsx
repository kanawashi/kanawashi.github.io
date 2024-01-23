import Image from "next/image";

function changeAndAddFlag (areaState: Array<boolean>) {
  //areaState内の表示フラグが非表示になっている物は全てtrueに変更
  const newState = areaState.map(() => {
    return true;
  });

  newState.push(false);
  return newState;
}

interface ClickEventProps {
  areaState: Array<boolean>,
  setAreaState: Function,
  isLargerMoreSM: boolean;
  topics: Array<object>
}

export function CardDeck ({areaState, setAreaState, isLargerMoreSM, topics}: ClickEventProps) {
  const canPlayTopicCard = areaState.length < Math.ceil(topics.length /3) +1;

  if (isLargerMoreSM) {
    return (
      <div id="card-deck-box" className="flex justify-center basis-1/4 m-5 relative">
        <button 
          onClick={() => setAreaState(changeAndAddFlag(areaState))}
          className="block w-32 h-20 skew-x-[-60deg] border border-black text-center absolute top-14
                          before:content-[''] before:w-32 before:h-16 before:skew-x-[60deg] before:border-black before:border-y before:border-l before:bg-white before:absolute before:top-[4.95rem] before:left-[3.4rem]
                            before:bg-[repeating-linear-gradient(180deg,#444444,#444444_0.5px,transparent_6px,transparent_5px)]
                          after:content-[''] after:w-[6.85rem] after:h-20 after:skew-y-[30deg] after:border-black after:border-x-2 after:border-t after:bg-white after:absolute after:top-[1.96rem] after:left-[8.01rem]
                            after:bg-[repeating-linear-gradient(90deg,#444444,#444444_0.3px,transparent_10px,transparent_10px)]"
          disabled={!canPlayTopicCard}
        >
          <div id="for-animation" 
               className={"w-32 h-20 border-black bg-white text-center absolute top-0 transition" + `${canPlayTopicCard ? " hover:top-3 active:top-12 ": ""}`}>
            山札ボタン
          </div>
        </button>
      </div>
    );
  } else {
    return (
      <button id="deckButton-forSP" 
              onClick={() => setAreaState(changeAndAddFlag(areaState))}
              className="bg-green-400 rounded-2xl">
        山札ボタン
      </button>
    );
  }


}

interface commentProps {
  areaState: Array<boolean>,
  topics: Array<object>,
  empathizedCount: number
}

//TODO areaStateのフラグ数と、topics.lengthと比較して判定。（山札ボタンの告知）
//TODO parrotイベントの更新終了の告知　→ empathizeCount >= 9

export function CommentBox ({ areaState, topics, empathizedCount }: commentProps) {
  const canPlayTopicCard = areaState.length < Math.ceil(topics.length /3) +1;
  const isPartying = empathizedCount >= 9;

  let comment: String = "";
  if (!canPlayTopicCard) {
      comment = "話題カードの展開終了";
  }

  if (isPartying) {
    comment = "紹介終了,,,,,,,,          ,,,,,,,,";
  }

  return (
    <div id="commentBox">
      <p>{comment}</p>
    </div>
  );
}



interface EmpathyProp {
  empathizedCount: number
}


//partyParrotエリア visiterの共感回数に応じてparty Parrot画像を追加、重ねていく。１０枚目（frame−9）を載せるときはpartyさせる。
//empathizedCounterには、重ねるべきparrot画像の枚数が記述されている。
export function ParrotArea ({ empathizedCount }: EmpathyProp) {
  const parrots = [];

  if (empathizedCount < 9) {
    for (let i = 0; i < empathizedCount; i++) {
      parrots.push( <Image key={`frame-${i}`} src={`/frame-${i}.gif`} alt="PartyParrot" width={220} height={220} className="text-center absolute bottom-2"/> );
    }
  } else {
    parrots.push( <Image src="/parrot.gif" alt="PartyParrot" width={220} height={220} className="text-center absolute bottom-2"/> );
  }

  return (
   <div id="parrot-area" className="w-60 h-48 relative">
     { parrots }
   </div>
  );

}


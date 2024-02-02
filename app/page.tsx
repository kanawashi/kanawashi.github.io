'use client'
import { useState } from "react";
import Image from "next/image";

import { useMediaQuery } from "./hooks/useMediaQuery";
import { CardProps ,CardSpace, Card } from "./topicDeck-comp/playmat-parts";
import { CardDeck, CommentBox, ParrotArea } from "./topicDeck-comp/controlArea-parts";
import { topics } from "./topics";

interface MatState { 
  areaState: Array<boolean>
  empathizeHandler: [number, Function]
}

interface PlayArea {
  topic: {title: string, sentence: string, empathyDegree: number}
  isPlayed: boolean
  empathizeHandler: [number, Function]
}

function PlayArea ({topic, isPlayed, empathizeHandler}: PlayArea) {
  const shouldPlay = isPlayed && topic;

  if (!shouldPlay) {
    return (
      <CardSpace>
      </CardSpace>
    )
  }

  return (
    <CardSpace>
      <Card topic={topic} empathizeHandler={empathizeHandler}/>
    </CardSpace>
  );
}

function PlayMat ({ areaState, empathizeHandler }: MatState) { 
  return (
    <div className="my-20 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-8">
      {
        areaState.map( (isPlayed, idx) => {
          return(
            <>
              <PlayArea topic={topics[idx*3]} isPlayed={isPlayed} empathizeHandler={empathizeHandler}/>
              <PlayArea topic={topics[idx*3 +1]} isPlayed={isPlayed} empathizeHandler={empathizeHandler}/>
              <PlayArea topic={topics[idx*3 +2]} isPlayed={isPlayed} empathizeHandler={empathizeHandler}/>
            </>
          );
        })
      }
    </div>
  );
}

export default function TopPage() {
  //TODO より実状に即したstate名を
  const initialAreaState: Array<boolean> = [false];
  const [areaState, setAreaState] = useState(initialAreaState); 

  const [empathizedCount, setEmpathizedCount] = useState(0);

  const isLargerMoreSM = useMediaQuery("(min-width: 640px)");

  const classNames = {
    head1: "underline decoration-blue-700 decoration-4 underline-offset-4 text-xl text-left align-middle p-3",
    paragraph: "text-left ml-5",
    list: "list-disc list-inside text-left ml-5"
  };

  return (
    <>
      <header className="flex flex-row justify-between text-xl text-left p-5 bg-cyan-200">
        <h1 className="pt-2">kinoa kanawashiのポートフォリオ　目次 </h1>
        <a id="github-link" href="https://github.com/kanawashi">
          <Image src="/github-mark.svg" alt="github-mark" width={50} height={50}/>
        </a>
      </header>
      <div className="container mx-auto">

        <div id="self-introduction" className="my-5">
          <div id="career">
            <h1 className={classNames.head1}>簡単な経歴</h1>
            <p className="text-left ml-5">初バイトで購入したMacBookで、プログラミングを始めたエンジニア未経験者です。<br/>
            喫茶店でのホール接客アルバイト - 家業の手伝いで清涼飲料水の製造 - 現在、警備会社でevメンテナンス会社で受電業務とev監視業務</p>
          </div>
          <div id="interested-field">
            <h1 className={classNames.head1}>興味のある分野</h1>
            <p className={classNames.paragraph}>サーバー構築</p>
            <p className={classNames.paragraph}>python,Rで統計分析</p>
            <p className={classNames.paragraph}>機械学習等を勉強して、振り飛車の復権に貢献したい。</p>
            <p className={classNames.paragraph}>ペン型のインターフェースの開発</p>
            <p className={classNames.paragraph}>electronでデスクトップアプリの開発</p>
          </div>
          <div id="learning-process">
            <h1 className={classNames.head1}>学習過程</h1>
            <p className="text-left ml-5">以下の３つで勉強してきました。 N予備校期間中にGASでスクレイピング作成</p>
            <ul>
              <li className={classNames.list} >progate</li>
              <li className={classNames.list} >N予備校</li>
              <li className={classNames.list} >AOJ</li>
            </ul>
          </div>
          <div id="artifact">
            <h1 className={classNames.head1}>成果物</h1>
            <ul>
              <li className={classNames.list}>このポートフォリオ
                <a href="https://github.com/kanawashi/kanawashi.github.io">
                  <Image src="https://gh-card.dev/repos/kanawashi/kanawashi.github.io.svg" alt="github-card" width={500} height={250}/>
                </a>
              </li>
              <li className={classNames.list}>Google App Scriptのスクレイピングコード</li>
            </ul>
          </div>
        </div>

        <div id="topic-deck" className="my-5">
          <h1 className="font-mono text-4xl font-semibold text-center">話題デッキ</h1>

          <div id="sticky-control-area" className="flex justify-between w-full h-52 mt-5 bg-yellow-50 border-red-500 sticky top-0">
            <CardDeck areaState={areaState} setAreaState={setAreaState} isLargerMoreSM={isLargerMoreSM} topics={topics}/>
            <div id="evaluation-area" className="flex justify-between basis-3/5 m-2">
              <CommentBox areaState={areaState} topics={topics} empathizedCount={empathizedCount}/>
              <ParrotArea empathizedCount={empathizedCount}/>
            </div>
          </div>

          <PlayMat areaState={areaState} empathizeHandler={[empathizedCount, setEmpathizedCount]}/>

        </div>
        <footer></footer>
      </div>
    </>

  )
};


import Image from "next/image";

export const topics: Array<{title: string, sentence: string, imageUrl?: JSX.Element, empathyDegree: number}> = [
  {title: "将棋", sentence: "最も好きな作戦は真部流", imageUrl: ( <Image src="https://shogipic.jp/v/1S1q@3x.png" alt="description" width={360} height={270}/> ), empathyDegree: 3},
  {title: "好きなサービス", sentence: "Notion", empathyDegree: 2},
  {title: "近く取りたい資格", sentence: "運転免許、基本情報技術者、toeic750点", empathyDegree: 1},
  {title: "作ってみたいサービス", sentence: "キーボードより便利な入力デバイス, カテゴライズアプリ", empathyDegree: 1},
  {title: "次に行ってみたい旅行先", sentence: "台湾", empathyDegree: 1},
  {title: "座右の銘", sentence: "前の手を生かす", empathyDegree: 1},
  {title: "天一経験", sentence: "一度だけ、あっさり経験", empathyDegree: 1},
  {title: "好きなコーヒー銘柄", sentence: "文章7", empathyDegree: 1},
  {title: "欲しいもの", sentence: "デスクトップ一式", empathyDegree: 1},
  {title: "旅行先に必要なものは", sentence: "MacBook", empathyDegree: 1},
  {title: "雪山", sentence: "上越妙高の赤倉温泉はいいぞ。", empathyDegree: 1},
  {title: "使ってみたいフレームワーク", sentence: "electronでデスクトップアプリの作成", empathyDegree: 1}
];

// 追加：画像、リンク等
// 自分の知りたいこと


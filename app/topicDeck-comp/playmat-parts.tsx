export interface CardProps {
  children?: React.ReactNode
}

export function CardSpace (props: CardProps) {
  return (
    <div id="card-space" className="flex justify-item-center items-center h-80 my-11 border border-black">
      {props.children}
    </div>
  )
}

export interface TopicDetail {
  topic: {
    title: string,
    sentence: string,
    imageUrl?: JSX.Element,
    empathyDegree: number
  },
  empathizeHandler: [number, Function]
}

export function Card ({ topic, empathizeHandler}: TopicDetail) {
  const [empathizedCount, setEmpathizedCount] = empathizeHandler;

  return (
    <div className="h-96 w-full mx-4 p-4 border-gray-800 bg-lime-200 shadow-lg shadow-gray-300 rounded-2xl">
      <h3 className="text-center text-xl border-b border-black">{topic.title}</h3>
      <p>{topic.sentence}</p>
      { topic.imageUrl }
      <button 
        onClick={() => setEmpathizedCount(empathizedCount + topic.empathyDegree)}
        className="bg-fuchsia-300 rounded-2xl"
      >
        いいねボタン
      </button>
    </div>
  )
}

 
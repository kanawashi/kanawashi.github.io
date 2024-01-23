export interface CardProps {
  children: React.ReactNode
}

export function CardSpace (props: CardProps) {
  return (
    <div id="card-space" className="flex justify-item-center items-center h-80 my-11 border border-black">
      {props.children}
    </div>
  )
}

export interface TopicDetail {
  title: string,
  sentence: string,
  empathyDegree: number,
  empathizeHandler: [number, Function]
}

export function Card ({title, sentence, empathyDegree, empathizeHandler}: TopicDetail) {
  const [empathizedCount, setEmpathizedCount] = empathizeHandler;

  return (
    <div className="h-96 w-full mx-4 p-4 border-gray-800 bg-lime-200 shadow-lg shadow-gray-300 rounded-2xl">
      <h3 className="text-center text-xl border-b border-black">{title}</h3>
      <p>{sentence}</p>
      <button 
        onClick={() => setEmpathizedCount(empathizedCount + empathyDegree)}
        className="bg-fuchsia-300 rounded-2xl"
      >
        いいねボタン
      </button>
    </div>
  )
}

 
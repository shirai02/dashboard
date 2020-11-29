import React from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  const message: string = 'Hello React!!';

  return (
    <div className="App">
      <ul>
        {items.map((item: Item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <Child message="子コンポーネント" />
    </div>
  );
}

type Props = {
  message: string
}

const Child: React.FC<Props> = (props) => {
  return (
    <p>{props.message}</p>
  )
}

type Item = {
  id: number,
  title: string
}

const items: Item[] = [
  {
    id: 1,
    title: '一番高い商品'
  }, {
    id: 2,
    title: '一番ダサい商品'
  }
]

export default App;

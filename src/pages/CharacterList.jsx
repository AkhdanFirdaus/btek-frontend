import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';

function CharacterList() {
  const [data, setData] = React.useState([]);
  const [url, setUrl] = React.useState('https://rickandmortyapi.com/api/character');
  const [info, setInfo] = React.useState('');

  React.useEffect(() => {
    const loadData = async () => {
      const res = await axios.get(url);
      setData([...res.data.results]);
      setInfo(res.data.info);
    };

    loadData();
  }, [url]);

  return (
    <div className="container mx-auto my-5">
      <div className="grid grid-cols-3 gap-4">
        {data.length > 0 && data.map((value) => (
          <Link to={`/characters/${value.id}`} key={value.id.toString()}>
            <Card data={value} />
          </Link>
        ))}
      </div>
      <div className="flex justify-center space-x-2 my-4">
        <Button disabled={info?.prev == null} handleClick={() => setUrl(info?.prev)} name="prev" />
        <Button disabled={info?.next == null} handleClick={() => setUrl(info?.next)} name="next" />
      </div>
    </div>
  );
}

export default CharacterList;

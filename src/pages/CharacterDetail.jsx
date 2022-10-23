import axios from 'axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function CharacterDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = React.useState();

  React.useEffect(() => {
    const loadData = async () => {
      const res = await axios.get(`https://rickandmortyapi.com/api/character/${id.toString()}`);
      setData(res.data);
    };

    loadData();
  }, []);

  return (
    <div>
      <img src={data?.image} alt={data?.name} className="w-full object-cover" />
      <h1>{data?.name}</h1>
      <button type="button" onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}

export default CharacterDetail;

'use client';

import { POKEMON_URL } from '@/shared/constants/urls.constant';
import useGetDetailPokemon from '@/shared/hooks/pokemon/useGetDetailPokemon';
import axiosIntance from '@/shared/utils/axios';
import { useEffect, useState } from 'react';

const PokemonCard = ({ id }) => {
    //   const [poke, setPoke] = useState({});

    const { data: poke, isSuccess, isLoading } = useGetDetailPokemon({ id });

    //   useEffect(() => {
    //     (async () => {
    //       const data = await axiosIntance.get(`${POKEMON_URL.DETAIL}/${id}`);
    //       setPoke(data);
    //       console.log("🚀 ~ data:", data);
    //     })();
    //   }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="border rounded-lg p-3 flex justify-between items-center">
            <div className="capitalize text-lg font-semibold">{poke.name}</div>
            <img src={poke.sprites?.front_default} alt="" />
        </div>
    );
};

export default PokemonCard;

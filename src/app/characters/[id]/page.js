import Link from "next/link";

const getCharacter = async (id) => {
  const res = await fetch(`https://hp-api.onrender.com/api/character/${id}`);
  const character = await res.json();

  return character ? character[0] : null;
}

export default async function CharacterPage({ params }) {
  const character = await getCharacter(params.id);
  console.log('Params', params);
  return (
    <>
      <h1>
        {character ? character.name : ''} Page
      </h1>
      {
        character && (
          <>
            <ul>
              <li>House: {character.house}</li>
              <li>Alive: {character.alive ? 'Yes': 'No'}</li>
            </ul>
          </>
        )
      }
      <Link href={"/characters"}>Go back</Link>
    </>
  )
}
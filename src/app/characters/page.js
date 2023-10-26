
// export async function getServerSideProps() {
//   const res = await fetch(`https://hp-api.onrender.com/api/characters`)
//   const characters = await res.json()
//   return { props: { characters } }
// }

import Link from "next/link";

const getCharacters = async () => {
  const res = await fetch(`https://hp-api.onrender.com/api/characters`)
  const characters = await res.json()
  console.log(characters);

  return characters;
}


export default async function CharactersPage() {
  const characters = await getCharacters();

  return (
    <>
      <h1>Characters page</h1>
      <ul>
        {characters?.map((character) => (
          <li key={character.id}>{character.name} - <Link href={`/characters/${character.id}`}>See details</Link></li>
        ))}
      </ul>
    </>
  )
}
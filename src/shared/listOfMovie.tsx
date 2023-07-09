export interface Movie {
  id: number
  image: string
  title: string
  year: string
  nation: string
  description: string
  trailer: string
}

export const listOfMovies: Movie[] = [
  {
    id: 1,
    image: 'assets/images/doraemon.jpg',
    title: 'Doraemon ',
    year: '1979',
    nation: 'Japan',
    description:
      "Doraemon is a robotic cat from the 22nd century who travels back in time to help a young boy named Nobita Nobi. Together, they embark on various adventures and use Doraemon's futuristic gadgets to solve problems and improve Nobita's life.",
    trailer: 'https://www.youtube.com/embed/bUTfUVLP_Zk'
  },
  {
    id: 2,
    image: 'assets/images/shin-chan.jpg',
    title: 'Crayon Shin-chan',
    year: '1992',
    nation: 'Japan',
    description:
      'Crayon Shin-chan follows the mischievous adventures of a young boy named Shinnosuke Nohara, also known as Shin-chan. He is known for his cheeky behavior, funny antics, and his unique way of viewing the world.',
    trailer: 'https://www.youtube.com/embed/Fn0DfAtzp0w'
  },
  {
    id: 3,
    image: 'assets/images/hamtaro.jpg',
    title: 'Hamtaro',
    year: '2000',
    nation: 'Japan',
    description:
      'Hamtaro is a cute and adventurous hamster who forms a Ham-Ham gang with his fellow hamster friends. They have exciting escapades, go on quests, and learn valuable lessons about friendship and teamwork.',
    trailer: 'https://www.youtube.com/embed/O4Aenzq-gIw'
  },
  {
    id: 4,
    image: 'assets/images/detective-conan.jpg',
    title: 'Detective Conan',
    year: '1996',
    nation: 'Japan',
    description:
      'Detective Conan (also known as Case Closed) follows the story of a brilliant high school detective named Shinichi Kudo, who is transformed into a child after being poisoned by a criminal organization. He adopts the alias Conan Edogawa and solves mysteries while searching for a cure.',
    trailer: 'https://www.youtube.com/embed/bdw3xIDog7Y'
  },
  {
    id: 5,
    image: 'assets/images/sailor-moon.jpg',
    title: 'Sailor Moon',
    year: '1992',
    nation: 'Japan',
    description:
      'Sailor Moon revolves around a young girl named Usagi Tsukino, who discovers she is the reincarnation of a magical warrior known as Sailor Moon. She and her friends, the Sailor Guardians, protect the Earth from various villains and forces of evil.',
    trailer: 'https://www.youtube.com/embed/Qip64C10lLg'
  },
  {
    id: 6,
    image: 'assets/images/one-piece.jpg',
    title: 'One Piece',
    year: '1999',
    nation: 'Japan',
    description:
      'One Piece follows the adventures of Monkey D. Luffy and his pirate crew in their search for the ultimate treasure known as One Piece. The series is filled with epic battles, comedic moments, and a vast world of diverse characters.',
    trailer: 'https://www.youtube.com/embed/AeaD3Q-bFjU'
  },
  {
    id: 7,
    image: 'assets/images/pokemon.jpg',
    title: 'Pokémon',
    year: '1997',
    nation: 'Japan',
    description:
      'Pokémon is a popular franchise that follows the journey of a young Pokémon Trainer named Ash Ketchum and his loyal Pikachu. Together, they travel through various regions, catch Pokémon, compete in battles, and strive to become Pokémon Masters. The series showcases the bond between trainers and their Pokémon, as well as the values of friendship, determination, and teamwork. With a wide array of lovable and iconic Pokémon creatures, Pokémon has captured the hearts of fans worldwide.',
    trailer: 'https://www.youtube.com/embed/Y183Bawp2yI'
  },
  {
    id: 8,
    image: 'assets/images/yugioh.jpg',
    title: 'Yu-Gi-Oh!',
    year: '2000',
    nation: 'Japan',
    description:
      'Yu-Gi-Oh! revolves around the story of Yugi Muto, a young boy who solves an ancient Egyptian puzzle and gains the spirit of an ancient pharaoh within him. As Yugi, he participates in a card game known as Duel Monsters, where players use magical cards to summon powerful creatures and cast spells to defeat their opponents. The series combines elements of adventure, fantasy, and strategy, making it a favorite among fans of card games.',
    trailer: 'https://www.youtube.com/embed/7Y7G9lJbKAE'
  },
  {
    id: 9,
    image: 'assets/images/dragon-ball.jpg',
    title: 'Dragon Ball',
    year: '1986',
    nation: 'Japan',
    description:
      'Dragon Ball follows the story of Goku, a Saiyan warrior with incredible strength and a pure heart. Along his journey, he trains, fights powerful foes, and participates in martial arts tournaments. The series showcases epic battles, unique transformations, and a captivating storyline filled with humor, adventure, and themes of friendship and perseverance.',
    trailer: 'https://www.youtube.com/embed/eW7SdrhLhJU'
  },
  {
    id: 10,
    image: 'assets/images/naruto.jpg',
    title: 'Naruto',
    year: '2002',
    nation: 'Japan',
    description:
      "Naruto follows the story of Naruto Uzumaki, a young ninja with a dream of becoming the strongest ninja in his village. The series explores Naruto's journey as he trains, faces powerful enemies, and forms bonds with his friends and mentors. With its dynamic action, compelling characters, and themes of friendship, perseverance, and redemption, Naruto has become one of the most beloved anime series of all time.",
    trailer: 'https://www.youtube.com/embed/-SBBef-OEiE'
  }
]

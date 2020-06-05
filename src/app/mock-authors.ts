import { Author } from './author';

export const AUTHORS = [
  {
    id: 1,
    name: 'Michael Morpurgo',
    biography: `Sir Michael Andrew Bridge Morpurgo, OBE, FRSL, 
    FKC (born Michael Andrew Bridge; 5 October 1943) is an English book author, 
    poet, playwright, and librettist who is known best for children's novels 
    such as War Horse (1982). His work is noted for its "magical storytelling",
    for recurring themes such as the triumph of an outsider or survival, for characters' 
    relationships with nature, and for vivid settings such as the Cornish coast or World War I.
    Morpurgo became the third Children's Laureate, from 2003 to 2005.`,
    books: [
      {
        id: 9,
        name: 'War Horse',
        author: 'Michael Morpurgo',
        genre: `children's novel`,
        summary: `One day, a man named Ted Narracott buys a young horse for 30 guineas when he was supposed to buy a horse for plough at an auction. Ted's son, Albert, names the horse Joey and grows to love him and protecting the young horse from Ted when he is drunk and caring for Joey. While with the Narracotts, Joey also meets a horse named Zoey, who was a source of comfort to Joey, and whose name partially inspired his.`,
      },
    ],
  },
  {
    id: 2,
    name: 'Erle Stanley Gardner',
    biography: `Erle Stanley Gardner (July 17, 1889 – March 11, 1970) was an American lawyer and author.
    He is best known for the Perry Mason series of detective stories, but he wrote numerous other novels
    and shorter pieces and also a series of nonfiction books, mostly narrations of his travels 
    through Baja California and other regions in Mexico. The best-selling American author of 
    the 20th century at the time of his death, Gardner also published under numerous pseudonyms, 
    including A.A. Fair, Kyle Corning, Charles M. Green, Carleton Kendrake, Charles J. Kenny, 
    Les Tillray and Robert Parr.`,
    books: [
      {
        id: 1,
        name: 'The Case of the Perjured Parrot',
        author: 'Erle Stanley Gardner',
        genre: 'detective novels',
        summary: `One of Perry Mason's trademarks is his ability, in court, to switch the physical evidence in a case. He generally does this with guns or bullets, and it confuses the jury, to his client's advantage. In this case, Perry offers a coroner's inquest two parrots, one of which swore like a muleskinner and was found near the body of a millionaire hermit who had been murdered.
        Jacques Barzun and Wendell Hertig Taylor, A Catalogue of Crime: "This early Perry Mason is uncommonly full of detection, and the games played in it with parrots do not detract from plausibility. Denouement not huddled—all in all, a model in his special genre.`,
      },
      {
        id: 5,
        name: `The Case of the Shoplifter's Shoe`,
        author: 'Erle Stanley Gardner',
        genre: 'detective novels',
        summary: `Mason defends an elderly woman who claims to have no memory of shooting a man, but he needs to know why she would go shoplifting when she has plenty of money in her purse.`,
      },
      {
        id: 6,
        name: 'The Case of the Careless Kitten',
        author: 'Erle Stanley Gardner',
        genre: 'detective novels',
        summary: `Mason defends Della Street, who is accused of helping a material witness or possible murder suspect vanish from a crime scene. Key clues in the murder case are the behavior of a greedy kitten and the impersonation of an elderly crippled woman.`,
      },
    ],
  },
  {
    id: 3,
    name: 'Rex Stout',
    biography: `Rex Todhunter Stout (/staʊt/; December 1, 1886 – October 27, 1975) was an American writer
    noted for his detective fiction. His best-known characters are the detective Nero Wolfe and 
    his assistant Archie Goodwin, who were featured in 33 novels and 39 novellas between 1934 and 1975.
    In 1959, Stout received the Mystery Writers of America's Grand Master Award. The Nero Wolfe corpus 
    was nominated Best Mystery Series of the Century at Bouchercon XXXI, the world's largest mystery 
    convention, and Rex Stout was nominated Best Mystery Writer of the Century.
    In addition to writing fiction, Stout was a prominent public intellectual for decades. 
    Stout was active in the early years of the American Civil Liberties Union and a founder 
    of the Vanguard Press. He served as head of the Writers' War Board during World War II, 
    became a radio celebrity through his numerous broadcasts, and was later active in promoting world 
    federalism. He was the long-time president of the Authors Guild, during which he sought to benefit 
    authors by lobbying for reform of the domestic and international copyright laws,[specify]
    and served a term as president of the Mystery Writers of America.`,
    books: [
      {
        id: 7,
        name: `Prisoner's Base`,
        author: 'Rex Stout',
        genre: 'detective novel',
        summary: `A young woman who will shortly inherit control of a large manufacturing firm wants to rent a room in Nero Wolfe's house. Wolfe, outraged, puts her out; she is found murdered later that night. With no client in sight, Wolfe is not interested, but Archie feels responsible. His first step is to crash a meeting of the manufacturer's board of directors.`,
      },
      {
        id: 10,
        name: `The Silent Speaker`,
        author: 'Rex Stout',
        genre: 'detective novel',
        summary: `Cheney Boone, the Director of the Bureau of Price Regulation (BPR) is beaten to death with a monkey wrench shortly before a speech he is to deliver at a gathering of the National Industrial Association (NIA), a prominent conglomeration of big business interests. Considerable antagonism exists between the two parties, and the public begins to hold the NIA responsible for Boone's murder. This attracts the attention of Nero Wolfe, who is facing financial ruin, and with the help of Archie Goodwin he launches a scheme to manipulate the NIA into hiring his services to find the killer.`,
      },
    ],
  },
  {
    id: 4,
    name: 'Daniel Defoe',
    biography: `Daniel Defoe (/dɪˈfoʊ/; c. 1660 – 24 April 1731), born Daniel Foe, was an English trader,
    writer, journalist, pamphleteer and spy. He is most famous for his novel Robinson Crusoe, published
    in 1719, which is claimed to be second only to the Bible in its number of translations. He has been seen
    as one of the earliest proponents of the English novel, and helped to popularise the form in Britain
    with others such as Aphra Behn and Samuel Richardson. Defoe wrote many political tracts and 
    was often in trouble with the authorities, and spent a period in prison. 
    Intellectuals and political leaders paid attention to his fresh ideas and sometimes consulted 
    with him.
    Defoe was a prolific and versatile writer, producing more than three hundred works—books, pamphlets,
    and journals—on diverse topics, including politics, crime, religion, marriage, psychology, 
    and the supernatural. He was also a pioneer of business journalism and economic journalism.`,
    books: [
      {
        id: 8,
        name: 'Robinson Crusoe',
        author: 'Daniel Defoe',
        genre: 'novel',
        summary: `Crusoe (the family name corrupted from the German name "Kreutznaer") set sail from Kingston upon Hull on a sea voyage in August 1651, against the wishes of his parents, who wanted him to pursue a career in law. After a tumultuous journey where his ship is wrecked in a storm, his lust for the sea remains so strong that he sets out to sea again. This journey, too, ends in disaster, as the ship is taken over by Salé pirates (the Salé Rovers) and Crusoe is enslaved by a Moor. Two years later, he escapes in a boat with a boy named Xury; a captain of a Portuguese ship off the west coast of Africa rescues him. The ship is en route to Brazil. Crusoe sells Xury to the captain. With the captain's help, Crusoe procures a plantation.`,
      },
    ],
  },
];

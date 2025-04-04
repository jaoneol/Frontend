const data = [
  {
      id: 0,
      title: "Exhuma",
      year: 2024,
      category: "Mystery, Horror",
      likeCount: 0,
      imgUrl: "/images/Exhuma.jpg",
      story: "After a man unearths an old grave, a series of inexplicable misfortunes and strange events begin to unfold.<br>The horror tied to a hidden curse and dark secrets gradually comes to light, shaking everyone involved."
  },
  {
      id: 1,
      title: "Godzilla x Kong: The New Empire",
      year: 2024,
      category: "Adventure, Action, Sci-Fi",
      likeCount: 0,
      imgUrl: "/images/GodzillaxKong.jpg",
      story: "Godzilla and Kong join forces once again. A new enemy emerges from a hidden empire, threatening the Earth.<br>The two titans must unite their powers to face the greatest battle yet."
  },
  {
      id: 2,
      title: "Dune: Part Two",
      year: 2024,
      category: "Action",
      likeCount: 0,
      imgUrl: "/images/Dune-Part2.jpg",
      story: "The war for power and revenge intensifies on the desert planet Arrakis.<br>Paul Atreides confronts his destiny as he prepares for a final battle that could change the future."
  }
];

const music = [
  {
      title: "Love on Repeat",
      artist: "Nova Sky",
      year: 2024,
      category: "Pop, Electronic",
      likeCount: 0,
      story: "A song that captures the excitement and pain of love through a repeating melody.<br>Its addictive beat and emotional lyrics blend beautifully."
  },
  {
      title: "Like the Wind",
      artist: "Hayoon",
      year: 2024,
      category: "Ballad",
      likeCount: 0,
      story: "A ballad about a love that disappeared like the wind.<br>Soft piano melodies and a sorrowful voice leave a lasting impression."
  },
  {
      title: "Midnight Drive",
      artist: "Echo Crew",
      year: 2024,
      category: "Hip-Hop, R&B",
      likeCount: 0,
      story: "Capturing the moment where freedom and loneliness intersect on a midnight drive.<br>This track features a groovy beat and smooth rap."
  }
];

// {} is the destructuring assignment syntax, which allows extracting or assigning values from arrays or objects
// export { data, music }; // ok
// export { data };  // ok
export default data; // ok, exports 'data' as the default module!!!

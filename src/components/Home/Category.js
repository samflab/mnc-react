import React from "react";

export const Category = () => {
  return (
    <main className="category">
      <h2 className="masonary-title">Genres</h2>
      <div className="category-container">
        {CategoryData.map((category, id) => {
          return (
            <div className="category-card" key={id}>
              <img
                src={category.imgUrl}
                alt={category.name}
                className="category-card-img"
              />
              <div className="overlay-xy xy-lg">
                <p className="overlay-text-x">{category.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export const CategoryData = [
  {
    imgUrl:
      "https://avatars.mds.yandex.net/i?id=7ec602289d5a30b6c29187b33a3f3f73-5282425-images-thumbs&n=13",
    name: "Romantic",
  },
  {
    imgUrl:
      "https://avatars.mds.yandex.net/i?id=6cefba82083ac6ceecd129aabbfb3727-5139788-images-thumbs&n=13",
    name: "Adventure",
  },
  {
    imgUrl:
      "https://avatars.mds.yandex.net/i?id=c9b0da11fb343de173fa83070feb8d3c-4079813-images-thumbs&n=13",
    name: "Fantasy",
  },
  {
    imgUrl:
      "https://i.pinimg.com/originals/01/5d/26/015d2671737a7ba50c17ac9acacedf9a.jpg",
    name: "Horror",
  },
  {
    imgUrl:
      "https://avatars.mds.yandex.net/i?id=2a0000017a018e03cb26b884f405bac81e8c-4121127-images-thumbs&n=13",
    name: "Slice of Life",
  },
  {
    imgUrl:
      "https://yt3.ggpht.com/a/AGF-l7-gIAtWnMXJUaJkN9-YzfEYLaZiuhV4ucDUuA=s900-c-k-c0xffffffff-no-rj-mo",
    name: "Thriller",
  },
  {
    imgUrl:
      "https://cutewallpaper.org/21/shonen-jump-background/The-history-of-Shonen-Jump-Polygon.png",
    name: "Shonen",
  },
  {
    imgUrl:
      "https://avatars.mds.yandex.net/i?id=2ae07e7539d976014c99201f4917f8f0-5597741-images-thumbs&n=13",
    name: "Shoujo",
  },
  {
    imgUrl:
      "https://pm1.narvii.com/7262/faca8fb8df097018be363e61230eef4eb728a5d1r1-1365-1251v2_00.jpg",
    name: "Comedy",
  },
  {
    imgUrl: "https://telegram.express/avas/25/demonslayer_watch.jpg",
    name: "Action",
  },
  {
    imgUrl:
      "https://avatars.mds.yandex.net/i?id=576af81d57fbb3df3d0af20bcdfe8ecb-5232255-images-thumbs&n=13",
    name: "Drama",
  },
  {
    imgUrl:
      "https://i0.wp.com/www.rxwallpaper.site/wp-content/uploads/near-wallpaper-and-scan-gallery-minitokyo-800x800.jpg",
    name: "Mystery",
  },
];

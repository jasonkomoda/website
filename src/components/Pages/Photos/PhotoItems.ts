export interface PhotoItems {
  thailand: PhotoItem[];
  japan: PhotoItem[];
  spain: PhotoItem[];
  personal: PhotoItem[];
}

export interface PhotoItem {
  img: string;
}

export const photos: PhotoItems = {
  thailand: [
    {
      img: "waterfall.jpg",
    },
    {
      img: "waterfall2.jpg",
    },
    {
      img: "ocean.jpg",
    },
    {
      img: "monkeys.jpg",
    },
    {
      img: "bluelagoon.jpg",
    },
    {
      img: "fishes.jpg",
    },
    {
      img: "erawan.jpg",
    },
    {
      img: "kohphiphi.jpg",
    },
    {
      img: "sunset.jpg",
    },
    {
      img: "sunset2.jpg",
    },
    {
      img: "airplane2.jpg",
    },
    {
      img: "airplane3.jpg",
    },
    {
      img: "airplane4.jpg",
    },
    {
      img: "airplane.jpg",
    },
  ],
  japan: [
    {
      img: "japan_shibuya.jpg",
    },
    {
      img: "japan_ginza.jpg",
    },
    {
      img: "japan_tsujiki.jpg",
    },
    {
      img: "japan_teamlabs.jpg",
    },
    {
      img: "japan_sapporo.jpg",
    },
    {
      img: "japan_sapporo_mountain.jpg",
    },
  ],
  spain: [
    {
      img: "granada_alhambra.jpg",
    },
    {
      img: "granada_alhambra2.jpg",
    },
    {
      img: "granada_alhambra3.jpg",
    },
    {
      img: "barcelona_rooftop.jpg",
    },
    {
      img: "barcelona_sagrada.jpg",
    },
    {
      img: "barcelona_sagrada2.jpg",
    },
    {
      img: "segovia.jpg",
    },
    {
      img: "segovia3.jpg",
    },
    {
      img: "segovia2.jpg",
    },
    {
      img: "toledo.jpg",
    },
    {
      img: "madrid.jpg",
    },
    {
      img: "madrid2.jpg",
    },
  ],
  personal: [
    {
      img: "nikko.jpg",
    },
    {
      img: "nikko2.jpg",
    },
    {
      img: "nikko3.jpg",
    },
  ],
};

export const icons = {
  thailandFlag: "icon_thailand.png",
  japanFlag: "icon_japan.png",
  spainFlag: "icon_spain.png",
  dog: "icon_dog.png",
};

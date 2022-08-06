interface ICardImg {
  type: "withImgs";
  badgeText: string;
  title: string;
  description: string;
  imgs: string[];
}

interface ICardStandart {
  type: "standart";
  title: string;
  description: string;
  img: string;
}

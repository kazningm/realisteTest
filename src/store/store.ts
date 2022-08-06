import { makeObservable, observable, computed, action } from "mobx";
import { i18n } from "./i18n";

export class Store {
  lang: "ru" | "eng" = "eng";

  constructor() {
    makeObservable(this, {
      lang: observable,
      cards: computed,
      changeLang: action.bound,
    });
  }

  changeLang(lang: "ru" | "eng") {
    this.lang = lang;
  }

  get cards(): (ICardImg | ICardStandart)[] {
    return [
      {
        type: "withImgs",
        badgeText: "TOP 100",
        title: i18n("100 apartments \\n for investment", this.lang),
        description: i18n(
          "Rating of flats apartments for investment in Dubai",
          this.lang
        ),
        imgs: [
          "https://static.tildacdn.com/tild3438-6136-4536-b239-396361323930/DubaiMinimapEng-min.png",
        ],
      },
      {
        type: "withImgs",
        badgeText: "TOP 50",
        title: i18n("Apartments \\n for rent", this.lang),
        description: i18n(
          "Apartments with a yield of 12% per annum in Dubai",
          this.lang
        ),
        imgs: [
          "https://static.tildacdn.com/tild3438-6136-4536-b239-396361323930/DubaiMinimapEng-min.png",
        ],
      },
      {
        type: "withImgs",
        badgeText: "TOP 30",
        title: i18n("The most \\n expensive project", this.lang),
        description: i18n(
          "Apartments in houses where millionaires live",
          this.lang
        ),
        imgs: [
          "https://static.tildacdn.com/tild3037-6535-4333-a232-653561346165/__2022-07-11__40828_.png",
          "https://static.tildacdn.com/tild3139-6431-4263-b935-633337393337/__2022-07-11__41822_.png",
          "https://static.tildacdn.com/tild3731-3535-4038-b765-333430383864/__2022-07-11__41018_.png",
          "https://static.tildacdn.com/tild6635-3363-4530-b535-633136633564/__2022-07-11__40855_.png",
        ],
      },
      {
        type: "standart",
        title: i18n("Apartments", this.lang),
        description: i18n("Apartments at below \\n market prices", this.lang),
        img: "https://static.tildacdn.com/tild3231-6663-4330-b431-316232336639/appartmentsInCircle.png",
      },
      {
        type: "standart",
        title: i18n("Deals", this.lang),
        description: i18n("History of real estate \\n deals", this.lang),
        img: "https://static.tildacdn.com/tild3763-3733-4834-a264-356331613135/FundsInCircle.png",
      },
      {
        type: "standart",
        title: i18n("Trade Up", this.lang),
        description: i18n(
          "Exchange your apartment \\n for a new one",
          this.lang
        ),
        img: "https://static.tildacdn.com/tild3730-6466-4466-b036-613365336136/TradeUpInCircle.png",
      },
      {
        type: "standart",
        title: i18n("Estimation", this.lang),
        description: i18n("Rate the apartment \\n in 10 seconds", this.lang),
        img: "https://static.tildacdn.com/tild3961-3934-4230-b231-333733363238/EstimationInCircle.png",
      },
    ];
  }
}

export default new Store();

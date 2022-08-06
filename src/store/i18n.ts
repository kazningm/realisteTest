const localisation: { [key in string]: string } = {
  "100 apartments \\n for investment": "100 квартир для \\n инвестиций",
  "Rating of flats apartments for investment in Dubai":
    "Рейтинг квартир для \\n инвестиций в Дубаи",
  "Apartments \\n for rent": "Квартиры под аренду",
  "Apartments with a yield of 12% per annum in Dubai":
    "Квартиры с доходностью \\n 12% годовых в Дубаи",
  "The most \\n expensive project": "Самые престижные проекты",
  "Apartments in houses where millionaires live":
    "Квартиры в домах где живут \\n миллионеры",
  Apartments: "Квартиры",
  "Apartments at below \\n market prices":
    "Квартиры по ценам \\n ниже рыночных",
  Deals: "Сделки",
  "History of real estate \\n deals": "История сделок \\n  с недвижимостью",
  "Trade Up": "Обмен",
  "Exchange your apartment \\n for a new one":
    "Обмен вашей квартиры \\n на новую",
  Estimation: "Оценка",
  "Rate the apartment \\n in 10 seconds": "Оцените квртиру \\n за 10 секунд",
  "Let's look": "Посмотреть",
};

export const i18n = (key: string, lang: "eng" | "ru") => {
  return lang === "eng" ? key : localisation[key];
};

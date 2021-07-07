//Base URL
const base_url = "https://api.rawg.io/api/";

//Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  console.log(month);
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDate = () => {
  const day = new Date().getDate();
  console.log(day);
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDate();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular Games

const popular_games = `games?key=${process.env.REACT_APP_RAWG_API}dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;

console.log(popularGamesURL());
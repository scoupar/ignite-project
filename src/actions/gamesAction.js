import axios from "axios";
import { popularGamesURL, upcomingGamesURL, newGamesURL } from "../api";

//Action Creator
export const loadGames = () => async (dispatch) => {
  //FETCH AXIOS
  const popularData = await axios.get(popularGamesURL());
  const newGamesData = await axios.get(newGamesURL());
  const ucpomingData = await axios.get(upcomingGamesURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: ucpomingData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};

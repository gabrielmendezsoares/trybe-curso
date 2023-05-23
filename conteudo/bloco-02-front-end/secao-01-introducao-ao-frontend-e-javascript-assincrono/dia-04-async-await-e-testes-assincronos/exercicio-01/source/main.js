import favoriteCards from './data/favoriteCards';

const fetchCardById = (cardId) => fetch(`https://api.magicthegathering.io/v1/cards/${cardId}`);

const getMagicCard = async (cardId) => {
  const response = await fetchCardById(cardId);
  const data = await response.json();

  const {
    name,
    manaCost,
    types,
    subtypes,
    rarity
  } = data.card;

  return {
    name,
    manaCost,
    types,
    subtypes,
    rarity,
  };
};

export const saveFavoriteMagicCard = async (cardId) => {
  const cardData = await getMagicCard(cardId);

  favoriteCards.push(cardData);
};

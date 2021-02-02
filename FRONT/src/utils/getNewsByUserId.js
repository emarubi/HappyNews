const getNewsByUserId = (news, user_id) => {
  // on prend toutes les news en parametre
  // on filtre sur la ville du commerçant (city)
  // on garde ceux qui ont la ville qui correspond au 2eme argument
  const filteredNewsUserId = news.filter((item) => item.user_id === user_id);
  console.log(filteredNewsUserId);
  // on renvoie le tableau filtré
  return filteredNewsUserId;
};

export default getNewsByUserId;

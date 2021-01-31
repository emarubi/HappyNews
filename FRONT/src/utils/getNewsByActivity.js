const getNewsByActivity = (news, activity) => {
  if (activity === '') {
    return news;
  }
  // on prend toutes les news en parametre
  // on filtre sur la ville du commerçant (city)
  // on garde ceux qui ont la ville qui correspond au 2eme argument
  const filteredNews = news.filter((item) => item.activity_name.toLowerCase() === activity.toLowerCase());
  // on renvoie le tableau filtré
  return filteredNews;
};

export default getNewsByActivity;

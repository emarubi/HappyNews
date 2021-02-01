const getNewsByCityNameAndActivity = (news, city, activity) => {
  if (city === '') {
    return news;
  } if (activity === '') {
    return news;
  }
  // on prend toutes les news en parametre
  // on filtre sur la ville du commerçant (city)
  // on filtre ensuite par activité commerçant (activity)
  const filteredNews = (
    (news.filter((item) => item.city.toLowerCase() === city.toLowerCase())
      .filter((item2) => item2.activity_name.toLowerCase() === activity.toLowerCase())));
  // on renvoie le tableau filtré
  return filteredNews;
};

export default getNewsByCityNameAndActivity;

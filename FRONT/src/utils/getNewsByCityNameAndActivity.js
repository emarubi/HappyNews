const getNewsByCityNameAndActivity = (news, city, activity) => {
  if (activity === '' && city === '') {
    return news;
  }
  if (city === '') {
    const filteredNews = (
      news.filter((item2) => item2.activity_name.toLowerCase() === activity.toLowerCase()));
    return (filteredNews);
  }
  if (activity === '') {
    const filteredNews = (
      news.filter((item) => item.city.toLowerCase() === city.toLowerCase()));
    return filteredNews;
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


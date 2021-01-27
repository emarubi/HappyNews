const getNewsByActivity = (news, activity) => {
  // on prend toutes les news en parametre
  // on filtre sur l'activité du commerçant (la catégorie = activity)
  // on garde ceux qui ont l'activité qui correspond au 2eme argument
  const filteredNews = news.filter((article) => article.activity === activity);

  // on renvoie le tableau filtré
  return filteredNews;
};

export default getNewsByActivity;

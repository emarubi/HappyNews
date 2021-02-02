const getNewsByCityNameAndActivity = (news, city, activity) => {
  // debugger
  if (activity === '' && city === '') {
    return news;
  }

  if (city === '') {
    const filteredNews = (
      news.filter((item2) => item2.activity_name.toLowerCase() === activity.toLowerCase()));
    return filteredNews;
  }
  if (activity === '') {
    const filteredNews = (
      news.filter((item) => item.city.toLowerCase() === city.toLowerCase()));
    return filteredNews;
  }
  if (activity !== '' && city === '') {
    return activity === '';
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

/*
fonction getNewsByCityNameAndActivity
PARAMETRES :
  news : tableau
  ville : string possiblement vide (rien de sélectionné)
  activité : string possiblement vide (rien de sélectionné)

  ici décrit les étapes logiques pour filtrer ton résultat
  en francais !

  Je souhaite d'abord récupérer une liste filtrer par le paramètre lié à la ville
  Une fois ce tableau obtenu, je souhaite filtrer à nouveau cette nouvelle liste par activité
  Je voudrais que si le premier paramètre est null, obtenir quand même une liste filtrer par le second paramètre
  Et inversement
  C'est tordu ? xD


*/

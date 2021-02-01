/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
import NewsModal from 'src/components/NewsModal';
import './style.scss';
import TabTitle from './TabTitle';

const Tabs = ({ user, news }) => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  // const { id } = useParams();
  // console.log(news);

  // const newsByUserId = news.filter((article) => article.user_id = id);
  // console.log(newsByUserId);

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(1)}>
          <TabTitle> Mon activité</TabTitle>
        </button>
        <button
          className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(2)}
        >
          <TabTitle> Mes happy News</TabTitle>
        </button>
        <button
          className={toggleState === 3 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(3)}
        >
          <TabTitle>Ma vitrine</TabTitle>
        </button>
      </div>
      <div className="content-tabs">
        <div className={toggleState === 1 ? 'content  active-content' : 'content'}>
          <p>
            {user.content}
          </p>
        </div>

        <div className={toggleState === 2 ? 'content  active-content' : 'content'}>
          <p>
            {/* // news.map((item) => <li> {item.id}</li>) */}
            {
                news.map((news) => (
                  <div key={news.id} className="newsList__item">
                    <NewsModal news={news} />

                  </div>
                ))
              }
          </p>
        </div>

        <div className={toggleState === 3 ? 'content  active-content' : 'content'}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quos
            qui itaque, perferendis ab ipsam, veniam dolores porro maxime earum nesciunt
            repellendus exercitationem hic veritatis vero. Nisi magnam minus aperiam aliquam
            nulla minima ducimus quibusdam? Sit, velit! Officiis soluta quaerat dicta, ad facere
            necessitatibus possimus est repellat pariatur. Facere molestiae cupiditate numquam
            aliquam fuga repellendus quo aut culpa, sint, qui quam. Quae voluptate,
            obcaecati nesciunt deleniti amet praesentium laborum atque, ipsam
            molestiae a quasi provident accusantium sequi, quam unde sint.
          </p>
        </div>

      </div>
    </div>
  );
};
export default Tabs;

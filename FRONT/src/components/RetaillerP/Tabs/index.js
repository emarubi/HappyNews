import React, { useState } from 'react';
import './style.scss';
import TabTitle from './TabTitle';

const Tabs = ({ content }) => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    console.log(index);
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">

        <button
          className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(1)}
        >
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
        <div
          className={toggleState === 1 ? 'content  active-content' : 'content'}
        >

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Sit consequatur saepe hic perspiciatis sunt odio laborum temporibus impedit
            optio quaerat consequuntur excepturi, dolorem iusto, iste eligendi culpa incidunt
            libero quasi ipsa minus, autem cum laboriosam in. Eveniet aperiam dolorem quam.
          </p>
        </div>

        <div
          className={toggleState === 2 ? 'content  active-content' : 'content'}
        >

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            at fugiat quae natus repellendus sit omnis quam, dignissimos temporibus
            suscipit culpa vitae molestias odio enim, doloremque eligendi. Nam harum
            expedita odit labore voluptas blanditiis consectetur perspiciatis quo
            facere beatae, voluptatem odio temporibus voluptatum aliquid enim
            eaque quae, fuga nulla mollitia!
          </p>
        </div>

        <div
          className={toggleState === 3 ? 'content  active-content' : 'content'}
        >

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

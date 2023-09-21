import React, {useContext, useEffect, useState} from "react";

import MASTER_DATA from "../../../services/data_source/index";
import Section from "../../../components/ui/landing/Section";
import C from "../../../components/card_rare_types/C";
import R from "../../../components/card_rare_types/R";
import SR from "../../../components/card_rare_types/SR";
import UR from "../../../components/card_rare_types/UR";
import CheckUserScroll from "../../../components/behaviours/CheckUserScroll";
import {StateContext} from "../../../state/global_state/StateProvider";

function Index() {
  const [state] = useContext(StateContext);
  const [hoverCard, setHoverCard] = useState(null);
  const [lastPage, setLastPage] = useState(2);
  const [data, setData] = useState([]);

  console.log(MASTER_DATA)

  useEffect(() => {
    const data = Array.from(MASTER_DATA)
      .map((booster) => {
        const filteredCards = booster.cards.filter((card) =>
          card.name.toLowerCase().includes(state.search.toLowerCase())
          ||
          card.ycg_data.description.toLowerCase().includes(state.search.toLowerCase())
        );

        return {...booster, cards: filteredCards}
      })
      .slice(0, lastPage);
    setData(data);
  }, [state.search, lastPage])

  const handleBottomReached = () => {
    setLastPage(lastPage + 1);
  }

  const showHover = (card) => {
    setHoverCard(card);
  };

  const hideHover = () => {
    setHoverCard(null);
  };

  return (
    <div>
      <CheckUserScroll bottomReached={handleBottomReached}/>
      {/* full page */}
      <Section className="pt-24">
        {data.map((booster, i) => (
          <div key={"booster_card_section_" + i}>
            <div className="text-2xl sm:text-4xl py-4">
              <a
                target="_blank"
                rel="noreferrer noopener"
                href={`https://www.yugiohcardguide.com/sets/${booster.id}.html`}>
                {booster.name}
              </a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-2">
              {booster.cards.map((c, i) => {
                let Rarity;
                if (c.mdm_data) {
                  switch (c.mdm_data.rarity) {
                    case "UR":
                      Rarity = UR;
                      break;
                    case "SR":
                      Rarity = SR;
                      break;
                    case "R":
                      Rarity = R;
                      break;
                    case "C":
                    case "N":
                      Rarity = C;
                      break;
                    default:
                      Rarity = null;
                      break;
                  }
                }
                return (
                  <div key={"projects_element_" + i} onMouseEnter={showHover.bind(this, c)} onMouseLeave={hideHover}>
                    {hoverCard && hoverCard === c &&
                      <div className="hidden sm:block absolute z-10 bg-white w-500px border p-4 rounded -m-16">
                        <div className="w-1/2">
                          {Rarity ? <Rarity/> : <div className="grow"/>}
                          <img
                            data-rarity={c.mdm_data && c.mdm_data.rarity}
                            src={c.card_image}
                            alt={c.name}
                            className=""/>
                        </div>
                        <span className="text-md font-bold mt-2">
                          {c.name}
                        </span>
                        <p className="text-xs mt-2 p-2 border rounded">
                          {c.ycg_data.description}
                        </p>
                      </div>}
                    {Rarity ? <Rarity/> : <div className="grow"/>}
                    <img
                      data-rarity={c.mdm_data && c.mdm_data.rarity}
                      src={c.card_image}
                      alt={c.name}
                      className={`${(c.master_duel_released ? "grayscale-0" : "grayscale")} hover:grayscale-0`}/>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </Section>
    </div>
  );
}

export default Index

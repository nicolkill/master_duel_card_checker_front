import React, { useState } from "react";

import DATA from "../../../services/data_source/index";
import Section from "../../../components/ui/landing/Section";
import C from "../../../components/card_rare_types/C";
import R from "../../../components/card_rare_types/R";
import SR from "../../../components/card_rare_types/SR";
import UR from "../../../components/card_rare_types/UR";
import CheckUserScroll from "../../../components/behaviours/CheckUserScroll";
import SectionHorizontal from "../../../components/ui/components/horizontal/Section";

function Index() {
  const [lastPage, setLastPage] = useState(3);

  const handleBottomReached = () => {
    setLastPage(lastPage + 2);
  }

  const data = DATA.slice(0, lastPage);

  return (
    <div>
      <CheckUserScroll bottomReached={handleBottomReached}/>
      {/* full page */}
      <Section className="pt-24">
        {data.map((booster, i) => (
          <div key={"booster_card_section_" + i}>
            <div className="text-4xl py-4">
              <a
                target="_blank"
                rel="noreferrer noopener"
                href={`https://www.yugiohcardguide.com/sets/${booster.id}.html`}>
                {booster.name}
              </a>
            </div>
            <div className="grid grid-cols-10 gap-2">
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
                  <SectionHorizontal key={"projects_element_" + i}>
                    {Rarity ? <Rarity/> : <div className="grow"/>}
                    <img
                      data-rarity={c.mdm_data && c.mdm_data.rarity}
                      src={c.card_image}
                      alt={c.name}
                      className={`${(c.master_duel_released ? "grayscale-0" : "grayscale")} hover:grayscale-0`}/>
                  </SectionHorizontal>
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

import React, { useState } from "react";

import DATA from "../../../services/data_source";
import Section from "../../../components/ui/landing/Section";

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
              {booster.name}
            </div>
            <div className="grid grid-cols-10 gap-2">
              {booster.cards.map((c, i) => (
                <SectionHorizontal key={"projects_element_" + i}>
                  <img
                    src={c.card_image}
                    alt={c.name}
                    className={`${(c.master_duel_released ? "grayscale-0" : "grayscale")} hover:grayscale-0`}/>
                </SectionHorizontal>
              ))}
            </div>
          </div>
        ))}
      </Section>
    </div>
  );
}

export default Index
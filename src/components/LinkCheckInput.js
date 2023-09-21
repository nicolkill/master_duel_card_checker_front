import React, {useState} from "react";
import {PropTypes} from "prop-types";

import uListApi from "../services/uListApi";
import Search from "./Search";

const CHECK_TYPES = {
  product: 1,
  search: 2,
}

async function checkLink(type, link) {
  switch (CHECK_TYPES[type]) {
    case CHECK_TYPES.product:
      return await uListApi.checkProductLink(link);
    case CHECK_TYPES.search:
      return await uListApi.checkSearchesLink(link);
    default:
      return null;
  }
}

function LinkCheckInput({ type, callback }) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (link) => {
    setLoading(true)
    const result = await checkLink(type, link);
    if (result.status === 200) {
      callback(result.body);
      setLoading(false)
      return
    }
    callback(null);
  };

  return (
    <Search
      loading={loading}
      submitCallback={handleSubmit}
      submitText="Check now!"
      placeholder="Your link"/>
  );
}

LinkCheckInput.propTypes = {
  callback: PropTypes.func.isRequired,
  type: PropTypes.oneOf([
    "product",
    "search",
  ]),
};

export default LinkCheckInput;

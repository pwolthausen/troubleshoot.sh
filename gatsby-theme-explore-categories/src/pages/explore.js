import React from "react";

import Layout from "../components/Layout";
import CustomQueryStringComponent from "../components/CustomQueryStringComponent";

class ExploreSpec extends React.Component {
  render() {
    return (
      <Layout title={"Explore spec"}> 
        <CustomQueryStringComponent />
      </Layout>
    )
  }
};

export default ExploreSpec;
import React from "react";

const PageHeader = ({pageTitle}) => {
  return (
      <section class="common_page_header flex items-center justify-center flex-col mb-3">
        <h2>SMART SHOP</h2>
        <p>
          Home <span class="dot mx-2"></span>
          <span class="cm_color_login font-bold">{pageTitle}</span>
        </p>
      </section>
  );
};

export default PageHeader;

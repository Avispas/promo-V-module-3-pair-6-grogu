import React from 'react';

function Section({mercancia}) {
  return (
    <section className="goods-container">
      <div className="goods-item">{mercancia}</div>
    </section>
  );
}

export default Section;

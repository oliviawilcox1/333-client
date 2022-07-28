import React, { useState, useEffect } from 'react';

const ShowDescription = (props) => {
    const { user, product, triggerRefresh } = props;
    return (
        <section id='content1' >
        <div>
        <p class='desc'>
        {product.description}<br/></p>
        <p class='desc2'>{product.size}
        </p>
      </div>
    </section>
)};
export default ShowDescription;
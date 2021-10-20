import noFound from '../../images/NothingFoundIcon.png'
import React from 'react';

export default function Reject({ searchQuery }) {
    return (
        <div className="Div-loader">
          <p>by request: "<span>{searchQuery}</span>" nothing found</p>
          <img src={noFound} alt="" className="Logo-image" />
        </div>
    )
}
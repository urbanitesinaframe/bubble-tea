import React, { useState } from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.PersonSlice} PersonSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PersonSlice>} PersonProps
 * @param { PersonProps }
 */
const Person = ({ slice }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  }

  return (
    <>
      <div className="person" onClick={() => toggleVisibility()} role="button">
        <div className="personContent">
          <img src={slice.primary.foto.url} alt={slice.primary.name} />
          {/*<div className="personName"><PrismicRichText field={slice.primary.name} /></div>
          <PrismicRichText field={slice.primary.kurzbeschreibung} /> */}
        </div>
      </div>
      
      <div className={`person modal ${isVisible && 'modal-active'}`} onClick={() => toggleVisibility()} role="button">
        <div className="modalImage">
          <img src={slice.primary.foto.url} alt={slice.primary.name} />
        </div>
        <div className="modalContent">
          <div className="personName"><PrismicRichText field={slice.primary.name} /></div>
          <div className="shortDescrip"><PrismicRichText field={slice.primary.kurzbeschreibung} /></div>
          <div className="longDescrip"><PrismicRichText field={slice.primary.beschreibung}/></div>
        </div>
      </div>

      {isVisible &&
        <div className="modalBg" onClick={() => toggleVisibility()} role="button" />
      }
    </>
  )
}

export default Person

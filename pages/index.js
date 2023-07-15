import Head from 'next/head' //neu hinzugefügt
import { PrismicRichText, SliceZone } from '@prismicio/react'
import { createClient } from '../prismicio'
import { components } from '../slices'
import React, { useState } from 'react';


export default function Page({ page }) {
  const { data } = page;
  const [showPopup, setShowPopup] = useState(false);

  const handlePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <><div>
      <Head>
        <title>Protest gegen Deutsche Welle</title>
        <meta property="og:title" content="Protest gegen Deutsche Welle" key="title" />
      </Head>
      <Head> 
        <title>DW-Mitarbeitende protestieren gegen Kürzungen</title>
        <meta name="description" content="Die Deutsche Welle will bis zu 300 freie und befristet angestellte Mitarbeiter beenden. Diese Menschen sind zentral für die Berichterstattung der Ressorts Sport, Kultur und Nachrichten in deutscher Sprache." />

        <meta property="og:url" content="https://protest-gegen-dw-deutsche-welle.de"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="DW-Mitarbeitende protestieren gegen Kürzungen"/>
        <meta property="og:description" content="Die Deutsche Welle will bis zu 300 freie und befristet angestellte Mitarbeiter beenden. Diese Menschen sind zentral für die Berichterstattung der Ressorts Sport, Kultur und Nachrichten in deutscher Sprache."/>
        <meta property="og:image" content="https://images.prismic.io/dwfreie/a52f5032-845a-4f2e-928c-5ff318ba12b0_OpenGraph_DW_Protest.JPG"/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="protest-gegen-dw-deutsche-welle.de"/>
        <meta property="twitter:url" content="https://protest-gegen-dw-deutsche-welle.de"/>
        <meta name="twitter:title" content="DW-Mitarbeitende protestieren gegen Kürzungen"/>
        <meta name="twitter:description" content="Die Deutsche Welle will bis zu 300 freie und befristet angestellte Mitarbeiter beenden. Diese Menschen sind zentral für die Berichterstattung der Ressorts Sport, Kultur und Nachrichten in deutscher Sprache."/>
        <meta name="twitter:image" content="https://images.prismic.io/dwfreie/a52f5032-845a-4f2e-928c-5ff318ba12b0_OpenGraph_DW_Protest.JPG"/>
      </Head>
    </div><div>
        <div className="intro">
          <div className="introHeadline">
            <PrismicRichText field={data.headline} />
          </div>
          <div className="introContent">
            <PrismicRichText field={data.beschreibung} />
          </div>
        </div>
        <div className="personsWrapper">
          <SliceZone slices={page.data.slices} components={components} />
        </div>
        <div className="footer">
          <button onClick={handlePopup}>Impressum</button>
          {showPopup && (
            <div className="popup">
              <div className="popupContent">
                <p>Inhaltlich verantwortlich: <br />Klaus Enderle</p>
                <p>Kontakt: <br />this-is-us-dw(at)posteo.de</p>
                <p>Technische Umsetzung: <br />Jimmy Ng</p>
                <button onClick={handlePopup}>Close</button>
              </div>
            </div>
          )}
        </div>
      </div></>
  )
}


export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })
  const page = await client.getSingle('home')

  return {
    props: {
      page,
    },
    revalidate: 2,
  }
}
/* //import von https://www.garymeehan.ie/articles/handling-seo-with-nextjs-and-prismic Start
export const DEFAULT_SEO = {
  title: 'Wir sind das DW Programm',
  description: 'Protestaktion gegen die radikale Kürzung der Programmacher:innen',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://protest-gegen-dw-deutsche-welle.de',
    title: 'Wir sind das DW Programm',
    description: 'Protestaktion gegen die radikale Kürzung der Programmacher:innen',
    image:
      'https://images.prismic.io/dwfreie/a52f5032-845a-4f2e-928c-5ff318ba12b0_OpenGraph_DW_Protest.JPG',
    site_name: 'protest-gegen-dw-deutsche-welle.de',
    imageWidth: 1200,
    imageHeight: 1200,
  }
}
//import Ende */
import Head from "next/head"; //neu hinzugefügt
import { PrismicRichText, SliceZone } from "@prismicio/react";
import { createClient } from "../prismicio";
import { components } from "../slices";
import React, { useState } from "react";

export default function Page({ page }) {
  const { data } = page;
  const [showPopup, setShowPopup] = useState(false);

  const handlePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <div>
        <Head>
          <title>Bubble Tea Shop</title>
          <meta property="og:title" content="Bubble Tea Shop" key="title" />
        </Head>
        <Head>
          <title>Bubble Tea Shop</title>
          <meta
            name="description"
            content="Dein neuer Lieblings Bubble Tea Shop"
          />

          <meta property="og:url" content="Hier kommt die URL hin" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Bubble Tea Shop" />
          <meta
            property="og:description"
            content="Dein neuer Lieblings Bubble Tea Shop"
          />
          <meta
            property="og:image"
            content="hier kommt der Link zum Bild rein"
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="Hier kommt die URL hin" />
          <meta property="twitter:url" content="Hier kommt die URL hin" />
          <meta
            name="twitter:title"
            content="Dein neuer Lieblings Bubble Tea Shop"
          />
          <meta
            name="twitter:description"
            content="Dein neuer Lieblings Bubble Tea Shop"
          />
          <meta name="twitter:image" content="Hier kommt das Bild rein" />
        </Head>
      </div>
      <div>
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
                <p>
                  Inhaltlich verantwortlich: <br />
                  Yvonne Lai
                </p>
                <p>
                  Kontakt: <br />
                  Wird noch hinzugefügt
                </p>
                <p>
                  Technische Umsetzung: <br />
                  Jimmy Ng
                </p>
                <button onClick={handlePopup}>Close</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });
  const page = await client.getSingle("home");

  return {
    props: {
      page,
    },
    revalidate: 2,
  };
}

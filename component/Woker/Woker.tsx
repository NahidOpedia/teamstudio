import React from "react";
import styles from './worker.module.css'
import { RightArrowLarge, RightArraowSmall, LeftArrowSmall } from './svgs';
import slidesData from "./slides.json"


function Woker() {
  console.log(slidesData)
  return (
    <div style={{ margin: "1rem 0" }}>
      <h1>The Independent Worker</h1>
      <p className="text-muted">All the latest news, tips and advice for indies</p>
      <ButtonGroup />
      {
        slidesData.forEach(data =>
          <MediaCard data={data} key={data.id} />
        )
      }
    </div>
  );
}

export default Woker;


const ButtonGroup = () => {
  return (
    <div className="d-flex justify-content-between mb-4">
      <a className={`${styles.linkButton} ${styles.left}`}>
        <span>Browse all articles</span>
        <RightArrowLarge />
      </a>
      <div>
        <button className={`${styles.roundBtn} mr-2`} aria-label="Previous articles">
          <LeftArrowSmall />
        </button>
        <button className={`${styles.roundBtn}`} disabled aria-label="Next articles">
          <RightArraowSmall />
        </button>
      </div>
    </div>
  )
}

type MediaProp = {
  data: {
    id: number,
    title: string,
    category: string
  }
}
const MediaCard = ({ data }: MediaProp) => {
  return (
    <div>
      <div>

      </div>
      <div>
        <h3>{data.title}</h3>
      </div>
    </div>
  )
}
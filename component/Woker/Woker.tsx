import React from "react";
import styles from './worker.module.css'
import { RightArrowLarge, RightArraowSmall, LeftArrowSmall } from './svgs';
import slidesData from "./slides.json"


function Woker() {
  const [activeSlides, setActiveSlides] = React.useState([0, 1, 2, 3]);

  return (
    <div style={{ margin: "1rem auto" }} className="container">
      <h1>The Independent Worker</h1>
      <p className="text-muted">All the latest news, tips and advice for indies</p>
      <ButtonGroup />
      <div className="d-flex">
        {
          slidesData.map(data =>
            <MediaCard data={data} key={data.id} />
          )
        }
      </div>
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
    <div className="">
      <div>

      </div>
      <div>
        <h5>{data.title}</h5>
      </div>
    </div>
  )
}
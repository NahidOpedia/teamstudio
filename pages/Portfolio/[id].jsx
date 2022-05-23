import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../../styles/SinglePortfolio.module.css";

// interface Data {
//   title: string;
//   color1: string;
//   color2: string;
//   image: string;
// }
// interface Provider {
//   connected: boolean;
//   type: string;
// }

const Post = () => {
  const router = useRouter();
  const [selected, setSelected] = useState(0);

  const { id } = router.query;
  // const dd: Data[] = sidebardata;

  console.log("first", selected);

  return (
    <div className="container ">
      <p>Post: {id}</p>
      <p>seletrL {selected}</p>
      <h4 className="title">Do it all.</h4>
      <h4 className="title2">In one place.</h4>
      <p className="tag">WORKSPACE</p>
      <div className="row">
        <div className="col-md-4">
          <Sidebar datas={sidebardata} setSelected={setSelected} />
          {/* {sidebardata?.map((i: Data) => (
            <p>dfsdf</p>
          ))} */}
        </div>
        <div className={`col-md-8 ${styles.main}`}>
          <ImageC selected={selected} />
        </div>
      </div>
    </div>
  );
};

export default Post;

// function Sidebar(datas, setSelected) {
function ImageC({ selected }) {
  const item = sidebardata[selected]; //arry index time lahgbe
  return (
    <div className={`container ${styles.main}`}>
      <span
        className={styles.color1}
        style={{
          background: `${item.color1}`,
        }}
      ></span>
      <div className={` ${styles.img}`}>
        <img className="img-fluid" src={item?.image} alt="" />
      </div>
      <span
        className={styles.color2}
        style={{
          background: `${item.color1}`,
        }}
      ></span>
    </div>
  );
}

// function Sidebar(datas, setSelected) {
function Sidebar({ datas, setSelected }) {
  console.log("data", datas);

  const titlehandler = (index) => {
    setSelected(index);
  };

  return (
    <div>
      {/* {datas.datas.map((i) => ( */}
      {datas.map((i, index) => (
        <div>
          <p
            className={styles.title}
            style={{
              backgroundColor: "rgba(89, 213, 255, 0.3)",
            }}
            onClick={() => titlehandler(index)}
          >
            {i.title}
          </p>
        </div>
      ))}
    </div>
  );
}

// const sidebardata: Data[] = [
const sidebardata = [
  {
    title: "Calender",
    color1:
      " linear-gradient(      237.73deg,      rgba(89, 103, 255, 1) 9.3%,      rgba(136, 182, 255, 1) 54.76%,      rgba(163, 125, 226, 1) 90.36% )",
    color2:
      " linear-gradient(      237.73deg,      rgba(89, 213, 255, 1) 9.3%,      rgba(136, 182, 255, 1) 54.76%,      rgba(163, 125, 226, 1) 90.36% )",
    image: "https://weareindy.com/img/home/tools/chats-illustration@2x.webp",
  },
  {
    title: "Chats",
    color1:
      "linear-gradient(59.62deg, rgb(226, 66, 95) 0%, rgb(255, 132, 132) 54.6%, rgb(248, 159, 28) 102%)",

    color2:
      " linear-gradient(      237.73deg,      rgba(89, 213, 255, 1) 9.3%,      rgba(136, 182, 255, 1) 54.76%,      rgba(163, 125, 226, 1) 90.36% )",
    image: "https://weareindy.com/img/home/tools/calendar-illustration@2x.webp",
  },
  {
    title: "Contracts",
    color1:
      "linear-gradient(59.62deg, rgb(89, 213, 255) 0%, rgb(141, 252, 232) 53.35%, rgb(177, 252, 180) 102%)",

    color2:
      " linear-gradient(      237.73deg,      rgba(89, 213, 255, 1) 9.3%,      rgba(136, 182, 255, 1) 54.76%,      rgba(163, 125, 226, 1) 90.36% )",
    image: "https://weareindy.com/img/home/tools/files-illustration@2x.webp",
  },
  {
    title: "Forms",
    color1:
      "linear-gradient(59.62deg, rgb(76, 54, 177) 0%, rgb(76, 54, 177) 50%, rgb(166, 120, 244) 102%)",

    color2:
      " linear-gradient(      237.73deg,      rgba(89, 213, 255, 1) 9.3%,      rgba(136, 182, 255, 1) 54.76%,      rgba(163, 125, 226, 1) 90.36% )",
    image: "https://weareindy.com/img/home/tools/forms-illustration@2x.webp",
  },
  {
    title: "Proposals",
    color1:
      "linear-gradient(59.62deg, rgb(255 220 160) 0%, rgb(198 98 98) 53.35%, rgb(252 196 177) 102%)",

    color2:
      " linear-gradient(      237.73deg,      rgba(89, 213, 255, 1) 9.3%,      rgba(136, 182, 255, 1) 54.76%,      rgba(163, 125, 226, 1) 90.36% )",
    image: "https://weareindy.com/img/home/tools/chats-illustration@2x.webp",
  },
  {
    title: "Time Tracker",
    color1:
      " linear-gradient(      237.73deg,      rgba(89, 213, 255, 1) 9.3%,      rgba(136, 182, 255, 1) 54.76%,      rgba(163, 125, 226, 1) 90.36% )",

    color2:
      "linear-gradient(59.62deg, rgb(76, 54, 177) 0%, rgb(76, 54, 177) 50%, rgb(166, 120, 244) 102%)",
    image: "https://weareindy.com/img/home/tools/tasks-illustration@2x.webp",
  },
];

import React from "react";
import * as ReactDOM from 'react-dom';
import Masonry from "https://cdn.skypack.dev/react-masonry-css@1.0.16";
import style from "./test.module.scss";

const MasonryList = () => {
  return (
    <Masonry
      breakpointCols={4}
      className={`${style.list}`}
      columnClassName="column"
    >
      <div className={`${style.item}`}>
        <div className={`${style.card}`} style={{height: `250px`}}> 1</div>
      </div>
      <div className={`${style.item}`}>
        <div className={`${style.card}`} style={{height: `120px`}}> 2</div>
      </div>
      <div className={`${style.item}`}>
        <div className={`${style.card}`} style={{height: `180px`}}> 3</div>
      </div>
      <div className={`${style.item}`}>
        <div className={`${style.card}`} style={{height: `130px`}}>4</div>
      </div>
      <div className={`${style.item}`}>
        <div className={`${style.card}`} style={{height: `270px`}}>5</div>
      </div>
      <div className={`${style.item}`}>
        <div className={`${style.card}`} style={{height: `320px`}}>6</div>
      </div>
      <div className={`${style.item}`}>
        <div className={`${style.card}`} style={{height: `110px`}}>7</div>
      </div>
      <div className={`${style.item}`}>
        <div className={`${style.card}`} style={{height: `190px`}}>8</div>
      </div>
      <div className={`${style.item}`}>
        <div className={`${style.card}`} style={{height: `210px`}}>9</div>
      </div>
      <div className={`${style.item}`}>
        <div className={`${style.card}`} style={{height: `80px`}}>10</div>
      </div>
      <div className={`${style.item}`}>
        <div className={`${style.card}`} style={{height: `220px`}}>11</div>
      </div>
      <div className={`${style.item}`}>
        <div className={`${style.card}`} style={{height: `210px`}}>12</div>
      </div>
      <div className={`${style.item}`}>
        <div className={`${style.card}`} style={{height: `100px`}}>13</div>
      </div>
      <div className={`${style.item}`}>
        <div className={`${style.card}`} style={{height: `160px`}}>14</div>
      </div>
      <div className={`${style.item}`}>
        <div className={`${style.card}`} style={{height: `190px`}}>15</div>
      </div>
      <div className={`${style.item}`}>
        <div className={`${style.card}`} style={{height: `320px`}}>16</div>
      </div>
    </Masonry>
  )
};

ReactDOM.render(
  <MasonryList />,
  document.getElementById('root')
);


export default MasonryList;
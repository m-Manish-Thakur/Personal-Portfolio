import React from "react";
import data from "./data";

const Portfolio = () => {
  return (
    <>
      <div id="portfolio">
        <p>- PROJECTS</p>
        <h2>Recent completed works</h2>

        <div className="portfolio_con">
          {data.map((item) => (
            <>
              <div className="item">
                <div>
                  <img src={item.img} alt="" />
                </div>
                <h2>
                  {item.title}{" "}
                  <a href={item.github} target="_blank">
                    <span>
                      (Code <i class="fa-solid fa-link"></i>)
                    </span>
                  </a>
                </h2>
                <p>{item.des}</p>
                <div className="buttons">
                  <a href={item.live} target="_blank">
                    <button>
                      View Project <i class="fa-solid fa-arrow-right-long" id="arrow"></i>
                    </button>
                  </a>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;

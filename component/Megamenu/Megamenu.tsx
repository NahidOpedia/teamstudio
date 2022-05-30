import Link from "next/link";
import React from "react";
import { MenuItem, StrongLink } from "./styledComponents";
import { productData, resourcesData } from "./navdata";
import styles from "./megamenu.module.css";
import { IconType } from "react-icons/lib";


export const Product = () => {
  return (
    <NavCard data={productData} />
  )
}

export const Resources = () => {
  return (
    <NavCard data={resourcesData} />
  )
}

export const WhyTeamStudio = () => {
  return (
    <div>
      TeamStudio Card
    </div>
  )
}

type NavCard = {
  data: {
    id: number,
    title: string,
    categories:
    {
      title: string,
      iconless: boolean,
      items: NavItem[]
    }[]
  }
}

type NavItem = {
  id: number,
  title: string,
  subtitle: string,
  link: string,
}

const NavCard = ({ data }: NavCard) => {
  return (
    <div className={`d-lg-flex ${styles.navCard}`}>
      <div className={`${styles.navLeftItems}`}>
        <React.Fragment>
          <h4 className={styles.leftTitle}>{data.categories[1].title}</h4>
          {
            data.categories[1].items.map((item: NavItem) => {
              return (
                <div className="d-inline-block" style={{ width: 250 }}>
                  <Link href={item.link}>
                    <MenuItem
                      title={item.title}
                      subtitle={item.subtitle} />
                  </Link>
                </div>
              )
            })
          }
        </React.Fragment>
      </div>
      <div className={`${styles.navRightItems}`}>
        <React.Fragment>
          <h4 className={styles.rightTitle}>{data.categories[0].title}</h4>
          <ul>
            {
              data.categories[0].items.map(item =>
                <Link href={item.link}>
                  <li><StrongLink text={item.title} /></li>
                </Link>
              )
            }
          </ul>
        </React.Fragment>
      </div>
    </div>
  )
}

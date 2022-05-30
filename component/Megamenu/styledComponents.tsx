import { BiTask } from 'react-icons/bi';
import styles from './megamenu.module.css';

type ItemCard = {
    title: string,
    subtitle: string
}

export const MenuItem = ({ title, subtitle }: ItemCard) => {
    return (
        <div className={`${styles.item}`}>
            <div className={`${styles.color} ${styles.icon} mr-2`}>
                <BiTask />
            </div>
            <div className={styles.right}>
                <p className={`${styles.title} ${styles.color}`}>{title}</p>
                <p className={styles.subtitle}>{subtitle}</p>
            </div>
        </div>
    )
}

type NavCard = {
    leftChild: JSX.Element | JSX.Element[],
    rightChild: JSX.Element | JSX.Element[]
}

export const NavCard = (props: NavCard) => {
    return (
        <div className={`d-lg-flex ${styles.navCard}`}>
            <div className={`${styles.navLeftItems}`}>
                {props.leftChild}
            </div>
            <div className={`${styles.navRightItems}`}>
                {props.rightChild}
            </div>
        </div>
    )
}


type Strong = {
    text: string
}

export const StrongLink = ({ text }: Strong) => {
    return (
        <p className={`${styles.strongLink}`}>
            {text}
        </p>
    )
}
import { LINK_ITEMS, SNS_ITEMS } from "@/constants/footerItems";
import styles from "./Footer.module.css";
import IconWithLink from "./IconWithLink";

function Footer() {
  return (
    <footer className={styles.footerArea}>
      <div className={styles.footerGroup}>
        <span className={styles.copyright}>©codeit - 2023</span>
        <ul className={styles.linkList}>
          {LINK_ITEMS.map(({ name, address }) => (
            <IconWithLink key={name} name={name} address={address} />
          ))}
        </ul>
        <ul className={styles.snsList}>
          {SNS_ITEMS.map(({ name, address, imgUrl }) => (
            <IconWithLink
              key={name}
              name={name}
              address={address}
              imgUrl={imgUrl}
            />
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

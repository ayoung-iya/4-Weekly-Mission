import Image from 'next/image';
import styles from './ServiceSection.module.css';

interface ServiceSectionProps {
  [key: string]: string;
}

const ServiceSection = ({ title, highlight, description, image, gradient }: ServiceSectionProps) => {
  return (
    <section className={styles.sectionArea}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.desc}>{description}</p>
      <div className={styles.functionScreen}>
        <Image fill src={image} alt={highlight} style={{objectFit: 'contain'}}/>
      </div>
    </section>
  );
};

export default ServiceSection;

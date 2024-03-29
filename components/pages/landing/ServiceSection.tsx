import styles from './ServiceSection.module.css';

interface ServiceSectionProps {
  [key: string]: string;
}

const ServiceSection = ({ title, highlight, description, image, gradient }: ServiceSectionProps) => {
  return (
    <section className={styles.sectionArea}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.desc}>{description}</p>
      <img src={image} alt={highlight} className={styles.functionScreen} />
    </section>
  );
};

export default ServiceSection;

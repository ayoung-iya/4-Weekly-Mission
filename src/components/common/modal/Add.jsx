import { useContext } from 'react';
import Frame from './frame/Frame';
import Title from './title/Title';
import SubmitButton from './submitButton/SubmitButton';
import styles from './Add.module.css';
import { FoldersContext } from '../../context/foldersContext';

  const folders = useContext(FoldersContext);

  return (
    <Frame handleCloseModal={handleCloseModal}>
      <Title title="폴더에 추가" content={link} />
      <ul className={styles.optionList}>
        {folders.map(({ id, name, link: { count } }) => (
          <li className={styles.optionName} key={id}>
            <input
              type="checkbox"
              id={id}
              name="folder"
              value={name}
              className={styles.inputRadio}
              checked={id === selectFolder}
              readOnly
            />
            <label className={styles.label} htmlFor={id} onClick={handleLabelClick}>
              <div className={styles.folderInfo}>
                <span className={styles.folderName}>{name}</span>
                <span className={styles.linkCount}>{count}개 링크</span>
              </div>
              <span className={styles.icon}></span>
            </label>
          </li>
        ))}
      </ul>
      <SubmitButton className="gradient" content="추가하기" />
    </Frame>
  );
};

export default Add;

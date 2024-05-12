import { useFormContext } from 'react-hook-form';
import styles from '@/styles/sign.module.css';
import { useState } from 'react';

const InputGroup = ({ info, onBlur }: any) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useFormContext();
  const [showText, setShowText] = useState(() => (info.id !== 'email' ? false : true));
  const type = info.id === 'email' ? info.type : showText ? 'text' : info.type;
  const eyeClassName = `${styles.iconEye} ${showText ? styles.on : ''}`;
  const inputClassName = `${styles.input} ${errors[info.id]?.message ? styles.error : ''}`;

  return (
    <>
      <label className={styles.label} htmlFor={info.id}>
        {info.label}
      </label>
      <div className={styles.inputGroup}>
        <input
          type={type}
          id={info.id}
          {...register(info.id, {
            ...info.validation,
            onBlur: async e => {
              await trigger(info.id);
              errors[info.id]?.message || onBlur && (await onBlur(e.target.value));
            },
          })}
          placeholder={info.placeholder}
          className={inputClassName}
        />
        {info.type === 'password' && (
          <button type="button" className={eyeClassName} onClick={() => setShowText(!showText)} />
        )}
      </div>
      {errors?.[info.id] && <p className={styles.messageError}>{errors[info.id]?.message as string}</p>}
    </>
  );
};

export default InputGroup;

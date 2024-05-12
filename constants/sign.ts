export const ERROR_MESSAGE = {
  email: {
    pattern: '올바른 이메일 주소가 아닙니다.',
    required: '이메일을 입력해 주세요.',
    checkRight: '이메일을 확인해 주세요.',
  },
  password: {
    pattern: '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.',
    required: '비밀번호를 입력해 주세요',
    checkSame: '비밀번호가 일치하지 않아요',
    checkRight: '비밀번호를 확인해 주세요.',
  },
};

export const INPUT_INFO = {
  email: {
    id: 'email',
    type: 'email',
    label: '이메일',
    placeholder: '이메일를 입력해 주세요.',
    validation: {
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: ERROR_MESSAGE.email.pattern,
      },
      required: ERROR_MESSAGE.email.required,
    },
  },
  password: {
    signIn: {
      id: 'password',
      type: 'password',
      label: '비밀번호',
      placeholder: '비밀번호를 입력해 주세요.',
      validation: {
        required: ERROR_MESSAGE.password.required,
      },
    },
    signUp: {
      id: 'password',
      type: 'password',
      label: '비밀번호  ',
      placeholder: '비밀번호를 입력해 주세요.',
      validation: {
        pattern: {
          value: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/,
          message: ERROR_MESSAGE.password.pattern,
        },
        required: ERROR_MESSAGE.password.required,
      },
    },
  },
  passwordCheck: {
    id: 'passwordCheck',
    type: 'password',
    label: '비밀번호 확인',
    placeholder: '비밀번호와 일치하는 값을 입력해주세요.',
    validation: {
      validate: (value: any, formValues: any) => {
        if (value.length === 0 && formValues.password.length === 0) return ERROR_MESSAGE.password.required;
        if (value !== formValues.password) return ERROR_MESSAGE.password.checkSame;
      },
      pattern: {
        value: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/,
        message: ERROR_MESSAGE.password.pattern,
      },
    },
  },
};

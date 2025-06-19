const heading = document.querySelector('#heading');

const keyframes = {
  borderRadius: [
      '10% 10% 10% 10%/10% 10% 10% 10%',
      '30% 30% 30% 30%/30% 30% 30% 30%',
      '50% 50% 50% 50%/50% 50% 50% 50%',
    ],
  color: [],
  backgroundColor: [],
};
const options = {
 // 옵션 설정
};

heading.animate(keyframes, options);
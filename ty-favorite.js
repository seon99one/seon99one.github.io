const text = `김성곤이 좋아하는 것에 대해 알려드리겠습니다.

1. 햄버거
김성곤이 좋아하는 음식은 햄버거입니다. 새로 출시된 햄버거를 먹어보는 것은 그의 삶의 작은 행복입니다. 특히 그가 가장 좋아하는 햄버거는 '버거킹의 와퍼'인 것으로 알려져 있습니다.

2. 침착맨
김성곤이 좋아하는 유튜버는 침착맨입니다. 그는 침투부의 전문시청팀으로 알려져 있습니다. 또한 집에서 설거지를 담당하고 있는 김성곤은 매일 오후 7시가 되면 스마트폰으로 침투부를 틀고 싱크대 앞으로 향합니다.

3. 혜화동
김성곤이 좋아하는 동네는 혜화동입니다. 그가 학창시절을 보낸 혜화동에는 많은 추억들이 담겨있습니다. 날이 좋은 봄과 가을에는 가까운 곳에 위치한 낙산에 올라 서울 도심의 경치를 즐기는 것을 좋아합니다.`;
let index = 0;
const speed = 40;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();
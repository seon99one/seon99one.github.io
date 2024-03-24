const text = `김성곤의 취미에 대해 알려드리겠습니다.

1. 테니스
김성곤이 최근 흥미를 가지고 있는 취미입니다. 약 한 달 전부터 테니스를 배우기 시작한 그는 아직 포핸드와 백핸드 밖에 배우지 않았지만, 1주일에 3일이나 연습할 정도로 테니스에 진심인 것으로 알려졌습니다. 김성곤의 목표는 열심히 테니스 실력을 키워 아빠와 함께 랠리를 주고받는 것이라 합니다.

2. 독서
김성곤이 취미로 갖기 위해 굉장히 노력하고 있는 취미(?)입니다. 비록 한 달에 두 권 읽을까 말까 하는 보잘것없는 독서량이지만, 나름 북스터디에도 참가하며 독서인으로서의 면모를 보여주기 위해 노력 중입니다.`;
let index = 0;
const speed = 45;
function typeWriter() {
  if (index < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();
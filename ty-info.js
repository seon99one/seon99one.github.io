const text = `김성곤(Kim Sunggon)은 국민대학교 멋쟁이사자처럼 12기 아기사자입니다. 아래는 김성곤의 기본정보를 정리한 내용입니다.

- 이름: 김성곤 (Kim Sunggon)
- 전공: 미디어광고학부
- 파트: 기획/디자인
- MBTI: INTP
- 인스타그램: @seon99one
- 반려동물: 유월이(강아지), 채리(고양이)

김성곤은 처음에는 낯을 많이 가리는 성격이지만, 한 번 친해진다면 정말 재밌고 활발한 사람으로 알려져있습니다. (모두들 무서워하지 말고 저에게 다가와 주세요!:))`;
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
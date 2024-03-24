const text = `김성곤은 일본의 후지산을 등반한 경험이 있습니다. 그는 2023년 9월 2일 오전 6시에 후지산 정상 등반에 성공했습니다. 정상에서 일출을 보기 위해 후지산의 산장에서 하룻밤을 묵는 1박 2일 일정이었습니다. 매우 높은 고도 탓에 중간에 고산병 증상이 나타나기도 했지만, 성공적으로 등반을 마무리할 수 있었습니다. 땅과 멀어질수록 생수의 가격이 올라가는 신기한 광경을 목격했습니다. 참고로 정상에서 그가 사 먹은 생수 한 병의 가격은 약 6,000원으로 알려져 있습니다.`;
let index = 0;
const speed = 40;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
  else {
    document.getElementById("img-fuji").style.display = "block";
  }
}

typeWriter();
import "./styles.css";

/*
  1. 아이디를 입력받아라
  2. 패스워드를 입력받아라
  3. 로그인을 눌러라
  4-1. 아이디는 같고, 비밀번호가 다르면 "비밀번호가 다른다는 알람"
  4-2. 아이디, 비밀번호가 일치하면 "메인 화면 이동"
  4-3. 아이디 다르면 "아이디가 다르다는 알람" 
*/

const objPeople = [{
        id: "ming",
        pw: "hahaha"
    },
    {
        id: "thaiming",
        pw: "gogogo"
    },
    {
        id: "worldming",
        pw: "kakaka"
    }
];

const button = document.querySelector("button");

function handleClick() {
    const id = document.querySelector(".putId").value;
    const pw = document.querySelector(".putPw").value;

    for (let i = 0; i < objPeople.length; i++) {
        if (id === objPeople[i].id && pw === objPeople[i].pw) {
            console.log(id + " is logged in!!!");
            alert(id + " 님이 로그인하셨어요!!");
            return;
        }
    }
    console.log("incorrect id or password!");
}

function init() {
    button.addEventListener("click", handleClick);
}

init();
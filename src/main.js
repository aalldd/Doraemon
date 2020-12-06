let string = `
/*你好，我是一名前端切图狗
接下来我要画一只哆唻爱梦
注：此css代码由less编译而来，因此比较冗长*/
.bg .main {
  position: relative;
  width: 275px;
  height: 315px;
  margin: auto;
  margin-top: 30px;
}
/*我先把竹蜻蜓安排上 并且让它转起来*/
.bg .main .Take-copter {
  width: 100px;
  height: 22px;
  position: absolute;
  left: 50%;
  top: 0px;
  margin-left: -50px;
}
.bg .main .Take-copter .copter-g {
  width: 8px;
  height: 12px;
  position: absolute;
  left: 50%;
  bottom: -2px;
  margin-left: -4px;
  background-color: #fcc136;
  border: 2px solid #000;
  z-index: 2;
}
.bg .main .Take-copter .copter-j {
  width: 100px;
  height: 4px;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  bottom: 6px;
  left: 0;
  z-index: 2;
  animation: twsiting 0.2s infinite linear;
}
.bg .main .Take-copter .copter-t {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #d4ecf9;
  background: linear-gradient(0deg, #d4ecf9 0%, #d4ecf9 50%, #fcc136 50%, #fcc136 100%);
  position: absolute;
  left: 50%;
  margin-left: -10px;
  top: 2px;
  z-index: 1;
}
/*我来画一下机器猫的脸*/
.bg .main .face {
  position: absolute;
  left: 50%;
  top: 20px;
  transform: translateX(-50%);
  border: 2px solid #000;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #35a1c9;
  z-index: 6;
}
.bg .main .face .facew {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 170px;
  height: 170px;
  background-color: #fff;
  border: 2px solid #000;
  border-radius: 50%;
  z-index: 1;
}
/*我来画一下机器猫的左眼*/
.bg .main .face .facew .eyel {
  border: 1px solid #000;
  width: 50px;
  height: 50px;
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-100%);
  border-radius: 50%;
  z-index: 2;
}
.bg .main .face .facew .eyel .eyeinner {
  width: 15px;
  height: 24px;
  background-color: #000;
  border-radius: 60%;
  position: absolute;
  left: 26px;
  top: 16px;
}
.bg .main .face .facew .eyel .eyeinner::after {
  content: "";
  display: block;
  width: 3px;
  height: 7px;
  background-color: #fff;
  border-radius: 60%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.bg .main .face .facew .eyer {
  border: 1px solid #000;
  width: 50px;
  height: 50px;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 50%;
  z-index: 2;
  overflow: hidden;
}
/*机器猫的右眼，咱们的机器猫睁一只眼闭一只眼*/
.bg .main .face .facew .eyer::after {
  content: "";
  display: block;
  width: 24px;
  height: 24px;
  border: 4px solid #000;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
  left: 50%;
  bottom: -13px;
  transform: translateX(-50%);
}
/*机器猫的鼻子*/
.bg .main .face .facew .nose {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 1px solid #000;
  background-color: #b11735;
  position: absolute;
  left: 50%;
  top: 46.5%;
  transform: translate(-50%, -100%);
}
.bg .main .face .facew .nose::after {
  content: "";
  display: block;
  width: 10px;
  height: 10px;
  background-color: #fff;
  position: absolute;
  left: 8px;
  top: 8px;
  border-radius: 50%;
}
.bg .main .face .facew .middle {
  width: 2px;
  height: 12px;
  background-color: #000;
  position: absolute;
  left: 50%;
  top: 46%;
}
/*机器猫的大嘴巴 里面有一个心形的舌头*/
.bg .main .face .facew .mouth {
  width: 140px;
  height: 140px;
  background: #b11635;
  background: linear-gradient(0deg, #b11635 0%, #b11635 50%, #ffffff 50%, #ffffff 100%);
  border-radius: 50%;
  position: absolute;
  left: 50%;
  bottom: 8px;
  margin-left: -70px;
  z-index: -1;
  overflow: hidden;
}
.bg .main .face .facew .mouth .tongue {
  width: 40px;
  height: 120px;
  position: absolute;
  bottom: -20px;
  left: 50%;
  margin-left: -30px;
  transform-origin: 50% 100%;
  transform: rotate(45deg);
}
.bg .main .face .facew .mouth .tongue .tongueCommon {
  width: 100%;
  height: 40px;
  background-color: #ca2533;
}
.bg .main .face .facew .mouth .tongue .tonguel {
  position: absolute;
  bottom: 0;
  left: -34px;
  border-radius: 50% 0 0 50%;
}
.bg .main .face .facew .mouth .tongue .tonguer {
  position: absolute;
  bottom: 34px;
  left: 0;
  border-radius: 50% 50% 0 0;
}
.bg .main .face .facew .mouth .tongue .tonguem {
  position: absolute;
  bottom: 0;
}
.bg .main .face .facew .common {
  width: 60px;
  height: 2px;
  background-color: #000;
  position: absolute;
}
/*机器猫的六根胡须*/
.bg .main .face .facew .beard1 {
  left: -2px;
  top: 40px;
  transform: rotate(30deg);
}
.bg .main .face .facew .beard2 {
  left: 0;
  top: 63px;
}
.bg .main .face .facew .beard3 {
  left: 0;
  top: 76px;
  transform: rotate(-10deg);
}
.bg .main .face .facew .beard4 {
  left: 66%;
  top: 40px;
  transform: rotate(-30deg);
}
.bg .main .face .facew .beard5 {
  right: 0;
  top: 63px;
}
.bg .main .face .facew .beard6 {
  right: 0;
  top: 76px;
  transform: rotate(10deg);
}
/*机器猫的身体*/
.bg .main .body {
  width: 140px;
  height: 140px;
  background-color: #35a1c9;
  position: absolute;
  left: 50%;
  top: 46%;
  margin-left: -70px;
  z-index: 2;
  border-radius: 50%;
  border: 2px solid #000;
}
/*机器猫有个红色的围巾*/
.bg .main .body .scaff {
  width: 160px;
  height: 160px;
  background-color: #a1172e;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: -55%;
  z-index: 4;
  margin-left: -80px;
}
/*机器猫的百宝袋，里面是四次元空间哦*/
.bg .main .body .belly {
  width: 100px;
  height: 63px;
  background-color: #fff;
  position: absolute;
  left: 50%;
  top: 40%;
  margin-left: -50px;
  border-radius: 64%;
  z-index: 3;
}
.bg .main .body .belly .pocket {
  width: 60px;
  height: 30px;
  border: 2px solid #000;
  position: absolute;
  left: 50%;
  top: 40%;
  margin-left: -30px;
  border-radius: 0 0 50% 50%;
}
/*机器猫的铃铛*/
.bg .main .body .bell {
  width: 30px;
  height: 30px;
  border: 2px solid #000;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 52%;
  margin-left: -15px;
  background-color: #f19629;
  z-index: 5;
}
.bg .main .body .bell .bellinner1 {
  width: 8px;
  height: 8px;
  background-color: #000;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
}
.bg .main .body .bell .bellinner2 {
  width: 14px;
  height: 2px;
  background-color: #000;
  position: absolute;
  left: 50%;
  top: 85%;
  transform: translateX(-50%);
}
/*机器猫的两只手手*/
.bg .main .handCommon {
  width: 40px;
  height: 75px;
  border-radius: 70%;
  background-color: #35a1c9;
  border: 2px solid #000;
}
.bg .main .handl {
  transform: rotate(-40deg);
  position: absolute;
  top: 46%;
  left: 13%;
  z-index: 4;
}
.bg .main .handl .handql {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff;
  border: 2px solid #000;
  position: absolute;
  left: -30%;
  top: -30%;
}
.bg .main .handr {
  transform: rotate(40deg);
  position: absolute;
  top: 46%;
  left: 70%;
  z-index: 4;
}
.bg .main .handr .handqr {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff;
  border: 2px solid #000;
  position: absolute;
  left: -10%;
  top: -30%;
}
/*机器猫的两只脚*/
.bg .main .footCommon {
  width: 50px;
  height: 90px;
  border: 2px solid #000;
  background-color: #fff;
  z-index: 1;
  position: absolute;
  border-radius: 70%;
}
.bg .main .footl {
  transform: rotate(10deg);
  left: 35%;
  bottom: 2%;
}
.bg .main .footr {
  transform: rotate(-10deg);
  left: 50%;
  bottom: 2%;
}
/*最后我们让机器猫飞起来*/
.bg .main{
  animation: flying 1s infinite  linear;
}
/*好了，这只哆唻爱梦送给你*/
`
let string2 = ''
const player = {
  n: 0,
  id: undefined,
  time: 100,
  init: () => {
    demo.innerHTML = string.substr(0, player.n)
    demo2.innerHTML = string.substr(0, player.n)
    player.play()
    player.bindEvents()
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  bindEvents: () => {
    for (let key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        const value = player.events[key]
        document.querySelector(key).onclick = player[value]
      }
    }
  },
  run: () => {
    player.n++
    if (string[player.n] === '\n') {
      string2 += '<br>'
    } else if (string[player.n] === ' ') {
      // 如果是空格
      string2 += '&nbsp'
    } else {
      // 如果不是回车就照搬
      string2 += string[player.n]
    }
    demo.innerHTML = string2
    demo2.innerHTML = string.substr(0, player.n)
    demo.scrollTop = demo.scrollHeight
    if (player.n > string.length - 2) {
      window.clearInterval(player.id)
      return
    }
  },
  play: () => {
    player.id = setInterval(player.run, player.time)
  },
  pause: () => {
    window.clearInterval(player.id)
  },
  slow: () => {
    player.time = 140
    player.pause()
    player.play()
  },
  normal: () => {
    player.time = 70
    player.pause()
    player.play()
  },
  fast: () => {
    player.time = 0
    player.pause()
    player.play()
  }
}
player.init()
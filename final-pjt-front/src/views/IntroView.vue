<template>
  <div class="body"> <br><br>
    <span class="text-center"><h3 class="firstword">보고 싶은 영화를 찜하고, 봤던 영화에 대한 리뷰를 남기면</h3><h3 class="secondword">moBee가 추천해 줄게</h3><router-link class="thirdword text-decoration-none" :to="{ name: 'movie' }"><h1 class=" text-center ">MoBee</h1></router-link></span>
    <div class="bee"> 
      <div class="booty"></div>
      <div class="wing-left"></div>
      <div class="wing-right"></div>
      <div class="face">
        <div class="eyes"></div>
        <div class="mouth"></div>
      </div>
    </div>
    <div class="cloud1"></div>
    <div class="cloud2"></div>
    <div class="cloud3"></div>
  </div>
</template>
<script>
export default {
  name: "IntroView",
}
</script>
<style scoped>

.thirdword {
  text-decoration: none;
  font-family: 'CookieRun-Regular';
  color: rgb(255, 255, 255);
  transition: 1s;
  filter:  blur(20px); 
}

.thirdword:hover {
  color: #ecc800;
  filter: none;
}

*:before,
*:after {
  content: "";
  position: absolute;
  
}

.body {
  min-height: 100vh;
  margin: 0;
  display: grid;
  place-items: center;
  background-color: var(--bg-color);
  overflow: hidden;
}

.bee {
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  top: calc(34 * var(--unit));
  width: calc(30 * var(--unit));
  height: calc(32 * var(--unit));
  -webkit-animation: fly 2s infinite alternate ease-in-out;
          animation: fly 2s infinite alternate ease-in-out;
  z-index: 5;
}
.bee::before, .bee::after {
  bottom: 0;
  left: calc(10 * var(--unit));
  width: calc(2.5 * var(--unit));
  height: calc(5 * var(--unit));
  background-color: transparent;
  border: calc(0.5 * var(--unit)) solid var(--line-color);
  -webkit-clip-path: inset(30% 0 0 50%);
          clip-path: inset(30% 0 0 50%);
  border-radius: 50%;
  z-index: 15;
  transform-origin: 100% 30%;
  -webkit-animation: swing 1s infinite alternate ease-in-out -0.25s;
          animation: swing 1s infinite alternate ease-in-out -0.25s;
}
.bee::after {
  bottom: calc(1 * var(--unit));
  left: calc(18 * var(--unit));
  width: calc(2 * var(--unit));
  height: calc(4 * var(--unit));
  -webkit-animation: swing 1s infinite alternate ease-in-out;
          animation: swing 1s infinite alternate ease-in-out;
}

.booty {
  position: absolute;
  bottom: calc(5 * var(--unit));
  left: 0;
  width: calc(30 * var(--unit));
  height: calc(20 * var(--unit));
  background-color: var(--main-color);
  background-image: radial-gradient(circle at 75% 45%, var(--main-color) 42%, var(--main-color-dark) 51%, var(--main-color-dark) 54%, var(--main-color) 64%, var(--main-color) 66%, var(--main-color-dark) 74%, var(--main-color-dark) 77%, var(--main-color) 86%);
  border-radius: calc(12 * var(--unit)) calc(9 * var(--unit)) calc(9 * var(--unit)) calc(6 * var(--unit));
  z-index: 1;
}
.booty::before, .booty::after {
  bottom: calc(-4 * var(--unit));
  left: calc(5 * var(--unit));
  width: calc(2 * var(--unit));
  height: calc(4 * var(--unit));
  background-color: transparent;
  border: calc(0.5 * var(--unit)) solid var(--line-color);
  -webkit-clip-path: inset(30% 0 0 50%);
          clip-path: inset(30% 0 0 50%);
  border-radius: 50%;
  z-index: 5;
  transform-origin: 100% 30%;
  -webkit-animation: swing 1s infinite alternate ease-in-out -0.5s;
          animation: swing 1s infinite alternate ease-in-out -0.5s;
}
.booty::after {
  bottom: calc(-3.5 * var(--unit));
  left: calc(13 * var(--unit));
  width: calc(1.5 * var(--unit));
  height: calc(3 * var(--unit));
  -webkit-animation: swing 1s infinite alternate ease-in-out -0.4s;
          animation: swing 1s infinite alternate ease-in-out -0.4s;
}

.wing-left,
.wing-right {
  position: absolute;
  top: calc(-8 * var(--unit));
  left: calc(9 * var(--unit));
  width: calc(8 * var(--unit));
  height: calc(16 * var(--unit));
  background-color: var(--wing-color);
  z-index: 2;
  transform-origin: 75% 100%;
  transform: rotate(-15deg);
  border-radius: calc(8 * var(--unit)) calc(5 * var(--unit)) calc(2 * var(--unit)) calc(10 * var(--unit));
  -webkit-animation: wing 0.075s infinite alternate ease-in-out;
          animation: wing 0.075s infinite alternate ease-in-out;
}

.wing-left {
  left: calc(16 * var(--unit));
  z-index: 0;
  transform-origin: 25% 100%;
  transform: rotate(15deg);
  border-radius: calc(5 * var(--unit)) calc(8 * var(--unit)) calc(10 * var(--unit)) calc(2 * var(--unit));
  -webkit-animation: wing-reverse 0.075s infinite alternate ease-in-out;
          animation: wing-reverse 0.075s infinite alternate ease-in-out;
}

.face {
  position: absolute;
  top: calc(8 * var(--unit));
  right: 0;
  width: calc(12 * var(--unit));
  height: calc(12 * var(--unit));
  z-index: 2;
  -webkit-animation: swing 6s infinite alternate ease-in-out -0.5s;
          animation: swing 6s infinite alternate ease-in-out -0.5s;
}
.face::before, .face::after {
  top: calc(5 * var(--unit));
  width: calc(6 * var(--unit));
  height: calc(6 * var(--unit));
  background-color: rgba(255, 20, 147, 0.1);
  background-image: radial-gradient(circle, rgba(255, 20, 147, 0.075) 25%, #fff000 75%);
  border-radius: 50%;
}
.face::before {
  left: 0;
}
.face::after {
  top: calc(5.75 * var(--unit));
  right: calc(0.25 * var(--unit));
  width: calc(4.5 * var(--unit));
  height: calc(4.5 * var(--unit));
}

.eyes {
  position: absolute;
  top: calc(5 * var(--unit));
  left: 0;
  width: calc(2 * var(--unit));
  height: calc(2 * var(--unit));
  background-color: var(--line-color);
  border-radius: 50%;
  z-index: 3;
}
.eyes::before {
  top: 0;
  left: calc(10 * var(--unit));
  width: calc(2 * var(--unit));
  height: calc(2 * var(--unit));
  background-color: var(--line-color);
  border-radius: 50%;
}

.mouth {
  position: absolute;
  top: calc(4.75 * var(--unit));
  left: calc(5.5 * var(--unit));
  width: calc(2 * var(--unit));
  height: calc(2 * var(--unit));
  background-color: transparent;
  border: calc(0.5 * var(--unit)) solid var(--line-color);
  -webkit-clip-path: inset(60% 5% 0 5%);
          clip-path: inset(60% 5% 0 5%);
  border-radius: 50%;
  z-index: 2;
}

.cloud1,
.cloud2,
.cloud3 {
  position: absolute;
  top: calc(16 * var(--unit));
  right: 0;
  width: calc(28 * var(--unit));
  height: calc(12 * var(--unit));
  background-color: white;
  background-image: linear-gradient(0deg, #e4e4e4 0%, white 40%);
  z-index: 0;
  border-radius: calc(6 * var(--unit));
  -webkit-animation: glide 20s infinite linear -15s;
          animation: glide 20s infinite linear -15s;
}
.cloud1::before,
.cloud2::before,
.cloud3::before {
  top: calc(-6 * var(--unit));
  left: calc(11 * var(--unit));
  width: calc(12 * var(--unit));
  height: calc(12 * var(--unit));
  background-color: white;
  border-radius: calc(10 * var(--unit));
  -webkit-clip-path: inset(0 0 40% 0);
          clip-path: inset(0 0 40% 0);
}
.cloud1::after,
.cloud2::after,
.cloud3::after {
  top: calc(-3 * var(--unit));
  left: calc(5 * var(--unit));
  width: calc(8 * var(--unit));
  height: calc(8 * var(--unit));
  background-color: white;
  z-index: 0;
  border-radius: calc(10 * var(--unit));
  -webkit-clip-path: inset(0 0 40% 0);
          clip-path: inset(0 0 40% 0);
}

.cloud2 {
  top: calc(82 * var(--unit));
  width: calc(24 * var(--unit));
  height: calc(10 * var(--unit));
  -webkit-animation: glide 27s infinite linear -15s;
          animation: glide 27s infinite linear -15s;
}
.cloud2::before {
  left: calc(8 * var(--unit));
  top: calc(-4 * var(--unit));
}
.cloud2::after {
  left: calc(4 * var(--unit));
}

.cloud3 {
  top: calc(58 * var(--unit));
  width: calc(24 * var(--unit));
  height: calc(7 * var(--unit));
  -webkit-animation: glide 35s infinite linear -10s;
          animation: glide 35s infinite linear -10s;
  transform-origin: 50% 50%;
}
.cloud3::before {
  left: calc(3 * var(--unit));
}
.cloud3::after {
  left: calc(12 * var(--unit));
}

@-webkit-keyframes fly {
  0% {
    transform: translateY(-5vw) rotate(-5deg);
  }
  100% {
    transform: translateY(8vw) rotate(2deg);
  }
}

@keyframes fly {
  0% {
    transform: translateY(-5vw) rotate(-5deg);
  }
  100% {
    transform: translateY(8vw) rotate(2deg);
  }
}
@-webkit-keyframes wing {
  0% {
    transform: rotate(-15deg);
  }
  100% {
    transform: rotate(-75deg);
  }
}
@keyframes wing {
  0% {
    transform: rotate(-15deg);
  }
  100% {
    transform: rotate(-75deg);
  }
}
@-webkit-keyframes wing-reverse {
  0% {
    transform: rotate(15deg);
  }
  100% {
    transform: rotate(75deg);
  }
}
@keyframes wing-reverse {
  0% {
    transform: rotate(15deg);
  }
  100% {
    transform: rotate(75deg);
  }
}
@-webkit-keyframes swing {
  0% {
    transform: rotate(8deg);
  }
  100% {
    transform: rotate(-8deg);
  }
}
@keyframes swing {
  0% {
    transform: rotate(8deg);
  }
  100% {
    transform: rotate(-8deg);
  }
}
@-webkit-keyframes glide {
  0% {
    transform: translateX(40vw);
  }
  100% {
    transform: translateX(-120vw);
  }
}
@keyframes glide {
  0% {
    transform: translateX(40vw);
  }
  100% {
    transform: translateX(-120vw);
  }
}
</style>
<template>
  <div>
    <div class="over404">
      <div class="darkOverlay"></div>
      <header>
        <h1 class="glitch" data-text="404">404</h1>
        <h3 class="text-center">페이지를 찾을 수 없습니다.</h3>
      </header>
    </div>

  </div>
</template>


<script>
  export default {
    name: 'NotFound404',
    mounted () {
    }

  }
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:700);

.darkOverlay {
  background: rgb(255, 255, 255);
  max-width: 100%;
  height: 100vh;
  /* opacity: .45; */
  z-index: 2;
}

.over404 {
  overflow: hidden;
  position: relative;
  z-index: 1;
  background: url("http://xerxesjarquin.com/images/glitch/desk-bgg.jpg") no-repeat center center;
  background-size: cover;
  margin: 0 auto;
  height: 100vh;
  -webkit-animation: glitch 2s step-end infinite;
  -moz-animation: glitch 2s step-end infinite;
  animation: glitch 2s step-end infinite;
}

.over404 header {
  padding: 0;
  z-index: 3;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.over404 header h1 {
  font-size: 6rem;
  font-weight: 700;
  font-family: 'Source Sans Pro', sans-serif;
  margin: 0;
  color: #ffc107;
  letter-spacing: .8px;
  text-transform: uppercase;
}

@media only screen and (min-width: 567px) {
  .over404 header h1 {
     font-size: 15rem;
  }
}

.glitch:before,
.glitch:after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch::before {
  left: 2px;
  text-shadow: -1px 0 red;
  clip: rect(424px, 450px, 516px, 0);
  -webkit-animation: glitchText 2s infinite linear alternate-reverse;
  -moz-animation: glitchText 2s infinite linear alternate-reverse;
  -o-animation: glitchText 2s infinite linear alternate-reverse;
  animation: glitchText 2s infinite linear alternate-reverse;
}

.glitch::after {
  left: -2px;
  text-shadow: -1px solid blue;
  clip: rect(424px, 450px, 526px, 0);
  -webkit-animation: glitchText2 2s infinite linear alternate-reverse;
  -moz-animation: glitchText2 2s infinite linear alternate-reverse;
  -o-animation: glitchText2 2s infinite linear alternate-reverse;
  animation: glitchText2 2s infinite linear alternate-reverse;   
}

@-webkit-keyframes glitchText2 {
  0% {
   clip: rect(412px, 9999px, 237px, 0);
  }
  10% {
   clip: rect(323px, 9999px, 234px, 0);
  }
  20% {
   clip: rect(8px, 9999px, 811px, 0);
  }
  30% {
   clip: rect(435px, 9999px, 217px, 0);
  }
  40% {
   clip: rect(921px, 9999px, 147px, 0);
  }
  50% {
   clip: rect(274px, 9999px, 284px, 0);
  }
  60% {
   clip: rect(46px, 9999px, 621px, 0);
  }
  70% {
   clip: rect(19px, 9999px, 123px, 0);
  }
  80% {
   clip: rect(629px, 9999px, 432px, 0);
  }
  90% {
   clip: rect(4px, 9999px, 343px, 0);
  }
  100% {
   clip: rect(121px, 9999px, 11px, 0);
  }
}
    
@-o-keyframes glitchText2 {
  0% {
   clip: rect(412px, 9999px, 237px, 0);
  }
  10% {
   clip: rect(323px, 9999px, 234px, 0);
  }
  20% {
   clip: rect(8px, 9999px, 811px, 0);
  }
  30% {
   clip: rect(435px, 9999px, 217px, 0);
  }
  40% {
   clip: rect(921px, 9999px, 147px, 0);
  }
  50% {
   clip: rect(274px, 9999px, 284px, 0);
  }
  60% {
   clip: rect(46px, 9999px, 621px, 0);
  }
  70% {
   clip: rect(19px, 9999px, 123px, 0);
  }
  80% {
  clip: rect(629px, 9999px, 432px, 0);
  }
  90% {
   clip: rect(4px, 9999px, 343px, 0);
  }
  100% {
   clip: rect(121px, 9999px, 11px, 0);
  }
}

@keyframes glitchText2 {
  0% {
   clip: rect(412px, 9999px, 237px, 0);
  }
  10% {
   clip: rect(323px, 9999px, 234px, 0);
  }
  20% {
   clip: rect(8px, 9999px, 811px, 0);
  }
  30% {
   clip: rect(435px, 9999px, 217px, 0);
  }
  40% {
   clip: rect(921px, 9999px, 147px, 0);
  }
  50% {
   clip: rect(274px, 9999px, 284px, 0);
  }
  60% {
   clip: rect(46px, 9999px, 621px, 0);
  }
  70% {
   clip: rect(19px, 9999px, 123px, 0);
  }
  80% {
   clip: rect(629px, 9999px, 432px, 0);
  }
  90% {
   clip: rect(4px, 9999px, 343px, 0);
  }
  100% {
   clip: rect(121px, 9999px, 11px, 0);
  }
}

@-webkit-keyframes glitchText {
  0% {
    clip: rect(125px, 9999px, 1px, 0);
  }
  10% {
    clip: rect(120px, 9999px, 322px, 0);
  }
  20% {
    clip: rect(58px, 9999px, 235px, 0);
  }
  30% {
    clip: rect(30px, 9999px, 7px, 0);
  }
  40% {
    clip: rect(126px, 9999px, 528px, 0);
  }
  50% {
    clip: rect(42px, 9999px, 96px, 0);
  }
  60% {
    clip: rect(247px, 9999px, 620px, 0);
  }
  70% {
    clip: rect(728px, 9999px, 517px, 0);
  }
  80% {
    clip: rect(15px, 9999px, 66px, 0);
  }
  90% {
    clip: rect(923px, 9999px, 204px, 0);
  }
  100% {
    clip: rect(62px, 9999px, 6px, 0);
  }
}

@-o-keyframes glitchText {
  0% {
    clip: rect(125px, 9999px, 1px, 0);
  }
  10% {
    clip: rect(120px, 9999px, 322px, 0);
  }
  20% {
    clip: rect(58px, 9999px, 235px, 0);
  }
  30% {
    clip: rect(30px, 9999px, 7px, 0);
  }
  40% {
    clip: rect(126px, 9999px, 528px, 0);
  }
  50% {
    clip: rect(42px, 9999px, 96px, 0);
  }
  60% {
    clip: rect(247px, 9999px, 620px, 0);
  }
  70% {
    clip: rect(728px, 9999px, 517px, 0);
  }
  80% {
    clip: rect(15px, 9999px, 66px, 0);
  }
  90% {
    clip: rect(923px, 9999px, 204px, 0);
  }
  100% {
    clip: rect(62px, 9999px, 6px, 0);
  }
}

@keyframes glitchText {
  0% {
    clip: rect(125px, 9999px, 1px, 0);
  }
  10% {
    clip: rect(120px, 9999px, 322px, 0);
  }
  20% {
    clip: rect(58px, 9999px, 235px, 0);
  }
  30% {
    clip: rect(30px, 9999px, 7px, 0);
  }
  40% {
    clip: rect(126px, 9999px, 528px, 0);
  }
  50% {
    clip: rect(42px, 9999px, 96px, 0);
  }
  60% {
    clip: rect(247px, 9999px, 620px, 0);
  }
  70% {
    clip: rect(728px, 9999px, 517px, 0);
  }
  80% {
    clip: rect(15px, 9999px, 66px, 0);
  }
  90% {
    clip: rect(923px, 9999px, 204px, 0);
  }
  100% {
    clip: rect(62px, 9999px, 6px, 0);
  }
}

@-webkit-keyframes glitch {
    0% {
    background-image: url('http://xerxesjarquin.com/images/glitch/0.jpg');
    }
    7% {
    background-image: url('http://xerxesjarquin.com/images/glitch/1.jpg');
    }
    14% {
    background-image: url('http://xerxesjarquin.com/images/glitch/2.jpg');
    }
    21% {
    background-image: url('http://xerxesjarquin.com/images/glitch/3.jpg');
    }
    28% {
    background-image: url('http://xerxesjarquin.com/images/glitch/4.jpg');
    }
    35% {
    background-image: url('http://xerxesjarquin.com/images/glitch/5.jpg');
    }
    42% {
    background-image: url('http://xerxesjarquin.com/images/glitch/6.jpg');
    }
    49% {
    background-image: url('http://xerxesjarquin.com/images/glitch/7.jpg');
    }
    56% {
    background-image: url('http://xerxesjarquin.com/images/glitch/8.jpg');
    }
    63% {
    background-image: url('http://xerxesjarquin.com/images/glitch/9.jpg');
    }
    70% {
    background-image: url('http://xerxesjarquin.com/images/glitch/10.jpg');
    }
    77% {
    background-image: url('http://xerxesjarquin.com/images/glitch/11.jpg');
    }
    84% {
    background-image: url('http://xerxesjarquin.com/images/glitch/12.jpg');
    }
    89% {
    background-image: url('http://xerxesjarquin.com/images/glitch/13.jpg');
    }
    94% {
    background-image: url('http://xerxesjarquin.com/images/glitch/15.jpg');
    }
    100% {
    background-image: url('http://xerxesjarquin.com/images/glitch/16.jpg');
    }
}

@-moz-keyframes glitch {
    0% {
    background-image: url('http://xerxesjarquin.com/images/glitch/0.jpg');
    }
    7% {
    background-image: url('http://xerxesjarquin.com/images/glitch/1.jpg');
    }
    14% {
    background-image: url('http://xerxesjarquin.com/images/glitch/2.jpg');
    }
    21% {
    background-image: url('http://xerxesjarquin.com/images/glitch/3.jpg');
    }
    28% {
    background-image: url('http://xerxesjarquin.com/images/glitch/4.jpg');
    }
    35% {
    background-image: url('http://xerxesjarquin.com/images/glitch/5.jpg');
    }
    42% {
    background-image: url('http://xerxesjarquin.com/images/glitch/6.jpg');
    }
    49% {
    background-image: url('http://xerxesjarquin.com/images/glitch/7.jpg');
    }
    56% {
    background-image: url('http://xerxesjarquin.com/images/glitch/8.jpg');
    }
    63% {
    background-image: url('http://xerxesjarquin.com/images/glitch/9.jpg');
    }
    70% {
    background-image: url('http://xerxesjarquin.com/images/glitch/10.jpg');
    }
    77% {
    background-image: url('http://xerxesjarquin.com/images/glitch/11.jpg');
    }
    84% {
    background-image: url('http://xerxesjarquin.com/images/glitch/12.jpg');
    }
    89% {
    background-image: url('http://xerxesjarquin.com/images/glitch/13.jpg');
    }
    94% {
    background-image: url('http://xerxesjarquin.com/images/glitch/15.jpg');
    }
    100% {
    background-image: url('http://xerxesjarquin.com/images/glitch/16.jpg');
    }
}

@-o-keyframes glitch {
    0% {
    background-image: url('http://xerxesjarquin.com/images/glitch/0.jpg');
    }
    7% {
    background-image: url('http://xerxesjarquin.com/images/glitch/1.jpg');
    }
    14% {
    background-image: url('http://xerxesjarquin.com/images/glitch/2.jpg');
    }
    21% {
    background-image: url('http://xerxesjarquin.com/images/glitch/3.jpg');
    }
    28% {
    background-image: url('http://xerxesjarquin.com/images/glitch/4.jpg');
    }
    35% {
    background-image: url('http://xerxesjarquin.com/images/glitch/5.jpg');
    }
    42% {
    background-image: url('http://xerxesjarquin.com/images/glitch/6.jpg');
    }
    49% {
    background-image: url('http://xerxesjarquin.com/images/glitch/7.jpg');
    }
    56% {
    background-image: url('http://xerxesjarquin.com/images/glitch/8.jpg');
    }
    63% {
    background-image: url('http://xerxesjarquin.com/images/glitch/9.jpg');
    }
    70% {
    background-image: url('http://xerxesjarquin.com/images/glitch/10.jpg');
    }
    77% {
    background-image: url('http://xerxesjarquin.com/images/glitch/11.jpg');
    }
    84% {
    background-image: url('http://xerxesjarquin.com/images/glitch/12.jpg');
    }
    89% {
    background-image: url('http://xerxesjarquin.com/images/glitch/13.jpg');
    }
    94% {
    background-image: url('http://xerxesjarquin.com/images/glitch/15.jpg');
    }
    100% {
    background-image: url('http://xerxesjarquin.com/images/glitch/16.jpg');
    }
}

@keyframes glitch {
    0% {
    background-image: url('http://xerxesjarquin.com/images/glitch/0.jpg');
    }
    7% {
    background-image: url('http://xerxesjarquin.com/images/glitch/1.jpg');
    }
    14% {
    background-image: url('http://xerxesjarquin.com/images/glitch/2.jpg');
    }
    21% {
    background-image: url('http://xerxesjarquin.com/images/glitch/3.jpg');
    }
    28% {
    background-image: url('http://xerxesjarquin.com/images/glitch/4.jpg');
    }
    35% {
    background-image: url('http://xerxesjarquin.com/images/glitch/5.jpg');
    }
    42% {
    background-image: url('http://xerxesjarquin.com/images/glitch/6.jpg');
    }
    49% {
    background-image: url('http://xerxesjarquin.com/images/glitch/7.jpg');
    }
    56% {
    background-image: url('http://xerxesjarquin.com/images/glitch/8.jpg');
    }
    63% {
    background-image: url('http://xerxesjarquin.com/images/glitch/9.jpg');
    }
    70% {
    background-image: url('http://xerxesjarquin.com/images/glitch/10.jpg');
    }
    77% {
    background-image: url('http://xerxesjarquin.com/images/glitch/11.jpg');
    }
    84% {
    background-image: url('http://xerxesjarquin.com/images/glitch/12.jpg');
    }
    89% {
    background-image: url('http://xerxesjarquin.com/images/glitch/13.jpg');
    }
    94% {
    background-image: url('http://xerxesjarquin.com/images/glitch/15.jpg');
    }
    100% {
    background-image: url('http://xerxesjarquin.com/images/glitch/16.jpg');
    }
}
</style>

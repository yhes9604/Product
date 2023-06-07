<script setup>
</script>

<template>
  <section>
    <div class="section1">
      <div class="logo-group">
        <img src="./assets/logo.svg" alt="" class="logo" />
        <img src="./assets/mv-deco-kr.png" alt="" class="logo-kr" />
        <img src="./assets/mv-deco-mr.png" alt="" class="logo-mr" />
      </div>
      <div class="logo-dec">
        <p>
          Pokémon Championships 2022-23 Taiwan <br />
          將於5月27日、28日舉辦！
        </p>
      </div>
    </div>
  </section>
  <section>
    <div class="section2">
      <div class="pk-group row m-4">
        <div class="pk-img col-12 col-md-4">
          <img src="./assets/deco-pk.png" alt="" />
        </div>
        <div class="pk-dec col-12 col-md-5">
          <p class="pk-dec-title fs-1">決定寶可夢對戰台灣冠軍的戰鬥！</p>
          <p class="pk-dec-more fs-5">
            「Pokémon Championships 2022-23 Taiwan」分兩大部門舉辦！
            <br />
            目標成為台灣冠軍吧！
          </p>
        </div>
      </div>
      <div class="card-group row m-4">
        <div
          class="card col-12 m-4"
          style="
            max-width: 30rem;
            background-color: #d74941;
            color: white;
            border: 3px solid #ac302a;
            border-radius: 20px;
          "
        >
          <img src="./assets/thumb-game.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">遊戲部門</h5>
            <p class="card-text">在《寶可夢 朱／紫》中進行雙打對戰！</p>
            <button type="button" class="btn">詳情請見此</button>
          </div>
        </div>
        <div
          class="card col-12 m-4"
          style="
            max-width: 30rem;
            background-color: #4934b4;
            color: white;
            border-radius: 20px;
          "
        >
          <img
            src="./assets/thumb-cardgame.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">卡牌遊戲部門</h5>
            <p class="card-text">
              用你引以為豪的牌組與戰略展開火熱對戰， <br />
              將勝利收入囊中吧！
            </p>
            <button type="button" class="btn">詳情請見此</button>
          </div>
        </div>
      </div>
      <div class="sider-group m-4">
        <img src="./assets/deco-mq.png" alt="" class="sider-img" />
        <img src="./assets/deco-wn.png" alt="" class="sider-img2" />
        <div class="container2">
          <div class="inner"></div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="section3">
      <div class="dec-positaion m-5">
        <div class="dec-title">
          <p>Pokémon Championships 2022-23 Taiwan 是什麼</p>
          <p class="dec-info">
            「Pokémon Championships 2022-23
            <br />
            Taiwan」是決定寶可夢的遊戲部門、卡牌部門的台灣冠軍的比賽。
            <br />
            冠軍可獲得「寶可夢世界錦標賽2023」的出場權，並且還會獲贈獎牌等獎品。前往挑戰，贏取台灣冠軍寶座吧！
            <br />本活動除滿足以下條件的參賽選手以外，禁止其他人員入場。
            <br />遊戲部門：滿足此處記載的出場條件的參賽選手
            <br />卡牌遊戲部門：在事前申請中獲得參賽權的參賽選手
            <br />僅限國中生以下的選手，每名選手可與1名家長同伴入場。
            無當天參賽名額。 <br />當天預定會舉辦附加活動。
          </p>
        </div>

        <a href="" class="table-title"
          >「Pokémon Championships 2022-23 Taiwan」概要</a
        >
        <table>
          <tr>
            <th>舉辦日</th>
            <td>5月27日、28日</td>
          </tr>
          <tr>
            <th>舉辦場所/會場</th>
            <td>南港展覽館</td>
          </tr>
          <tr>
            <th>實施部門</th>
            <td>遊戲部門、卡牌遊戲部門</td>
          </tr>
          <tr>
            <th>參加費</th>
            <td>免費</td>
          </tr>
          <tr>
            <th>獎品</th>
            <td>
              <a href="">遊戲部門見此</a><br /><a href="">卡牌遊戲部門見此</a>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </section>
  <section>
    <div class="section4">
      <div class="section4-info">
        <img src="./assets/deco-lb.png" alt="" class="img-lb" />
        <div class="test2 m-5">
          <p class="section4-title">讓比賽更加熱火朝天的主視覺！</p>
          <p class="section4-info">
            在全球活躍的插畫家VOFAN為「Pokémon Championships 2022-23
            Taiwan」描繪了全新主視覺圖。
            <br />
            快來看看採用了主視覺插畫的獎品及周邊商品吧。
          </p>
        </div>
        <div class="test">
          <img src="./assets/img-creative.png" alt="" class="img-cre" />
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="section5">
      <div class="section5-dec">
        <p>©2023 Pokémon. ©1995-2023 Nintendo/Creatures Inc./GAME FREAK inc.</p>
      </div>
    </div>
  </section>
</template>

<style>
@media screen and (max-width: 700px) {
  .logo {
    width: 220px !important;
    margin-top: 200px !important;
  }
  .logo-kr {
    width: 300px !important;
    margin-top: 100px !important;
    left: 50px;
  }
  .logo-mr {
    width: 300px !important;
    left: -50px;
    top: -30px;
  }
  .logo-dec {
    font-size: 20px !important;
    z-index: 3;
    margin-top: 100px !important;
    -webkit-text-stroke: 0px #fff !important;
  }
  .sider-img {
    left: -50px;
    top: -10% !important;
    width: 50% !important;
  }
  .sider-img2 {
    width: 50% !important;
    top: 60% !important;
  }
  tr > th {
    padding-left: 20px !important;
  }
  .img-lb {
    position: relative !important;
    top: 20px !important;
    left: 0% !important;
    z-index: 3;
    width: 300px;
    margin: auto;
  }
  .img-cre {
    width: 80% !important;
    border-radius: 20px;
    margin-top: 10px !important;
  }
  .test {
    display: flex;
    justify-content: center;
  }
  .section4-title {
    margin-top: 10px !important;
    font-size: 30px;
  }
  .test2 {
    margin-left: 0% !important;
  }
  .inner {
    animation: slideshow 10s ease-in-out infinite !important;
  }
  .pk-img > img {
    margin: auto;
    width: 100% !important;
  }
  .card-group {
    gap: 0px !important;
  }
  .container2 {
    height: 300px !important;
  }
}
* {
  box-sizing: border-box;
}
body {
  margin: 0px;
}
html {
  margin: 0;
}
.section1 {
  background-image: url(./assets/mv-bg.png);
  height: 600px;
  background-size: cover;
  position: relative;
}
.logo-group {
  display: flex;
  justify-content: center;
}
.logo {
  position: absolute;
  z-index: 3;
  margin-top: 100px;
  width: 300px;
}
.logo-kr {
  z-index: 2;
  width: 600px;
  position: relative;
  margin-top: 20px;
}
.logo-mr {
  z-index: 2;
  width: 600px;
  position: relative;
  margin-top: 20px;
}
.logo-dec {
  font-size: 30px;
  display: flex;
  justify-content: center;
  z-index: 3;
  position: relative;
  margin-top: -150px;
  font-weight: bolder;
  -webkit-text-stroke: 1.5px #fff;
  text-align: center;
}
.section2 {
  background-image: url(./assets/section-bg-large.png);
  height: 100%;
  position: relative;
  margin-top: -150px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top: 10px solid #e4c927;
  border-bottom: 10px solid #e4c927;

  background-size: cover;
}

.pk-group {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.pk-img > img {
  width: 500px;
  margin-top: 100px;
}
.pk-dec-title {
  font-size: 36px;
  font-weight: bolder;
}
.pk-dec-more {
  font-size: 20px;
}
.card-group {
  z-index: 3;
  display: flex;
  justify-content: center;
  gap: 100px;
  position: relative;
  margin-top: 200px;

  border-top-right-radius: 40%;
  border-top-left-radius: 40%;
}
.card > img {
  padding: 10px;
}

.card-body {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.card-title {
  font-size: 36px;
}
.card-text {
  font-size: 20px;
  margin-top: 10px;
  height: 60px;
}
.btn {
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin: 20px;
  color: #fff !important;
  border-radius: 20px !important;
  border: 1px solid white !important;
}
.container2 {
  height: 500px;
  position: relative;
  overflow: hidden;
  margin: 10px;
}
.inner {
  height: 100%;
  width: 1000%;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url("./assets/ph-loop.jpg");
  animation: slideshow 100s ease-in-out infinite;
}
@keyframes slideshow {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-55%);
  }
}
.sider-group {
  position: relative;
}
.sider-img {
  z-index: 2;
  position: absolute;
  top: -20%;
  width: 25%;
}
.sider-img2 {
  z-index: 3;
  position: absolute;
  width: 30%;
  top: 40%;
  left: 65%;
}
.section3 {
  background-image: url(./assets/section-bg.png);
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top: 1px solid #e4c927;
  border-bottom: 10px solid #e4c927;
  background-size: cover;
}
.dec-title {
  font-size: 36px;
  font-weight: bolder;
  z-index: 3;
  position: relative;
  margin-top: 50px;
}
.dec-info {
  font-size: 16px;
  font-weight: 500;
}
.table-title {
  display: flex;
  justify-content: center;
  background-color: #f9bc10;
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  color: white;
  letter-spacing: 2px;
  font-weight: bolder;
  text-decoration: none;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 26px;
}
table {
  display: flex;
  justify-content: center;
  position: relative;
  background-image: url(./assets/bg-table.png);
  background-size: 400px;
  background-position: right bottom;
  background-repeat: no-repeat;
  width: 100%;
  z-index: 3;
}
tr > th {
  background-color: #fff1cc;
  width: 30vh;
  text-align: left;
  padding-left: 60px;
  border: 1px solid #fff1cc;
  font-size: 20px;
}
tr > td {
  width: 70vh;
  border: 1px solid #fff1cc;
  font-size: 20px;
  text-align: left;
  padding-left: 50px;
}
tr {
  width: 100%;
  height: 80px;
  text-align: center;
}
.section4 {
  background-image: url(./assets/section-bg-dark.png);
  color: white;
  position: relative;
  padding-bottom: 50px;
  border: 1px solid white;
}
.section4-info {
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
}
.img-lb {
  position: absolute;
  top: -200px;
  left: 60%;
  z-index: 3;
}
.img-cre {
  width: 60%;
  border-radius: 20px;
  margin-top: 80px;
}
.test {
  display: flex;
  justify-content: center;
}

.section4-title {
  margin-top: 100px;

  font-size: 30px;
}
.test2 {
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: left;
  z-index: 3;
  align-items: center;
}
.section5 {
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.section5-dec {
  margin: 50px;
  width: 60%;
  text-align: center;
}
</style>

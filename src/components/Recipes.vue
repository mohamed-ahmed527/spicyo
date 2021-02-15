<template>
  <div class="parent">
    <div class="container">
      <h1> Our Recipes </h1>
      <div class="slider">
        <img src="../assets/images/icon.jpg">
        <img src="../assets/images/icon2.jpg">
        <div class="row">
          <div class="col-md-12">
            <ul>
              <li>
                <div class="slider-img"> 
                  <img src="../assets/images/rs1.png">
                </div>
                <p> Homemade </p>
                <p><span>$</span> <span> 50 </span> </p>
              </li>
              <li>
                <div class="slider-img"> 
                  <img src="../assets/images/rs2.png">
                </div>
                <p> Noodles </p>
                <p><span>$</span> <span> 20 </span> </p>
              </li>
              <li>
                <div class="slider-img"> 
                  <img src="../assets/images/rs3.png">
                </div>
                <p> Egg </p>
                <p><span>$</span> <span> 10 </span> </p>
              </li>
              <li>
                <div class="slider-img"> 
                  <img src="../assets/images/rs4.png">
                </div>
                <p> Sushi Dizzy </p>
                <p><span>$</span> <span> 35 </span> </p>
              </li>
              <li>
                <div class="slider-img"> 
                  <img src="../assets/images/rs5.png">
                </div>
                <p> The Coffe Break </p>
                <p><span>$</span> <span> 25 </span> </p>
              </li>
              <li>
                <div class="slider-img"> 
                  <img src="../assets/images/rs1.png">
                </div>
                <p> Homemade </p>
                <p><span>$</span> <span> 50 </span> </p>
              </li>
              <li>
                <div class="slider-img"> 
                  <img src="../assets/images/rs2.png">
                </div>
                <p> Noodles </p>
                <p><span>$</span> <span> 20 </span> </p>
              </li>
              <li>
                <div class="slider-img"> 
                  <img src="../assets/images/rs3.png">
                </div>
                <p> Egg </p>
                <p><span>$</span> <span> 10 </span> </p>
              </li>
              <li>
                <div class="slider-img"> 
                  <img src="../assets/images/rs4.png">
                </div>
                <p> Sushi Dizzy </p>
                <p><span>$</span> <span> 35 </span> </p>
              </li>
              <li>
                <div class="slider-img"> 
                  <img src="../assets/images/rs5.png">
                </div>
                <p> The Coffe Break </p>
                <p><span>$</span> <span> 25 </span> </p>
              </li>                       
            </ul>
          </div>
        </div>
      </div>        
    </div>
  </div>
</template>
<script>
export default {
  name:"parent"
}
</script>
<style lang="scss" scoped>
.parent{
  box-shadow: inset 0 10px 30px -16px #000;
  padding: 50px 0px;
  background: #222;
  width: 100%;
  overflow: hidden;
  .container{
    width: 80%;
    margin: auto;
    >h1{
      text-align: left;
      font-size: 43px;
      margin-bottom: 70px;
      font-weight: 600;
    }
    .slider{
      position: relative;
      width: 100%;
      overflow: hidden;
      padding-bottom: 50px;
      ul{
        position: relative;
        padding: 0px;
        margin: 0px;
        width: calc(20% * 10);
        display: flex;
        .row{
          display: flex;
          flex-wrap: wrap;
        }
        li{
          width: calc(100% / 10);
          .slider-img{
            width: 93%;
            margin: auto;
            img{
              display: block;
              width: 95%;
              margin: auto;
            }
          }
          p{
            margin: 20px 0px;
            font-size: 22px;
            font-family: sans-serif;
          }
          p:last-of-type{
            font-size: 20px;
            span:first-of-type{
              color: gold; 
            }
          }
        }
      }
      >img{
        position: absolute;
        content: "";
        bottom: 0px;
        left: 0px;
      }
      >img:last-of-type{
          left: unset;
          right: 0px;
        }
    }
  }
}
@media (max-width:600px) {
  .parent .container .slider ul {
    width: calc(100% * 10);
  }
}
@media (min-width:600px) and (max-width:800px) {
  .parent .container .slider ul {
    width: calc(50% * 10);
  }
}
@media (min-width:800px) and (max-width:1000px) {
  .parent .container .slider ul {
    width: calc(33.3% * 10);
  }  
}
@media (min-width:1000px) and (max-width:1200px) {
  .parent .container .slider ul {
    width: calc(25% * 10);
  }  
}
</style>
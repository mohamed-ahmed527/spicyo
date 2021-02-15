<template>
  <div class="parent">
    <header>
      <img src="../assets/images/icon.jpg"> 
      <img src="../assets/images/icon2.jpg">
      <ul>
        <li>
          <div class="row">
            <div class="col-md-6 col-sm-12 col-xs-12">
              <div class="slide-text">
                <h1>Discover Restaurants That deliver near You</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                <button> Order Now </button>
              </div>
            </div>
            <div class="col-md-6 col-sm-12 col-xs-12">
              <div class="slide-img">
                <img src="../assets/images/burger_slide.png">
              </div>
            </div>
          </div>
        </li>

        <li>
          <div class="row">
            <div class="col-md-6 col-sm-12 col-xs-12">
              <div class="slide-text">
                <h1>Discover Restaurants That deliver near You</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                <button> Order Now </button>
              </div>
            </div>
            <div class="col-md-6 col-sm-12 col-xs-12">
              <div class="slide-img">
                <img src="../assets/images/burger_slide.png">
              </div>
            </div>
          </div>
        </li>
      </ul>
    </header>
  </div>
</template>
<script>
export default {
  name:"parent"
}
</script>
<style lang="scss" scoped>
.parent{
  header{
    position: relative;
    overflow: hidden;
    width: 100%;
    >img{
      position: absolute;
      content: "";
      bottom: 3%;
      left: 25%;
      border-radius: 50%;
      cursor: pointer;
      z-index: 10000;
    }
    >img:last-of-type{
      left: unset;
      right: 25%;
    }
    ul{      
      background-color: #222;
      position: relative;
      display: flex;
      flex-wrap: wrap;
      width: calc(100% * 2);
      margin:0px;
      padding: 20px 0px;
      right: 0px;
      li{
        width: calc(100% / 2);
        padding: 30px;
        .row{
          display: flex;
          flex-wrap: wrap;
          .col-md-6{
            .slide-text{
              h1{
                margin-top: 150px;
                text-align: left;
                font-size: 56px;
                font-weight: 800;
                font-family: system-ui;
                letter-spacing: 3px;
                line-height: 1.1;
              }
              P{
                text-align: left;
                margin-top: 30px;
              }
              button{
                transition: 0.5s all;
                display: block;
                padding: 11px 26px;
                border: 1px solid white;
                background: transparent;
                color: white;
                font-size: 19px;
                &:hover{
                  cursor: pointer;
                  color: #222;
                  border:1px solid gold;
                  background-color: gold;
                }
              }
            }
          }
          .col-md-6{
            .slide-img{
              img{
                display: block;
                width: 100%;
                margin: auto;
                margin-top: 50px;
              }
            }
          }
        }
      }
    }
  }
}
@media (min-width:768px) {

  
}
</style>
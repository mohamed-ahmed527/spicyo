<template>
  <div class="parent">
    <div class="container">
      <img src="../assets/images/title.png">
      <h1>About Our Food & Restaurant</h1>
      <p>It is a long established fact that a reader will be distracted by the readable content of a
        page when looking at its layout. The point of using Lorem
      </p>
      <div class="row">
        <div class="col-md-6 col-xs-12">
          <div class="about-text">
            <h2>Best Food</h2>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. 
              It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
              Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, 
              looked up one of the more obscureContrary to popular belief, Lorem Ipsum is not simply random text. 
              It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
            </p>
            <button> Read More  </button>
          </div>
        </div>
        <div class="col-md-6 col-xs-12">
          <div class="about-img">
            <img src="../assets/images/about-img.jpg">
            <div></div>

          </div>
        </div>
      </div>
      
      <div class="blog">
        <img src="../assets/images/title.png">
        <h1> Our Blog </h1>
        <p>when looking at its layout. The point of using Lorem</p>
        <div class="row">
          <div class="col-md-4 col-xs-12">
            <div class="blog1">
              <img src="../assets/images/blog_img1.png">
              <div class="blog-text">
                <h2>Spicy Barger</h2>
                <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-xs-12">
            <div class="blog1">
              <img src="../assets/images/blog_img2.png">
              <div class="blog-text">
                <h2>Egg & Tosh</h2>
                <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-xs-12">
            <div class="blog1">
              <img src="../assets/images/blog_img3.png">
              <div class="blog-text">
                <h2>Pizza</h2>
                <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!------------client---------->
      <div class="client">
        <img src="../assets/images/title.png">
        <h1> Our Client </h1>
        <div class="row">
          <div class="col-md-6 col-sm-8 col-xs-12">
            <div class="client1">
              <img src="../assets/images/client.jpg" />
              <h2> Roock Due </h2>
              <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text.
              </p>
              <img src="../assets/images/client_icon.png" >

            </div>
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
  padding-top: 100px;
  margin-bottom: 100px;
  background-image: url(../assets/images/bg.jpg);
  background-size: 100% auto;
  .container{
    >img{
      display: block;
      margin: auto;
      margin-bottom: 50px;
    }
    >h1{
      text-align: center;
      color: #191918;
      margin-bottom: 30px;
      font-size: 41px;
      letter-spacing: 2px;
      font-weight: 600;
    }
    >p{
      color: #191918;
      text-align: center;
      width: 70%;
      margin: auto;
      margin-bottom: 60px;
      font-size: 17px;
    }
    .row{
      display: flex;
      flex-wrap: wrap;
      .col-xs-12{
        .about-text{
          background-color: #191918;
          padding: 20px;
          margin-bottom: 30px;
          h2{
            text-align: left;
            font-size: 38px;
            margin-bottom: 30px;
          }
          p{
            text-align: left;
            font-size: 17px;
            line-height: 1.7;
          }
          button{
            display: block;
            border: 1px solid white; 
            margin-top: 35px;
            padding: 8px 24px;
            color: #191918;
            font-size: 17px;
            transition: 0.3s all;
            &:hover{
              border: 1px solid white;
              background-color: transparent;
              color: white;
            }
          }
        }
        .about-img{
          margin-top: 70px;
          margin-bottom: 70px;
          div {
            top: 0px;
            position: absolute;
            width: 80%;
            height: 112%;
            background-color: #d8b00f;
          }
          img{
            position: relative;
            z-index: 10000;
            float: right;
            display: block;
            width: 90%;
          }
        }
      }
    }
    .blog{
      margin-top: 160px;
      >img{
        display: block;
        margin: auto;
        margin-bottom: 30px;
      }
      >h1{
        text-align: center;
        color: #191918;
        margin-bottom: 10px;
        font-size: 41px;
        letter-spacing: 2px;
        font-weight: 600;
      }
      >p{
        color: #191918;
        text-align: center;
        width: 70%;
        margin: auto;
        margin-bottom: 60px;
        font-size: 17px;
      }
      .row{
        .col-xs-12{
          .blog1{
            position: relative;
            cursor: pointer;
            border: 1px solid #ddd;
            box-shadow: 0px 16px 14px -14px grey;
            margin-bottom: 30px;
            img{
              display: block;
              width: 100%;
            }
            .blog-text{
              opacity:0;
              position: absolute;
              top: 0;
              left: 0;
              background: #ddddddd6;
              height: 100%;
              padding: 10px;
              text-align: left;
              color: #191818;
              transition-timing-function: ease-in-out;
              transition: 0.5s all;
              h2{
                font-weight: 600;
                margin-bottom: 20px;
              }
              p{
                font-size: 17px;
              }
            }
            &:hover{
              .blog-text{
                opacity: 1;
              }
            }
          }
        }
      }
    }
    .client{
      margin-top: 100px;      
      >img{
        display: block;
        margin: auto;
        margin-bottom: 30px;
      }
      >h1{
        text-align: center;
        color: #191818;
        margin-bottom: 40px;
        font-size: 41px;
        letter-spacing: 2px;
        font-weight: 600;
      }
      .row{
        .col-xs-12{
          display: block;
          margin: auto;
          .client1{
            border-radius: 25px;
            padding: 55px 30px;
            background: #191818;
            color: white;
            img:first-of-type{
              display: block;
              margin: auto;
              margin-bottom: 30px;              
            }
            h2{
              text-align: center;
              margin-bottom: 20px;
            }
            p{
              font-size: 18px;
              font-family: system-ui;
              line-height: 1.7;
            }
            img:last-of-type{
              display: block;
              margin: auto;
              margin-top: 25px;
            }
          }
        }
      }
    }
  }
}
@media (max-width:768px) {
  .parent .container > p{
    width: 100%;
  }
  .parent .container{
    width: 90%;
  }
  .parent .container .blog > p{
    width: 100%;
  }
}
</style>
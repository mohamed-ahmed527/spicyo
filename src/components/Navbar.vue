<template>
  <div class="parent">
    <img class="menu" src="../assets/images/menu_icon.png"/>
    <nav>
      <div class="logo">
        <img src="../assets/images/logo.png">
      </div>
      <div class="rightnav">
        <div class="contact">
          <span> Contact Us :</span>
          <div> 
            <span><i class="fas fa-phone-alt"></i></span>
            <span>987-654-3210</span>
          </div>
          <div>
            <span><i class="fas fa-envelope"></i></span>
            <span>demo@gmail.com</span>
          </div>
          <div>
            <span><i class="fas fa-map-marker-alt"></i></span>
            <span>104 New york , USA</span>
          </div>
        </div>
        <div class="register">
          <button> Login </button>
          <button> Register </button>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name:"parent"
}
</script>
<style lang="scss" scoped>
.parent{
  background-color: #212020;
  overflow: hidden;
  >img{
    display: none; 
    float: right;
    margin-right: 15px;
    margin-top: 15px;
    padding: 5px;
    border: 0.5px solid #ddd;
    border-radius: 5px;
    &:hover{
      box-shadow: 1px 1px 5px 1px #ffd9009c;
      border: 0.5px solid #ffd9009c;
    }
  }
  nav{
    overflow: hidden;
    padding: 0px 15px;
    .logo{
      width: 13%;
      float: left;
      padding: 5px 0px;
        img{
          width: 100%;
        }
      }
  }
  .rightnav{
    display: block;
    float: right;
    .contact{
      display: flex;
      float: left;
      padding: 30px 0px;
      >span{
        font-size: 20px;
      }
      div{
        margin: 0px 20px;
        span:first-of-type{
          font-size: 16px;
          margin-right: 7px;
        }
        span{
          font-size: 16px;
          font-family: system-ui;
        }
        &:hover{
          cursor: pointer;
        }
      }
    }
    .register{
      position: relative;
      padding: 22px 0px;
      float: right;
      
      button{
        border:1px solid #e3d105;
        font-size: 18px;
        padding: 6px 23px;
        background: #e3d105;
        color: #222;
        font-family: system-ui;
        &:hover{
          cursor: pointer;
        }
      }
      button:last-of-type{
        background-color: transparent;
        border: 1px solid white;
        color: white;
        margin-left: 25px;
        transition: 0.3s all;
        &:hover{
          border:1px solid #e3d105;
          font-size: 18px;
          background: #e3d105;
          color: #222;
          font-family: system-ui
        }
      }
    }
  }
}
@media (max-width:600px) {
  .parent nav .logo{
    width: 35%;
  }
}
@media (min-width: 600px) and (max-width:800px) {
  .parent nav .logo{
    width: 25%;
  }
}
@media (min-width:800px) and (max-width:1160px) {
  .parent nav .logo{
    width: 19%;
  }
}
@media (max-width:1160px) {
  .parent .rightnav{
    display: none;
    clear: both;
    float: left;
  }
  .parent .rightnav .contact{
    text-align: left;
    display: block;
    clear: both;
  }
  .parent .rightnav .contact div{
    margin: 0px;
    margin-top: 10px;
  }
  .parent .rightnav .register{
    clear: both;
    padding: 0px;
    padding-bottom: 15px;
  }
}
@media (max-width:1160px) {
  .parent > img{
    display: inline;
  }
}
</style>
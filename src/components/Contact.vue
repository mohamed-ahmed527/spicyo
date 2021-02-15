<template>
  <div class="parent">
    <div class="container">
      <div class="row">
        <div class="col-md-5 col-xs-12">
          <form>
            <h1> Request A <span>Call Back</span> </h1>
            <input type="text" placeholder="Name" >
            <input type="email" placeholder="Email" >
            <input type="number" placeholder="Phone" >
            <textarea placeholder="Message">  </textarea>
            <button type="submit"> Send </button>
          </form>
        </div>
        <div class="col-md-7 col-xs-12">
          <div class="contact-img">
            <img src="../assets/images/img.jpg">
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
  background-color: #d8b00f;
  padding: 50px 0px;
  .row{
    display: flex;
    flex-wrap: wrap;
    .col-xs-12{
      form{
        display: block;
        width: 100%;
        padding: 0px;
        margin: 0px;
        h1{
          color: #191818;
          font-size: 41px;
          font-weight: 600;
          margin-top: 50px;
          margin-bottom: 30px;
          text-align: left;
          span{
            color: white;
          }
        }
        input{
          display: block;
          width: 100%;
          margin-bottom: 20px;
          border: 0px;
          padding: 12px 15px;
          color: #191818;
          outline-style: none;
        }
        textarea{
          display: block;
          width: 100%;
          margin-bottom: 20px;
          height: 150px;
          border: 0px;
          padding: 12px 15px;
          color: #191818;
          outline-style: none;
          resize: unset;
        }
        button{
          display: block;
          margin-bottom: 20px;
          border: 1px solid white;
          padding: 9px 40px;
          color: #191818;
          outline-style: none;
          font-size: 18px;
          transition: 0.5s all;
          &:hover{
            border: 1px solid white;
            color: white;
            background: transparent;
          }
        }
      }
      .contact-img{
        margin-top: 60px;
        img{
          display: block;
          width: 100%;
        }
      }
    }
  }
}
</style>
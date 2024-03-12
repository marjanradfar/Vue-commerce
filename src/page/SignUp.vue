<template>
  <div class="signUpContainer">
    <div class="signUp">
      <div class="signUp__content">
        <div class="signUp__content--title">
          <h2 class="SignUp">ثبت نام</h2>
          <p>از قبل حساب کاربری دارید؟ <span class="SignIn">ورود</span></p>
        </div>
        <div class="signUp__content--containerInputs">
          <Input :data="test"/>
          <Input :data="test"/>
          <Input :data="test"/>
          <Input :data="test"/>
        </div>
        <div class="signUp__content--agreement">
          <div class="agree">
            <Input :data="test2" className="inputCheckbox"/>
            <p class="agree__text">من موافقم با<span>سیاست حفظ حریم خصوصی</span> و <span>شرایط استفاده</span></p>
          </div>
        </div>
        <Button text="ثبت نام" className="btnSingUp btnBlack "/>
      </div>
      <div class="signUp__img">
        <img class="signUp__img--banner" src="../assets/image/signUp.png"/>
        <div class="signUp__img--logo">
          <img src="../assets/image/3legant.svg"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
//import components
import Input from "@/components/common/Input.vue";
import Button from "@/components/common/Button.vue";
//import image
import Search from "../assets/image/icon/search.svg";


const test = {

  type: "text",
  placeholder: "اسم شما"
}

const test2 = {
  type: "checkbox",
}
</script>
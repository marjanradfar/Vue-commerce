<template>
  <footer class="footer">
    <div class="footer__content ">
      <div class="footer__content--logo">
        <div class="logo">
          <img :src="footerItem.logo">
        </div>
        <div class="space">|</div>
        <p>فروشگاه هدایا و دکوراسیون</p></div>
      <nav class="footer__content--listMenu">
        <ul class="menu">
          <li class="menu__item" v-for="item in footerItem.menu">
            <a :href="item.url">{{ item.link }}</a>
          </li>
        </ul>
      </nav>
    </div>
    <hr/>
    <div class="footer__copyRight ">
      <div class="footer__copyRight--text">
        <p>Copyright © 2023 3legant. All rights reserved</p>
        <div class="contactUs">
          <a href="#">حریم خصوصی</a>
          <a href="#">شرایط استفاده</a>
        </div>
      </div>
      <div class="footer__copyRight--social">
        <img :src="item.img" v-for="item in footerItem.social"/>

      </div>
    </div>
  </footer>

</template>

<script setup>
//import image & icon
import logo from "../../assets/image/3legantWhite.svg";
import instagram from "../../assets/image/icon/instagram.svg";
import facebook from "../../assets/image/icon/facebook.svg";
import youtube from "../../assets/image/icon/youtube.svg";

const footerItem = {
  logo: logo,
  menu: [
    {link: "خانه", url: "#"},
    {link: "فروشگاه", url: "#"},
    {link: "محصولات", url: "#"},
    {link: "درباره ما", url: "#"},
  ],
  social: [
    {img: instagram},
    {img: facebook},
    {img: youtube},
  ],
}
</script>
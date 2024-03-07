<template>

  <header class="header">
    <section class="header__desk container">
      <div class="header__desk--logo">
        <a href="#"><img :src="data.logo"/>
        </a>
      </div>
      <nav class="header__desk--listMenu">
        <ul class="menu">
          <li class="menu__item " v-for="menuItem in data.menu">
            <a :href="menuItem.url" class="active"> {{ menuItem.link }}</a>
          </li>
        </ul>

      </nav>
      <nav class="header__desk--toolbar">
        <div v-for="toolbarImg in data.toolbar"><img :src="toolbarImg.img">
        </div>
      </nav>
    </section>

    <!--When the screen size is 768px-->
    <div class="header__mobile container">
      <div class="header__mobile--logo">
        <img src="../assets/image/icon/ham.svg" class="hamburgerIcon"/>
        <img src="../assets/image/3legant.svg" alt="logo"/>
      </div>
      <div class="header__mobile--purchase">
        <img src="../assets/image/icon/shoppingBag.svg">
        <span class="purchaseNum">2</span>
      </div>
    </div>
    <div id="hamburgerMenu" class="hamburgerMenu animate__animated animate__fadeInRight ">
      <div class="hamburgerMenu__head ">
        <img src="../assets/image/3legant.svg"/>
        <img src="../assets/image/icon/close.svg" class="closeIcon"/>
      </div>
      <div class="hamburgerMenu__input">
        <img src="../assets/image/icon/search.svg"/>
        <input type="text" placeholder="search"/></div>
      <div class="hamburgerMenu__list">
        <nav>
          <ul>
            <li><a href="#">خانه</a></li>
            <li><a href="#">فروشگاه</a></li>
            <li><a href="#">محصولات</a></li>
            <li><a href="#">درباره ما</a></li>
          </ul>
        </nav>
      </div>
    </div>

  </header>

</template>

<script setup>
const props = defineProps(["data",]);

</script>

<template>
    <form>
      <label for="locale-select">{{ $t('language') }}: </label>
      I18N : {{ $i18n.locale }}
      <select id="locale-select" v-model="$i18n.locale">
        <option value="en">en</option>
        <option value="fr">fr</option>
      </select>
    </form>
    {{ currentLanguage }}
  <div class="cocolor-website">
    <div v-if="showStoreLinks" class="fullscreen">
      <button class="close-button" @click="showStoreLinks = false">✕</button>
      {{ $t('get_app') }}
        <div class="store-links-container">
        <a href="https://apps.apple.com/fr/app/cocolor/id6547847867" style="text-align: center">  <img :src="svgImport('appStore')"></a>
        <a href="https://play.google.com/store/apps/details?id=com.heretic.cocolor"  style="text-align: center"><img :src="svgImport('playStore')"></a>
      </div>
    </div>
    <div v-if="showLegals" class="fullscreen">
      
      <button class="close-button" @click="showLegals = false">✕</button>
      <div style="max-width: 500px;">
      {{ $t('legal_text') }}
      </div>
    </div>
    <header :class="['fixed-header', { visible: headerVisible }]">

      <div class="header-content">       
        <div class="header-right">
          <img src="/static/logo-pink.svg" alt="Cocolor logo" class="text-logo" />
        </div>
        
        <div class="cta-buttons">
          <a href="https://play.cocolor.app"  class="cta-button dark">
            <svg width="12" height="12" viewBox="0 0 15 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.47836 0.0195312L13.027 0.0195313C13.613 0.0195316 14.088 0.494541 14.088 1.08049V10.6292C14.088 11.2151 13.613 11.6901 13.027 11.6901C12.4411 11.6901 11.9661 11.2151 11.9661 10.6292L11.9661 3.64189L2.47601 13.1319L0.975586 11.6315L10.4656 2.14146L3.47836 2.14146C2.8924 2.14146 2.4174 1.66645 2.4174 1.08049C2.4174 0.494541 2.8924 0.0195316 3.47836 0.0195312Z" fill="currentColor"/>
            </svg>
            {{ $t('play_online') }}


          </a>
          <button class="cta-button light"  @click="showStoreLinks = true">
            <svg width="12" height="12" viewBox="0 0 15 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.47836 0.0195312L13.027 0.0195313C13.613 0.0195316 14.088 0.494541 14.088 1.08049V10.6292C14.088 11.2151 13.613 11.6901 13.027 11.6901C12.4411 11.6901 11.9661 11.2151 11.9661 10.6292L11.9661 3.64189L2.47601 13.1319L0.975586 11.6315L10.4656 2.14146L3.47836 2.14146C2.8924 2.14146 2.4174 1.66645 2.4174 1.08049C2.4174 0.494541 2.8924 0.0195316 3.47836 0.0195312Z" fill="currentColor"/>
            </svg> 
            {{ $t('get_app') }}
          </button>
       
      </div>
   
      </div>
    </header>
    
<div class="bottom-buttons">

      </div>
        <button @click="switchLanguage" class="language-button">FR — EN</button>
    <header class="hero-section">
      <div class="hero-content">
        <img src="/static/Tete.svg" alt="Cocolor logo" class="logo" />
        <img src="/static/logo.svg" alt="Cocolor logo" class="text-logo" />
        <p class="hero-title">{{ $t('play_with_colors') }}</p>
        <br><br>
        {{ currentLanguage }}
        I18N : {{ $i18n.locale }} 
        {{ $t('language') }} {{ $t('play_online') }}
        <div class="cta-buttons">
          <a href="https://play.cocolor.app" class="cta-button dark">
            <svg width="12" height="12" viewBox="0 0 15 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.47836 0.0195312L13.027 0.0195313C13.613 0.0195316 14.088 0.494541 14.088 1.08049V10.6292C14.088 11.2151 13.613 11.6901 13.027 11.6901C12.4411 11.6901 11.9661 11.2151 11.9661 10.6292L11.9661 3.64189L2.47601 13.1319L0.975586 11.6315L10.4656 2.14146L3.47836 2.14146C2.8924 2.14146 2.4174 1.66645 2.4174 1.08049C2.4174 0.494541 2.8924 0.0195316 3.47836 0.0195312Z" fill="currentColor"/>
            </svg>
            {{ $t('play_online') }}  {{ $t('language') }}
          </a>
          <button class="cta-button light" @click="showStoreLinks = true">
            <svg width="12" height="12" viewBox="0 0 15 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.47836 0.0195312L13.027 0.0195313C13.613 0.0195316 14.088 0.494541 14.088 1.08049V10.6292C14.088 11.2151 13.613 11.6901 13.027 11.6901C12.4411 11.6901 11.9661 11.2151 11.9661 10.6292L11.9661 3.64189L2.47601 13.1319L0.975586 11.6315L10.4656 2.14146L3.47836 2.14146C2.8924 2.14146 2.4174 1.66645 2.4174 1.08049C2.4174 0.494541 2.8924 0.0195316 3.47836 0.0195312Z" fill="currentColor"/>
            </svg> 
            {{ $t('get_app') }}
          </button>
        </div>
      </div>
    </header>

    <section class="games-section">
      <img :src="svgImport('theGames')" alt="Cocolor logo" class="section-title" />
      <br><br><br><br><br>

      <div class="game-container reverse">
        <div class="game-preview">
          <img src="/static/AmIBlue.png" alt="Am I Blue game preview" class="game-image" />
        </div>
        <div class="game-info">
          <h3 class="game-title">{{ $t('am_i_blue') }}</h3>
          <p class="game-subtitle">{{ $t('one_player_game') }}</p>
          <p class="game-description">{{ $t('am_i_blue_desc') }}</p>
        </div>
      </div>

      <div class="game-container">
        <div class="game-preview">
            <img src="/static/TeaForTwo.png" alt="" class="game-image" />
        </div>
        <div class="game-info">
          <h3 class="game-title">{{ $t('tea_for_two') }}</h3>
          <p class="game-subtitle">{{ $t('two_player_game') }}</p>
          <p class="game-description">{{ $t('tea_for_two_desc') }}</p>
        </div>
  </div>
  <img :src="svgImport('teaParties')" class="section-title" />

</section>

<section class="galaxy-section">
  <img :src="svgImport('theCocolorGalaxy')" alt="The Cocolor Galaxy" class="section-title" />
  <p class="section-description">{{ $t('galaxy_description') }}</p>
  <div class="galaxy-slider">
  <div class="galaxy-grid">
    <div class="galaxy-item">
      <img src="/static/G1.jpg" alt="Cocolor workshop" class="galaxy-image" />
      <p class="galaxy-title">{{ $t('galaxy_1_title') }}</p>
      <p class="galaxy-description">{{ $t('galaxy_1_description') }}</p>
      <a href="https://www.fondationlouisvuitton.fr/fr/evenements/atelier-cocolor " class="galaxy-link">fondationlouisvuitton.fr</a>
    </div>
    <div class="galaxy-item">
      <img src="/static/G2.jpg" alt="Kids discovering color vision" class="galaxy-image" />
      <p class="galaxy-title">{{ $t('galaxy_2_title') }}</p>
      <p class="galaxy-description">{{ $t('galaxy_2_description') }}</p>
      <a href="https://parismuse.com/tours/explore-modern-art-cocolor-for-families/" class="galaxy-link">parismuse.com</a>
    </div>
    <div class="galaxy-item">
      <img src="/static/G3.jpg" alt="Cocolor app" class="galaxy-image" />
      <p class="galaxy-title">{{ $t('galaxy_3_title') }}</p>
      <p class="galaxy-description">{{ $t('galaxy_3_description') }}</p>
      <a href="mailto:bonjour@heretique.fr" class="galaxy-link">{{ $t('contact_us') }}</a>
    </div>
  <div class="galaxy-item">
      <img src="/static/G4.jpg" alt="Cocolor app" class="galaxy-image" />
      <p class="galaxy-title">{{ $t('galaxy_4_title') }}</p>
      <p class="galaxy-description">{{ $t('galaxy_4_description') }}</p>
      <a href="mailto:bonjour@heretique.fr"  class="galaxy-link">{{ $t('contact_us') }}</a>
    </div>
  </div>
</div>
</section>

<section class="creators-section">
  <h2 class="creators-title">{{ $t('creators_title') }}</h2>
  
  <div class="creator-info">
    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/10d44aa952a122d0e7be2a6969d369588970ff78c60befefabe855267e5c574a?placeholderIfAbsent=true&apiKey=77dd066ede6c44b99cde843386742085" alt="Rosy Lamb painting in her studio" class="creator-image" />
    <div class="creator-description">
      <p>{{ $t('rosy_intro') }}</p>
      <a href="https://www.rosylamb.com/" class="link-underline">{{ $t('discover_my_paintings') }}</a>
    </div>
  </div>

  <div class="creator-info reverse">
    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b376ed24f716f87995c33f50efe415afaa1e1aad3cf2b9a1372e400b110f564?placeholderIfAbsent=true&apiKey=77dd066ede6c44b99cde843386742085" alt="hérétique team" class="creator-image" />
    <div class="creator-description">
      <p>{{ $t('heretic_intro') }}</p>
      <a href="https://heretique.fr" class="link-underline">{{ $t('discover_heretic') }}</a>
    </div>
  </div>
</section>

<div class="site-footer">
  <div class="footer-content">
    <div class="footer-cta">
      <h3 class="footer-title white">{{ $t('footer_share_drawing') }}</h3><br>
      <a class="cta-button dark" href="mailto:bonjour@heretique.fr">
        <svg width="12" height="12" viewBox="0 0 15 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.47836 0.0195312L13.027 0.0195313C13.613 0.0195316 14.088 0.494541 14.088 1.08049V10.6292C14.088 11.2151 13.613 11.6901 13.027 11.6901C12.4411 11.6901 11.9661 11.2151 11.9661 10.6292L11.9661 3.64189L2.47601 13.1319L0.975586 11.6315L10.4656 2.14146L3.47836 2.14146C2.8924 2.14146 2.4174 1.66645 2.4174 1.08049C2.4174 0.494541 2.8924 0.0195316 3.47836 0.0195312Z" fill="currentColor"/>
            </svg>        {{ $t('share_drawing') }}
          </a>
    </div>
    <div class="footer-cta">
      <h3 class="footer-title">{{ $t('footer_imagine_collab') }}</h3><br>
      <a class="cta-button light" href="mailto:bonjour@heretique.fr">
        <svg width="12" height="12" viewBox="0 0 15 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.47836 0.0195312L13.027 0.0195313C13.613 0.0195316 14.088 0.494541 14.088 1.08049V10.6292C14.088 11.2151 13.613 11.6901 13.027 11.6901C12.4411 11.6901 11.9661 11.2151 11.9661 10.6292L11.9661 3.64189L2.47601 13.1319L0.975586 11.6315L10.4656 2.14146L3.47836 2.14146C2.8924 2.14146 2.4174 1.66645 2.4174 1.08049C2.4174 0.494541 2.8924 0.0195316 3.47836 0.0195312Z" fill="currentColor"/>
            </svg>        {{ $t('imagine_collab') }}
          </a>
    </div>
  </div>
  <div class="footer-logo">
    <img src="/static/logo.svg" alt="Cocolor logo" class="footer-image" />
    <a class="legal-link" @click="showLegals = true">{{ $t('legal_mentions') }}</a>
  </div>
</div>
  </div>
</template>



<script>
export default {
  name: 'App',
  data() {
    return {
      currentLanguage: this.$i18n.locale.toUpperCase(),
      scrollTop: 0,
      showStoreLinks: false,
      showLegals: false,
    };
  },
  computed: {
    headerVisible() {
      //console.log( this.scrollTop, window.innerHeight, window.scrollY > window.innerHeight * 0.7)

      // headerVisible est calculé en fonction de la valeur scrollTop
      return this.scrollTop > window.innerHeight * 0.8;
    },
  },
  watch: {
    currentLocale(newLocale) {
      this.$i18n.locale = newLocale;
    },
    '$i18n.locale': {
      immediate: true,
      handler(newLocale) {
        this.currentLocale = newLocale;
      }
    }
  },
  methods: {
    svgImport(filename) {
    const language = this.$i18n.locale.toUpperCase();
    try {
      // Utilise require pour indiquer à Webpack d'inclure les fichiers SVG nécessaires
      return `/_nuxt/static/${filename}_${language}.svg`;
    } catch (error) {
      console.error("Erreur lors de l'import de l'image : ", error);
      return ''; // Retourne une chaîne vide en cas d'erreur
    }
  },
  switchLanguage() {
      // Utiliser l'API globale de Vue I18n pour accéder à la locale réactive
      this.$i18n.locale.value = this.$i18n.locale.value === 'fr' ? 'en' : 'fr';
      console.log(this.$i18n.locale.value); // Pour vérifier le changement
      this.currentLanguage = this.$i18n.locale.value.toUpperCase();
    },
    handleScroll() {
      this.scrollTop = window.scrollY;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://use.typekit.net/mev3zhe.css';
    document.head.appendChild(link);
    let title =  "Cocolor";
    document.title = title; // Change le titre ici
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>
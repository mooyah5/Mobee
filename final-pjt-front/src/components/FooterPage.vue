<template>
  <div>
    <footer id="footer" class="footer">
      <p class="copyright">
        <router-link :to="{ name: 'epilogue' }"> Epilogue</router-link>

      </p>
      <div class="credits">
        <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ -->
        Designed by <a href="https://github.com/Movie-Recommender-System/Mobee">Hanna Yunhyeok</a>
      </div>
    </footer><!-- End Footer -->
  </div>
</template>
<script>
export default {
  name: 'FotterPage',
}
</script>
<style>
  
</style>
<template>
  <div class="container-fluid">
    <div class="row">
      <li class="list-group-item bg-black text-light d-flex justify-content-between align-items-center">
        <!--평점, 리뷰작성란-->
        <div class="col-10">
          <div class="align-top">
          <div>
            <span class="material-symbols-outlined text-warning">hexagon</span>
            <span v-if="review.score >= 2" class="material-symbols-outlined text-warning">hexagon</span>
            <span v-if="review.score >= 3" class="material-symbols-outlined text-warning">hexagon</span>
            <span v-if="review.score >= 4" class="material-symbols-outlined text-warning">hexagon</span>
            <span v-if="review.score == 5" class="material-symbols-outlined text-warning">hexagon</span>
          </div>
          <p>{{ review.content }}</p>
        </div>
      </div>
      <!--수정 및 삭제 버튼, 작성자, 생성자, 수정자 정보-->
      <div class="col-2">
        <div class="d-flex row">
        <div class="col-10 mx-2">
          <h4>
            <a v-if="isLoggedIn" @click='likeReview(
              {moviePk : review.movie, reviewPk : review.pk})'>
              <i v-if="review.is_liked" class="fa-solid fa-heart text-danger"></i>
              <i v-else class="fa-regular fa-heart"></i>
            </a>
            <i v-else class="fa-solid fa-heart"></i>
            {{ review.like_count }}
          </h4>
        </div>
        <div>
            <span class="opacity-75" >작성</span>  {{ review.user.username }}<br>
            <span class="opacity-75">생성</span> {{ review.created_at }} <br>
            <span class="opacity-75">수정</span> {{ review.updated_at }} <br>
        </div>
        <div class="dropdown">
          <button class="btn btn-light dropdown-toggle" type="button" 
          id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fa-solid fa-gear"></i>
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
            <li><button class="dropdown-item" type="button"
            @click='deleteReview({moviePk : review.movie, reviewPk : review.pk})'>
            삭제</button></li>
            <li><button class="dropdown-item" type="button" @click="open">
            수정</button></li>
          </ul>
        </div>
      </div>
    </div>
      <!-- -->
      <modal :name='modalName' height="auto" width="50%" >
        <ReviewEditForm :modalName="modalName" :review="review"/>
      </modal>
      </li>
    </div>
  </div>
</template>

<script>
  import ReviewEditForm from './ReviewEditForm.vue'
  import { mapGetters, mapActions } from 'vuex'
  import Vue from 'vue'
  import VModal from 'vue-js-modal'
  import 'vue-js-modal/dist/styles.css'

  Vue.use(VModal)

  export default {
    name: 'ReviewListItem',
    data () {
      return {
        modalName: this.review.pk + 'modal'
      }
    },
    components: { ReviewEditForm },
    props: {review: Object },
    computed: {
      ...mapGetters([ 'isLoggedIn' ])
    },
    methods: {
      ...mapActions([ 'likeReview', 'deleteReview' ]),
      open () {
        this.$modal.show(this.modalName)
      }
    }
  }
</script>

<style>
.opacity-75 {
  font-size:12px;
}

</style>
<template>
  <div>
    <b-modal v-model="show" id="modal-login">
      <b-tabs v-model="tabIndex" content-class="mt-2">
        <b-tab title="ورود" active>
          <b-input-group label="Your email" size="sm" class="mb-2">
            <b-input-group-prepend is-text>
              <b-icon icon="person"></b-icon>
            </b-input-group-prepend>
            <b-form-input type="email" v-model="userName" placeholder="ایمیل خود را وارد کنید"></b-form-input>
          </b-input-group>
          <b-input-group label="Your password" size="sm" class="mb-2">
            <b-input-group-prepend is-text>
              <b-icon icon="lock"></b-icon>
            </b-input-group-prepend>
            <b-form-input type="password" v-model="password" placeholder="کلمه عبور را وارد کنید"></b-form-input>
          </b-input-group>
        </b-tab>
        <b-tab title="ثبت نام">
          <Registeration />
        </b-tab>
      </b-tabs>
      <template v-slot:modal-footer>
        <div class="w-100">
          <b-button variant="danger" size="sm" class="float-right" @click="show=false">لغو</b-button>
          <b-button variant="primary" size="sm" class="float-right" @click="login">{{okText}}</b-button>
        </div>
      </template>
    </b-modal>
  </div>
</template>
<script>
import Registeration from "@/components/signup.vue";

export default {
  name: "Login",
  components: {
    Registeration
  },
  data() {
    return {
      show: false,
      tabIndex: 0,
      userName: '',
      password: ''
    };
  },
  methods: {
    login() {
      if (this.tabIndex === 0) {
        this.$store.dispatch('login',{username: this.userName, password: this.password}).then((result) => {
          if (result === true) {
            this.show = false;
          }
          else {
            // eslint-disable-next-line no-console
            console.log("Error");
          }
        });
      } else {
        //
      }
    }
  },
  computed: {
    okText() {
      return this.tabIndex === 0 ?  'ورود' : 'ثبت نام'
    }
  },
};
</script>
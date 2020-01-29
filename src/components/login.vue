<template>
  <div>
    <b-modal id="modal-login" title ok-title="ورد" cancel-title="لغو" @ok="login">
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
    </b-modal>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      userName: '',
      password: ''
    };
  },
  methods: {
    login() {
      if (this.userName === "demo" && this.password === "demo") {
        // eslint-disable-next-line no-console
        console.log("OK");
      }
      else {
        // eslint-disable-next-line no-console
        console.log("Error");
      }
    }
  }
};
</script>
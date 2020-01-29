<template>
  <div>
    <b-modal id="modal-register" ok-title="ثبت نام" cancel-title="لغو" @ok="register" >
      <b-input-group label="Your email" size="sm" class="mb-2">
        <b-input-group-prepend is-text>
          <b-icon icon="person"></b-icon>
        </b-input-group-prepend>
        <b-form-input type="text" name="name" v-model="name" placeholder="نام خود را وارد کنید"></b-form-input>
      </b-input-group>      
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
      <b-input-group label="Your password" size="sm" class="mb-2">
        <b-input-group-prepend is-text>
          <b-icon icon="lock"></b-icon>
        </b-input-group-prepend>
        <b-form-input type="password" v-model="passwordConfirm" placeholder="تکرار کلمه عبور را وارد کنید"></b-form-input>
      </b-input-group>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      name: '',
      userName: '',
      password: '',
      passwordConfirm: '',
    };
  },
  methods: {
    register() {
      // if (this.userName === "demo" && this.password === "demo") {
      //   // eslint-disable-next-line no-console
      //   console.log("OK");
      // }
      // else {
      //   // eslint-disable-next-line no-console
      //   console.log("Error");
      // }
    }
  }
};
</script>
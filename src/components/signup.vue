<template>
    <div>
  <b-button v-b-modal.modal-1>sign up</b-button>

  <b-modal id="modal-1" title="BootstrapVue">
     <!-- Material form register -->
  <form>
    <p class="h4 text-center mb-4">Sign up</p>
    <div class="grey-text">
      <mdb-input label="Your name" icon="user" type="text"/>
      <mdb-input label="Your email" icon="envelope" type="email"/>
      <mdb-input label="Your password" icon="lock" type="password"/>
      <mdb-input label="Confirm Your password" icon="lock" type="password"/>
    </div>
    <div class="text-center">
      <mdb-btn color="primary">Register</mdb-btn>
    </div>
  </form>
  <!-- Material form register -->
  </b-modal>
</div>
</template>

<script>
  import { mdbInput, mdbBtn } from 'mdbvue';
  export default {
    name: 'Basic',
    components: {
      mdbInput,
      mdbBtn
    }
  }
</script>
<template>
  <div>
  <b-button v-b-modal.modal-1>Launch demo modal</b-button>

  <b-modal id="modal-1" title="BootstrapVue">
      <!-- Material form login -->
  <form>
    <p class="h4 text-center mb-4">login</p>
    <div class="grey-text">
      <mdb-input label="Your email" icon="envelope" type="email"/>
      <mdb-input label="Your password" icon="lock" type="password"/>
    </div>
    <div class="text-center">
      <mdb-btn color="primary">login</mdb-btn>
    </div>
  </form>
  <!-- Material form login -->
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
    },
  }
</script>
<template>
  <div class="row align-items-end">
    <div class="col-md-6">
      <div class="form-group">
        <label for="firstname">نام</label>
        <label type="text" class="form-control">{{additionalInfo.name}}</label>
      </div>
    </div>
    <div class="col-md-6">
      <div class="form-group">
        <label for="lastname">نام خانوادگی</label>
        <label type="text" class="form-control">{{additionalInfo.lastName}}</label>
      </div>
    </div>
    <div class="w-100"></div>
    <div class="col-md-12">
      <div class="form-group">
        <label for="streetaddress">آدرس محل تحویل</label>
        <textarea disabled
          class="form-control"
          placeholder="House number and street name"
          :value="additionalInfo.address"
        />
      </div>
    </div>
    <div class="w-100"></div>
    <div class="col-md-6">
      <div class="form-group">
        <label for="phone">شماره تلفن</label>
        <label type="text" class="form-control">{{additionalInfo.tel}}</label>
      </div>
    </div>
    <div class="col-md-6">
      <div class="form-group">
        <label for="emailaddress">ایمیل</label>
        <label type="text" class="form-control">{{user.email}}</label>
      </div>
    </div>
    <div class="w-100"></div>
  </div>
</template>

<script>
export default {
    props: {
        additionalInfo: Object,
        user: Object
    },
};
</script>

<style lang="scss" scoped>
</style>
<template>
<div class="title">
  Patient Registration
</div>

<div class="field">
  <label class="label has-text-grey">First name</label>
  <div class="control">
    <input class="input" type="text" placeholder="Prayuth">
  </div>
</div>

<div class="field">
  <label class="label has-text-grey">Last name</label>
  <div class="control">
    <input class="input" type="text" placeholder="Chan O Cha" value="">
  </div>
</div>

<div class="field">
  <label class="label has-text-grey">Email</label>
  <div class="control">
    <input class="input" type="email" placeholder="Example112@hereO.com" value="">
  </div>
</div>

<div class="field">
  <label class="label has-text-grey">Hospital name</label>
  <div class="control">
    <input class="input" type="text" placeholder="Long Live the King Hospital" value="">
  </div>
</div>

<div class="field ">
  <label class="label has-text-grey">Province</label>
  <div class="control ">
    <div class="select is-fullwidth">
      <select>
        <option>Bangkok</option>
        <option>Pathumthani</option>
        <option>Nonthaburi</option>
        <option>Sumutprakan</option>
      </select>
    </div>
  </div>
</div>

<div class="field is-grouped">
  <div class="control is-center">
    <button class="button is-link">Submit</button>
  </div>
  <div class="control">
    <button class="button is-link is-light">Cancel</button>
  </div>
</div>
</template>

<script>
export default {
  name: "Regis",
};
</script>

<style scoped >
  .field {
    text-align: left;
    margin-top: 1.5rem
  }

</style>

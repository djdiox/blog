<template>

</template>

<script>
export default {
async mounted() {
  console.log('$auth' ,this.$auth)
  debugger;
   const result =await  this.$auth.login()
   console.log(result)
}
}
</script>

<style>

</style>

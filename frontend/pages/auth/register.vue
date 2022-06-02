<script setup>
import { ref } from "vue";
import { useField, useForm, Form } from "vee-validate";
import { object, string } from "yup";
const schema = object({
  email: string().required().email(),
  password: string().required(),
});
const api = useApi();
const { handleSubmit, handleReset } = useForm({ validationSchema: schema });

const { value: email, errorMessage: emailErr } = useField("email");
const { value: password, errorMessage: passwordErr } = useField("password");
const { value: password2, errorMessage: passwordErr2 } = useField("password2");
const createdUser = ref();
const onSubmit = handleSubmit(async (values) => {
  console.log(`Form values: Doing async request to some api point`);
  createdUser.value = await api.register(values);
});
</script>

<template lang="pug">
.flex.justify-center.items-center.h-full.bg-primary-700
  section.max-w-sm.h-full.bg-white.shadow-md.max-h-80.rounded-md.w-80.p-4
    h1.text-center.text-2xl.text-gray-700 Admin Panel
    form.form.mt-2(@submit="onSubmit")
      input(placeholder="login" v-model='email' class="rounded p-2 border border-1 border-gray-200 w-full block")
      .text-red-500 {{emailErr}}
      input(placeholder="password" v-model='password'  type='password' class='rounded p-2 border border-1 border-gray-200 mt-2 w-full block')
      .text-red-500 {{passwordErr}}
      button.p-2.border(type='submit' @click='handleSubmit') Register
    pre {{createdUser}}
</template>

<style lang="scss"></style>

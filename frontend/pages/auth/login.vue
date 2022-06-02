<script setup>
import { useField, useForm, Form } from "vee-validate";
import { object, string } from "yup";

const route = useRoute();
const router = useRouter();

const schema = object({
  email: string().required().email(),
  password: string().required(),
});
const api = useApi();
const { handleSubmit, handleReset } = useForm({ validationSchema: schema });

const { value: email, errorMessage: emailErr } = useField("email");
const { value: password, errorMessage: passwordErr } = useField("password");

email.value = "a@pro.me";
const onSubmit = handleSubmit(async (values) => {
  const response = await api.login(values.email, values.password);
  if (response.ok) {
    const next = route.query.next ? route.query.next : "/";
    console.warn("going to next route", next);
    router.push({ path: next });
  } else {
    console.warn(response.status);
  }
});
</script>

<template lang="pug">
.flex.justify-center.items-center.h-full.bg-primary-700
  
  section.max-w-sm.h-full.bg-white.shadow-md.max-h-80.rounded-md.w-80.p-4
    h1.text-center.text-2xl.text-gray-700 Admin Panel
    a.block.text-center.text-blue-600(href='/admin') Go to admin panel
    form.form.mt-2(@submit="onSubmit")
      input(placeholder="login" v-model='email' class="rounded p-2 border border-1 border-gray-200 w-full block")
      .text-red-500 {{emailErr}}
      input(placeholder="password" v-model='password'  type='password' class='rounded p-2 border border-1 border-gray-200 mt-2 w-full block')
      .text-red-500 {{passwordErr}}
      button.p-2.border(type='submit' @click='handleSubmit') Login
</template>

<style lang="scss"></style>

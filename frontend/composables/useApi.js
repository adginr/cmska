import { useStorage } from "@vueuse/core";

export default function useApi() {
  const baseURL = process.client
    ? "http://localhost:8000"
    : `http://backend:8000`;
  return {
    _processFormData(creds) {
      const formData = new FormData();
      for (const key of Object.keys(creds)) {
        formData.append(key, creds[key]);
      }
      return formData;
    },

    async login(username, password) {
      const token = useStorage("token");
      token.value = null;

      const userForm = new FormData();
      userForm.append("username", username);
      userForm.append("password", password);
      try {
        const response = await $fetch("/auth/jwt/login", {
          baseURL,
          method: "POST",
          body: userForm,
        });
        useStorage("token", {
          access_token: response.access_token,
        });
        response.ok = true;
        return response;
      } catch (error) {
        return error.response;
      }

      return true;
    },
    async logout() {
      const token = useStorage("token");
      token.value = null;
      useRouter().push("/auth/login");
    },
    register(creds) {
      return $fetch("/auth/register", {
        baseURL,
        method: "POST",
        body: creds,
      });
    },
    async fetchUser() {
      const token = useStorage("token");
      if (process.server) {
        console.log(`TOKEN FROM SERVER`, token.value);
        console.log(`HEADER`, useRequestHeaders(["Authorization"]));
      }
      let access_token;
      try {
        access_token = JSON.parse(token.value)["access_token"];
      } catch (error) {}
      try {
        // const user = await $fetch("/users/me", {
        //   baseURL,
        //   headers: {
        //     Authorization: `Bearer ${access_token}`,
        //   },
        // });
        const user = await useFetch("/user/me", {
          baseURL,
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        });
        return user;
      } catch (error) {
        console.warn(error);
      }
    },
  };
}

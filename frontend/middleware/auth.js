export default defineNuxtRouteMiddleware(async (to) => {
  const api = useApi();
  const user = await api.fetchUser();
  console.log(`Current User from AUTH MIDDLEWARE`, user);
  if (!user) {
    return navigateTo(`/auth/login?next=${to.path}`);
  }
});

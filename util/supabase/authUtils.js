import { supabase } from "./supabase";

export const seecurrentuser = async () => {
  console.log("SeeCurrentUser");
  const localUser = await supabase.auth.getSession();
  console.log(localUser);
};

// ------------ getSessionData ------------
/* 사용시에 비동기로 데이터가져오는거라 다음과같이 써서 쓰자.
const user = ref(null);

 onMounted(async () => {
  user.value = await getSessionData();
});
*/
export const getSessionData = async () => {
  const sessionData = await supabase.auth.getSession();
  //   console.log("getSessionData :", sessionData.data.session?.user);

  return sessionData.data.session?.user;
};

export const login = async () => {
  console.log("LogIn");
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });
  if (error) {
    console.log(error.message);
  } else {
    console.log("Login Successed ! ");
    // router.push("/notes");
    window.location.href = "/notes"; // 새로고침되면서 페이지 이동 되어야 네비바에 유저정보도 바뀌게 보임 !
  }
};

export const logout = async () => {
  console.log("LogOut");
  const { data, error } = await supabase.auth.signOut();
  if (error) {
    console.log(error.message);
  } else {
    console.log("LogOut Successed !");
    // router.push("/");
    window.location.href = "/";
  }
};

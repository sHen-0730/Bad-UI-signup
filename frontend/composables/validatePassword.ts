//パスワードの検証関数
export const validatePassword = (username: string, password: string) => {
  //パスワードが12文字以上かどうか
  if (password.length < 12) {
    return false;
  }
  //パスワードにUsernameに使用している文字が含まれているかどうか
  if (!password.includes(username)) {
    return false;
  }
  //パスワードに英字の小文字、数字、記号のすべてが含まれているかどうか
  const regex = /^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).+$/;
  if (!regex.test(password)) {
    return false;
  }
  //すべてのルールを満たした場合
  return true;
};

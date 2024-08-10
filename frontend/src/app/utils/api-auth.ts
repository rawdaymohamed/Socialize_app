export const login = async (user: any) => {
  try {
    let response = await fetch("http://localhost:4000/auth/login/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify(user),
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};
export const logout = async () => {
  try {
    let response = await fetch("http://localhost/4000/auth/logout/", {
      method: "GET",
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const postUserApi = async () => {
  try {
    const response = await fetch('https://rise.api-uat.kindicare.com/api/v1/client/auth/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'uyen5@gmail.com',
        password: 'Uyen123',
      }),
    });

    const json = await response.json();
    console.log('json',json);
  } catch (error) {
    console.error(error);
  }
};

postUserApi();


export async function getHelloWorld() {
  try {
    return {
      Message : 'Hello World'
    };
  } catch (error) {
    console.error("Hello World ", error);
  }
}


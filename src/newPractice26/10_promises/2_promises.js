const dataFetcher = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Successfully Fetched the Method");
    }, 2000);
  });
};

// then and catch
// dataFetcher()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.error(e);
//   });

try {
  const out = await dataFetcher();
  console.log(out);
} catch (error) {
  console.log(error);
}

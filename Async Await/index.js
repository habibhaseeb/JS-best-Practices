function fetchData() { 
  return new Promise((resolve, reject) => {
    setTimeout(() => { 
      resolve('Data fetched successfully'); 
          }, 1000);
  });
}

async function handleData() { 
  const message = await fetchData(); 
  console.log(message); 
} 
handleData();

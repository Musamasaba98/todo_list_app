const months= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
export  const getDate=()=>{
  const current = new Date();
  const date = `${current.getDate()} ${months[current.getMonth()]}, ${current.getFullYear()}`;
  return date
}
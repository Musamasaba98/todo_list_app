const months = ["January", "February", "March", "April", "May", "June", "July",
  "August", "September", "October", "November", "December"];
export const getDate = () => {
  const current = new Date();
  const date = `${current.getDate()} ${months[current.getMonth()]}, ${current.getFullYear()}`;
  return date
}
export const getNewDate = () => {
  const current = new Date();
  const hours = current.getHours()
  const minutes = current.getMinutes()
  const time = `${hours}:${minutes.toString().length === 2 ? minutes : "0" + minutes}`
  const year = current.getFullYear();
  const month = current.getMonth() + 1;
  const day = current.getDate();
  const date = `${year}-${month
    .toString()
    .padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
  return { date, time }
}

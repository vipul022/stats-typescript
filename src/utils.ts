export const dateStringToDate = (dateString: string): Date => {

  // !take a date string and split it from '/' into an array of strings and then convert each value into number
  // !28/10/2020 => ['28', '10', '2020'] => [28, 10, 2020]
  const dateParts = dateString
  .split('/')
  .map((value:string): number => {
    return parseInt(value);
  })

  // !new Date takes year, month(starting index is 0, therefore -1 to get the exact month) and day as arguments 
  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0])
}


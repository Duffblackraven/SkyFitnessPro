
export function transormData (data) {
    const result = []
    for (const key in data) {
      
       
       result.push(data[key])
    }
   return result
}
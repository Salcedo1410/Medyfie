export default function asyncFunction(setFunction){
  return new Promise((resolve, reject) => {
    try {
      resolve(setFunction);
    } catch (error) {
      reject(() => console.log(error))
    }
  });
}
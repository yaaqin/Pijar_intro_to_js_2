//Print number in array

const array = [7, 2, 98, 72, 27, 74, 64];
const firstValue = 1;
const lastValue = 10;

const isGoodValue = (firstValue, secondValue) => {
  return new Promise ((resolve,reject) => {
    setTimeout (() => {
      if (firstValue < secondValue) {
        resolve ("first value and last value is Correct")
      }else {
        reject ("failed...")
      }
    }, 8500)
    })
  }

const checkArr = (array) => {
  return new Promise ((resolve,reject) => {
    setTimeout(() => {
      if (array.length >= 5) {
        resolve("Array is Correct")
      } else {
        reject("The number of Array must be more than 5")
      }
    },2500)
  })
  }
  
const failValue = (firstValue, secondValue) => {
  if (firstValue <= secondValue) {
    console.log("Second value must be greater than the first value")
  }else {
    return ""
  }
}

const getFilterData = (firstValue, secondValue, varArray) => {
  return new Promise((resolve, reject) => {
    setTimeout (() => {
      const result = varArray.filter((data) => data >= firstValue && data <= secondValue);
      result.sort((a, b) => a - b);
      if (result.length > 0) {
        resolve(`data is Correct :${result}`)
      } else {
        reject("there is no correct data")
      } 
    },3500)
  })
}  

const resultData = async (firstValue,secondValue,varArray) => {
  try {
    console.log("Checking Data...")
    const array = await checkArr(varArray)
    const success = await isGoodValue(firstValue, secondValue)
    const data = await getFilterData(firstValue, secondValue, varArray)
    console.log(success)
    console.log(array)
    console.log(data)
    
  } catch (error) {
    console.log(error)
    const fail = await failValue(firstValue,secondValue)
    console.log(fail)
  }
}

resultData(1,10,array)
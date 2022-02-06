const logicTest = () => {
    const arr = [2,3,1,3];
    let split = arr.length/2;
    const newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if ( i < split && i ==0) {
          newArr.push(arr[i] - 2, arr[i+1] + 1)
            console.log(newArr)
        }
        else if(i < split && i ==1) {
          newArr.push(arr[i+1] +1, arr[i+2] - 2)
            console.log(newArr)
        }
        else if (i >= split && i ==2) {
            if(newArr[i] == 2) {
              newArr[i-1]++
                newArr[i]--
                  newArr[i]--
                    console.log(newArr)
            }
            else if(newArr[i] !== 2) {
              newArr[i]++
               newArr[i+1]--
                 newArr[i+1]--
                   console.log(newArr)

            }    
           
            // return newArr;
                  newArr.forEach((val, idx) => {
          if(newArr[idx+2] == 2) {
            newArr[i-1]++
              newArr[i]--
                 newArr[i]--
                   console.log(newArr)
          } 
      })
        }
        
        // console.log('this is final array' +newArr)
      
      }
}

logicTest();
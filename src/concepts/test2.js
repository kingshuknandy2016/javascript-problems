const sampleData2 = {
  a: {
    b: {
      c: 12,
      d: "Hello World",
    },
    e: [1, 2, 3],
  },
  f: null,
  m: true,
};

const flattenMap = (obj) => {
    const result={}
    for (const i in obj){
        // Not null 
        // Not an array
        // Is an Object
        if(obj[i] != null && !Array.isArray(obj[i]) && typeof obj[i] === 'object'){
            const out = flattenMap(obj[i]);
            //It will be an array => Once again Loop
            for (const j in out){
                result [i+"."+j]=out[j];
            }
        }else{
            result[i] = obj[i];
        }
    }
    //console.log(result)
    return result;
};
 const out=flattenMap(sampleData2)
 console.log(out)
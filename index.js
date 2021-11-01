const maskInput = (value,options)=>{
    let result;

    if(!value){
        throw new Error("Need to provide a value");
     }

    const _length = value.length;

   if(!options.maskWith ){
       options.maskWith = '*'
   }

   if(!options.fromIndex || options.fromIndex > _length){
    options.fromIndex = 0;
   }

   if(!options.toIndex || options.toIndex > _length){
    options.toIndex = value.length;
   }

   let unTouched_from = value.slice(0,options.fromIndex);
   let unTouched_to = value.slice(options.toIndex, value.length);
   let touched = value.slice(options.fromIndex, options.toIndex);
   touched = touched.replace(/[a-zA-Z0-9+()]/g,  options.maskWith);
   
   result = `${unTouched_from}${touched}${unTouched_to} `

   return result;

}

module.exports.maskInput = maskInput;


class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(string){
    let exception = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let final_result = [];
    let array = string.split(" ");
    for(let i=0; i < array.length; i++){
      if(i==0){
        final_result.push( this.capitalize(array[i]));
      } else {
        if(exception.includes(array[i])){
          final_result.push(array[i]);
        } else {
          final_result.push(this.capitalize(array[i]))
        }
      }
    }
    return final_result.join(" ")
  }
}
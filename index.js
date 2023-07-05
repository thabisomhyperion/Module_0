try{
  
  console.log("Tumelo","Hello World!")
  
}
catch (error){

  if (error instanceof SyntaxError)
  {
    console.error('Syntax Error: ', error.message)
  }else
  {
    console.error('Error', error)
  }
}


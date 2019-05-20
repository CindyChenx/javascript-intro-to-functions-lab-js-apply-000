function shout(String){
  return String.toUpperCase()
}

function whisper(String){
  return String.toLowerCase()
}

function logShout(String){
  console.log(String.toUpperCase())
}

function logWhisper(String){
  console.log(String.toLowerCase())
}

function sayHiToGrandma(String){
  if(String === String.toLowerCase()){
    console.log('I can\'t hear you)
  }
  if(String === String.toUpperCase()){
    console.log('YES INDEED!')
  }
}
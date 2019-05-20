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
  if(String.toLowerCase() === String){
    console.log('I can\'t hear you')
  } else
  if(String.toUpperCase() === String){
    console.log('YES INDEED!')
  } else
  if(String === 'I love you, Grandma'){
    console.log('I love you, too.')
  }
}

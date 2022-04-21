/** Textual markov chain generator */
function randomChoice(arr){
  return arr[Math.floor(Math.random()*arr.length)];
}



class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
    let newMap = new Map();
    for(let i=0; i < this.words.length; i++){
      let currentWord = this.words[i];
      let nextWord = this.words[i+1]
      if(newMap.has(currentWord)){
        newMap.get(currentWord).push(nextWord);
      } else{
        newMap.set(currentWord,[nextWord])
      }
    }
    this.newMap = newMap;
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
    let keys = Array.from(this.newMap.keys());
    let key = MarkovMachine.randomChoice(keys);
    let ouput=[];

    while (ouput.length < numWords && key != null){
      out.push(key);
      key = MarkovMachine.randomChoice(this.newMap.get(key));
    }
    return out.join(" ");
  }
}

 module.exports={
  MarkovMachine,
}

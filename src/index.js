const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const exprByWords = [];
    const exprByAlphabet = [];
    const quantityLetter = 10;
    const result = [];

    const sliceStr = (str, number, array) => {
        let word = [];
        for (let i = 0; i < str.length; i++) {
            word.push(str.slice(i, i+number));
            i += number-1;
        }
        array.push(word);
    }

    expr.split('**********').map(word => sliceStr(word, quantityLetter, exprByWords));
    exprByWords.map(word => {
        let wordTemp = [];
        word.map(letter => {
            let encodedLetter = '';
            for(let i = 0; i < letter.length; i++) {
                if(letter[i] === '1') {
                    i++;
                    if(letter[i] === '0') {
                        encodedLetter += '.';
                    } else if (letter[i] === '1') {
                        encodedLetter += '-'
                    }
                } else {
                    encodedLetter += ' ';
                }
            }
            wordTemp.push(encodedLetter.trim());
        });
        exprByAlphabet.push(wordTemp);
    });

    exprByAlphabet.map(encodedWord => {
        let encWRD = '';
        encodedWord.map(encodedLetter => encWRD += MORSE_TABLE[encodedLetter]);
        result.push(encWRD);
    });
    return result.join(' ');
}

module.exports = {
    decode
}
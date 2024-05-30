const transliterationMap = {
   'a': 'అ', 'aa': 'ఆ', 'i': 'ఇ', 'ii': 'ఈ', 'u': 'ఉ', 'uu': 'ఊ',
   'e': 'ఎ', 'ee': 'ఏ', 'ai': 'ఐ', 'o': 'ఒ', 'oo': 'ఓ', 'au': 'ఔ',
   'k': 'క', 'kh': 'ఖ', 'g': 'గ', 'gh': 'ఘ', 'ng': 'ఙ',
   'c': 'చ', 'ch': 'ఛ', 'j': 'జ', 'jh': 'ఝ', 'ny': 'ఞ',
   't': 'ట', 'th': 'ఠ', 'd': 'డ', 'dh': 'ఢ', 'n': 'ణ',
   't': 'త', 'th': 'థ', 'd': 'ద', 'dh': 'ధ', 'n': 'న',
   'p': 'ప', 'ph': 'ఫ', 'b': 'బ', 'bh': 'భ', 'm': 'మ',
   'y': 'య', 'r': 'ర', 'l': 'ల', 'v': 'వ',
   'sh': 'శ', 'ss': 'ష', 's': 'స', 'h': 'హ',
   'l': 'ళ', 'ksh': 'క్ష', 'jny': 'జ్ఞ',
};
const reversedTransliterationMap = {
   'అ': 'a',
   'ఆ': 'aa',
   'ఇ': 'i',
   'ఈ': 'ii',
   'ఉ': 'u',
   'ఊ': 'uu',
   'ఎ': 'e',
   'ఏ': 'ee',
   'ఐ': 'ai',
   'ఒ': 'o',
   'ఓ': 'oo',
   'ఔ': 'au',
   'అం': 'am',
   'అః': 'ah',
   'క': 'ka',
   'ఖ': 'kha',
   'గ': 'ga',
   'ఘ': 'gha',
   'ఙ': 'nga',
   'చ': 'ca',
   'ఛ': 'cha',
   'జ': 'ja',
   'ఝ': 'jha',
   'ఞ': 'nya',
   'ట': 'ta',
   'ఠ': 'tha',
   'డ': 'da',
   'ఢ': 'dha',
   'ణ': 'na',
   'త': 'ta',
   'థ': 'tha',
   'ద': 'da',
   'ధ': 'dha',
   'న': 'na',
   'ప': 'pa',
   'ఫ': 'pha',
   'బ': 'ba',
   'భ': 'bha',
   'మ': 'ma',
   'య': 'ya',
   'ర': 'ra',
   'ఱ': 'rra',
   'ల': 'la',
   'ళ': 'lla',
   'వ': 'va',
   'శ': 'sha',
   'ష': 'ssa',
   'స': 'sa',
   'హ': 'ha',
   'క్ష': 'ksha',
   'జ్ఞ': 'jna',
   'ఽ': "'",

   // Vowel signs
   'ా': 'aa',
   'ి': 'i',
   'ీ': 'ii',
   'ు': 'u',
   'ూ': 'uu',
   'ె': 'e',
   'ే': 'ee',
   'ై': 'ai',
   'ొ': 'o',
   'ో': 'oo',
   'ౌ': 'au',
   'ం': 'm',
   'ః': 'h',

   // Additional vowel signs with consonants
   '్క': 'k',
   '్ఖ': 'kh',
   '్గ': 'g',
   '్ఘ': 'gh',
   '్ఙ': 'ng',
   '్చ': 'c',
   '్ఛ': 'ch',
   '్జ': 'j',
   '్ఝ': 'jh',
   '్ఞ': 'ny',
   '్ట': 't',
   '్ఠ': 'th',
   '్డ': 'd',
   '్ఢ': 'dh',
   '్ణ': 'n',
   '్త': 't',
   '్థ': 'th',
   '్ద': 'd',
   '్ధ': 'dh',
   '్న': 'n',
   '్ప': 'p',
   '్ఫ': 'ph',
   '్బ': 'b',
   '్భ': 'bh',
   '్మ': 'm',
   '్య': 'y',
   '్ర': 'r',
   '్ల': 'l',
   '్వ': 'v',
   '్శ': 'sh',
   '్ష': 'ss',
   '్స': 's',
   '్హ': 'h',
   'ళ': 'l',
   'క్ష': 'ksh',
   'జ్ఞ': 'jny',
};


function transliterate() {
   const teluguInput = document.getElementById('teluguInput').value;
   let unicodeOutput = '';

   for (let char of teluguInput) {
      console.log("char:",char);
      unicodeOutput += reversedTransliterationMap[char];
      console.log("unicodeOutput:",unicodeOutput);
   }
   document.getElementById('unicodeOutput').value = unicodeOutput;
}

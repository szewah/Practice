

function mostVowels(string) {
// function mostVowels(string) {
	var wordsArr = string.split(' ');
//  var wordsArr = string.split(' ')
	var returnedWord = '';
//  var leadWord = ''
	var mostVowels = 0;
//  var mostVowels = 0;
  
  	for (var i = 0; i < wordsArr.length; i++) {
//  for (var i = 0; i < wordsArr.length; i++) {
		var word = wordsArr[i];
//     	var word = wordsArr[i];
		var vowels = 'aeiouAEIOU';
//     	var vowels = 'aeiou'
		var vowelCount = 0;
//     	var vowelCount = 0
			for (var j = 0; j < word.length; j++) {
	//      for (var j = 0; j < word.length; j++) {
				var currentWord = word[j]
				if (vowels.indexOf(word[j]) !== -1) {
//         		if (vowels.indexOf(word[j]) !== -1) {
					vowelCount +=1
	//           	vowelCount +=1
        		}
		      }
		 if (vowelCount > mostVowels) {
//       if (vowelCount > mostVowels) {
			mostVowels = vowelCount;	
//         	mostVowels = vowelCount;
			returnedWord = word;
//         	leadWord = word;
	      }
	    }
		return returnedWord
}


console.log(mostVowels('The quick brown fox jumped over the hill'))
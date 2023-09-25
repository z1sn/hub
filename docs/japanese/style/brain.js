/***************************************
*
*  KANA DICTIONARY - And similar ones
*
***************************************/

const CHAR_LIST = {
	'hsingle' :
		{ 'あ': 'a', 'い': 'i', 'う': 'u', 'え': 'e', 'お': 'o'},
	'hk':
		{ 'か': 'ka', 'き': 'ki', 'く': 'ku', 'け': 'ke', 'こ': 'ko'},
	'hs':
		{ 'さ': 'sa', 'し': 'shi', 'す': 'su', 'せ': 'se', 'そ': 'so'},
	'ht':
		{ 'た': 'ta', 'ち': 'chi', 'つ': 'tsu', 'て': 'te', 'と': 'to'},
	'hn':
		{ 'な': 'na', 'に': 'ni', 'ぬ': 'nu', 'ね': 'ne', 'の': 'no'},
	'hh':
		{ 'は': 'ha', 'ひ': 'hi', 'ふ': 'fu', 'へ': 'he', 'ほ': 'ho'},
	'hm':
		{ 'ま': 'ma', 'み': 'mi', 'む': 'mu', 'め': 'me', 'も': 'mo'},
	'hy':
		{ 'や': 'ya', 'ゆ': 'yu', 'よ': 'yo'},
	'hr':
		{ 'ら': 'ra', 'り': 'ri', 'る': 'ru', 'れ': 're', 'ろ': 'ro'},
	'hw':
		{ 'わ': 'wa', 'を': 'o'},
	'hn1':
		{ 'ん': 'n'},
	'hg':
		{ 'が': 'ga', 'ぎ': 'gi', 'ぐ': 'gu', 'げ': 'ge', 'ご': 'go'},
	'hz':
		{ 'ざ': 'za', 'じ': 'ji', 'ず': 'zu', 'ぜ': 'ze', 'ぞ': 'zo'},
	'hd':
		{ 'だ': 'da', 'ぢ': 'ji', 'づ': 'zu', 'で': 'de', 'ど': 'do'},
	'hb':
		{ 'ば': 'ba', 'び': 'bi', 'ぶ': 'bu', 'べ': 'be', 'ぼ': 'bo'},
	'hp':
		{ 'ぱ': 'pa', 'ぴ': 'pi', 'ぷ': 'pu', 'ぺ': 'pe', 'ぽ': 'po'},
		
	'hdk':
		{ 'きゃ': 'kya', 'きゅ': 'kyu', 'きょ': 'kyo'},
	'hds':
		{ 'しゃ': 'sha', 'しゅ': 'shu', 'しょ': 'sho'},
	'hdc':
		{ 'ちゃ': 'cha', 'ちゅ': 'chu', 'ちょ': 'cho'},
	'hdn':
		{ 'にゃ': 'nya', 'にゅ': 'nyu', 'にょ': 'nyo'},
	'hdh':
		{ 'ひゃ': 'hya', 'ひゅ': 'hyu', 'ひょ': 'hyo'},
	'hdm':
		{ 'みゃ': 'mya', 'みゅ': 'myu', 'みょ': 'myo'},
	'hdr':
		{ 'りゃ': 'rya', 'りゅ': 'ryu', 'りょ': 'ryo'},
	'hdg':
		{ 'ぎゃ': 'gya', 'ぎゅ': 'gyu', 'ぎょ': 'gyo'},
	'hdj':
		{ 'じゃ': 'ja', 'じゅ': 'ju', 'じょ': 'jo'},
	'hdj2':
		{ 'ぢゃ': 'ja', 'ぢゅ': 'ju', 'ぢょ': 'jo'},
	'hdb':
		{ 'びゃ': 'bya', 'びゅ': 'byu', 'びょ': 'byo'},
	'hdp':
		{ 'ぴゃ': 'pya', 'ぴゅ': 'pyu', 'ぴょ': 'pyo'},
	
		
	'ksingle' : 
		{ 'ア': 'a', 'イ': 'i', 'ウ': 'u', 'エ': 'e', 'オ': 'o'},
	'kk':
		{ 'カ': 'ka', 'キ': 'ki', 'ク': 'ku', 'ケ': 'ke', 'コ': 'ko'},
	'ks':
		{ 'サ': 'sa', 'シ': 'shi', 'ス': 'su', 'セ': 'se', 'ソ': 'so'},
	'kt':
		{ 'タ': 'ta', 'チ': 'chi', 'ツ': 'tsu', 'テ': 'te', 'ト': 'to'},
	'kn':
		{ 'ナ': 'na', 'ニ': 'ni', 'ヌ': 'nu', 'ネ': 'ne', 'ノ': 'no'},
	'kh':
		{ 'ハ': 'ha', 'ヒ': 'hi', 'フ': 'fu', 'ヘ': 'he', 'ホ': 'ho'},
	'km':
		{ 'マ': 'ma', 'ミ': 'mi', 'ム': 'mu', 'メ': 'me', 'モ': 'mo'},
	'ky':
		{ 'ヤ': 'ya', 'ユ': 'yu', 'ヨ': 'yo'},
	'kr':
		{ 'ラ': 'ra', 'リ': 'ri', 'ル': 'ru', 'レ': 're', 'ロ': 'ro'},
	'kw':
		{ 'ワ': 'wa', 'ヲ': 'o'},
	'kn1':
		{ 'ン': 'n'},
	'kg':
		{ 'ガ': 'ga', 'ギ': 'gi', 'グ': 'gu', 'ゲ': 'ge', 'ゴ': 'go'},
	'kz':
		{ 'ザ': 'za', 'ジ': 'ji', 'ズ': 'zu', 'ゼ': 'ze', 'ゾ': 'zo'},
	'kd':
		{ 'ダ': 'da', 'ヂ': 'ji', 'ヅ': 'zu', 'デ': 'de', 'ド': 'do'},
	'kb':
		{ 'バ': 'ba', 'ビ': 'bi', 'ブ': 'bu', 'ベ': 'be', 'ボ': 'bo'},
	'kp':
		{ 'パ': 'pa', 'ピ': 'pi', 'プ': 'pu', 'ペ': 'pe', 'ポ': 'po'},
		
	'kdk':
		{ 'キャ': 'kya', 'キュ': 'kyu', 'キョ': 'kyo'},
	'kds':
		{ 'シャ': 'sha', 'シュ': 'shu', 'ショ': 'sho'},
	'kdc':
		{ 'チャ': 'cha', 'チュ': 'chu', 'チョ': 'cho'},
	'kdn':
		{ 'ニャ': 'nya', 'ニュ': 'nyu', 'ニョ': 'nyo'},
	'kdh':
		{ 'ヒャ': 'hya', 'ヒュ': 'hyu', 'ヒョ': 'hyo'},
	'kdm':
		{ 'ミャ': 'mya', 'ミュ': 'myu', 'ミョ': 'myo'},
	'kdr':
		{ 'リャ': 'rya', 'リュ': 'ryu', 'リョ': 'ryo'},
	'kdg':
		{ 'ギャ': 'gya', 'ギュ': 'gyu', 'ギョ': 'gyo'},
	'kdj':
		{ 'ジャ': 'ja', 'ジュ': 'ju', 'ジョ': 'jo'},
	'kdj2':
		{ 'ヂャ': 'ja', 'ヂュ': 'ju', 'ヂョ': 'jo'},
	'kdb':
		{ 'ビャ': 'bya', 'ビュ': 'byu', 'ビョ': 'byo'},
	'kdp':
		{ 'ピャ': 'pya', 'ピュ': 'pyu', 'ピョ': 'pyo'},


	'sm1':
		{'あ': 'a', 'お': 'o'},
	'sm2':
		{'い': 'i', 'り': 'ri'},
	'sm3':
		{'た': 'ta', 'に': 'ni', 'こ': 'ko'},
	'sm4':
		{'わ': 'wa', 'ね': 'ne', 'れ': 're'},
	'sm5':
		{'の': 'no', 'め': 'me', 'ぬ': 'nu'},
	'sm6':
		{'ろ': 'ro', 'る': 'ru', 'そ': 'so', 'を': 'o'},
	'sm7':
		{'き': 'ki', 'さ': 'sa', 'ち': 'chi', 'ら': 'ra'},
	'sm8':
		{'に': 'ni', 'け': 'ke', 'は': 'ha', 'ほ': 'ho', 'ま': 'ma'},
	'sm9':
		{'ナ': 'na', 'メ': 'me'},
	'sm10':
		{'コ': 'ko', 'ユ': 'yu', 'ヒ': 'hi'},
	'sm11':
		{'ン': 'n', 'ソ': 'so', 'シ': 'shi', 'ツ': 'tsu'},
	'sm12':
		{'タ': 'ta', 'ク': 'ku', 'ヌ': 'nu', 'ス': 'su', 'ケ': 'ke'},
	'sm13':
		{'ウ': 'u', 'ワ': 'wa', 'フ': 'fu', 'ラ': 'ra', 'ヲ': 'o'},
	'sm14':
		{'ア': 'a', 'マ': 'ma', 'ヤ': 'ya', 'セ': 'se', 'ヒ': 'hi'},
	'sm15':
		{'せ': 'se', 'サ': 'sa'},
	'sm16':
		{'し': 'shi', 'レ': 're', 'も': 'mo'},
	'sm17':
		{'つ': 'tsu', 'フ': 'fu', 'う': 'u', 'ラ': 'ra'},
}

const ALTERNATE_ROMAJI_LIST = {
	'o': ['wo'],
	'chi': ['ci'],
	'shi': ['si'],
	'tsu': ['tu'],
	'zu': ['du'],
	'ji': ['di', 'zi'],
	'fu': ['hu'],
	'ja': ['dya'],
	'jo': ['dyo'],
	'ju': ['dyu']
}

// Checkbox
let CHECKED_COLUMNS = []
let CHECKED_FONT_LIST = []

// Workflow
let SHUFFLED_KANAS = []
let CURRENT_KANA
let CURRENT_ROMAJI

// Answers
let IS_WRONG
let TOTAL_ANS = 0
let TOTAL_CORRECT = 0


/*****************************
*
*  LOCAL STORAGE MANAGEMENT
*
*****************************/

function getCheckBoxData() {
	SHUFFLED_KANAS = [] // Resets all shuffled kanas so that the checkboxes are not useless
	// :: Manages all columns with kana chars
	CHECKED_COLUMNS = [] // Resets value
	const kanaCheckBoxElements = document.getElementsByClassName('kanaCheckBox') // Gets all elements with 'kanaCheckBox' class name
	let currentKanaColumn

	for (let i = 0; i < kanaCheckBoxElements.length; i++) {
		currentKanaColumn = kanaCheckBoxElements[i]
		if (currentKanaColumn.checked == true) {
			for (let showChar in CHAR_LIST[currentKanaColumn.id]) {
				CHECKED_COLUMNS.push([showChar, CHAR_LIST[currentKanaColumn.id][showChar]])
			}
		}
	}
	
	// :: Manages all columns with fonts
	CHECKED_FONT_LIST = [] // Resets value
	const fontCheckBoxElements = document.getElementsByClassName('fontCheckBox')
	let currentFontColumn
	for (let i = 0; i < fontCheckBoxElements.length; i++) {
		currentFontColumn = fontCheckBoxElements[i]
		if (currentFontColumn.checked == true) {
			CHECKED_FONT_LIST.push(currentFontColumn.id)
		}
	}
}


function saveSettings() {
	const inputTags = document.getElementsByTagName('input') // Creates an array with all tags that cointains input i.e. `<input id="stupid" class="md-toggle">`
	for (let i = 0; i < inputTags.length; i++) {
		if (inputTags[i].type == 'checkbox' && !inputTags[i].classList.contains("md-toggle")) { // Avoid `class="md-toggle"` ones
			localStorage.setItem(`kana_${inputTags[i].id}`, inputTags[i].checked ? '1' : '0') // Stores `1` or `0` if is checked or not
		}
	}
	getCheckBoxData()
 }


function loadSettings() {
	let currentValue
	const inputTags = document.getElementsByTagName('input')

	for (let i = 0; i < inputTags.length; i++) {
		if (inputTags[i].type === 'checkbox' && !inputTags[i].classList.contains("md-toggle")) { // Avoid `class="md-toggle"` ones
			currentValue = localStorage.getItem(`kana_${inputTags[i].id}`) // Gets the current value from the specific ID
			if (currentValue === '1') {
				inputTags[i].checked = true
			} else if (currentValue === '0') {
				inputTags[i].checked = false
			}
		}
	}
	getCheckBoxData()
}

/***********************
*
*  Table onClick menu
*
***********************/

function checkAll(currentTable) {
	let td // <td>
	const tr = document.getElementsByClassName(currentTable) // <tr>
	for (let i = 0; i < tr.length; i++) {
		td = tr[i].children
		for (let j = 0; j < td.length; j++) {
			if (td[j].children[0].id != 'KOI-WIN') { // Avoids checking this font because is hard
				td[j].children[0].checked = true
			}
		}
	}
	saveSettings()
}

function uncheckAll(currentTable) {
	let td // <td>
	const tr = document.getElementsByClassName(currentTable) // <t>
	for (let i = 0; i < tr.length; i++) {
		td = tr[i].children
		for (let j = 0; j < td.length; j++) {
			td[j].children[0].checked = false
		}
	}
	saveSettings()
}

/******************
*
*  'GAME' ENGINE
*
******************/

function shuffle(arr) {
	let arrCopy = arr.slice(0) // Create a copy of the input array to avoid manipulating the original
	let currentIndex = arrCopy.length
	let temp, randomIndex

	// :: Fisher-Yates shuffle algorithm
	while (currentIndex) { // When reaches 0, stops
		randomIndex = Math.floor(Math.random() * currentIndex)
		currentIndex--

		// :: Swap elements at currentIndex and randomIndex
		temp = arrCopy[currentIndex]
		arrCopy[currentIndex] = arrCopy[randomIndex]
		arrCopy[randomIndex] = temp
	}
	return arrCopy
}

function showKana() {	
	IS_WRONG = false 
	document.getElementById('inputBox').value = '' // Erases the TextBox content
	
	// :: Sets default values if no checkboxes are checked
	if (CHECKED_COLUMNS.length === 0) {
		document.getElementById('hsingle').checked = true
		saveSettings()
	}
	if (CHECKED_FONT_LIST.length == 0) {
		document.getElementById('default').checked = true
		saveSettings()
	}
	
	// :: Updates the count and message elements in the HTML if there are answers
	if (TOTAL_ANS > 0) {
		document.getElementById('count').innerHTML = `${TOTAL_CORRECT}/${TOTAL_ANS}`;
		document.getElementById('message').innerHTML = '&nbsp;'
	}
	
	// :: Sets a list of kanas to play with
	if (SHUFFLED_KANAS.length === 0) {
		SHUFFLED_KANAS = shuffle(CHECKED_COLUMNS)
	}
	
	// :: Avoids repeating the same kana
	if (CURRENT_KANA && SHUFFLED_KANAS[0][0] === CURRENT_KANA) {
		SHUFFLED_KANAS.shift()
	}
	
	// :: Sets current kana and romaji
	CURRENT_KANA = SHUFFLED_KANAS[0][0]
	CURRENT_ROMAJI = SHUFFLED_KANAS[0][1]
	// :: Advances to the next kana by removing the first element from the shuffled list
	SHUFFLED_KANAS.shift()
	
	// :: Randomly selects a font from the available options to use with the kana
	let currentFont = CHECKED_FONT_LIST[Math.floor(Math.random() * CHECKED_FONT_LIST.length)]
	if (currentFont === 'default') {
		document.getElementById('showChar').innerHTML = CURRENT_KANA;
	} else {
		document.getElementById('showChar').innerHTML = `<span style="font-family:'${currentFont}';">${CURRENT_KANA}</span>`
	}
	document.getElementById('answer').innerHTML = CURRENT_ROMAJI;
}

function checkAnswer() {
	let answer = document.getElementById('inputBox').value.toLowerCase() // Retrieve the typed answer from the input box and convert it to lowercase
	if (!answer) {
		answer = 'empty!'
	}
	let answerChars = answer.split('') // Split the answer into individual characters
	let correctAnswers = [CURRENT_ROMAJI] // Create an array with the current kana's correct answers
	if (CURRENT_ROMAJI in ALTERNATE_ROMAJI_LIST) { // Check if there are alternate romaji in the ALTERNATE_ROMAJI_LIST
		correctAnswers = correctAnswers.concat(ALTERNATE_ROMAJI_LIST[CURRENT_ROMAJI])
	}

	let err
	// Loop through the characters of the answer
	for (let i = 0; i < answerChars.length; i++) {
		err = true
		for (let j = 0; j < correctAnswers.length; j++) {
			if (answerChars[i] === correctAnswers[j].charAt(i)) { // If the current character is correct, it is not a mistake, continue
				err = false
			}	
			if (answer === correctAnswers[j]) {
				answer = CURRENT_ROMAJI
			}
		}	
		if (err) { break }
	}
	if (err) { // Wrong answer
		IS_WRONG = true
		document.getElementById('message').innerHTML = `<span id="wrong">${CURRENT_KANA} = ${CURRENT_ROMAJI}</span>`
	}
	if (answer === CURRENT_ROMAJI) {
		// If the answer is CORRECT, increment the total answers count and total correct count
		TOTAL_ANS++
		if (!IS_WRONG) {
			TOTAL_CORRECT++
		}
		showKana()
	}
}

function showAnswer() {
	document.getElementById('answer').style.visibility = 'visible' 
}

function hideAnswer() {
	document.getElementById('answer').style.visibility = 'hidden'
}


/*****************************
*
*  LOAD EVERYTHING :: BRAIN
*
*****************************/
onload = function () {
	loadSettings()
	const inputTags = document.getElementsByTagName('input') // Creates an array with all tags that cointains input i.e. `<input id="stupid" class="md-toggle">`
	for (let i = 0; i < inputTags.length; i++) {
		if (inputTags[i].type === 'checkbox' && !inputTags[i].classList.contains("md-toggle")) {
			inputTags[i].onclick = saveSettings // Save settings when clicking on a checkbox
		}
	}
	showKana()

	// :: Shows a hint by hovering over the kana
	let kanaCharPreview = document.getElementById('showChar')
	kanaCharPreview.onmouseover = showAnswer
	kanaCharPreview.onmouseout = hideAnswer
	
	// :: Automatically sets focus on the input box and triggers answer checking without requiring a click
	let answerInput = document.getElementById('inputBox')
	answerInput.focus()
	answerInput.oninput = checkAnswer
	
	// :: Prevent accidental use of SPACE or ENTER
	document.body.onkeydown = function(e) {
		document.getElementById('inputBox').focus()
		if (e.key === ' ' || e.key === 'Enter') {
			e.preventDefault()
		}
	}
}
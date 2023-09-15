/* MAP OF ALL HIRAGANA/KATAKANA */
const KANA_LIST = {
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
}

const REPLACEMENT_LIST = {
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

let CHECKED_COLUMNS = []
let SHUFFLED_KANAS = []
let CHECKED_FONT_LIST = []

let CURRENT_KANA
let CURRENT_ROMAJI

let TOTAL_ANS = 0
let TOTAL_CORRECT = 0


/* MANAGES CACHE SETTINGS */
function saveSettings() {
	const inputs = document.getElementsByTagName('input')
	for (let i = 0; i < inputs.length; i++) {
		if (inputs[i].type == 'checkbox') {
			let checked = inputs[i].checked ? '1' : '0'
			localStorage.setItem('kana_' + inputs[i].id, checked)
		}
	}
	collect()
}

function loadSettings() {
	const inputs = document.getElementsByTagName('input')
	for (let i = 0; i < inputs.length; i++) {
		if (inputs[i].type == 'checkbox') {
			let setting = localStorage.getItem('kana_' + inputs[i].id)
			if(setting === '1') {
				inputs[i].checked = true
			} else if(setting === '0') {
				inputs[i].checked = false
			}
		}
	}
	collect()
}

/* TABLE CHECKS/UNCHECKS */
function check(set) {
	const trs = document.getElementsByClassName(set)
	for (let i = 0; i < trs.length; i++) {
		let tds = trs[i].children
		for (let x = 0; x < tds.length; x++) {
			if (tds[x].children[0].id != 'KOI-WIN') {
				tds[x].children[0].checked = true
			}
		}
	}
	saveSettings()
}

function uncheck(set) {
	const trs = document.getElementsByClassName(set)
	for (let i = 0; i < trs.length; i++) {
		let tds = trs[i].children
		for (let x = 0; x < tds.length; x++) {
			tds[x].children[0].checked = false
		}
	}
	saveSettings()
}

function shuffle(arr) {
	let array = arr.slice(0)
	let currentIndex = array.length, temporaryValue, randomIndex;

	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex)
		currentIndex -= 1

		temporaryValue = array[currentIndex]
		array[currentIndex] = array[randomIndex]
		array[randomIndex] = temporaryValue
	}
	return array
}

function collect() {
	const checkedKana = document.getElementsByClassName('checkedKana')
	CHECKED_COLUMNS = [] // Resets status
	SHUFFLED_KANAS = [] // Resets status
	for (let i = 0; i < checkedKana.length; i++) {
		let cur = checkedKana[i]
		if (cur.checked == true) {
			for (p in KANA_LIST[cur.id]) {
				CHECKED_COLUMNS.push( [p, KANA_LIST[cur.id][p]] )
			}
		}
	}
	
	CHECKED_FONT_LIST = []
	const checkedFont = document.getElementsByClassName('checkedFont')
	for (let i = 0; i < checkedFont.length; i++) {
		if(checkedFont[i].checked == true) {
			CHECKED_FONT_LIST.push(checkedFont[i].id)
		}
	}
}

function showKana() {	
	wrong = false
	document.getElementById('inputBox').value = ''
	
	if (CHECKED_COLUMNS.length == 0) {
		document.getElementById('hsingle').checked = true
		saveSettings()
	}
	
	if (CHECKED_FONT_LIST.length == 0) {
		document.getElementById('default').checked = true
		saveSettings()
	}
	
	if (TOTAL_ANS > 0) {
		document.getElementById('count').innerHTML = `${TOTAL_CORRECT}/${TOTAL_ANS}`;
		document.getElementById('message').innerHTML = '&nbsp;'
	}
	
	if (SHUFFLED_KANAS.length == 0) {
		SHUFFLED_KANAS = shuffle(CHECKED_COLUMNS)
	}
	
	if (CURRENT_KANA && SHUFFLED_KANAS[0][0] == CURRENT_KANA) {
		SHUFFLED_KANAS.shift()
	}
	
	CURRENT_KANA = SHUFFLED_KANAS[0][0]
	CURRENT_ROMAJI = SHUFFLED_KANAS[0][1]
	
	SHUFFLED_KANAS.shift()
	
	let font = CHECKED_FONT_LIST[Math.floor(Math.random() * CHECKED_FONT_LIST.length)]
	
	if (font == 'default') {
		document.getElementById('kanaChar').innerHTML = CURRENT_KANA;
	} else {
		document.getElementById('kanaChar').innerHTML = `<span style="font-family:'${font}';">${CURRENT_KANA}</span>`
	}
	document.getElementById('answer').innerHTML = CURRENT_ROMAJI;
	
}

function checkAnswer() {
	let answer = document.getElementById('inputBox').value.toLowerCase()
	if (!answer) {
		answer = 'x'
	}
	
	let chars = answer.split('')
	let possible = [CURRENT_ROMAJI]

	if (CURRENT_ROMAJI in REPLACEMENT_LIST) {
		possible = possible.concat(REPLACEMENT_LIST[CURRENT_ROMAJI])
	}

	for (let i = 0; i < chars.length; i++) {
		err = true
		for (let x = 0; x < possible.length; x++) {
			if(chars[i] == possible[x].charAt(i)) {
				err = false
			}
			if (answer == possible[x]) {
				answer = CURRENT_ROMAJI
			}
		}
		
		if (err) {
			break
		}
	}
	
	if (err) {
		wrong = true
		document.getElementById('message').innerHTML = `<span id="wrong">${CURRENT_KANA} = ${CURRENT_ROMAJI}</span>`
	}
	
	if (answer == CURRENT_ROMAJI) {
		TOTAL_ANS += 1
		if (!wrong) {
			TOTAL_CORRECT += 1
		}
		showKana()
	}
}

function forceNext() {
	if (SHUFFLED_KANAS.length > 3) {
		SHUFFLED_KANAS.splice(3, 0, [CURRENT_KANA, CURRENT_ROMAJI])
	}
	if (SHUFFLED_KANAS.length > 13) {
		SHUFFLED_KANAS.splice(13, 0, [CURRENT_KANA, CURRENT_ROMAJI])
	}
	TOTAL_ANS += 1
	showKana()
}

function showAnswer() {
	document.getElementById('answer').style.visibility = 'visible' 
}

function hideAnswer() {
	document.getElementById('answer').style.visibility = 'hidden'
}

onload = function () {
	loadSettings()
	
	let inputs = document.getElementsByTagName('input')
	for (let i = 0; i < inputs.length; i++) {
		if (inputs[i].type == 'checkbox') {
			inputs[i].onclick = saveSettings
			inputs[i].onpropertychange = inputs[i].oninput
		}
	}

	showKana()
	let kanaCharPreview = document.getElementById('kanaChar')
	kanaCharPreview.onmouseover = showAnswer
	kanaCharPreview.onmouseout = hideAnswer
	
	let answerInput = document.getElementById('inputBox')
	answerInput.focus()
	answerInput.oninput = checkAnswer
	answerInput.onpropertychange = answerInput.oninput
	
	document.body.onkeydown = function(e){
		document.getElementById('inputBox').focus()
		if (e.key === 'Space' || e.key === 'Enter') {
			e.preventDefault()
			if (!wrong) {
				checkAnswer()
			} else {
				forceNext()
			}
		}
	}
}
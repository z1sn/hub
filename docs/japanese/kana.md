---
icon: material/syllabary-hiragana
---
<script src="../style/brain.js"></script>
<link rel="stylesheet" href="../style/style.css">

# :material-syllabary-hiragana: Kana

:material-file-find: Ejemplos de **reglas mnemotécnicas**: <a href="../files/mnemo_hiragana_es.pdf" target="_blank">:fontawesome-regular-file-pdf: hiragana</a> | <a href="../files/mnemo_katakana_es.pdf" target="_blank">:fontawesome-regular-file-pdf: katakana</a>  
:material-file-video: Vídeos _(en inglés)_: <a href="https://www.youtube.com/watch?v=6p9Il_j0zjc" target="_blank">:material-youtube: hiragana</a> | <a href="https://www.youtube.com/watch?v=s6DKRgtVLGA" target="_blank">:material-youtube: katakana</a>  
:material-file-edit: Escritura: <a href="https://en.wikibooks.org/wiki/Japanese/Kana/Lessons/Hiragana/Lesson_1" target="_blank">trazos</a>

---
<div id="game">
	<div id="answer"></div>
	<div id="kanaBox"><span id="kanaChar"></span></div>
    <div id="count"></div>
	<div id="input"><input type="text" id="inputBox" autofocus=""></div>
	<div id="message">Pasa el ratón por <strong>encima del kana</strong> para revelar la respuesta</div>
</div>

??? note "Hiragana"
    <h3>Hiragana <span class="checkAll">seleccionar: <a onclick="check('hiragana')">todo</a> | <a onclick="uncheck('hiragana')">nada</a></span></h3>
    <table>
        <tbody>
            <tr class="checkRow hiragana">
                <td><input type="checkbox" class="checkedKana" id="hsingle" checked="checked"></td>
                <td><input type="checkbox" class="checkedKana" id="hk"></td>
                <td><input type="checkbox" class="checkedKana" id="hs"></td>
                <td><input type="checkbox" class="checkedKana" id="ht"></td>
                <td><input type="checkbox" class="checkedKana" id="hn"></td>
                <td><input type="checkbox" class="checkedKana" id="hh"></td>
                <td><input type="checkbox" class="checkedKana" id="hm"></td>
                <td><input type="checkbox" class="checkedKana" id="hy"></td>
                <td><input type="checkbox" class="checkedKana" id="hr"></td>
                <td><input type="checkbox" class="checkedKana" id="hw"></td>
                <td><input type="checkbox" class="checkedKana" id="hn1"></td>
                <td><input type="checkbox" class="checkedKana" id="hg"></td>
                <td><input type="checkbox" class="checkedKana" id="hz"></td>
                <td><input type="checkbox" class="checkedKana" id="hd"></td>
                <td><input type="checkbox" class="checkedKana" id="hb"></td>
                <td><input type="checkbox" class="checkedKana" id="hp"></td>
            </tr>
            <tr>
                <td><span class="kana">あ</span> <span class="romaji">a</span></td>
                <td><span class="kana">か</span> <span class="romaji">ka</span></td>
                <td><span class="kana">さ</span> <span class="romaji">sa</span></td>
                <td><span class="kana">た</span> <span class="romaji">ta</span></td>
                <td><span class="kana">な</span> <span class="romaji">na</span></td>
                <td><span class="kana">は</span> <span class="romaji">ha</span></td>
                <td><span class="kana">ま</span> <span class="romaji">ma</span></td>
                <td><span class="kana">や</span> <span class="romaji">ya</span></td>
                <td><span class="kana">ら</span> <span class="romaji">ra</span></td>
                <td><span class="kana">わ</span> <span class="romaji">wa</span></td>
                <td></td>
                <td><span class="kana">が</span> <span class="romaji">ga</span></td>
                <td><span class="kana">ざ</span> <span class="romaji">za</span></td>
                <td><span class="kana">だ</span> <span class="romaji">da</span></td>
                <td><span class="kana">ば</span> <span class="romaji">ba</span></td>
                <td><span class="kana">ぱ</span> <span class="romaji">pa</span></td>
            </tr>
            <tr>
                <td><span class="kana">い</span> <span class="romaji">i</span></td>
                <td><span class="kana">き</span> <span class="romaji">ki</span></td>
                <td><span class="kana">し</span> <span class="romaji">shi</span></td>
                <td><span class="kana">ち</span> <span class="romaji">chi</span></td>
                <td><span class="kana">に</span> <span class="romaji">ni</span></td>
                <td><span class="kana">ひ</span> <span class="romaji">hi</span></td>
                <td><span class="kana">み</span> <span class="romaji">mi</span></td>
                <td></td>
                <td><span class="kana">り</span> <span class="romaji">ri</span></td>
                <td></td>
                <td></td>
                <td><span class="kana">ぎ</span> <span class="romaji">gi</span></td>
                <td><span class="kana">じ</span> <span class="romaji">ji</span></td>
                <td><span class="kana">ぢ</span> <span class="romaji">ji</span></td>
                <td><span class="kana">び</span> <span class="romaji">bi</span></td>
                <td><span class="kana">ぴ</span> <span class="romaji">pi</span></td>
            </tr>
            <tr>
                <td><span class="kana">う</span> <span class="romaji">u</span></td>
                <td><span class="kana">く</span> <span class="romaji">ku</span></td>
                <td><span class="kana">す</span> <span class="romaji">su</span></td>
                <td><span class="kana">つ</span> <span class="romaji">tsu</span></td>
                <td><span class="kana">ぬ</span> <span class="romaji">nu</span></td>
                <td><span class="kana">ふ</span> <span class="romaji">fu</span></td>
                <td><span class="kana">む</span> <span class="romaji">mu</span></td>
                <td><span class="kana">ゆ</span> <span class="romaji">yu</span></td>
                <td><span class="kana">る</span> <span class="romaji">ru</span></td>
                <td></td>
                <td></td>
                <td><span class="kana">ぐ</span> <span class="romaji">gu</span></td>
                <td><span class="kana">ず</span> <span class="romaji">zu</span></td>
                <td><span class="kana">づ</span> <span class="romaji">zu</span></td>
                <td><span class="kana">ぶ</span> <span class="romaji">bu</span></td>
                <td><span class="kana">ぷ</span> <span class="romaji">pu</span></td>
            </tr>
            <tr>
                <td><span class="kana">え</span> <span class="romaji">e</span></td>
                <td><span class="kana">け</span> <span class="romaji">ke</span></td>
                <td><span class="kana">せ</span> <span class="romaji">se</span></td>
                <td><span class="kana">て</span> <span class="romaji">te</span></td>
                <td><span class="kana">ね</span> <span class="romaji">ne</span></td>
                <td><span class="kana">へ</span> <span class="romaji">he</span></td>
                <td><span class="kana">め</span> <span class="romaji">me</span></td>
                <td></td>
                <td><span class="kana">れ</span> <span class="romaji">re</span></td>
                <td></td>
                <td></td>
                <td><span class="kana">げ</span> <span class="romaji">ge</span></td>
                <td><span class="kana">ぜ</span> <span class="romaji">ze</span></td>
                <td><span class="kana">で</span> <span class="romaji">de</span></td>
                <td><span class="kana">べ</span> <span class="romaji">be</span></td>
                <td><span class="kana">ぺ</span> <span class="romaji">pe</span></td>
            </tr>
            <tr>
                <td><span class="kana">お</span> <span class="romaji">o</span></td>
                <td><span class="kana">こ</span> <span class="romaji">ko</span></td>
                <td><span class="kana">そ</span> <span class="romaji">so</span></td>
                <td><span class="kana">と</span> <span class="romaji">to</span></td>
                <td><span class="kana">の</span> <span class="romaji">no</span></td>
                <td><span class="kana">ほ</span> <span class="romaji">ho</span></td>
                <td><span class="kana">も</span> <span class="romaji">mo</span></td>
                <td><span class="kana">よ</span> <span class="romaji">yo</span></td>
                <td><span class="kana">ろ</span> <span class="romaji">ro</span></td>
                <td><span class="kana">を</span> <span class="romaji">o</span></td>
                <td><span class="kana">ん</span> <span class="romaji">n</span></td>
                <td><span class="kana">ご</span> <span class="romaji">go</span></td>
                <td><span class="kana">ぞ</span> <span class="romaji">zo</span></td>
                <td><span class="kana">ど</span> <span class="romaji">do</span></td>
                <td><span class="kana">ぼ</span> <span class="romaji">bo</span></td>
                <td><span class="kana">ぽ</span> <span class="romaji">po</span></td>
            </tr>
        </tbody>
    </table>
    <h3>Hiragana Yōon <span class="checkAll">seleccionar: <a onclick="check('hiraganaYoon')">todo</a> | <a onclick="uncheck('hiraganaYoon')">nada</a></span></h3>
    <table>
        <tbody>
            <tr class="checkRow hiraganaYoon">
                <td><input type="checkbox" class="checkedKana" id="hdk"></td>
                <td><input type="checkbox" class="checkedKana" id="hds"></td>
                <td><input type="checkbox" class="checkedKana" id="hdc"></td>
                <td><input type="checkbox" class="checkedKana" id="hdn"></td>
                <td><input type="checkbox" class="checkedKana" id="hdh"></td>
                <td><input type="checkbox" class="checkedKana" id="hdm"></td>
                <td><input type="checkbox" class="checkedKana" id="hdr"></td>
                <td><input type="checkbox" class="checkedKana" id="hdg"></td>
                <td><input type="checkbox" class="checkedKana" id="hdj"></td>
                <td><input type="checkbox" class="checkedKana" id="hdj2"></td>
                <td><input type="checkbox" class="checkedKana" id="hdb"></td>
                <td><input type="checkbox" class="checkedKana" id="hdp"></td>
            </tr>
            <tr>
                <td><span class="kana">きゃ</span> <span class="romaji">kya</span></td>
                <td><span class="kana">しゃ</span> <span class="romaji">sha</span></td>
                <td><span class="kana">ちゃ</span> <span class="romaji">cha</span></td>
                <td><span class="kana">にゃ</span> <span class="romaji">nya</span></td>
                <td><span class="kana">ひゃ</span> <span class="romaji">hya</span></td>
                <td><span class="kana">みゃ</span> <span class="romaji">mya</span></td>
                <td><span class="kana">りゃ</span> <span class="romaji">rya</span></td>
                <td><span class="kana">ぎゃ</span> <span class="romaji">gya</span></td>
                <td><span class="kana">じゃ</span> <span class="romaji">ja</span></td>
                <td><span class="kana">ぢゃ</span> <span class="romaji">ja</span></td>
                <td><span class="kana">びゃ</span> <span class="romaji">bya</span></td>
                <td><span class="kana">ぴゃ</span> <span class="romaji">pya</span></td>
            </tr>
            <tr>
                <td><span class="kana">きゅ</span> <span class="romaji">kyu</span></td>
                <td><span class="kana">しゅ</span> <span class="romaji">shu</span></td>
                <td><span class="kana">ちゅ</span> <span class="romaji">chu</span></td>
                <td><span class="kana">にゅ</span> <span class="romaji">nyu</span></td>
                <td><span class="kana">ひゅ</span> <span class="romaji">hyu</span></td>
                <td><span class="kana">みゅ</span> <span class="romaji">myu</span></td>
                <td><span class="kana">りゅ</span> <span class="romaji">ryu</span></td>
                <td><span class="kana">ぎゅ</span> <span class="romaji">gyu</span></td>
                <td><span class="kana">じゅ</span> <span class="romaji">ju</span></td>
                <td><span class="kana">ぢゅ</span> <span class="romaji">ju</span></td>
                <td><span class="kana">びゅ</span> <span class="romaji">byu</span></td>
                <td><span class="kana">ぴゅ</span> <span class="romaji">pyu</span></td>
            </tr>
            <tr>
                <td><span class="kana">きょ</span> <span class="romaji">kyo</span></td>
                <td><span class="kana">しょ</span> <span class="romaji">sho</span></td>
                <td><span class="kana">ちょ</span> <span class="romaji">cho</span></td>
                <td><span class="kana">にょ</span> <span class="romaji">nyo</span></td>
                <td><span class="kana">ひょ</span> <span class="romaji">hyo</span></td>
                <td><span class="kana">みょ</span> <span class="romaji">myo</span></td>
                <td><span class="kana">りょ</span> <span class="romaji">ryo</span></td>
                <td><span class="kana">ぎょ</span> <span class="romaji">gyo</span></td>
                <td><span class="kana">じょ</span> <span class="romaji">jo</span></td>
                <td><span class="kana">ぢょ</span> <span class="romaji">jo</span></td>
                <td><span class="kana">びょ</span> <span class="romaji">byo</span></td>
                <td><span class="kana">ぴょ</span> <span class="romaji">pyo</span></td>
            </tr>
        </tbody>
    </table>
??? note "Katakana"
    <h3>Katakana <span class="checkAll">seleccionar: <a onclick="check('katakana')">todo</a> | <a onclick="uncheck('katakana')">nada</a></span></h3>
    <table>
        <tbody>
            <tr class="checkRow katakana">
                <td><input type="checkbox" class="checkedKana" id="ksingle"></td>
                <td><input type="checkbox" class="checkedKana" id="kk"></td>
                <td><input type="checkbox" class="checkedKana" id="ks"></td>
                <td><input type="checkbox" class="checkedKana" id="kt"></td>
                <td><input type="checkbox" class="checkedKana" id="kn"></td>
                <td><input type="checkbox" class="checkedKana" id="kh"></td>
                <td><input type="checkbox" class="checkedKana" id="km"></td>
                <td><input type="checkbox" class="checkedKana" id="ky"></td>
                <td><input type="checkbox" class="checkedKana" id="kr"></td>
                <td><input type="checkbox" class="checkedKana" id="kw"></td>
                <td><input type="checkbox" class="checkedKana" id="kn1"></td>
                <td><input type="checkbox" class="checkedKana" id="kg"></td>
                <td><input type="checkbox" class="checkedKana" id="kz"></td>
                <td><input type="checkbox" class="checkedKana" id="kd"></td>
                <td><input type="checkbox" class="checkedKana" id="kb"></td>
                <td><input type="checkbox" class="checkedKana" id="kp"></td>
            </tr>
            <tr>
                <td><span class="kana">ア</span> <span class="romaji">a</span></td>
                <td><span class="kana">カ</span> <span class="romaji">ka</span></td>
                <td><span class="kana">サ</span> <span class="romaji">sa</span></td>
                <td><span class="kana">タ</span> <span class="romaji">ta</span></td>
                <td><span class="kana">ナ</span> <span class="romaji">na</span></td>
                <td><span class="kana">ハ</span> <span class="romaji">ha</span></td>
                <td><span class="kana">マ</span> <span class="romaji">ma</span></td>
                <td><span class="kana">ヤ</span> <span class="romaji">ya</span></td>
                <td><span class="kana">ラ</span> <span class="romaji">ra</span></td>
                <td><span class="kana">ワ</span> <span class="romaji">wa</span></td>
                <td></td>
                <td><span class="kana">ガ</span> <span class="romaji">ga</span></td>
                <td><span class="kana">ザ</span> <span class="romaji">za</span></td>
                <td><span class="kana">ダ</span> <span class="romaji">da</span></td>
                <td><span class="kana">バ</span> <span class="romaji">ba</span></td>
                <td><span class="kana">パ</span> <span class="romaji">pa</span></td>
            </tr>
            <tr>
                <td><span class="kana">イ</span> <span class="romaji">i</span></td>
                <td><span class="kana">キ</span> <span class="romaji">ki</span></td>
                <td><span class="kana">シ</span> <span class="romaji">shi</span></td>
                <td><span class="kana">チ</span> <span class="romaji">chi</span></td>
                <td><span class="kana">ニ</span> <span class="romaji">ni</span></td>
                <td><span class="kana">ヒ</span> <span class="romaji">hi</span></td>
                <td><span class="kana">ミ</span> <span class="romaji">mi</span></td>
                <td></td>
                <td><span class="kana">リ</span> <span class="romaji">ri</span></td>
                <td></td>
                <td></td>
                <td><span class="kana">ギ</span> <span class="romaji">gi</span></td>
                <td><span class="kana">ジ</span> <span class="romaji">ji</span></td>
                <td><span class="kana">ヂ</span> <span class="romaji">ji</span></td>
                <td><span class="kana">ビ</span> <span class="romaji">bi</span></td>
                <td><span class="kana">ピ</span> <span class="romaji">pi</span></td>
            </tr>
            <tr>
                <td><span class="kana">ウ</span> <span class="romaji">u</span></td>
                <td><span class="kana">ク</span> <span class="romaji">ku</span></td>
                <td><span class="kana">ス</span> <span class="romaji">su</span></td>
                <td><span class="kana">ツ</span> <span class="romaji">tsu</span></td>
                <td><span class="kana">ヌ</span> <span class="romaji">nu</span></td>
                <td><span class="kana">フ</span> <span class="romaji">fu</span></td>
                <td><span class="kana">ム</span> <span class="romaji">mu</span></td>
                <td><span class="kana">ユ</span> <span class="romaji">yu</span></td>
                <td><span class="kana">ル</span> <span class="romaji">ru</span></td>
                <td></td>
                <td></td>
                <td><span class="kana">グ</span> <span class="romaji">gu</span></td>
                <td><span class="kana">ズ</span> <span class="romaji">zu</span></td>
                <td><span class="kana">ヅ</span> <span class="romaji">zu</span></td>
                <td><span class="kana">ブ</span> <span class="romaji">bu</span></td>
                <td><span class="kana">プ</span> <span class="romaji">pu</span></td>
            </tr>
            <tr>
                <td><span class="kana">エ</span> <span class="romaji">e</span></td>
                <td><span class="kana">ケ</span> <span class="romaji">ke</span></td>
                <td><span class="kana">セ</span> <span class="romaji">se</span></td>
                <td><span class="kana">テ</span> <span class="romaji">te</span></td>
                <td><span class="kana">ネ</span> <span class="romaji">ne</span></td>
                <td><span class="kana">ヘ</span> <span class="romaji">he</span></td>
                <td><span class="kana">メ</span> <span class="romaji">me</span></td>
                <td></td>
                <td><span class="kana">レ</span> <span class="romaji">re</span></td>
                <td></td>
                <td></td>
                <td><span class="kana">ゲ</span> <span class="romaji">ge</span></td>
                <td><span class="kana">ゼ</span> <span class="romaji">ze</span></td>
                <td><span class="kana">デ</span> <span class="romaji">de</span></td>
                <td><span class="kana">ベ</span> <span class="romaji">be</span></td>
                <td><span class="kana">ペ</span> <span class="romaji">pe</span></td>
            </tr>
            <tr>
                <td><span class="kana">オ</span> <span class="romaji">o</span></td>
                <td><span class="kana">コ</span> <span class="romaji">ko</span></td>
                <td><span class="kana">ソ</span> <span class="romaji">so</span></td>
                <td><span class="kana">ト</span> <span class="romaji">to</span></td>
                <td><span class="kana">ノ</span> <span class="romaji">no</span></td>
                <td><span class="kana">ホ</span> <span class="romaji">ho</span></td>
                <td><span class="kana">モ</span> <span class="romaji">mo</span></td>
                <td><span class="kana">ヨ</span> <span class="romaji">yo</span></td>
                <td><span class="kana">ロ</span> <span class="romaji">ro</span></td>
                <td><span class="kana">ヲ</span> <span class="romaji">o</span></td>
                <td><span class="kana">ン</span> <span class="romaji">n</span></td>
                <td><span class="kana">ゴ</span> <span class="romaji">go</span></td>
                <td><span class="kana">ゾ</span> <span class="romaji">zo</span></td>
                <td><span class="kana">ド</span> <span class="romaji">do</span></td>
                <td><span class="kana">ボ</span> <span class="romaji">bo</span></td>
                <td><span class="kana">ポ</span> <span class="romaji">po</span></td>
            </tr>
        </tbody>
    </table>
    <h3>Katakana Yōon <span class="checkAll">seleccionar: <a onclick="check('katakanaYoon')">todo</a> | <a onclick="uncheck('katakanaYoon')">nada</a></span></h3>
    <table>
        <tbody>
            <tr class="checkRow katakanaYoon">
                <td><input type="checkbox" class="checkedKana" id="kdk"></td>
                <td><input type="checkbox" class="checkedKana" id="kds"></td>
                <td><input type="checkbox" class="checkedKana" id="kdc"></td>
                <td><input type="checkbox" class="checkedKana" id="kdn"></td>
                <td><input type="checkbox" class="checkedKana" id="kdh"></td>
                <td><input type="checkbox" class="checkedKana" id="kdm"></td>
                <td><input type="checkbox" class="checkedKana" id="kdr"></td>
                <td><input type="checkbox" class="checkedKana" id="kdg"></td>
                <td><input type="checkbox" class="checkedKana" id="kdj"></td>
                <td><input type="checkbox" class="checkedKana" id="kdj2"></td>
                <td><input type="checkbox" class="checkedKana" id="kdb"></td>
                <td><input type="checkbox" class="checkedKana" id="kdp"></td>
            </tr>
            <tr>
                <td><span class="kana">キャ</span> <span class="romaji">kya</span></td>
                <td><span class="kana">シャ</span> <span class="romaji">sha</span></td>
                <td><span class="kana">チャ</span> <span class="romaji">cha</span></td>
                <td><span class="kana">ニャ</span> <span class="romaji">nya</span></td>
                <td><span class="kana">ヒャ</span> <span class="romaji">hya</span></td>
                <td><span class="kana">ミャ</span> <span class="romaji">mya</span></td>
                <td><span class="kana">リャ</span> <span class="romaji">rya</span></td>
                <td><span class="kana">ギャ</span> <span class="romaji">gya</span></td>
                <td><span class="kana">ジャ</span> <span class="romaji">ja</span></td>
                <td><span class="kana">ヂャ</span> <span class="romaji">ja</span></td>
                <td><span class="kana">ビャ</span> <span class="romaji">bya</span></td>
                <td><span class="kana">ピャ</span> <span class="romaji">pya</span></td>
            </tr>
            <tr>
                <td><span class="kana">キュ</span> <span class="romaji">kyu</span></td>
                <td><span class="kana">シュ</span> <span class="romaji">shu</span></td>
                <td><span class="kana">チュ</span> <span class="romaji">chu</span></td>
                <td><span class="kana">ニュ</span> <span class="romaji">nyu</span></td>
                <td><span class="kana">ヒュ</span> <span class="romaji">hyu</span></td>
                <td><span class="kana">ミュ</span> <span class="romaji">myu</span></td>
                <td><span class="kana">リュ</span> <span class="romaji">ryu</span></td>
                <td><span class="kana">ギュ</span> <span class="romaji">gyu</span></td>
                <td><span class="kana">ジュ</span> <span class="romaji">ju</span></td>
                <td><span class="kana">ヂュ</span> <span class="romaji">ju</span></td>
                <td><span class="kana">ビュ</span> <span class="romaji">byu</span></td>
                <td><span class="kana">ピュ</span> <span class="romaji">pyu</span></td>
            </tr>
            <tr>
                <td><span class="kana">キョ</span> <span class="romaji">kyo</span></td>
                <td><span class="kana">ショ</span> <span class="romaji">sho</span></td>
                <td><span class="kana">チョ</span> <span class="romaji">cho</span></td>
                <td><span class="kana">ニョ</span> <span class="romaji">nyo</span></td>
                <td><span class="kana">ヒョ</span> <span class="romaji">hyo</span></td>
                <td><span class="kana">ミョ</span> <span class="romaji">myo</span></td>
                <td><span class="kana">リョ</span> <span class="romaji">ryo</span></td>
                <td><span class="kana">ギョ</span> <span class="romaji">gyo</span></td>
                <td><span class="kana">ジョ</span> <span class="romaji">jo</span></td>
                <td><span class="kana">ヂョ</span> <span class="romaji">jo</span></td>
                <td><span class="kana">ビョ</span> <span class="romaji">byo</span></td>
                <td><span class="kana">ピョ</span> <span class="romaji">pyo</span></td>
            </tr>
        </tbody>
    </table>
??? example "Kanas similares"    
    <h3>Kanas similares <span class="checkAll">seleccionar: <a onclick="check('similars')">todo</a> | <a onclick="uncheck('similars')">nada</a></span></h3>
        :fontawesome-solid-circle-info: Esta sección únicamente sirve para estudiar aquellos caracteres que son algo confusos entre sí.
    <table>
        <tbody>
            <tr>
                <td colspan="8">Hiragana</td>
                <td colspan="6">Katakana</td>
                <td colspan="3">Ambos</td>
            </tr>
            <tr class="checkRow similars">
                <td><input type="checkbox" class="checkedKana" id="sm1"></td>
                <td><input type="checkbox" class="checkedKana" id="sm2"></td>
                <td><input type="checkbox" class="checkedKana" id="sm3"></td>
                <td><input type="checkbox" class="checkedKana" id="sm4"></td>
                <td><input type="checkbox" class="checkedKana" id="sm5"></td>
                <td><input type="checkbox" class="checkedKana" id="sm6"></td>
                <td><input type="checkbox" class="checkedKana" id="sm7"></td>
                <td><input type="checkbox" class="checkedKana" id="sm8"></td>
                <td><input type="checkbox" class="checkedKana" id="sm9"></td>
                <td><input type="checkbox" class="checkedKana" id="sm10"></td>
                <td><input type="checkbox" class="checkedKana" id="sm11"></td>
                <td><input type="checkbox" class="checkedKana" id="sm12"></td>
                <td><input type="checkbox" class="checkedKana" id="sm13"></td>
                <td><input type="checkbox" class="checkedKana" id="sm14"></td>
                <td><input type="checkbox" class="checkedKana" id="sm15"></td>
                <td><input type="checkbox" class="checkedKana" id="sm16"></td>
                <td><input type="checkbox" class="checkedKana" id="sm17"></td>
            </tr>
            <tr>
                <td><span class="kana">あ</span> <span class="romaji">a</span></td>
                <td><span class="kana">い</span> <span class="romaji">i</span></td>
                <td><span class="kana">た</span> <span class="romaji">ta</span></td>
                <td><span class="kana">わ</span> <span class="romaji">wa</span></td>
                <td><span class="kana">の</span> <span class="romaji">no</span></td>
                <td><span class="kana">ろ</span> <span class="romaji">ro</span></td>
                <td><span class="kana">き</span> <span class="romaji">ki</span></td>
                <td><span class="kana">に</span> <span class="romaji">ni</span></td>
                <td><span class="kana">ナ</span> <span class="romaji">na</span></td>
                <td><span class="kana">コ</span> <span class="romaji">ko</span></td>
                <td><span class="kana">ン</span> <span class="romaji">n</span></td>
                <td><span class="kana">タ</span> <span class="romaji">ta</span></td>
                <td><span class="kana">ウ</span> <span class="romaji">u</span></td>
                <td><span class="kana">ア</span> <span class="romaji">a</span></td>
                <td><span class="kana">せ</span> <span class="romaji">se</span></td>
                <td><span class="kana">し</span> <span class="romaji">shi</span></td>
                <td><span class="kana">つ</span> <span class="romaji">tsu</span></td>
            </tr>
            <tr>
                <td><span class="kana">お</span> <span class="romaji">o</span></td>
                <td><span class="kana">り</span> <span class="romaji">ri</span></td>
                <td><span class="kana">に</span> <span class="romaji">ni</span></td>
                <td><span class="kana">ね</span> <span class="romaji">ne</span></td>
                <td><span class="kana">め</span> <span class="romaji">me</span></td>
                <td><span class="kana">る</span> <span class="romaji">ru</span></td>
                <td><span class="kana">さ</span> <span class="romaji">sa</span></td>
                <td><span class="kana">け</span> <span class="romaji">ke</span></td>
                <td><span class="kana">メ</span> <span class="romaji">me</span></td>
                <td><span class="kana">ユ</span> <span class="romaji">yu</span></td>
                <td><span class="kana">ソ</span> <span class="romaji">so</span></td>
                <td><span class="kana">ク</span> <span class="romaji">ku</span></td>
                <td><span class="kana">ワ</span> <span class="romaji">wa</span></td>
                <td><span class="kana">マ</span> <span class="romaji">ma</span></td>
                <td><span class="kana">サ</span> <span class="romaji">sa</span></td>
                <td><span class="kana">レ</span> <span class="romaji">re</span></td>
                <td><span class="kana">フ</span> <span class="romaji">fu</span></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td><span class="kana">こ</span> <span class="romaji">ko</span></td>
                <td><span class="kana">れ</span> <span class="romaji">re</span></td>
                <td><span class="kana">ぬ</span> <span class="romaji">nu</span></td>
                <td><span class="kana">そ</span> <span class="romaji">so</span></td>
                <td><span class="kana">ち</span> <span class="romaji">chi</span></td>
                <td><span class="kana">は</span> <span class="romaji">ha</span></td>
                <td></td>
                <td><span class="kana">ヒ</span> <span class="romaji">hi</span></td>
                <td><span class="kana">シ</span> <span class="romaji">shi</span></td>
                <td><span class="kana">ヌ</span> <span class="romaji">nu</span></td>
                <td><span class="kana">フ</span> <span class="romaji">fu</span></td>
                <td><span class="kana">ヤ</span> <span class="romaji">ya</span></td>
                <td></td>
                <td><span class="kana">も</span> <span class="romaji">mo</span></td>
                <td><span class="kana">う</span> <span class="romaji">u</span></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><span class="kana">を</span> <span class="romaji">o</span></td>
                <td><span class="kana">ら</span> <span class="romaji">ra</span></td>
                <td><span class="kana">ほ</span> <span class="romaji">ho</span></td>
                <td></td>
                <td></td>
                <td><span class="kana">ツ</span> <span class="romaji">tsu</span></td>
                <td><span class="kana">ス</span> <span class="romaji">su</span></td>
                <td><span class="kana">ラ</span> <span class="romaji">ra</span></td>
                <td><span class="kana">セ</span> <span class="romaji">se</span></td>
                <td></td>
                <td></td>
                <td><span class="kana">ラ</span> <span class="romaji">ra</span></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><span class="kana">ま</span> <span class="romaji">ma</span></td>
                <td></td>
                <td></td>
                <td></td>
                <td><span class="kana">ケ</span> <span class="romaji">ke</span></td>
                <td><span class="kana">ヲ</span> <span class="romaji">o</span></td>
                <td><span class="kana">ヒ</span> <span class="romaji">hi</span></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table>
??? abstract "Estilo de fuente"
    <h3>Estilo de fuente <span class="checkAll">seleccionar: <a onclick="check('allFonts')">todo</a> | <a onclick="uncheck('allFonts')">nada</a></span></h3>
    :fontawesome-solid-circle-info: Dependiendo de la fuente, <u>los caracteres pueden variar mucho</u>. Se recomienda la fuente por defecto para empezar.
    <table>
        <tbody>
            <tr class="checkRow allFonts">
                <td><input type="checkbox" class="checkedFont" id="default" checked="checked"></td>
                <td><input type="checkbox" class="checkedFont" id="A-OTF-BokutohNStd-Regular"></td>
                <td><input type="checkbox" class="checkedFont" id="A-OTF-FolkPro-Regular"></td>
                <td><input type="checkbox" class="checkedFont" id="A-OTF-HappyNStd-Regular"></td>
                <td><input type="checkbox" class="checkedFont" id="A-OTF-KumoyaStd-Regular"></td>
                <td><input type="checkbox" class="checkedFont" id="A-OTF-KyokaICAPro-Regular"></td>
                <td><input type="checkbox" class="checkedFont" id="A-OTF-Shuuei3Std-Regular"></td>
                <td><input type="checkbox" class="checkedFont" id="A-OTF-ZenGoNStd-Regular"></td>
                <td><input type="checkbox" class="checkedFont" id="ArmedBanana"></td>
            </tr>
            <tr>
                <td><span class="fontPreview">きもの</span></td>
                <td><span class="fontPreview" style="font-family: 'A-OTF-BokutohNStd-Regular';">きもの</span></td>
                <td><span class="fontPreview" style="font-family: 'A-OTF-FolkPro-Regular';">きもの</span></td>
                <td><span class="fontPreview" style="font-family: 'A-OTF-HappyNStd-Regular';">きもの</span></td>
                <td><span class="fontPreview" style="font-family: 'A-OTF-KumoyaStd-Regular';">きもの</span></td>
                <td><span class="fontPreview" style="font-family: 'A-OTF-KyokaICAPro-Regular';">きもの</span></td>
                <td><span class="fontPreview" style="font-family: 'A-OTF-Shuuei3Std-Regular';">きもの</span></td>
                <td><span class="fontPreview" style="font-family: 'A-OTF-ZenGoNStd-Regular';">きもの</span></td>
                <td><span class="fontPreview" style="font-family: 'ArmedBanana';">きもの</span></td>
            </tr>
            <tr class="checkRow allFonts">
                <td><input type="checkbox" class="checkedFont" id="DFCry5_0"></td>
                <td><input type="checkbox" class="checkedFont" id="DFMrg3_0"></td>
                <td><input type="checkbox" class="checkedFont" id="F5AJCCPE_0"></td>
                <td><input type="checkbox" class="checkedFont" id="F5AJCMHG"></td>
                <td><input type="checkbox" class="checkedFont" id="MT_TARE"></td>
                <td><input type="checkbox" class="checkedFont" id="SM-WIN"></td>
                <td><input type="checkbox" class="checkedFont" id="SNsanafon"></td>
                <td><input type="checkbox" class="checkedFont" id="sea"></td>
                <td><input type="checkbox" class="checkedFont" id="KOI-WIN"></td>
            </tr>
            <tr>
                <td><span class="fontPreview" style="font-family: 'DFCry5_0';">きもの</span></td>
                <td><span class="fontPreview" style="font-family: 'DFMrg3_0';">きもの</span></td>
                <td><span class="fontPreview" style="font-family: 'F5AJCCPE_0';">きもの</span></td>
                <td><span class="fontPreview" style="font-family: 'F5AJCMHG';">きもの</span></td>
                <td><span class="fontPreview" style="font-family: 'MT_TARE';">きもの</span></td>
                <td><span class="fontPreview" style="font-family: 'SM-WIN';">きもの</span></td>
                <td><span class="fontPreview" style="font-family: 'SNsanafon';">きもの</span></td>
                <td><span class="fontPreview" style="font-family: 'sea';">きもの</span></td>
                <td><span class="fontPreview" style="font-family: 'KOI-WIN';">きもの</span></td>
            </tr>
        </tbody>
    </table>

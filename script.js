const btn_text = [
    'Esc', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12',
    '~<br>`', '!<br>1', '@<br>2', '#<br>3', '$<br>4', '%<br>5', '^<br>6', '&<br>7', '*<br>8', '(<br>9', ')<br>0', '_<br>-', '+<br>=', 'Delete',
    'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{<br>[', '}<br>]', '|<br>\\', 
    'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':<br>;', `"<br>'`, 'Enter', 
    'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<<br>,', '><br>.', '?<br>/', 'Shift', 
    'Control', 'Win', 'Alt', 'Space', 'Alt', 'Fn', 'Fn2', 'Control', 
    'PrtSc', 'ScrLk', 'Pause', 'Ins', 'Home', 'PgUp', 'Del', 'End', 'PgDn', '', '↑', '←', '↓', '→', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''
]
const btns = document.querySelectorAll('.btn');

const print_btn_text = () => {
    for (let i = 0; i < btns.length; i++) {
        btns[i].innerHTML = btn_text[i];
    }
}

$(document).ready(function () {
    print_btn_text();
});
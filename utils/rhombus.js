/*
* File: rhombus.js
* Author: Vámosi László Ádám
* Copyright: 2026, Vámosi László Ádám
* Group: Szoft II-N
* Date: 2026-04-01
* GitHub: https://github.com/vamosilaszloadam/
* Licenc: MIT
*/

/*
* A program egy rombusz területének kiszámítására használható a két átlója alapján.
* Készítette: Vámosi László Ádám
* Dátum: 2026-04-01
* Osztály: Szoft II-N
*/

function calcArea(eDiagonal, fDiagonal) {
    const area = (eDiagonal * fDiagonal) / 2;
    return area;
};

export { calcArea };

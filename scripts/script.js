const tekTakTok = document.querySelector(".tekTakTok"),
  divs = tekTakTok.querySelectorAll("div"),
  nextPlayer = document.querySelector(".nextPlayer");

let next = true,
  iswinner = false,
  pcsXO = 0,
  timeOut;

const addClasses = (a, b, c) => {
  a.classList.add("active");
  b.classList.add("active");
  c.classList.add("active");
};

divs.forEach((item) => {
  item.addEventListener("click", () => {
    if (iswinner) return;
    if (next && !item.classList.contains("O")) {
      next = false;
      item.textContent = "X";
      item.classList.add("X");
      item.classList.remove("O");
      pcsXO++;
    } else if (!item.classList.contains("X")) {
      next = true;
      item.textContent = "O";
      item.classList.add("O");
      item.classList.remove("X");
      pcsXO++;
    }
    // -------for X ------
    if (
      !iswinner &&
      divs[0].className === "div1 X" &&
      divs[1].className === "div2 X" &&
      divs[2].className === "div3 X"
    ) {
      addClasses(divs[0], divs[1], divs[2]);
      nextPlayer.textContent = "برنده : X";
      iswinner = true;
    } else if (
      !iswinner &&
      divs[3].className === "div4 X" &&
      divs[4].className === "div5 X" &&
      divs[5].className === "div6 X"
    ) {
      addClasses(divs[3], divs[4], divs[5]);
      iswinner = true;
      nextPlayer.textContent = "برنده : X";
    } else if (
      !iswinner &&
      divs[6].className === "div7 X" &&
      divs[7].className === "div8 X" &&
      divs[8].className === "div9 X"
    ) {
      addClasses(divs[6], divs[7], divs[8]);
      iswinner = true;
      nextPlayer.textContent = "برنده : X";
    } else if (
      !iswinner &&
      divs[0].className === "div1 X" &&
      divs[4].className === "div5 X" &&
      divs[8].className === "div9 X"
    ) {
      addClasses(divs[0], divs[4], divs[8]);
      iswinner = true;
      nextPlayer.textContent = "برنده : X";
    } else if (
      !iswinner &&
      divs[2].className === "div3 X" &&
      divs[4].className === "div5 X" &&
      divs[6].className === "div7 X"
    ) {
      addClasses(divs[2], divs[4], divs[6]);
      iswinner = true;
      nextPlayer.textContent = "برنده : X";
    } else if (
      !iswinner &&
      divs[0].className === "div1 X" &&
      divs[3].className === "div4 X" &&
      divs[6].className === "div7 X"
    ) {
      addClasses(divs[0], divs[3], divs[6]);
      iswinner = true;
      nextPlayer.textContent = "برنده : X";
    } else if (
      !iswinner &&
      divs[1].className === "div2 X" &&
      divs[4].className === "div5 X" &&
      divs[7].className === "div8 X"
    ) {
      addClasses(divs[1], divs[4], divs[7]);
      iswinner = true;
      nextPlayer.textContent = "برنده : X";
    } else if (
      !iswinner &&
      divs[2].className === "div3 X" &&
      divs[5].className === "div6 X" &&
      divs[8].className === "div9 X"
    ) {
      addClasses(divs[2], divs[5], divs[8]);
      iswinner = true;
      nextPlayer.textContent = "برنده : X";
    }
    // -------for O ------
    if (
      !iswinner &&
      divs[0].className === "div1 O" &&
      divs[1].className === "div2 O" &&
      divs[2].className === "div3 O"
    ) {
      addClasses(divs[0], divs[1], divs[2]);
      nextPlayer.textContent = "برنده : O";
      iswinner = true;
    } else if (
      !iswinner &&
      divs[3].className === "div4 O" &&
      divs[4].className === "div5 O" &&
      divs[5].className === "div6 O"
    ) {
      addClasses(divs[3], divs[4], divs[5]);
      iswinner = true;
      nextPlayer.textContent = "برنده : O";
    } else if (
      !iswinner &&
      divs[6].className === "div7 O" &&
      divs[7].className === "div8 O" &&
      divs[8].className === "div9 O"
    ) {
      addClasses(divs[6], divs[7], divs[8]);
      iswinner = true;
      nextPlayer.textContent = "برنده : O";
    } else if (
      !iswinner &&
      divs[0].className === "div1 O" &&
      divs[4].className === "div5 O" &&
      divs[8].className === "div9 O"
    ) {
      addClasses(divs[0], divs[4], divs[8]);
      iswinner = true;
      nextPlayer.textContent = "برنده : O";
    } else if (
      !iswinner &&
      divs[2].className === "div3 O" &&
      divs[4].className === "div5 O" &&
      divs[6].className === "div7 O"
    ) {
      addClasses(divs[2], divs[4], divs[6]);
      iswinner = true;
      nextPlayer.textContent = "برنده : O";
    } else if (
      !iswinner &&
      divs[0].className === "div1 O" &&
      divs[3].className === "div4 O" &&
      divs[6].className === "div7 O"
    ) {
      addClasses(divs[0], divs[3], divs[6]);
      iswinner = true;
      nextPlayer.textContent = "برنده : O";
    } else if (
      !iswinner &&
      divs[1].className === "div2 O" &&
      divs[4].className === "div5 O" &&
      divs[7].className === "div8 O"
    ) {
      addClasses(divs[1], divs[4], divs[7]);
      iswinner = true;
      nextPlayer.textContent = "برنده : O";
    } else if (
      !iswinner &&
      divs[2].className === "div3 O" &&
      divs[5].className === "div6 O" &&
      divs[8].className === "div9 O"
    ) {
      addClasses(divs[2], divs[5], divs[8]);
      iswinner = true;
      nextPlayer.textContent = "برنده : O";
    }
    if (pcsXO === 9 && !iswinner) {
      iswinner = true;
      nextPlayer.textContent = "مساوی";
    }
    divs.forEach((item) => {
      if (iswinner) {
        timeOut = setTimeout(() => {
          next = true;
          iswinner = false;
          item.classList.remove("active");
          item.classList.remove("X");
          item.classList.remove("O");
          item.textContent = "";
          nextPlayer.textContent = "حرکت بعدی : X";
          pcsXO = 0;
        }, 2000);
      }
    });
  });
});

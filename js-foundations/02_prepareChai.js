function chaiWithMasala(tea) {
  if (typeof tea !== "string") {
    return "please add tea type";
  }
  if (tea && tea.toLowerCase().includes("masala")) {
    return "add masala";
  } else {
    return "regular tea";
  }
}
console.log(chaiWithMasala());
console.log(chaiWithMasala("Masala"));
console.log(chaiWithMasala("milk tea"));

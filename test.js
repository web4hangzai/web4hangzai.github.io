// test js scripts 

// clear
console.clear();

const log = document.querySelectorAll("#logo path");

// used for logo test
console.log(logo);

// used for svg test
for (let i = 0; i < logo.length; i++) {
    console.log(`letter %{i} is ${logo[i].getTotalLength()}`);
}
const names = ["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"];
const ages = [32, 30, 26, 28, 44];

const filteredNames = [];
for (let i = 0; i < ages.length; i++) {
    if (ages[i] > 30) {
        filteredNames.push(names[i]);
    }
}

let output = '';
for (let i = 0; i < filteredNames.length; i++) {
    output += ' ' + filteredNames[i];
}

console.log(output);

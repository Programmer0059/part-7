const name = ['Josh', 'Vagnomann', 'Hermann', 'Flick'];
const ages = [12, 15, 16, 19, 22];
const ages2 = [98, 55, 76, 29, 75];
const all = name.concat(ages).concat(ages2).concat(['Neuer', 'Lahm']);
console.log(all);

const all2 = [...name,...ages,...ages2];
console.log(all2);

const power = [100, 200, 600, 900];
const bigger = Math.max(...power);
console.log(bigger);
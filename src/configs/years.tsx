let years = [];
const thisYears = new Date().getFullYear();
for (let i = -4; i < 1; i++) {
  years.push({
    value: thisYears + i,
    label: thisYears + i,
  });
}

export default years;

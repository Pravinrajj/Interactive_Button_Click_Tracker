function createCounter() {
    let count = 0;
    return function() {
      count++;
      return count;
    };
}
const counter = createCounter();
const btn = document.getElementById('clickbtn');
const dis = document.getElementById('count');
btn.addEventListener('click', () => {
    const count = counter();
    dis.textContent = `You have clicked: ${count} times`;
});
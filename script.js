
const headshotSlider = document.getElementById('headshot');
const headshotValue = document.getElementById('headshot-value');

headshotSlider.addEventListener('input', () => {
  headshotValue.textContent = headshotSlider.value + '%';
});

function confirmSettings() {
  alert('ตั้งค่าเสร็จเรียบร้อย!');
}

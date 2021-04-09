import './styles.css';

const btn1 = document.querySelector('#btn1');
const mainDiv = document.querySelector('.mainDiv');

btn1.addEventListener('click', () => {
    alert('asd')
})



function colorTransition() {
    let colors = ['0, 0, 0, 0.100', '0, 0, 0, 0.300', '0, 0, 0, 0.200',];
    for (let i = 0; i < colors.length; i++) {
        return 'rgba' + (Math.random(colors))
        console.log(colors);
    }
    
}

// function changing() {
//     mainDiv.style.backroundColor = colorTransition();
//     setTimeout(changing, 1000)
// }

changing();
colorTransition();
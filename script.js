const prevButton = document.getElementById('prev'); // botão anterior / prev button
const nextButton = document.getElementById('next'); // botão próximo / next button
const items = document.querySelectorAll('.item'); // slides / slides
const dots = document.querySelectorAll('.dot'); // indicadores / dots
const numberIndicator = document.querySelector('.numbers'); // contador numérico / number indicator
const list = document.querySelector('.list'); // container dos slides / slides container

let active = 0; // slide ativo / active slide
const total = items.length; // total de slides / total slides
let timer; // temporizador / timer

function update(direction) {
    items[active].classList.remove('active'); // remove ativo / remove active
    dots[active].classList.remove('active'); // remove ponto ativo / remove active dot

    if (direction > 0) { 
        active = active + 1; // próximo slide / next slide
        if (active === total) active = 0; // volta ao início / loop to start
    } else if (direction < 0) {
        active = active - 1; // slide anterior / previous slide
        if (active < 0) active = total - 1; // vai para o último / go to last
    }

    items[active].classList.add('active'); // ativa slide / activate slide
    dots[active].classList.add('active'); // ativa ponto / activate dot

    numberIndicator.textContent = String(active + 1).padStart(2, '0'); // atualiza contador / update number
}

clearInterval(timer); // limpa timer / clear timer
timer = setInterval(() => update(1), 5000); // autoplay / auto change every 5s

prevButton.addEventListener('click', () => {
    update(-1); // clique anterior / prev click
});

nextButton.addEventListener('click', () => {
    update(1); // clique próximo / next click
});

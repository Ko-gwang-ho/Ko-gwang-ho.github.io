const darkModeBtn = document.querySelector('.dark-mode .btn');
let darkModeText = document.querySelector('.dark-mode .text span');

const userTheme = localStorage.getItem('color-theme');
const osTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

// 사용자 테마 함수
const getUserTheme = () => (userTheme ? userTheme : osTheme);

// 다크 모드 적용 함수
const themeDark = () => {
    localStorage.setItem('color-theme', 'dark');
    document.documentElement.setAttribute('color-theme', 'dark');
    darkModeText.innerText = "Dark Mode";
}

// 라이트 모드 적용 함수
const themeLight = () => {
    localStorage.setItem('color-theme', 'light');
    document.documentElement.setAttribute('color-theme', 'light');
    darkModeText.innerText = "Light Mode";
}

// 사이트 로딩 시 체크
window.onload = () => {
    if (getUserTheme() === 'dark') {
        themeDark();
        darkModeBtn.setAttribute('checked', true);
    } else themeLight();
}

// 다크 버튼 클릭 시 전환
darkModeBtn.addEventListener('click', e => {
    if (e.target.checked) themeDark();
    else themeLight();
});
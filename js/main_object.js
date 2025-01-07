const mainObj = document.querySelector('.main-object');
const mainObjSvg = document.querySelectorAll('.main-object .object-con');

// 인트로 버튼 클릭 모션
const mainCon = document.querySelector('.main-con');

const introTop = document.querySelector('.intro.top');
const introBottom = document.querySelector('.intro.bottom');
const introLines = document.querySelectorAll('.intro .line');
const objBg = document.querySelectorAll(".object-bg");

const abWrap = document.querySelector('.object-ability-wrap');
const abCircle = document.querySelector('.ability-circle');
const abItem = document.querySelectorAll('.ability-item');
const abItemText = document.querySelector('.ability-item .text');

const objLoad = document.querySelector('.object-load');
const objProjectList = document.querySelector('.object-project-list');

const topBtn = document.querySelector('.fix-btn.top');
const listBtn = document.querySelector('.fix-btn.list');

// 등장 모션
mainObjSvg[1].addEventListener('click', () => {
    document.querySelector('body').classList.remove('screen-lock');

    mainObjSvg[0].style.transform = `scale(0)`;
    mainObjSvg[0].style.opacity = `0`;

    mainObjSvg[3].style.transform = `rotate(0deg)`;
    mainObjSvg[4].style.transform = `rotate(0deg)`;
    
    for( let i = 5; i < mainObjSvg.length; i++ ) {
        mainObjSvg[i].style.transform = `scale(1)`;
    }

    introLines.forEach((line) => {
        line.style.width = `100%`;
    });

    objBg.forEach((bg) => {
        bg.style.width = `100%`;
        bg.style.filter = `blur(0px)`;
    });


    introTop.style.top = `-100%`;
    introBottom.style.bottom = `-100%`;

    abWrap.style.transform = `scale(1)`;

    topBtn.style.display = `flex`;
    listBtn.style.display = `flex`;
});

// 스크롤 모션

// mainCon
// mainObj.animate(
//     [
//         { transform: 'scale(1)' },
//         { transform: 'scale(5)' }
//     ],
//     {
//         fill: 'both',
//         timeline: new ScrollTimeline({
//             scrollOffsets: [
//                 { target: mainCon, edge: 'start', threshold: .13 },
//                 { target: mainCon, edge: 'end', threshold: 1 }
//             ]
//         })
//     }
// )

// abCircle
abCircle.animate(
    [
        { transform: 'translate(-50%, -50%) scale(1)', offset: .3 },
        { transform: 'translate(-50%, -50%) scale(0)', offset: .8 },
        { transform: 'translate(-50%, -50%) scale(0)', offset: 1 }
    ],
    {
        fill: 'both',
        timeline: new ScrollTimeline({
            scrollOffsets: [
                { target: mainCon, edge: 'start', threshold: .13 },
                { target: mainCon, edge: 'end', threshold: 1 }
            ]
        })
    }
)

// abItem
const adKeyframes = (start, end) => [
    { ...start, width: '0px', height: '0px', opacity: '0'},
    { ...start, width: '85%', height: '85%', opacity: '1', offset: .3},
    { ...start, width: '85%', height: '85%', opacity: '1', offset: .7},
    { ...end, width: '10%', height: '10%'},
];

const poStart = [
    { top: '0%' },
    { top: '0%', right: '0%' },
    { right: '0%' },
    { bottom: '0%', right: '0%' },
    { bottom: '0%' },
    { bottom: '0%', left: '0%' },
    { left: '0%' },
    { top: '0%', left: '0%' },
    { top: '0%', right: '0%' },
];

const poEnd = [
    { top: '-100%' },
    { top: '-70%', right: '-70%' },
    { right: '-100%' },
    { bottom: '-70%', right: '-70%' },
    { bottom: '-100%' },
    { bottom: '-70%', left: '-70%' },
    { left: '-100%' },
    { top: '-70%', left: '-70%' },
    { top: '-70%', right: '-70%' },
];

abItem.forEach((item, index) => {
    const start = poStart[index];
    const end = poEnd[index];

    const delayFactor = 0.1;
    const starThreshold = Math.max(1 - index * delayFactor, 0);
    const endThreshold = Math.min(.2 + index * delayFactor, 1);

    item.animate(
        adKeyframes(start, end),
        {
            fill: 'both',
            timeline: new ScrollTimeline({
                scrollOffsets: [
                    { target: mainCon, edge: 'start', threshold: starThreshold },
                    { target: mainCon, edge: 'end', threshold: endThreshold }
                ]
            })
        }
    );
    
    item.querySelector('.text').animate(
        [
            { transform: 'scale(1)', opacity: '1', offset: .75},
            { transform: 'scale(0)', opacity: '0', }
        ],
        {
            fill: 'both',
            timeline: new ScrollTimeline({
                scrollOffsets: [
                    { target: mainCon, edge: 'start', threshold: starThreshold },
                    { target: mainCon, edge: 'end', threshold: endThreshold }
                ]
            })
        }
    );

    item.querySelector('.img').animate(
        [
            { opacity: '.1', },
            { opacity: '.1', offset: .75},
            { opacity: '1', }
        ],
        {
            fill: 'both',
            timeline: new ScrollTimeline({
                scrollOffsets: [
                    { target: mainCon, edge: 'start', threshold: starThreshold },
                    { target: mainCon, edge: 'end', threshold: endThreshold }
                ]
            })
        }
    );
});

objLoad.animate(
    [
        { transform: 'scale(0)' },
        { transform: 'scale(5)' }
    ],
    {
        fill: 'both',
        timeline: new ScrollTimeline({
            scrollOffsets: [
                { target: mainCon, edge: 'start', threshold: .13 },
                { target: mainCon, edge: 'end', threshold: 1 }
            ]
        })
    }
);

objProjectList.animate(
    [
        { transform: 'scale(0)' },
        { transform: 'scale(1)' }
    ],
    {
        fill: 'both',
        timeline: new ScrollTimeline({
            scrollOffsets: [
                { target: mainCon, edge: 'start', threshold: .12 },
                { target: mainCon, edge: 'end', threshold: 1 }
            ]
        })
    }
);

topBtn.addEventListener('click', () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
});

listBtn.addEventListener('click', () => {
    let mainConHeight = mainCon.offsetHeight;

    window.scrollTo({top: mainConHeight, left: 0, behavior: 'smooth'});
});
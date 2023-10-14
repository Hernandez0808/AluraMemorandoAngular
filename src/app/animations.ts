import { animate, state, style, transition, trigger } from '@angular/animations';

export const highlightedStateTrigger = trigger('highlightedState', [
  state('default', style({
    border: '2px solid #B2B6FF'
  })),
  state('highlighted', style({
    border: '4px solid #B2B6FF',
    filter: 'brightness(92%)'
  })),
  transition('default => highlighted', [
    animate('200ms ease-out', style({
      transform: 'scale(1.02)'
    })),
    animate(200)
  ])
]);

export const showStateTrigger = trigger('shownState', [
    transition(':enter', [
        style({
            opacity:0
        }),
        animate(300, style({
            opacity:1
        }))
    ]),
    transition(':leave',[
        animate(300,style({
            opacity:0
        }))
    ])
]);


//aplicando animação em elementos não anexados ao dom 
// export const showStateTrigger = trigger('shownState', [
//     state('shown', style({

//     })),
//     transition('void => shown', [
//         style({
//             opacity:0
//         }),
//         animate(300, style({
//             opacity:1
//         }))
//     ]),
//     transition('shown => void',[
//         animate(300,style({
//             opacity:0
//         }))
//     ])
// ]);


//aplicando animação em elementos não anexados ao dom com estado void "coringa"
// export const showStateTrigger = trigger('shownState', [
//     transition('void => *', [
//         style({
//             opacity:0
//         }),
//         animate(300, style({
//             opacity:1
//         }))
//     ]),
//     transition('* => void',[
//         animate(300,style({
//             opacity:0
//         }))
//     ])
// ]);
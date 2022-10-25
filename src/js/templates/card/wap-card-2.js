import { txtStyle, btnStyle, imgStyle, containerStyle } from '../default-styles';

import imgUrl from '../../../assets/imgs/cards/who-we-are.jpg';

export const wapCard_2 = {
    "id": "2p6jtdpsgojasd",
    "type": "container",
    "category": "wap-card",
    "className": "wap-card-2",
    "thumbnail": "http://res.cloudinary.com/dpmzxdfuh/image/upload/v1642884667/dtiqqdzshg4yj10x30tr.jpg",
    "style": { ...containerStyle, "paddingInline": "30", "paddingBlock": "50" },
    "cmps": [
        {
            "id": "alkdfsjlk34jt5lksjxc",
            "type": "img", // CARD IMG (LEFT)
            "url": imgUrl,
            "style": { ...imgStyle, "borderRadius": "20", "width": "450" }
        },
        {
            "id": "45356dgfasdf",
            "type": "container", // CARD TEXT CONTAINER (RIGHT)
            "style": { ...containerStyle, "paddingInline": "0" },
            "cmps": [
                {
                    "id": "sdgkjlk34j6tlkscj",
                    "type": "txt", // TITLE
                    "txt": "ABOUT",
                    "style": { ...txtStyle, "color": "#0000008c", "fontSize": "12" }
                },
                {
                    "id": "zxc2l3k5jtrlad",
                    "type": "txt", // SUBTITLE
                    "txt": "Who we are",
                    "style": { ...txtStyle, "fontSize": "20" }
                },
                {
                    "id": "sdgjp573ojwptgjm",
                    "type": "txt", // PARAGRAPH
                    "txt": "Nulla vel sodales tellus, quis condimentum enim. Nunc porttitor venenatis feugiat. Etiam quis faucibus erat, non accumsan leo. Aliquam erat volutpat. Vestibulum ac faucibus eros. Cras ullamcorper gravida tellus ut consequat.",
                    "style": { ...txtStyle }
                }]
        }]
}
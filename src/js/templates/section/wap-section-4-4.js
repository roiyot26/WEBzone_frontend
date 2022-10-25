import { txtStyle, btnStyle, imgStyle, containerStyle } from '../default-styles';
import pot from '../../../assets/imgs/template_4/pot.png'

export const wapSection_4_4 = {
    "id": "dheaasdDDDdddDDDDddDdjssdfkj2349876",
    "type": "container",
    "category": "wap-section",
    "className": "wap-section-4-4-container",
    "thumbnail": "http://res.cloudinary.com/dpmzxdfuh/image/upload/v1643279376/zsos13ax61stlolysdil.jpg",
    "style": {
        ...containerStyle,
        "paddingInline": "40",
        "paddingBlock": "0"
    },
    "cmps": [
        {
            "id": "sdfkjhsdfuiewr92347sdfkj",
            "type": "container",
            "className": "wap-section-4-4 flex justify-center align-center",
            "style": {
                ...containerStyle,
                "paddingInline": "0",
                "paddingBlock": "150",
            },
            "cmps": [

                {
                    "id": "sdfjkhxkvvvbbbnnmckslsporn12123449574",
                    "type": "container",
                    "className": "section-4-4-txt-container",
                    "style": { ...containerStyle },
                    "cmps": [
                        {
                            "id": "ffffjjjjffffjjjfdjkls3234JHGd",
                            "type": "txt",
                            "txt": "Simply The Best",
                            "style": {
                                ...txtStyle,
                                "fontSize": "30"
                            }
                        },
                        {
                            "id": "aaasdjhfjdskdfxcvSDFXCsdfXCvSDf234e2345",
                            "type": "txt",
                            "txt": "We know everyone likes to brag about their coffee-making abilities.But here , in CoffeeClub, It\'s our ambition.",
                            "style": {
                                ...txtStyle,

                            }
                        },
                        {
                            "id": "vbcn2345899dADshcj",
                            "type": "btn",
                            "className": "btn",
                            "url": "https://www.google.com",
                            "txt": "Give It To Me Now!",
                            "style": {
                                ...btnStyle,
                                "textAlign": "center",
                                "fontSize": "20",
                                "color": "#1b1b1b",
                                "backgroundColor": "#ffffff",
                                "borderRadius": "1000"
                            }
                        },

                    ]
                },
                {
                    "id": "qweqwekkkfodppdosurher633",
                    "type": "img",
                    "className": "pot",
                    "url": pot,
                    "style": { ...imgStyle, "width": "470" }
                },
            ]

        },

    ]
}
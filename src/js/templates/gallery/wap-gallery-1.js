import { txtStyle, btnStyle, imgStyle, containerStyle } from '../default-styles';
export const wapGallery_1 = {
    "id": "sdjS6dg",
    "type": "container",
    "category": "wap-gallery",
    "className": "wap-gallery-1",
    "thumbnail": "http://res.cloudinary.com/dpmzxdfuh/image/upload/v1642884869/qiuwysb9f15spo7nclqc.jpg",
    "style": {
        ...containerStyle,
        "paddingInline": "0",
        "paddingBlock": "100"
    },
    "cmps": [
        {
            "id": "ffffd8sE3s",
            "type": "txt",
            "txt": "Gallery",
            "style": {
                ...txtStyle,
                "color": "#000000",
                "textAlign": "center",
                "fontSize": "30",
                "letterSpacing": "1",
                "textShadow": "1px 1px 3px #000000",
                "fontFamily": "quicksand",
            }
        },
        {
            "id": "dhss8s",
            "type": "container",
            "style": {
                ...containerStyle,
                // "paddingInline": "100",
                // "paddingBlock": "100"
            },
            "cmps": [
                {
                    "id": "dfkF43",
                    "type": "img",
                    "url": "https://images.pexels.com/photos/1190690/pexels-photo-1190690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                    "style": { ...imgStyle, "width": "300" }
                },
                {
                    "id": "d83jfy",
                    "type": "img",
                    "url": "https://images.pexels.com/photos/848573/pexels-photo-848573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                    "style": { ...imgStyle, "width": "300" }
                },
                {
                    "id": "ssGFD453",
                    "type": "img",
                    "url": "https://images.pexels.com/photos/147359/pexels-photo-147359.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                    "style": { ...imgStyle, "width": "300" }
                },
                {
                    "id": "ASD5g3d",
                    "type": "img",
                    "url": "https://images.pexels.com/photos/450038/pexels-photo-450038.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                    "style": { ...imgStyle, "width": "300" }
                },
            ]
        }
    ]
}
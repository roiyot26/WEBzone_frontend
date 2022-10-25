import { txtStyle, btnStyle, imgStyle, containerStyle } from '../default-styles';

export const wapSection_8 = {
   "id": "54fd3s1sd3sd6",
   "type": "container",
   "category": "wap-section",
   "className": "wap-section-8 flex column",
   // "thumbnail": "http://res.cloudinary.com/dpmzxdfuh/image/upload/v1643475880/t2rb9onq8q3fjg7ruw0y.png",
   "thumbnail": "http://res.cloudinary.com/dpmzxdfuh/image/upload/v1643670927/pjqcicdpnfoq7lr0umyz.png",
   "style": { ...containerStyle, "paddingInline": "0", },
   "cmps": [
      {
         "id": "FG52D41G51",
         "type": "container",
         "style": { ...containerStyle, "paddingInline": "0", "paddingBlock": "60", "paddingInline": "20", "backgroundImage": "linear-gradient(29deg, rgb(3 5 18), rgb(122 67 212))" },
         "className": "layout-container flex",
         "cmps": [
            //Img (left)
            // https://yourcryptolibrary.com/wp-content/uploads/2021/11/coins-crypto.png
            {
               "id": "S1DF6565FG1H6DFGH",
               "type": "img",
               "url": "http://res.cloudinary.com/dpmzxdfuh/image/upload/v1643664750/vy7pdf83k5liwqunpbca.png",
               "style": { ...imgStyle, "width": "460" }
            },
            //Content (right)
            {
               "id": "JKL131H51K",
               "type": "container",
               "style": { ...containerStyle, "paddingInline": "0", "paddingBlock": "0", "backgroundColor": "transparent" },
               "className": "content-container flex column",
               "cmps": [
                  {
                     "id": "df1bdf1bv3df1vb3df01vb",
                     "type": "txt",
                     "txt": "BUILDING BRANDS ON THE MARKET",
                     "style": { ...txtStyle, "fontFamily": "montserrat", "color": "#f6f6f6" }
                  },
                  {
                     "id": "BA11B65B",
                     "type": "txt",
                     "txt": "Crypto is the future",
                     "style": { ...txtStyle, "fontFamily": "montserrat", "fontWeight": "700", "fontSize": "40", "color": "#f6f6f6" }
                  },
                  //Buttons container
                  {
                     "id": "d3sf216sd5f1sdf",
                     "type": "container",
                     "style": { ...containerStyle, "paddingInline": "0", "paddingBlock": "0", "backgroundColor": "transparent" },
                     "className": "btns-container flex",
                     "cmps": [
                        {
                           "id": "684sdf68df684gvdf68v",
                           "type": "btn",
                           "url": "https://www.google.com",
                           "txt": "Purchase now",
                           "className": "cta",
                           "style": { ...btnStyle, "borderRadius": "10", "color": "#1d1654" }
                        },
                        {
                           "id": "ju15jh4h5h1g1fg",
                           "type": "btn",
                           "url": "https://www.google.com",
                           "txt": "Learn More",
                           "className": "sub-btn",
                           "style": { ...btnStyle, "borderRadius": "10", "backgroundColor": "transparent", "color": "#f6f6f6" }
                        }
                     ]
                  }
               ]
            }
         ]
      }
   ]
}

// contrast(0.8) hue-rotate(201deg)
// https://www.thegatewaydigital.com/wp-content/uploads/2020/07/Services_Cognitive_DLT-Services_Crypto-Services.png
// https://yourcryptolibrary.com/wp-content/uploads/2021/11/coins-crypto.png
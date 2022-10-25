import { txtStyle, btnStyle, imgStyle, containerStyle } from '../default-styles';

export const wapHeader_8 = {
   "id": "3d1fsd2fs4fd45fdg",
   "type": "container",
   "category": "wap-header",
   "className": "wap-header-8",
   "thumbnail": "http://res.cloudinary.com/dpmzxdfuh/image/upload/v1643475609/g2sg4e8uxsi7evwczsvh.png",
   "style": { ...containerStyle, "backgroundColor": "#0b0b0b", "paddingInline": "0", "paddingBlock": "20", },
   "cmps": [
      {
         "id": "2h65gj4165ghj1hj",
         "type": "container",
         "style": { ...containerStyle, "paddingInline": "0", "paddingBlock": "0", "backgroundColor": "transparent" },
         "className": "layout-container",
         "cmps": [
            //Header
            {
               "id": "fg5h4hn41hnfghn",
               "type": "container",
               "style": { ...containerStyle, "paddingInline": "0", "paddingBlock": "0", "backgroundColor": "transparent" },
               "className": "header flex",
               "cmps": [
                  {
                     "id": "s1g55xfgh415j41",
                     "type": "txt",
                     "txt": "Ziggo.",
                     "style": { ...txtStyle, "color": "#efefee", "fontSize": "29" }
                  },
                  //NAV
                  {
                     "id": "ol652l1h2l1jk",
                     "type": "container",
                     "style": { ...containerStyle, "paddingInline": "0", "paddingBlock": "0", "backgroundColor": "#ffffff00" },
                     "className": "nav flex",
                     "cmps": [
                        //Nav links
                        {
                           "id": "fmdsfdsfsdffgfg",
                           "type": "btn",
                           "url": "#",
                           "txt": "HOME",
                           "style": { ...btnStyle, "backgroundColor": "#ffffff00", "color": "#fcfcfc" }
                        },
                        {
                           "id": "jh516gh4jn6fg41hfd",
                           "type": "btn",
                           "url": "#",
                           "txt": "ABOUT",
                           "style": { ...btnStyle, "backgroundColor": "#ffffff00", "color": "#fcfcfc" }
                        },
                        {
                           "id": "d35df35fdf",
                           "type": "btn",
                           "url": "#",
                           "txt": "CLIENTS",
                           "style": { ...btnStyle, "backgroundColor": "#ffffff00", "color": "#fcfcfc", "color": "#fcfcfc" }
                        }
                     ]
                  },
                  //Social media icons
                  {
                     "id": "yuj941hg3h1",
                     "type": "container",
                     "style": { ...containerStyle, "backgroundColor": "transparent", "paddingInline": "0", "paddingBlock": "0" },
                     "className": "media-icons flex",
                     "cmps": [
                        {
                           "id": "ohmtpbfdfghjfcg",
                           "type": "img",
                           "url": "http://res.cloudinary.com/dpmzxdfuh/image/upload/v1643553563/swxzjazqoj7u0ubx4bvl.png",
                           "style": { ...imgStyle, "width": "32" }
                        },
                        {
                           "id": "68435138",
                           "type": "img",
                           "url": "http://res.cloudinary.com/dpmzxdfuh/image/upload/v1643554674/fcorv0pc7urntyjlnsjy.png",
                           "style": { ...imgStyle, "width": "32" }
                        },
                        {
                           "id": "j5j44jghj1gh32j",
                           "type": "img",
                           "url": "http://res.cloudinary.com/dpmzxdfuh/image/upload/v1643553914/zsfjjag20cnsx5xwj2hr.png",
                           "style": { ...imgStyle, "width": "32" }
                        },
                        {
                           "id": "df65g63df1g3fg",
                           "type": "img",
                           "url": "https://cdn.iconscout.com/icon/free/png-256/hamburger-menu-462145.png",
                           "className": "hamburger",
                           "style": { ...imgStyle, "width": "32" }
                        },
                     ]
                  }
               ]
            },
         ]
      }
   ]
}
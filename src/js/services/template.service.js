// *** WAP Templates *** //
import { wapTemplate_1 } from '../templates/wap/wap-template-1';
import { wapTemplate_2 } from '../templates/wap/wap-template-2';
import { wapTemplate_3 } from '../templates/wap/wap-template-3';
import { wapTemplate_4 } from '../templates/wap/wap-template-4';
import { wapTemplate_5 } from '../templates/wap/wap-template-5';
import { wapTemplate_6 } from '../templates/wap/wap-template-6';
import { wapTemplate_7 } from '../templates/wap/wap-template-7';
import { wapTemplate_8 } from '../templates/wap/wap-template-8';


// Cards
import { wapCard_1 } from '../templates/card/wap-card-1';
import { wapCard_1_2 } from '../templates/card/wap-card-1-2';
import { wapCard_2 } from '../templates/card/wap-card-2';
import { wapCard_2_2 } from '../templates/card/wap-card-2-2';
import { wapCard_6 } from '../templates/card/wap-card-6';
import { wapCard_7 } from '../templates/card/wap-card-7';
import { wapCard_7_2 } from '../templates/card/wap-card-7-2';
import { wapCard_8 } from '../templates/card/wap-card-8';
// Footers
import { wapFooter_1 } from '../templates/footer/wap-footer-1';
import { wapFooter_2 } from '../templates/footer/wap-footer-2';
import { wapFooter_4 } from '../templates/footer/wap-footer-4';
// Forms
import { wapForm_3 } from '../templates/form/wap-form-3';
import { wapForm_6 } from '../templates/form/wap-form-6';
// Galleries
import { wapGallery_1 } from '../templates/gallery/wap-gallery-1';
import { wapGallery_3 } from '../templates/gallery/wap-gallery-3';
// Headers
import { wapHeader_1 } from '../templates/header/wap-header-1';
import { wapHeader_2 } from '../templates/header/wap-header-2';
import { wapHeader_7 } from '../templates/header/wap-header-7';
import { wapHeader_8 } from '../templates/header/wap-header-8';
// Heros
import { wapHero_1 } from '../templates/hero/wap-hero-1';
import { wapHero_2 } from '../templates/hero/wap-hero-2';
import { wapHero_3 } from '../templates/hero/wap-hero-3';
import { wapHero_4 } from '../templates/hero/wap-hero-4';
import { wapHero_5 } from '../templates/hero/wap-hero-5';
import { wapHero_6 } from '../templates/hero/wap-hero-6';
import { wapHero_7 } from '../templates/hero/wap-hero-7';
import { wapHero_8 } from '../templates/hero/wap-hero-8';
// Sections
import { wapSection_3 } from '../templates/section/wap-section-3';
import { wapSection_4 } from '../templates/section/wap-section-4';
import { wapSection_4_2 } from '../templates/section/wap-section-4-2';
import { wapSection_4_3 } from '../templates/section/wap-section-4-3';
import { wapSection_4_4 } from '../templates/section/wap-section-4-4';
import { wapSection_7 } from '../templates/section/wap-section-7';
import { wapSection_8 } from '../templates/section/wap-section-8';
// Texts
import { wapTxt_2 } from '../templates/txt/wap-txt-2';
import { wapTxt_7 } from '../templates/txt/wap-txt-7';
import { wapTxt_8 } from '../templates/txt/wap-txt-8';
import { wapTxt_8_2 } from '../templates/txt/wap-txt-8-2';
// Videos
import { wapVideo_5 } from '../templates/video/wap-video-5';


export const templateService = {
   getSectionsCategories,
   getWapTemplates,
   getWapTemplateById,
   getTemplateSections,
   getTemplateSectionById
}


const wapTemplates = [wapTemplate_7, wapTemplate_3, wapTemplate_6, wapTemplate_4, wapTemplate_8, wapTemplate_2, wapTemplate_1, wapTemplate_5,];

const sectionsCategories = ['wap-header', 'wap-hero', 'wap-section', 'wap-text', 'wap-card', 'wap-gallery', 'wap-form', 'wap-video', 'wap-footer']; // ,'wap-map'

const templateSections = [
   // Cards
   wapCard_7,
   wapCard_8,
   wapCard_1,
   wapCard_1_2,
   wapCard_6,
   wapCard_2_2,
   wapCard_2,
   wapCard_7_2,
   // Footers
   wapFooter_1,
   wapFooter_2,
   wapFooter_4,
   // Form
   wapForm_3,
   wapForm_6,
   // Galleries
   wapGallery_3,
   wapGallery_1,
   // Headers
   wapHeader_1,
   wapHeader_2,
   wapHeader_7,
   wapHeader_8,
   // Heros
   wapHero_4,
   wapHero_5,
   wapHero_6,
   wapHero_7,
   wapHero_8,
   wapHero_1,
   wapHero_2,
   wapHero_3,
   // Sections
   wapSection_3,
   wapSection_4_4,
   wapSection_7,
   wapSection_4_3,
   wapSection_8,
   wapSection_4,
   wapSection_4_2,
   // Texts
   wapTxt_8_2,
   wapTxt_7,
   wapTxt_8,
   wapTxt_2,
   // Videos
   wapVideo_5
]

function getWapTemplates() {
   return wapTemplates;
}

function getWapTemplateById(wapTemplateId) {
   return wapTemplates.find(wapTemplate => wapTemplate._id === wapTemplateId);
}

function getTemplateSections() {
   return templateSections;
}

function getTemplateSectionById(templateSectionId) {
   return templateSections.find(templateSection => templateSection.id === templateSectionId);
}

function getSectionsCategories() {
   return sectionsCategories;
}
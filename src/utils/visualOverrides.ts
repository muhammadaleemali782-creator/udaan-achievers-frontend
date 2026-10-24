import { VisualOverrideItem } from '../types';

export const DEFAULT_SECTION_ORDER = [
  'hero',
  'about',
  'methodology',
  'ad_top',
  'courses',
  'batches',
  'guarantee',
  'what_we_do',
  'ad_middle',
  'study-material',
  'syllabus',
  'videos',
  'reviews',
  'instagram',
  'gallery',
  'app_download',
  'admission',
  'faq',
  'contact'
];

export const applyVisualOverrides = (overrides?: Record<string, VisualOverrideItem | any>) => {
  if (!overrides || typeof overrides !== 'object') return;

  Object.values(overrides).forEach((item: any) => {
    if (!item) return;

    let targetEl: HTMLElement | null = null;
    if (item.selector) {
      const selLower = item.selector.toLowerCase();
      if (selLower.includes('milestone') || (selLower.includes('about-section') && selLower.includes('div:nth-of-type(3)'))) {
        return;
      }
      try {
        targetEl = document.querySelector(item.selector);
      } catch (e) {}
    }

    if (targetEl) {
      if (item.isHidden || item.display === 'none') {
        targetEl.style.display = 'none';
      }
      if (item.type === 'image' && item.value) {
        if (targetEl.tagName === 'IMG') {
          const img = targetEl as HTMLImageElement;
          if (img.src !== item.value) {
            img.src = item.value;
          }
        } else {
          targetEl.style.backgroundImage = `url("${item.value}")`;
        }
      } else if (item.value && item.value.trim().length > 0) {
        if (targetEl.children.length === 0) {
          let textVal = item.value;
          const isPriceOrFee = targetEl.getAttribute('data-course-field') === 'fee' ||
                               targetEl.getAttribute('data-course-field') === 'discountFee' ||
                               targetEl.classList.contains('line-through') ||
                               textVal.includes('₹') ||
                               /^\d{4,}$/.test(textVal.trim());
          if (isPriceOrFee) {
            const rawDigits = textVal.replace(/[^\d]/g, '');
            if (rawDigits && !isNaN(Number(rawDigits))) {
              const formatted = Number(rawDigits).toLocaleString('en-IN');
              textVal = textVal.includes('₹') ? `₹${formatted}` : (targetEl.getAttribute('data-course-field') ? `₹${formatted}` : formatted);
            }
          }
          if (targetEl.innerText !== textVal) {
            targetEl.innerText = textVal;
          }
        }
      }

      if (item.backgroundColor) {
        const bg = (item.backgroundColor || '').toLowerCase().trim();
        const isWhite = bg === '#ffffff' || bg === '#fff' || bg === 'white' || bg === 'rgb(255, 255, 255)';
        const isTextOrInline = ['SPAN', 'P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'B', 'STRONG', 'EM', 'A', 'LABEL'].includes(targetEl.tagName) || Boolean(targetEl.closest('button')) || Boolean(targetEl.closest('a'));
        if (isWhite && isTextOrInline) {
          if (targetEl.style.backgroundColor) {
            targetEl.style.backgroundColor = '';
          }
        } else if (targetEl.style.backgroundColor !== item.backgroundColor) {
          targetEl.style.backgroundColor = item.backgroundColor;
        }
      }
      if (item.textColor && targetEl.style.color !== item.textColor) {
        targetEl.style.color = item.textColor;
      }
    }
  });
};

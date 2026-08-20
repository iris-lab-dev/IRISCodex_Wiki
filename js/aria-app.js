import { ariaPage } from './data.js';
import { affiliationCard, profileCard, sidebar, tableOfContents, wikiHeader, wikiSection } from './components.js';

const app = document.querySelector('#app');
const { brand, affiliation, profile, toc, sections, recent } = ariaPage;

document.documentElement.style.setProperty('--brand', brand.accent);
app.innerHTML = `
  ${wikiHeader({ brand })}
  <main class="page-shell">
    <article class="wiki-document">
      <div class="document-heading" id="overview"><span class="eyebrow">IRISTV / CREATOR</span><h1>${profile.name}</h1><p>최근 수정 시각: 2026-08-19 16:20:00</p></div>
      <div class="document-tools"><span>분류: <a href="/c/IRISTV/">IRISTV</a> | <a href="/c/IRISTV%20%EC%86%8C%EC%86%8D%20%ED%81%AC%EB%A6%AC%EC%97%90%EC%9D%B4%ED%84%B0/">IRISTV 소속 크리에이터</a></span><div><button type="button">☆</button><button type="button">편집</button><button type="button">토론</button></div></div>
      ${affiliationCard({ affiliation })}
      <div class="content-grid"><div class="toc-column">${tableOfContents({ toc })}</div><div class="article-column">${profileCard({ profile })}${sections.map((section, index) => wikiSection({ section, index: index + 1 })).join('')}</div></div>
    </article>
    ${sidebar({ recent })}
  </main>`;

document.querySelector('.search-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const input = event.currentTarget.querySelector('input');
  input.setCustomValidity(input.value ? '샘플 화면에서는 검색 기능을 제공하지 않습니다.' : '검색어를 입력해 주세요.');
  input.reportValidity();
  input.setCustomValidity('');
});

document.querySelector('.toc-toggle').addEventListener('click', (event) => {
  const tocElement = event.currentTarget.closest('.toc');
  const isOpen = tocElement.classList.toggle('is-open');
  event.currentTarget.setAttribute('aria-expanded', String(isOpen));
});

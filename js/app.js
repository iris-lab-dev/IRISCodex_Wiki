import { homePage } from './data.js';
import { guideList, popularTable, sidebar, siteFooter, wikiHeader } from './components.js';

const app = document.querySelector('#app');
const { brand, updatedAt, intro, guides, popular, recent } = homePage;

document.documentElement.style.setProperty('--brand', brand.accent);
app.innerHTML = `
  ${wikiHeader({ brand })}
  <main class="page-shell">
    <article class="wiki-document" id="overview">
      <header class="document-heading"><h1>아이리스도감:대문</h1><p>최근 수정 시각: ${updatedAt}</p></header>
      <div class="document-tools"><span>분류: <a href="#popular">아이리스도감</a></span><div><button type="button">☆</button><button type="button">편집</button><button type="button">토론</button><button type="button" aria-label="더 보기">⋮</button></div></div>
      <section class="welcome"><h2>${intro.title} <em>${intro.emphasis}</em></h2><strong>아이리스도감에 오신 것을 환영합니다!</strong>${intro.description.map((paragraph) => `<p>${paragraph}</p>`).join('')}</section>
      ${guideList({ guides })}
      ${popularTable({ popular })}
    </article>
    ${sidebar({ recent })}
  </main>
  ${siteFooter()}`;

document.querySelector('.search-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const input = event.currentTarget.querySelector('input');
  input.setCustomValidity(input.value ? '샘플 화면에서는 검색 기능을 제공하지 않습니다.' : '검색어를 입력해 주세요.');
  input.reportValidity();
  input.setCustomValidity('');
});

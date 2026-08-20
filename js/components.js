const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character]);

export const wikiHeader = ({ brand }) => `
  <header class="site-header">
    <a class="brand" href="#overview" aria-label="${escapeHtml(brand.name)} 홈"><span class="brand-mark">${escapeHtml(brand.mark)}</span><strong>${escapeHtml(brand.name)}</strong></a>
    <nav class="header-nav" aria-label="주요 메뉴"><a href="#overview">문서</a><a href="#recent">최근 변경</a><a href="#guide">도움말</a></nav>
    <form class="search-form" role="search"><input type="search" placeholder="아이리스도감에서 검색" aria-label="문서 검색" /><button type="submit" aria-label="검색">⌕</button></form>
    <button class="account-button" type="button" aria-label="사용자 메뉴">●</button>
  </header>`;

export const guideList = ({ guides }) => `
  <section class="guide-list" id="guide" aria-label="도감 이용 안내">
    ${guides.map((guide) => `<article class="guide-item"><span class="guide-icon" aria-hidden="true">${escapeHtml(guide.icon)}</span><div><h2>${escapeHtml(guide.title)}</h2><p>${escapeHtml(guide.description)}</p><div class="guide-links">${guide.links.map((link) => `<a href="#popular">${escapeHtml(link)}</a>`).join('')}</div></div></article>`).join('')}
  </section>`;

export const popularTable = ({ popular }) => `
  <section class="popular-section" id="popular"><div class="section-title"><h2>인기 문서</h2><a href="#recent">더 보기 ›</a></div><table><thead><tr><th>문서</th><th>설명</th></tr></thead><tbody>${popular.map(([title, description]) => `<tr><th scope="row"><a href="#overview">${escapeHtml(title)}</a></th><td>${escapeHtml(description)}</td></tr>`).join('')}</tbody></table></section>`;

export const sidebar = ({ recent }) => `
  <aside class="sidebar">
    <section class="side-panel live-panel"><h2>실시간 검색어</h2><ol><li><span>1</span><a href="#popular">IRISTV</a></li><li><span>2</span><a href="#popular">아리아 루멘</a></li><li><span>3</span><a href="#popular">노바 세린</a></li></ol></section>
    <section class="side-panel" id="recent"><h2>최근 변경 <a href="#recent" aria-label="최근 변경 더 보기">›</a></h2><ul>${recent.map((item, index) => `<li><a href="#overview">${escapeHtml(item)}</a><time>${index * 7 + 3}분 전</time></li>`).join('')}</ul></section>
    <section class="promo"><span>IRISTV CODEX</span><strong>모든 이야기를<br />기록하세요.</strong><p>함께 만드는 아이리스도감</p><a href="#guide">도감 시작하기 →</a></section>
  </aside>`;
